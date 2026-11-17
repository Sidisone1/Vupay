import { EcranAVenir } from "@/components/EcranAVenir";

export default function NouvelleCampagne() {
  return <EcranAVenir titre="Créer une campagne" lot="Lot 2 · Campagnes" retour="/annonceur" fonctions={["Objectif (vues ou clics), visuel ou vidéo 9:16 de 30 s max, texte, lien, dates", "Ciblage : réseaux, pays, villes, âge, sexe, intérêts, niveau minimum", "Budget total (25 000 F minimum), plafond par diffuseur, estimation avant paiement", "Envoi en modération"]} />;
}
