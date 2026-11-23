import Link from "next/link";
import { CadreAdmin, FormulaireDecision, Message } from "@/components/admin/CadreAdmin";
import { FicheProduit } from "@/components/FicheProduit";
import { MOTIFS_CAMPAGNE, PAR_PAGE } from "@/lib/admin";
import { libelleAction, type ActionContact } from "@/lib/contacts";
import { exigerAdmin } from "@/lib/supabase/admin";
import { urlPhotoProduit } from "@/lib/supabase/photos";
import type { StatutCampagne, StatutKyc } from "@/lib/types";
import { basculerPause, deciderCampagne } from "../actions";

export const dynamic = "force-dynamic";

type Campagne = {
  id: string;
  titre: string;
  texte: string | null;
  prix: number | null;
  chemin_creatif: string | null;
  debut: string | null;
  fin: string | null;
  slug: string;
  statut: StatutCampagne;
  advertisers: { raison_sociale: string; statut_verification: StatutKyc };
  campaign_destinations: { type: ActionContact; url: string; libelle: string }[];
};

const CHAMPS =
  "id, titre, texte, prix, chemin_creatif, debut, fin, slug, statut, advertisers(raison_sociale, statut_verification), campaign_destinations(type, url, libelle)";

const MESSAGES: Record<string, string> = {
  valide: "Campagne publiée.",
  refuse: "Campagne refusée, le motif est visible par l'annonceur.",
  pause: "Campagne mise en pause : ses boutons sont désactivés.",
  relance: "Campagne relancée.",
};

export default async function AdminCampagnes({ searchParams }: { searchParams: { fait?: string; erreur?: string } }) {
  const { client } = await exigerAdmin("moderer_campagnes");
  const [{ data: attente, count }, { data: publiees }] = await Promise.all([
    client.from("campaigns").select(CHAMPS, { count: "exact" }).eq("statut", "en_moderation").order("cree_le").limit(PAR_PAGE),
    client.from("campaigns").select("id, titre, slug, statut, advertisers(raison_sociale)").in("statut", ["active", "en_pause"]).order("modere_le", { ascending: false }).limit(PAR_PAGE),
  ]);
  const campagnes = (attente ?? []) as unknown as Campagne[];
  const enLigne = (publiees ?? []) as unknown as Pick<Campagne, "id" | "titre" | "slug" | "statut" | "advertisers">[];

  return (
    <CadreAdmin titre="Modération des campagnes">
      <p className="mt-1 text-sm text-vupay-doux">
        {count ?? 0} campagne{(count ?? 0) > 1 ? "s" : ""} à modérer.
      </p>
      {searchParams.fait && MESSAGES[searchParams.fait] && <Message type="ok" texte={MESSAGES[searchParams.fait]} />}
      {searchParams.erreur === "motif" && <Message type="erreur" texte="Un refus doit être motivé (5 caractères minimum)." />}
      {searchParams.erreur === "base" && <Message type="erreur" texte="Cette campagne a déjà été traitée ou a changé de statut." />}
      {campagnes.length === 0 && <p className="mt-6 rounded-2xl bg-white p-4 text-center">Aucune campagne à modérer. 👍</p>}

      <ul className="mt-4 grid gap-6">
        {campagnes.map((c) => (
          <li key={c.id} className="rounded-3xl border-2 border-vupay-ocre bg-white p-3">
            <p className="px-1 text-sm">
              <strong>{c.advertisers.raison_sociale}</strong>
              {c.advertisers.statut_verification !== "valide" && <span className="ml-2 font-bold text-vupay-erreur">⚠ entreprise non vérifiée</span>}
              <br />
              <span className="text-vupay-doux">
                Diffusion du {c.debut ? new Date(c.debut).toLocaleDateString("fr-FR") : "?"} au {c.fin ? new Date(c.fin).toLocaleDateString("fr-FR") : "?"}
              </span>
            </p>
            <div className="mt-2">
              <FicheProduit
                fiche={{ titre: c.titre, description: c.texte, prix: c.prix, photo: urlPhotoProduit(c.chemin_creatif), annonceur: c.advertisers.raison_sociale, disponible: true, actions: c.campaign_destinations }}
                lien={null}
              />
            </div>
            <h3 className="mt-3 px-1 text-sm font-bold">Où mènent les boutons</h3>
            <ul className="mt-1 grid gap-1 px-1 text-sm">
              {c.campaign_destinations.map((d) => (
                <li key={d.type} className="rounded-lg bg-vupay-fond p-2">
                  <span className="font-bold">{libelleAction(d.type)}</span>
                  <br />
                  <span className="break-all">
                    <strong>{new URL(d.url).hostname}</strong>
                    {d.url.slice(`https://${new URL(d.url).hostname}`.length)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-2 px-1 text-xs text-vupay-doux">Vérifiez que chaque bouton mène bien à l&apos;annonceur et que la fiche ne promet rien de trompeur.</p>
            <FormulaireDecision action={deciderCampagne} id={c.id} motifs={MOTIFS_CAMPAGNE} libelleValider="Publier" />
          </li>
        ))}
      </ul>

      {enLigne.length > 0 && (
        <>
          <h2 className="mt-8 text-lg font-black">En ligne</h2>
          <ul className="mt-2 grid gap-2">
            {enLigne.map((c) => (
              <li key={c.id} className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-white p-3">
                <span className="min-w-0">
                  <Link href={`/p/${c.slug}`} className="font-bold text-vupay-primaire">
                    {c.titre}
                  </Link>
                  <span className="block text-xs text-vupay-doux">
                    {c.advertisers.raison_sociale} · {c.statut === "active" ? "publiée" : "en pause"}
                  </span>
                </span>
                <form action={basculerPause}>
                  <input type="hidden" name="id" value={c.id} />
                  <input type="hidden" name="pause" value={c.statut === "active" ? "oui" : "non"} />
                  <button className={`min-h-11 rounded-xl px-3 text-sm font-bold ${c.statut === "active" ? "border-2 border-vupay-erreur text-vupay-erreur" : "bg-vupay-primaire text-white"}`}>
                    {c.statut === "active" ? "Mettre en pause" : "Relancer"}
                  </button>
                </form>
              </li>
            ))}
          </ul>
        </>
      )}
    </CadreAdmin>
  );
}
