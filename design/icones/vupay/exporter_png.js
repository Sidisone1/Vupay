// Exporte les SVG Vupay en PNG. Usage : node design/icones/vupay/exporter_png.js  (Playwright requis)
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const ICI = __dirname, RACINE = path.join(ICI, '..', '..', '..');
const PUBLIC = path.join(RACINE, 'apps', 'web', 'public');
(async () => {
  const b = await chromium.launch();
  const rendre = async (svg, taille, sortie) => {
    const p = await b.newPage({ viewport: { width: taille, height: taille } });
    const code = fs.readFileSync(svg, 'utf8').replace('width="120" height="120"', `width="${taille}" height="${taille}"`);
    await p.setContent(`<html><body style="margin:0;background:transparent">${code}</body></html>`);
    await p.screenshot({ path: sortie, omitBackground: true });
    await p.close();
  };
  const dossier = path.join(ICI, 'svg');
  for (const f of fs.readdirSync(dossier).filter(f => f.endsWith('.svg') && f !== 'vupay-app.svg')) {
    await rendre(path.join(dossier, f), 144, path.join(PUBLIC, 'icones', 'vupay', f.replace('.svg', '.png')));
  }
  const app = path.join(dossier, 'vupay-app.svg');
  for (const [t, nom] of [[512, 'icon-512.png'], [192, 'icon-192.png'], [180, 'apple-touch-icon.png'], [48, 'favicon.png']]) {
    await rendre(app, t, path.join(PUBLIC, nom));
  }
  await b.close();
  console.log('PNG exportés dans', PUBLIC);
})();
