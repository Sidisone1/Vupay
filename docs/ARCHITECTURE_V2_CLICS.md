# Architecture cible V2 — visites, actions qualifiées et destinations

**Statut : proposition technique** à implémenter. Ce fichier complète `ARCHITECTURE.md` V1 sans prétendre que les routes/services sont déjà opérationnels.

```text
Annonceur (PWA) ─ création/modération ─┐
Diffuseur (PWA) ─ lien unique ──────────┼─ Next.js / API ─ Supabase Postgres + RLS
Visiteur ─ /c/[code] ─ fiche /p/[code] ─┘                    │
                            │                                ├─ campaigns / destinations
                     /api/interactions                      ├─ assignments / page_visits
                            │                                ├─ contact_actions / fraud_reviews
                    validation côté serveur                  ├─ ledger_entries / withdrawals
                            │                                └─ audit_logs
                  redirection autorisée ──────────> WhatsApp/catalogue/site/panier
```

## Trois événements distincts
1. **Visite** : ouverture de la page Vupay; événement analytique non payé.
2. **Action** : clic sur un bouton identifié (`numero_whatsapp`, `catalogue_whatsapp`, `envoyer_message`, `acheter`) ; événement auditable sans présumer un contact effectif.
3. **Conversion confirmée** : option ultérieure avec intégration et consentement du marchand; ne pas déduire une vente de l'ouverture d'une URL.

## Contrôles impératifs
- Résoudre le code d'attribution côté serveur; ne pas se fier à un `diffuseur_id` venant du navigateur.
- Destination préenregistrée, HTTPS ou URL WhatsApp autorisée, pas de redirection libre via paramètre `url`.
- Jeton d'interaction signé, durée limitée, protection CSRF selon implémentation, anti-rejeu et rate-limit.
- Évaluation antifraude avant paiement; déduplication par campagne, diffuseur, action et identité de visiteur pseudonymisée, avec politique versionnée.
- Idempotence transactionnelle en base pour éviter double débit/crédit; utiliser des clés d'événements uniques et transaction atomique.
- Respect des plafonds de budget **sous verrou transactionnel**.
- Journaliser le statut, le motif de rejet, la date, le type et l'identifiant d'attribution, mais ne pas stocker inutilement des données sensibles.
- Séparer accès visiteurs publics, annonceurs, diffuseurs et administrateurs par RLS + fonctions serveur privilégiées.
- Prévoir vérification des webhooks financiers et réconciliation des paiements.

## Migration à préparer (non appliquée)
- `campaign_destinations`: campagne, type action, URL vérifiée, statut, ordre, métadonnées.
- `page_visits`: assignment, date, identifiant pseudonymisé, source, signal de risque.
- `contact_actions`: visite, assignment, type, destination, idempotency_key unique, statut, décision antifraude, date.
- `payout_decisions`: action, tarif contractuel versionné, écriture annonceur, écriture diffuseur, audit.
- `campaign_pricing`: règles **inactives tant que non définies**, pays/devise, date d'application.

Conserver `proofs` et `clicks` V1 comme historiques; leur existence ne signifie plus que les vues sont rémunérées. Mettre à jour `objectif_campagne`, `tarifs.ts`, `ledger.ts`, les policies et le tableau de bord après validation de la migration.

## Parcours public
Le lien du diffuseur ouvre **d'abord** la fiche publique Vupay. Les quatre boutons affichent le type de destination. Le navigateur ne garantit ni l'envoi d'un message WhatsApp, ni l'achèvement d'un achat.

## Tests minimum
- lien valide, inconnu, expiré, suspendu;
- destination externe contrôlée;
- répétition / rafale / bot / auto-clic;
- budget simultanément épuisé;
- déduplication sous concurrence;
- double webhook / échec ou reprise de paiement;
- changement de rôle;
- accessibilité mobile, clavier, langue, mauvaise connexion, viewport 320–430 px.
