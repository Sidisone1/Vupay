# Connexion par SMS — Orange (Mali)

## Le choix : l'API SMS d'Orange

| | Orange SMS API | Twilio |
| --- | --- | --- |
| Pays couverts | Mali, Côte d'Ivoire, Sénégal, Burkina Faso, Guinée-Bissau, Guinée (un abonnement par pays) | Monde entier |
| Destinataires | Tous les opérateurs du pays (Orange, Moov, Telecel…) | Tous |
| Prix au Mali | 35 FCFA le SMS (100 SMS = 3 500 FCFA), jusqu'à 16 FCFA en gros volume | Nettement plus cher, payé en dollars par carte bancaire |
| Paiement | Crédit de communication Orange ou Orange Money | Carte bancaire internationale |
| Équipe locale | Oui, à Bamako | Non |

**Décision : Orange pour le Mali et les pays couverts.** Le Bénin, le Togo et le Niger ne sont pas couverts par l'API Orange : on ajoutera un second fournisseur au moment d'ouvrir ces pays.

## Fournisseur par pays et par opérateur

Point important : chaque API SMS Orange envoie vers **tous les opérateurs du pays**, pas seulement vers les clients Orange (« in and to <pays>, any operator » dans la documentation Orange). Un client MTN ou Moov en Côte d'Ivoire, Moov Africa ou Telecel au Mali reçoit donc le code.

| Pays | Opérateurs mobiles | Fournisseur retenu | Prix indicatif |
| --- | --- | --- | --- |
| Mali | Orange, Moov Africa Malitel, Telecel | Orange SMS Mali | 35 FCFA (16 FCFA en gros volume) |
| Côte d'Ivoire | Orange, MTN, Moov Africa | Orange SMS Côte d'Ivoire | jusqu'à 10 FCFA |
| Sénégal | Orange, Free, Expresso | Orange SMS Sénégal | à confirmer |
| Burkina Faso | Orange, Moov Africa, Telecel Faso | Orange SMS Burkina | à confirmer |
| Guinée-Bissau | Orange, MTN, Guinetel | Orange SMS Guinée-Bissau | à confirmer |
| Guinée (Conakry) | Orange, MTN, Cellcom | Orange SMS Guinée | à confirmer |
| Togo | Togocom (Togo Cell), Moov Africa | Agrégateur (pas d'Orange) | dès 12 FCFA (Ikoddi) |
| Bénin | MTN, Moov Africa, Celtiis | Agrégateur (pas d'Orange) | dès 12 FCFA (Ikoddi) |
| Niger | Airtel, Moov, Zamani, Niger Télécom | Agrégateur | dès 12 FCFA (Ikoddi) |

Agrégateurs repérés pour le Togo, le Bénin et le Niger, à comparer au moment d'ouvrir ces pays :

- **Ikoddi** (société Kreezus, Burkina Faso) : SMS OTP par API dans 7 pays (Burkina Faso, Sénégal, Côte d'Ivoire, Niger, Mali, Togo, Bénin), de 12 à 6 FCFA selon le volume, offre gratuite de départ avec 40 SMS.
- **e-MC** (Bénin) : API SMS et OTP, 16 pays d'Afrique de l'Ouest, dont Togo Cell, Moov Togo, MTN et Moov Bénin, Celtiis, Airtel, Moov et Orange Niger.
- **Twilio / Vonage** : couverture mondiale mais plus chers ; Vonage signale des restrictions vers Togo Cellulaire.

Les prix des agrégateurs sont ceux affichés sur leurs sites le 23/11/2026 : à confirmer par devis. La fonction d'envoi choisit déjà le fournisseur selon l'indicatif du numéro ; l'agrégateur sera branché quand vous l'aurez choisi (il faudra ses identifiants d'API).

La Guinée (Conakry, +224) n'est pas encore dans la liste des pays de Vupay : l'ajouter demande une petite migration (nouveau pays, format des numéros à 9 chiffres).

Le message envoyé : « Vupay : votre code de connexion est 123456. Ne le communiquez à personne. » Il ne contient ni lien ni le mot WhatsApp (Orange Mali bloque les messages qui citent cette marque).

## Ce qui est déjà fait

- La fonction d'envoi **envoyer-sms** est installée sur le projet Supabase **vupay-v2** (code : `supabase/functions/envoyer-sms/`, tests : `apps/web/src/lib/sms-orange.test.ts`).
- Elle vérifie que chaque demande vient bien de Supabase (signature), demande un jeton à Orange (valable une heure, renouvelé automatiquement) et envoie le SMS.
- Tant que les étapes ci-dessous ne sont pas faites, elle reste inactive : aucun SMS n'est envoyé, rien n'est facturé.

## Ce qu'il vous reste à faire (environ 30 minutes, plus le délai de validation d'Orange)

### 1. Chez Orange Developer

1. Créez un compte sur **developer.orange.com**.
2. Ouvrez la page **SMS Mali** (developer.orange.com/apis/sms-ml) et cliquez sur **Create your application** (ou « Créer une application »). Nom : `Vupay`.
3. Orange fait valider l'abonnement par son équipe locale (règle depuis février 2023).
4. Demandez un **nom d'expéditeur personnalisé** `VUPAY` via le formulaire **developer.orange.com/sms-api-queries** : sans lui, certains pays bloquent l'envoi. Orange peut demander une preuve que vous êtes autorisé à utiliser ce nom.
5. Achetez un **pack de SMS** (bouton **Configure** dans **My apps**) : le premier pack de 100 SMS coûte 3 500 FCFA, payable avec une puce Orange ou Orange Money.
6. Dans **My apps**, notez le **Client ID** et le **Client secret**. Ne les envoyez à personne, ni par message ni dans cette conversation.

### 2. Dans Supabase (projet vupay-v2)

1. **Authentication → Sign In / Providers → Phone** : activez **Enable Phone provider**. Le fournisseur SMS choisi dans cette page n'est pas utilisé (c'est notre fonction qui envoie).
2. **Authentication → Auth Hooks → Add hook → Send SMS hook** :
   - type : **HTTPS** ;
   - adresse : `https://pwubrzwwbbmwagehdzfq.supabase.co/functions/v1/envoyer-sms` ;
   - cliquez sur **Generate secret** et copiez le secret (il commence par `v1,whsec_`) ;
   - enregistrez.
3. **Edge Functions → Secrets** : ajoutez ces valeurs.

| Nom | Valeur |
| --- | --- |
| `SEND_SMS_HOOK_SECRET` | le secret généré à l'étape précédente |
| `ORANGE_CLIENT_ID` | le Client ID d'Orange |
| `ORANGE_CLIENT_SECRET` | le Client secret d'Orange |
| `ORANGE_NOM_EXPEDITEUR` | `VUPAY`, seulement quand Orange l'a approuvé |

### 3. Essai

Ouvrez la page de connexion du site, entrez votre numéro malien, choisissez **Par SMS** : le code doit arriver en quelques secondes. Sinon, prévenez-moi : je lirai les journaux de la fonction (sans voir votre code).

## Pour les essais avant d'avoir le compte Orange

Dans **Authentication → Sign In / Providers → Phone**, la rubrique **Test Phone Numbers and OTPs** permet de déclarer des numéros fictifs avec un code fixe, par exemple `22370000001=123456`. Ces numéros se connectent sans envoi de SMS.
