import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { FicheProduit, type DonneesFiche } from "@/components/FicheProduit";
import { TableauActions } from "@/components/TableauActions";
import type { ActionContact } from "@/lib/contacts";
import type { Resume } from "@/lib/statistiques";
import { supabaseServeur } from "@/lib/supabase/server";
import { urlPhotoProduit } from "@/lib/supabase/photos";
import { obtenirLien } from "./actions";
import { PartageLien } from "./PartageLien";

export const dynamic = "force-dynamic";

const RESEAUX = { whatsapp: "Statut WhatsApp", instagram: "Story Instagram", facebook: "Story Facebook" } as const;
type Reseau = keyof typeof RESEAUX;

export default async function DetailCampagne({ params, searchParams }: { params: { id: string }; searchParams: { erreur?: string } }) {
  if (!/^[0-9a-f-]{36}$/.test(params.id)) notFound();
  const client = supabaseServeur();
  const {
    data: { user },
  } = await client.auth.getUser();
  if (!user) redirect(`/connexion?suite=/diffuseur/campagnes/${params.id}`);

  const { data: campagne } = await client.from("campaigns").select("id, slug, statut").eq("id", params.id).maybeSingle();
  if (!campagne) notFound();
  const [{ data: brute }, { data: liens }] = await Promise.all([
    client.rpc("fiche_publique", { p_slug: campagne.slug }),
    client.from("assignments").select("id, reseau, code_lien").eq("campagne_id", params.id).eq("diffuseur_id", user.id),
  ]);
  if (!brute) notFound();
  const fiche = { ...brute, photo: urlPhotoProduit(brute.photo) } as DonneesFiche;
  const mesLiens = (liens ?? []) as { id: string; reseau: Reseau; code_lien: string }[];

  const resultats = mesLiens.length > 0
    ? await client.rpc("resultats_campagne", { p_campagne: params.id, p_diffuseur: true })
    : null;
  const resume: (Resume & { liens: number }) | null = resultats?.data ?? null;
  const base = process.env.NEXT_PUBLIC_APP_URL ?? "https://vupay.app";
  const reseauxRestants = (Object.keys(RESEAUX) as Reseau[]).filter((r) => !mesLiens.some((l) => l.reseau === r));

  return (
    <main className="mx-auto min-h-screen max-w-lg bg-vupay-fond px-5 py-6 text-vupay-encre">
      <Link href="/diffuseur/campagnes" className="text-sm font-bold text-vupay-primaire">
        ← Campagnes
      </Link>

      <h1 className="mt-2 text-2xl font-black text-vupay-primaire">Mes liens</h1>
      {searchParams.erreur && (
        <p role="alert" className="mt-2 rounded-xl bg-white p-3 text-sm font-bold text-vupay-erreur">
          Impossible d&apos;obtenir le lien : la campagne n&apos;est plus disponible, ou c&apos;est votre propre campagne.
        </p>
      )}
      {mesLiens.length === 0 && <p className="mt-1 text-sm">Obtenez votre lien personnel pour le réseau où vous publiez.</p>}
      <div className="mt-3 grid gap-3">
        {mesLiens.map((l) => (
          <PartageLien key={l.id} reseau={RESEAUX[l.reseau]} adresse={`${base}/c/${l.code_lien}`} titre={fiche.titre} />
        ))}
      </div>
      {fiche.disponible && reseauxRestants.length > 0 && (
        <form action={obtenirLien} className="mt-3 grid gap-2 min-[400px]:grid-cols-[minmax(0,1fr)_auto]">
          <input type="hidden" name="campagne" value={params.id} />
          <label htmlFor="reseau" className="sr-only">
            Réseau
          </label>
          <select id="reseau" name="reseau" className="min-h-12 w-full min-w-0 rounded-xl border border-vupay-trait bg-white px-2">
            {reseauxRestants.map((r) => (
              <option key={r} value={r}>
                {RESEAUX[r]}
              </option>
            ))}
          </select>
          <button className="min-h-12 rounded-xl bg-vupay-primaire px-4 font-bold text-white">Obtenir mon lien</button>
        </form>
      )}

      {mesLiens.length > 0 && (
        <>
          <h2 className="mt-8 text-lg font-black">Mes résultats</h2>
          <div className="mt-2">
            {resume ? <TableauActions resume={resume} campagneId={params.id} /> : <p role="alert">Les statistiques sont momentanément indisponibles.</p>}
          </div>
          <p className="mt-2 text-xs text-vupay-doux">
            La rémunération des actions validées sera calculée à l&apos;étape « Finance » (tarifs en cours de définition).
          </p>
        </>
      )}

      <h2 className="mt-8 text-lg font-black">L&apos;offre</h2>
      <div className="mt-2">
        <FicheProduit fiche={fiche} lien={null} />
      </div>
      <p className="mt-3 text-xs text-vupay-doux">
        Règles : un clic sur votre propre lien ne compte pas ; une même personne ne compte qu&apos;une fois par bouton ; les visites
        seules ne sont pas payées. Mentionnez « Publicité » dans votre statut.
      </p>
    </main>
  );
}
