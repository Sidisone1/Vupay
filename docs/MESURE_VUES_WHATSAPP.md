# Mesurer les vues des statuts WhatsApp — recherche du 23 novembre 2026

Question du porteur du projet : existe-t-il un outil (skill, connecteur, MCP, API) pour mesurer les vues des statuts WhatsApp publiés par les diffuseurs ?

## Réponse courte

**Aucun outil officiel n'existe.** Des services non officiels savent lire les vues, mais seulement en prenant le contrôle du compte WhatsApp personnel du diffuseur, ce qui expose son compte à un blocage et pose un problème de vie privée. Vupay garde donc sa règle : **les vues ne sont jamais rémunérées** ; elles peuvent servir de preuve d'appoint, pas de base de paiement.

## Ce qui existe

| Solution | Type | Lit les vues ? | Limites |
| --- | --- | --- | --- |
| API officielle WhatsApp (Meta Cloud API) | Officiel | **Non** | Meta indique que le Statut fait partie des outils de l'application WhatsApp Business **non pris en charge par la Cloud API** : impossible de publier ou de lire un statut par l'API officielle. |
| Publicités dans le Statut (Meta Ads Manager) | Officiel, payant | Statistiques de la pub seulement | Ce sont des publicités achetées à Meta, affichées entre les statuts ; ce n'est pas le statut d'un particulier. Déploiement progressif selon les pays. |
| GREEN-API (`GetStatusStatistic`) | Non officiel | Oui, pour les statuts publiés **par l'API** | Le compte WhatsApp est relié comme « appareil connecté » chez le prestataire. Statistiques gardées 30 jours. |
| Maytapi, Whapi.Cloud (≈ 29 $/mois par numéro), Wassenger, WaChap | Non officiel | Publication ; vues selon l'offre | Même principe : chaque diffuseur devrait relier son WhatsApp personnel à un service tiers payant. |
| WAHA (auto-hébergé, open source) | Non officiel | Publication de statuts | Même principe, hébergé par Vupay. |
| go-whatsapp-web-multidevice (open source) | Non officiel | **Non** (« pas de compteur de vues ») | — |

Dans tous les cas, WhatsApp n'affiche un spectateur que si **lui et l'auteur du statut ont activé les confirmations de lecture** : même un outil parfait sous-compte les vues.

Aucun MCP, connecteur ou skill officiel n'a été trouvé pour les statuts WhatsApp.

## Pourquoi ne pas brancher un outil non officiel

1. **Risque pour les diffuseurs** : les conditions d'utilisation de WhatsApp interdisent l'automatisation non autorisée ; un compte relié à un robot peut être banni. Le diffuseur perdrait son WhatsApp personnel.
2. **Vie privée** : le prestataire voit les messages et contacts du diffuseur.
3. **Coût** : un abonnement par numéro, multiplié par des centaines de diffuseurs.
4. **Fiabilité** : ces services cessent de fonctionner à chaque changement de WhatsApp, et les vues restent sous-comptées.

## Ce que Vupay fait à la place

- **Rémunération sur les actions qualifiées** (étape 4) : clics sur les boutons de la fiche, mesurés par Vupay, avec antifraude et sans doublon.
- **Vues en preuve d'appoint, facultative** : le diffuseur peut envoyer une capture de l'écran « Vu par » de son statut. Une IA de vision (par exemple Gemini, déjà accessible dans l'environnement de développement) lit le nombre de vues et vérifie l'interface. Le résultat sert au tableau de bord et à l'antifraude (un lien qui reçoit beaucoup de clics sans aucune vue est suspect), **jamais au paiement**. La table `proofs` et la fonction `verifier-preuve` de la version 1 peuvent être reprises pour cela.
- **Piste à étudier plus tard** : un test avec quelques diffuseurs volontaires, consentement écrit, sur un numéro secondaire, pour comparer captures et statistiques d'un service non officiel. Sans engagement ni paiement sur cette base.

## Sources consultées

- Meta, coexistence WhatsApp Business : le Statut n'est pas pris en charge par la Cloud API (via theautomate.ai, guide « WhatsApp Status for Business », mis à jour le 21/11/2026).
- WhatsApp Help Center : seuls les spectateurs ayant activé les confirmations de lecture apparaissent.
- GREEN-API, documentation « Statuses » (statistiques d'envoi, de remise et de lecture, conservées 30 jours).
- Maytapi, Whapi.Cloud, Wassenger, WaChap, WAHA : pages « WhatsApp Status API ».
- GitHub, go-whatsapp-web-multidevice, discussion 289 : « no view count ».
