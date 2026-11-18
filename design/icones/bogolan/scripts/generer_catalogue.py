# Génère CATALOGUE.md et icones.json : python3 scripts/generer_catalogue.py <dossier de sortie>
# Les 154 icônes ajoutées pour atteindre 1000 sont dans ajout1000.py (même dossier).
import json, sys, os
out = sys.argv[1]
# Motifs traditionnels (briques graphiques)
MOTIFS = {
 "koli-so": ("Cercle pointé", "Unité, famille, communauté autour d'un centre", "profil, groupe, cible, enregistrement, point central"),
 "bantoron": ("Sabot de chèvre (triangles)", "Avertissement et protection", "alerte, sécurité, bouclier, attention"),
 "kaana-nonkon": ("Coude de l'iguane (double zigzag)", "Protection contre le mal", "signal, réseau, onde, son, électricité"),
 "donkonkolo": ("Tambour", "Appel, courage", "notification, cloche, haut-parleur, annonce"),
 "bara-feere": ("Fleur de calebasse", "Prospérité", "argent, gains, bonus, favoris, succès"),
 "turusina": ("Pilon des coépouses", "Coopération, partage des tâches", "collaboration, équipe, partage, tontine"),
 "dantigimari": ("Trace du crocodile", "Maître des conflits : équilibre, paix", "support, médiation, litige, équilibre, balance"),
 "sasira": ("Chemin du serpent (ondulation)", "Parcours, route", "itinéraire, carte, parcours, suivi, livraison"),
 "sa-kurulen": ("Serpent enroulé (spirale)", "Cycle, retour", "actualiser, synchroniser, chargement, historique"),
 "konosen": ("Empreinte d'oiseau (chevron à 3 doigts)", "Passage, message", "envoyer, partager, publier, flèches"),
 "sungurun-sen": ("Chevron simple", "Jeunesse, passage", "chevrons de navigation, déplier, suivant"),
 "juru-sarabali": ("Chemin du mauvais payeur (ligne brisée)", "Dette non payée", "impayé, retard, échec de paiement"),
 "dankalan-ko": ("Dos du python (losanges)", "Force", "grille, catégories, tableau de bord"),
 "sogosen": ("Traces de gibier (points en ligne)", "Piste, présence", "pointillés, étapes, progression, plus d'options"),
 "points": ("Semis de points", "Remplissage traditionnel", "texture de fond, états vides, décor"),
 "croisillon": ("Croisillons / quadrillage", "Champ cultivé, ordre", "calendrier, tableau, filtres"),
}
# Catégories : (id, titre, priorité, motif par défaut, [ (slug, nom, motif?) ])
C = []
def cat(cid, titre, prio, motif, items, note=""):
    C.append(dict(id=cid, titre=titre, priorite=prio, motif_defaut=motif, note=note,
      icones=[dict(zip(("slug","nom","motif"), (i.split("|")+[None])[:3])) for i in items]))

cat("navigation","Navigation et interface","P1","sungurun-sen",[
"home|Accueil","menu|Menu (hamburger)","close|Fermer","back|Retour","forward|Suivant","chevron-up|Chevron haut","chevron-down|Chevron bas","chevron-left|Chevron gauche","chevron-right|Chevron droite","arrow-up|Flèche haut|konosen","arrow-down|Flèche bas|konosen","arrow-left|Flèche gauche|konosen","arrow-right|Flèche droite|konosen","arrow-up-right|Lien sortant|konosen","external-link|Ouvrir à l'extérieur","more-horizontal|Plus d'options (horizontal)|sogosen","more-vertical|Plus d'options (vertical)|sogosen","search|Rechercher|koli-so","filter|Filtrer|croisillon","sort|Trier","sort-asc|Tri croissant","sort-desc|Tri décroissant","grid|Vue grille|dankalan-ko","list|Vue liste","dashboard|Tableau de bord|dankalan-ko","sidebar|Panneau latéral","expand|Agrandir","collapse|Réduire","fullscreen|Plein écran","exit-fullscreen|Quitter le plein écran","maximize|Maximiser","minimize|Minimiser","settings|Paramètres","sliders|Réglages","tune|Ajuster","apps|Applications|dankalan-ko","layers|Calques","tabs|Onglets","drag-handle|Poignée de glisser|points","pin|Épingler","unpin|Désépingler","bookmark|Signet","bookmark-filled|Signet actif","help|Aide","info|Information|koli-so","language|Langue","translate|Traduire","zoom-in|Zoom avant","zoom-out|Zoom arrière","refresh|Actualiser|sa-kurulen","loader|Chargement|sa-kurulen","first-page|Première page","last-page|Dernière page","scroll-top|Remonter en haut","breadcrumb|Fil d'Ariane|sogosen","command|Commande / raccourci","keyboard|Clavier","toggle-on|Interrupteur activé","toggle-off|Interrupteur désactivé","radio-button|Bouton radio|koli-so","checkbox|Case à cocher","checkbox-checked|Case cochée",
])
cat("actions","Actions","P1","konosen",[
"add|Ajouter","add-circle|Ajouter (cercle)|koli-so","remove|Retirer","edit|Modifier","pencil|Crayon (calame)","delete|Supprimer","trash|Corbeille","archive|Archiver","unarchive|Désarchiver","save|Enregistrer","copy|Copier","paste|Coller","cut|Couper","duplicate|Dupliquer","undo|Annuler|sa-kurulen","redo|Rétablir|sa-kurulen","download|Télécharger","upload|Téléverser","import|Importer","export|Exporter","share|Partager|konosen","send|Envoyer|konosen","print|Imprimer","scan|Scanner","qr-code|QR code|croisillon","qr-scan|Scanner un QR code","barcode|Code-barres","link|Lien","unlink|Supprimer le lien","attach|Joindre un fichier","lock|Verrouiller","unlock|Déverrouiller","eye|Afficher","eye-off|Masquer","login|Se connecter","logout|Se déconnecter","sync|Synchroniser|sa-kurulen","reply|Répondre","reply-all|Répondre à tous","forward-msg|Transférer","flag|Signaler","report|Signaler un abus|bantoron","block|Bloquer","mute|Couper le son","unmute|Rétablir le son","play|Lecture","pause|Pause","stop|Arrêt","record|Enregistrer (rec)|koli-so","skip-next|Suivant","skip-previous|Précédent","shuffle|Aléatoire","repeat|Répéter|sa-kurulen","volume|Volume|kaana-nonkon","rotate|Pivoter","crop|Recadrer","magic|Retouche automatique","select-all|Tout sélectionner","drag|Glisser-déposer",
])
cat("statuts","Statuts et retours","P1","bantoron",[
"check|Validé","check-circle|Succès|koli-so","check-double|Lu / double coche","x-circle|Erreur","alert-triangle|Attention|bantoron","alert-circle|Alerte|bantoron","info-circle|Info|koli-so","help-circle|Question","clock|En attente","hourglass|Sablier / délai","pending|En cours|sogosen","verified|Vérifié / certifié|bara-feere","badge|Badge","shield-check|Protégé|bantoron","ban|Interdit","new|Nouveau","star|Favori|bara-feere","star-filled|Favori actif|bara-feere","heart|J'aime","heart-filled|J'aime actif","sparkle|Mise en avant|bara-feere","fire|Tendance","trending-up|Hausse","trending-down|Baisse","offline|Hors ligne","online|En ligne|koli-so","wifi-off|Pas de connexion","empty|État vide|points","construction|En travaux","maintenance|Maintenance",
])
cat("social-generique","Actions sociales génériques (sans marque)","P1","konosen",[
"like|J'aime","dislike|Je n'aime pas","comment|Commentaire","comments|Discussion","chat|Messagerie","chat-bubble|Bulle de message","chat-group|Groupe de discussion|turusina","mention|Mention (@)","hashtag|Hashtag (#)|croisillon","story|Story / statut (anneau 24 h)|koli-so","status-ring|Anneau de statut qui se vide|koli-so","reel|Vidéo courte","live|Direct|donkonkolo","follow|Suivre","unfollow|Ne plus suivre","followers|Abonnés|turusina","subscribe|S'abonner|donkonkolo","repost|Republier|sa-kurulen","quote|Citer","views|Vues","reach|Portée|kaana-nonkon","engagement|Engagement|bara-feere","audience|Audience|turusina","influencer|Influenceur / diffuseur|koli-so","campaign|Campagne|donkonkolo","megaphone|Mégaphone / annonce|donkonkolo","broadcast|Diffusion|kaana-nonkon","post|Publication","feed|Fil d'actualité","poll|Sondage","emoji|Émoji","sticker|Autocollant","gif|GIF","voice-note|Note vocale|kaana-nonkon","read-receipt|Accusé de lecture","typing|En train d'écrire|sogosen","community|Communauté|koli-so","invite|Inviter|konosen","referral|Parrainage|turusina","leaderboard|Classement",
])
cat("reseaux","Réseaux sociaux et plateformes (marques)","P2","",[
"whatsapp|WhatsApp","whatsapp-business|WhatsApp Business","facebook|Facebook","messenger|Messenger","instagram|Instagram","threads|Threads","tiktok|TikTok","snapchat|Snapchat","telegram|Telegram","x-twitter|X (Twitter)","youtube|YouTube","linkedin|LinkedIn","pinterest|Pinterest","discord|Discord","signal-app|Signal","wechat|WeChat","reddit|Reddit","twitch|Twitch","bluesky|Bluesky","mastodon|Mastodon","tumblr|Tumblr","vimeo|Vimeo","spotify|Spotify","apple-music|Apple Music","deezer|Deezer","boomplay|Boomplay","audiomack|Audiomack","soundcloud|SoundCloud","google|Google","apple|Apple","microsoft|Microsoft","github|GitHub","gitlab|GitLab","gmail|Gmail","outlook|Outlook","zoom|Zoom","google-meet|Google Meet","teams|Microsoft Teams","play-store|Google Play","app-store|App Store","truecaller|Truecaller",
], note="Ces logos sont des marques déposées : on les utilise tels quels (fichiers officiels ou Simple Icons, CC0), sans les « bogolaniser » ni les recolorer, et seulement pour désigner le service (bouton « Se connecter avec », « Partager sur »). Dans le dépôt, les ranger à part dans brands/ avec la source de chaque fichier. Pour Vupay, le cahier des charges interdit tout logo de réseau dans l'identité : préférer les pictos génériques ci-dessus (bulle, anneau de story, appareil photo).")
cat("paiement","Paiement, argent et mobile money","P1","bara-feere",[
"wallet|Portefeuille","money|Billets FCFA","coins|Pièces","cash|Espèces","fcfa|Symbole FCFA","balance|Solde","earnings|Gains|bara-feere","payout|Retrait","withdraw|Retrait au guichet","deposit|Dépôt","transfer|Transfert","send-money|Envoyer de l'argent|konosen","receive-money|Recevoir de l'argent","request-money|Demander de l'argent","mobile-money|Mobile money (téléphone + billet)","agent-point|Point marchand / agent|koli-so","card|Carte bancaire","card-contactless|Paiement sans contact|kaana-nonkon","bank|Banque","atm|Guichet automatique","receipt|Reçu","invoice|Facture","bill|Note à payer","unpaid|Impayé|juru-sarabali","debt|Dette|juru-sarabali","credit|Crédit","loan|Prêt","savings|Épargne (canari / tirelire)","tontine|Tontine|turusina","piggy-bank|Tirelire","calculator|Calculatrice","percent|Pourcentage / commission","discount|Réduction","coupon|Bon de réduction","gift-card|Carte cadeau","bonus|Bonus|bara-feere","cashback|Remboursement partiel|sa-kurulen","refund|Remboursement|sa-kurulen","exchange|Change de devises","price-tag|Prix","ledger|Grand livre / journal","history|Historique des transactions|sa-kurulen","escrow|Séquestre|bantoron","secure-payment|Paiement sécurisé|bantoron","pin-code|Code PIN","otp|Code à usage unique (SMS)","chart-bar|Graphique en barres","chart-line|Courbe","chart-pie|Camembert|koli-so","budget|Budget",
], note="Logos d'opérateurs (Orange Money, MTN MoMo, Wave, Moov Money, Free Money, Airtel Money, M-Pesa, Visa, Mastercard, GIM-UEMOA) : marques déposées, à ranger dans brands/ et à utiliser sans modification, avec l'accord ou la charte de chaque opérateur.")
cat("commerce","Commerce et marché","P2","bara-feere",[
"shop|Boutique","market-stall|Étal de marché","cart|Panier","cart-add|Ajouter au panier","bag|Sac de courses","basket|Panier tressé","package|Colis","delivery|Livraison|sasira","delivery-moto|Livraison à moto|sasira","order|Commande","orders|Commandes","stock|Stock","warehouse|Entrepôt","scale|Balance du marchand|dantigimari","bargain|Marchandage (mains)","catalog|Catalogue","product|Produit","category|Catégorie|dankalan-ko","tag|Étiquette","store-front|Devanture","kiosk|Kiosque / cabine","boutique-phone|Kiosque de recharge téléphonique","fabric|Tissu / pagne","sewing|Couture","tailor|Tailleur","hairdresser|Coiffure / tresses","handshake|Accord conclu|turusina","customer|Client","seller|Vendeur","review|Avis client|bara-feere","return|Retour produit|sa-kurulen",
])
cat("quotidien","Vie quotidienne et maison","P2","points",[
"house|Maison","hut|Case ronde","compound|Concession / cour familiale|koli-so","door|Porte","key|Clé","bed|Lit","mat|Natte","chair|Chaise","stool|Tabouret","table|Table","lamp|Lampe","lantern|Lampe-tempête","candle|Bougie","bulb|Ampoule","fan|Ventilateur","ac|Climatiseur","tv|Télévision","radio|Poste de radio|kaana-nonkon","fridge|Réfrigérateur","stove|Réchaud à gaz","charcoal-stove|Fourneau à charbon","gas-bottle|Bouteille de gaz","water-tap|Robinet","water-drop|Goutte d'eau","jerrycan|Bidon d'eau","bucket|Seau","kettle|Bouilloire (bouilloire à ablutions)","broom|Balai","laundry|Lessive","iron|Fer à repasser","soap|Savon","shower|Douche","toilet|Toilettes","mosquito-net|Moustiquaire","generator|Groupe électrogène","solar-panel|Panneau solaire","battery|Batterie","battery-low|Batterie faible|bantoron","plug|Prise","power-cut|Coupure de courant|juru-sarabali","electricity|Électricité|kaana-nonkon","trash-bin|Poubelle","umbrella|Parapluie","glasses|Lunettes","watch|Montre","clothes|Vêtements","boubou|Boubou","shoes|Chaussures","sandals|Sandales","hat|Chapeau / bonnet","headwrap|Foulard / attaché","jewelry|Bijoux","mirror|Miroir","comb|Peigne","baby|Bébé","pet|Animal de compagnie",
])
cat("cuisine","Nourriture et cuisine","P2","turusina",[
"food|Repas","plate|Assiette","bowl|Bol","calabash|Calebasse","mortar-pestle|Mortier et pilon|turusina","pot|Marmite","canari|Canari (jarre à eau)","grill|Grillade / dibiterie","brochette|Brochettes","fish|Poisson","fish-grilled|Poisson braisé","chicken|Poulet","meat|Viande","rice|Riz","millet|Mil","maize|Maïs","cassava|Manioc","yam|Igname","plantain|Banane plantain","attieke|Attiéké","peanut|Arachide","shea|Karité","baobab-fruit|Pain de singe (baobab)","mango|Mangue","orange|Orange","coconut|Noix de coco","pepper|Piment","onion|Oignon","tomato|Tomate","bread|Pain / baguette","tea|Thé à la menthe (ataya)","teapot|Théière","coffee|Café","bissap|Bissap / jus","water-sachet|Sachet d'eau","bottle|Bouteille","soda|Boisson","milk|Lait","egg|Œuf","restaurant|Restaurant / maquis","cutlery|Couverts","cook|Cuisinier",
])
cat("transport","Transport et mobilité","P2","sasira",[
"car|Voiture","taxi|Taxi","moto|Moto","moto-taxi|Moto-taxi (zémidjan, djakarta, oléyia)","tricycle|Tricycle","bus|Bus","minibus|Minibus (gbaka, sotrama, car rapide)","bush-taxi|Taxi-brousse","truck|Camion","bicycle|Vélo","walk|À pied","pirogue|Pirogue","boat|Bateau","ferry|Bac","train|Train","plane|Avion","fuel|Carburant","fuel-bottle|Essence en bouteille (bord de route)","parking|Stationnement","road|Route","dirt-road|Piste|sasira","traffic-light|Feu tricolore","roundabout|Rond-point|koli-so","checkpoint|Barrage / contrôle|bantoron","ticket|Billet","luggage|Bagages","map-route|Trajet|sasira","gps|Position GPS|koli-so","ride|Course","driver|Chauffeur","helmet|Casque",
])
cat("lieux","Lieux, carte et localisation","P2","sasira",[
"map|Carte","map-pin|Repère|koli-so","location|Ma position|koli-so","navigation|Navigation","compass|Boussole","globe|Monde","africa|Afrique","country|Pays","city|Ville","village|Village","neighborhood|Quartier","market|Marché","mosque|Mosquée en banco","church|Église","school|École","hospital|Hôpital","pharmacy|Pharmacie","bank-building|Agence bancaire","post-office|Poste","police|Police","town-hall|Mairie","court|Tribunal|dantigimari","stadium|Stade","office|Bureau","factory|Usine","hotel|Hôtel","granary|Grenier","well|Puits","river|Fleuve","bridge|Pont","beach|Plage","mountain|Falaise / montagne","desert|Désert / dune","home-address|Adresse",
])
cat("communication","Communication et appareils","P1","kaana-nonkon",[
"phone|Téléphone","phone-call|Appel","phone-incoming|Appel entrant","phone-outgoing|Appel sortant","phone-missed|Appel manqué|juru-sarabali","video-call|Appel vidéo","smartphone|Smartphone","feature-phone|Téléphone à touches","sms|SMS","ussd|Code USSD (*144#)","mail|Courriel","inbox|Boîte de réception","notification|Notification|donkonkolo","bell|Cloche|donkonkolo","bell-off|Notifications coupées","contact|Contact","contacts|Répertoire","sim|Carte SIM","airtime|Crédit téléphonique / recharge","data|Forfait internet|kaana-nonkon","wifi|Wi-Fi|kaana-nonkon","signal|Réseau mobile|kaana-nonkon","no-signal|Pas de réseau","bluetooth|Bluetooth","nfc|NFC","antenna|Antenne relais|kaana-nonkon","laptop|Ordinateur portable","desktop|Ordinateur","tablet|Tablette","printer|Imprimante","camera|Appareil photo","microphone|Microphone","headphones|Écouteurs","speaker|Haut-parleur|donkonkolo","charger|Chargeur","power-bank|Batterie externe","usb|USB","cloud|Nuage","cloud-upload|Envoyer vers le nuage","cloud-off|Nuage indisponible","server|Serveur","database|Base de données","code|Code","terminal|Terminal","api|API","bug|Bogue","robot|Robot / IA","sparkles-ai|Assistant IA|bara-feere","qr-pay|Paiement par QR",
])
cat("medias","Médias et fichiers","P1","points",[
"image|Image","gallery|Galerie","photo-add|Ajouter une photo","screenshot|Capture d'écran|bantoron","video|Vidéo","film|Film","music|Musique","audio|Audio|kaana-nonkon","podcast|Podcast","file|Fichier","file-text|Document","file-pdf|PDF","file-image|Fichier image","file-audio|Fichier audio","file-video|Fichier vidéo","file-zip|Archive","file-spreadsheet|Tableur","folder|Dossier","folder-open|Dossier ouvert","clipboard|Presse-papiers","note|Note","book|Livre","newspaper|Journal","proof|Preuve de publication|bantoron","watermark|Filigrane","text|Texte","font|Police","bold|Gras","italic|Italique","align-left|Aligner à gauche","list-bullet|Liste à puces|sogosen","list-number|Liste numérotée",
])
cat("temps","Temps et calendrier","P1","croisillon",[
"calendar|Calendrier","calendar-check|Date confirmée","calendar-add|Ajouter un événement","event|Événement","clock-alt|Horloge","timer|Minuteur|koli-so","countdown|Compte à rebours (anneau)|koli-so","alarm|Réveil|donkonkolo","stopwatch|Chronomètre","history-time|Historique|sa-kurulen","schedule|Planifier","day|Jour|koli-so","night|Nuit","sunrise|Lever du soleil","sunset|Coucher du soleil","week|Semaine","month|Mois","deadline|Échéance|bantoron",
])
cat("personnes","Personnes, comptes et famille","P1","koli-so",[
"user|Utilisateur","users|Utilisateurs|turusina","user-add|Ajouter un utilisateur","user-remove|Retirer un utilisateur","user-check|Utilisateur vérifié","user-circle|Avatar","profile|Profil","id-card|Pièce d'identité","selfie|Selfie de vérification","family|Famille|koli-so","couple|Couple","child|Enfant","elder|Ancien / sage","woman|Femme","man|Homme","group|Groupe|turusina","team|Équipe|turusina","admin|Administrateur|bantoron","moderator|Modérateur|dantigimari","advertiser|Annonceur|donkonkolo","publisher|Diffuseur|kaana-nonkon","agent|Agent / conseiller","support|Assistance|dantigimari","wave-hand|Salutation","griot|Griot / conteur|donkonkolo","chief|Chef de village","accessibility|Accessibilité","wheelchair|Fauteuil roulant",
])
cat("securite","Sécurité et confiance","P1","bantoron",[
"shield|Bouclier","shield-alert|Menace","lock-closed|Cadenas fermé","lock-open|Cadenas ouvert","key-alt|Clé d'accès","password|Mot de passe","fingerprint|Empreinte digitale","face-id|Reconnaissance faciale","two-factor|Double authentification","kyc|Vérification d'identité (KYC)","fraud|Fraude|juru-sarabali","spam|Indésirable","privacy|Confidentialité","eye-watch|Surveillance","legal|Mentions légales|dantigimari","terms|Conditions","contract|Contrat","signature|Signature","stamp|Cachet / tampon","dispute|Litige|dantigimari","gavel|Décision / arbitrage|dantigimari",
])
cat("administration","Administration et documents officiels","P3","croisillon",[
"passport|Passeport","birth-certificate|Acte de naissance","certificate|Certificat / diplôme","residence|Certificat de résidence","tax|Impôts","business-reg|Registre du commerce (RCCM)","nif|Numéro fiscal","vote|Vote","ballot-box|Urne","law|Loi","government|Gouvernement","form|Formulaire","queue|File d'attente|sogosen","appointment|Rendez-vous",
])
cat("sante","Santé","P3","bantoron",[
"health|Santé","heart-pulse|Pouls","stethoscope|Stéthoscope","doctor|Médecin","nurse|Infirmier·e","pill|Médicament","syringe|Vaccin","thermometer|Température","first-aid|Premiers secours","ambulance|Ambulance","mosquito|Moustique / paludisme","pregnancy|Grossesse","baby-care|Santé de l'enfant","traditional-medicine|Plantes médicinales","hand-wash|Lavage des mains","face-mask|Masque sanitaire","blood|Don de sang","tooth|Dentiste","eye-care|Ophtalmologie","mental-health|Santé mentale","insurance|Assurance santé / mutuelle|turusina",
])
cat("education","Éducation et savoir","P3","croisillon",[
"education|Éducation","graduation|Diplômé","book-open|Livre ouvert","notebook|Cahier","pen|Stylo","slate|Ardoise","chalkboard|Tableau noir","backpack|Cartable","teacher|Enseignant","student|Élève","quran-school|École coranique / tablette","library|Bibliothèque","exam|Examen","certificate-edu|Attestation","lightbulb|Idée","alphabet|Alphabétisation (N'Ko, ajami, latin)","quiz|Quiz","course|Formation en ligne",
])
cat("travail","Travail, métiers et artisanat","P3","turusina",[
"briefcase|Mallette / emploi","job|Offre d'emploi","tools|Outils","hammer|Marteau","wrench|Clé à molette","mechanic|Mécanicien","welder|Soudeur","mason|Maçon","carpenter|Menuisier","blacksmith|Forgeron","potter|Potière","weaver|Tisserand / métier à tisser","dyer|Teinturière (bogolan, indigo)","calame|Calame (outil du bogolan)","basket-weaver|Vannerie","jeweler|Bijoutier","farmer-job|Agriculteur","fisher|Pêcheur","herder|Éleveur","driver-job|Chauffeur","vendor|Vendeuse ambulante","domestic|Employé·e de maison","security-guard|Gardien","freelance|Indépendant","meeting|Réunion|koli-so","presentation|Présentation","target|Objectif|koli-so","rocket|Lancement","trophy|Trophée|bara-feere","medal|Médaille",
])
cat("agriculture","Agriculture, élevage et nature","P3","croisillon",[
"field|Champ|croisillon","seed|Semence","sprout|Pousse","hoe|Daba (houe)","machete|Machette","tractor|Tracteur","irrigation|Irrigation","harvest|Récolte","cotton|Coton","cocoa|Cacao","coffee-plant|Caféier","cashew|Anacarde","sesame|Sésame","sorghum|Sorgho","onion-field|Maraîchage","cow|Vache / zébu","goat|Chèvre|bantoron","sheep|Mouton","chicken-farm|Poule","donkey|Âne","camel|Dromadaire","horse|Cheval","fishnet|Filet de pêche","bee|Abeille / miel","baobab|Baobab","palm|Palmier","tree|Arbre","leaf|Feuille","flower|Fleur|bara-feere","calabash-plant|Calebassier|bara-feere","crocodile|Crocodile|dantigimari","snake|Serpent|sasira","chameleon|Caméléon","bird|Oiseau|konosen","lizard|Margouillat","lion|Lion","elephant|Éléphant","recycle|Recyclage|sa-kurulen","eco|Écologie",
])
cat("meteo","Météo et environnement","P3","points",[
"sun|Soleil|koli-so","moon|Lune","cloud-sun|Éclaircies","rain|Pluie","storm|Orage|kaana-nonkon","lightning|Éclair|kaana-nonkon","wind|Vent","harmattan|Harmattan (vent de poussière)","dust|Poussière / brume sèche","heat|Forte chaleur","temperature|Température","humidity|Humidité","flood|Inondation","drought|Sécheresse","rainbow|Arc-en-ciel","rainy-season|Saison des pluies","dry-season|Saison sèche",
])
cat("culture","Culture, fêtes et loisirs","P3","donkonkolo",[
"djembe|Djembé|donkonkolo","tama|Tama (tambour d'aisselle)|donkonkolo","kora|Kora","balafon|Balafon","ngoni|N'goni","flute|Flûte peule","dance|Danse","ritual-mask|Masque traditionnel","statue|Statuette","mudcloth|Tissu bogolan","kente-strip|Bande tissée","cowrie|Cauri|bara-feere","calabash-deco|Calebasse décorée","griot-alt|Récit / conte","wedding|Mariage|koli-so","baptism|Baptême","funeral|Deuil","tabaski|Tabaski (mouton)","ramadan|Ramadan (croissant)","korite|Korité / fin du jeûne","christmas|Noël","new-year|Nouvel an","independence|Fête de l'indépendance","party|Fête","gift|Cadeau|bara-feere","cake|Gâteau","photo-booth|Photo souvenir","cinema|Cinéma","theatre|Théâtre","festival|Festival","prayer|Prière","prayer-mat|Tapis de prière","rosary|Chapelet","awale|Awalé (jeu)","cards|Jeu de cartes","game|Jeu vidéo","dice|Dés",
])
cat("sport","Sport","P3","koli-so",[
"football|Football","ball|Ballon","goal|But","basketball|Basketball","running|Course","wrestling|Lutte traditionnelle","boxing|Boxe","cycling|Cyclisme","swimming|Natation","gym|Musculation","whistle|Sifflet","jersey|Maillot","tournament|Tournoi|dankalan-ko","podium|Podium",
])
cat("emotions","Émotions et réactions","P2","koli-so",[
"smile|Sourire","laugh|Rire","love|Amour","sad|Triste","angry|En colère","surprised|Surpris","thinking|Réflexion","thumbs-up|Pouce levé","thumbs-down|Pouce baissé","clap|Applaudir","pray-hands|Merci / prière","celebrate|Bravo","ok-hand|D'accord","hundred|100 %","eyes|Regard",
])
cat("vupay","Spécifiques Vupay","P1","koli-so",[
"vupay-ring|Anneau de statut Vupay (signature)|koli-so","proof-upload|Envoyer une preuve|bantoron","proof-pending|Preuve en vérification|sogosen","proof-approved|Preuve validée|bara-feere","proof-rejected|Preuve refusée|juru-sarabali","campaign-create|Créer une campagne|donkonkolo","campaign-live|Campagne active|donkonkolo","campaign-ended|Campagne terminée","diffuseur|Espace diffuseur|kaana-nonkon","annonceur|Espace annonceur|donkonkolo","audience-size|Taille d'audience|turusina","views-24h|Vues sur 24 h|koli-so","gains-fcfa|Gains en FCFA|bara-feere","withdraw-mm|Retrait mobile money","moderation|Modération|dantigimari","identity-check|Vérification d'identité|bantoron","journal|Journal d'audit (ledger)|croisillon",
])


# Extension à 1000 icônes (18/11/2026)
_ns={}; exec(open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'ajout1000.py')).read(),_ns)
for _cid,(_t,_p,_m,_items) in _ns['NOUVEAUX'].items(): cat(_cid,_t,_p,_m,_items)

# Les 109 icônes déjà dessinées de la « Collection Bogolan » (dépôt Tchi-TELIMAN, design/icons/bogolan/)
COLLECTION = {
 'principale':['moto-taxi','voiture','livraison','accueil','destination','assistance','compte','paiement','securite'],
 'actions':['accepter','annuler','demarrer','terminer','partager-trajet','ajouter-etape','favoris','recu','signaler','photo-vehicule','hors-ligne','en-ligne'],
 'utilitaires':['rechercher','me-localiser','langue','ecouter','ajouter-photo','importer-document','reprendre-photo','agrandir','actualiser','informations','verrouiller','deconnexion'],
 'confiance':['client','chauffeur','selfie','telephone','code-sms','e-mail','confidentialite','conditions','contact-urgence','objet-oublie','guide-audio','tutoriel'],
 'statuts':['recherche-chauffeur','chauffeur-trouve','chauffeur-en-route','chauffeur-arrive','client-attendu','course-en-cours','validation-en-cours','document-valide','document-a-corriger','operation-reussie','erreur','connexion-perdue'],
 'commandes':['modifier','enregistrer','supprimer','telecharger','filtrer','trier','retour','suivant','fermer','menu','afficher','masquer'],
 'lieux':['domicile','travail','marche','aeroport','gare-routiere','hopital','ecole','hotel','restaurant','station-service','pont','point-de-rencontre'],
 'trajets':['depart','arrivee','distance','duree-trajet','passagers','bagages','casque','ceinture','accessibilite','especes','monnaie','aller-retour'],
 'suite':['apparence','navigation','temps-attente','parametres','appel','messages','message-vocal','notifications','identite','permis-conduire','assurance','carte-grise','historique','avis','course-planifiee','sos'],
}
# Correspondance : icône du catalogue -> icône déjà dessinée (on ne la redessine pas)
EXISTE = {
 'moto-taxi':'moto-taxi','car':'voiture','delivery':'livraison','home':'accueil','map-pin':'destination','support':'assistance',
 'profile':'compte','card':'paiement','shield-check':'securite','check':'accepter','x-circle':'annuler','play':'demarrer',
 'share':'partager-trajet','star':'favoris','receipt':'recu','report':'signaler','offline':'hors-ligne','online':'en-ligne',
 'search':'rechercher','location':'me-localiser','language':'langue','volume':'ecouter','photo-add':'ajouter-photo',
 'upload':'importer-document','zoom-in':'agrandir','refresh':'actualiser','info':'informations','lock':'verrouiller',
 'logout':'deconnexion','customer':'client','driver':'chauffeur','selfie':'selfie','phone':'telephone','otp':'code-sms',
 'mail':'e-mail','privacy':'confidentialite','terms':'conditions','check-circle':'operation-reussie','alert-circle':'erreur',
 'wifi-off':'connexion-perdue','verified':'document-valide','edit':'modifier','save':'enregistrer','delete':'supprimer',
 'download':'telecharger','filter':'filtrer','sort':'trier','back':'retour','forward':'suivant','close':'fermer','menu':'menu',
 'eye':'afficher','eye-off':'masquer','house':'domicile','office':'travail','market':'marche','plane':'aeroport',
 'bush-taxi':'gare-routiere','hospital':'hopital','school':'ecole','hotel':'hotel','restaurant':'restaurant',
 'fuel':'station-service','bridge':'pont','luggage':'bagages','helmet':'casque','accessibility':'accessibilite',
 'cash':'especes','coins':'monnaie','navigation':'navigation','hourglass':'temps-attente','settings':'parametres',
 'phone-call':'appel','chat':'messages','voice-note':'message-vocal','notification':'notifications','id-card':'identite',
 'insurance':'assurance','history':'historique','review':'avis','schedule':'course-planifiee','map-route':'distance','timer':'duree-trajet',
}
for c in C:
    for i in c['icones']:
        i['existe'] = EXISTE.get(i['slug'])
data = dict(nom="Bogolan Icons — catalogue", version="0.1.0", grille="24x24", trait="1.75 à 2 px, extrémités arrondies",
  collection_existante=COLLECTION, motifs=[dict(id=k, nom=v[0], sens=v[1], usages=v[2]) for k,v in MOTIFS.items()], categories=C)
os.makedirs(out, exist_ok=True)
json.dump(data, open(f"{out}/icones.json","w"), ensure_ascii=False, indent=1)
n = sum(len(c["icones"]) for c in C)
nx = sum(1 for c in C for i in c["icones"] if i["existe"]); nc = sum(len(v) for v in COLLECTION.values())
md = []
md.append(f"# Catalogue des icônes Bogolan complémentaires\n\nCe catalogue complète la **Collection Bogolan** déjà dessinée ({nc} icônes 3D, dépôt Tchi-TELIMAN, `design/icons/bogolan/`).\n\n**{n} icônes** en **{len(C)} catégories** : **{n-nx} à créer** et {nx} qui existent déjà dans la collection (marquées ✅, à ne pas redessiner). Plus **{len(MOTIFS)} motifs** traditionnels qui servent de briques graphiques.\n")
md.append("Version machine : [`icones.json`](icones.json) (même contenu, pour générer les dossiers, un sprite SVG ou des composants React).\n")
md.append("Priorités : **P1** = indispensable dans presque toute app ; **P2** = fréquent ; **P3** = selon le projet.\n")
md.append("## Sommaire\n")
for c in C: md.append(f"- [{c['titre']}](#{c['id']}) — {len(c['icones'])} icônes, {c['priorite']}")
md.append("\n## Les 109 icônes déjà dessinées (Collection Bogolan)\n")
for k,v in COLLECTION.items(): md.append(f"- **{k}** : " + ", ".join(v))
md.append("\n## Motifs traditionnels → usages en icône\n")
md.append("Motifs relevés sur les bogolanfini bamanan (Mali). Chaque icône du catalogue indique le motif à réutiliser.\n")
md.append("| Id | Motif | Sens traditionnel | Usages proposés |\n|---|---|---|---|")
for k,v in MOTIFS.items(): md.append(f"| `{k}` | {v[0]} | {v[1]} | {v[2]} |")
for c in C:
    md.append(f"\n<a id=\"{c['id']}\"></a>\n## {c['titre']} ({len(c['icones'])}, {c['priorite']})\n")
    if c["motif_defaut"]: md.append(f"Motif par défaut : `{c['motif_defaut']}` (sauf indication contraire).\n")
    if c["note"]: md.append(f"> ⚠️ {c['note']}\n")
    md.append("| Fichier | Icône | Motif | Collection Bogolan |\n|---|---|---|---|")
    for i in c["icones"]:
        ex = f"✅ existe : `{i['existe']}`" if i["existe"] else "à créer"
        md.append(f"| `{i['slug']}` | {i['nom']} | {('`'+i['motif']+'`') if i['motif'] else ''} | {ex} |")
open(f"{out}/CATALOGUE.md","w").write("\n".join(md)+"\n")
print(n, len(C))
