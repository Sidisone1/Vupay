"""Adapte des icônes Bogolan à la charte d'un projet.
Usage :
  python3 adapter_charte.py <palette|#tuile,#objet,#bande,#motif,#ombre> <sortie> [nom ou catégorie ...] [--png 256]
Exemples :
  python3 adapter_charte.py vupay-v4 ../vupay-icones cart home wallet --png 256
  python3 adapter_charte.py "#FFFFFF,#E11D48,#7C2D12,#FFF1F2,#4C0519" ../mon-projet commerce
Sans nom ni catégorie : toute la bibliothèque. Les SVG restent vectoriels ; --png demande Playwright (Chromium)."""
import json, os, re, sys, subprocess
ICI = os.path.dirname(os.path.abspath(__file__)); RACINE = os.path.dirname(ICI)
args = [a for a in sys.argv[1:]]
png = None
if '--png' in args:
    i = args.index('--png'); png = int(args[i + 1]); del args[i:i + 2]
pal_arg, sortie, filtres = args[0], args[1], args[2:]
PAL = json.load(open(os.path.join(RACINE, 'palettes.json')))
cles = ['tuile', 'objet', 'bande', 'motif', 'ombre']
if pal_arg in PAL: pal = PAL[pal_arg]
else: pal = dict(zip(cles, pal_arg.split(',')))
index = json.load(open(os.path.join(RACINE, 'index.json')))
choix = [i for i in index if not filtres or i['nom'] in filtres or i['categorie'] in filtres]
os.makedirs(sortie, exist_ok=True)
for it in choix:
    s = open(os.path.join(RACINE, it['fichier'])).read()
    for k in cles:  # remplace la valeur de repli de chaque variable : var(--bg-objet,#xxxxxx)
        s = re.sub(r'var\(--bg-%s,#[0-9A-Fa-f]{3,8}\)' % k, 'var(--bg-%s,%s)' % (k, pal[k]), s)
    open(os.path.join(sortie, it['nom'] + '.svg'), 'w').write(s)
print(len(choix), 'icônes écrites dans', sortie)
if png:
    subprocess.run(['node', os.path.join(ICI, 'svg_en_png.js'), sortie, str(png)], check=True)
