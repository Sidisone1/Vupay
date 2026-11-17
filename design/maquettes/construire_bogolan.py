"""Construit design/maquettes/maquettes-bogolan.html : les 22 maquettes (diffuseur, annonceur, admin) sur une seule page,
avec les icônes 3D Bogolan de Vupay (barre d'onglets, menus latéraux, étapes, encarts) et une galerie des icônes.
Les maquettes d'origine ne sont pas modifiées. Usage : python3 design/maquettes/construire_bogolan.py
Option : --icones <préfixe> pour changer le chemin des icônes (par défaut ../icones/bogolan/vupay/png/)."""
import json, os, re, sys

ICI = os.path.dirname(os.path.abspath(__file__))
PREFIXE = sys.argv[sys.argv.index('--icones') + 1] if '--icones' in sys.argv else '../icones/bogolan/vupay/png/'
SORTIE = sys.argv[sys.argv.index('--sortie') + 1] if '--sortie' in sys.argv else os.path.join(ICI, 'maquettes-bogolan.html')
ICONES = json.load(open(os.path.join(ICI, '..', 'icones', 'bogolan', 'vupay', 'scripts', 'icones_vupay.json')))

css = open(os.path.join(ICI, 'vupay-ui.css')).read()
police = re.search(r'@import url\("([^"]+)"\);', css).group(1)
css = re.sub(r'@import url\("[^"]+"\);\n?', '', css)
css = css.replace('padding: 40px 24px;', 'padding-block: 40px; padding-left: max(16px, env(safe-area-inset-left, 0px)); '
                  'padding-right: max(16px, env(safe-area-inset-right, 0px));', 1)

ESPACES = [('diffuseur', 'Espace diffuseur', '9 écrans mobiles', 'diffuseur/maquettes-diffuseur.html'),
           ('annonceur', 'Espace annonceur', '5 écrans web', 'annonceur/maquettes-annonceur.html'),
           ('admin', 'Back-office', '8 écrans web', 'admin/maquettes-admin.html')]
MENU = {"Vue d'ensemble": 'tableau-de-bord', 'Tableau de bord': 'tableau-de-bord', 'Preuves': 'preuves',
        'Identités (KYC)': 'identites', 'Retraits': 'retraits', 'Utilisateurs': 'utilisateurs', 'Paramètres': 'parametres',
        'Journal': 'journal', 'Nouvelle campagne': 'nouvelle-campagne', 'Portefeuille': 'portefeuille',
        'Factures': 'factures', 'Entreprise': 'entreprise'}
ONGLETS = {'Campagnes': 'campagnes', 'Gains': 'gains', 'Retrait': 'retrait', 'Profil': 'profil'}
PICTOS = {'🔒': 'cadenas', 'ⓘ': 'info', '👁': 'vues', '🔍': 'recherche', '⏱': 'chrono'}

def img(nom, classe):
    return f'<img class="{classe}" src="{PREFIXE}{nom}.png" alt="">'

sections = ''
for sid, _, _, fichier in ESPACES:
    corps = re.search(r'<body>(.*)</body>', open(os.path.join(ICI, fichier)).read(), re.S).group(1)
    corps = re.sub(r'id="(e\d+)"', lambda m: f'id="{sid}-{m.group(1)}"', corps)
    corps = re.sub(r'<svg viewBox="0 0 24 24"[^>]*>(?:(?!</svg>).)*</svg>(Campagnes|Gains|Retrait|Profil)',
                   lambda m: img(ONGLETS[m.group(1)], 'io') + m.group(1), corps, flags=re.S)
    campagnes = 'moderation' if sid == 'admin' else 'campagnes'   # côté admin, « Campagnes » = modération
    def menu(m):
        lib = m.group(2)
        nom = campagnes if lib == 'Campagnes' else MENU.get(lib)
        return f'<a class="{m.group(1)}">{img(nom, "il")}{lib}' if nom else m.group(0)
    corps = re.sub(r'<a class="(actif|)">([^<]+)', menu, corps)
    for emoji, nom in PICTOS.items():
        corps = corps.replace(emoji, img(nom, 'ie'))
    for num, nom in (('1', 'accepter'), ('2', 'publier'), ('3', 'preuve')):
        corps = corps.replace(f'<span class="rx">{num}</span><span><b>', f'<span class="rx">{num}</span>{img(nom, "is")}<span><b>', 1)
    sections += f'<section class="espace" id="{sid}">\n{corps}\n</section>\n'

galerie = ''.join(f'<figure><img src="{PREFIXE}{n}.png" alt="" loading="lazy"><figcaption>{l}<code>{n}</code></figcaption></figure>'
                  for n, l in ICONES)
sections += f'''<section class="espace" id="icones">
<header class="planche"><div><div class="marque"><i></i>vupay</div><h1>Icônes Bogolan</h1><p>{len(ICONES)} icônes 3D aux couleurs de Vupay (vert feuille, safran, corail, encre vert-noir) avec une bande bogolan brun terre.</p></div>
<p class="doux">Charte v3 · couleur de base verte · aucun logo de réseau social</p></header>
<div class="galerie-ico">{galerie}</div>
</section>
'''
menu_haut = ''.join(f'<a href="#{s}"><b>{t}</b><small>{d}</small></a>' for s, t, d, _ in ESPACES)
menu_haut += f'<a href="#icones"><b>Icônes Bogolan</b><small>{len(ICONES)} icônes 3D</small></a>'
style = css + """
.sommaire{position:sticky;top:env(safe-area-inset-top,0px);z-index:20;max-width:1720px;margin:0 auto 34px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;background:rgba(220,220,211,.92);backdrop-filter:blur(8px);padding:12px 0;border-bottom:1px solid var(--trait)}
body::before{content:"";position:fixed;inset:0 0 auto;height:env(safe-area-inset-top,0px);z-index:30;background:#DCDCD3}
.sommaire .marque{margin-right:12px}
.sommaire a{display:flex;flex-direction:column;text-decoration:none;color:var(--encre);background:var(--surface);border:1px solid var(--trait);border-radius:var(--r-m);padding:8px 14px;line-height:1.25}
.sommaire a:hover,.sommaire a:focus-visible{border-color:var(--vert);outline:none;box-shadow:0 0 0 3px var(--vert-pale)}
.sommaire a b{font-family:var(--titre);font-size:14px}
.sommaire a small{color:var(--doux);font-size:11.5px}
.espace{scroll-margin-top:90px;margin-bottom:64px}
.espace+.espace{border-top:2px dashed #C5C5BB;padding-top:48px}
.grille>figure{max-width:100%;min-width:0;overflow-x:auto;padding-bottom:6px;align-items:safe center}
.ecran,.tel{flex:none}
.grille>figure>figcaption{align-self:stretch;position:sticky;left:0}
.onglets img.io{width:28px;height:28px;border-radius:7px;opacity:.5;filter:grayscale(.7)}
.onglets div.actif img.io{opacity:1;filter:none}
.lateral a img.il{width:26px;height:26px;border-radius:7px;flex:none}
.lateral a:not(.actif) img.il{opacity:.85}
img.ie{width:1.5em;height:1.5em;vertical-align:-.4em;border-radius:5px;flex:none}
img.is{width:34px;height:34px;border-radius:9px;flex:none}
.galerie-ico{max-width:1720px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(112px,1fr));gap:18px}
.galerie-ico figure{gap:8px;text-align:center}
.galerie-ico img{width:92px;height:92px}
.galerie-ico figcaption{font-size:12.5px;font-weight:600;line-height:1.3}
.galerie-ico code{display:block;font-size:10.5px;font-weight:500;color:var(--doux)}
"""
page = f'''<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Maquettes Vupay</title>
<link rel="stylesheet" href="{police}">
<style>
{style}
</style>
</head>
<body>
<nav class="sommaire" aria-label="Espaces"><div class="marque"><i></i>vupay</div>{menu_haut}</nav>
{sections}</body>
</html>
'''
open(SORTIE, 'w').write(page)
print('écrit :', SORTIE, f'({len(page)//1024} Ko)')
