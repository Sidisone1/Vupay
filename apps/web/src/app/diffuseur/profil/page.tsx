import { EcranAVenir } from "@/components/EcranAVenir";

export default function Profil() {
  return <EcranAVenir titre="Profil d'audience" lot="Lot 1 · Socle" retour="/diffuseur" fonctions={["Pays, ville, âge, sexe, centres d'intérêt, code parrain", "Réseaux reliés (réseau + nom d'utilisateur)", "Captures des vues des 3 derniers statuts ou stories pour estimer la portée"]} />;
}
