"""Consigne de génération d'une planche d'icônes Vupay style Bogolan (16 icônes, 4 x 4).
Usage : python3 prompt_vupay.py 1   (planches 1 et 2)"""
import json, os, sys
ICI = os.path.dirname(os.path.abspath(__file__))
ICONES = json.load(open(os.path.join(ICI, 'icones_vupay.json')))
def prompt(n):
    it = ICONES[(n-1)*16:n*16]
    rows = "\n".join(f"Row {r+1}: " + " | ".join(f'"{nom}"' for _, nom in it[r*4:r*4+4]) for r in range(4))
    return f"""Square app icon sheet for "vupay" (an app that pays people to share brand ads in their WhatsApp statuses and stories, West Africa), in the style of a West African "Collection Bogolan" icon family.

Background: warm cream page (#FFF7E6). At the top, centered: bold rounded lowercase heading "vupay" in deep green (#006B3A), and below it a small line "Icônes Bogolan" in ochre orange (#F08300). At the very bottom, a thin deep green (#006B3A) band with a repeating off-white bogolan pattern of zigzags, dots and short triple vertical bars.

Grid: exactly 16 icons in 4 rows of 4 columns, evenly spaced. Each icon sits on its own separate rounded-square tile (corner radius about 20%), light cream tile (#FFFBF2) with a soft diffuse shadow, tiles never touching. Under each tile, its French label in bold rounded dark green (#092E1B) sans-serif, verbatim.

Icon style (identical for all): premium soft 3D clay render, chunky rounded volumes, matte surface, gentle top-left light, soft drop shadow, no black outlines. Clay texture like the original Collection Bogolan (handmade plasticine look). Object colors: deep green #006B3A (main), bright green #14AA4D (validation, success, active states), ochre orange #F08300 (money, gains, highlights, accents), earthy brown #884A1F, cream #FFF7E6. Each object carries one small bogolan detail: an earthy brown band (#884A1F) decorated with a white zigzag line and small white dots. No violet, no blue, no teal. No social network logos. Objects centered, about 65% of the tile, simple and readable at small size. People have brown skin, simplified faces without features.

Icons and labels, in reading order:
{rows}

Constraints: exactly 16 tiles, labels spelled exactly as given in French, no extra icons, no English labels, no real brand logos, no photorealism. Any currency shown is the text "FCFA", never $ or €."""
if __name__ == '__main__':
    print(prompt(int(sys.argv[1])))
