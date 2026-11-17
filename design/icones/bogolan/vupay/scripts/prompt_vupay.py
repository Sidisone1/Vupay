"""Consigne de génération d'une planche d'icônes Vupay style Bogolan (16 icônes, 4 x 4).
Usage : python3 prompt_vupay.py 1   (planches 1 et 2)"""
import json, os, sys
ICI = os.path.dirname(os.path.abspath(__file__))
ICONES = json.load(open(os.path.join(ICI, 'icones_vupay.json')))
def prompt(n):
    it = ICONES[(n-1)*16:n*16]
    rows = "\n".join(f"Row {r+1}: " + " | ".join(f'"{nom}"' for _, nom in it[r*4:r*4+4]) for r in range(4))
    return f"""Square app icon sheet for "vupay" (an app that pays people to share brand ads in their WhatsApp statuses and stories, West Africa), in the style of a West African "Collection Bogolan" icon family.

Background: warm off-white page (#F4F4EF). At the top, centered: bold rounded lowercase heading "vupay" in ink (#15162B), and below it a small line "Icônes Bogolan" in indigo (#3533B8). At the very bottom, a thin ink-colored band with a repeating off-white bogolan pattern of zigzags, dots and short triple vertical bars.

Grid: exactly 16 icons in 4 rows of 4 columns, evenly spaced. Each icon sits on its own separate rounded-square tile (corner radius about 20%), white tile (#FFFFFF) with a soft diffuse shadow, tiles never touching. Under each tile, its French label in bold rounded ink-colored sans-serif, verbatim.

Icon style (identical for all): premium soft 3D clay render, chunky rounded volumes, matte surface, gentle top-left light, soft drop shadow, no black outlines. Object colors: indigo #3533B8 (main), saffron #F6A609 (money, gains, highlights), coral #EE5A3B (accents, urgency), ink #15162B, white. Each object carries one small bogolan detail: an earthy brown band (#6B3E26) decorated with a white zigzag line and small white dots. No green, no social network logos. Objects centered, about 65% of the tile, simple and readable at small size. People have brown skin, simplified faces without features.

Icons and labels, in reading order:
{rows}

Constraints: exactly 16 tiles, labels spelled exactly as given in French, no extra icons, no English labels, no real brand logos, no photorealism."""
if __name__ == '__main__':
    print(prompt(int(sys.argv[1])))
