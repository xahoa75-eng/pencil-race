  // ---------- jeu en ligne (l'hôte est l'arbitre) ----------
  // Chaque téléphone fait tourner le jeu en entier. Seul l'hôte calcule un tir (hasard compris) ; il envoie le tracé
  // à tout le monde, et chacun l'anime et déroule la fin du tour de la même façon. Aucun compte : on se connecte
  // par un code de 4 lettres (PeerJS : mise en relation gratuite, puis connexion directe téléphone à téléphone).
  var onlReady = false;
  var onlView = 'choose';
  var ONL_LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  var ONL_SITE = 'https://xahoa75-eng.github.io/pencil-race/';
  var ONL_PREFIX = 'pencilrace-';

  function onlSupported() { return typeof Peer !== 'undefined' && typeof RTCPeerConnection !== 'undefined'; }
  function onlPeerOpts() {
    var o = { debug: 0 };
    var m = /[?&]peerserver=([^&]+)/.exec(location.search);      // pour les essais : ?peerserver=localhost:9000
    if (m) { var hp = decodeURIComponent(m[1]).split(':'); o.host = hp[0]; o.port = parseInt(hp[1], 10) || 9000; o.path = '/'; o.secure = false; }
    return o;
  }
  function onlCode() {
    var c = '';
    for (var i = 0; i < 4; i++) c += ONL_LETTERS.charAt((Math.random() * ONL_LETTERS.length) | 0);
    return c;
  }
  function onlSend(conn, msg) { try { if (conn && conn.open) conn.send(msg); } catch (e) {} }
  function onlBroadcast(msg) { if (online && online.conns) for (var i = 1; i < online.conns.length; i++) onlSend(online.conns[i], msg); }
  function onlName(i) { return PL[i].name; }
  function onlFailText(err) {
    var t = err && err.type;
    if (t === 'peer-unavailable') return 'Code introuvable. Vérifie les 4 lettres, et que ton ami a bien créé la partie.';
    if (t === 'browser-incompatible') return "Ce navigateur ne sait pas faire de jeu en ligne.";
    return "Impossible de joindre le serveur de mise en relation. Le jeu en ligne marche sur le site " + ONL_SITE + " (pas dans une fenêtre de prévisualisation).";
  }

  // ----- sortie propre -----
  function onlineLeave() {
    var o = online;
    if (o) {
      online = null;
      onlSend(o.hostConn, { t: 'bye' });
      if (o.conns) for (var i = 1; i < o.conns.length; i++) { onlSend(o.conns[i], { t: 'bye' }); }
      try { if (o.peer) o.peer.destroy(); } catch (e) {}
      if (o.saved) for (var k in o.saved) settings[k] = o.saved[k];
    }
    forced = null;
    document.body.classList.remove('onl-guest', 'onl-end');
    if (onlReady) onlineRefresh();
  }

  // ----- création (hôte) -----
  function onlineHost() {
    onlineLeave();
    if (!onlSupported()) { onlSetNo(); return; }
    var o = online = { role: 'host', me: 0, conns: [null], queue: [], sent: false, started: false, code: '', status: 'Connexion…', peer: null };
    onlView = 'host';
    function open(attempt) {
      var code = onlCode();
      var pr;
      try { pr = new Peer(ONL_PREFIX + code, onlPeerOpts()); } catch (e) { o.status = onlFailText(e); onlineRefresh(); return; }
      o.peer = pr;
      pr.on('open', function () { if (online !== o) return; o.code = code; o.status = ''; onlineRefresh(); });
      pr.on('error', function (err) {
        if (online !== o) return;
        if (err && err.type === 'unavailable-id' && attempt < 6) { try { pr.destroy(); } catch (e) {} open(attempt + 1); return; }
        o.status = onlFailText(err);
        onlineRefresh();
      });
      pr.on('connection', function (conn) { if (online === o) onlHostConn(o, conn); });
    }
    open(0);
    onlineRefresh();
  }
  function onlJoined(o) { var k = 0; for (var i = 1; i < o.conns.length; i++) if (o.conns[i]) k++; return k; }
  function onlLobbyMsg(o) {
    var joined = [true];
    for (var i = 1; i < settings.players; i++) joined.push(!!o.conns[i]);
    return { t: 'lobby', count: settings.players, joined: joined, circuit: settings.circuit };
  }
  function onlSendLobby(o) { onlBroadcast(onlLobbyMsg(o)); }
  function onlHostConn(o, conn) {
    conn.on('data', function (m) { if (online === o) onlHostData(o, conn, m); });
    conn.on('close', function () { if (online === o) onlHostLost(o, conn); });
    conn.on('error', function () { if (online === o) onlHostLost(o, conn); });
  }
  function onlHostData(o, conn, m) {
    if (!m || !m.t) return;
    if (m.t === 'hello') {
      if (o.started) { onlSend(conn, { t: 'busy' }); setTimeout(function () { try { conn.close(); } catch (e) {} }, 300); return; }
      var slot = 0;
      for (var i = 1; i < settings.players; i++) if (!o.conns[i]) { slot = i; break; }
      if (!slot) { onlSend(conn, { t: 'full' }); setTimeout(function () { try { conn.close(); } catch (e) {} }, 300); return; }
      o.conns[slot] = conn;
      conn._slot = slot;
      onlSend(conn, { t: 'welcome', me: slot });
      onlSendLobby(o);
      onlineRefresh();
    } else if (m.t === 'aim') {
      if (conn._slot) { m.slot = conn._slot; o.queue.push(m); }
    } else if (m.t === 'bye') {
      onlHostLost(o, conn);
    }
  }
  function onlHostLost(o, conn) {
    var slot = conn._slot;
    if (!slot || o.conns[slot] !== conn) return;
    o.conns[slot] = null;
    if (o.started) {
      var msg = onlName(slot) + ' a quitté la partie.';
      onlBroadcast({ t: 'end', msg: msg });
      onlineEnded(msg);
    } else {
      onlSendLobby(o);
      onlineRefresh();
    }
  }

  // ----- rejoindre (invité) -----
  function onlineJoin(code) {
    code = String(code || '').toUpperCase().replace(/[^A-Z]/g, '');
    onlineLeave();
    onlView = 'join';
    if (code.length !== 4) { onlSetStatus2('Le code a 4 lettres.'); return; }
    if (!onlSupported()) { onlSetNo(); onlView = 'choose'; onlineRefresh(); return; }
    var o = online = { role: 'guest', me: null, queue: [], sent: false, started: false, code: code, status: 'Connexion…', peer: null, hostConn: null, joined: null, count: 0 };
    var pr;
    try { pr = new Peer(onlPeerOpts()); } catch (e) { o.status = onlFailText(e); onlineRefresh(); return; }
    o.peer = pr;
    var timer = setTimeout(function () {
      if (online === o && o.me == null) { o.status = "Pas de réponse. Le code est peut-être faux, ou le réseau ne laisse pas passer la connexion."; onlineRefresh(); }
    }, 20000);
    pr.on('error', function (err) {
      if (online !== o) return;
      clearTimeout(timer);
      o.status = onlFailText(err);
      onlineRefresh();
    });
    pr.on('open', function () {
      if (online !== o) return;
      var c = pr.connect(ONL_PREFIX + code, { serialization: 'json', reliable: true });
      o.hostConn = c;
      c.on('open', function () { if (online === o) onlSend(c, { t: 'hello' }); });
      c.on('data', function (m) { if (online === o) { clearTimeout(timer); onlGuestData(o, m); } });
      c.on('close', function () { if (online === o) onlGuestLost(o); });
      c.on('error', function () { if (online === o) onlGuestLost(o); });
    });
    onlineRefresh();
  }
  function onlGuestData(o, m) {
    if (!m || !m.t) return;
    if (m.t === 'welcome') { o.me = m.me; o.status = ''; onlineRefresh(); }
    else if (m.t === 'lobby') { o.joined = m.joined; o.count = m.count; o.circuit = m.circuit; onlineRefresh(); }
    else if (m.t === 'full') { o.status = 'La partie est complète.'; onlineLeaveKeepStatus(o); }
    else if (m.t === 'busy') { o.status = 'La partie a déjà commencé.'; onlineLeaveKeepStatus(o); }
    else if (m.t === 'start') { o.queue = []; onlStartGuest(o, m); }
    else if (m.t === 'shot') { o.queue.push(m); }
    else if (m.t === 'nak') { o.sent = false; }
    else if (m.t === 'end') { onlineEnded(m.msg || 'La partie est terminée.'); }
    else if (m.t === 'bye') { onlGuestLost(o); }
  }
  function onlineLeaveKeepStatus(o) {
    var st = o.status;
    onlineLeave();
    onlView = 'join';
    onlSetStatus2(st);
  }
  function onlGuestLost(o) {
    if (o.started) { onlineEnded("L'hôte a quitté la partie."); return; }
    onlineLeave();
    onlView = 'join';
    onlSetStatus2("L'hôte a fermé la partie.");
  }
  var onlStatus2Text = '';
  function onlSetStatus2(t) { onlStatus2Text = t; onlineRefresh(); }
  function onlSetNo() {
    var el = document.getElementById('onlNo');
    el.hidden = false;
    el.textContent = 'Le jeu en ligne marche sur le site ' + ONL_SITE + " (et sur un vrai téléphone ou ordinateur, pas dans une fenêtre de prévisualisation).";
  }

  // ----- démarrage de la course -----
  function onlApply(exit, circuitId) {
    var o = online;
    if (!o.saved) o.saved = { diff: settings.diff, exit: settings.exit, circuit: settings.circuit, players: settings.players };
    settings.diff = 'normal';     // pas de chrono en ligne
    if (exit) settings.exit = exit;
    if (circuitId) settings.circuit = circuitId;
  }
  function onlineStart() {
    var o = online;
    if (!o || o.role !== 'host' || onlJoined(o) < settings.players - 1) return;
    o.started = true;
    o.queue = [];
    o.sent = false;
    onlApply(null, null);
    forced = null;
    startGame(settings.players, false);
    onlBroadcast({ t: 'start', circuit: settings.circuit, count: settings.players, door: lastDoor, tun: lastTun, exit: settings.exit });
  }
  function onlStartGuest(o, m) {
    o.started = true;
    o.sent = false;
    onlApply(m.exit, m.circuit);
    forced = { door: m.door, tun: m.tun };
    document.body.classList.add('onl-guest');
    document.body.classList.remove('onl-end');
    startGame(m.count, false);
    forced = null;
  }
  function onlineRestart() {
    var o = online;
    if (!o) return;
    if (o.role !== 'host') return;
    document.body.classList.remove('onl-end');
    if (finished && !onlJoined(o)) return;
    onlineStart();
  }
  function onlineEnded(msg) {
    if (!online) return;
    online.ended = true;
    finished = true;
    anim = null;
    aiming = false;
    document.body.classList.add('onl-end');
    document.getElementById('winTitle').textContent = 'Partie terminée';
    document.getElementById('winTitle').style.color = '#151515';
    document.getElementById('winText').textContent = msg;
    document.getElementById('winBest').textContent = '';
    elPause.classList.remove('show');
    elWin.classList.add('show');
  }

  // ----- les tirs -----
  function r2(v) { return Math.round(v * 100) / 100; }
  function packShot(shot) {
    var p = [], i, r = shot.res;
    for (i = 0; i < shot.path.length; i++) { p.push(r2(shot.path[i][0]), r2(shot.path[i][1])); }
    return { t: 'shot', cur: cur, a: shot.ang, d: r2(shot.dist), p: p, e: shot.ev || [],
      r: { type: r.type, x: r2(r.x), y: r2(r.y), tu: r.tunnel ? tunnels.indexOf(r.tunnel) : -1 } };
  }
  function unpackShot(m) {
    var path = [];
    for (var i = 0; i + 1 < m.p.length; i += 2) path.push([m.p[i], m.p[i + 1]]);
    var res = { type: m.r.type, x: m.r.x, y: m.r.y };
    if (m.r.tu >= 0 && tunnels[m.r.tu]) res.tunnel = tunnels[m.r.tu];
    return { path: path, ev: m.e, res: res, ang: m.a, dist: m.d };
  }
  // l'hôte calcule le tir du joueur `slot`, l'envoie à tout le monde et le lance chez lui
  function onlHostShot(slot, ang, dist) {
    var o = online;
    if (!o || !o.started || anim || finished || cur !== slot) return false;
    var shot = buildShot(players[cur], ang, dist, 0);
    var msg = packShot(shot);
    onlBroadcast(msg);
    launch(players[cur], unpackShot(msg));
    return true;
  }
  function onlineAim(ang, dist) {
    var o = online;
    if (o.role === 'host') { onlHostShot(0, ang, dist); return; }
    o.sent = true;
    onlSend(o.hostConn, { t: 'aim', a: ang, d: dist });
  }
  function onlineTick(now) {
    var o = online;
    if (!o || !o.started || o.ended) return;
    while (o.queue.length && !anim && !finished) {
      var m = o.queue.shift();
      if (m.t === 'aim') {
        if (!onlHostShot(m.slot, m.a, m.d)) onlSend(o.conns[m.slot], { t: 'nak' });
      } else if (m.t === 'shot') {
        if (m.cur !== cur) { onlineEnded('Les téléphones ne sont plus d\'accord (tour décalé). Relance la partie.'); return; }
        o.sent = false;
        launch(players[cur], unpackShot(m));
      }
    }
  }

  // ----- affichage de l'écran « En ligne » -----
  function onlChips(o) {
    var h = '', count = o.role === 'host' ? settings.players : (o.count || 0);
    for (var i = 0; i < count; i++) {
      var here = o.role === 'host' ? (i === 0 || !!o.conns[i]) : !!(o.joined && o.joined[i]);
      h += '<div class="chip' + (here ? ' on' : '') + '" style="--c:' + PL[i].color + ';--t:' + PL[i].on + '">' + PL[i].name +
        (i === o.me ? ' · toi' : here ? '' : ' · attend…') + '</div>';
    }
    return h;
  }
  function onlineRefresh() {
    if (!onlReady) return;
    var o = online;
    if (o && o.role === 'host' && !o.started && onlJoined(o) + 1 > settings.players) settings.players = onlJoined(o) + 1;
    var v = o ? (o.role === 'host' ? 'host' : 'join') : onlView;
    if (v !== 'choose' && v !== 'host' && v !== 'join') v = 'choose';
    ['choose', 'host', 'join'].forEach(function (id) { document.getElementById('onl-' + id).hidden = id !== v; });
    var okNo = onlSupported();
    document.getElementById('onl-choose').querySelectorAll('.big').forEach(function (b) { b.disabled = !okNo; });
    if (!okNo && currentScreen === 'online') onlSetNoQuiet();
    if (v === 'host') {
      document.getElementById('onlCode').textContent = (o && o.code) || '····';
      document.getElementById('onlChips').innerHTML = o ? onlChips(o) : '';
      var ready = o && o.code && onlJoined(o) >= settings.players - 1;
      document.getElementById('onlStart').disabled = !ready;
      document.getElementById('onlStatus').textContent = !o ? '' : o.status ? o.status :
        ready ? 'Tout le monde est là !' : 'En attente des amis : envoie-leur le lien ou le code (' + onlJoined(o) + '/' + (settings.players - 1) + ' connecté' + (onlJoined(o) > 1 ? 's' : '') + ').';
      if (o && !o.started && o.code) onlSendLobby(o);
    } else if (v === 'join') {
      document.getElementById('onlChips2').innerHTML = o && o.me != null ? onlChips(o) : '';
      document.getElementById('onlConnect').hidden = !!(o && o.me != null);
      document.getElementById('onlInput').hidden = !!(o && o.me != null);
      document.getElementById('onlStatus2').textContent = o ? (o.status || (o.me != null ? "Tu es " + onlName(o.me) + ". En attente de l'hôte pour lancer la course…" : '')) : onlStatus2Text;
    }
  }
  function onlSetNoQuiet() { var el = document.getElementById('onlNo'); if (el.hidden) onlSetNo(); }

  function onlineShare() {
    var o = online;
    if (!o || !o.code) return;
    var url = (location.protocol === 'file:' ? ONL_SITE : location.origin + location.pathname) + '?join=' + o.code;
    var text = 'Viens jouer à Pencil Race avec moi ! Code : ' + o.code;
    var st = document.getElementById('onlStatus');
    if (navigator.share) {
      navigator.share({ title: 'Pencil Race', text: text, url: url }).catch(function () {});
      return;
    }
    try {
      navigator.clipboard.writeText(text + ' ' + url).then(function () { st.textContent = 'Lien copié : ' + url; }, function () { st.textContent = url; });
    } catch (e) { st.textContent = url; }
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-act^="onl-"]') : null;
    if (!el) return;
    var act = el.getAttribute('data-act');
    if (act === 'onl-host') onlineHost();
    else if (act === 'onl-join') { onlineLeave(); onlView = 'join'; onlStatus2Text = ''; onlineRefresh(); }
    else if (act === 'onl-connect') onlineJoin(document.getElementById('onlInput').value);
    else if (act === 'onl-share') onlineShare();
    else if (act === 'onl-start') onlineStart();
    else if (act === 'onl-back') {
      if (online || onlView !== 'choose') { onlineLeave(); onlView = 'choose'; onlStatus2Text = ''; onlineRefresh(); }
      else back();
    }
  });
  document.getElementById('onlInput').addEventListener('input', function () { this.value = this.value.toUpperCase().replace(/[^A-Z]/g, ''); });

  onlReady = true;
  // lien d'invitation : ?join=ABCD
  (function () {
    var m = /[?&]join=([A-Za-z]{4})(?![A-Za-z])/.exec(location.search);
    if (!m) return;
    go('online');
    onlView = 'join';
    document.getElementById('onlInput').value = m[1].toUpperCase();
    if (onlSupported()) onlineJoin(m[1]); else onlineRefresh();
  })();
