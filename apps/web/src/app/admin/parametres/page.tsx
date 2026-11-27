import { redirect } from "next/navigation";
import { CadreAdmin } from "@/components/admin/CadreAdmin";
import { exigerAdmin } from "@/lib/supabase/admin";
import { ACTIONS_CONTACT, libelleAction, type ActionContact } from "@/lib/contacts";

async function publier(form: FormData) {
  "use server";
  const { client } = await exigerAdmin("modifier_parametres");
  const campagne = String(form.get("campagne") ?? "").trim();
  const type = String(form.get("type")) as ActionContact;
  const prix = String(form.get("prix") ?? "");
  const gain = String(form.get("gain") ?? "");
  const entier = /^\d{1,15}$/;
  if (!/^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/i.test(campagne) ||
      !ACTIONS_CONTACT.includes(type) || !entier.test(prix) || !entier.test(gain) || Number(gain) > Number(prix)) {
    redirect("/admin/parametres?etat=invalide");
  }
  const { error } = await client.rpc("publier_tarif_action", { p_campagne: campagne, p_type: type, p_prix: prix, p_gain: gain });
  redirect("/admin/parametres?etat=" + (error ? "erreur" : "publie"));
}

export default async function Parametres({ searchParams }: { searchParams: { etat?: string } }) {
  const { client } = await exigerAdmin("modifier_parametres");
  const { data, error } = await client.from("tarifs_actions")
    .select("campagne_id,type,prix::text,gain::text,applicable_le").order("applicable_le", { ascending: false }).limit(20);
  return <CadreAdmin titre="Tarifs par action">
    <p className="mt-3">Chaque version concerne les futures actions d’une campagne. La marge correspond au prix annonceur diminué du gain diffuseur.</p>
    {searchParams.etat && <p role="status" className="mt-2 font-bold">{searchParams.etat === "publie" ? "Tarif enregistré." : "Enregistrement impossible. Vérifiez la campagne et les montants."}</p>}
    <form className="my-4 grid gap-3 rounded-xl bg-white p-4" action={publier}>
      <label>Identifiant de la campagne<input name="campagne" className="block w-full rounded border p-2" required /></label>
      <label>Action<select name="type" className="block w-full rounded border p-2">
        {ACTIONS_CONTACT.map(t => <option value={t} key={t}>{libelleAction(t)}</option>)}</select></label>
      <label>Prix annonceur (FCFA)<input name="prix" inputMode="numeric" pattern="[0-9]{1,15}" required className="block w-full rounded border p-2" /></label>
      <label>Gain diffuseur (FCFA)<input name="gain" inputMode="numeric" pattern="[0-9]{1,15}" required className="block w-full rounded border p-2" /></label>
      <button className="rounded-xl bg-vupay-primaire p-3 font-bold text-white">Publier cette version</button>
    </form>
    <h2 className="font-bold">20 dernières versions</h2>
    {error ? <p role="alert">Historique indisponible.</p> : !data?.length ? <p>Aucun tarif configuré.</p> :
      <ul>{data.map(t => <li className="my-2 break-words rounded-xl bg-white p-3" key={t.campagne_id + t.type + t.applicable_le}>
        {libelleAction(t.type)} · {t.prix} FCFA dont {t.gain} FCFA au diffuseur
        <small className="block">{t.campagne_id} · {new Date(t.applicable_le).toLocaleString("fr-FR", { timeZone: "Africa/Bamako" })}</small>
      </li>)}</ul>}
  </CadreAdmin>;
}
