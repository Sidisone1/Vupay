import { EcranAVenir } from "@/components/EcranAVenir";

export default function AdminUtilisateurs() {
  return <EcranAVenir titre="Utilisateurs" lot="Lot 1 · Socle" retour="/admin" fonctions={["Recherche, niveau, suspension, bannissement, notes internes"]} />;
}
