import { EcranAVenir } from "@/components/EcranAVenir";

export default function Portefeuille() {
  return <EcranAVenir titre="Portefeuille" lot="Lot 4 · Argent" retour="/annonceur" fonctions={["Rechargement par Mobile Money ou carte (agrégateur)", "Factures PDF", "Budget non consommé : conservé ou remboursé sur demande"]} />;
}
