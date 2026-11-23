# Roadmap Vupay V2 — statut au 20/11/2026

| Lot | Livrables | Critère d'acceptation | État |
| --- | --- | --- | --- |
| 0. Reprise et cadrage | décisions récentes, inventaire du dépôt, comparaison V1/V2 | modèles vues/clics non confondus | Documenté |
| 1. Design | 48 maquettes Canva, charte verte, icônes Bogolan et responsive | revue écran par écran, validation à 320/390/430 px | Canva créé, validation visuelle à terminer |
| 2. Comptes et permissions | connexion, OTP, rôles multiples, entreprise/KYC | droits prouvés par tests | En cours : base, droits testés et connexion faits ([détail](ETAPE_2_COMPTES.md)) |
| 3. Publicités | fiche produit publique, annonces, modération, destinations validées | lien stable, non ouvert à une redirection arbitraire | En cours : fiches, boutons contrôlés et modération faits ([détail](ETAPE_3_PUBLICITES.md)) |
| 4. Traçabilité | lien unique, visites vs actions, quatre types de clic, antifraude | aucune vue payée, aucune action dupliquée créditée | En cours : liens, journaux, antifraude et écrans faits ([détail](ETAPE_4_TRACABILITE.md)) |
| 5. Finance | budgets, tarifs configurables, journal, Mobile Money sandbox | aucun débit sans action qualifiée | À développer |
| 6. Pilotage | dashboards annonceur/diffuseur/admin et exports | toutes les valeurs traçables à la source | À développer |
| 7. Pilote Bamako | annonceurs et diffuseurs tests, incidents, support, audits | validation financière, légale et produit | À planifier |
| 8. Expansion | langues, autres canaux, intégrations et conversions | dépend des capacités d'API et du consentement | Ultérieur |

**Décisions toujours ouvertes :** tarifs par clic qualifié, rémunération selon type, marge, seuils de budget/retrait, agrégateur de paiement, cadre juridique.

**Règle de développement :** ne pas déployer les paiements tant que les décisions tarifaires et la migration V2 ne sont pas validées. Aucune statistique issue des maquettes n'est une mesure réelle.
