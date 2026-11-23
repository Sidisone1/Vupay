import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { FicheProduit } from "@/components/FicheProduit";
import { champsManquants, estModifiable, STATUTS } from "@/lib/campagnes";
import type { ActionContact } from "@/lib/contacts";
import { supabaseServeur } from "@/lib/supabase/server";
import { urlPhotoProduit } from "@/lib/supabase/photos";
import type { Pays, StatutCampagne, StatutKyc } from "@/lib/types";
import { retirerCampagne, soumettreCampagne } from "../actions";
import { FormulaireCampagne } from "./FormulaireCampagne";
import { FormulaireDestinations } from "./FormulaireDestinations";

export const dynamic = "force-dynamic";

type Campagne = {
  id: string;
  titre: string;
  texte: string | null;
  prix: number | null;
  chemin_creatif: string | null;
  debut: string | null;
  fin: string | null;
  statut: StatutCampagne;
  motif_refus: string | null;
  slug: string;
  advertisers: { raison_sociale: string; statut_verification: StatutKyc; pays: Pays };
};

const MESSAGES: Record<string, [boolean, string]> = {
  en_moderation: [true, "Campagne envoyée en modération."],
  brouillon: [true, "Campagne retirée de la modération : vous pouvez la modifier."],
  statut: [false, "Action impossible : vérifiez que la campagne est complète et que votre entreprise est vérifiée."],
};

export default async function Campagne({ params, searchParams }: { params: { id: string }; searchParams: { fait?: string; erreur?: string } }) {
  if (!/^[0-9a-f-]{36}$/.test(params.id)) notFound();
  const client = supabaseServeur();
  const {
    data: { user },
  } = await client.auth.getUser();
  if (!user) redirect(`/connexion?suite=/annonceur/campagnes/${params.id}`);

  const [{ data }, { data: destinations }] = await Promise.all([
    client
      .from("campaigns")
      .select("id, titre, texte, prix, chemin_creatif, debut, fin, statut, motif_refus, slug, advertisers!inner(raison_sociale, statut_verification, pays, proprietaire_id)")
      .eq("id", params.id)
      .eq("advertisers.proprietaire_id", user.id)
      .maybeSingle(),
    client.from("campaign_destinations").select("type, url, libelle").eq("campagne_id", params.id),
  ]);
  if (!data) notFound();
  const c = data as unknown as Campagne;
  const dest = (destinations ?? []) as { type: ActionContact; url: string; libelle: string }[];
  const modifiable = estModifiable(c.statut);
  const aujourdhui = new Date().toISOString().slice(0, 10);
  const manque = champsManquants({ titre: c.titre, texte: c.texte, photo: c.chemin_creatif, debut: c.debut, fin: c.fin, nbDestinations: dest.length }, aujourdhui);
  const entrepriseVerifiee = c.advertisers.statut_verification === "valide";
  const message = MESSAGES[searchParams.fait ?? searchParams.erreur ?? ""];
  const etat = STATUTS[c.statut];
  const adressePublique = `${process.env.NEXT_PUBLIC_APP_URL ?? ""}/p/${c.slug}`;

  return (
    <main className="mx-auto min-h-screen max-w-lg bg-vupay-fond px-5 py-6 text-vupay-encre">
      <Link href="/annonceur/campagnes" className="text-sm font-bold text-vupay-primaire">
        ← Mes campagnes
      </Link>
      <h1 className="mt-2 break-words text-2xl font-black text-vupay-primaire">{c.titre}</h1>

      <section className={`mt-4 rounded-2xl border-2 bg-white p-4 ${etat.couleur}`} aria-live="polite">
        <h2 className="font-bold">{etat.libelle}</h2>
        <p className="mt-1 text-sm">{etat.texte}</p>
        {c.statut === "refusee" && c.motif_refus && (
          <p className="mt-2 text-sm">
            <strong>Motif :</strong> {c.motif_refus}
          </p>
        )}
        {(c.statut === "active" || c.statut === "en_pause") && (
          <p className="mt-2 break-all text-sm">
            Adresse de la fiche :{" "}
            <Link href={`/p/${c.slug}`} className="font-bold text-vupay-primaire">
              {adressePublique}
            </Link>
          </p>
        )}
      </section>
      {message && (
        <p role={message[0] ? "status" : "alert"} className={`mt-3 rounded-xl bg-white p-3 text-sm font-bold ${message[0] ? "text-vupay-succes" : "text-vupay-erreur"}`}>
          {message[1]}
        </p>
      )}

      {modifiable && (
        <>
          <h2 className="mt-6 text-lg font-black">1. La fiche produit</h2>
          <FormulaireCampagne
            utilisateurId={user.id}
            campagne={{ id: c.id, titre: c.titre, texte: c.texte ?? "", prix: c.prix, photo: c.chemin_creatif, photoUrl: urlPhotoProduit(c.chemin_creatif), debut: c.debut ?? "", fin: c.fin ?? "" }}
          />
          <h2 className="mt-8 text-lg font-black">2. Les boutons de contact</h2>
          <FormulaireDestinations campagneId={c.id} pays={c.advertisers.pays} existantes={dest} />
          <h2 className="mt-8 text-lg font-black">3. Envoyer en modération</h2>
          {!entrepriseVerifiee && (
            <p className="mt-2 rounded-xl bg-white p-3 text-sm">
              Votre entreprise doit d&apos;abord être vérifiée.{" "}
              <Link href="/annonceur/entreprise" className="font-bold text-vupay-primaire">
                Mon entreprise →
              </Link>
            </p>
          )}
          {manque.length > 0 && (
            <ul className="mt-2 list-disc rounded-xl bg-white p-3 pl-8 text-sm">
              {manque.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          )}
          <form action={soumettreCampagne}>
            <input type="hidden" name="id" value={c.id} />
            <button disabled={manque.length > 0 || !entrepriseVerifiee} className="mt-3 min-h-12 w-full rounded-2xl bg-vupay-primaire px-4 font-bold text-white disabled:opacity-50">
              Envoyer en modération
            </button>
          </form>
        </>
      )}

      {c.statut === "en_moderation" && (
        <form action={retirerCampagne}>
          <input type="hidden" name="id" value={c.id} />
          <button className="mt-4 min-h-12 w-full rounded-2xl border-2 border-vupay-primaire px-4 font-bold text-vupay-primaire">
            Retirer de la modération pour modifier
          </button>
        </form>
      )}

      <h2 className="mt-8 text-lg font-black">Aperçu de la fiche</h2>
      <p className="text-xs text-vupay-doux">Ce que verront les personnes qui ouvrent le lien.</p>
      <div className="mt-2">
        <FicheProduit
          fiche={{ titre: c.titre, description: c.texte, prix: c.prix, photo: urlPhotoProduit(c.chemin_creatif), annonceur: c.advertisers.raison_sociale, disponible: true, actions: dest.map(({ type, libelle }) => ({ type, libelle })) }}
          lien={null}
        />
      </div>
    </main>
  );
}
