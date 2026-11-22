import Link from "next/link";
import { redirect } from "next/navigation";
import { estEspace, ESPACES, type Espace } from "@/lib/espaces";
import { exigerUtilisateur } from "@/lib/supabase/session";

export const dynamic = "force-dynamic";
export const metadata = { title: "Mes espaces — Vupay" };

const LIBELLES: Record<Espace, { titre: string; texte: string }> = {
  diffuseur: { titre: "Espace diffuseur", texte: "Partagez des publicités et gagnez sur les contacts qualifiés." },
  annonceur: { titre: "Espace entreprise", texte: "Créez des campagnes et suivez les contacts reçus." },
};

async function ouvrirEspace(form: FormData) {
  "use server";
  const espace = form.get("espace");
  const { supabase, user, profil } = await exigerUtilisateur();
  if (!profil) redirect("/inscription");
  if (!estEspace(espace)) redirect("/compte/espaces");
  if (!profil.espaces.includes(espace)) {
    const { error } = await supabase.from("profiles").update({ espaces: [...profil.espaces, espace] }).eq("id", user.id);
    if (error) redirect("/compte/espaces?erreur=1");
  }
  redirect(`/${espace}`);
}

export default async function MesEspaces({ searchParams }: { searchParams: { ajouter?: string; erreur?: string } }) {
  const { profil } = await exigerUtilisateur();
  if (!profil) redirect("/inscription");
  const demande = estEspace(searchParams.ajouter) ? searchParams.ajouter : null;

  return (
    <main className="mx-auto min-h-screen max-w-lg bg-vupay-fond px-5 py-6 text-vupay-encre">
      <h1 className="text-2xl font-black text-vupay-primaire">Mes espaces</h1>
      <p className="mt-1 text-sm text-vupay-doux">Un seul numéro, deux espaces séparés : vos gains et votre budget publicitaire ne se mélangent pas.</p>
      {searchParams.erreur && <p role="alert" className="mt-4 text-sm font-semibold text-vupay-erreur">L&apos;espace n&apos;a pas pu être ouvert. Réessayez.</p>}
      <ul className="mt-6 space-y-3">
        {ESPACES.map((e) => {
          const ouvert = profil.espaces.includes(e);
          return (
            <li key={e} className={`rounded-2xl border bg-white p-4 ${e === demande ? "border-vupay-ocre" : "border-vupay-trait"}`}>
              <h2 className="font-bold">{LIBELLES[e].titre}</h2>
              <p className="mt-1 text-sm text-vupay-doux">{LIBELLES[e].texte}</p>
              {ouvert ? (
                <Link href={`/${e}`} className="mt-3 inline-block font-semibold text-vupay-primaire">Ouvrir →</Link>
              ) : (
                <form action={ouvrirEspace} className="mt-3">
                  <input type="hidden" name="espace" value={e} />
                  <button className="rounded-xl bg-vupay-primaire px-4 py-2 font-bold text-white">Activer cet espace</button>
                </form>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
