import { CadreAdmin, FormulaireDecision, Message } from "@/components/admin/CadreAdmin";
import { MOTIFS_KYC, PAR_PAGE } from "@/lib/admin";
import { exigerAdmin, liensTemporaires } from "@/lib/supabase/admin";
import { NUMEROTATION } from "@/lib/telephone";
import type { Pays } from "@/lib/types";
import { deciderKyc } from "../actions";

export const dynamic = "force-dynamic";

type Dossier = {
  id: string;
  chemin_piece: string;
  chemin_selfie: string;
  cree_le: string;
  profil: { telephone: string; pays: Pays; ville: string | null } | null;
};

export default async function AdminKyc({ searchParams }: { searchParams: { fait?: string; erreur?: string } }) {
  const { client } = await exigerAdmin("valider_kyc");
  // Les plus anciens d'abord : premier arrivé, premier servi.
  const { data, count } = await client
    .from("kyc_documents")
    .select("id, chemin_piece, chemin_selfie, cree_le, profil:profiles!kyc_documents_profil_id_fkey(telephone, pays, ville)", { count: "exact" })
    .eq("statut", "en_attente")
    .order("cree_le")
    .limit(PAR_PAGE);
  const dossiers = (data ?? []) as unknown as Dossier[];
  const liens = await liensTemporaires(client, "kyc", dossiers.flatMap((d) => [d.chemin_piece, d.chemin_selfie]));

  return (
    <CadreAdmin titre="Vérifications d'identité">
      <p className="mt-1 text-sm text-vupay-doux">
        {count ?? 0} dossier{(count ?? 0) > 1 ? "s" : ""} en attente{(count ?? 0) > PAR_PAGE ? ` (les ${PAR_PAGE} plus anciens affichés)` : ""}.
      </p>
      {searchParams.fait && <Message type="ok" texte={searchParams.fait === "valide" ? "Identité validée." : "Dossier refusé, le motif est visible par le diffuseur."} />}
      {searchParams.erreur === "motif" && <Message type="erreur" texte="Un refus doit être motivé (5 caractères minimum)." />}
      {searchParams.erreur === "base" && <Message type="erreur" texte="Ce dossier a déjà été traité ou n'existe plus." />}

      {dossiers.length === 0 && <p className="mt-6 rounded-2xl bg-white p-4 text-center">Aucun dossier à vérifier. 👍</p>}

      <ul className="mt-4 grid gap-4">
        {dossiers.map((d) => (
          <li key={d.id} className="rounded-2xl bg-white p-4 shadow-sm">
            <p className="font-bold">{d.profil?.telephone ?? "Profil introuvable"}</p>
            <p className="text-sm text-vupay-doux">
              {d.profil ? NUMEROTATION[d.profil.pays]?.nom : ""}
              {d.profil?.ville ? ` · ${d.profil.ville}` : ""} · déposé le {new Date(d.cree_le).toLocaleDateString("fr-FR")}
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Piece titre="Pièce" url={liens[d.chemin_piece]} />
              <Piece titre="Selfie" url={liens[d.chemin_selfie]} />
            </div>
            <FormulaireDecision action={deciderKyc} id={d.id} motifs={MOTIFS_KYC} />
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-vupay-doux">Les liens vers les pièces expirent après 5 minutes. Chaque décision est inscrite au journal d&apos;audit.</p>
    </CadreAdmin>
  );
}

function Piece({ titre, url }: { titre: string; url?: string }) {
  return (
    <figure className="min-w-0">
      <figcaption className="text-xs font-bold">{titre}</figcaption>
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="mt-1 block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt={titre} loading="lazy" className="aspect-[4/3] w-full rounded-lg bg-vupay-sable object-cover" />
        </a>
      ) : (
        <p className="mt-1 rounded-lg bg-vupay-sable p-3 text-xs">Fichier indisponible</p>
      )}
    </figure>
  );
}
