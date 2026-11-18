# Production des icônes P1

347 icônes P1 à créer, réparties en 29 planches de 12 (`scripts/planches_p1.json`).
Le catalogue est passé à 1000 icônes le 18/11/2026 : 20 icônes P1 de plus (catégorie « Réglages, accessibilité
et appareil »), soit **367 icônes P1 à créer** au total ; elles feront 2 planches supplémentaires.

| Planche | Contenu | État |
| --- | --- | --- |
| 1 | Navigation : chevrons, flèches, liens, plus d'options | ✅ `planches/p1-01.png`, 12 icônes dans `png/` |
| 2 | Navigation : tri, vues, tableau de bord, plein écran | ✅ `planches/p1-02.png`, 12 icônes |
| 3 | Navigation : réglages, calques, signets, aide | À générer |
| 4 | Navigation : zoom, chargement, pages, interrupteurs, cases | ✅ `planches/p1-04.png`, 12 icônes (« Zoom arrière » raté : chevron au lieu d'une loupe, à refaire) |
| 5 à 29 | Actions, statuts, social, paiement, communication, médias, temps, personnes, sécurité, Vupay | À générer |

**36 icônes faites sur 347.** Arrêt : limite quotidienne d'images du plan gratuit ElevenLabs atteinte le 17 novembre 2026.

## Reprendre

1. `python3 scripts/prompt_planche.py 3` affiche la consigne de la planche 3 (même style pour toutes).
2. Générer l'image avec cette consigne (ElevenLabs, modèle gpt-image-2, ou tout générateur d'images).
3. Enregistrer l'image dans `planches/p1-03.png`, puis découper :
   `python3 scripts/decouper_planche.py planches/p1-03.png 3 png` (Pillow et numpy).
4. Les icônes sortent en PNG 144 × 144, coins arrondis, fond transparent, nommées comme dans le catalogue.
