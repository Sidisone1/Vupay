import { CadreAdmin, FormulaireDecision, Message } from "@/components/admin/CadreAdmin";
import { MOTIFS_ENTREPRISE, PAR_PAGE } from "@/lib/admin";
import { exigerAdmin, liensTemporaires } from "@/lib/supabase/admin";
import { NUMEROTATION } from "@/lib/telephone";
import type { Pays } from "@/lib/types";
import { deciderEntreprise } from "../actions";

export const dynamic = "force-dynamic";

type Demande = {
  id: string;
  raison_sociale: string;
  pays: Pays;
  secteur: string | null;
  rccm: string | null;
  nif: string | null;
  chemin_document: string | null;
  cree_le: string;
  proprietaire: { telephone: string } | null;
};

export default async function AdminEntreprises({ searchParams }: { searchParams: { fait?: string; erreur?: string } }) {
  const { client } = await exigerAdmin("verifier_entreprises");
  const { data, count } = await client
    .from("advertisers")
    .select(
      "id, raison_sociale, pays, secteur, rccm, nif, chemin_document, cree_le, proprietaire:profiles!advertisers_proprietaire_id_fkey(telephone)",
      { count: "exact" },
    )
    .eq("statut_verification", "en_attente")
    .order("cree_le")
    .limit(PAR_PAGE);
  const demandes = (data ?? []) as unknown as Demande[];
  const liens = await liensTemporaires(client, "entreprises", demandes.flatMap((d) => (d.chemin_document ? [d.chemin_document] : [])));

  return (
    <CadreAdmin titre="Vérifications d'entreprise">
      <p className="mt-1 text-sm text-vupay-doux">
        {count ?? 0} demande{(count ?? 0) > 1 ? "s" : ""} en attente{(count ?? 0) > PAR_PAGE ? ` (les ${PAR_PAGE} plus anciennes affichées)` : ""}.
      </p>
      {searchParams.fait && <Message type="ok" texte={searchParams.fait === "valide" ? "Entreprise vérifiée." : "Demande refusée, le motif est visible par l'annonceur."} />}
      {searchParams.erreur === "motif" && <Message type="erreur" texte="Un refus doit être motivé (5 caractères minimum)." />}
      {searchParams.erreur === "base" && <Message type="erreur" texte="Cette demande a déjà été traitée ou n'existe plus." />}

      {demandes.length === 0 && <p className="mt-6 rounded-2xl bg-white p-4 text-center">Aucune entreprise à vérifier. 👍</p>}

      <ul className="mt-4 grid gap-4">
        {demandes.map((d) => {
          const url = d.chemin_document ? liens[d.chemin_document] : undefined;
          const estPdf = d.chemin_document?.endsWith(".pdf");
          return (
            <li key={d.id} className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-lg font-bold">{d.raison_sociale}</p>
              <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-3 text-sm">
                <dt className="text-vupay-doux">Pays</dt>
                <dd>{NUMEROTATION[d.pays]?.nom ?? d.pays}</dd>
                {d.secteur && (
                  <>
                    <dt className="text-vupay-doux">Secteur</dt>
                    <dd>{d.secteur}</dd>
                  </>
                )}
                <dt className="text-vupay-doux">RCCM</dt>
                <dd className="break-all font-bold">{d.rccm ?? "—"}</dd>
                <dt className="text-vupay-doux">NIF</dt>
                <dd className="break-all font-bold">{d.nif ?? "—"}</dd>
                <dt className="text-vupay-doux">Contact</dt>
                <dd>{d.proprietaire?.telephone ?? "—"}</dd>
                <dt className="text-vupay-doux">Demande</dt>
                <dd>{new Date(d.cree_le).toLocaleDateString("fr-FR")}</dd>
              </dl>
              <div className="mt-3">
                {!url ? (
                  <p className="rounded-lg bg-vupay-sable p-3 text-xs">Justificatif indisponible</p>
                ) : estPdf ? (
                  <a href={url} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center rounded-xl border-2 border-vupay-primaire font-bold text-vupay-primaire">
                    📄 Ouvrir le justificatif (PDF)
                  </a>
                ) : (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={url} alt="Justificatif de l'entreprise" loading="lazy" className="max-h-80 w-full rounded-lg bg-vupay-sable object-contain" />
                  </a>
                )}
              </div>
              <p className="mt-2 text-xs text-vupay-doux">Vérifiez que le nom et le numéro saisis correspondent au justificatif.</p>
              <FormulaireDecision action={deciderEntreprise} id={d.id} motifs={MOTIFS_ENTREPRISE} />
            </li>
          );
        })}
      </ul>
    </CadreAdmin>
  );
}
