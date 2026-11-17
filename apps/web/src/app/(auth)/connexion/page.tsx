import { EcranAVenir } from "@/components/EcranAVenir";

export default function Connexion() {
  return (
    <EcranAVenir
      titre="Connexion"
      lot="Lot 1 · Socle"
      retour="/"
      fonctions={["Numéro WhatsApp + code OTP (Supabase Auth)", "Choix de l'espace : diffuseur ou annonceur", "Redirection selon le rôle"]}
    />
  );
}
