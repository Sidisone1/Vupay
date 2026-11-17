import { EcranAVenir } from "@/components/EcranAVenir";

export default function Kyc() {
  return <EcranAVenir titre="Vérification d'identité" lot="Lot 4 · Argent" retour="/diffuseur" fonctions={["Photo de la pièce d'identité + selfie (stockage privé)", "Obligatoire avant le premier retrait", "Statut et motif de refus éventuel"]} />;
}
