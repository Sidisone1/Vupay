import Link from "next/link";
import { redirect } from "next/navigation";
import { etatKyc } from "@/lib/pieces";
import { supabaseServeur } from "@/lib/supabase/server";
import type { StatutKyc } from "@/lib/types";
import { FormulaireKyc } from "./FormulaireKyc";

const COULEURS: Record<StatutKyc, string> = {
  non_soumis: "border-vupay-trait",
  en_attente: "border-vupay-ocre",
  valide: "border-vupay-succes",
  refuse: "border-vupay-erreur",
};

export default async function Kyc() {
  const client = supabaseServeur();
  const {
    data: { user },
  } = await client.auth.getUser();
  if (!user) redirect("/connexion?suite=/diffuseur/kyc");

  const [{ data: profil }, { data: dossier }] = await Promise.all([
    client.from("profiles").select("statut_kyc").eq("id", user.id).single(),
    client.from("kyc_documents").select("statut, motif_refus").eq("profil_id", user.id).order("cree_le", { ascending: false }).limit(1).maybeSingle(),
  ]);
  const statut = (profil?.statut_kyc ?? "non_soumis") as StatutKyc;
  const etat = etatKyc(statut);

  return (
    <main className="mx-auto min-h-screen max-w-lg bg-vupay-fond px-5 py-6 text-vupay-encre">
      <Link href="/diffuseur" className="text-sm font-bold text-vupay-primaire">
        ← Mon espace
      </Link>
      <h1 className="mt-2 text-2xl font-black text-vupay-primaire">Vérification d&apos;identité</h1>

      <section className={`mt-4 rounded-2xl border-2 bg-white p-4 ${COULEURS[statut]}`} aria-live="polite">
        <h2 className="font-bold">{etat.titre}</h2>
        <p className="mt-1 text-sm">{etat.texte}</p>
        {statut === "refuse" && dossier?.motif_refus && (
          <p className="mt-2 text-sm">
            <strong>Motif :</strong> {dossier.motif_refus}
          </p>
        )}
      </section>

      {etat.peutDeposer && <FormulaireKyc utilisateurId={user.id} />}

      <p className="mt-6 text-xs text-vupay-doux">
        Vos pièces sont stockées dans un espace privé. Seuls les administrateurs chargés de la vérification
        peuvent les consulter. Elles ne sont jamais montrées aux annonceurs.
      </p>
    </main>
  );
}
