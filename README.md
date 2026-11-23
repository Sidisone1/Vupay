# Vupay — plateforme publicitaire à clics qualifiés

**État : prototype et code en développement, pas de paiements actifs.** Vupay connecte annonceurs et diffuseurs sur WhatsApp et d'autres canaux, avec une page produit intermédiaire et une mesure de contact traçable.

## Nouvelle règle produit (20/11/2026)
La rémunération principale est basée sur des **actions qualifiées sur la page Vupay**, et non sur les vues ni les simples visites. Actions enregistrées séparément : numéro WhatsApp, catalogue WhatsApp, envoyer un message et acheter. L'ouverture d'un lien ne prouve pas un message envoyé ni une vente. Les tarifs ne sont **pas encore validés**.

## Reprendre le projet
Commencer par **[l'état du projet](docs/ETAT_DU_PROJET.md)**, puis les consignes communes aux IA et développeurs : [AGENTS.md](AGENTS.md).

## Documentation V2
- [Cadrage fonctionnel V2](docs/PRODUIT_V2_CLICS_QUALIFIES.md)
- [Architecture V2 — clics et antifraude](docs/ARCHITECTURE_V2_CLICS.md)
- [Roadmap V2](docs/ROADMAP_V2.md)
- [Charte Bogolan verte](design/charte/BOGOLAN_VERT_V4.md)
- [48 maquettes Canva](design/canva/README.md) — [ouvrir Canva](https://www.canva.com/d/JFygNqJaw1LNavO)

## Structure technique
`apps/web/` : Next.js, Tailwind, application web/PWA (composants et code encore à terminer).
`supabase/` : base initiale V1 et Edge Functions, **migration V2 non encore appliquée**.
`design/` : bibliothèque d'icônes et images Bogolan, maquettes V3, lien vers V4 Canva.
`docs/` : spécifications, architecture, feuille de route et décisions.

## Historique V1 conservé
- [Ancien cahier des charges](docs/CAHIER_DES_CHARGES.md)
- [Ancienne architecture](docs/ARCHITECTURE.md)
- [Ancienne feuille de route](docs/FEUILLE_DE_ROUTE.md)
- [Décisions historiques](docs/DECISIONS.md)

> Certains anciens écrans, fonctions de tarification et migrations SQL utilisent encore des vues rémunérées et des montants de démonstration. Ne **pas** utiliser ces paramètres pour un paiement réel. Les fonctionnalités V2 nécessitent migration, configuration, contrôle antifraude, tests et approbation de lancement.

## Développement local
```bash
cd apps/web
npm install
npm test
npm run typecheck
npm run dev
```

La connexion Supabase et les paiements demandent des clés et un environnement configurés; voir `apps/web/.env.example`.
