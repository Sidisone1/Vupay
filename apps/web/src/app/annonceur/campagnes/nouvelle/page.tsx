import Link from "next/link";
import { redirect } from "next/navigation";
import { supabaseServeur } from "@/lib/supabase/server";
import { creerCampagne } from "../actions";

export default async function NouvelleCampagne({ searchParams }: { searchParams: { erreur?: string } }) {
  const client = supabaseServeur();
  const {
    data: { user },
  } = await client.auth.getUser();
  if (!user) redirect("/connexion?suite=/annonceur/campagnes/nouvelle");
  const { data: entreprise } = await client.from("advertisers").select("id").eq("proprietaire_id", user.id).limit(1).maybeSingle();

  return (
    <main className="mx-auto min-h-screen max-w-lg bg-vupay-fond px-5 py-6 text-vupay-encre">
      <Link href="/annonceur/campagnes" className="text-sm font-bold text-vupay-primaire">
        ← Mes campagnes
      </Link>
      <h1 className="mt-2 text-2xl font-black text-vupay-primaire">Nouvelle campagne</h1>
      {!entreprise ? (
        <p className="mt-4 rounded-2xl bg-white p-4 text-sm">
          Commencez par renseigner votre entreprise.{" "}
          <Link href="/annonceur/entreprise" className="font-bold text-vupay-primaire">
            Mon entreprise →
          </Link>
        </p>
      ) : (
        <form action={creerCampagne} className="mt-4">
          <label htmlFor="titre" className="block text-sm font-bold">
            Quel produit ou service voulez-vous faire connaître ?
          </label>
          <input id="titre" name="titre" required minLength={3} maxLength={80} placeholder="Ex. Bazin riche teint main" className="mt-1 block min-h-12 w-full rounded-xl border border-vupay-trait bg-white px-3 text-base" />
          {searchParams.erreur && (
            <p role="alert" className="mt-2 text-sm font-bold text-vupay-erreur">
              {searchParams.erreur === "titre" ? "Le nom doit faire entre 3 et 80 caractères." : "La campagne n'a pas pu être créée. Réessayez."}
            </p>
          )}
          <button className="mt-5 min-h-12 w-full rounded-2xl bg-vupay-primaire px-4 font-bold text-white">Continuer</button>
          <p className="mt-3 text-center text-xs text-vupay-doux">Vous compléterez la photo, la description et les boutons de contact à l&apos;étape suivante.</p>
        </form>
      )}
    </main>
  );
}
