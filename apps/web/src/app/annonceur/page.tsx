import { Menu } from "@/components/Menu";

export default function EspaceAnnonceur() {
  return (
    <Menu
      titre="Espace annonceur"
      liens={[
        { href: "/annonceur/campagnes", libelle: "Mes campagnes" },
        { href: "/annonceur/campagnes/nouvelle", libelle: "Créer une campagne" },
        { href: "/annonceur/portefeuille", libelle: "Portefeuille et opérations" },
        { href: "/annonceur/entreprise", libelle: "Compte entreprise" },
      ]}
    />
  );
}
