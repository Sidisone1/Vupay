import Link from "next/link";
import { redirect } from "next/navigation";
import { ListeRetraits, champsRetrait } from "@/components/ListeRetraits";
import { supabaseServeur } from "@/lib/supabase/server";

export default async function Retraits() {
  const client = supabaseServeur();
  const { data: { user } } = await client.auth.getUser();
  if (!user) redirect("/connexion?suite=/diffuseur/retraits");
  const { data } = await client.from("withdrawals").select(champsRetrait).eq("profil_id", user.id)
    .order("cree_le",{ ascending:false }).order("id").limit(50);
  return <main className="mx-auto max-w-lg px-5 py-6"><Link href="/diffuseur">← Mon espace</Link>
    <h1 className="my-4 text-2xl font-black">Mes retraits</h1>
    <p className="mb-3">Les nouvelles demandes ouvriront après la validation des paiements Mobile Money.</p>
    <h2 className="my-2 font-bold">50 derniers retraits</h2><ListeRetraits retraits={data} />
  </main>;
}
