const { open } = require('./bench.js');const fs=require('fs');
const circ=process.argv[2], N=+process.argv[3];
(async()=>{const {b,p,errs}=await open('/home/claude/w/test90.html');
await p.evaluate(fs.readFileSync('/home/claude/w/sim2.js','utf8')+';window.SIM=window.__sim();');
const cars=['normale','bille','plume','gomme','portemine','compas','correcteur','colle'];
const res={};const t0=Date.now();
for(let i=0;i<8;i++)for(let j=i+1;j<8;j++){
 let wa=0,wb=0,nul=0;
 for(let k=0;k<N;k++){
  for(const ord of [0,1]){
   const A=ord?cars[j]:cars[i],B=ord?cars[i]:cars[j];
   const r=await p.evaluate(([c,a,b])=>{const x=SIM.play(c,a,b,'hard',{});return {w:x.w,fin:x.fin,f:x.f}},[circ,A,B]);
   // identifier le vainqueur par voiture : w = index du joueur dans l'ordre de jeu
   r.win = r.w; res._raw=res._raw||0;
   const first = r.w;
   p.__last=r;
   const who = await p.evaluate(()=>{const S=__T.S();return S.players.map(q=>q.carKey)});
   const wc = r.w>=0 ? who[r.w] : null;
   if(wc===cars[i])wa++;else if(wc===cars[j])wb++;else nul++;
  }}
 res[cars[i]+'|'+cars[j]]=[wa,wb,nul];
 console.error(circ,cars[i],cars[j],wa,wb,nul,((Date.now()-t0)/1000|0)+'s');
}
fs.writeFileSync('res_'+circ+'.json',JSON.stringify(res));console.log(circ,'done',errs.slice(0,3));await b.close()})();
