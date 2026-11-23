# Icônes Bogolan — guide pour le dépôt d'icônes

Ce dossier prépare un **dépôt d'icônes réutilisable** pour tous les projets : la liste complète des icônes
à dessiner dans le style bogolan, les règles de dessin, la structure du dépôt et les sources libres de droits.

- [`bibliotheque/`](bibliotheque/) : **5 155 icônes déjà converties au style Bogolan** (formes des jeux libres MDI et Phosphor), recolorables par 5 variables CSS pour suivre la charte d'un projet (voir son README).
- [`CATALOGUE.md`](CATALOGUE.md) : **1000 icônes** dans 32 catégories : **917 à créer**, 83 déjà présentes dans la Collection Bogolan (marquées ✅).
- [`motifs/`](motifs/) : les 16 motifs bogolan en SVG (esquisses au trait).
- [`apercu/catalogue.html`](apercu/catalogue.html) : page à ouvrir dans un navigateur pour parcourir et filtrer le catalogue.
- [`icones.json`](icones.json) : le même catalogue en version machine (pour générer dossiers, sprite et composants).

Le dossier peut être copié tel quel à la racine du nouveau dépôt.

## 1. Règles de dessin : suivre la Collection Bogolan existante

Ces icônes **complètent** la Collection Bogolan déjà dessinée (109 icônes, dépôt Tchi-TELIMAN,
`design/icons/bogolan/planches/`). Les nouvelles doivent lui ressembler au point qu'on ne voie pas la différence.

| Règle | Valeur (relevée sur les planches existantes) |
| --- | --- |
| Rendu | 3D doux « pâte à modeler » : volumes arrondis, ombre portée légère, aucun contour noir |
| Tuile | Carré crème aux coins très arrondis (rayon ≈ 20 % du côté), objet centré, ~70 % de la tuile |
| Palette | ocre / safran `#E8A93A`, rouille `#B04A26`, brun foncé `#4A2A1C`, crème `#F6E7CC`, fond `#FBF1E2` |
| Motif bogolan | Une bande rouille sur l'objet avec zigzag et points crème (voir les 16 motifs du catalogue) |
| Personnages | Peau brune, vêtements ocre à bande bogolan, visage simplifié sans traits |
| Libellé | En français, sous l'icône, police grasse arrondie brun foncé |
| Export | PNG 1024 × 1024 (source), découpé en 144 × 144 pour les apps comme `decouper.py` ; nom en `kebab-case` français |

**Variante au trait (optionnelle)** pour les petites tailles (16–20 px, menus web denses) : grille 24 × 24,
trait 2 px arrondi, `currentColor`, un seul détail bogolan. Les 16 motifs du dossier `motifs/` sont dans ce format.

**Pour produire vite et pareil** : générer chaque planche avec la même consigne que les planches existantes
(« Collection Bogolan, icônes 3D pâte à modeler, ocre, rouille, brun, motif bogolan zigzag et points,
tuiles crème arrondies, 3 colonnes ») en listant 9 à 12 icônes par planche, puis découper avec `decouper.py`.

## 2. Structure proposée du dépôt

```
bogolan-icons/
├── README.md
├── LICENSE                 # licence de VOS dessins (ex. MIT ou CC BY 4.0)
├── CATALOGUE.md / icones.json
├── svg/
├── planches/               # planches sources (JPG/PNG), 9 à 12 icônes chacune
├── png/                    # icônes découpées 144 × 144 (et 1024 × 1024 en source)
├── svg/                    # variante au trait pour petites tailles (optionnelle)
├── motifs/                 # les 16 motifs seuls + motifs répétables (fonds, bordures)
│   └── patterns/           # tuiles SVG répétables pour fonds d'écran, cartes, emballages
├── brands/                 # logos officiels NON modifiés + fichier SOURCES.md (origine, date, charte)
├── app-icons/              # gabarits d'icônes d'application (voir §4)
├── dist/                   # généré : sprite.svg, composants React/Vue, police d'icônes
└── scripts/                # optimisation SVGO + génération à partir de icones.json
```

Une icône = le même nom partout : `png/portefeuille.png`, `svg/portefeuille.svg`.

## 3. Sources libres pour partir des formes (puis appliquer le style bogolan)

Redessiner à partir d'une base existante va beaucoup plus vite. Ces jeux ont une licence qui le permet
(garder la mention de licence dans le dépôt) :

| Jeu | Licence | Intérêt |
| --- | --- | --- |
| [Lucide](https://lucide.dev) | ISC | ~1 500 icônes trait 2 px sur 24 px : même grille que notre catalogue |
| [Tabler Icons](https://tabler.io/icons) | MIT | ~5 000 icônes, trait et plein |
| [Phosphor](https://phosphoricons.com) | MIT | 6 graisses dont duotone |
| [Iconoir](https://iconoir.com) | MIT | Trait 1,5 px, style doux |
| [Material Symbols](https://fonts.google.com/icons) | Apache 2.0 | Très complet (UI, objets du quotidien) |
| [Simple Icons](https://simpleicons.org) | CC0 (mais les logos restent des marques) | Logos de réseaux et services pour `brands/` |
| [Iconify](https://icon-sets.iconify.design) | — | Moteur de recherche dans plus de 200 000 icônes, pour trouver une base |

Les icônes vraiment africaines (moto-taxi, calebasse, mortier, canari, attiéké, kora, daba, tontine, mobile money…)
n'existent dans presque aucun jeu : ce sont celles qui rendront le dépôt unique, à dessiner en priorité.

## 4. Icônes d'application à prévoir pour chaque projet

| Fichier | Taille | Usage |
| --- | --- | --- |
| `favicon.svg` + `favicon.ico` | 16, 32, 48 | Onglet du navigateur |
| `apple-touch-icon.png` | 180 × 180 | Écran d'accueil iPhone |
| `icon-192.png`, `icon-512.png` | 192, 512 | PWA (manifeste) |
| `icon-maskable-512.png` | 512, zone sûre = cercle de 80 % | PWA Android (formes rondes, carrées…) |
| Android adaptatif | 108 dp (avant-plan + arrière-plan, zone sûre 66 dp) | Application Android |
| iOS | 1024 × 1024 sans transparence | App Store |
| `og-image.png` | 1200 × 630 | Aperçu des liens partagés (WhatsApp, Facebook…) |

Un motif bogolan en arrière-plan + le pictogramme du projet au centre donne une famille d'icônes reconnaissable.

## 5. Ordre de production conseillé

1. Les catégories **P1** encore manquantes (≈ 367 icônes, sans les ✅) : navigation, actions, statuts, social, paiement, communication, médias, temps, personnes, sécurité, Vupay.
2. Les **P2** (commerce, quotidien, cuisine, transport, lieux, émotions), puis les **P3** selon les projets.
3. `brands/` : télécharger les logos officiels au fur et à mesure des besoins, sans les modifier.

## 6. Points d'attention

- **Logos des réseaux et opérateurs** (WhatsApp, TikTok, Orange Money, Wave…) : ce sont des marques déposées.
  Ne pas les redessiner en bogolan ni les recolorer ; les utiliser tels quels, seulement pour désigner le service.
  Pour l'identité de Vupay, le cahier des charges interdit tout logo de réseau : utiliser les pictos génériques.
- **Respect du bogolan** : les motifs ont un sens (voir le tableau du catalogue). Éviter les motifs liés au deuil
  ou à l'excision sur des actions banales, et créditer l'origine (bogolanfini bamanan, Mali) dans le README du dépôt.
- **Licence** : si une icône part d'un jeu existant, garder sa licence (MIT/ISC/Apache) dans `LICENSE-THIRD-PARTY`.

## Sources

- Motifs et significations : The Ethnic Home, « The Bogolan Mudcloth » ; Wikipédia, « Bogolan » ;
  Smithsonian Center for Folklife, « Malian Bogolan ».
