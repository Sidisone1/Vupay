import { EcranAVenir } from "@/components/EcranAVenir";

export default function Gains() {
  return <EcranAVenir titre="Tableau de bord" lot="Lot 3 · Preuves et clics" retour="/diffuseur" fonctions={["Solde disponible et solde en attente (calculés depuis le journal)", "Vues, clics, taux de clic", "Historique des campagnes"]} />;
}
