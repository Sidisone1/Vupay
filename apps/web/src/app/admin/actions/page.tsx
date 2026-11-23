import { CadreAdmin, FormulaireDecision, Message } from "@/components/admin/CadreAdmin";
import { MOTIFS_REFUS_ACTION, PAR_PAGE } from "@/lib/admin";
import { libelleAction, type ActionContact } from "@/lib/contacts";
import { exigerAdmin } from "@/lib/supabase/admin";
import { libelleMotif } from "@/lib/tracabilite";
import { deciderAction } from "../actions";

export const dynamic = "force-dynamic";

type Action = {
  id: number;
  type: ActionContact;
  motifs: string[];
  cree_le: string;
  empreinte: string;
  campaigns: { titre: string } | null;
  profiles: { telephone: string } | null;
};

export default async function AdminActions({ searchParams }: { searchParams: { fait?: string; erreur?: string } }) {
  const { client } = await exigerAdmin("moderer_campagnes");
  const { data, count } = await client
    .from("contact_actions")
    .select("id, type, motifs, cree_le, empreinte, campaigns(titre), profiles!contact_actions_diffuseur_id_fkey(telephone)", { count: "exact" })
    .eq("statut", "en_attente")
    .order("cree_le")
    .limit(PAR_PAGE);
  const actions = (data ?? []) as unknown as Action[];

  return (
    <CadreAdmin titre="Actions à vérifier">
      <p className="mt-1 text-sm text-vupay-doux">
        {count ?? 0} action{(count ?? 0) > 1 ? "s" : ""} en attente. L&apos;antifraude refuse seule les cas certains (robot, doublon, auto-clic…) ;
        ici arrivent les cas douteux, par exemple plusieurs personnes sur un même réseau mobile.
      </p>
      {searchParams.fait && <Message type="ok" texte={searchParams.fait === "valide" ? "Action retenue." : "Action refusée."} />}
      {searchParams.erreur === "motif" && <Message type="erreur" texte="Un refus doit être motivé (5 caractères minimum)." />}
      {searchParams.erreur === "base" && <Message type="erreur" texte="Cette action a déjà été décidée." />}
      {actions.length === 0 && <p className="mt-6 rounded-2xl bg-white p-4 text-center">Rien à vérifier. 👍</p>}

      <ul className="mt-4 grid gap-4">
        {actions.map((a) => (
          <li key={a.id} className="rounded-2xl bg-white p-4 shadow-sm">
            <p className="font-bold">
              {libelleAction(a.type)} · {a.campaigns?.titre ?? "Campagne"}
            </p>
            <p className="text-sm text-vupay-doux">
              Diffuseur {a.profiles?.telephone ?? "?"} · {new Date(a.cree_le).toLocaleString("fr-FR")} · appareil {a.empreinte.slice(0, 8)}
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm">
              {a.motifs.map((m) => (
                <li key={m}>{libelleMotif(m)}</li>
              ))}
            </ul>
            <FormulaireDecision action={deciderAction} id={String(a.id)} motifs={MOTIFS_REFUS_ACTION} libelleValider="Retenir l'action" />
          </li>
        ))}
      </ul>
    </CadreAdmin>
  );
}
