// Convertit tous les SVG d'un dossier en PNG (fond transparent hors tuile). node svg_en_png.js <dossier> [taille=256]
const {chromium} = require('playwright'); const fs = require('fs'); const path = require('path');
(async () => {
  const dir = process.argv[2], t = +(process.argv[3] || 256);
  const b = await chromium.launch(); const p = await b.newPage({viewport: {width: t, height: t}});
  const fichiers = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));
  for (const f of fichiers) {
    const svg = fs.readFileSync(path.join(dir, f), 'utf8').replace('width="256" height="256"', `width="${t}" height="${t}"`);
    await p.setContent(`<html><body style="margin:0;background:transparent">${svg}</body></html>`);
    await p.screenshot({path: path.join(dir, f.replace('.svg', '.png')), omitBackground: true, clip: {x: 0, y: 0, width: t, height: t}});
  }
  await b.close(); console.log(fichiers.length, 'PNG');
})();
