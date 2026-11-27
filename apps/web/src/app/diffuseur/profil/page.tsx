import Link from "next/link";
import { redirect } from "next/navigation";
import { supabaseServeur } from "@/lib/supabase/server";
import { NUMEROTATION } from "@/lib/telephone";
import type { Pays } from "@/lib/types";

async function enregistrer(form: FormData) {
  "use server";
  const client = supabaseServeur();
  const { data: { user } } = await client.auth.getUser();
  if (!user) redirect("/connexion?suite=/diffuseur/profil");
  const ville = String(form.get("ville") ?? "").trim();
  if (ville.length > 80) redirect("/diffuseur/profil?etat=erreur");
  const { error } = await client.from("profiles").update({ ville: ville || null }).eq("id", user.id).select("id").single();
  redirect("/diffuseur/profil?etat=" + (error ? "erreur" : "ok"));
}
export default async function Profil({ searchParams }: { searchParams: { etat?: string } }) {
  const client = supabaseServeur();
  const { data: { user } } = await client.auth.getUser();
  if (!user) redirect("/connexion?suite=/diffuseur/profil");
  const { data } = await client.from("profiles").select("ville,pays,telephone,code_parrain").eq("id",user.id).maybeSingle();
  return <main className="mx-auto max-w-lg px-5 py-6">
    <Link href="/diffuseur">← Mon espace</Link><h1 className="my-4 text-2xl font-black">Mon profil</h1>
    {data ? <>
      <p>{NUMEROTATION[data.pays as Pays]?.nom} · {data.telephone}</p>
      {data.code_parrain && <p>Code de parrainage · {data.code_parrain}</p>}
      <form action={enregistrer} className="my-4 grid gap-3 rounded-xl bg-white p-4">
        <label>Ville<input name="ville" defaultValue={data.ville ?? ""} maxLength={80} autoComplete="address-level2" className="block w-full rounded border p-2" /></label>
        <button className="rounded-xl bg-vupay-primaire p-3 font-bold text-white">Enregistrer</button>
      </form>
      {searchParams.etat && <p role="status">{searchParams.etat === "ok" ? "Profil enregistré." : "Modification impossible."}</p>}
      <Link href="/diffuseur/kyc">Vérification de mon identité →</Link>
    </> : <p role="alert">Profil indisponible.</p>}
  </main>;
}
