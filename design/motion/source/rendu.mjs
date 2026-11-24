import { createRequire } from 'module'; const require = createRequire(import.meta.url); const { chromium } = require('playwright');
import { spawn } from 'child_process';
import fs from 'fs';
const [,, mode, outDir, a='0', b='40', fps='30'] = process.argv;
const srv = spawn('python3', ['-m', 'http.server', process.env.PORT || '8765'], { stdio: 'ignore' });
await new Promise(r => setTimeout(r, 800));
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: +(process.env.VW||1920), height: +(process.env.VH||1080) } });
page.on('console', m => console.log('[page]', m.text()));
page.on('pageerror', e => console.log('[err]', e.message));
await page.goto(`http://localhost:${process.env.PORT || 8765}/${process.env.PAGE || 'index.html'}?render`, { waitUntil: 'load' });
await page.waitForFunction('window.__ready === true', null, { timeout: 60000 });
fs.mkdirSync(outDir, { recursive: true });
if (mode === 'stills') {
  for (const t of a.split(',').map(Number)) {
    await page.evaluate(t => window.renderAt(t), t);
    await page.screenshot({ path: `${outDir}/t_${t.toFixed(2)}.jpg`, type: 'jpeg', quality: 85 });
  }
} else {
  const F = +fps, s = Math.round(+a * F), e = Math.round(+b * F);
  const t0 = Date.now();
  for (let f = s; f < e; f++) {
    await page.evaluate(t => window.renderAt(t), f / F);
    await page.screenshot({ path: `${outDir}/f_${String(f).padStart(5, '0')}.jpg`, type: 'jpeg', quality: 93 });
    if (f % 60 === 0) console.log('frame', f, ((Date.now() - t0) / (f - s + 1)).toFixed(0) + 'ms/f');
  }
}
await browser.close(); srv.kill();
