"""Deuxième lot : complète la bibliothèque avec le reste des jeux libres, sans doublons de forme ni logos de marque.
MDI (reste), Tabler (MIT), Lucide (ISC), Material Symbols (Apache-2.0, style de base), Fluent UI (MIT, 24 px plein)."""
import json, re, urllib.request
def get(url): return json.load(urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'curl/8.5.0'}), timeout=90))
def col(p): return json.load(open(f'col-{p}.json'))
def norm(n):
    n = re.sub(r'-(24|20|16|28|32|48|12|10)-(filled|regular)$', '', n)
    n = re.sub(r'-(fill|filled|outline|outlined|rounded|sharp|solid|line)$', '', n)
    return n
deja = json.load(open('traces.json'))
pris = {norm(n) for n in deja['mdi']} | {norm(n) for n in deja['ph']}
si = col('si'); marques = set(si.get('uncategorized', [])) | {n for v in si.get('categories', {}).values() for n in v}
marques |= {m.replace('dot', '') for m in marques}
m = col('mdi'); marques |= {n for c, v in m['categories'].items() if c in ('Brand / Logo', 'Social Media') for n in v}
def est_marque(n): return n in marques or norm(n) in marques
lots = {}
def choisir(prefix, noms, cat=None):
    sel = []
    for n in noms:
        b = norm(n)
        if b in pris or est_marque(n) or est_marque(b): continue
        pris.add(b); sel.append(n)
    lots[prefix] = (sel, cat or {})
# MDI : reste (non classées + lettres/chiffres + emojis), versions pleines
mcat = {}
for c, v in m['categories'].items():
    for n in v: mcat.setdefault(n, c)
reste = [n for n in m.get('uncategorized', []) if not n.endswith('-outline')] + \
        [n for c, v in m['categories'].items() if c in ('Alpha / Numeric', 'Emoji') for n in v if not n.endswith('-outline')]
choisir('mdi', reste, mcat)
t = col('tabler')['uncategorized']; tf = [n for n in t if n.endswith('-filled')]
choisir('tabler', tf + [n for n in t if not n.endswith('-filled')])
choisir('lucide', col('lucide')['uncategorized'])
ms = col('material-symbols'); mscat = {}
base = []
for c, v in ms['categories'].items():
    for n in v:
        if re.search(r'-(rounded|sharp|outline)', n): continue
        mscat[n] = c; base.append(n)
choisir('material-symbols', base, mscat)
f = col('fluent')['uncategorized']; f24 = [n for n in f if n.endswith('-24-filled')]
choisir('fluent', f24)
out = {}
for prefix, (noms, cat) in lots.items():
    res = {}
    for i in range(0, len(noms), 100):
        d = get(f'https://api.iconify.design/{prefix}.json?icons=' + ','.join(noms[i:i + 100]))
        W, H = d.get('width', 24), d.get('height', 24)
        for n, ic in d['icons'].items():
            res[n] = {'body': ic['body'], 'w': ic.get('width', W), 'h': ic.get('height', H), 'cat': cat.get(n, '')}
    out[prefix] = res
    print(prefix, len(noms), 'choisies,', len(res), 'reçues', flush=True)
json.dump(out, open('traces2.json', 'w'))
