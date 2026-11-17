import { Menu } from "@/components/Menu";

export default function EspaceDiffuseur() {
  return (
    <Menu
      titre="Mon espace diffuseur"
      liens={[
        { href: "/diffuseur/campagnes", libelle: "Campagnes disponibles" },
        { href: "/diffuseur/preuves", libelle: "Envoyer mes preuves" },
        { href: "/diffuseur/gains", libelle: "Tableau de bord et gains" },
        { href: "/diffuseur/retraits", libelle: "Retirer mon argent" },
        { href: "/diffuseur/profil", libelle: "Profil et réseaux reliés" },
        { href: "/diffuseur/kyc", libelle: "Vérification d'identité" },
      ]}
    />
  );
}
