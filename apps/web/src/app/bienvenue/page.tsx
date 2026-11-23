import { redirect } from "next/navigation";
import { accueilUtilisateur, peutOuvrirEspace } from "@/lib/permissions";
import { supabaseServeur } from "@/lib/supabase/server";
import { chargerUtilisateur } from "@/lib/supabase/utilisateur";
import { NUMEROTATION } from "@/lib/telephone";
import type { Pays } from "@/lib/types";
import { creerProfil, ouvrirEspace } from "./actions";

type Params = { suite?: string; espace?: string; erreur?: string };

const NOMS_ESPACES = { diffuseur: "diffuseur", annonceur: "annonceur (entreprise)" } as const;

export default async function Bienvenue({ searchParams }: { searchParams: Params }) {
  const client = supabaseServeur();
  const utilisateur = await chargerUtilisateur(client);
  if (utilisateur === null) redirect("/connexion");
  const espace = searchParams.espace === "annonceur" || searchParams.espace === "diffuseur" ? searchParams.espace : null;
  const suite = searchParams.suite ?? "";

  if (utilisateur !== "sans_profil") {
    if (!espace || !peutOuvrirEspace(utilisateur, espace)) redirect(accueilUtilisateur(utilisateur, suite));
    return (
      <Cadre titre={`Ouvrir l'espace ${NOMS_ESPACES[espace]}`} erreur={searchParams.erreur}>
        <p className="mt-2 text-sm">
          Vous gardez le même numéro. Les deux espaces ont des soldes et des droits séparés.
        </p>
        <form action={ouvrirEspace}>
          <input type="hidden" name="espace" value={espace} />
          <input type="hidden" name="suite" value={suite} />
          <button className="mt-5 min-h-12 w-full rounded-2xl bg-vupay-primaire px-4 font-bold text-white">
            Ouvrir mon espace {NOMS_ESPACES[espace]}
          </button>
        </form>
      </Cadre>
    );
  }

  const {
    data: { user },
  } = await client.auth.getUser();
  const paysDuNumero = (Object.keys(NUMEROTATION) as Pays[]).find((p) => user?.phone?.replace(/^\+/, "").startsWith(NUMEROTATION[p].indicatif));
  const champ = "mt-1 block min-h-12 w-full rounded-xl border border-vupay-trait bg-white px-3 text-base";

  return (
    <Cadre titre="Bienvenue sur Vupay" erreur={searchParams.erreur}>
      <p className="mt-2 text-sm">Encore une étape pour créer votre compte.</p>
      <form action={creerProfil} className="mt-4">
        <input type="hidden" name="suite" value={suite} />
        <fieldset>
          <legend className="text-sm font-bold">Je veux</legend>
          <div className="mt-1 grid gap-2">
            {(["diffuseur", "annonceur"] as const).map((e) => (
              <label key={e} className="flex min-h-12 items-center gap-3 rounded-xl border-2 border-vupay-trait bg-white px-3 has-[:checked]:border-vupay-primaire">
                <input type="radio" name="espace" value={e} defaultChecked={(espace ?? "diffuseur") === e} required />
                <span className="font-bold">{e === "diffuseur" ? "Diffuser des publicités" : "Faire connaître mon entreprise"}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <label className="mt-4 block text-sm font-bold" htmlFor="pays">
          Pays
        </label>
        <select id="pays" name="pays" className={champ} defaultValue={paysDuNumero ?? "ML"}>
          {(Object.keys(NUMEROTATION) as Pays[]).map((p) => (
            <option key={p} value={p}>
              {NUMEROTATION[p].nom}
            </option>
          ))}
        </select>
        <label className="mt-4 block text-sm font-bold" htmlFor="ville">
          Ville <span className="font-normal text-vupay-doux">(facultatif)</span>
        </label>
        <input id="ville" name="ville" className={champ} maxLength={80} autoComplete="address-level2" />
        <button className="mt-5 min-h-12 w-full rounded-2xl bg-vupay-primaire px-4 font-bold text-white">Créer mon compte</button>
        <p className="mt-3 text-center text-xs text-vupay-doux">Vous pourrez ouvrir l&apos;autre espace plus tard avec le même numéro.</p>
      </form>
    </Cadre>
  );
}

function Cadre({ titre, erreur, children }: { titre: string; erreur?: string; children: React.ReactNode }) {
  return (
    <main className="mx-auto min-h-screen max-w-lg bg-vupay-fond px-5 py-6 text-vupay-encre">
      <h1 className="text-2xl font-black text-vupay-primaire">{titre}</h1>
      {erreur && (
        <p role="alert" className="mt-3 text-sm font-bold text-vupay-erreur">
          L&apos;opération n&apos;a pas abouti. Réessayez.
        </p>
      )}
      {children}
    </main>
  );
}
