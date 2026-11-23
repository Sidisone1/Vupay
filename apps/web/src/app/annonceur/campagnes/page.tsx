import Link from "next/link";
import { redirect } from "next/navigation";
import { STATUTS } from "@/lib/campagnes";
import { supabaseServeur } from "@/lib/supabase/server";
import type { StatutCampagne } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function MesCampagnes() {
  const client = supabaseServeur();
  const {
    data: { user },
  } = await client.auth.getUser();
  if (!user) redirect("/connexion?suite=/annonceur/campagnes");
  const { data } = await client
    .from("campaigns")
    .select("id, titre, statut, cree_le, advertisers!inner(proprietaire_id)")
    .eq("advertisers.proprietaire_id", user.id)
    .order("cree_le", { ascending: false });
  const campagnes = (data ?? []) as { id: string; titre: string; statut: StatutCampagne; cree_le: string }[];

  return (
    <main className="mx-auto min-h-screen max-w-lg bg-vupay-fond px-5 py-6 text-vupay-encre">
      <Link href="/annonceur" className="text-sm font-bold text-vupay-primaire">
        ← Mon espace
      </Link>
      <h1 className="mt-2 text-2xl font-black text-vupay-primaire">Mes campagnes</h1>
      <Link href="/annonceur/campagnes/nouvelle" className="mt-4 flex min-h-12 items-center justify-center rounded-2xl bg-vupay-primaire font-bold text-white">
        + Créer une campagne
      </Link>
      {campagnes.length === 0 && <p className="mt-6 rounded-2xl bg-white p-4 text-center text-sm">Aucune campagne pour l&apos;instant.</p>}
      <ul className="mt-4 grid gap-2">
        {campagnes.map((c) => (
          <li key={c.id}>
            <Link href={`/annonceur/campagnes/${c.id}`} className={`flex min-h-14 items-center justify-between gap-3 rounded-2xl border-2 bg-white px-4 py-3 ${STATUTS[c.statut].couleur}`}>
              <span className="min-w-0 truncate font-bold">{c.titre}</span>
              <span className="shrink-0 text-sm">{STATUTS[c.statut].libelle}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
