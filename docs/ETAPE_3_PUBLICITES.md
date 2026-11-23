# Étape 3 — Publicités

Suivi : issue GitHub #10. Critère d'acceptation : **lien stable, non ouvert à une redirection arbitraire**.

## Ce qui est en place

| Partie | Fichier |
| --- | --- |
| Migration : fiche produit, destinations contrôlées, modération, accès public limité, photos | `supabase/migrations/0004_publicites.sql` |
| Tests sur une vraie base Postgres (55 vérifications) | `supabase/tests/30_publicites.sql` |
| Liens WhatsApp fabriqués depuis un numéro, lien boutique contrôlé | `apps/web/src/lib/destinations.ts` |
| Règles des campagnes (statuts, éléments manquants, prix en FCFA) | `apps/web/src/lib/campagnes.ts` |
| Fiche produit publique `/p/<adresse>` | `apps/web/src/app/p/[slug]/page.tsx`, `apps/web/src/components/FicheProduit.tsx` |
| Boutons de contact (redirection contrôlée) | `apps/web/src/app/p/[slug]/vers/[type]/route.ts` |
| Annonceur : liste, création, préparation, envoi en modération | `apps/web/src/app/annonceur/campagnes/` |
| Admin : file de modération, mise en pause | `apps/web/src/app/admin/campagnes/` |

## Parcours

1. L'annonceur crée une campagne avec le nom du produit (brouillon).
2. Il complète la fiche : description, prix en FCFA (facultatif), dates, photo.
3. Il active de 1 à 4 boutons : **Numéro WhatsApp**, **Catalogue WhatsApp**, **Envoyer un message** (message déjà écrit), **Acheter** (boutique en ligne). Il saisit seulement son numéro ou l'adresse de sa boutique ; Vupay fabrique le lien WhatsApp.
4. Il envoie en modération : possible seulement si la fiche est complète et l'entreprise vérifiée.
5. Le modérateur voit la fiche telle qu'elle sera publiée et l'adresse réelle de chaque bouton, puis **publie** ou **refuse avec un motif**.
6. Une fois publiée, la fiche est en ligne à une adresse qui ne change jamais : `vupay.app/p/<12 caractères>`.

## Le critère : lien stable, aucune redirection arbitraire

- **Adresse stable** : tirée au hasard à la création, l'annonceur ne la choisit pas et personne ne peut la changer (refusé par la base).
- **Destinations enregistrées à l'avance** : chaque bouton mène à une adresse enregistrée et contrôlée par la base : HTTPS obligatoire, ni adresse IP, ni port, ni identifiant caché, ni `localhost`, ni `javascript:` ; les trois boutons WhatsApp ne peuvent mener qu'à WhatsApp (un faux domaine comme `wa.me.pirate.example` est refusé).
- **Pas de paramètre d'adresse** : la route des boutons ne lit aucune adresse dans la requête ; elle demande à la base la destination de cette campagne, la recontrôle, puis redirige. Essai : `…/vers/acheter?url=https://pirate.example` renvoie vers la fiche, jamais vers le site pirate.
- **Campagne non diffusable** (en pause, expirée, terminée) : la fiche reste visible à la même adresse, mais sans boutons et sans aucune redirection.
- **Contenu figé** : pendant la modération et après la publication, ni le contenu ni les boutons ne changent ; le modérateur ne peut pas réécrire la fiche.
- **Discrétion** : la fiche publique ne révèle ni les adresses de destination, ni budget, ni tarif ; un brouillon n'est jamais public.

## Hors de cette étape

- Enregistrement des visites et des clics, lien personnel du diffuseur, antifraude : **étape 4**.
- Budget, tarifs par clic qualifié, paiement : **étape 5** (décisions non validées). Aucune campagne ne peut être rémunérée aux vues (contrainte en base).

## Mise en service

Appliquer la migration `0004` après `0001` à `0003`. Le compartiment `produits` (photos publiques) est créé par la migration.
