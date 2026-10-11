  // ---------- CAMPAGNE ----------
  // Les 8 circuits sont ouverts dès le départ, mais seule la Classique est jouable. Battre le boss d'un circuit débloque sa voiture.
  // (les adversaires sont choisis par Mika ; l'Usine est le niveau final : il s'ouvre quand les 7 autres sont gagnés)
  var CAMP_BOSS = { zigzag: 'correcteur', serpentin: 'plume', canyon: 'gomme', escalier: 'portemine', maelstrom: 'colle', jardin: 'compas', grotte: 'bille', usine: 'normale' };
  var CAMP_FINAL = 'usine';
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
    ORDER.forEach(function (cid) {
      var c = CIRCUITS[cid], boss = CARS[CAMP_BOSS[cid]];
      var open = campOpen(cid);
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'card' + (open ? '' : ' locked');
      b.setAttribute('data-camp', cid);
      var cv2 = document.createElement('canvas');
      cv2.className = 'thumb';
      cv2.width = 190;
      cv2.height = 340;
      var fw = document.createElement('div');
      fw.className = 'fr fr-s';
      fw.setAttribute('data-title', c.name);
      fw.appendChild(cv2);
      var sb = document.createElement('div');
      sb.className = 'csub';
      sb.textContent = !open ? '🔒 Bats les 7 autres' : (cid === CAMP_FINAL ? 'Niveau final' : 'Contre ' + boss.name) + (camp.won[cid] ? ' · ✓ gagné' : '');
      b.appendChild(fw);
      b.appendChild(sb);
      box.appendChild(b);
      drawThumb(cv2, c);
    });
    var rc = document.getElementById('campRecap');
    if (rc) rc.textContent = 'Voitures débloquées : ' + (1 + campWonCount()) + ' sur 8. Choisis un circuit : bats son adversaire pour gagner sa voiture.';
  }
  function campRefresh() {
    var el = document.getElementById('campCircuitName');
    if (el && camp.circuit) {
      var boss = CARS[CAMP_BOSS[camp.circuit]];
      el.textContent = CIRCUITS[camp.circuit].name + ' · adversaire : ' + boss.name + ' (niveau ' + BOT_LEVEL[campLevel(camp.circuit)] + ')';
    }
    var rc = document.getElementById('campRecap2');
    if (rc && camp.circuit) rc.textContent = 'Circuit : ' + CIRCUITS[camp.circuit].name + ' · Ta voiture : ' + CARS[campCar].name + ' · Adversaire : ' + CARS[CAMP_BOSS[camp.circuit]].name;
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
