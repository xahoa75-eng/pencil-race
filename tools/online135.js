// Test du multi en ligne : un serveur PeerJS local (port 9000) + 2..4 pages Chromium qui jouent ensemble.
// usage : node tools/online135.js page_de_test.html [circuit] [joueurs] [tours]
const { chromium } = require('playwright');
const path = require('path');
const file = path.resolve(process.argv[2]);
const circuit = process.argv[3] || 'zigzag';
const N = parseInt(process.argv[4] || '2', 10);
const TURNS = parseInt(process.argv[5] || '10', 10);
const url = 'file://' + file + '?peerserver=127.0.0.1:9000' + (process.env.ONL_RELAY ? '&onlrelay=1' : '');
const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const br = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--disable-features=WebRtcHideLocalIpsWithMdns', '--no-sandbox'] });
  const pages = [];
  for (let i = 0; i < N; i++) {
    const ctx = await br.newContext({ viewport: { width: 390, height: 780 } });
    const pg = await ctx.newPage();
    pg.on('pageerror', e => console.log('ERREUR page', i, e.message));
    pg.on('console', m => { if (m.type() === 'error') console.log('console', i, m.text()); });
    await pg.goto(url);
    pages.push(pg);
  }
  const click = (pg, sel) => pg.evaluate(s => document.querySelector(s).click(), sel);
  const host = pages[0];
  await click(host, '[data-go="multi"]');
  await click(host, '[data-go="online"]');
  await click(host, '#onl-choose [data-go="online2"]');
  await host.evaluate(n => document.querySelector('#s-online2 .seg[data-key="players"] [data-val="' + n + '"]').click(), N);
  await host.evaluate(g => document.querySelector('#s-online2 .seg[data-key="goMulti"] [data-val="' + g + '"]').click(), process.env.ONL_GO || 'non');
  await click(host, '#s-online2 .valider');
  await host.evaluate(c => document.querySelector('#s-online3 [data-circuit="' + c + '"]').click(), circuit);
  await host.waitForFunction(() => /^[A-Z]{4}$/.test(document.getElementById('onlCode').textContent), null, { timeout: 15000 });
  const code = await host.evaluate(() => document.getElementById('onlCode').textContent);
  console.log('code', code);
  for (let i = 1; i < N; i++) {
    const g = pages[i];
    await click(g, '[data-go="multi"]');
    await click(g, '[data-go="online"]');
    await click(g, '#onl-choose [data-act="onl-join"]');
    await g.fill('#onlInput', code.toLowerCase());
    await click(g, '[data-act="onl-connect"]');
    await g.waitForFunction(() => /Tu es/.test(document.getElementById('onlStatus2').textContent), null, { timeout: 20000 });
    console.log('invité', i, await g.evaluate(() => document.getElementById('onlStatus2').textContent));
  }
  await host.waitForFunction(() => !document.getElementById('onlStart').disabled, null, { timeout: 10000 });
  console.log('statut hôte :', await host.evaluate(() => document.getElementById('onlStatus').textContent));
  await click(host, '[data-act="onl-start"]');
  for (const pg of pages) await pg.waitForFunction(() => window.__T && window.__T.P().players.length > 0 && document.getElementById('s-game').classList.contains('on'), null, { timeout: 15000 });
  const st = async () => Promise.all(pages.map(pg => pg.evaluate(() => { const p = window.__T.P(); return { cur: p.cur, anim: !!p.anim, fin: p.finished, tun: p.tunnels, doors: p.doors, lt: p.lastTun && p.lastTun.join(','), pus: p.pus, bub: p.bub, pos: p.players.map(q => q.x.toFixed(2) + ',' + q.y.toFixed(2) + ',' + q.shots).join(' | ') }; })));
  let s = await st();
  console.log('départ', JSON.stringify(s[0]));
  let bad = 0;
  for (const x of s) if (x.tun !== s[0].tun || x.doors !== s[0].doors) bad++;
  console.log('tirages identiques :', bad === 0, 'tunnels', s[0].tun, 'portes', s[0].doors);
  for (let k = 0; k < TURNS; k++) {
    s = await st();
    const cur = s[0].cur;
    const pg = pages[cur];
    const ang0 = await pg.evaluate(() => window.__T.circuitNow().ang0);
    const goVisible = !(await pg.evaluate(() => document.getElementById('goBtn').hidden));
    if (process.env.ONL_GO === 'oui') {
      // GO activé : seul le joueur dont c'est le tour doit voir le bouton, et il doit l'ouvrir
      const others = await Promise.all(pages.map((q, i) => i === cur ? Promise.resolve(true) : q.evaluate(() => document.getElementById('goBtn').hidden)));
      if (!goVisible) { console.log('ERREUR : le bouton GO manque pour le joueur', cur); bad++; }
      if (others.some(h => h === false)) { console.log('ERREUR : le bouton GO est visible chez un autre joueur'); bad++; }
      await pg.evaluate(() => document.getElementById('goBtn').click());
      await sleep(250);
      if (!(await pg.evaluate(() => document.getElementById('goBtn').hidden))) { console.log('ERREUR : le GO ne disparaît pas après appui'); bad++; }
    } else if (goVisible) { console.log('ERREUR : le bouton GO est visible'); bad++; }
    if (k < 2 && process.env.FORCE_BUB) await Promise.all(pages.map(q => q.evaluate(a => { const T = window.__T, P = T.S().players[T.S().cur], b = T.B(); b.length = 0; b.push({ id: 900 + T.S().cur, x: P.x + Math.cos(a) * 45, y: P.y + Math.sin(a) * 45, popped: false }); }, ang0)));
    if (process.env.FORCE_PU) await Promise.all(pages.map(q => q.evaluate(k => { const P = window.__T.S().players; P.forEach(x => { x.pu = k; }); }, (process.env.FORCE_PU.length > 1 ? process.env.FORCE_PU : ['bille', 'plume', 'gomme', 'portemine', 'compas', 'colle'][k % 6]))));
    const box = await pg.evaluate(() => { const r = document.getElementById('c').getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; });
    const cx = box.x + box.w / 2, cy = box.y + box.h * 0.75;
    const len = 50 + (k % 4) * 8, jit = ((k * 37) % 21 - 10) * 0.01;
    await pg.mouse.move(cx, cy);
    await pg.mouse.down();
    await pg.mouse.move(cx - Math.cos(ang0 + jit) * len, cy - Math.sin(ang0 + jit) * len, { steps: 4 });
    await pg.mouse.up();
    // attendre que tout se pose, chez tout le monde
    await sleep(400);
    const t0 = Date.now();
    for (;;) {
      s = await st();
      if (s.every(x => !x.anim) && s.every(x => x.cur === s[0].cur) || Date.now() - t0 > 15000) break;
      await sleep(150);
    }
    const same = s.every(x => x.pos === s[0].pos && x.cur === s[0].cur && x.fin === s[0].fin && x.pus === s[0].pus && x.bub === s[0].bub);
    console.log('tour', k, 'joueur', cur, same ? 'OK' : 'DIFFÉRENT', JSON.stringify(s[0].pos), 'pouvoirs', s[0].pus, 'bulles', s[0].bub);
    if (!same) { bad++; }
    if (s[0].fin) { console.log('course finie'); break; }
  }
  console.log(bad === 0 ? 'RÉSULTAT : tout est synchronisé' : 'RÉSULTAT : problèmes ' + bad);
  await br.close();
})().catch(e => { console.log('ÉCHEC', e.message); process.exit(1); });
