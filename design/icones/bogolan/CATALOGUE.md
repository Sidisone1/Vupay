# Catalogue des icônes Bogolan

**846 icônes** réparties en **26 catégories**, plus **16 motifs** traditionnels qui servent de briques graphiques.

Version machine : [`icones.json`](icones.json) (même contenu, pour générer les dossiers, un sprite SVG ou des composants React).

Priorités : **P1** = indispensable dans presque toute app ; **P2** = fréquent ; **P3** = selon le projet.

## Sommaire

- [Navigation et interface](#navigation) — 62 icônes, P1
- [Actions](#actions) — 59 icônes, P1
- [Statuts et retours](#statuts) — 30 icônes, P1
- [Actions sociales génériques (sans marque)](#social-generique) — 40 icônes, P1
- [Réseaux sociaux et plateformes (marques)](#reseaux) — 41 icônes, P2
- [Paiement, argent et mobile money](#paiement) — 50 icônes, P1
- [Commerce et marché](#commerce) — 31 icônes, P2
- [Vie quotidienne et maison](#quotidien) — 56 icônes, P2
- [Nourriture et cuisine](#cuisine) — 42 icônes, P2
- [Transport et mobilité](#transport) — 31 icônes, P2
- [Lieux, carte et localisation](#lieux) — 34 icônes, P2
- [Communication et appareils](#communication) — 49 icônes, P1
- [Médias et fichiers](#medias) — 32 icônes, P1
- [Temps et calendrier](#temps) — 18 icônes, P1
- [Personnes, comptes et famille](#personnes) — 28 icônes, P1
- [Sécurité et confiance](#securite) — 21 icônes, P1
- [Administration et documents officiels](#administration) — 14 icônes, P3
- [Santé](#sante) — 21 icônes, P3
- [Éducation et savoir](#education) — 18 icônes, P3
- [Travail, métiers et artisanat](#travail) — 30 icônes, P3
- [Agriculture, élevage et nature](#agriculture) — 39 icônes, P3
- [Météo et environnement](#meteo) — 17 icônes, P3
- [Culture, fêtes et loisirs](#culture) — 37 icônes, P3
- [Sport](#sport) — 14 icônes, P3
- [Émotions et réactions](#emotions) — 15 icônes, P2
- [Spécifiques Vupay](#vupay) — 17 icônes, P1

## Motifs traditionnels → usages en icône

Motifs relevés sur les bogolanfini bamanan (Mali). Chaque icône du catalogue indique le motif à réutiliser.

| Id | Motif | Sens traditionnel | Usages proposés |
|---|---|---|---|
| `koli-so` | Cercle pointé | Unité, famille, communauté autour d'un centre | profil, groupe, cible, enregistrement, point central |
| `bantoron` | Sabot de chèvre (triangles) | Avertissement et protection | alerte, sécurité, bouclier, attention |
| `kaana-nonkon` | Coude de l'iguane (double zigzag) | Protection contre le mal | signal, réseau, onde, son, électricité |
| `donkonkolo` | Tambour | Appel, courage | notification, cloche, haut-parleur, annonce |
| `bara-feere` | Fleur de calebasse | Prospérité | argent, gains, bonus, favoris, succès |
| `turusina` | Pilon des coépouses | Coopération, partage des tâches | collaboration, équipe, partage, tontine |
| `dantigimari` | Trace du crocodile | Maître des conflits : équilibre, paix | support, médiation, litige, équilibre, balance |
| `sasira` | Chemin du serpent (ondulation) | Parcours, route | itinéraire, carte, parcours, suivi, livraison |
| `sa-kurulen` | Serpent enroulé (spirale) | Cycle, retour | actualiser, synchroniser, chargement, historique |
| `konosen` | Empreinte d'oiseau (chevron à 3 doigts) | Passage, message | envoyer, partager, publier, flèches |
| `sungurun-sen` | Chevron simple | Jeunesse, passage | chevrons de navigation, déplier, suivant |
| `juru-sarabali` | Chemin du mauvais payeur (ligne brisée) | Dette non payée | impayé, retard, échec de paiement |
| `dankalan-ko` | Dos du python (losanges) | Force | grille, catégories, tableau de bord |
| `sogosen` | Traces de gibier (points en ligne) | Piste, présence | pointillés, étapes, progression, plus d'options |
| `points` | Semis de points | Remplissage traditionnel | texture de fond, états vides, décor |
| `croisillon` | Croisillons / quadrillage | Champ cultivé, ordre | calendrier, tableau, filtres |

<a id="navigation"></a>
## Navigation et interface (62, P1)

Motif par défaut : `sungurun-sen` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `home.svg` | Accueil |  |
| `menu.svg` | Menu (hamburger) |  |
| `close.svg` | Fermer |  |
| `back.svg` | Retour |  |
| `forward.svg` | Suivant |  |
| `chevron-up.svg` | Chevron haut |  |
| `chevron-down.svg` | Chevron bas |  |
| `chevron-left.svg` | Chevron gauche |  |
| `chevron-right.svg` | Chevron droite |  |
| `arrow-up.svg` | Flèche haut | `konosen` |
| `arrow-down.svg` | Flèche bas | `konosen` |
| `arrow-left.svg` | Flèche gauche | `konosen` |
| `arrow-right.svg` | Flèche droite | `konosen` |
| `arrow-up-right.svg` | Lien sortant | `konosen` |
| `external-link.svg` | Ouvrir à l'extérieur |  |
| `more-horizontal.svg` | Plus d'options (horizontal) | `sogosen` |
| `more-vertical.svg` | Plus d'options (vertical) | `sogosen` |
| `search.svg` | Rechercher | `koli-so` |
| `filter.svg` | Filtrer | `croisillon` |
| `sort.svg` | Trier |  |
| `sort-asc.svg` | Tri croissant |  |
| `sort-desc.svg` | Tri décroissant |  |
| `grid.svg` | Vue grille | `dankalan-ko` |
| `list.svg` | Vue liste |  |
| `dashboard.svg` | Tableau de bord | `dankalan-ko` |
| `sidebar.svg` | Panneau latéral |  |
| `expand.svg` | Agrandir |  |
| `collapse.svg` | Réduire |  |
| `fullscreen.svg` | Plein écran |  |
| `exit-fullscreen.svg` | Quitter le plein écran |  |
| `maximize.svg` | Maximiser |  |
| `minimize.svg` | Minimiser |  |
| `settings.svg` | Paramètres |  |
| `sliders.svg` | Réglages |  |
| `tune.svg` | Ajuster |  |
| `apps.svg` | Applications | `dankalan-ko` |
| `layers.svg` | Calques |  |
| `tabs.svg` | Onglets |  |
| `drag-handle.svg` | Poignée de glisser | `points` |
| `pin.svg` | Épingler |  |
| `unpin.svg` | Désépingler |  |
| `bookmark.svg` | Signet |  |
| `bookmark-filled.svg` | Signet actif |  |
| `help.svg` | Aide |  |
| `info.svg` | Information | `koli-so` |
| `language.svg` | Langue |  |
| `translate.svg` | Traduire |  |
| `zoom-in.svg` | Zoom avant |  |
| `zoom-out.svg` | Zoom arrière |  |
| `refresh.svg` | Actualiser | `sa-kurulen` |
| `loader.svg` | Chargement | `sa-kurulen` |
| `first-page.svg` | Première page |  |
| `last-page.svg` | Dernière page |  |
| `scroll-top.svg` | Remonter en haut |  |
| `breadcrumb.svg` | Fil d'Ariane | `sogosen` |
| `command.svg` | Commande / raccourci |  |
| `keyboard.svg` | Clavier |  |
| `toggle-on.svg` | Interrupteur activé |  |
| `toggle-off.svg` | Interrupteur désactivé |  |
| `radio-button.svg` | Bouton radio | `koli-so` |
| `checkbox.svg` | Case à cocher |  |
| `checkbox-checked.svg` | Case cochée |  |

<a id="actions"></a>
## Actions (59, P1)

Motif par défaut : `konosen` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `add.svg` | Ajouter |  |
| `add-circle.svg` | Ajouter (cercle) | `koli-so` |
| `remove.svg` | Retirer |  |
| `edit.svg` | Modifier |  |
| `pencil.svg` | Crayon (calame) |  |
| `delete.svg` | Supprimer |  |
| `trash.svg` | Corbeille |  |
| `archive.svg` | Archiver |  |
| `unarchive.svg` | Désarchiver |  |
| `save.svg` | Enregistrer |  |
| `copy.svg` | Copier |  |
| `paste.svg` | Coller |  |
| `cut.svg` | Couper |  |
| `duplicate.svg` | Dupliquer |  |
| `undo.svg` | Annuler | `sa-kurulen` |
| `redo.svg` | Rétablir | `sa-kurulen` |
| `download.svg` | Télécharger |  |
| `upload.svg` | Téléverser |  |
| `import.svg` | Importer |  |
| `export.svg` | Exporter |  |
| `share.svg` | Partager | `konosen` |
| `send.svg` | Envoyer | `konosen` |
| `print.svg` | Imprimer |  |
| `scan.svg` | Scanner |  |
| `qr-code.svg` | QR code | `croisillon` |
| `qr-scan.svg` | Scanner un QR code |  |
| `barcode.svg` | Code-barres |  |
| `link.svg` | Lien |  |
| `unlink.svg` | Supprimer le lien |  |
| `attach.svg` | Joindre un fichier |  |
| `lock.svg` | Verrouiller |  |
| `unlock.svg` | Déverrouiller |  |
| `eye.svg` | Afficher |  |
| `eye-off.svg` | Masquer |  |
| `login.svg` | Se connecter |  |
| `logout.svg` | Se déconnecter |  |
| `sync.svg` | Synchroniser | `sa-kurulen` |
| `reply.svg` | Répondre |  |
| `reply-all.svg` | Répondre à tous |  |
| `forward-msg.svg` | Transférer |  |
| `flag.svg` | Signaler |  |
| `report.svg` | Signaler un abus | `bantoron` |
| `block.svg` | Bloquer |  |
| `mute.svg` | Couper le son |  |
| `unmute.svg` | Rétablir le son |  |
| `play.svg` | Lecture |  |
| `pause.svg` | Pause |  |
| `stop.svg` | Arrêt |  |
| `record.svg` | Enregistrer (rec) | `koli-so` |
| `skip-next.svg` | Suivant |  |
| `skip-previous.svg` | Précédent |  |
| `shuffle.svg` | Aléatoire |  |
| `repeat.svg` | Répéter | `sa-kurulen` |
| `volume.svg` | Volume | `kaana-nonkon` |
| `rotate.svg` | Pivoter |  |
| `crop.svg` | Recadrer |  |
| `magic.svg` | Retouche automatique |  |
| `select-all.svg` | Tout sélectionner |  |
| `drag.svg` | Glisser-déposer |  |

<a id="statuts"></a>
## Statuts et retours (30, P1)

Motif par défaut : `bantoron` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `check.svg` | Validé |  |
| `check-circle.svg` | Succès | `koli-so` |
| `check-double.svg` | Lu / double coche |  |
| `x-circle.svg` | Erreur |  |
| `alert-triangle.svg` | Attention | `bantoron` |
| `alert-circle.svg` | Alerte | `bantoron` |
| `info-circle.svg` | Info | `koli-so` |
| `help-circle.svg` | Question |  |
| `clock.svg` | En attente |  |
| `hourglass.svg` | Sablier / délai |  |
| `pending.svg` | En cours | `sogosen` |
| `verified.svg` | Vérifié / certifié | `bara-feere` |
| `badge.svg` | Badge |  |
| `shield-check.svg` | Protégé | `bantoron` |
| `ban.svg` | Interdit |  |
| `new.svg` | Nouveau |  |
| `star.svg` | Favori | `bara-feere` |
| `star-filled.svg` | Favori actif | `bara-feere` |
| `heart.svg` | J'aime |  |
| `heart-filled.svg` | J'aime actif |  |
| `sparkle.svg` | Mise en avant | `bara-feere` |
| `fire.svg` | Tendance |  |
| `trending-up.svg` | Hausse |  |
| `trending-down.svg` | Baisse |  |
| `offline.svg` | Hors ligne |  |
| `online.svg` | En ligne | `koli-so` |
| `wifi-off.svg` | Pas de connexion |  |
| `empty.svg` | État vide | `points` |
| `construction.svg` | En travaux |  |
| `maintenance.svg` | Maintenance |  |

<a id="social-generique"></a>
## Actions sociales génériques (sans marque) (40, P1)

Motif par défaut : `konosen` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `like.svg` | J'aime |  |
| `dislike.svg` | Je n'aime pas |  |
| `comment.svg` | Commentaire |  |
| `comments.svg` | Discussion |  |
| `chat.svg` | Messagerie |  |
| `chat-bubble.svg` | Bulle de message |  |
| `chat-group.svg` | Groupe de discussion | `turusina` |
| `mention.svg` | Mention (@) |  |
| `hashtag.svg` | Hashtag (#) | `croisillon` |
| `story.svg` | Story / statut (anneau 24 h) | `koli-so` |
| `status-ring.svg` | Anneau de statut qui se vide | `koli-so` |
| `reel.svg` | Vidéo courte |  |
| `live.svg` | Direct | `donkonkolo` |
| `follow.svg` | Suivre |  |
| `unfollow.svg` | Ne plus suivre |  |
| `followers.svg` | Abonnés | `turusina` |
| `subscribe.svg` | S'abonner | `donkonkolo` |
| `repost.svg` | Republier | `sa-kurulen` |
| `quote.svg` | Citer |  |
| `views.svg` | Vues |  |
| `reach.svg` | Portée | `kaana-nonkon` |
| `engagement.svg` | Engagement | `bara-feere` |
| `audience.svg` | Audience | `turusina` |
| `influencer.svg` | Influenceur / diffuseur | `koli-so` |
| `campaign.svg` | Campagne | `donkonkolo` |
| `megaphone.svg` | Mégaphone / annonce | `donkonkolo` |
| `broadcast.svg` | Diffusion | `kaana-nonkon` |
| `post.svg` | Publication |  |
| `feed.svg` | Fil d'actualité |  |
| `poll.svg` | Sondage |  |
| `emoji.svg` | Émoji |  |
| `sticker.svg` | Autocollant |  |
| `gif.svg` | GIF |  |
| `voice-note.svg` | Note vocale | `kaana-nonkon` |
| `read-receipt.svg` | Accusé de lecture |  |
| `typing.svg` | En train d'écrire | `sogosen` |
| `community.svg` | Communauté | `koli-so` |
| `invite.svg` | Inviter | `konosen` |
| `referral.svg` | Parrainage | `turusina` |
| `leaderboard.svg` | Classement |  |

<a id="reseaux"></a>
## Réseaux sociaux et plateformes (marques) (41, P2)

> ⚠️ Ces logos sont des marques déposées : on les utilise tels quels (fichiers officiels ou Simple Icons, CC0), sans les « bogolaniser » ni les recolorer, et seulement pour désigner le service (bouton « Se connecter avec », « Partager sur »). Dans le dépôt, les ranger à part dans brands/ avec la source de chaque fichier. Pour Vupay, le cahier des charges interdit tout logo de réseau dans l'identité : préférer les pictos génériques ci-dessus (bulle, anneau de story, appareil photo).

| Fichier | Icône | Motif |
|---|---|---|
| `whatsapp.svg` | WhatsApp |  |
| `whatsapp-business.svg` | WhatsApp Business |  |
| `facebook.svg` | Facebook |  |
| `messenger.svg` | Messenger |  |
| `instagram.svg` | Instagram |  |
| `threads.svg` | Threads |  |
| `tiktok.svg` | TikTok |  |
| `snapchat.svg` | Snapchat |  |
| `telegram.svg` | Telegram |  |
| `x-twitter.svg` | X (Twitter) |  |
| `youtube.svg` | YouTube |  |
| `linkedin.svg` | LinkedIn |  |
| `pinterest.svg` | Pinterest |  |
| `discord.svg` | Discord |  |
| `signal-app.svg` | Signal |  |
| `wechat.svg` | WeChat |  |
| `reddit.svg` | Reddit |  |
| `twitch.svg` | Twitch |  |
| `bluesky.svg` | Bluesky |  |
| `mastodon.svg` | Mastodon |  |
| `tumblr.svg` | Tumblr |  |
| `vimeo.svg` | Vimeo |  |
| `spotify.svg` | Spotify |  |
| `apple-music.svg` | Apple Music |  |
| `deezer.svg` | Deezer |  |
| `boomplay.svg` | Boomplay |  |
| `audiomack.svg` | Audiomack |  |
| `soundcloud.svg` | SoundCloud |  |
| `google.svg` | Google |  |
| `apple.svg` | Apple |  |
| `microsoft.svg` | Microsoft |  |
| `github.svg` | GitHub |  |
| `gitlab.svg` | GitLab |  |
| `gmail.svg` | Gmail |  |
| `outlook.svg` | Outlook |  |
| `zoom.svg` | Zoom |  |
| `google-meet.svg` | Google Meet |  |
| `teams.svg` | Microsoft Teams |  |
| `play-store.svg` | Google Play |  |
| `app-store.svg` | App Store |  |
| `truecaller.svg` | Truecaller |  |

<a id="paiement"></a>
## Paiement, argent et mobile money (50, P1)

Motif par défaut : `bara-feere` (sauf indication contraire).

> ⚠️ Logos d'opérateurs (Orange Money, MTN MoMo, Wave, Moov Money, Free Money, Airtel Money, M-Pesa, Visa, Mastercard, GIM-UEMOA) : marques déposées, à ranger dans brands/ et à utiliser sans modification, avec l'accord ou la charte de chaque opérateur.

| Fichier | Icône | Motif |
|---|---|---|
| `wallet.svg` | Portefeuille |  |
| `money.svg` | Billets FCFA |  |
| `coins.svg` | Pièces |  |
| `cash.svg` | Espèces |  |
| `fcfa.svg` | Symbole FCFA |  |
| `balance.svg` | Solde |  |
| `earnings.svg` | Gains | `bara-feere` |
| `payout.svg` | Retrait |  |
| `withdraw.svg` | Retrait au guichet |  |
| `deposit.svg` | Dépôt |  |
| `transfer.svg` | Transfert |  |
| `send-money.svg` | Envoyer de l'argent | `konosen` |
| `receive-money.svg` | Recevoir de l'argent |  |
| `request-money.svg` | Demander de l'argent |  |
| `mobile-money.svg` | Mobile money (téléphone + billet) |  |
| `agent-point.svg` | Point marchand / agent | `koli-so` |
| `card.svg` | Carte bancaire |  |
| `card-contactless.svg` | Paiement sans contact | `kaana-nonkon` |
| `bank.svg` | Banque |  |
| `atm.svg` | Guichet automatique |  |
| `receipt.svg` | Reçu |  |
| `invoice.svg` | Facture |  |
| `bill.svg` | Note à payer |  |
| `unpaid.svg` | Impayé | `juru-sarabali` |
| `debt.svg` | Dette | `juru-sarabali` |
| `credit.svg` | Crédit |  |
| `loan.svg` | Prêt |  |
| `savings.svg` | Épargne (canari / tirelire) |  |
| `tontine.svg` | Tontine | `turusina` |
| `piggy-bank.svg` | Tirelire |  |
| `calculator.svg` | Calculatrice |  |
| `percent.svg` | Pourcentage / commission |  |
| `discount.svg` | Réduction |  |
| `coupon.svg` | Bon de réduction |  |
| `gift-card.svg` | Carte cadeau |  |
| `bonus.svg` | Bonus | `bara-feere` |
| `cashback.svg` | Remboursement partiel | `sa-kurulen` |
| `refund.svg` | Remboursement | `sa-kurulen` |
| `exchange.svg` | Change de devises |  |
| `price-tag.svg` | Prix |  |
| `ledger.svg` | Grand livre / journal |  |
| `history.svg` | Historique des transactions | `sa-kurulen` |
| `escrow.svg` | Séquestre | `bantoron` |
| `secure-payment.svg` | Paiement sécurisé | `bantoron` |
| `pin-code.svg` | Code PIN |  |
| `otp.svg` | Code à usage unique (SMS) |  |
| `chart-bar.svg` | Graphique en barres |  |
| `chart-line.svg` | Courbe |  |
| `chart-pie.svg` | Camembert | `koli-so` |
| `budget.svg` | Budget |  |

<a id="commerce"></a>
## Commerce et marché (31, P2)

Motif par défaut : `bara-feere` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `shop.svg` | Boutique |  |
| `market-stall.svg` | Étal de marché |  |
| `cart.svg` | Panier |  |
| `cart-add.svg` | Ajouter au panier |  |
| `bag.svg` | Sac de courses |  |
| `basket.svg` | Panier tressé |  |
| `package.svg` | Colis |  |
| `delivery.svg` | Livraison | `sasira` |
| `delivery-moto.svg` | Livraison à moto | `sasira` |
| `order.svg` | Commande |  |
| `orders.svg` | Commandes |  |
| `stock.svg` | Stock |  |
| `warehouse.svg` | Entrepôt |  |
| `scale.svg` | Balance du marchand | `dantigimari` |
| `bargain.svg` | Marchandage (mains) |  |
| `catalog.svg` | Catalogue |  |
| `product.svg` | Produit |  |
| `category.svg` | Catégorie | `dankalan-ko` |
| `tag.svg` | Étiquette |  |
| `store-front.svg` | Devanture |  |
| `kiosk.svg` | Kiosque / cabine |  |
| `boutique-phone.svg` | Kiosque de recharge téléphonique |  |
| `fabric.svg` | Tissu / pagne |  |
| `sewing.svg` | Couture |  |
| `tailor.svg` | Tailleur |  |
| `hairdresser.svg` | Coiffure / tresses |  |
| `handshake.svg` | Accord conclu | `turusina` |
| `customer.svg` | Client |  |
| `seller.svg` | Vendeur |  |
| `review.svg` | Avis client | `bara-feere` |
| `return.svg` | Retour produit | `sa-kurulen` |

<a id="quotidien"></a>
## Vie quotidienne et maison (56, P2)

Motif par défaut : `points` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `house.svg` | Maison |  |
| `hut.svg` | Case ronde |  |
| `compound.svg` | Concession / cour familiale | `koli-so` |
| `door.svg` | Porte |  |
| `key.svg` | Clé |  |
| `bed.svg` | Lit |  |
| `mat.svg` | Natte |  |
| `chair.svg` | Chaise |  |
| `stool.svg` | Tabouret |  |
| `table.svg` | Table |  |
| `lamp.svg` | Lampe |  |
| `lantern.svg` | Lampe-tempête |  |
| `candle.svg` | Bougie |  |
| `bulb.svg` | Ampoule |  |
| `fan.svg` | Ventilateur |  |
| `ac.svg` | Climatiseur |  |
| `tv.svg` | Télévision |  |
| `radio.svg` | Poste de radio | `kaana-nonkon` |
| `fridge.svg` | Réfrigérateur |  |
| `stove.svg` | Réchaud à gaz |  |
| `charcoal-stove.svg` | Fourneau à charbon |  |
| `gas-bottle.svg` | Bouteille de gaz |  |
| `water-tap.svg` | Robinet |  |
| `water-drop.svg` | Goutte d'eau |  |
| `jerrycan.svg` | Bidon d'eau |  |
| `bucket.svg` | Seau |  |
| `kettle.svg` | Bouilloire (bouilloire à ablutions) |  |
| `broom.svg` | Balai |  |
| `laundry.svg` | Lessive |  |
| `iron.svg` | Fer à repasser |  |
| `soap.svg` | Savon |  |
| `shower.svg` | Douche |  |
| `toilet.svg` | Toilettes |  |
| `mosquito-net.svg` | Moustiquaire |  |
| `generator.svg` | Groupe électrogène |  |
| `solar-panel.svg` | Panneau solaire |  |
| `battery.svg` | Batterie |  |
| `battery-low.svg` | Batterie faible | `bantoron` |
| `plug.svg` | Prise |  |
| `power-cut.svg` | Coupure de courant | `juru-sarabali` |
| `electricity.svg` | Électricité | `kaana-nonkon` |
| `trash-bin.svg` | Poubelle |  |
| `umbrella.svg` | Parapluie |  |
| `glasses.svg` | Lunettes |  |
| `watch.svg` | Montre |  |
| `clothes.svg` | Vêtements |  |
| `boubou.svg` | Boubou |  |
| `shoes.svg` | Chaussures |  |
| `sandals.svg` | Sandales |  |
| `hat.svg` | Chapeau / bonnet |  |
| `headwrap.svg` | Foulard / attaché |  |
| `jewelry.svg` | Bijoux |  |
| `mirror.svg` | Miroir |  |
| `comb.svg` | Peigne |  |
| `baby.svg` | Bébé |  |
| `pet.svg` | Animal de compagnie |  |

<a id="cuisine"></a>
## Nourriture et cuisine (42, P2)

Motif par défaut : `turusina` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `food.svg` | Repas |  |
| `plate.svg` | Assiette |  |
| `bowl.svg` | Bol |  |
| `calabash.svg` | Calebasse |  |
| `mortar-pestle.svg` | Mortier et pilon | `turusina` |
| `pot.svg` | Marmite |  |
| `canari.svg` | Canari (jarre à eau) |  |
| `grill.svg` | Grillade / dibiterie |  |
| `brochette.svg` | Brochettes |  |
| `fish.svg` | Poisson |  |
| `fish-grilled.svg` | Poisson braisé |  |
| `chicken.svg` | Poulet |  |
| `meat.svg` | Viande |  |
| `rice.svg` | Riz |  |
| `millet.svg` | Mil |  |
| `maize.svg` | Maïs |  |
| `cassava.svg` | Manioc |  |
| `yam.svg` | Igname |  |
| `plantain.svg` | Banane plantain |  |
| `attieke.svg` | Attiéké |  |
| `peanut.svg` | Arachide |  |
| `shea.svg` | Karité |  |
| `baobab-fruit.svg` | Pain de singe (baobab) |  |
| `mango.svg` | Mangue |  |
| `orange.svg` | Orange |  |
| `coconut.svg` | Noix de coco |  |
| `pepper.svg` | Piment |  |
| `onion.svg` | Oignon |  |
| `tomato.svg` | Tomate |  |
| `bread.svg` | Pain / baguette |  |
| `tea.svg` | Thé à la menthe (ataya) |  |
| `teapot.svg` | Théière |  |
| `coffee.svg` | Café |  |
| `bissap.svg` | Bissap / jus |  |
| `water-sachet.svg` | Sachet d'eau |  |
| `bottle.svg` | Bouteille |  |
| `soda.svg` | Boisson |  |
| `milk.svg` | Lait |  |
| `egg.svg` | Œuf |  |
| `restaurant.svg` | Restaurant / maquis |  |
| `cutlery.svg` | Couverts |  |
| `cook.svg` | Cuisinier |  |

<a id="transport"></a>
## Transport et mobilité (31, P2)

Motif par défaut : `sasira` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `car.svg` | Voiture |  |
| `taxi.svg` | Taxi |  |
| `moto.svg` | Moto |  |
| `moto-taxi.svg` | Moto-taxi (zémidjan, djakarta, oléyia) |  |
| `tricycle.svg` | Tricycle |  |
| `bus.svg` | Bus |  |
| `minibus.svg` | Minibus (gbaka, sotrama, car rapide) |  |
| `bush-taxi.svg` | Taxi-brousse |  |
| `truck.svg` | Camion |  |
| `bicycle.svg` | Vélo |  |
| `walk.svg` | À pied |  |
| `pirogue.svg` | Pirogue |  |
| `boat.svg` | Bateau |  |
| `ferry.svg` | Bac |  |
| `train.svg` | Train |  |
| `plane.svg` | Avion |  |
| `fuel.svg` | Carburant |  |
| `fuel-bottle.svg` | Essence en bouteille (bord de route) |  |
| `parking.svg` | Stationnement |  |
| `road.svg` | Route |  |
| `dirt-road.svg` | Piste | `sasira` |
| `traffic-light.svg` | Feu tricolore |  |
| `roundabout.svg` | Rond-point | `koli-so` |
| `checkpoint.svg` | Barrage / contrôle | `bantoron` |
| `ticket.svg` | Billet |  |
| `luggage.svg` | Bagages |  |
| `map-route.svg` | Trajet | `sasira` |
| `gps.svg` | Position GPS | `koli-so` |
| `ride.svg` | Course |  |
| `driver.svg` | Chauffeur |  |
| `helmet.svg` | Casque |  |

<a id="lieux"></a>
## Lieux, carte et localisation (34, P2)

Motif par défaut : `sasira` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `map.svg` | Carte |  |
| `map-pin.svg` | Repère | `koli-so` |
| `location.svg` | Ma position | `koli-so` |
| `navigation.svg` | Navigation |  |
| `compass.svg` | Boussole |  |
| `globe.svg` | Monde |  |
| `africa.svg` | Afrique |  |
| `country.svg` | Pays |  |
| `city.svg` | Ville |  |
| `village.svg` | Village |  |
| `neighborhood.svg` | Quartier |  |
| `market.svg` | Marché |  |
| `mosque.svg` | Mosquée en banco |  |
| `church.svg` | Église |  |
| `school.svg` | École |  |
| `hospital.svg` | Hôpital |  |
| `pharmacy.svg` | Pharmacie |  |
| `bank-building.svg` | Agence bancaire |  |
| `post-office.svg` | Poste |  |
| `police.svg` | Police |  |
| `town-hall.svg` | Mairie |  |
| `court.svg` | Tribunal | `dantigimari` |
| `stadium.svg` | Stade |  |
| `office.svg` | Bureau |  |
| `factory.svg` | Usine |  |
| `hotel.svg` | Hôtel |  |
| `granary.svg` | Grenier |  |
| `well.svg` | Puits |  |
| `river.svg` | Fleuve |  |
| `bridge.svg` | Pont |  |
| `beach.svg` | Plage |  |
| `mountain.svg` | Falaise / montagne |  |
| `desert.svg` | Désert / dune |  |
| `home-address.svg` | Adresse |  |

<a id="communication"></a>
## Communication et appareils (49, P1)

Motif par défaut : `kaana-nonkon` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `phone.svg` | Téléphone |  |
| `phone-call.svg` | Appel |  |
| `phone-incoming.svg` | Appel entrant |  |
| `phone-outgoing.svg` | Appel sortant |  |
| `phone-missed.svg` | Appel manqué | `juru-sarabali` |
| `video-call.svg` | Appel vidéo |  |
| `smartphone.svg` | Smartphone |  |
| `feature-phone.svg` | Téléphone à touches |  |
| `sms.svg` | SMS |  |
| `ussd.svg` | Code USSD (*144#) |  |
| `mail.svg` | Courriel |  |
| `inbox.svg` | Boîte de réception |  |
| `notification.svg` | Notification | `donkonkolo` |
| `bell.svg` | Cloche | `donkonkolo` |
| `bell-off.svg` | Notifications coupées |  |
| `contact.svg` | Contact |  |
| `contacts.svg` | Répertoire |  |
| `sim.svg` | Carte SIM |  |
| `airtime.svg` | Crédit téléphonique / recharge |  |
| `data.svg` | Forfait internet | `kaana-nonkon` |
| `wifi.svg` | Wi-Fi | `kaana-nonkon` |
| `signal.svg` | Réseau mobile | `kaana-nonkon` |
| `no-signal.svg` | Pas de réseau |  |
| `bluetooth.svg` | Bluetooth |  |
| `nfc.svg` | NFC |  |
| `antenna.svg` | Antenne relais | `kaana-nonkon` |
| `laptop.svg` | Ordinateur portable |  |
| `desktop.svg` | Ordinateur |  |
| `tablet.svg` | Tablette |  |
| `printer.svg` | Imprimante |  |
| `camera.svg` | Appareil photo |  |
| `microphone.svg` | Microphone |  |
| `headphones.svg` | Écouteurs |  |
| `speaker.svg` | Haut-parleur | `donkonkolo` |
| `charger.svg` | Chargeur |  |
| `power-bank.svg` | Batterie externe |  |
| `usb.svg` | USB |  |
| `cloud.svg` | Nuage |  |
| `cloud-upload.svg` | Envoyer vers le nuage |  |
| `cloud-off.svg` | Nuage indisponible |  |
| `server.svg` | Serveur |  |
| `database.svg` | Base de données |  |
| `code.svg` | Code |  |
| `terminal.svg` | Terminal |  |
| `api.svg` | API |  |
| `bug.svg` | Bogue |  |
| `robot.svg` | Robot / IA |  |
| `sparkles-ai.svg` | Assistant IA | `bara-feere` |
| `qr-pay.svg` | Paiement par QR |  |

<a id="medias"></a>
## Médias et fichiers (32, P1)

Motif par défaut : `points` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `image.svg` | Image |  |
| `gallery.svg` | Galerie |  |
| `photo-add.svg` | Ajouter une photo |  |
| `screenshot.svg` | Capture d'écran | `bantoron` |
| `video.svg` | Vidéo |  |
| `film.svg` | Film |  |
| `music.svg` | Musique |  |
| `audio.svg` | Audio | `kaana-nonkon` |
| `podcast.svg` | Podcast |  |
| `file.svg` | Fichier |  |
| `file-text.svg` | Document |  |
| `file-pdf.svg` | PDF |  |
| `file-image.svg` | Fichier image |  |
| `file-audio.svg` | Fichier audio |  |
| `file-video.svg` | Fichier vidéo |  |
| `file-zip.svg` | Archive |  |
| `file-spreadsheet.svg` | Tableur |  |
| `folder.svg` | Dossier |  |
| `folder-open.svg` | Dossier ouvert |  |
| `clipboard.svg` | Presse-papiers |  |
| `note.svg` | Note |  |
| `book.svg` | Livre |  |
| `newspaper.svg` | Journal |  |
| `proof.svg` | Preuve de publication | `bantoron` |
| `watermark.svg` | Filigrane |  |
| `text.svg` | Texte |  |
| `font.svg` | Police |  |
| `bold.svg` | Gras |  |
| `italic.svg` | Italique |  |
| `align-left.svg` | Aligner à gauche |  |
| `list-bullet.svg` | Liste à puces | `sogosen` |
| `list-number.svg` | Liste numérotée |  |

<a id="temps"></a>
## Temps et calendrier (18, P1)

Motif par défaut : `croisillon` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `calendar.svg` | Calendrier |  |
| `calendar-check.svg` | Date confirmée |  |
| `calendar-add.svg` | Ajouter un événement |  |
| `event.svg` | Événement |  |
| `clock-alt.svg` | Horloge |  |
| `timer.svg` | Minuteur | `koli-so` |
| `countdown.svg` | Compte à rebours (anneau) | `koli-so` |
| `alarm.svg` | Réveil | `donkonkolo` |
| `stopwatch.svg` | Chronomètre |  |
| `history-time.svg` | Historique | `sa-kurulen` |
| `schedule.svg` | Planifier |  |
| `day.svg` | Jour | `koli-so` |
| `night.svg` | Nuit |  |
| `sunrise.svg` | Lever du soleil |  |
| `sunset.svg` | Coucher du soleil |  |
| `week.svg` | Semaine |  |
| `month.svg` | Mois |  |
| `deadline.svg` | Échéance | `bantoron` |

<a id="personnes"></a>
## Personnes, comptes et famille (28, P1)

Motif par défaut : `koli-so` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `user.svg` | Utilisateur |  |
| `users.svg` | Utilisateurs | `turusina` |
| `user-add.svg` | Ajouter un utilisateur |  |
| `user-remove.svg` | Retirer un utilisateur |  |
| `user-check.svg` | Utilisateur vérifié |  |
| `user-circle.svg` | Avatar |  |
| `profile.svg` | Profil |  |
| `id-card.svg` | Pièce d'identité |  |
| `selfie.svg` | Selfie de vérification |  |
| `family.svg` | Famille | `koli-so` |
| `couple.svg` | Couple |  |
| `child.svg` | Enfant |  |
| `elder.svg` | Ancien / sage |  |
| `woman.svg` | Femme |  |
| `man.svg` | Homme |  |
| `group.svg` | Groupe | `turusina` |
| `team.svg` | Équipe | `turusina` |
| `admin.svg` | Administrateur | `bantoron` |
| `moderator.svg` | Modérateur | `dantigimari` |
| `advertiser.svg` | Annonceur | `donkonkolo` |
| `publisher.svg` | Diffuseur | `kaana-nonkon` |
| `agent.svg` | Agent / conseiller |  |
| `support.svg` | Assistance | `dantigimari` |
| `wave-hand.svg` | Salutation |  |
| `griot.svg` | Griot / conteur | `donkonkolo` |
| `chief.svg` | Chef de village |  |
| `accessibility.svg` | Accessibilité |  |
| `wheelchair.svg` | Fauteuil roulant |  |

<a id="securite"></a>
## Sécurité et confiance (21, P1)

Motif par défaut : `bantoron` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `shield.svg` | Bouclier |  |
| `shield-alert.svg` | Menace |  |
| `lock-closed.svg` | Cadenas fermé |  |
| `lock-open.svg` | Cadenas ouvert |  |
| `key-alt.svg` | Clé d'accès |  |
| `password.svg` | Mot de passe |  |
| `fingerprint.svg` | Empreinte digitale |  |
| `face-id.svg` | Reconnaissance faciale |  |
| `two-factor.svg` | Double authentification |  |
| `kyc.svg` | Vérification d'identité (KYC) |  |
| `fraud.svg` | Fraude | `juru-sarabali` |
| `spam.svg` | Indésirable |  |
| `privacy.svg` | Confidentialité |  |
| `eye-watch.svg` | Surveillance |  |
| `legal.svg` | Mentions légales | `dantigimari` |
| `terms.svg` | Conditions |  |
| `contract.svg` | Contrat |  |
| `signature.svg` | Signature |  |
| `stamp.svg` | Cachet / tampon |  |
| `dispute.svg` | Litige | `dantigimari` |
| `gavel.svg` | Décision / arbitrage | `dantigimari` |

<a id="administration"></a>
## Administration et documents officiels (14, P3)

Motif par défaut : `croisillon` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `passport.svg` | Passeport |  |
| `birth-certificate.svg` | Acte de naissance |  |
| `certificate.svg` | Certificat / diplôme |  |
| `residence.svg` | Certificat de résidence |  |
| `tax.svg` | Impôts |  |
| `business-reg.svg` | Registre du commerce (RCCM) |  |
| `nif.svg` | Numéro fiscal |  |
| `vote.svg` | Vote |  |
| `ballot-box.svg` | Urne |  |
| `law.svg` | Loi |  |
| `government.svg` | Gouvernement |  |
| `form.svg` | Formulaire |  |
| `queue.svg` | File d'attente | `sogosen` |
| `appointment.svg` | Rendez-vous |  |

<a id="sante"></a>
## Santé (21, P3)

Motif par défaut : `bantoron` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `health.svg` | Santé |  |
| `heart-pulse.svg` | Pouls |  |
| `stethoscope.svg` | Stéthoscope |  |
| `doctor.svg` | Médecin |  |
| `nurse.svg` | Infirmier·e |  |
| `pill.svg` | Médicament |  |
| `syringe.svg` | Vaccin |  |
| `thermometer.svg` | Température |  |
| `first-aid.svg` | Premiers secours |  |
| `ambulance.svg` | Ambulance |  |
| `mosquito.svg` | Moustique / paludisme |  |
| `pregnancy.svg` | Grossesse |  |
| `baby-care.svg` | Santé de l'enfant |  |
| `traditional-medicine.svg` | Plantes médicinales |  |
| `hand-wash.svg` | Lavage des mains |  |
| `face-mask.svg` | Masque sanitaire |  |
| `blood.svg` | Don de sang |  |
| `tooth.svg` | Dentiste |  |
| `eye-care.svg` | Ophtalmologie |  |
| `mental-health.svg` | Santé mentale |  |
| `insurance.svg` | Assurance santé / mutuelle | `turusina` |

<a id="education"></a>
## Éducation et savoir (18, P3)

Motif par défaut : `croisillon` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `education.svg` | Éducation |  |
| `graduation.svg` | Diplômé |  |
| `book-open.svg` | Livre ouvert |  |
| `notebook.svg` | Cahier |  |
| `pen.svg` | Stylo |  |
| `slate.svg` | Ardoise |  |
| `chalkboard.svg` | Tableau noir |  |
| `backpack.svg` | Cartable |  |
| `teacher.svg` | Enseignant |  |
| `student.svg` | Élève |  |
| `quran-school.svg` | École coranique / tablette |  |
| `library.svg` | Bibliothèque |  |
| `exam.svg` | Examen |  |
| `certificate-edu.svg` | Attestation |  |
| `lightbulb.svg` | Idée |  |
| `alphabet.svg` | Alphabétisation (N'Ko, ajami, latin) |  |
| `quiz.svg` | Quiz |  |
| `course.svg` | Formation en ligne |  |

<a id="travail"></a>
## Travail, métiers et artisanat (30, P3)

Motif par défaut : `turusina` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `briefcase.svg` | Mallette / emploi |  |
| `job.svg` | Offre d'emploi |  |
| `tools.svg` | Outils |  |
| `hammer.svg` | Marteau |  |
| `wrench.svg` | Clé à molette |  |
| `mechanic.svg` | Mécanicien |  |
| `welder.svg` | Soudeur |  |
| `mason.svg` | Maçon |  |
| `carpenter.svg` | Menuisier |  |
| `blacksmith.svg` | Forgeron |  |
| `potter.svg` | Potière |  |
| `weaver.svg` | Tisserand / métier à tisser |  |
| `dyer.svg` | Teinturière (bogolan, indigo) |  |
| `calame.svg` | Calame (outil du bogolan) |  |
| `basket-weaver.svg` | Vannerie |  |
| `jeweler.svg` | Bijoutier |  |
| `farmer-job.svg` | Agriculteur |  |
| `fisher.svg` | Pêcheur |  |
| `herder.svg` | Éleveur |  |
| `driver-job.svg` | Chauffeur |  |
| `vendor.svg` | Vendeuse ambulante |  |
| `domestic.svg` | Employé·e de maison |  |
| `security-guard.svg` | Gardien |  |
| `freelance.svg` | Indépendant |  |
| `meeting.svg` | Réunion | `koli-so` |
| `presentation.svg` | Présentation |  |
| `target.svg` | Objectif | `koli-so` |
| `rocket.svg` | Lancement |  |
| `trophy.svg` | Trophée | `bara-feere` |
| `medal.svg` | Médaille |  |

<a id="agriculture"></a>
## Agriculture, élevage et nature (39, P3)

Motif par défaut : `croisillon` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `field.svg` | Champ | `croisillon` |
| `seed.svg` | Semence |  |
| `sprout.svg` | Pousse |  |
| `hoe.svg` | Daba (houe) |  |
| `machete.svg` | Machette |  |
| `tractor.svg` | Tracteur |  |
| `irrigation.svg` | Irrigation |  |
| `harvest.svg` | Récolte |  |
| `cotton.svg` | Coton |  |
| `cocoa.svg` | Cacao |  |
| `coffee-plant.svg` | Caféier |  |
| `cashew.svg` | Anacarde |  |
| `sesame.svg` | Sésame |  |
| `sorghum.svg` | Sorgho |  |
| `onion-field.svg` | Maraîchage |  |
| `cow.svg` | Vache / zébu |  |
| `goat.svg` | Chèvre | `bantoron` |
| `sheep.svg` | Mouton |  |
| `chicken-farm.svg` | Poule |  |
| `donkey.svg` | Âne |  |
| `camel.svg` | Dromadaire |  |
| `horse.svg` | Cheval |  |
| `fishnet.svg` | Filet de pêche |  |
| `bee.svg` | Abeille / miel |  |
| `baobab.svg` | Baobab |  |
| `palm.svg` | Palmier |  |
| `tree.svg` | Arbre |  |
| `leaf.svg` | Feuille |  |
| `flower.svg` | Fleur | `bara-feere` |
| `calabash-plant.svg` | Calebassier | `bara-feere` |
| `crocodile.svg` | Crocodile | `dantigimari` |
| `snake.svg` | Serpent | `sasira` |
| `chameleon.svg` | Caméléon |  |
| `bird.svg` | Oiseau | `konosen` |
| `lizard.svg` | Margouillat |  |
| `lion.svg` | Lion |  |
| `elephant.svg` | Éléphant |  |
| `recycle.svg` | Recyclage | `sa-kurulen` |
| `eco.svg` | Écologie |  |

<a id="meteo"></a>
## Météo et environnement (17, P3)

Motif par défaut : `points` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `sun.svg` | Soleil | `koli-so` |
| `moon.svg` | Lune |  |
| `cloud-sun.svg` | Éclaircies |  |
| `rain.svg` | Pluie |  |
| `storm.svg` | Orage | `kaana-nonkon` |
| `lightning.svg` | Éclair | `kaana-nonkon` |
| `wind.svg` | Vent |  |
| `harmattan.svg` | Harmattan (vent de poussière) |  |
| `dust.svg` | Poussière / brume sèche |  |
| `heat.svg` | Forte chaleur |  |
| `temperature.svg` | Température |  |
| `humidity.svg` | Humidité |  |
| `flood.svg` | Inondation |  |
| `drought.svg` | Sécheresse |  |
| `rainbow.svg` | Arc-en-ciel |  |
| `rainy-season.svg` | Saison des pluies |  |
| `dry-season.svg` | Saison sèche |  |

<a id="culture"></a>
## Culture, fêtes et loisirs (37, P3)

Motif par défaut : `donkonkolo` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `djembe.svg` | Djembé | `donkonkolo` |
| `tama.svg` | Tama (tambour d'aisselle) | `donkonkolo` |
| `kora.svg` | Kora |  |
| `balafon.svg` | Balafon |  |
| `ngoni.svg` | N'goni |  |
| `flute.svg` | Flûte peule |  |
| `dance.svg` | Danse |  |
| `ritual-mask.svg` | Masque traditionnel |  |
| `statue.svg` | Statuette |  |
| `mudcloth.svg` | Tissu bogolan |  |
| `kente-strip.svg` | Bande tissée |  |
| `cowrie.svg` | Cauri | `bara-feere` |
| `calabash-deco.svg` | Calebasse décorée |  |
| `griot-alt.svg` | Récit / conte |  |
| `wedding.svg` | Mariage | `koli-so` |
| `baptism.svg` | Baptême |  |
| `funeral.svg` | Deuil |  |
| `tabaski.svg` | Tabaski (mouton) |  |
| `ramadan.svg` | Ramadan (croissant) |  |
| `korite.svg` | Korité / fin du jeûne |  |
| `christmas.svg` | Noël |  |
| `new-year.svg` | Nouvel an |  |
| `independence.svg` | Fête de l'indépendance |  |
| `party.svg` | Fête |  |
| `gift.svg` | Cadeau | `bara-feere` |
| `cake.svg` | Gâteau |  |
| `photo-booth.svg` | Photo souvenir |  |
| `cinema.svg` | Cinéma |  |
| `theatre.svg` | Théâtre |  |
| `festival.svg` | Festival |  |
| `prayer.svg` | Prière |  |
| `prayer-mat.svg` | Tapis de prière |  |
| `rosary.svg` | Chapelet |  |
| `awale.svg` | Awalé (jeu) |  |
| `cards.svg` | Jeu de cartes |  |
| `game.svg` | Jeu vidéo |  |
| `dice.svg` | Dés |  |

<a id="sport"></a>
## Sport (14, P3)

Motif par défaut : `koli-so` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `football.svg` | Football |  |
| `ball.svg` | Ballon |  |
| `goal.svg` | But |  |
| `basketball.svg` | Basketball |  |
| `running.svg` | Course |  |
| `wrestling.svg` | Lutte traditionnelle |  |
| `boxing.svg` | Boxe |  |
| `cycling.svg` | Cyclisme |  |
| `swimming.svg` | Natation |  |
| `gym.svg` | Musculation |  |
| `whistle.svg` | Sifflet |  |
| `jersey.svg` | Maillot |  |
| `tournament.svg` | Tournoi | `dankalan-ko` |
| `podium.svg` | Podium |  |

<a id="emotions"></a>
## Émotions et réactions (15, P2)

Motif par défaut : `koli-so` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `smile.svg` | Sourire |  |
| `laugh.svg` | Rire |  |
| `love.svg` | Amour |  |
| `sad.svg` | Triste |  |
| `angry.svg` | En colère |  |
| `surprised.svg` | Surpris |  |
| `thinking.svg` | Réflexion |  |
| `thumbs-up.svg` | Pouce levé |  |
| `thumbs-down.svg` | Pouce baissé |  |
| `clap.svg` | Applaudir |  |
| `pray-hands.svg` | Merci / prière |  |
| `celebrate.svg` | Bravo |  |
| `ok-hand.svg` | D'accord |  |
| `hundred.svg` | 100 % |  |
| `eyes.svg` | Regard |  |

<a id="vupay"></a>
## Spécifiques Vupay (17, P1)

Motif par défaut : `koli-so` (sauf indication contraire).

| Fichier | Icône | Motif |
|---|---|---|
| `vupay-ring.svg` | Anneau de statut Vupay (signature) | `koli-so` |
| `proof-upload.svg` | Envoyer une preuve | `bantoron` |
| `proof-pending.svg` | Preuve en vérification | `sogosen` |
| `proof-approved.svg` | Preuve validée | `bara-feere` |
| `proof-rejected.svg` | Preuve refusée | `juru-sarabali` |
| `campaign-create.svg` | Créer une campagne | `donkonkolo` |
| `campaign-live.svg` | Campagne active | `donkonkolo` |
| `campaign-ended.svg` | Campagne terminée |  |
| `diffuseur.svg` | Espace diffuseur | `kaana-nonkon` |
| `annonceur.svg` | Espace annonceur | `donkonkolo` |
| `audience-size.svg` | Taille d'audience | `turusina` |
| `views-24h.svg` | Vues sur 24 h | `koli-so` |
| `gains-fcfa.svg` | Gains en FCFA | `bara-feere` |
| `withdraw-mm.svg` | Retrait mobile money |  |
| `moderation.svg` | Modération | `dantigimari` |
| `identity-check.svg` | Vérification d'identité | `bantoron` |
| `journal.svg` | Journal d'audit (ledger) | `croisillon` |
