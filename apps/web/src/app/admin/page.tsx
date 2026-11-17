import { Menu } from "@/components/Menu";

export default function BackOffice() {
  return (
    <Menu
      titre="Back-office Vupay"
      liens={[
        { href: "/admin/preuves", libelle: "File des preuves" },
        { href: "/admin/kyc", libelle: "Vérifications d'identité" },
        { href: "/admin/campagnes", libelle: "Modération des campagnes" },
        { href: "/admin/retraits", libelle: "Retraits" },
        { href: "/admin/utilisateurs", libelle: "Utilisateurs" },
        { href: "/admin/parametres", libelle: "Paramètres (tarifs, seuils, anti-fraude)" },
        { href: "/admin/journal", libelle: "Journal des actions" },
      ]}
    />
  );
}
