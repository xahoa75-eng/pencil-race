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
