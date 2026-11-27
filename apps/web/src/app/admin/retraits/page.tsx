import { CadreAdmin } from "@/components/admin/CadreAdmin";
import { ListeRetraits, champsRetrait } from "@/components/ListeRetraits";
import { exigerAdmin } from "@/lib/supabase/admin";

export default async function Retraits() {
  const { client } = await exigerAdmin("gerer_retraits");
  const { data } = await client.from("withdrawals").select(champsRetrait).order("cree_le",{ascending:false}).order("id").limit(50);
  return <CadreAdmin titre="Suivi des retraits"><h2 className="my-3 font-bold">50 dernières demandes</h2><ListeRetraits retraits={data} /></CadreAdmin>;
}
