const {chromium}=require('playwright');
(async()=>{
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
const p=await b.newPage({viewport:{width:393,height:851},deviceScaleFactor:2});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///home/claude/w/v131.html');await p.waitForTimeout(1000);
await p.evaluate(()=>document.querySelector('#s-main [data-go="options"]').click());await p.waitForTimeout(400);
await p.screenshot({path:'o131a.png'});
await p.click('#s-options [data-key="diff"] [data-val="hard"]');await p.click('#s-options [data-key="botLevel"] [data-val="facile"]');
await p.click('#s-options [data-key="sound"] [data-val="non"]');await p.click('#s-options [data-key="go"] [data-val="oui"]');
console.log(await p.evaluate(()=>[...document.querySelectorAll('#s-options [aria-pressed=true]')].map(e=>e.parentNode.dataset.key+':'+e.dataset.val)));
await p.evaluate(()=>{document.querySelector('#s-options .panel').scrollTop=9999});await p.waitForTimeout(200);
await p.screenshot({path:'o131b.png'});console.log(errs);await b.close();})();
