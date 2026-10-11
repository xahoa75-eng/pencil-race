const { open } = require('./bench.js');
const f=process.argv[2]||'test92.html';
(async()=>{const {b,p,errs}=await open('/home/claude/w/'+f);
const circs=['zigzag','serpentin','canyon','escalier','maelstrom','usine','jardin','grotte'];
for(const c of (process.argv[3]||circs.join()).split(',')){
 const r=await p.evaluate((c)=>{const T=window.__T;const o={};
  for(const lvl of ['facile','normal','hard']){const sh=[];let tg=0;
   for(let g=0;g<4;g++){const st=T.settings;st.circuit=c;st.exit='tol';st.diff='normal';st.go='non';st.botLevel=lvl;st.playerCar='gomme';st.botCar='none';
    T.startGame(1,false);const P=T.S().players;const q=P[0];q.bot=true;q.aimErr=0.03;q.powErr=0.03;q.targetShots=0;
    let n=0;while(!T.S().finished&&n<40000&&q.shots<300){window.__virt+=50;T.tick(window.__virt);n++}
    sh.push(q.shots);}
   const cc=T.circuitNow();o[lvl]=sh.join(',');}
  const cc=T.circuitNow();o.par=(cc.botPar&&cc.botPar.gomme)||cc.par.gomme;o.tg=['facile','normal','hard'].map(l=>T.levelTarget(o.par,l)).join('/');return o},c);
 console.log(c,JSON.stringify(r));}
console.log(errs);await b.close()})();
