import { EcranAVenir } from "@/components/EcranAVenir";

export default function AdminPreuves() {
  return <EcranAVenir titre="File des preuves" lot="Lot 3 · Preuves et clics" retour="/admin" fonctions={["Capture, chiffre lu par OCR, historique du diffuseur, alertes de fraude", "Valider, corriger le chiffre ou refuser avec motif"]} />;
}
