  // ---------- CAMPAGNE ----------
  // Les 8 circuits sont ouverts dès le départ, mais seule la Classique est jouable. Battre le boss d'un circuit débloque sa voiture.
  // (les adversaires sont choisis par Mika ; l'Usine est le niveau final : il s'ouvre quand les 7 autres sont gagnés)
  var CAMP_BOSS = { zigzag: 'correcteur', serpentin: 'plume', canyon: 'gomme', escalier: 'portemine', maelstrom: 'colle', jardin: 'compas', grotte: 'bille', usine: 'normale' };
  var CAMP_FINAL = 'usine';
  // le boss final est l'Agrafeuse (son pouvoir viendra plus tard : pour l'instant elle roule comme une Classique bleue, niveau Hard)
  var CAMP_BOSS_NAME = { usine: "L'Agrafeuse" };
  var CAMP_BOSS_IMG = {
    correcteur: 'data:image/webp;base64,@@A:boss-correcteur.webp@@', plume: 'data:image/webp;base64,@@A:boss-plume.webp@@',
    gomme: 'data:image/webp;base64,@@A:boss-gomme.webp@@', portemine: 'data:image/webp;base64,@@A:boss-portemine.webp@@',
    colle: 'data:image/webp;base64,@@A:boss-colle.webp@@', compas: 'data:image/webp;base64,@@A:boss-compas.webp@@',
    bille: 'data:image/webp;base64,@@A:boss-bille.webp@@', agrafeuse: 'data:image/webp;base64,@@A:boss-agrafeuse.webp@@'
  };
  function campBossName(cid) { return CAMP_BOSS_NAME[cid] || CARS[CAMP_BOSS[cid]].name; }
  function campBossImg(cid) { return CAMP_BOSS_IMG[cid === CAMP_FINAL ? 'agrafeuse' : CAMP_BOSS[cid]]; }
  // l'adversaire de la campagne porte le nom de son boss (l'Agrafeuse pour le niveau final)
  function campBotName(opp) { return camp.active && camp.circuit === CAMP_FINAL ? CAMP_BOSS_NAME[CAMP_FINAL] : opp.name; }
  // niveau du bot selon le nombre de voitures déjà débloquées (sans la Classique) ; le niveau final est toujours Hard
  function campLevel(cid) {
    if (cid === CAMP_FINAL) return 'hard';
    var w = campWonCount();
    return w <= 2 ? 'facile' : (w <= 5 ? 'normal' : 'hard');
  }
  var camp = { won: {}, active: false, circuit: null, saved: null };
  var CAMP_ALL = /[?&]debloquer=1/.test(location.search);       // essai : toutes les voitures débloquées
  try {
    if (/[?&]campagne=reset/.test(location.search)) localStorage.removeItem('pr-campaign');
    var csv = JSON.parse(localStorage.getItem('pr-campaign') || 'null');
    if (csv && csv.won) camp.won = csv.won;
  } catch (e) {}
  function campSave() { try { localStorage.setItem('pr-campaign', JSON.stringify({ won: camp.won })); } catch (e) {} }
  function campWonCount() { var k = 0; for (var c in CAMP_BOSS) if (c !== CAMP_FINAL && camp.won[c]) k++; return k; }
  function carUnlocked(key) {
    if (CAMP_ALL || key === 'normale') return true;
    for (var c in CAMP_BOSS) if (c !== CAMP_FINAL && CAMP_BOSS[c] === key && camp.won[c]) return true;
    return false;
  }
  // ---------- L'AGRAFEUSE (boss final) ----------
  // Elle ne mène jamais par ses propres tirs : elle reste « légèrement derrière » le joueur (environ la moitié d'un tir), quitte à tirer en arrière.
  // Tous les 3 de ses tours elle échange sa place avec lui ; et si le joueur peut toucher l'arrivée à son prochain tour (alors qu'elle est derrière), elle échange tout de suite.
  var STAPLE_EVERY = 3;
  function campBossInit() {
    for (var i = 0; i < players.length; i++) {
      var q = players[i];
      q.boss = (botMode && camp.active && camp.circuit === CAMP_FINAL && q.bot) ? 'agrafeuse' : null;
      q.stapleTurns = 0;
      q.bossAim = null;
    }
  }
  // texte du compteur d'échange, affiché à côté de son nom
  function campBossChip(q) {
    if (!q.boss || q.done) return '';
    var left = STAPLE_EVERY - (q.stapleTurns || 0);
    return left <= 1 ? ' · échange à son prochain tour' : ' · échange dans ' + left + ' tours';
  }
  // est-ce que cette voiture peut toucher l'arrivée avec un seul tir, depuis sa place ?
  function stapleCanFinish(q) {
    var rng = MAXD * POWER * (q.rm || 1);
    if (progressOf(q.x, q.y, null).s + rng * 1.05 < circuit.finishS) return false;
    var pows = [1, 0.85, 0.7, 0.55];
    for (var ai = 0; ai < 144; ai++) {
      var ang = ai * Math.PI * 2 / 144;
      for (var pi = 0; pi < pows.length; pi++) {
        var sm = simulateShot(q, q.x, q.y, ang, rng * pows[pi], inTrack, Math.random, true);
        if (sm.res.type === 'finish') return true;
      }
    }
    return false;
  }
  // renvoie true si elle a échangé sa place (son tour est alors terminé) ; sinon règle sa visée (p.bossAim) et laisse le bot tirer
  function stapleMove(p, now) {
    p.bossAim = null;
    var h = null, i;
    for (i = 0; i < players.length; i++) if (!players[i].bot && !players[i].done) h = players[i];
    if (!h) return false;
    p.stapleTurns = (p.stapleTurns || 0) + 1;
    var sA = progressOf(p.x, p.y, null).s, sH = progressOf(h.x, h.y, null).s;
    var behind = sA < sH - 1;
    var gap = MAXD * POWER * (p.rm || 1) * 0.5;
    // capable de toucher l'arrivée (elle est alors devant, ou le joueur n'y est pas encore) : elle gagne
    if (stapleCanFinish(p)) { p.bossAim = { allowFinish: true, target: sH - gap }; return false; }
    var swap = (behind && stapleCanFinish(h)) || p.stapleTurns >= STAPLE_EVERY;
    if (swap) {
      var tx = p.x, ty = p.y;
      p.x = h.x; p.y = h.y;
      h.x = tx; h.y = ty;
      p.stapleTurns = 0;
      say(p.name + ' échange sa place avec toi !', now);
      endTurn(now);
      return true;
    }
    p.bossAim = { allowFinish: false, target: sH - gap };
    return false;
  }
  function campOpen(cid) { return cid !== CAMP_FINAL || campWonCount() >= 7 || CAMP_ALL; }
  function campRestore() {
    if (camp.saved) { for (var k in camp.saved) settings[k] = camp.saved[k]; camp.saved = null; }
    camp.active = false;
  }
  // une voiture verrouillée ne peut pas rester choisie
  if (!carUnlocked(settings.playerCar)) settings.playerCar = 'normale';

  var CAMP_SCREENS = { campaign: 1, campaign2: 1, campaign3: 1, game: 1 };
  var campCar = 'normale';
  function campBuildCards() {
    var box = document.getElementById('cirCamp');
    if (!box) return;
    box.innerHTML = '';
    var order = ORDER.filter(function (cid) { return cid !== CAMP_FINAL; }).concat([CAMP_FINAL]);
    order.forEach(function (cid) {
      var c = CIRCUITS[cid];
      var open = campOpen(cid);
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'card' + (open ? '' : ' locked');
      b.setAttribute('data-camp', cid);
      var im2 = document.createElement('img');
      im2.className = 'bossimg';
      im2.alt = '';
      im2.src = campBossImg(cid);
      var fw = document.createElement('div');
      fw.className = 'fr fr-s fr-boss';
      fw.setAttribute('data-title', c.name);
      fw.appendChild(im2);
      if (camp.won[cid]) {
        // grande coche verte dans le coin en bas à droite : boss battu
        var mk = document.createElement('div');
        mk.className = 'wonmark';
        mk.setAttribute('aria-label', 'Gagné');
        mk.innerHTML = '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M9 34 L25 51 L56 11" fill="none" stroke="#1d4d1d" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 34 L25 51 L56 11" fill="none" stroke="#2fa84f" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        fw.appendChild(mk);
      }
      var sb = document.createElement('div');
      sb.className = 'csub';
      sb.textContent = !open ? '🔒 Bats les 7 autres' : (cid === CAMP_FINAL ? 'Final · ' + campBossName(cid) : 'Contre ' + campBossName(cid));
      b.appendChild(fw);
      b.appendChild(sb);
      box.appendChild(b);
    });
    var rc = document.getElementById('campRecap');
    if (rc) rc.textContent = 'Voitures débloquées : ' + (1 + campWonCount()) + ' sur 8. Choisis un circuit : bats son adversaire pour gagner sa voiture.';
  }
  function campRefresh() {
    var el = document.getElementById('campCircuitName');
    if (el && camp.circuit) {
      el.textContent = CIRCUITS[camp.circuit].name + ' · adversaire : ' + campBossName(camp.circuit) + ' (niveau ' + BOT_LEVEL[campLevel(camp.circuit)] + ')';
    }
    var rc = document.getElementById('campRecap2');
    if (rc && camp.circuit) rc.textContent = 'Circuit : ' + CIRCUITS[camp.circuit].name + ' · Ta voiture : ' + CARS[campCar].name + ' · Adversaire : ' + campBossName(camp.circuit);
    var dd = document.getElementById('diffDesc6');
    if (dd) dd.textContent = DIFF_DESC[settings.diff];
    var cbs = document.querySelectorAll('#carsCamp .carbtn');
    for (var i = 0; i < cbs.length; i++) cbs[i].setAttribute('aria-pressed', cbs[i].getAttribute('data-car') === campCar ? 'true' : 'false');
  }
  // fin de course : victoire = voiture du boss débloquée (match nul ou défaite : rien)
  function campResult(won, extraEl) {
    if (!camp.active || !camp.circuit) return;
    var cid = camp.circuit, boss = CARS[CAMP_BOSS[cid]];
    var base = extraEl.textContent;
    var setMsg = function (m) { extraEl.textContent = base; extraEl.appendChild(document.createElement('br')); extraEl.appendChild(document.createTextNode(m)); };
    if (won) {
      var first = !camp.won[cid];
      camp.won[cid] = true;
      campSave();
      if (cid === CAMP_FINAL) setMsg(first ? 'Niveau final gagné : la campagne est terminée !' : 'Niveau final gagné.');
      else setMsg(first ? 'Voiture débloquée : ' + boss.name + ' !' : 'Déjà gagné : ' + boss.name + ' est à toi.');
      if (first) { buildCarPickers(); campBuildCards(); refresh(); }
    } else {
      setMsg('Pas de victoire : rien n\'est débloqué. Un match nul compte comme une défaite.');
    }
  }
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-camp],[data-campcar],[data-act="play-campaign"]') : null;
    if (!el) return;
    if (el.hasAttribute('data-camp')) {
      var cid = el.getAttribute('data-camp');
      if (!campOpen(cid)) return;
      camp.circuit = cid;
      campCar = carUnlocked(campCar) ? campCar : 'normale';
      campRefresh();
      go('campaign2');
    } else if (el.hasAttribute('data-campcar')) {
      if (el.classList.contains('locked')) return;
      campCar = el.getAttribute('data-car');
      campRefresh();
      go('campaign3');
    } else if (el.getAttribute('data-act') === 'play-campaign') {
      if (!camp.circuit) return;
      if (!camp.saved) camp.saved = { circuit: settings.circuit, playerCar: settings.playerCar, botCar: settings.botCar, botLevel: settings.botLevel };
      camp.active = true;
      settings.circuit = camp.circuit;
      settings.playerCar = campCar;
      settings.botCar = CAMP_BOSS[camp.circuit];
      settings.botLevel = campLevel(camp.circuit);
      refresh();
      startGame(1, true);
    }
  });
