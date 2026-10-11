const {chromium}=require('playwright');
(async()=>{
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
const p=await b.newPage({viewport:{width:393,height:851},deviceScaleFactor:2});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///home/claude/w/v125.html');await p.waitForTimeout(1200);
const on=()=>p.evaluate(()=>[...document.querySelectorAll('.screen.on')].map(s=>s.id).join());
await p.evaluate(()=>document.querySelector('[data-go="solo"]').click());
await p.click('#s-solo [data-go="training"]');
await p.click('#cirSolo [data-circuit="canyon"]');await p.click('#carsMine [data-car="bille"]');
await p.click('#carsBot [data-car="gomme"]');await p.waitForTimeout(500);console.log(await on());
await p.screenshot({path:'v125a.png'});
await p.click('#s-training4 [data-key="diff"] [data-val="hard"]');await p.click('#s-training4 [data-key="botLevel"] [data-val="facile"]');
console.log(await p.evaluate(()=>[...document.querySelectorAll('#s-training4 [aria-pressed=true]')].map(e=>e.textContent)));
await p.click('#s-training4 [data-back]');await p.click('#carsBot [data-car="none"]');await p.waitForTimeout(300);
console.log(await on(),await p.evaluate(()=>document.getElementById('trBotBox').hidden));
await p.screenshot({path:'v125b.png'});
await p.click('#s-training4 [data-act="play-training"]');await p.waitForTimeout(600);console.log(await on(),errs);
await b.close();})();
