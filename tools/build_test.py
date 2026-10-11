import sys
src=sys.argv[1]; dst=sys.argv[2]
s=open(src,encoding='utf-8').read()
k=s.rindex("\n  refresh();\n")
hook = """
  /*TEST_HOOK*/
  window.__T = {
    settings: settings, CIRCUITS: CIRCUITS, CARS: CARS, ORDER: ORDER,
    startGame: startGame, PU: function () { return puddles; }, FX: function () { return fx; }, corrTurn: corrTurn, projectS: projectS, tick: tick, fire: fire, useCircuit: useCircuit, applyDoors: applyDoors,
    S: function () { return { players: players, finished: finished, finishers: finishers, anim: anim, cur: cur, phase: phase }; },
    circuitNow: function () { return circuit; },
    inTrack: inTrack, progressOf: progressOf, simulateShot: simulateShot, botPlan: botPlan,
    levelTarget: levelTarget, tunnels: function () { return tunnels; }, pickTunnels: pickTunnels,
    O: function () { return online; }, P: function () { return { players: players, cur: cur, anim: anim, finished: finished, n: n, tunnels: tunnels.length, doors: circuit.closedDoors, lastDoor: lastDoor, lastTun: lastTun, pus: players.map(function (q) { return (q.pu || '-') + '/' + (q.puActive || '-'); }).join(), bub: bubbles.map(function (b) { return b.id + '@' + Math.round(b.x) + ',' + Math.round(b.y); }).join(';') }; },
    B: function () { return bubbles; }, cleanBubbles: cleanBubbles, win: win, plumeSpot: plumeSpot, afterShot: afterShot, dropPuddle: dropPuddle, applyFx: applyFx, startTurn: startTurn, clock: function () { return markClock; }, camp: camp, carUnlocked: carUnlocked, campLevel: campLevel
  };
"""
open(dst,'w',encoding='utf-8').write(s[:k]+hook+s[k:])
