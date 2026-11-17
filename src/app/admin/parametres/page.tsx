import { EcranAVenir } from "@/components/EcranAVenir";

export default function AdminParametres() {
  return <EcranAVenir titre="Paramètres" lot="Lot 3 · Preuves et clics" retour="/admin" fonctions={["Tarifs par pays et par réseau, seuil de retrait, frais, commission", "Règles anti-fraude"]} />;
}
