import Link from "next/link";
import { redirect } from "next/navigation";
import { peutDemanderVerification } from "@/lib/pieces";
import { supabaseServeur } from "@/lib/supabase/server";
import { NUMEROTATION } from "@/lib/telephone";
import type { Pays, StatutKyc } from "@/lib/types";
import { FormulaireEntreprise, type EntrepriseExistante } from "./FormulaireEntreprise";

const ETATS: Record<StatutKyc, { titre: string; texte: string; bord: string }> = {
  non_soumis: { titre: "Entreprise non vérifiée", texte: "Envoyez un justificatif pour pouvoir publier des campagnes.", bord: "border-vupay-trait" },
  en_attente: { titre: "Vérification en cours", texte: "Un administrateur vérifie votre justificatif. Vous pouvez préparer vos campagnes en brouillon.", bord: "border-vupay-ocre" },
  valide: { titre: "Entreprise vérifiée", texte: "Vos campagnes peuvent partir en modération.", bord: "border-vupay-succes" },
  refuse: { titre: "Vérification refusée", texte: "Corrigez le problème indiqué et envoyez un nouveau justificatif.", bord: "border-vupay-erreur" },
};

export default async function Entreprise() {
  const client = supabaseServeur();
  const {
    data: { user },
  } = await client.auth.getUser();
  if (!user) redirect("/connexion?suite=/annonceur/entreprise");

  const [{ data: entreprise }, { data: profil }] = await Promise.all([
    client
      .from("advertisers")
      .select("id, raison_sociale, pays, secteur, rccm, nif, statut_verification, motif_refus")
      .eq("proprietaire_id", user.id)
      .order("cree_le")
      .limit(1)
      .maybeSingle(),
    client.from("profiles").select("pays").eq("id", user.id).single(),
  ]);
  const statut = (entreprise?.statut_verification ?? "non_soumis") as StatutKyc;
  const etat = ETATS[statut];

  return (
    <main className="mx-auto min-h-screen max-w-lg bg-vupay-fond px-5 py-6 text-vupay-encre">
      <Link href="/annonceur" className="text-sm font-bold text-vupay-primaire">
        ← Mon espace
      </Link>
      <h1 className="mt-2 text-2xl font-black text-vupay-primaire">Mon entreprise</h1>

      <section className={`mt-4 rounded-2xl border-2 bg-white p-4 ${etat.bord}`} aria-live="polite">
        <h2 className="font-bold">{etat.titre}</h2>
        <p className="mt-1 text-sm">{etat.texte}</p>
        {statut === "refuse" && entreprise?.motif_refus && (
          <p className="mt-2 text-sm">
            <strong>Motif :</strong> {entreprise.motif_refus}
          </p>
        )}
      </section>

      {peutDemanderVerification(statut) ? (
        <FormulaireEntreprise
          utilisateurId={user.id}
          paysParDefaut={(profil?.pays ?? "ML") as Pays}
          existante={(entreprise as EntrepriseExistante | null) ?? null}
        />
      ) : (
        entreprise && (
          <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 rounded-2xl bg-white p-4 text-sm">
            <dt className="text-vupay-doux">Nom</dt>
            <dd className="font-bold">{entreprise.raison_sociale}</dd>
            <dt className="text-vupay-doux">Pays</dt>
            <dd>{NUMEROTATION[entreprise.pays as Pays]?.nom ?? entreprise.pays}</dd>
            {entreprise.secteur && (
              <>
                <dt className="text-vupay-doux">Secteur</dt>
                <dd>{entreprise.secteur}</dd>
              </>
            )}
            {entreprise.rccm && (
              <>
                <dt className="text-vupay-doux">RCCM</dt>
                <dd className="break-all">{entreprise.rccm}</dd>
              </>
            )}
            {entreprise.nif && (
              <>
                <dt className="text-vupay-doux">NIF</dt>
                <dd className="break-all">{entreprise.nif}</dd>
              </>
            )}
          </dl>
        )
      )}

      <p className="mt-6 text-xs text-vupay-doux">
        Le justificatif est stocké dans un espace privé, consulté uniquement par les administrateurs chargés de la vérification.
      </p>
    </main>
  );
}
