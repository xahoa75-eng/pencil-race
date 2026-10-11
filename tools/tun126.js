const {chromium}=require('playwright');
(async()=>{
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
const p=await b.newPage({viewport:{width:393,height:851}});
await p.goto('file:///home/claude/w/t126.html');await p.waitForTimeout(800);
console.log(await p.evaluate(()=>{
 const T=window.__T;T.settings.circuit='grotte';T.useCircuit('grotte');
 const full={},old={};
 for(let i=0;i<300;i++){
  T.pickTunnels();const t=T.tunnels();
  const f=t.map(q=>q.id+':'+q.x+','+q.y).join(';');
  const o=t[0].x+','+t[0].y+','+t.length;
  full[f]=1;(old[o]=old[o]||{})[f]=1;
 }
 const collide=Object.values(old).filter(m=>Object.keys(m).length>1).length;
 return {tirages_differents:Object.keys(full).length,cles_anciennes:Object.keys(old).length,cles_ancienne_avec_plusieurs_jeux:collide};
}));
await b.close();})();
