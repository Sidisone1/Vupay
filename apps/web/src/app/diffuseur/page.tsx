import { Menu } from "@/components/Menu";

export default function EspaceDiffuseur() {
  return (
    <Menu
      titre="Mon espace diffuseur"
      liens={[
        { href: "/diffuseur/campagnes", libelle: "Campagnes disponibles" },
        { href: "/diffuseur/gains", libelle: "Tableau de bord et gains" },
        { href: "/diffuseur/retraits", libelle: "Suivi de mes retraits" },
        { href: "/diffuseur/profil", libelle: "Mon profil" },
        { href: "/diffuseur/kyc", libelle: "Vérification d'identité" },
      ]}
    />
  );
}
