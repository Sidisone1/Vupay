// Régénère les exports PNG des maquettes à partir des fichiers HTML (après un changement de charte).
// Usage : node design/maquettes/exporter_png.js   (Playwright requis)
// Chaque écran est exporté en 2x sous le nom déjà présent dans son dossier, puis la planche complète.
const {chromium} = require('playwright');
const fs = require('fs');
const path = require('path');

const ICI = __dirname;
const ESPACES = [
  ['diffuseur', 'maquettes-diffuseur.html', 'planche-diffuseur.png'],
  ['annonceur', 'maquettes-annonceur.html', 'planche-annonceur.png'],
  ['admin', 'maquettes-admin.html', 'planche-admin.png'],
];

(async () => {
  const navigateur = await chromium.launch();
  for (const [dossier, html, planche] of ESPACES) {
    const rep = path.join(ICI, dossier);
    // noms existants des écrans, dans l'ordre (00-…, 01-…), hors planche
    const noms = fs.readdirSync(rep).filter(f => /^\d\d-.*\.png$/.test(f)).sort();
    const page = await navigateur.newPage({viewport: {width: 1780, height: 1200}, deviceScaleFactor: 2});
    await page.goto('file://' + path.join(rep, html));
    await page.waitForTimeout(1500);
    const ecrans = await page.$$('.grille > figure > .tel, .grille > figure > .ecran');
    if (ecrans.length !== noms.length) throw new Error(`${dossier} : ${ecrans.length} écrans pour ${noms.length} fichiers`);
    for (let i = 0; i < ecrans.length; i++) {
      await ecrans[i].screenshot({path: path.join(rep, noms[i])});
    }
    await page.screenshot({path: path.join(rep, planche), fullPage: true});
    console.log(dossier, ':', ecrans.length, 'écrans + planche');
    await page.close();
  }
  await navigateur.close();
})();
