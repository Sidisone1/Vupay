"""Découpe les planches « Collection Bogolan » (design/icones/bogolan/planches/) en icônes séparées.

Sortie : apps/web/public/icones/<catégorie>/<nom>.png (144 x 144, coins arrondis transparents).
Usage : python3 design/icons/bogolan/decouper.py   (nécessite Pillow et numpy)
Après un ajout d'icône, mettre à jour design/icones/README.md.
"""
import sys, os, numpy as np
from PIL import Image, ImageDraw
def runs(v, thr, minlen=60):
    out=[];s=None
    for i,x in enumerate(v):
        if x>thr and s is None: s=i
        if x<=thr and s is not None:
            if i-s>=minlen: out.append((s,i))
            s=None
    if s is not None and len(v)-s>=minlen: out.append((s,len(v)))
    return out
PLANCHES = {
 'principale': (['moto-taxi','voiture','livraison','accueil','destination','assistance','compte','paiement','securite'],),
 'actions': (['accepter','annuler','demarrer','terminer','partager-trajet','ajouter-etape','favoris','recu','signaler','photo-vehicule','hors-ligne','en-ligne'],),
 'utilitaires': (['rechercher','me-localiser','langue','ecouter','ajouter-photo','importer-document','reprendre-photo','agrandir','actualiser','informations','verrouiller','deconnexion'],),
 'confiance': (['client','chauffeur','selfie','telephone','code-sms','e-mail','confidentialite','conditions','contact-urgence','objet-oublie','guide-audio','tutoriel'],),
 'statuts': (['recherche-chauffeur','chauffeur-trouve','chauffeur-en-route','chauffeur-arrive','client-attendu','course-en-cours','validation-en-cours','document-valide','document-a-corriger','operation-reussie','erreur','connexion-perdue'],),
 'commandes': (['modifier','enregistrer','supprimer','telecharger','filtrer','trier','retour','suivant','fermer','menu','afficher','masquer'],),
 'lieux': (['domicile','travail','marche','aeroport','gare-routiere','hopital','ecole','hotel','restaurant','station-service','pont','point-de-rencontre'],),
 'trajets': (['depart','arrivee','distance','duree-trajet','passagers','bagages','casque','ceinture','accessibilite','especes','monnaie','aller-retour'],),
 'suite': (['apparence','navigation','temps-attente','parametres','appel','messages','message-vocal','notifications','identite','permis-conduire','assurance','carte-grise','historique','avis','course-planifiee','sos'],),
}
TAILLE=144  # assez pour un affichage jusqu'à 48 points sur écran x3
ICI=os.path.dirname(os.path.abspath(__file__))
PLANCHES_DIR=os.path.join(ICI,'planches')
sortie=os.path.join(ICI,'..','..','..','apps','web','public','icones')
for cat,(noms,) in PLANCHES.items():
    im=Image.open(f'{PLANCHES_DIR}/{cat}.jpg').convert('RGB')
    a=np.asarray(im).astype(int); r,g,b=a[...,0],a[...,1],a[...,2]
    m=(r>235)&(g>200)&(g<236)&(b<212); m[:220]=0; m[1470:]=0
    cols=runs(m.sum(0),40); rows=runs(m.sum(1),60)
    assert len(cols)*len(rows)==len(noms),(cat,cols,rows)
    tuile=tuple(int(x) for x in np.median(a[m],axis=0))
    os.makedirs(f'{sortie}/{cat}',exist_ok=True)
    i=0
    for (y0,y1) in rows:
        for (x0,x1) in cols:
            c=im.crop((x0+3,y0+3,x1-3,y1-3)); w,h=c.size; s=max(w,h)
            carre=Image.new('RGB',(s,s),tuile); carre.paste(c,((s-w)//2,(s-h)//2))
            carre=carre.resize((TAILLE,TAILLE),Image.LANCZOS).convert('RGBA')
            masque=Image.new('L',(TAILLE*4,TAILLE*4),0)
            ImageDraw.Draw(masque).rounded_rectangle((0,0,TAILLE*4-1,TAILLE*4-1),radius=int(TAILLE*4*0.22),fill=255)
            carre.putalpha(masque.resize((TAILLE,TAILLE),Image.LANCZOS))
            carre.quantize(256,method=Image.Quantize.FASTOCTREE).save(f'{sortie}/{cat}/{noms[i]}.png',optimize=True); i+=1
print('Icônes écrites dans', os.path.normpath(sortie))
