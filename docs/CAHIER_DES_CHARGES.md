> Copie du document « Cahier des charges — Vupay » (Claude Docs, 17/11/2026). La version de référence reste le document en ligne :
> https://claude.ai/code/artifact/88ea2633-767a-4d80-9876-02c6f3c32a76

# Cahier des charges — Vupay (pubs payées sur statuts et stories)

2026-11-17 · SAM

## Résumé et nom

Vupay est une plateforme qui paie des particuliers pour publier les pubs de marques sur leur statut WhatsApp et leurs stories Instagram, Facebook, TikTok, Snapchat et Telegram, avec paiement à la vue et au clic et retrait Mobile Money dans les 8 pays de l'UEMOA. Le concept part de WhatsPay (Bénin), limité à WhatsApp, et l'étend aux autres réseaux ; la marque, le design et le code sont entièrement nouveaux.

**Nom retenu : Vupay** (« vu » + « pay » : chaque vue paie). Court, il dit la promesse en un mot et évite « Whats », qui exposerait à la marque WhatsApp. Seule réserve : « pay » peut laisser croire à un service de paiement ; préciser partout qu'il s'agit d'une plateforme publicitaire.

Noms écartés : Statoo, Diffuzo, Vuvu.

À vérifier avant de valider : disponibilité du domaine (.africa, .com), des comptes TikTok/Facebook et absence de marque déposée à l'OAPI.

## Référence : WhatsPay

La vidéo promo de WhatsPay (35 s, TikTok @whatspay.afric, app.whatspay.africa) montre un modèle simple : des annonceurs paient, des diffuseurs publient et touchent une part. Un seul écran de l'app est visible ; le reste est déduit.

| Élément | Ce que montre la vidéo |
|---|---|
| Rémunération | 1 F par vue dès la première, jusqu'à 10 F par clic, « 150k par mois selon audience » |
| Inscription | Gratuite, « en 2 minutes », apps Android et iOS + web |
| Parcours | 1. S'inscrire 2. Accepter une campagne 3. Publier en statut 4. Encaisser à la vue |
| Espace diffuseur | Profil, solde (57 118 F), nombre de campagnes, taux de clic (0,5 %), taux d'occupation (63 %), taux de complétion (82,7 %) |
| Confiance | Vérification d'identité obligatoire avant de recevoir des campagnes |
| Viralité | « Partager mon badge » sur ses réseaux |
| Retrait | Dès 1 000 F, instantané, MTN MoMo, Moov Money, Celtis Cash (Bénin) |

Ce que la vidéo ne montre pas : l'espace annonceur, les prix payés par les marques, la manière dont les vues sont prouvées et le back-office.

## Réseaux couverts

Vupay paie uniquement les vues sur les contenus éphémères de 24 h (statut WhatsApp, stories ailleurs), jamais les publications permanentes du profil. Six réseaux sont proposés, lancés en trois phases.

| Réseau | Format payé | Lien cliquable dans le contenu | Preuve des vues | Phase |
|---|---|---|---|---|
| WhatsApp | Statut | Oui, lien dans le texte | Capture « Vu par » | Lancement |
| Instagram | Story | Oui, sticker « Lien » | Capture ; API possible pour les comptes pro (créateur ou entreprise) | Lancement |
| Facebook | Story | Selon le type de compte | Capture ; API possible pour les Pages | Lancement |
| TikTok | Story | Non garanti | Capture | Phase 2 |
| Snapchat | Story | Oui, lien joint au snap | Capture ; statistiques pour les profils publics | Phase 2 |
| Telegram | Story | Selon les options du compte | Capture | Phase 3 |

Non retenus : YouTube et LinkedIn (stories supprimées), X et Threads (pas de stories). Les fonctions des réseaux changent souvent : chaque ligne est à revérifier au moment du développement.

**Conséquences sur le produit**
- Le diffuseur relie ses comptes (réseau + nom d'utilisateur) et Vupay estime sa portée réseau par réseau.
- L'annonceur choisit un ou plusieurs réseaux ; un seul créatif vertical 9:16 sert partout.
- Une campagne peut être publiée par le même diffuseur sur plusieurs réseaux ; chaque publication a son code et sa preuve.
- Tarif réglable par réseau (base : 1 F la vue pour le diffuseur), car les audiences n'ont pas la même valeur pour les marques.
- Instagram, Facebook et TikTok demandent de signaler les contenus sponsorisés : le texte fourni au diffuseur inclut la mention publicitaire.
- Les diffuseurs Instagram et Facebook sont encouragés à passer en compte pro (gratuit) pour permettre une vérification automatique plus tard.

## Acteurs et parcours

Trois acteurs : l'annonceur qui paie, le diffuseur qui publie, la plateforme qui vérifie et paie. Le diffuseur n'est crédité qu'après la vérification de l'étape 6.

Les clics sont comptés en continu par le lien court ; les vues attendent la capture envoyée avant l'expiration du statut ou de la story.

## Espace diffuseur

Le diffuseur doit pouvoir passer de l'inscription au premier gain en moins de 24 h, tout depuis son téléphone.

| Module | Fonctions | Priorité |
|---|---|---|
| Inscription | Numéro WhatsApp + code OTP, pays, ville, âge, sexe, centres d'intérêt, code parrain | MVP |
| Profil d'audience | Nombre de contacts déclaré, capture des vues de ses 3 derniers statuts ou stories, par réseau relié, pour estimer sa portée réelle | MVP |
| Vérification d'identité (KYC) | Photo de pièce d'identité + selfie ; obligatoire avant le premier retrait | MVP |
| Campagnes disponibles | Liste filtrée selon son profil (pays, âge, intérêts), rémunération affichée, places restantes | MVP |
| Accepter et publier | Téléchargement du visuel ou vidéo + texte avec son lien de clic personnel ; bouton de partage vers le réseau choisi | MVP |
| Envoyer la preuve | Capture du nombre de vues après 20 à 24 h, avant expiration de la story | MVP |
| Tableau de bord | Solde disponible, solde en attente de validation, vues, clics, taux de clic, historique | MVP |
| Retrait | Choix de l'opérateur et du numéro, seuil minimum, suivi du statut | MVP |
| Niveaux et badge | Bronze, Argent, Or selon fiabilité ; badge partageable ; accès prioritaire aux campagnes mieux payées | V2 |
| Parrainage | Prime quand un filleul fait son premier retrait | V2 |
| Notifications | Nouvelle campagne, rappel de preuve, preuve validée ou refusée, retrait payé (push + WhatsApp) | MVP |

## Espace annonceur

L'annonceur prépaie un budget, cible une audience et ne paie que les vues et clics validés.

| Module | Fonctions | Priorité |
|---|---|---|
| Compte entreprise | Raison sociale, RCCM ou pièce du gérant, pays, secteur | MVP |
| Création de campagne | Objectif (vues ou clics), visuel ou vidéo 9:16 de 30 s max, texte, lien de destination, dates | MVP |
| Ciblage | Réseaux, pays, villes, tranche d'âge, sexe, centres d'intérêt, niveau minimum des diffuseurs | MVP |
| Budget | Budget total, plafond par diffuseur, estimation des vues et clics avant paiement | MVP |
| Paiement | Rechargement du portefeuille par Mobile Money ou carte ; facture PDF | MVP |
| Modération | Campagne publiée seulement après validation par l'admin | MVP |
| Suivi | Vues et clics validés, coût par vue réel, nombre de diffuseurs actifs, répartition par ville | MVP |
| Rapport | Export PDF/CSV de fin de campagne | V2 |
| Libre-service ou géré | Au lancement, l'équipe peut créer les campagnes pour les premiers clients | MVP |

Le budget non consommé en fin de campagne reste dans le portefeuille annonceur ou est remboursé à sa demande.

## Back-office administrateur

Le back-office porte la confiance du système : aucune vue n'est payée et aucun retrait ne part sans règle ou validation.
- **Tableau de bord global** : diffuseurs actifs, campagnes en cours, vues et clics du jour, marge, solde des comptes opérateurs par pays.
- **File de preuves** : captures à valider avec le chiffre lu automatiquement, l'historique du diffuseur et les alertes de fraude ; valider, corriger le chiffre ou refuser avec motif.
- **KYC** : file des pièces d'identité et selfies à approuver.
- **Campagnes** : modération du contenu, mise en pause, arrêt, remboursement.
- **Retraits** : file des demandes, validation automatique sous un seuil, manuelle au-dessus, relance en cas d'échec opérateur.
- **Utilisateurs** : recherche, niveau, suspension, bannissement, notes internes.
- **Paramètres** : tarifs par pays, seuil de retrait, frais, commission, règles anti-fraude.
- **Rôles** : super-admin, modérateur, finance, support ; journal de toutes les actions.

## Mesure, vérification et anti-fraude

WhatsApp, TikTok, Snapchat et Telegram ne donnent aucun accès automatique aux vues d'une story ; seuls Instagram (comptes pro) et Facebook (Pages) en proposent via leur API. Les vues reposent donc d'abord sur une preuve envoyée par le diffuseur, les clics sur un lien que la plateforme mesure elle-même. C'est le cœur du produit et le premier risque financier.

**Vues (déclaratives, vérifiées)**
- Le visuel envoyé au diffuseur porte un code court unique (ex. « ST-4K7 ») dans un coin, pour relier la capture à la bonne campagne et au bon diffuseur.
- Après 20 à 24 h, le diffuseur envoie une capture de l'écran des vues du réseau (« Vu par », « Activité »…) montrant la story, le code et le nombre de vues.
- Un OCR lit le nombre et le code ; une IA de vision vérifie que c'est bien l'interface du réseau déclaré et que l'image n'est pas retouchée.
- Les cas normaux sont validés automatiquement ; les cas douteux vont dans la file admin.
- Les gains passent en « en attente » puis en « disponible » après validation.

**Clics (mesurés)**
- Chaque diffuseur reçoit un lien court personnel par campagne (ex. vupay.app/c/ab12).
- Un clic n'est payé qu'une fois par appareil et par adresse IP sur 24 h, hors robots et hors clics du diffuseur lui-même.

**Règles anti-fraude**

| Signal | Règle proposée |
|---|---|
| Vues anormales | Vues > 1,5 × la portée habituelle du diffuseur → vérification manuelle |
| Capture réutilisée | Empreinte d'image déjà vue → refus |
| Code absent ou faux | Refus automatique |
| Plafond | Vues payées par story plafonnées selon le niveau (ex. 500 au niveau Bronze) |
| Comptes multiples | Un compte par numéro, par pièce d'identité et par numéro de retrait |
| Ratio clics/vues | Taux de clic > 15 % → suspicion de clics achetés |
| Sanctions | Avertissement, puis gains annulés, puis bannissement |

Les seuils sont des points de départ à ajuster après le premier mois de données réelles.

## Modèle économique

La plateforme gagne la différence entre ce que paie l'annonceur et ce qu'elle reverse au diffuseur : hypothèse de départ 50 %, avant frais Mobile Money. Les montants ci-dessous sont des propositions à tester, pas des prix du marché vérifiés.

| Élément | Annonceur paie | Diffuseur reçoit | Marge brute |
|---|---|---|---|
| Vue validée | 2 F | 1 F | 1 F |
| Clic validé | 20 F | 10 F | 10 F |
| Budget minimum de campagne | 25 000 F | — | — |
| Seuil de retrait | — | 1 000 F | — |

Exemple : une campagne de 100 000 F achète 50 000 vues, reverse 50 000 F aux diffuseurs et laisse 50 000 F de marge, moins les frais de paiement et de retrait.

Autres revenus possibles en V2 : campagnes gérées clé en main, création des visuels, options de ciblage premium, abonnement annonceur mensuel.

Point d'honnêteté : une story moyenne touche souvent quelques dizaines à quelques centaines de vues. Le « 150 000 F par mois » de WhatsPay suppose 150 000 vues ; la communication de Vupay doit montrer des gains réalistes pour éviter la déception et les plaintes.

## Paiements Mobile Money UEMOA

Tout passe par un agrégateur qui fait à la fois l'encaissement (annonceurs) et le décaissement (retraits diffuseurs), pour ne pas intégrer chaque opérateur un par un. Monnaie unique : FCFA (XOF).

| Pays | Opérateurs à couvrir (à confirmer auprès de l'agrégateur) | Phase |
|---|---|---|
| Mali | Orange Money, Moov Money, Wave | Lancement |
| Côte d'Ivoire | Orange Money, MTN MoMo, Moov Money, Wave | Lancement |
| Sénégal | Orange Money, Wave, Free Money / Mixx | Phase 2 |
| Burkina Faso | Orange Money, Moov Money | Phase 2 |
| Bénin | MTN MoMo, Moov Money, Celtis Cash | Phase 2 |
| Togo | Flooz (Moov), T-Money / Mixx | Phase 3 |
| Niger | Airtel Money, Moov Money | Phase 3 |
| Guinée-Bissau | Orange Money, MTN MoMo | Phase 3 |

**Agrégateur** : réutiliser l'existant avant d'ouvrir un nouveau compte — contrat FeexPay Côte d'Ivoire déjà signé, intégrations pawaPay et CinetPay étudiées pour SUGU. Critère décisif : disposer d'une API de **décaissement** (payout) dans chaque pays visé, pas seulement d'encaissement.

**Règles de retrait**
- Seuil 1 000 F, frais affichés avant confirmation (pris en charge ou répercutés : décision ouverte).
- Le numéro de retrait doit être au nom de la personne vérifiée (KYC).
- Retrait automatique sous un plafond journalier (ex. 25 000 F), validation manuelle au-dessus.
- Chaque opération a une référence unique ; les échecs opérateur recréditent le solde automatiquement.
- Suivi du solde de décaissement par pays avec alerte avant qu'il ne tombe à zéro.

## Architecture et données

Une seule base de code web installée comme application (PWA) suffit pour le MVP ; les apps Play Store et App Store viennent ensuite avec la même base.

| Couche | Choix proposé | Raison |
|---|---|---|
| Front diffuseur, annonceur, admin | Next.js + Tailwind, PWA installable | Une base, trois espaces, léger sur réseau mobile |
| Apps mobiles (V2) | Capacitor ou Expo autour du même front | Présence Play Store / App Store |
| Backend, base, auth, fichiers | Supabase (Postgres, Auth OTP, Storage, Edge Functions) | Déjà connecté à ton environnement |
| OCR et contrôle des captures | Modèle de vision via API, appelé depuis une Edge Function | Lecture du chiffre et du code, détection de retouche |
| Liens de clic | Route courte /c/[code] + table des clics | Mesure maîtrisée, sans service tiers |
| OTP et notifications | WhatsApp Business API ou SMS via un fournisseur local | Le diffuseur est déjà sur WhatsApp |
| Paiements | Agrégateur Mobile Money (webhooks) | Encaissement + décaissement |
| Hébergement | Vercel (front) + Supabase (backend) | Déploiement simple |

Aucun de ces services n'est gratuit à l'échelle : coûts à chiffrer (Supabase, Vercel, OCR par capture, OTP par SMS/WhatsApp, frais agrégateur).

**Tables principales**

| Table | Contenu clé |
|---|---|
| profiles | rôle (diffuseur, annonceur, admin), pays, ville, âge, intérêts, comptes sociaux reliés, niveau, statut KYC |
| kyc_documents | pièce, selfie, statut, motif de refus |
| advertisers | entreprise, RCCM, pays, solde du portefeuille |
| campaigns | annonceur, objectif, créatif, lien cible, ciblage, tarifs, budget, statut |
| assignments | campagne × diffuseur × réseau, code unique, lien court, date de publication |
| proofs | capture, vues lues par OCR, vues validées, score de fraude, statut |
| clicks | lien, date, IP hachée, appareil, valide ou non |
| ledger_entries | journal comptable unique : gains, débits annonceur, retraits, ajustements |
| withdrawals | montant, opérateur, numéro, référence agrégateur, statut |
| referrals | parrain, filleul, prime, statut |
| audit_logs | qui a fait quoi dans le back-office |

Les soldes ne sont jamais stockés en dur : ils sont calculés depuis ledger_entries, ce qui rend chaque franc traçable.

## Conformité, risques et points ouverts

Le plus gros risque n'est pas technique : c'est la fraude sur les vues et la conformité du décaissement d'argent à des particuliers. Ce sont des hypothèses à faire valider par un juriste, je ne suis pas avocat.

| Risque | Mesure proposée |
|---|---|
| Marques des réseaux (Meta, TikTok, Snap, Telegram) | Aucun nom ni logo de réseau dans le nom ou l'icône de Vupay ; mention descriptive seulement |
| Conditions d'utilisation des réseaux | Usage personnel du statut ou de la story par le diffuseur, pas d'automatisation de comptes ni de faux comptes |
| Monnaie électronique (BCEAO) | Ne pas détenir de fonds pour compte de tiers soi-même : passer par un agrégateur agréé |
| Données personnelles (pièces, selfies) | Consentement, stockage privé chiffré, déclaration auprès de l'autorité de protection des données de chaque pays (APDP au Mali) |
| Contenus publicitaires | Liste interdite : jeux d'argent non agréés, arnaques financières, faux médicaments, contenus politiques |
| Fiscalité | Statut des gains des diffuseurs et facturation annonceurs à valider avec un comptable |
| Structure juridique | Entreprise individuelle actuelle ou société (SARL/SAS) pour le multi-pays : à décider |
| Promesses de gains | Afficher des gains moyens réels, pas des maximums |

**Décisions à prendre**
- Vérifier la disponibilité de Vupay : domaine, comptes TikTok/Facebook, marque OAPI
- Choisir l'agrégateur de décaissement et confirmer les opérateurs par pays
- Fixer les tarifs annonceur et diffuseur par pays
- Frais de retrait : pris en charge ou répercutés
- Pays de lancement : Mali seul ou Mali + Côte d'Ivoire
- Trouver 3 à 5 annonceurs pilotes avant le développement

## Feuille de route et consignes pour Claude Code

Le MVP se construit en 5 lots, chacun testable seul ; les durées sont des estimations en vibe coding, pas des engagements.
- **Socle** (≈ 1 semaine) : projet Next.js + Supabase, auth OTP, rôles, profils, schéma de base complet, déploiement Vercel.
- **Campagnes** (≈ 1 semaine) : création côté annonceur, modération admin, liste filtrée et acceptation côté diffuseur, code unique et lien court.
- **Preuves et clics** (≈ 1 à 2 semaines) : upload de capture, OCR, score de fraude, file admin, comptage des clics, écritures au journal.
- **Argent** (≈ 1 à 2 semaines) : portefeuille annonceur, retraits via l'agrégateur en mode test, webhooks, KYC.
- **Pilote** (≈ 2 semaines) : 3 à 5 annonceurs, 100 à 300 diffuseurs dans un pays, ajustement des seuils et des tarifs avant ouverture.

V2 après le pilote : niveaux et badges, parrainage, apps stores, rapports PDF, pays supplémentaires.

**Consignes à donner à Claude Code**
- Travailler lot par lot ; ne pas commencer un lot avant que le précédent soit testé.
- Toutes les sommes en entiers FCFA, jamais en décimales ; tout mouvement d'argent passe par ledger_entries.
- Règles de sécurité Supabase (RLS) sur chaque table dès sa création.
- Clés API dans les variables d'environnement, jamais dans le code.
- Paiements d'abord en mode test (sandbox) ; passage en production seulement avec ton accord.
- Interface en français, mobile d'abord, pages légères pour la 3G.
- Identité visuelle propre à Vupay : aucune reprise des couleurs, logo ou visuels de WhatsPay.

## Annexe — Mises à jour du 23 novembre 2026

Cette annexe complète le cahier des charges initial ; le cadrage V2 (`docs/PRODUIT_V2_CLICS_QUALIFIES.md`) prévaut sur les passages qui rémunèrent les vues.

**Mesure des vues des statuts WhatsApp.** Recherche faite le 23/11/2026 : aucune API officielle ne permet de lire les vues d'un statut WhatsApp (la Cloud API de Meta ne gère pas le Statut). Les services non officiels (GREEN-API, Maytapi, Whapi.Cloud, WAHA…) exigent de relier le WhatsApp personnel du diffuseur à un robot, avec un risque de blocage du compte et un problème de vie privée. Décision : les vues ne sont pas rémunérées ; une capture « Vu par » lue par une IA de vision peut servir de preuve d'appoint et de signal antifraude. Détail : `docs/MESURE_VUES_WHATSAPP.md`.

**Connexion par SMS selon les pays.** Orange (API SMS, tous opérateurs du pays) pour le Mali, la Côte d'Ivoire, le Sénégal, le Burkina Faso, la Guinée-Bissau et la Guinée ; un agrégateur (Ikoddi, e-MC…) pour le Togo, le Bénin et le Niger. Détail : `docs/CONNEXION_SMS.md`.

**État d'avancement.** Voir `docs/ETAT_DU_PROJET.md`.
