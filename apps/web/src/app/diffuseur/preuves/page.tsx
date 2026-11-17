import { EcranAVenir } from "@/components/EcranAVenir";

export default function Preuves() {
  return <EcranAVenir titre="Envoyer mes preuves" lot="Lot 3 · Preuves et clics" retour="/diffuseur" fonctions={["Capture de l'écran des vues après 20 à 24 h, avant expiration", "Lecture automatique du nombre et du code (OCR)", "Statut : en attente, validée, refusée avec motif"]} />;
}
