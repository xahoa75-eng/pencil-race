const { open } = require('./bench.js');
const [f,lv,N,cl,nov]=[process.argv[2],process.argv[3],+process.argv[4],process.argv[5],process.argv[6]];
(async()=>{const {b,p,errs}=await open('/home/claude/w/'+f);
await p.evaluate((nov)=>{window.__NOV=!!nov},nov);
for(const c of cl.split(',')){
 const r=await p.evaluate(([c,lv,N])=>{const T=window.__T;const sh=[];let tg=0;
  for(let g=0;g<N;g++){const st=T.settings;st.circuit=c;st.exit='tol';st.diff='normal';st.go='non';st.botLevel=lv;st.playerCar='gomme';st.botCar='none';
   T.startGame(1,false);const q=T.S().players[0];q.bot=true;q.aimErr=0.03;q.powErr=0.03;q.targetShots=0;
   let n=0;while(!T.S().finished&&n<40000&&q.shots<120){window.__virt+=50;T.tick(window.__virt);n++}sh.push(q.shots)}
  const cc=T.circuitNow();const par=(cc.botPar&&cc.botPar.gomme)||cc.par.gomme;tg=T.levelTarget(par,lv);
  sh.sort((a,b)=>a-b);return {tg,med:sh[N>>1],mean:Math.round(sh.reduce((a,b)=>a+b,0)/N*10)/10,ok:sh.filter(x=>x<=tg+1).length+'/'+N}},[c,lv,N]);
 console.log(f,nov?'NOV':'V',lv,c,JSON.stringify(r));}
await b.close()})();
