import { EcranAVenir } from "@/components/EcranAVenir";

export default function CampagnesDisponibles() {
  return <EcranAVenir titre="Campagnes disponibles" lot="Lot 2 · Campagnes" retour="/diffuseur" fonctions={["Liste filtrée selon le profil (pays, âge, intérêts, réseaux reliés)", "Rémunération affichée et places restantes", "Accepter : visuel avec code unique + texte avec lien de clic personnel", "Bouton de partage vers le réseau choisi"]} />;
}
