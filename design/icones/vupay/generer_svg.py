"""Usage : python3 design/icones/vupay/generer_svg.py   puis   node design/icones/vupay/exporter_png.js
Icônes Vupay dans le style « Collection Bogolan » : tuile crème, volumes façon pâte d'argile,
ocre / rouille / brun / crème, frise zigzag-points. Produit des SVG (120 x 120)."""
import os, sys

OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.abspath(__file__)), "svg")
os.makedirs(OUT, exist_ok=True)

DEFS = '''<defs>
 <linearGradient id="tuile" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FDEFD6"/><stop offset="1" stop-color="#F4D9AC"/></linearGradient>
 <radialGradient id="ocre" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#FAC65A"/><stop offset=".55" stop-color="#EDA626"/><stop offset="1" stop-color="#C9800C"/></radialGradient>
 <radialGradient id="rouille" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#D9703F"/><stop offset=".6" stop-color="#B34A20"/><stop offset="1" stop-color="#8E3414"/></radialGradient>
 <radialGradient id="brun" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#7D4A31"/><stop offset=".6" stop-color="#55301F"/><stop offset="1" stop-color="#3A1E13"/></radialGradient>
 <radialGradient id="creme" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#FFFAF0"/><stop offset=".7" stop-color="#F8E7C8"/><stop offset="1" stop-color="#E9CFA2"/></radialGradient>
 <radialGradient id="peau" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#A86A45"/><stop offset="1" stop-color="#6E3E25"/></radialGradient>
 <radialGradient id="bronze" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#E6A46A"/><stop offset=".6" stop-color="#C07438"/><stop offset="1" stop-color="#8F4E1F"/></radialGradient>
 <radialGradient id="argent" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".6" stop-color="#D9D3C8"/><stop offset="1" stop-color="#A9A196"/></radialGradient>
 <filter id="argile" x="-20%" y="-20%" width="140%" height="150%">
  <feGaussianBlur in="SourceAlpha" stdDeviation="1.6" result="b"/>
  <feOffset in="b" dx="0" dy="2.6" result="o"/>
  <feComponentTransfer in="o" result="s"><feFuncA type="linear" slope=".38"/></feComponentTransfer>
  <feFlood flood-color="#6B3A1E"/><feComposite in2="s" operator="in" result="ombre"/>
  <feMerge><feMergeNode in="ombre"/><feMergeNode in="SourceGraphic"/></feMerge>
 </filter>
 <pattern id="motif" width="20" height="10" patternUnits="userSpaceOnUse">
  <path d="M1 7.5 L4.5 2.5 L8 7.5 L11.5 2.5 L15 7.5" fill="none" stroke="#FBE9CB" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
  <circle cx="18" cy="5" r="1.05" fill="#FBE9CB"/>
 </pattern>
</defs>'''

def tuile():
    return ('<rect x="2" y="2" width="116" height="116" rx="28" fill="url(#tuile)"/>'
            '<rect x="2" y="2" width="116" height="116" rx="28" fill="none" stroke="#FFFFFF" stroke-opacity=".55" stroke-width="1.5"/>')

def reflet(x, y, rx, ry, op=.45):
    return f'<ellipse cx="{x}" cy="{y}" rx="{rx}" ry="{ry}" fill="#FFFFFF" opacity="{op}"/>'

def svg(contenu):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">'
            f'{DEFS}{tuile()}<g transform="translate(60 61) scale(1.13) translate(-60 -60)"><g filter="url(#argile)">{contenu}</g></g></svg>')

I = {}

# Statut / story : anneau segmenté autour d'un portrait
I["statut-story"] = f'''
<circle cx="60" cy="60" r="36" fill="none" stroke="url(#ocre)" stroke-width="9" stroke-dasharray="44 9" stroke-linecap="round" transform="rotate(-90 60 60)"/>
<circle cx="60" cy="60" r="36" fill="none" stroke="url(#rouille)" stroke-width="9" stroke-dasharray="44 182" stroke-linecap="round" transform="rotate(-90 60 60)"/>
<circle cx="60" cy="60" r="25" fill="url(#creme)"/>
<circle cx="60" cy="55" r="9" fill="url(#peau)"/>
<path d="M44 76 Q60 62 76 76 Q68 84 60 84 Q52 84 44 76Z" fill="url(#rouille)"/>
<path d="M48 76 l3 -3 3 3 3 -3 3 3 3 -3 3 3 3 -3 3 3" fill="none" stroke="#FBE9CB" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
{reflet(48, 42, 7, 4)}'''

# Campagne : mégaphone avec bande bogolan
I["campagne"] = f'''
<path d="M30 52 L70 34 L70 86 L30 68 Z" fill="url(#ocre)" stroke="#C9800C" stroke-width="1"/>
<rect x="20" y="50" width="14" height="20" rx="5" fill="url(#brun)"/>
<path d="M44 46 L58 40 L58 80 L44 74 Z" fill="url(#rouille)"/>
<path d="M44 46 L58 40 L58 80 L44 74 Z" fill="url(#motif)" transform="rotate(0)"/>
<path d="M34 70 L40 90 Q42 95 47 93 L50 92 L45 72 Z" fill="url(#brun)"/>
<rect x="68" y="32" width="9" height="56" rx="4.5" fill="url(#brun)"/>
<path d="M85 46 Q93 60 85 74" fill="none" stroke="url(#rouille)" stroke-width="5" stroke-linecap="round"/>
<path d="M93 38 Q106 60 93 82" fill="none" stroke="url(#ocre)" stroke-width="5" stroke-linecap="round"/>
{reflet(46, 44, 9, 3.5)}'''

# Lien / clic : flèche de pointeur et ondes de clic
I["clic-lien"] = f'''
<path d="M36 50 Q30 40 38 34" fill="none" stroke="url(#ocre)" stroke-width="5" stroke-linecap="round"/>
<path d="M50 36 Q46 28 54 24" fill="none" stroke="url(#ocre)" stroke-width="5" stroke-linecap="round"/>
<path d="M30 64 Q22 62 20 54" fill="none" stroke="url(#ocre)" stroke-width="5" stroke-linecap="round"/>
<path d="M46 44 L92 62 L72 70 L86 90 L77 96 L63 76 L50 90 Z" fill="url(#rouille)" stroke="#8E3414" stroke-width="2" stroke-linejoin="round"/>
<path d="M53 56 l4 6 4 -6 4 6 4 -6" fill="none" stroke="#FBE9CB" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
{reflet(58, 54, 7, 3)}'''

# Preuve : téléphone, capture et œil
I["preuve-capture"] = f'''
<rect x="34" y="18" width="52" height="84" rx="11" fill="url(#brun)"/>
<rect x="40" y="27" width="40" height="62" rx="5" fill="url(#creme)"/>
<rect x="40" y="27" width="40" height="22" rx="5" fill="url(#ocre)"/>
<path d="M45 61 Q60 50 75 61 Q60 72 45 61Z" fill="#FFFFFF" stroke="#8E3414" stroke-width="2"/>
<circle cx="60" cy="61" r="5.5" fill="url(#rouille)"/>
<path d="M44 81 l3 -4 3 4 3 -4 3 4 3 -4 3 4 3 -4 3 4 3 -4 3 4" fill="none" stroke="#B34A20" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24 30 V22 Q24 18 28 18 H34 M96 30 V22 Q96 18 92 18 H86 M24 90 V98 Q24 102 28 102 H34 M96 90 V98 Q96 102 92 102 H86" fill="none" stroke="url(#rouille)" stroke-width="4.5" stroke-linecap="round"/>
{reflet(48, 23, 8, 2.5, .3)}'''

# Code unique : étiquette avec motif et œillet
I["code-unique"] = f'''
<path d="M24 46 Q24 38 32 38 L76 38 L98 60 L76 82 L32 82 Q24 82 24 74 Z" fill="url(#ocre)" stroke="#C9800C" stroke-width="1"/>
<circle cx="80" cy="60" r="6" fill="url(#creme)"/>
<rect x="32" y="48" width="38" height="24" rx="5" fill="url(#rouille)"/>
<rect x="32" y="48" width="38" height="24" rx="5" fill="url(#motif)"/>
<path d="M86 60 Q100 56 104 44" fill="none" stroke="url(#brun)" stroke-width="3.5" stroke-linecap="round"/>
{reflet(42, 43, 12, 3)}'''

# Retrait Mobile Money : téléphone et billet qui sort
I["retrait-mobile"] = f'''
<rect x="22" y="22" width="44" height="76" rx="10" fill="url(#brun)"/>
<rect x="28" y="31" width="32" height="54" rx="4" fill="url(#creme)"/>
<circle cx="44" cy="58" r="11" fill="url(#ocre)"/>
<circle cx="44" cy="58" r="6" fill="none" stroke="#B34A20" stroke-width="2.2"/>
<g transform="rotate(-14 80 64)"><rect x="56" y="48" width="44" height="28" rx="5" fill="url(#rouille)"/>
<rect x="56" y="48" width="44" height="28" rx="5" fill="url(#motif)" opacity=".9"/>
<circle cx="78" cy="62" r="7" fill="url(#ocre)"/></g>
<path d="M78 92 l8 -8 8 8" fill="none" stroke="url(#rouille)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
{reflet(34, 27, 7, 2.5, .3)}'''

# Portefeuille : porte-monnaie avec bande bogolan et pièce
I["portefeuille"] = f'''
<rect x="20" y="34" width="72" height="56" rx="12" fill="url(#ocre)" stroke="#C9800C" stroke-width="1"/>
<rect x="20" y="34" width="72" height="14" rx="7" fill="url(#rouille)"/>
<rect x="24" y="37" width="64" height="8" rx="4" fill="url(#motif)"/>
<rect x="66" y="54" width="34" height="22" rx="8" fill="url(#rouille)"/>
<circle cx="78" cy="65" r="5.5" fill="url(#creme)"/>
<circle cx="40" cy="28" r="12" fill="url(#ocre)" stroke="#C9800C" stroke-width="1.5"/>
<circle cx="40" cy="28" r="7" fill="none" stroke="#B34A20" stroke-width="2"/>
{reflet(36, 58, 12, 4)}'''

def medaille(nom, metal):
    return f'''
<path d="M44 18 L58 52 L48 56 L34 22 Z" fill="url(#rouille)"/>
<path d="M76 18 L62 52 L72 56 L86 22 Z" fill="url(#rouille)"/>
<path d="M38 22 l4 6 M80 22 l-4 6" stroke="#FBE9CB" stroke-width="1.6" stroke-linecap="round"/>
<circle cx="60" cy="74" r="28" fill="url(#{metal})"/>
<circle cx="60" cy="74" r="20" fill="none" stroke="#FFFFFF" stroke-opacity=".55" stroke-width="2"/>
<path d="M60 60 L64.5 69 L74 70.5 L67 77 L68.8 86.5 L60 82 L51.2 86.5 L53 77 L46 70.5 L55.5 69 Z" fill="url(#{metal})" stroke="#000" stroke-opacity=".18" stroke-width="1.2" stroke-linejoin="round"/>
{reflet(50, 62, 8, 4)}'''

I["niveau-bronze"] = medaille("bronze", "bronze")
I["niveau-argent"] = medaille("argent", "argent")
I["niveau-or"] = medaille("or", "ocre")

# Parrainage : cadeau à bande bogolan
I["parrainage"] = f'''
<rect x="24" y="52" width="72" height="46" rx="8" fill="url(#ocre)" stroke="#C9800C" stroke-width="1"/>
<rect x="20" y="40" width="80" height="18" rx="7" fill="url(#ocre)" stroke="#C9800C" stroke-width="1"/>
<rect x="52" y="40" width="16" height="58" fill="url(#rouille)"/>
<rect x="52" y="40" width="16" height="58" fill="url(#motif)"/>
<path d="M60 40 Q44 20 36 30 Q32 40 60 40 Q88 40 84 30 Q76 20 60 40Z" fill="url(#rouille)" stroke="#8E3414" stroke-width="1.5"/>
{reflet(36, 46, 10, 3)}'''

# Annonceur / marque : boutique avec auvent bogolan
I["annonceur"] = f'''
<rect x="26" y="52" width="68" height="44" rx="6" fill="url(#creme)"/>
<path d="M22 36 L98 36 L98 52 Q91 60 84 52 Q77 60 70 52 Q63 60 56 52 Q49 60 42 52 Q35 60 28 52 Q22 56 22 50Z" fill="url(#rouille)"/>
<rect x="24" y="38" width="72" height="9" fill="url(#motif)"/>
<rect x="26" y="26" width="68" height="12" rx="5" fill="url(#ocre)"/>
<rect x="36" y="64" width="22" height="32" rx="4" fill="url(#brun)"/>
<rect x="64" y="64" width="22" height="16" rx="3" fill="url(#ocre)"/>
<circle cx="53" cy="81" r="1.8" fill="#F8E7C8"/>
{reflet(44, 30, 12, 2.5, .35)}'''

# Ciblage : cible et flèche
I["ciblage"] = f'''
<circle cx="56" cy="64" r="36" fill="url(#rouille)"/>
<circle cx="56" cy="64" r="26" fill="url(#creme)"/>
<circle cx="56" cy="64" r="16" fill="url(#ocre)"/>
<circle cx="56" cy="64" r="7" fill="url(#rouille)"/>
<path d="M58 62 L92 28" stroke="url(#brun)" stroke-width="5" stroke-linecap="round"/>
<path d="M88 22 L100 20 L98 32 L92 28 Z" fill="url(#brun)"/>
<path d="M84 34 L94 36 L88 42 Z M80 30 L82 20 L88 26 Z" fill="url(#ocre)"/>
{reflet(42, 44, 9, 4)}'''

# Statistiques : barres et courbe
I["statistiques"] = f'''
<rect x="22" y="92" width="76" height="8" rx="4" fill="url(#brun)"/>
<rect x="28" y="62" width="14" height="30" rx="4" fill="url(#rouille)"/>
<rect x="48" y="50" width="14" height="42" rx="4" fill="url(#ocre)"/>
<rect x="68" y="38" width="14" height="54" rx="4" fill="url(#rouille)"/>
<rect x="68" y="38" width="14" height="54" rx="4" fill="url(#motif)"/>
<path d="M26 50 L48 36 L64 42 L92 22" fill="none" stroke="url(#brun)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="92" cy="22" r="6" fill="url(#ocre)" stroke="#8E3414" stroke-width="1.5"/>
{reflet(52, 54, 4, 6, .35)}'''

# Budget : sac d'argent à motif
I["budget"] = f'''
<path d="M48 34 Q60 42 72 34 L76 26 Q60 20 44 26 Z" fill="url(#rouille)"/>
<path d="M50 38 Q22 58 26 82 Q30 100 60 100 Q90 100 94 82 Q98 58 70 38 Z" fill="url(#ocre)" stroke="#C9800C" stroke-width="1"/>
<rect x="44" y="34" width="32" height="8" rx="4" fill="url(#brun)"/>
<rect x="32" y="66" width="56" height="12" rx="4" fill="url(#rouille)"/>
<rect x="32" y="66" width="56" height="12" rx="4" fill="url(#motif)"/>
<circle cx="60" cy="88" r="5" fill="url(#creme)"/>
{reflet(42, 56, 8, 10, .35)}'''

# Compte à rebours 24 h : sablier
I["compte-a-rebours"] = f'''
<rect x="30" y="18" width="60" height="12" rx="6" fill="url(#brun)"/>
<rect x="30" y="90" width="60" height="12" rx="6" fill="url(#brun)"/>
<path d="M38 30 H82 Q82 52 64 60 Q82 68 82 90 H38 Q38 68 56 60 Q38 52 38 30Z" fill="url(#creme)" stroke="#E9CFA2" stroke-width="1.5"/>
<path d="M44 36 H76 Q74 48 60 56 Q46 48 44 36Z" fill="url(#ocre)"/>
<path d="M60 64 L60 76" stroke="#E3961A" stroke-width="2.5" stroke-dasharray="2 3"/>
<path d="M42 88 Q50 76 60 76 Q70 76 78 88Z" fill="url(#rouille)"/>
<path d="M47 86 l3 -3 3 3 3 -3 3 3 3 -3 3 3 3 -3 3 3" fill="none" stroke="#FBE9CB" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
{reflet(48, 40, 4, 8, .35)}'''

# Vues validées : œil + coche
I["vues-validees"] = f'''
<path d="M14 58 Q60 14 106 58 Q60 102 14 58Z" fill="url(#creme)" stroke="#E9CFA2" stroke-width="1.5"/>
<circle cx="60" cy="58" r="20" fill="url(#ocre)"/>
<circle cx="60" cy="58" r="10" fill="url(#brun)"/>
<circle cx="55" cy="53" r="3.5" fill="#FFFFFF" opacity=".8"/>
<path d="M22 70 l5 -5 5 5 5 -5 5 5" fill="none" stroke="#B34A20" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="88" cy="86" r="16" fill="url(#rouille)"/>
<path d="M80 86 L86 92 L97 80" fill="none" stroke="#FBE9CB" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>'''

# Modération : loupe sur un visuel 9:16
I["moderation"] = f'''
<rect x="22" y="16" width="46" height="80" rx="9" fill="url(#ocre)" stroke="#C9800C" stroke-width="1"/>
<rect x="22" y="70" width="46" height="26" rx="9" fill="url(#rouille)"/>
<rect x="24" y="74" width="42" height="12" fill="url(#motif)"/>
<rect x="30" y="26" width="30" height="5" rx="2.5" fill="#FFF6E6" opacity=".8"/>
<rect x="30" y="35" width="20" height="5" rx="2.5" fill="#FFF6E6" opacity=".8"/>
<circle cx="74" cy="62" r="18" fill="#FFF6E6" fill-opacity=".85" stroke="url(#brun)" stroke-width="7"/>
<path d="M87 76 L100 92" stroke="url(#brun)" stroke-width="10" stroke-linecap="round"/>
<path d="M66 62 L72 68 L83 56" fill="none" stroke="#4C7A2C" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>'''

# Icône de l'application : anneau de statut + point, frise bogolan
LOGO = f'''
<circle cx="60" cy="54" r="30" fill="none" stroke="url(#ocre)" stroke-width="13"/>
<path d="M60 24 A30 30 0 0 1 90 54" fill="none" stroke="url(#rouille)" stroke-width="13" stroke-linecap="round"/>
<path d="M90 54 A30 30 0 0 1 72 81.5" fill="none" stroke="url(#rouille)" stroke-width="13" stroke-linecap="round"/>
<circle cx="60" cy="54" r="10" fill="url(#brun)"/>
{reflet(46, 34, 9, 4)}'''
I["vupay-app"] = LOGO

def svg_app(contenu):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">{DEFS}'
            '<rect width="120" height="120" fill="url(#tuile)"/>'
            f'<g filter="url(#argile)">{contenu}</g>'
            '<rect x="0" y="96" width="120" height="24" fill="url(#rouille)"/><rect x="0" y="103" width="120" height="10" fill="url(#motif)"/></svg>')

for nom, c in I.items():
    contenu = svg_app(c) if nom == "vupay-app" else svg(c)
    open(os.path.join(OUT, nom + ".svg"), "w").write(contenu)
print(len(I), "icônes")
