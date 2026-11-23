import Link from "next/link";
import { prixPublic } from "@/lib/campagnes";
import { supabaseServeur } from "@/lib/supabase/server";
import { urlPhotoProduit } from "@/lib/supabase/photos";

export const dynamic = "force-dynamic";

export default async function CampagnesDisponibles() {
  const aujourdhui = new Date().toISOString().slice(0, 10);
  // La base ne montre aux diffuseurs que les campagnes publiées (RLS).
  const { data } = await supabaseServeur()
    .from("campaigns")
    .select("id, titre, prix, chemin_creatif, debut, fin")
    .eq("statut", "active")
    .order("modere_le", { ascending: false })
    .limit(50);
  type Ligne = { id: string; titre: string; prix: number | null; chemin_creatif: string | null; debut: string | null; fin: string | null };
  // Seulement les campagnes diffusables aujourd'hui (même règle que campagne_diffusable en base).
  const campagnes = ((data ?? []) as Ligne[]).filter((c) => (!c.debut || c.debut <= aujourdhui) && (!c.fin || c.fin >= aujourdhui));

  return (
    <main className="mx-auto min-h-screen max-w-lg bg-vupay-fond px-5 py-6 text-vupay-encre">
      <Link href="/diffuseur" className="text-sm font-bold text-vupay-primaire">
        ← Mon espace
      </Link>
      <h1 className="mt-2 text-2xl font-black text-vupay-primaire">Campagnes disponibles</h1>
      <p className="mt-1 text-sm text-vupay-doux">Choisissez une offre, obtenez votre lien personnel et partagez-le dans vos statuts.</p>
      {campagnes.length === 0 && <p className="mt-6 rounded-2xl bg-white p-4 text-center text-sm">Aucune campagne pour le moment. Revenez bientôt.</p>}
      <ul className="mt-4 grid grid-cols-2 gap-3">
        {campagnes.map((c) => {
          const photo = urlPhotoProduit(c.chemin_creatif);
          return (
            <li key={c.id}>
              <Link href={`/diffuseur/campagnes/${c.id}`} className="block overflow-hidden rounded-2xl bg-white shadow-sm">
                {photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={photo} alt="" loading="lazy" className="aspect-square w-full bg-vupay-sable object-cover" />
                ) : (
                  <div className="aspect-square w-full bg-vupay-sable" />
                )}
                <div className="p-2">
                  <p className="line-clamp-2 text-sm font-bold leading-tight">{c.titre}</p>
                  {c.prix !== null && <p className="text-sm font-black text-vupay-primaire">{prixPublic(c.prix)}</p>}
                  {c.fin && <p className="text-[11px] text-vupay-doux">jusqu&apos;au {new Date(c.fin).toLocaleDateString("fr-FR")}</p>}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
