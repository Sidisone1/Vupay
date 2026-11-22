"""Découpe une planche Vupay Bogolan (4 x 4 tuiles blanches sur fond pierre) en 16 icônes PNG.
Usage : python3 decouper_vupay.py ../planches/vupay-01.png 1 ../png   (Pillow et numpy)
Sortie : <nom>.png en 256 x 256, coins arrondis, fond transparent."""
import json, os, sys
import numpy as np
from PIL import Image, ImageDraw
ICI = os.path.dirname(os.path.abspath(__file__))
src, n, out = sys.argv[1], int(sys.argv[2]), sys.argv[3]
icones = json.load(open(os.path.join(ICI, 'icones_vupay.json')))[(n-1)*16:n*16]
im = Image.open(src).convert('RGB'); a = np.asarray(im).astype(int); H, W = a.shape[:2]
fond = np.median(a[5:30, 5:30].reshape(-1, 3), axis=0)
masque = (a.min(2) >= 251) | (a.max(2) - a.min(2) > 40) | (a.max(2) < 170)   # tuiles blanc pur, objets colorés ou foncés (fond pierre en dégradé exclu)
masque[:int(H*0.11)] = 0; masque[int(H*0.93):] = 0
def plages(v, seuil, mini):
    r, d = [], None
    for i, x in enumerate(v):
        if x > seuil and d is None: d = i
        if x <= seuil and d is not None:
            if i - d >= mini: r.append((d, i))
            d = None
    return r
cols = plages(masque.sum(0), H*0.05, W//14)
rows = sorted(sorted(plages(masque.sum(1), W*0.12, H//14), key=lambda r: r[1]-r[0], reverse=True)[:4])
assert len(cols) == 4 and len(rows) == 4, (cols, rows)
os.makedirs(out, exist_ok=True)
for k, (slug, nom) in enumerate(icones):
    (y0, y1), (x0, x1) = rows[k//4], cols[k%4]
    prof = masque[y0:y1, x0:x1].mean(1)
    for yy in range(int((y1-y0)*0.55), y1-y0):   # couper avant le libellé
        if prof[yy] < 0.08: y1 = y0 + yy; break   # bande vide entre la tuile et le libellé
    c = im.crop((x0+2, y0+2, x1-2, y1-2)).convert('RGBA'); w, h = c.size; s = max(w, h)
    m = Image.new('L', (w, h), 0); ImageDraw.Draw(m).rounded_rectangle((0, 0, w-1, h-1), radius=int(min(w, h)*0.2), fill=255)
    c.putalpha(m)
    sq = Image.new('RGBA', (s, s), (0, 0, 0, 0)); sq.paste(c, ((s-w)//2, (s-h)//2), c)
    sq.resize((256, 256), Image.LANCZOS).save(os.path.join(out, slug + '.png'))
print(n, len(icones), 'icônes')
