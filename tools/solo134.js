const {chromium}=require('playwright');
(async()=>{
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
const p=await b.newPage({viewport:{width:393,height:851},deviceScaleFactor:2});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///home/claude/w/v134.html');await p.waitForTimeout(1000);
const on=()=>p.evaluate(()=>[...document.querySelectorAll('.screen.on')].map(s=>s.id).join());
await p.evaluate(()=>document.querySelector('[data-go="solo"]').click());await p.waitForTimeout(400);
console.log(await on());await p.screenshot({path:'solo134.png'});
await p.click('#s-solo .pic-btn[data-go="training"]');console.log(await on());
await p.click('#s-training [data-back]');console.log(await on(),await p.evaluate(()=>document.querySelector('#s-solo .soon').disabled),errs);
await b.close();})();
