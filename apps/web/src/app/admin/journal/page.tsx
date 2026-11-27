import { CadreAdmin } from "@/components/admin/CadreAdmin";
import { exigerAdmin } from "@/lib/supabase/admin";

export default async function Journal() {
  const { client } = await exigerAdmin("voir_journal");
  const { data, error } = await client.from("ledger_entries").select("id::text,type,montant::text,disponible,reference,cree_le")
    .order("id", { ascending: false }).limit(50);
  return <CadreAdmin titre="Journal financier">
    <h2 className="my-3 font-bold">50 dernières écritures</h2>
    {error ? <p role="alert">Journal indisponible.</p> : !data?.length ? <p>Aucune écriture enregistrée.</p> :
      <ul className="grid gap-2">{data.map(e => <li key={e.id} className="break-words rounded-xl bg-white p-3">
        <strong>{e.montant} FCFA · {e.type.replace(/_/g," ")}</strong>
        <p>{e.disponible ? "Disponible" : "En attente"} · Écriture nº {e.id}</p>
        <small>{new Date(e.cree_le).toLocaleString("fr-FR", {timeZone:"Africa/Bamako"})} {e.reference}</small>
      </li>)}</ul>}
  </CadreAdmin>;
}
