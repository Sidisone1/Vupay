// Une planche JPG par catégorie (icônes 96 px + nom). node planches.js <racine bibliothèque>
const {chromium} = require('playwright'); const fs = require('fs'); const path = require('path');
(async () => {
  const R = process.argv[2], idx = JSON.parse(fs.readFileSync(path.join(R, 'index.json')));
  const cats = [...new Set(idx.map(i => i.categorie))]; fs.mkdirSync(path.join(R, 'planches'), {recursive: true});
  const b = await chromium.launch(); const p = await b.newPage({viewport: {width: 1440, height: 900}});
  for (const c of cats) {
   const tous = idx.filter(i => i.categorie === c);
   for (let k = 0; k < tous.length; k += 240) {  // grandes catégories : une planche par tranche de 240 icônes
    const its = tous.slice(k, k + 240), suffixe = tous.length > 240 ? '-' + (k / 240 + 1) : '';
    const html = `<html><body style="margin:0;padding:24px;background:#FFF;font:12px Inter,Arial,sans-serif;color:#4A2A1C;width:1392px">
      <h1 style="font-size:26px;margin:0 0 16px">Collection Bogolan · ${c} <small style="font-weight:400;color:#8a6a55">${tous.length} icônes${suffixe ? ' · planche ' + suffixe.slice(1) : ''}</small></h1>
      <div style="display:grid;grid-template-columns:repeat(12,1fr);gap:10px">${its.map(i => `<figure style="margin:0;text-align:center"><img src="file://${path.join(R, i.fichier)}" width="96" height="96"><figcaption style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.nom}</figcaption></figure>`).join('')}</div></body></html>`;
    fs.writeFileSync('/tmp/_pl.html', html);
    await p.goto('file:///tmp/_pl.html', {timeout: 300000}); await p.waitForTimeout(300);
    await p.screenshot({path: path.join(R, 'planches', c + suffixe + '.jpg'), type: 'jpeg', quality: 78, fullPage: true});
   }
  }
  await b.close(); console.log(cats.length, 'planches');
})();
