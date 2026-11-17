import { EcranAVenir } from "@/components/EcranAVenir";

export default function AdminCampagnes() {
  return <EcranAVenir titre="Modération des campagnes" lot="Lot 2 · Campagnes" retour="/admin" fonctions={["Validation du contenu (liste des contenus interdits)", "Pause, arrêt, remboursement"]} />;
}
