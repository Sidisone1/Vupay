# Motion design Vupay

Vidéos de présentation animées (charte « Bogolan »), faites à partir des maquettes et des icônes de `design/`.

> **Attention : ces vidéos montrent l'ancien modèle (V1), « payé à la vue ».**
> Depuis la V2 (`docs/ETAT_DU_PROJET.md`), **les vues et les visites ne sont jamais payées** : seules les
> actions qualifiées le seront. Les textes « 1 F / vue », « vues validées » et le slogan « Vos statuts sont vus.
> Faites-les payer. » ne correspondent plus au produit. **Ne pas diffuser ces vidéos telles quelles** ;
> une version V2 (actions qualifiées, fiche produit) est à produire à partir des maquettes V2.

## Vidéos (`videos/`)

| Fichier | Format | Durée | Son |
| --- | --- | --- | --- |
| `vupay_16x9_musique.mp4` | 1920×1080 (paysage) | 20 s | Musique |
| `vupay_16x9_voix-off.mp4` | 1920×1080 (paysage) | 21,5 s | Musique + voix off française |
| `vupay_9x16_voix-off.mp4` | 1080×1920 (vertical : statuts, stories) | 21,5 s | Musique + voix off française |

Déroulé : logo → slogan → 1. Accepter une campagne → 2. Publier en statut ou story → 3. Envoyer la capture et
encaisser → 4. Retrait Mobile Money → appel à l'action « Je diffuse et je gagne ».

## Sources (`source/`)

- `index-16x9.html`, `index-9x16.html` : l'animation (HTML/CSS/JS). Chaque image est calculée par `renderAt(t)` ;
  ouvert dans un navigateur, la page joue l'animation en boucle.
- `a/` : maquettes recadrées, icônes Vupay (SVG), polices Fredoka et Nunito Sans (licence SIL OFL).
- `rendu.mjs` : capture image par image avec Playwright (Chromium).
- `musique.py` : musique générée par programme (balafon, shaker), sans droits d'auteur.
- `voix-off.txt` : texte et minutage de la voix off (voix « George », ElevenLabs, modèle multilingue v2).

## Refaire une vidéo

Depuis `design/motion/source/` (Node, Playwright, Python 3 + numpy, ffmpeg) :

```bash
PAGE=index-9x16.html VW=1080 VH=1920 node rendu.mjs video images 0 21.5
python3 musique.py
ffmpeg -framerate 30 -i images/f_%05d.jpg -i music.wav -c:v libx264 -pix_fmt yuv420p -c:a aac -shortest vupay.mp4
```

`rendu.mjs` lance un petit serveur local (`python3 -m http.server`) dans le dossier courant. La voix off se mixe
ensuite par-dessus avec ffmpeg (musique baissée automatiquement sous la voix).
