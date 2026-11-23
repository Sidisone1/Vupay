# Mise en service — état au 23 novembre 2026

## Base de données Supabase : faite

| Élément | Valeur |
| --- | --- |
| Projet | **vupay-v2** (organisation SIKIDA WIFI, offre gratuite) |
| Région | Paris (`eu-west-3`) |
| Adresse de l'API | `https://pwubrzwwbbmwagehdzfq.supabase.co` |
| Migrations appliquées | `0001` à `0005` du dépôt, identiques au caractère près aux fichiers |
| Règles d'accès | 30 règles ; aucune table sans RLS |
| Compartiments de fichiers | `kyc` (privé), `entreprises` (privé), `produits` (public) |

Vérifié directement dans la base, en tant que visiteur non connecté : aucune campagne ni aucun profil visible, création de profil refusée, fonctions internes fermées, fiche publique lisible.

Contrôle de sécurité Supabase : aucune erreur. Restent des avertissements sur des fonctions appelables **volontairement** : celles utilisées par les règles d'accès (elles ne renvoient que le statut de l'utilisateur connecté), la fiche publique et la création de profil (utilisateurs connectés). Voir `supabase/migrations/0005_durcissement_fonctions.sql`.

### Ancien projet « vupay »

Le projet **vupay** (Londres, créé le 22/11) contient une version antérieure et différente du schéma, non suivie dans le dépôt. Il est vide. Il n'a pas été modifié : Supabase exige une confirmation manuelle pour l'effacer. Il peut être supprimé depuis le tableau de bord Supabase (Project Settings → General → Delete project) quand vous le souhaitez ; l'offre gratuite limite le nombre de projets actifs.

### Pourquoi les migrations n'effacent rien

Supabase demande une confirmation manuelle pour toute commande d'effacement, même sur une base vide. Les migrations modifient donc les règles en place (`alter policy`) au lieu de les supprimer puis recréer. Conséquence : la colonne `profiles.role` (version 1) existe encore, inutilisée et protégée.

## Reste à faire par le porteur du projet

1. **Vercel** (le connecteur n'a pas le droit de créer un site : erreur 403)
   - vercel.com → Add New → Project → importer le dépôt `Sidisone1/Vupay`.
   - Root Directory : `apps/web`.
   - Variables d'environnement : `NEXT_PUBLIC_SUPABASE_URL` = l'adresse ci-dessus ; `NEXT_PUBLIC_SUPABASE_ANON_KEY` = la clé « publishable » du projet (Supabase → Project Settings → API Keys) ; `NEXT_PUBLIC_APP_URL` = l'adresse du site.
2. **Connexion par téléphone** (Supabase → Authentication → Sign In / Providers → Phone)
   - Activer « Phone » et choisir un fournisseur d'envoi de SMS (Twilio, Vonage, MessageBird…) avec ses identifiants.
   - Pour les essais sans envoi réel : renseigner des « numéros de test » avec un code fixe (par exemple `22370000001=123456`).
3. **Premier super admin** : après votre première connexion, me donner le feu vert ; je l'attribue depuis la base.
