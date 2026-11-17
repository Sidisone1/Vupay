import { EcranAVenir } from "@/components/EcranAVenir";

export default function Entreprise() {
  return <EcranAVenir titre="Compte entreprise" lot="Lot 1 · Socle" retour="/annonceur" fonctions={["Raison sociale, RCCM ou pièce du gérant", "Pays, secteur"]} />;
}
