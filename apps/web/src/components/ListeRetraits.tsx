const etats: Record<string, string> = {
  demande: "Demandé", a_valider: "À valider", en_cours: "En cours", paye: "Payé", echoue: "Échoué", annule: "Annulé",
};

export interface Retrait { id: string; montant: string; frais: string; statut: string; operateur: string; cree_le: string }
export function ListeRetraits({ retraits }: { retraits: Retrait[] | null }) {
  if (!retraits) return <p role="alert">Le suivi des retraits est indisponible.</p>;
  if (!retraits.length) return <p>Aucun retrait enregistré.</p>;
  return <ul className="grid gap-2">{retraits.map(r => <li key={r.id} className="rounded-xl bg-white p-3">
    <strong>{r.montant} FCFA · {etats[r.statut] ?? r.statut}</strong>
    <p>{r.operateur} · Frais {r.frais} FCFA</p>
    <small>{new Date(r.cree_le).toLocaleDateString("fr-FR", { timeZone: "Africa/Bamako" })} · {r.id}</small>
  </li>)}</ul>;
}
export const champsRetrait = "id,montant::text,frais::text,statut,operateur,cree_le";
