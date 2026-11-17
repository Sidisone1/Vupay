import { EcranAVenir } from "@/components/EcranAVenir";

export default function MesCampagnes() {
  return <EcranAVenir titre="Mes campagnes" lot="Lot 2 · Campagnes" retour="/annonceur" fonctions={["Statut (brouillon, en modération, active, en pause, terminée)", "Vues et clics validés, coût par vue réel", "Diffuseurs actifs, répartition par ville"]} />;
}
