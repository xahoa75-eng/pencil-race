// test de l'Agrafeuse : un « joueur » automatique affronte le boss final
const { open } = require('./bench.js');
(async () => {
  const { b, p, errs } = await open('/home/claude/w/v195.html');
  const res = await p.evaluate((mode) => {
    const T = window.__T, out = [];
    for (let g = 0; g < 6; g++) {
      const st = T.settings; st.circuit = 'usine'; st.exit = 'tol'; st.diff = 'normal'; st.go = 'non'; st.botLevel = 'hard'; st.playerCar = 'normale'; st.botCar = 'normale';
      T.camp.active = true; T.camp.circuit = 'usine';
      T.startGame(1, true);
      const P = T.S().players, h = P.find(q => !q.bot), a = P.find(q => q.bot); if (mode !== 'back') h.targetShots = 1;
      const log = []; let lastCur = -1, n = 0, swaps = 0, ahead = 0, aTurns = 0, lastAX = null;
      while (!T.S().finished && n < 200000 && h.shots < 200) {
        window.__virt += 50; T.tick(window.__virt); n++;
        const S = T.S();
        if (S.finished) break;
        if (S.cur !== lastCur && !S.anim) {
          lastCur = S.cur;
          const sA = T.progressOf(a.x, a.y, null).s, sH = T.progressOf(h.x, h.y, null).s;
          if (S.cur === 0) { if (sA > sH + 1) ahead++; aTurns++; }
          log.push((S.cur === 0 ? 'H' : 'A') + ':' + Math.round(sH) + '/' + Math.round(sA) + '(' + a.stapleTurns + ')');
        }
        if (!S.anim && S.cur === 0 && !S.finished && S.phase === 'aim') {
          // joueur automatique : mode 'rush' = va droit vers l'arrivée ; mode 'back' = reste en arrière (ne tire presque pas)
          if (mode === 'smart') h.bossAim = { allowFinish: true, target: T.circuitNow().finishS - 70 };
          const pl = T.botPlan(h);
          T.fire(h, pl.ang, mode === 'back' ? pl.dist * 0.5 : pl.dist, 0.03);
        }
      }
      const S = T.S();
      out.push({ fS: Math.round(T.circuitNow().finishS), end: S.finished, winner: S.players[S.cur].bot ? 'boss' : 'joueur', fin: S.finishers.length, hshots: h.shots, ashots: a.shots, ahead, aTurns, log: log.slice(-14).join(' ') });
    }
    return out;
  }, process.argv[2] || 'rush');
  for (const r of res) console.log(JSON.stringify(r));
  console.log('erreurs', errs);
  await b.close();
})();
