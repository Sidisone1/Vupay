"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChampPiece } from "@/components/ChampPiece";
import { verifierFicheEntreprise, type FicheEntreprise } from "@/lib/pieces";
import { supabaseNavigateur } from "@/lib/supabase/client";
import { deposerPiece } from "@/lib/supabase/deposer";
import { NUMEROTATION } from "@/lib/telephone";
import type { Pays } from "@/lib/types";

export interface EntrepriseExistante {
  id: string;
  raison_sociale: string;
  pays: Pays;
  secteur: string | null;
  rccm: string | null;
  nif: string | null;
}

export function FormulaireEntreprise({
  utilisateurId,
  paysParDefaut,
  existante,
}: {
  utilisateurId: string;
  paysParDefaut: Pays;
  existante: EntrepriseExistante | null;
}) {
  const router = useRouter();
  const [fiche, setFiche] = useState<FicheEntreprise>({
    raisonSociale: existante?.raison_sociale ?? "",
    pays: existante?.pays ?? paysParDefaut,
    secteur: existante?.secteur ?? "",
    rccm: existante?.rccm ?? "",
    nif: existante?.nif ?? "",
  });
  const [document, setDocument] = useState<Blob | null>(null);
  const [erreurs, setErreurs] = useState<Partial<Record<keyof FicheEntreprise, string>>>({});
  const [erreur, setErreur] = useState<string | null>(null);
  const [envoi, setEnvoi] = useState(false);

  const maj = (champ: keyof FicheEntreprise) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFiche({ ...fiche, [champ]: e.target.value });

  async function envoyer(e: React.FormEvent) {
    e.preventDefault();
    const trouvees = verifierFicheEntreprise(fiche);
    setErreurs(trouvees);
    if (Object.keys(trouvees).length) return;
    if (!document) {
      setErreur("Ajoutez le justificatif.");
      return;
    }
    setErreur(null);
    setEnvoi(true);
    try {
      const client = supabaseNavigateur();
      const chemin_document = await deposerPiece(client, "entreprises", utilisateurId, "entreprise", document);
      const ligne = {
        raison_sociale: fiche.raisonSociale.trim(),
        pays: fiche.pays,
        secteur: fiche.secteur.trim() || null,
        rccm: fiche.rccm.trim() || null,
        nif: fiche.nif.trim() || null,
        chemin_document,
        statut_verification: "en_attente",
      };
      const { error } = existante
        ? await client.from("advertisers").update(ligne).eq("id", existante.id)
        : await client.from("advertisers").insert({ ...ligne, proprietaire_id: utilisateurId });
      if (error) throw error;
      router.refresh();
    } catch {
      setErreur("L'envoi n'a pas abouti. Vérifiez votre connexion et réessayez.");
      setEnvoi(false);
    }
  }

  const champ = "mt-1 block min-h-12 w-full rounded-xl border border-vupay-trait bg-white px-3 text-base";
  const Erreur = ({ c }: { c: keyof FicheEntreprise }) =>
    erreurs[c] ? <p className="mt-1 text-sm font-bold text-vupay-erreur">{erreurs[c]}</p> : null;

  return (
    <form onSubmit={envoyer} className="mt-4" noValidate>
      <label className="block text-sm font-bold" htmlFor="raison">
        Nom de l&apos;entreprise
      </label>
      <input id="raison" className={champ} value={fiche.raisonSociale} onChange={maj("raisonSociale")} maxLength={120} autoComplete="organization" />
      <Erreur c="raisonSociale" />

      <label className="mt-4 block text-sm font-bold" htmlFor="pays-entreprise">
        Pays
      </label>
      <select id="pays-entreprise" className={champ} value={fiche.pays} onChange={maj("pays")}>
        {(Object.keys(NUMEROTATION) as Pays[]).map((p) => (
          <option key={p} value={p}>
            {NUMEROTATION[p].nom}
          </option>
        ))}
      </select>

      <label className="mt-4 block text-sm font-bold" htmlFor="secteur">
        Secteur <span className="font-normal text-vupay-doux">(facultatif)</span>
      </label>
      <input id="secteur" className={champ} value={fiche.secteur} onChange={maj("secteur")} maxLength={80} placeholder="Commerce, restauration, mode…" />
      <Erreur c="secteur" />

      <label className="mt-4 block text-sm font-bold" htmlFor="rccm">
        Numéro RCCM
      </label>
      <input id="rccm" className={champ} value={fiche.rccm} onChange={maj("rccm")} maxLength={40} placeholder="MA.BKO.2026.B.1234" />
      <Erreur c="rccm" />

      <label className="mt-4 block text-sm font-bold" htmlFor="nif">
        NIF <span className="font-normal text-vupay-doux">(si pas de RCCM)</span>
      </label>
      <input id="nif" className={champ} value={fiche.nif} onChange={maj("nif")} maxLength={40} />
      <Erreur c="nif" />

      <ChampPiece type="entreprise" aide="Photo ou PDF du registre de commerce, de la carte NIF ou d'un document officiel équivalent." onChange={setDocument} />

      {erreur && (
        <p role="alert" className="mt-3 text-sm font-bold text-vupay-erreur">
          {erreur}
        </p>
      )}
      <button
        type="submit"
        disabled={envoi}
        className="mt-5 min-h-12 w-full rounded-2xl bg-vupay-primaire px-4 font-bold text-white disabled:opacity-60"
      >
        {envoi ? "Envoi en cours…" : "Envoyer pour vérification"}
      </button>
    </form>
  );
}
