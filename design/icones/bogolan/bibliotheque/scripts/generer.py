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
json.dump(index, open(f'{out}/index.json', 'w'), ensure_ascii=False, indent=0)
json.dump(PALETTES, open(f'{out}/palettes.json', 'w'), ensure_ascii=False, indent=2)
from collections import Counter
c = Counter(i['categorie'] for i in index)
print(len(index), 'icônes,', len(c), 'catégories'); print(c.most_common())
