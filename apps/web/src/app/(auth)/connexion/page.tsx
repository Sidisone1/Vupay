import Link from "next/link";
import { canalOtp, supabaseConfigure } from "@/lib/supabase/config";
import { FormulaireConnexion } from "./FormulaireConnexion";

export const dynamic = "force-dynamic";
export const metadata = { title: "Connexion — Vupay" };

export default function Connexion({ searchParams }: { searchParams: { espace?: string; suite?: string } }) {
  const espace = searchParams.espace === "annonceur" ? "annonceur" : searchParams.espace === "diffuseur" ? "diffuseur" : null;
  return (
    <main className="mx-auto min-h-screen max-w-lg bg-vupay-fond px-5 py-6 text-vupay-encre">
      <Link href="/" className="text-sm font-semibold text-vupay-primaire">← Accueil</Link>
      <h1 className="mt-4 text-2xl font-black text-vupay-primaire">Connexion</h1>
      <p className="mt-1 text-sm text-vupay-doux">
        {espace === "annonceur" ? "Espace entreprise. " : espace === "diffuseur" ? "Espace diffuseur. " : ""}
        Pas de mot de passe : un code vous est envoyé {canalOtp() === "whatsapp" ? "sur WhatsApp" : "par SMS"}.
      </p>
      {supabaseConfigure() ? (
        <FormulaireConnexion canal={canalOtp()} espace={espace} suite={searchParams.suite ?? null} />
      ) : (
        <p role="alert" className="mt-6 rounded-2xl border border-vupay-trait bg-white p-4 text-sm">
          La connexion n&apos;est pas encore branchée : les variables Supabase manquent (voir <code>.env.example</code>).
        </p>
      )}
    </main>
  );
}
