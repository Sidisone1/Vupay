import { EcranAVenir } from "@/components/EcranAVenir";

export default function DetailCampagne({ params }: { params: { id: string } }) {
  return <EcranAVenir titre={`Campagne ${params.id}`} lot="Lot 2 · Campagnes" retour="/diffuseur/campagnes" fonctions={["Visuel 9:16 avec code court (ex. ST-4K7)", "Texte avec mention publicitaire et lien vupay.app/c/…", "Une publication par réseau, chacune avec son code et sa preuve"]} />;
}
