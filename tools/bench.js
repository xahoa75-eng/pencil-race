// banc de test : navigateur sans écran, horloge virtuelle
const { chromium } = require('playwright');
async function open(file) {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const p = await b.newPage({ viewport: { width: 420, height: 800 } });
  const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  await p.addInitScript(() => {
    window.__virt = 1000;
    performance.now = () => window.__virt;
    window.requestAnimationFrame = () => 0;
    window.__timeouts = [];
  });
  await p.goto('file://' + file);
  await p.waitForTimeout(800);
  return { b, p, errs };
}
module.exports = { open };
