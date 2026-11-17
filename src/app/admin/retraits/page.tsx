import { EcranAVenir } from "@/components/EcranAVenir";

export default function AdminRetraits() {
  return <EcranAVenir titre="Retraits" lot="Lot 4 · Argent" retour="/admin" fonctions={["Validation automatique sous le plafond, manuelle au-dessus", "Relance en cas d'échec opérateur", "Solde de décaissement par pays avec alerte"]} />;
}
