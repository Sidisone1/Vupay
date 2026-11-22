"use client";

import { useFormState, useFormStatus } from "react-dom";
import { INTERETS, INTERETS_MAX, type Espace } from "@/lib/espaces";
import { LISTE_PAYS, PAYS_TELEPHONE } from "@/lib/telephone";
import type { Pays } from "@/lib/types";
import { inscrire, type EtatInscription } from "./actions";

const champ = "mt-1 w-full rounded-xl border border-vupay-trait bg-white px-3 py-3 text-base outline-none focus:border-vupay-primaire";

function Erreur({ texte }: { texte?: string }) {
  return texte ? <p role="alert" className="mt-1 text-sm font-semibold text-vupay-erreur">{texte}</p> : null;
}

function Envoyer() {
  const { pending } = useFormStatus();
  return (
    <button className="mt-6 w-full rounded-2xl bg-vupay-primaire px-4 py-3 font-bold text-white disabled:opacity-60" disabled={pending}>
      {pending ? "Enregistrement…" : "Créer mon profil"}
    </button>
  );
}

export function FormulaireInscription({ paysParDefaut, espaceParDefaut, suite }: { paysParDefaut: Pays; espaceParDefaut: Espace; suite: string }) {
  const [etat, action] = useFormState<EtatInscription, FormData>(inscrire, { erreurs: {} });
  const e = etat.erreurs;
  return (
    <form action={action} className="mt-6 space-y-4">
      <input type="hidden" name="suite" value={suite} />
      <fieldset>
        <legend className="text-sm font-semibold">Je veux</legend>
        <div className="mt-1 grid grid-cols-2 gap-2">
          {([["diffuseur", "Diffuser des pubs"], ["annonceur", "Faire de la pub (entreprise)"]] as const).map(([v, l]) => (
            <label key={v} className="flex min-h-14 items-center gap-2 rounded-xl border border-vupay-trait bg-white px-3 py-2 text-sm has-[:checked]:border-vupay-primaire has-[:checked]:bg-vupay-surface">
              <input type="radio" name="espace" value={v} defaultChecked={v === espaceParDefaut} /> {l}
            </label>
          ))}
        </div>
        <p className="mt-1 text-xs text-vupay-doux">Vous pourrez ouvrir l&apos;autre espace plus tard avec le même numéro.</p>
        <Erreur texte={e.espaces} />
      </fieldset>

      <div>
        <label className="block text-sm font-semibold" htmlFor="nom_affiche">Nom affiché (facultatif)</label>
        <input id="nom_affiche" name="nom_affiche" className={champ} maxLength={60} autoComplete="name" />
        <Erreur texte={e.nom_affiche} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-semibold" htmlFor="pays">Pays</label>
          <select id="pays" name="pays" className={champ} defaultValue={paysParDefaut}>
            {LISTE_PAYS.map((p) => <option key={p} value={p}>{PAYS_TELEPHONE[p].nom}</option>)}
          </select>
          <Erreur texte={e.pays} />
        </div>
        <div>
          <label className="block text-sm font-semibold" htmlFor="ville">Ville</label>
          <input id="ville" name="ville" className={champ} required minLength={2} maxLength={60} autoComplete="address-level2" />
          <Erreur texte={e.ville} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-semibold" htmlFor="annee_naissance">Année de naissance</label>
          <input id="annee_naissance" name="annee_naissance" className={champ} inputMode="numeric" pattern="[0-9]{4}" maxLength={4} required placeholder="1998" />
          <Erreur texte={e.annee_naissance} />
        </div>
        <div>
          <label className="block text-sm font-semibold" htmlFor="sexe">Sexe (facultatif)</label>
          <select id="sexe" name="sexe" className={champ} defaultValue="">
            <option value="">—</option>
            <option value="F">Femme</option>
            <option value="M">Homme</option>
          </select>
          <Erreur texte={e.sexe} />
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold">Centres d&apos;intérêt ({INTERETS_MAX} au maximum)</legend>
        <div className="mt-1 flex flex-wrap gap-2">
          {INTERETS.map((i) => (
            <label key={i} className="rounded-full border border-vupay-trait bg-white px-3 py-2 text-sm has-[:checked]:border-vupay-primaire has-[:checked]:bg-vupay-primaire has-[:checked]:text-white">
              <input type="checkbox" name="interets" value={i} className="sr-only" /> {i}
            </label>
          ))}
        </div>
        <Erreur texte={e.interets} />
      </fieldset>

      <Erreur texte={e.general} />
      <Envoyer />
    </form>
  );
}
