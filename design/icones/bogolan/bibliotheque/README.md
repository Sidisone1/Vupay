# Bibliothèque d'icônes Bogolan (5 155 icônes)

Grande réserve d'icônes au style **Collection Bogolan**, pour tous les projets en cours et à venir
(Vupay, Tchi TELIMAN, SS DROPSHIP…). Quand un projet a besoin d'une icône, on la cherche ici et on
l'**adapte seulement à la charte** du projet : la forme et le style existent déjà.

- **Source des formes** : jeux d'icônes libres, téléchargés par l'API Iconify puis convertis automatiquement :
  - Material Design Icons (Apache-2.0) : 3 643 icônes pleines, classées en 57 catégories (versions « outline » et
    logos de marque écartés) ;
  - Phosphor Icons, graisse « fill » (MIT) : 1 512 icônes, dans `svg/usage-general/` (suffixe `-2` quand le nom existe déjà dans MDI).
- **Style Bogolan** (`scripts/bogolan.py`) : objet en relief « pâte à modeler » (ombrage et reflet SVG), bande bogolan
  brun rouille avec zigzag et points, ombre portée douce, tuile crème aux coins arrondis, 256 × 256.

## Contenu

| Élément | Rôle |
| --- | --- |
| `svg/<catégorie>/<nom>.svg` | les 5 155 icônes, vectorielles |
| `index.json` | nom, catégorie, source et licence de chaque icône |
| `palettes.json` | chartes prêtes : `bogolan`, `ss-dropship`, `vupay-v4`, `tchi-teliman` |
| `planches/` | une planche JPG par catégorie pour feuilleter (66 planches) |
| `apercu/index.html` | page de recherche (français ou anglais), filtre par catégorie, changement de charte, téléchargement |
| `scripts/` | téléchargement, génération, adaptation à une charte, export PNG, planches |

## Adapter une icône à la charte d'un projet

Chaque SVG utilise cinq variables CSS, avec la palette Bogolan comme valeur de repli :
`--bg-tuile`, `--bg-objet`, `--bg-bande`, `--bg-motif`, `--bg-ombre`.

1. **Dans une page web** (SVG intégré dans le HTML) : définir les cinq variables, par exemple
   `:root{--bg-objet:#006B3A;--bg-tuile:#FFF7E6;--bg-bande:#884A1F;--bg-motif:#FFF7E6;--bg-ombre:#092E1B}`.
2. **En fichiers** : `python3 scripts/adapter_charte.py vupay-v4 ../sortie cart home wallet --png 256`
   (une charte de `palettes.json`, ou cinq couleurs `"#tuile,#objet,#bande,#motif,#ombre"` ; noms ou catégories ;
   `--png` demande Playwright).
3. **Dans la page d'aperçu** : choisir la charte (ou « Ma charte » avec ses couleurs), cliquer l'icône, télécharger.

## Règles

- Ne pas redessiner les **logos de marque** (WhatsApp, Orange Money…) : ils sont exclus de la bibliothèque.
- Garder `LICENSE-THIRD-PARTY.md` avec toute copie de la bibliothèque.
- Les icônes vraiment africaines (moto-taxi, calebasse, tontine, mobile money…) restent à dessiner à la main
  (voir le catalogue des 1000 icônes) : elles n'existent pas dans les jeux libres.

## Refaire ou étendre la bibliothèque

`python3 scripts/telecharger.py` (dans un dossier de travail : produit `traces.json`), puis
`python3 scripts/generer.py <sortie>` et `node scripts/planches.js <sortie>`.
