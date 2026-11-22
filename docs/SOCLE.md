# Lot 1 · Socle — ce qui est fait et comment le mettre en ligne

## Ce que fait le socle

- **Connexion sans mot de passe** : numéro de téléphone (8 pays de la zone, format vérifié) puis code OTP
  par SMS ou WhatsApp via Supabase Auth. L'envoi et la vérification passent par le serveur : aucun SDK
  Supabase dans le navigateur, la page de connexion reste légère (≈ 96 Ko au premier chargement).
- **Inscription** : espace (diffuseur ou entreprise), nom affiché, pays, ville, année de naissance
  (18 ans minimum), sexe facultatif, jusqu'à 5 centres d'intérêt.
- **Deux espaces, une identité** : un même numéro peut ouvrir l'espace diffuseur et l'espace entreprise
  (`profiles.espaces`), depuis « Mes espaces » (`/compte/espaces`).
- **Protection des pages** : `/diffuseur`, `/annonceur`, `/admin` et `/compte` exigent une session ;
  sans profil → inscription ; espace non ouvert → proposition de l'ouvrir ; compte suspendu → page dédiée.
  La vraie barrière reste la RLS de la base.
- **Déconnexion** : bouton en bas des menus d'espace (requête POST).

## Fichiers

| Rôle | Fichier |
| --- | --- |
| Migrations du socle | `supabase/migrations/0002_socle_comptes.sql`, `0003_droits_fonctions.sql` |
| Tests de sécurité SQL (28 vérifications) | `supabase/tests/rls_socle.sql`, lancés par `supabase/tests/lancer.sh` |
| Règles métier testées | `apps/web/src/lib/telephone.ts`, `apps/web/src/lib/espaces.ts` (+ `*.test.ts`) |
| Protection des pages | `apps/web/src/middleware.ts` |
| Écrans | `apps/web/src/app/(auth)/connexion`, `(auth)/inscription`, `compte/espaces`, `compte/suspendu` |

## Règles de sécurité de la base (migration 0002)

- Le téléphone du profil est **recopié du compte Auth vérifié** ; ce que le formulaire envoie est ignoré.
- À la création, rôle, niveau, KYC, suspension et parrain reçoivent leurs valeurs de départ, quoi que
  le client envoie. Personne ne peut se déclarer admin ni choisir l'espace « admin ».
- Un utilisateur ne peut modifier ni son rôle, ni son niveau, ni son KYC, ni sa suspension, ni son
  téléphone, ni son code ou son parrain. Un compte suspendu ne modifie plus son profil.
- Seul un profil ayant ouvert l'espace entreprise (et non suspendu) crée ou modifie une entreprise.
- Aucun utilisateur n'écrit dans `ledger_entries` ni dans `withdrawals` (clé service uniquement).
- Les fonctions de trigger ne sont pas appelables via l'API. L'analyse de sécurité Supabase signale encore
  `est_admin()` et `a_espace()` : c'est voulu, la RLS les appelle et elles ne révèlent que le statut de l'appelant.

## Lancer les tests

```bash
cd apps/web && npm test && npm run typecheck   # règles métier
supabase/tests/lancer.sh                         # RLS, sur un Postgres local (variables PG* standard)
```

## Mise en ligne (à faire, avec l'accord du porteur du projet)

1. **Projet Supabase** : créer un projet (région la plus proche de l'Afrique de l'Ouest, ex. Europe — Francfort
   ou Londres), puis appliquer dans l'ordre `0001_schema_initial.sql` et `0002_socle_comptes.sql`.
2. **Auth → Providers → Phone** : activer, choisir le fournisseur SMS/WhatsApp (décision n° 8 de
   `DECISIONS.md`). En attendant, ajouter des **numéros de test** avec un code fixe (Auth → Phone →
   *Test phone numbers*) : aucune dépense de SMS.
3. **Premier admin** : après sa propre inscription, dans l'éditeur SQL de Supabase (clé service) :
   `update profiles set role = 'admin', role_admin = 'super_admin' where telephone = '+223…';`
4. **Vercel** : importer le dépôt, *Root Directory* = `apps/web`, puis renseigner les variables de
   `apps/web/.env.example` (au minimum `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
   `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_OTP_CANAL`). Ne jamais mettre `SUPABASE_SERVICE_ROLE_KEY` dans une
   variable `NEXT_PUBLIC_…`.
5. **Supabase → Auth → URL Configuration** : mettre l'adresse Vercel comme *Site URL*.
6. **Recette** : connexion avec un numéro de test, inscription diffuseur, ouverture de l'espace entreprise,
   accès refusé à `/admin`, déconnexion ; puis promotion admin et accès à `/admin`.

## Limites connues

- Le parrainage (saisie d'un code parrain) est reporté à la V2, comme prévu dans la feuille de route.
- Les écrans des espaces restent des menus provisoires : ils sont construits aux lots suivants.
- La création d'entreprise (`/annonceur/entreprise`) arrive au lot 2 (campagnes).
