import { redirect } from "next/navigation";
import { destinationApresConnexion } from "@/lib/espaces";
import { exigerUtilisateur } from "@/lib/supabase/session";
import { paysDuTelephone } from "@/lib/telephone";
import { FormulaireInscription } from "./FormulaireInscription";

export const dynamic = "force-dynamic";
export const metadata = { title: "Inscription — Vupay" };

export default async function Inscription({ searchParams }: { searchParams: { espace?: string; suite?: string } }) {
  const { user, profil } = await exigerUtilisateur();
  if (profil) redirect(destinationApresConnexion(profil));
  const pays = user.phone ? paysDuTelephone(`+${user.phone.replace(/^\+/, "")}`) : null;
  return (
    <main className="mx-auto min-h-screen max-w-lg bg-vupay-fond px-5 py-6 text-vupay-encre">
      <h1 className="text-2xl font-black text-vupay-primaire">Créer mon profil</h1>
      <p className="mt-1 text-sm text-vupay-doux">Ces informations servent à vous proposer des campagnes adaptées.</p>
      <FormulaireInscription
        paysParDefaut={pays ?? "ML"}
        espaceParDefaut={searchParams.espace === "annonceur" ? "annonceur" : "diffuseur"}
        suite={searchParams.suite ?? ""}
      />
    </main>
  );
}
