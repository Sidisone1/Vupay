"""Télécharge les tracés SVG des jeux libres (Iconify) : MDI (Apache-2.0, avec catégories) et Phosphor fill (MIT)."""
import json, urllib.request, urllib.parse
def get(url): return json.load(urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'curl/8.5.0'}), timeout=60))
EXCLUS = {'Brand / Logo', 'Social Media', 'Alpha / Numeric', 'Emoji'}  # logos de marque : ne pas redessiner (README) ; lettres/chiffres et emojis : peu utiles
out = {}
m = json.load(open('col-mdi.json'))
noms = {}
for cat, lst in m['categories'].items():
    if cat in EXCLUS: continue
    for n in lst:
        if n.endswith('-outline') or n in noms: continue   # version pleine seulement : meilleur volume « pâte à modeler »
        noms[n] = cat
p = json.load(open('col-ph.json'))
ph = [n for n in p['uncategorized'] if n.endswith('-fill')]
def lot(prefix, names):
    res = {}
    for i in range(0, len(names), 100):
        q = ','.join(names[i:i + 100])
        d = get(f'https://api.iconify.design/{prefix}.json?icons={q}')
        W, H = d.get('width', 24), d.get('height', 24)
        for n, ic in d['icons'].items():
            res[n] = {'body': ic['body'], 'w': ic.get('width', W), 'h': ic.get('height', H)}
    return res
mdi = lot('mdi', list(noms))
for n, v in mdi.items(): v['cat'] = noms[n]
phd = lot('ph', ph)
json.dump({'mdi': mdi, 'ph': phd}, open('traces.json', 'w'))
print('mdi', len(mdi), 'ph', len(phd))
