import { EcranAVenir } from "@/components/EcranAVenir";

export default function Retraits() {
  return <EcranAVenir titre="Retirer mon argent" lot="Lot 4 · Argent" retour="/diffuseur" fonctions={["Choix de l'opérateur et du numéro (au nom de la personne vérifiée)", "Seuil 1 000 F, frais affichés avant confirmation", "Suivi du statut ; recrédit automatique en cas d'échec"]} />;
}
