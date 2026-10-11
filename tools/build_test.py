import sys
src=sys.argv[1]; dst=sys.argv[2]
s=open(src,encoding='utf-8').read()
k=s.rindex("\n  refresh();\n")
hook = """
  /*TEST_HOOK*/
  window.__T = {
    settings: settings, CIRCUITS: CIRCUITS, CARS: CARS, ORDER: ORDER,
    startGame: startGame, tick: tick, fire: fire, useCircuit: useCircuit, applyDoors: applyDoors,
    S: function () { return { players: players, finished: finished, finishers: finishers, anim: anim, cur: cur, phase: phase }; },
    circuitNow: function () { return circuit; },
    inTrack: inTrack, progressOf: progressOf, simulateShot: simulateShot, botPlan: botPlan,
    levelTarget: levelTarget, tunnels: function () { return tunnels; }, pickTunnels: pickTunnels,
    O: function () { return online; }, P: function () { return { players: players, cur: cur, anim: anim, finished: finished, n: n, tunnels: tunnels.length, doors: circuit.closedDoors, lastDoor: lastDoor, lastTun: lastTun }; }
  };
"""
open(dst,'w',encoding='utf-8').write(s[:k]+hook+s[k:])
