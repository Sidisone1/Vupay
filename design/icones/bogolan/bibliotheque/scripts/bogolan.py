"""Convertit un tracé d'icône libre en icône « Collection Bogolan » (SVG 256 × 256).
Couleurs pilotées par variables CSS (valeurs par défaut = palette Bogolan d'origine) :
  --bg-tuile (fond de tuile), --bg-objet (objet), --bg-bande (bande bogolan), --bg-motif (zigzag et points), --bg-ombre.
Pour adapter à une charte : redéfinir ces 5 variables (CSS) ou remplacer les valeurs de repli dans le fichier."""
import re

PALETTES = {
    'bogolan': {'tuile': '#FBF1E2', 'objet': '#E8A93A', 'bande': '#B04A26', 'motif': '#F6E7CC', 'ombre': '#4A2A1C'},
    'ss-dropship': {'tuile': '#F2F6FB', 'objet': '#0077C8', 'bande': '#6B3E26', 'motif': '#F6E7CC', 'ombre': '#10213D'},
    'vupay-v4': {'tuile': '#FFF7E6', 'objet': '#006B3A', 'bande': '#884A1F', 'motif': '#FFF7E6', 'ombre': '#092E1B'},
    'tchi-teliman': {'tuile': '#FBF1E2', 'objet': '#E8A93A', 'bande': '#B04A26', 'motif': '#F6E7CC', 'ombre': '#4A2A1C'},
}

def nettoyer(body):
    # les tracés Iconify utilisent currentColor : on les rend neutres (la couleur vient du gabarit)
    b = re.sub(r'\s(fill|stroke)="currentColor"', '', body)
    return b

def icone(body, w, h, uid='i', palette='bogolan'):
    P = PALETTES[palette]
    body = nettoyer(body)
    taille = 150.0
    k = taille / max(w, h)
    ox, oy = (256 - w * k) / 2, (256 - h * k) / 2 - 6
    tr = f'translate({ox:.2f} {oy:.2f}) scale({k:.4f})'
    v = lambda n: f'var(--bg-{n},{P[n]})'
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
<defs>
<pattern id="m{uid}" width="24" height="34" patternUnits="userSpaceOnUse" y="112"><path d="M0 11 6 5 12 11 18 5 24 11" fill="none" style="stroke:{v('motif')}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/><circle cx="6" cy="22" r="2" style="fill:{v('motif')}"/><circle cx="18" cy="22" r="2" style="fill:{v('motif')}"/><path d="M0 29 H24" style="stroke:{v('motif')}" stroke-width="1.4" stroke-dasharray="3 3"/></pattern>
<mask id="f{uid}" maskUnits="userSpaceOnUse" x="0" y="0" width="256" height="256"><g transform="{tr}" fill="#fff" stroke="#fff">{body}</g></mask>
<filter id="a{uid}" filterUnits="userSpaceOnUse" x="0" y="0" width="256" height="256"><feGaussianBlur in="SourceAlpha" stdDeviation="5" result="b"/><feDiffuseLighting in="b" surfaceScale="7" diffuseConstant="1.05" lighting-color="#fff" result="l"><feDistantLight azimuth="235" elevation="48"/></feDiffuseLighting><feComposite in="l" in2="SourceAlpha" operator="in" result="lc"/><feBlend in="SourceGraphic" in2="lc" mode="multiply" result="m"/><feSpecularLighting in="b" surfaceScale="6" specularConstant="0.55" specularExponent="34" lighting-color="#fff" result="s"><feDistantLight azimuth="235" elevation="58"/></feSpecularLighting><feComposite in="s" in2="SourceAlpha" operator="in" result="sc"/><feComposite in="m" in2="sc" operator="arithmetic" k2="1" k3="0.38"/></filter>
<filter id="o{uid}" filterUnits="userSpaceOnUse" x="-20" y="-20" width="296" height="296"><feGaussianBlur stdDeviation="7"/></filter>
<linearGradient id="t{uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></linearGradient>
</defs>
<rect x="4" y="4" width="248" height="248" rx="54" style="fill:{v('tuile')}"/>
<rect x="4" y="4" width="248" height="248" rx="54" fill="url(#t{uid})"/>
<g transform="translate(4 9)" opacity=".32" filter="url(#o{uid})"><g mask="url(#f{uid})"><rect width="256" height="256" style="fill:{v('ombre')}"/></g></g>
<g filter="url(#a{uid})"><g mask="url(#f{uid})"><rect width="256" height="256" style="fill:{v('objet')}"/><rect y="112" width="256" height="34" style="fill:{v('bande')}"/><rect y="112" width="256" height="34" fill="url(#m{uid})"/></g></g>
</svg>'''
