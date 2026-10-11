const {chromium}=require('playwright');
(async()=>{
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
const p=await b.newPage({viewport:{width:393,height:851},deviceScaleFactor:1});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///home/claude/w/v126.html');await p.waitForTimeout(1000);
for(let g=0;g<2;g++){
 await p.evaluate(()=>{document.querySelector('[data-go="solo"]')&&document.querySelector('[data-go="solo"]').click();});
 await p.evaluate(()=>{});
 break;}
await p.evaluate(()=>document.querySelector('[data-go="solo"]').click());
await p.click('#s-solo [data-go="training"]');await p.click('#cirSolo [data-circuit="grotte"]');await p.click('#carsMine [data-car="normale"]');await p.click('#carsBot [data-car="none"]');
await p.click('#s-training4 [data-act="play-training"]');await p.waitForTimeout(1500);
await p.screenshot({path:'g126a.png'});
console.log(errs);await b.close();})();
