# Décisions à prendre — Vupay

Reprises du cahier des charges. À trancher avant ou pendant le lot 1.

| # | Décision | Options | État |
| --- | --- | --- | --- |
| 1 | Disponibilité du nom | Domaine (.africa, .com), comptes TikTok/Facebook, marque OAPI | À vérifier |
| 2 | Agrégateur de décaissement | FeexPay (contrat CI signé), pawaPay, CinetPay — critère : API de payout par pays | Ouvert |
| 3 | Tarifs par pays | Base : vue 2 F / 1 F, clic 20 F / 10 F | À tester |
| 4 | Frais de retrait | Pris en charge par Vupay ou répercutés | Ouvert |
| 5 | Pays de lancement | Mali seul, ou Mali + Côte d'Ivoire | Ouvert |
| 6 | Annonceurs pilotes | Trouver 3 à 5 annonceurs avant le développement | À faire |
| 7 | Structure juridique | Entreprise individuelle ou société (SARL/SAS) pour le multi-pays | Ouvert |
| 8 | Fournisseur OTP | WhatsApp Business API ou SMS local | Ouvert |

## Décisions prises

| Date | Décision | Conséquence |
| --- | --- | --- |
| 17/11/2026 | Couleur de base **verte** (vert feuille `#2E6B34`, encre vert-noir `#16221A`) et icônes 3D **Bogolan** (porteur de projet) | Charte v3 (`design/charte/PALETTE.md`), `vupay-ui.css`, `tailwind.config.ts`, icônes `design/icones/bogolan/vupay/`. Vert distinct du vert WhatsApp |
