"""Découpe une planche générée (grille de tuiles crème) en icônes PNG 144x144 nommées.
Usage : python3 decouper_p1.py planche.png numero_planche dossier_sortie"""
import sys, os, json, numpy as np
from PIL import Image, ImageDraw
src, n, out = sys.argv[1], int(sys.argv[2]), sys.argv[3]
pl = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'planches_p1.json')))[n-1]
im = Image.open(src).convert('RGB'); a = np.asarray(im).astype(int)
H, W = a.shape[:2]
fond = np.median(a[5:40, 5:40].reshape(-1, 3), axis=0)
# pixels différents du fond de page (tuiles + objets) dans la zone centrale
diff = a[..., 2] < fond[2] - 14  # tuiles sable et objets : bleu nettement plus bas que le fond de page
diff[: int(H*0.20)] = 0; diff[int(H*0.90):] = 0
def runs(v, thr, minlen):
    r=[]; s=None
    for i,x in enumerate(v):
        if x>thr and s is None: s=i
        if x<=thr and s is not None:
            if i-s>=minlen: r.append((s,i))
            s=None
    if s is not None and len(v)-s>=minlen: r.append((s,len(v)))
    return r
cols = runs(diff.sum(0), H*0.05, W//20)
rows = runs(diff.sum(1), W*0.10, H//15)
# lignes de libellés : plus courtes que les tuiles ; garder les plus hautes
rows = sorted(sorted(rows, key=lambda r: r[1]-r[0], reverse=True)[:3])
assert len(cols)==4 and len(rows)==3, (cols, rows)
os.makedirs(out, exist_ok=True); noms=[]
for k, ic in enumerate(pl['icones']):
    (y0,y1),(x0,x1) = rows[k//4], cols[k%4]
    # le libellé est séparé de la tuile par une bande de fond de page : couper à cette bande
    prof = diff[y0:y1, x0:x1].mean(1)
    for yy in range(int((y1-y0)*0.55), y1-y0):
        if prof[yy] < 0.7: y1 = y0 + yy; break
    c = im.crop((x0+3, y0+3, x1-3, y1-3)).convert('RGBA'); w,h = c.size; s=max(w,h)
    m = Image.new('L', (w,h), 0); ImageDraw.Draw(m).rounded_rectangle((0,0,w-1,h-1), radius=int(min(w,h)*0.2), fill=255)
    c.putalpha(m)  # coins arrondis sur la tuile elle-même
    sq = Image.new('RGBA', (s,s), (0,0,0,0)); sq.paste(c, ((s-w)//2,(s-h)//2), c)
    sq.resize((144,144), Image.LANCZOS).save(os.path.join(out, ic['slug']+'.png')); noms.append(ic['slug'])
print(n, len(noms), 'icônes :', ', '.join(noms))
