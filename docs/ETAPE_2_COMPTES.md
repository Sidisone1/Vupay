# Étape 2 — Comptes et permissions

Suivi : issue GitHub #9. Critère d'acceptation : **les droits de chaque rôle sont prouvés par des tests**.

## Ce qui est en place

| Partie | Fichier |
| --- | --- |
| Migration de la base (rôles multiples, permissions admin, KYC, entreprise, stockage privé) | `supabase/migrations/0002_comptes_permissions.sql` |
| Tests des droits sur une vraie base Postgres (98 vérifications) | `supabase/tests/10_comptes_permissions.sql`, `supabase/tests/20_administration.sql` |
| Journal d'audit des suspensions et accès admin, protection contre l'auto-blocage | `supabase/migrations/0003_audit_administration.sql` |
| Règles côté application (accès aux pages, permissions admin) | `apps/web/src/lib/permissions.ts` |
| Numéros UEMOA et code OTP | `apps/web/src/lib/telephone.ts` |
| Contrôle d'accès à chaque page | `apps/web/src/middleware.ts` |
| Connexion par code (SMS ou WhatsApp) | `apps/web/src/app/(auth)/connexion/` |
| Création du compte, ouverture du second espace | `apps/web/src/app/bienvenue/` |
| Compte suspendu, déconnexion | `apps/web/src/app/suspendu/`, `apps/web/src/app/deconnexion/` |
| Dépôt KYC du diffuseur (pièce + selfie) | `apps/web/src/app/diffuseur/kyc/` |
| Vérification d'entreprise de l'annonceur (fiche + justificatif) | `apps/web/src/app/annonceur/entreprise/` |
| Règles des pièces (formats, taille, chemins, états) | `apps/web/src/lib/pieces.ts` |
| Back-office : menu selon le rôle, files de vérification KYC et entreprise, gestion des utilisateurs | `apps/web/src/app/admin/`, `apps/web/src/lib/admin.ts` |

## Règles de droits

- **Rôles multiples** : une même personne peut être diffuseur et annonceur (table `profile_roles`). Elle ouvre elle-même ces deux espaces ; l'espace admin n'est donné que par un super admin.
- **Rôles d'administration** :

| Permission | Super admin | Modérateur | Finance | Support |
| --- | :---: | :---: | :---: | :---: |
| Modérer les campagnes | ✅ | ✅ | | |
| Valider les KYC | ✅ | ✅ | | |
| Vérifier les entreprises | ✅ | ✅ | | |
| Gérer les retraits | ✅ | | ✅ | |
| Voir le journal financier | ✅ | | ✅ | |
| Suspendre un compte | ✅ | | | ✅ |
| Modifier les paramètres | ✅ | | | |
| Nommer les admins | ✅ | | | |

- **Profil** : créé par la fonction `creer_mon_profil`. Le téléphone est celui vérifié par OTP, jamais une saisie libre. Suspension, KYC, niveau, téléphone et rôle admin ne sont modifiables que par l'admin habilité.
- **KYC** : un seul dossier actif ; pièces rangées dans le dossier de la personne ; pièces non modifiables après dépôt ; refus toujours motivé ; décision inscrite au journal d'audit.
- **Entreprise** : vérification avec justificatif (RCCM, NIF) ; une entreprise vérifiée qui change de nom, de numéro ou de pays repasse en vérification ; une campagne ne part en modération que si l'entreprise est vérifiée.
- **Stockage** : compartiments privés `kyc` et `entreprises` ; chacun dépose dans son dossier ; seuls les admins habilités relisent ; aucune suppression.

## Lancer les tests

```bash
cd apps/web && npm test                       # règles côté application
PGHOST=localhost PGUSER=postgres supabase/tests/lancer.sh   # droits dans la base
```

`lancer.sh` crée une base neuve, simule les éléments de Supabase (rôles, `auth.uid()`, stockage), rejoue toutes les migrations et joue chaque scénario avec l'identité de l'utilisateur concerné.

## Mise en service (à faire par le porteur du projet)

1. Projet Supabase **vupay-v2** créé et migrations `0001` à `0005` appliquées (voir `docs/MISE_EN_SERVICE.md`).
2. Activer la connexion par téléphone (Authentication → Providers → Phone) avec un fournisseur SMS ou WhatsApp, d'abord en mode test.
3. Renseigner `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY` dans Vercel (jamais dans le code).
4. Nommer le premier super admin depuis l'éditeur SQL de Supabase, une fois son compte créé :

```sql
insert into profile_roles (profil_id, role) values ('<id du compte>', 'admin');
update profiles set role_admin = 'super_admin' where id = '<id du compte>';
```

Sans configuration Supabase, les pages publiques restent visibles et les espaces protégés renvoient vers la connexion.

## Écrans de dépôt

- Les photos sont réduites dans le navigateur (1600 px, JPEG) avant l'envoi : environ 300 Ko au lieu de plusieurs Mo, adapté à la 3G.
- Formats : photo JPG/PNG/WebP pour l'identité (8 Mo max) ; photo ou PDF pour l'entreprise (10 Mo max).
- Après un refus, le motif s'affiche et un nouveau dépôt est proposé.

## Back-office

- Le menu ne montre que les écrans permis par le rôle de l'admin, avec le nombre de dossiers en attente.
- Files de vérification (identité, entreprise) : les plus anciens d'abord ; pièces affichées par des liens qui expirent après 5 minutes ; « Valider » ou « Refuser » avec un motif proposé ou personnalisé ; un dossier déjà traité par un autre admin n'est pas modifié une seconde fois.
- Utilisateurs : recherche par numéro, pages de 20 ; suspension et réactivation (support, super admin) ; accès admin donné, changé ou retiré (super admin). Un admin ne peut ni se suspendre ni se retirer son propre accès.
- Toutes ces décisions sont inscrites au journal d'audit.

## Reste à faire pour clore l'étape

- Test de bout en bout sur un vrai projet Supabase en mode test (connexion OTP réelle).
