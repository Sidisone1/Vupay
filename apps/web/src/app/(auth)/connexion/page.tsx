import Image from "next/image";
import Link from "next/link";
import { supabaseConfigure } from "@/lib/supabase/utilisateur";
import { FormulaireConnexion } from "./FormulaireConnexion";

export default function Connexion({ searchParams }: { searchParams: { suite?: string; espace?: string } }) {
  const espace = searchParams.espace === "annonceur" ? "annonceur" : searchParams.espace === "diffuseur" ? "diffuseur" : undefined;
  return (
    <main className="mx-auto min-h-screen max-w-lg bg-vupay-fond px-5 py-6 text-vupay-encre">
      <Link href="/" className="text-sm font-bold text-vupay-primaire">
        ← Accueil
      </Link>
      <div className="mt-4 flex items-center gap-3">
        <Image src="/icones/confiance/code-sms.png" width={48} height={48} alt="" className="h-12 w-12 object-contain" />
        <h1 className="text-2xl font-black text-vupay-primaire">Connexion</h1>
      </div>
      <p className="mt-2 text-sm text-vupay-doux">
        Entrez votre numéro : vous recevez un code à 6 chiffres. Pas de mot de passe à retenir.
      </p>
      {supabaseConfigure() ? (
        <FormulaireConnexion suite={searchParams.suite ?? null} espace={espace} />
      ) : (
        <p role="alert" className="mt-6 rounded-2xl border border-vupay-alerte bg-white p-4 text-sm">
          La connexion n&apos;est pas encore active : le projet Supabase n&apos;est pas configuré
          (voir <code>apps/web/.env.example</code>).
        </p>
      )}
    </main>
  );
}
