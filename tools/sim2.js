// fonctions exécutées dans la page
window.__sim = function () {
  const T = window.__T;
  const BOT_ERR = { aimErr: 0.03, powErr: 0.03 };
  function botify(p, sheet) {
    p.bot = true;
    p.aimErr = sheet.botErr ? sheet.botErr.aimErr : BOT_ERR.aimErr;
    p.powErr = sheet.botErr ? sheet.botErr.powErr : BOT_ERR.powErr;
    if (sheet.botMustBounce) p.mustBounce = true;
  }
  // une partie bot contre bot ; renvoie {w: 0|1|-1, s0, s1, ok}
  function play(circuitId, carA, carB, level, opt) {
    opt = opt || {};
    const st = T.settings;
    st.circuit = circuitId; st.exit = opt.exit || 'tol'; st.diff = 'normal'; st.go = 'non';
    st.botLevel = level || 'hard'; st.playerCar = carA; st.botCar = carB;
    if (opt.doorIndex != null) st.doorIndex = opt.doorIndex;
    T.startGame(1, true);
    const S = T.S();
    const P = S.players;
    const hi = P.findIndex(q => !q.bot), bi = 1 - hi;
    botify(P[hi], T.CARS[carA]);
    // objectif du bot 0 : même règle que botTarget pour un bot
    const c = T.circuitNow();
    const par = (c.botPar && c.botPar[carA]) || c.par[carA] || c.par.normale;
    P[hi].targetShots = opt.t0 || T.levelTarget(par, st.botLevel);
    if (opt.t1) P[bi].targetShots = opt.t1;
    let steps = 0;
    while (!T.S().finished && steps < 40000) { window.__virt += 50; T.tick(window.__virt); steps++; }
    const S2 = T.S();
    const f = S2.finishers;
    let w = -1;
    if (f.length === 1) w = f[0];
    return { w: w, s0: P[0].shots, s1: P[1].shots, fin: S2.finished, f: f.slice(), steps: steps };
  }
  // un seul bot qui court seul avec un objectif donné ; renvoie nb de coups ou null
  function solo(circuitId, car, target, opt) {
    opt = opt || {};
    const st = T.settings;
    st.circuit = circuitId; st.exit = opt.exit || 'tol'; st.diff = 'normal'; st.go = 'non';
    st.botLevel = 'hard'; st.playerCar = car; st.botCar = 'none';
    T.startGame(1, false);
    const P = T.S().players;
    botify(P[0], T.CARS[car]);
    if (opt.exact) { P[0].aimErr = 0; P[0].powErr = 0; }
    P[0].targetShots = target;
    let steps = 0;
    while (!T.S().finished && steps < 40000 && P[0].shots < target + 40) { window.__virt += 50; T.tick(window.__virt); steps++; }
    return T.S().finished ? P[0].shots : null;
  }
  return { play: play, solo: solo };
};
