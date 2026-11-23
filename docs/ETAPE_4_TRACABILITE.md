# Étape 4 — Traçabilité

Suivi : issue GitHub #11. Critère d'acceptation : **aucune vue payée, aucune action dupliquée créditée**.

## Parcours

1. Le diffuseur ouvre **Campagnes disponibles**, choisit une offre et clique sur **Obtenir mon lien** pour WhatsApp, Instagram ou Facebook. Il reçoit un lien personnel `vupay.app/c/<10 caractères>`, qu'il copie ou partage dans son statut.
2. Une personne ouvre ce lien : la **visite** est notée (jamais payée), puis la fiche produit s'affiche.
3. Elle touche un bouton (numéro WhatsApp, catalogue, message, acheter) : l'**action** est notée et attribuée au diffuseur, puis la personne part vers WhatsApp ou la boutique.
4. L'antifraude classe chaque action : **validée**, **en vérification** (un modérateur décide) ou **refusée**.
5. Diffuseur et annonceur voient leurs résultats : visites, actions par bouton et par statut.

## Le critère

- **Aucune vue payée** : visites et actions sont dans deux journaux séparés (`page_visits`, `contact_actions`). Aucune écriture d'argent à cette étape ; l'étape 5 ne pourra payer que des actions validées.
- **Aucune action dupliquée** : une même personne ne compte qu'**une fois par campagne et par bouton**, même si elle reclique ou passe par le lien d'un autre diffuseur. C'est garanti par un index unique en base (même une écriture directe est refusée) et par un verrou pendant le calcul.

## Antifraude

| Situation | Décision |
| --- | --- |
| Robot ou aperçu automatique (dont l'aperçu de lien de WhatsApp) | Refusée |
| Le diffuseur clique sur son propre lien | Refusée |
| L'annonceur clique sur sa propre campagne | Refusée |
| Clic sans passage par la fiche (ou plus de 30 min après) | Refusée |
| Clic moins de 2 secondes après l'ouverture | Refusée |
| Personne déjà comptée pour ce bouton | Refusée |
| Même appareil sous un autre témoin | En vérification |
| Plus de 5 actions par jour depuis le même réseau et appareil | En vérification |
| Plus de 20 actions en une minute sur un même lien | En vérification |

Pourquoi « en vérification » plutôt que refusé : au Mali, beaucoup de personnes partagent la même adresse réseau chez leur opérateur mobile ; refuser automatiquement pénaliserait de vrais clients.

Le visiteur est toujours redirigé vers l'annonceur, même quand l'action n'est pas retenue : l'antifraude décide seulement de ce qui pourra être payé.

## Vie privée

- Aucune adresse IP en clair : le serveur ne transmet que des empreintes (HMAC-SHA256 avec un sel secret).
- Un témoin (cookie) aléatoire reconnaît le navigateur d'une visite à l'autre, limité aux adresses `/c/…`.
- Seul le serveur Vupay peut enregistrer visites et actions (clé service) : personne ne peut fabriquer de faux visiteurs en appelant l'API.

## Fichiers

| Partie | Fichier |
| --- | --- |
| Base : liens, journaux, antifraude, droits | `supabase/migrations/0006_tracabilite.sql` |
| Tests en base (44 vérifications) | `supabase/tests/40_tracabilite.sql` |
| Robots, appareils, empreintes | `apps/web/src/lib/tracabilite.ts` |
| Résumés de résultats | `apps/web/src/lib/statistiques.ts` |
| Lien personnel et boutons | `apps/web/src/app/c/` |
| Écrans diffuseur | `apps/web/src/app/diffuseur/campagnes/` |
| Résultats annonceur | `apps/web/src/app/annonceur/campagnes/[id]/` |
| Vérification admin | `apps/web/src/app/admin/actions/` |

## Mise en service

Migration `0006` appliquée sur vupay-v2. Dans Vercel, ajouter en plus :

- `SUPABASE_SERVICE_ROLE_KEY` : Supabase → Project Settings → API Keys → clé **secret** (jamais dans le code ni dans le navigateur) ;
- `SEL_HACHAGE_IP` : 32 caractères aléatoires ou plus.

Sans ces deux valeurs, les liens personnels répondent « mesure pas encore configurée » et rien n'est enregistré.
