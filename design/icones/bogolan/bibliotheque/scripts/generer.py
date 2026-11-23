"""Génère la bibliothèque d'icônes Bogolan à partir des jeux libres téléchargés (traces.json).
Sortie : svg/<categorie>/<nom>.svg, index.json, palettes.json."""
import json, os, re, shutil, sys
sys.path.insert(0, os.path.dirname(__file__))
from bogolan import icone, PALETTES
CAT_FR = {
 'Account / User': 'personnes-comptes', 'Agriculture': 'agriculture', 'Alert / Error': 'alertes', 'Animal': 'animaux',
 'Arrange': 'disposition', 'Arrow': 'fleches', 'Audio': 'audio', 'Automotive': 'automobile', 'Banking': 'banque-finance',
 'Battery': 'batterie', 'Cellphone / Phone': 'telephones', 'Clothing': 'vetements', 'Cloud': 'cloud', 'Color': 'couleurs',
 'Currency': 'monnaies', 'Database': 'donnees', 'Date / Time': 'date-heure', 'Developer / Languages': 'developpement',
 'Device / Tech': 'appareils', 'Drawing / Art': 'dessin-art', 'Edit / Modify': 'edition', 'Files / Folders': 'fichiers',
 'Food / Drink': 'nourriture-boissons', 'Form': 'formulaires', 'Gaming / RPG': 'jeux', 'Geographic Information System': 'cartographie',
 'Hardware / Tools': 'outils', 'Health / Beauty': 'sante-beaute', 'Holiday': 'fetes', 'Home Automation': 'maison',
 'Lock': 'securite', 'Math': 'maths', 'Medical / Hospital': 'medical', 'Music': 'musique', 'Nature': 'nature',
 'Navigation': 'navigation', 'Notification': 'notifications', 'People / Family': 'famille', 'Photography': 'photo',
 'Places': 'lieux', 'Printer': 'impression', 'Religion': 'religion', 'Science': 'science', 'Settings': 'reglages',
 'Shape': 'formes', 'Shopping': 'commerce', 'Sport': 'sport', 'Text / Content / Format': 'texte', 'Tooltip': 'bulles',
 'Transportation + Flying': 'transport-aerien', 'Transportation + Other': 'transport-divers', 'Transportation + Road': 'transport-routier',
 'Transportation + Water': 'transport-maritime', 'Vector': 'vectoriel', 'Video / Movie': 'video', 'View': 'affichage', 'Weather': 'meteo'}
d = json.load(open(os.path.join(os.path.dirname(__file__), 'traces.json')))
out = sys.argv[1]; shutil.rmtree(out + '/svg', ignore_errors=True)
index = []
def ecrire(nom, cat, src, lic, ic):
    os.makedirs(f'{out}/svg/{cat}', exist_ok=True)
    uid = re.sub(r'[^a-z0-9]', '', nom)[:24]
    open(f'{out}/svg/{cat}/{nom}.svg', 'w').write(icone(ic['body'], ic['w'], ic['h'], uid=uid))
    index.append({'nom': nom, 'categorie': cat, 'source': src, 'licence': lic, 'fichier': f'svg/{cat}/{nom}.svg'})
for n, ic in sorted(d['mdi'].items()):
    ecrire(n, CAT_FR.get(ic['cat'], 'divers'), f'mdi:{n}', 'Apache-2.0 (Material Design Icons)', ic)
pris = set(d['mdi'])
for n, ic in sorted(d['ph'].items()):
    nom = n[:-5] if n[:-5] not in pris else n[:-5] + '-2'   # même nom qu'une icône MDI : variante « -2 »
    ecrire(nom, 'usage-general', f'ph:{n}', 'MIT (Phosphor Icons)', ic)
# ---- deuxième lot (traces2.json) : MDI reste, Tabler, Lucide, Material Symbols, Fluent ----
p2 = os.path.join(os.path.dirname(__file__), 'traces2.json')
if os.path.exists(p2):
    from collections import Counter, defaultdict
    GEN = {'plus','minus','off','check','circle','box','square','alert','remove','edit','add','filled','fill','outline','x','up','down','left','right','small','big','multiple','variant','24','20','16','2','3','on','question','star','heart','lock','search','cog','sync','arrow','badge','dots','horizontal','vertical','open','closed','one','two'}
    score = defaultdict(Counter)
    for i in index:
        if i['categorie'] == 'usage-general': continue
        for tok in i['nom'].split('-'):
            if tok not in GEN: score[tok][i['categorie']] += 1
    MS = {'Actions':'actions','Activities':'activites','Android':'appareils','Audio & Video':'video','Business':'entreprise','Communicate':'communication','Hardware':'appareils','Home':'maison','Household':'maison','Images':'photo','Maps':'cartographie','Privacy':'securite','Social':'personnes-comptes','Text':'texte','Transit':'transport-divers','Travel':'lieux','UI Actions':'interface'}
    LIC = {'mdi':'Apache-2.0 (Material Design Icons)','tabler':'MIT (Tabler Icons)','lucide':'ISC (Lucide)','material-symbols':'Apache-2.0 (Material Symbols)','fluent':'MIT (Fluent UI System Icons)'}
    def deviner(nom):
        c = Counter()
        for tok in re.split(r'[-_]', nom):
            if tok in score and tok not in GEN: c.update(score[tok])
        return c.most_common(1)[0][0] if c else 'divers'
    noms = {i['nom'] for i in index}
    d2 = json.load(open(p2))
    for prefix, ics in d2.items():
        for n, ic in sorted(ics.items()):
            if re.search(r'(^|-)brand(-|$)|(^|-)logo(-|$)', n): continue   # logos de marque : jamais redessinés
            nom = re.sub(r'-24-filled$', '', n); nom = re.sub(r'-filled$', '', nom)
            if nom in noms: nom = nom + '-' + {'mdi':'m','tabler':'t','lucide':'l','material-symbols':'s','fluent':'f'}[prefix]
            if nom in noms: continue
            noms.add(nom)
            if prefix == 'mdi' and ic['cat'] == 'Alpha / Numeric': cat = 'lettres-chiffres'
            elif prefix == 'mdi' and ic['cat'] == 'Emoji': cat = 'emojis'
            elif prefix == 'material-symbols' and ic['cat'] in MS: cat = MS[ic['cat']]
            else: cat = deviner(nom)
            ecrire(nom, cat, f'{prefix}:{n}', LIC[prefix], ic)
json.dump(index, open(f'{out}/index.json', 'w'), ensure_ascii=False, indent=0)
json.dump(PALETTES, open(f'{out}/palettes.json', 'w'), ensure_ascii=False, indent=2)
from collections import Counter
c = Counter(i['categorie'] for i in index)
print(len(index), 'icônes,', len(c), 'catégories'); print(c.most_common())
