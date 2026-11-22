import json,sys,collections,os
ICI=os.path.dirname(os.path.abspath(__file__))
pl=json.load(open(os.path.join(ICI,'planches_p1.json')))
FULL={i['slug']:i['nom'] for c in json.load(open(os.path.join(ICI, '..', 'icones.json')))['categories'] for i in c['icones']}
def prompt(p):
    noms=[i['nom'] for i in p['icones']]
    cnt=collections.Counter(noms)
    noms=[FULL[i['slug']] if cnt[i['nom']]>1 else i['nom'] for i in p['icones']]
    rows=[noms[k:k+4] for k in range(0,len(noms),4)]
    grid="\n".join(f"Row {r+1}: "+" | ".join(f'"{n}"' for n in row) for r,row in enumerate(rows))
    return f"""App icon sheet, part of an existing icon family called "Collection Bogolan" (West African mud-cloth inspired). Match this family exactly.

Background: warm cream page (#FBF1E2). At the top, centered: small title "Tchi TELIMAN" in bold rounded sans-serif, rust color (#B04A26); below it, large bold rounded heading "Collection Bogolan" in dark brown (#4A2A1C); below that, one line "{p['titre']}" in medium brown. At the very bottom, a thin rust band with a repeating cream bogolan pattern of zigzags, dots and short triple vertical bars.

Grid: exactly {len(noms)} icons in {len(rows)} rows of 4 columns, evenly spaced, generous gaps. Each icon sits on its own separate rounded-square tile (corner radius about 20% of the side), tile color pale sand (#F6E7CC) with a very soft shadow, tiles never touching. Under each tile, its French label in bold rounded dark-brown sans-serif, verbatim, no extra characters.

Icon style (identical for all): soft 3D clay / plasticine render, chunky rounded volumes, matte surface, gentle top-left light, small soft drop shadow, no black outlines. Palette limited to saffron ochre (#E8A93A), rust (#B04A26), dark brown (#4A2A1C) and cream (#F6E7CC). Each object carries one small bogolan detail: a rust band or patch decorated with a cream zigzag line and small cream dots. Objects centered, filling about 65% of the tile, simple and readable at small size. People have brown skin and ochre clothing with a bogolan band, simplified faces without features.

Icons and labels, in reading order:
{grid}

Constraints: exactly {len(noms)} tiles, labels spelled exactly as given in French, no extra icons, no English text, no logos of real brands, no photorealism."""
if __name__=='__main__':
    print(prompt(pl[int(sys.argv[1])-1]))
