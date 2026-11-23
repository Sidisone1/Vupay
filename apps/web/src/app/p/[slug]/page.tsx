import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { FicheProduit, type DonneesFiche } from "@/components/FicheProduit";
import { supabaseServeur } from "@/lib/supabase/server";
import { urlPhotoProduit } from "@/lib/supabase/photos";
import { supabaseConfigure } from "@/lib/supabase/utilisateur";
import { codeLienValide } from "@/lib/tracabilite";

// Fiche produit publique : adresse stable vupay.app/p/<slug>, ouverte sans compte.
const FORME_SLUG = /^[0-9a-f]{12}$/;

const chargerFiche = cache(async (slug: string): Promise<DonneesFiche | null> => {
  if (!FORME_SLUG.test(slug) || !supabaseConfigure()) return null;
  const { data } = await supabaseServeur().rpc("fiche_publique", { p_slug: slug });
  if (!data) return null;
  return { ...data, photo: urlPhotoProduit(data.photo) } as DonneesFiche;
});

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const fiche = await chargerFiche(params.slug);
  if (!fiche) return { title: "Offre introuvable · Vupay", robots: { index: false } };
  const description = fiche.description?.slice(0, 150) ?? `Publicité de ${fiche.annonceur}`;
  return {
    title: `${fiche.titre} · ${fiche.annonceur}`,
    description,
    robots: { index: false }, // fiches publicitaires temporaires : pas d'indexation
    // Aperçu affiché par WhatsApp quand le lien est partagé dans un statut.
    openGraph: { title: fiche.titre, description, images: fiche.photo ? [fiche.photo] : [] },
  };
}

export default async function PageFiche({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { indisponible?: string; via?: string };
}) {
  const fiche = await chargerFiche(params.slug);
  if (!fiche) notFound();
  // Arrivée par le lien d'un diffuseur : les boutons passent par son lien pour attribuer l'action.
  const via = searchParams.via && codeLienValide(searchParams.via) ? searchParams.via : null;
  return (
    <main className="mx-auto min-h-screen max-w-lg bg-vupay-fond px-4 py-5 text-vupay-encre">
      {searchParams.indisponible && (
        <p role="alert" className="mb-3 rounded-2xl bg-white p-3 text-sm font-bold text-vupay-erreur">
          Ce bouton n&apos;est pas disponible. Essayez un autre moyen de contact.
        </p>
      )}
      <FicheProduit fiche={fiche} lien={(type) => (via ? `/c/${via}/vers/${type}` : `/p/${params.slug}/vers/${type}`)} />
      <p className="mt-4 text-center text-xs text-vupay-doux">
        Publié avec <strong className="text-vupay-primaire">Vupay</strong>
      </p>
    </main>
  );
}
