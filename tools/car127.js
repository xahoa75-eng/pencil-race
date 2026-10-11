const {chromium}=require('playwright');
(async()=>{
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
const p=await b.newPage({viewport:{width:393,height:851},deviceScaleFactor:2});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///home/claude/w/v130.html');await p.waitForTimeout(1200);
await p.evaluate(()=>document.querySelector('[data-go="solo"]').click());
await p.click('#s-solo [data-go="training"]');await p.click('#cirSolo [data-circuit="canyon"]');await p.waitForTimeout(600);
await p.screenshot({path:'m127.png'});
await p.click('#carsMine [data-car="bille"]');await p.waitForTimeout(500);
await p.evaluate(()=>{document.querySelector('#s-training3 .panel').scrollTop=0});
await p.screenshot({path:'a127.png'});
await p.evaluate(()=>{window.__go=1});
console.log(errs);await b.close();})();
