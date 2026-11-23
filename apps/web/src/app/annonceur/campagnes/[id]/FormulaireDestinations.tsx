"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ACTIONS_CONTACT, libelleAction, type ActionContact } from "@/lib/contacts";
import { construireDestination, LONGUEUR_MAX_MESSAGE, lireDestination, type SaisieDestination } from "@/lib/destinations";
import { supabaseNavigateur } from "@/lib/supabase/client";
import type { Pays } from "@/lib/types";

const AIDE: Record<ActionContact, string> = {
  numero_whatsapp: "Le visiteur ouvre une discussion WhatsApp avec ce numéro.",
  catalogue_whatsapp: "Le visiteur voit le catalogue WhatsApp Business de ce numéro.",
  envoyer_message: "La discussion s'ouvre avec votre message déjà écrit.",
  acheter: "Adresse de votre boutique en ligne ou page de paiement (https://…).",
};

export function FormulaireDestinations({
  campagneId,
  pays,
  existantes,
}: {
  campagneId: string;
  pays: Pays;
  existantes: { type: ActionContact; url: string }[];
}) {
  return (
    <div className="mt-2 grid gap-3">
      {ACTIONS_CONTACT.map((type) => (
        <LigneDestination key={type} type={type} campagneId={campagneId} pays={pays} existante={existantes.find((d) => d.type === type)?.url} />
      ))}
    </div>
  );
}

function LigneDestination({ type, campagneId, pays, existante }: { type: ActionContact; campagneId: string; pays: Pays; existante?: string }) {
  const router = useRouter();
  const lu = existante ? lireDestination(type, existante) : {};
  const [telephone, setTelephone] = useState(lu.telephone ?? "");
  const [message, setMessage] = useState(lu.message ?? "");
  const [url, setUrl] = useState(lu.url ?? "");
  const [etat, setEtat] = useState<{ ok: boolean; texte: string } | null>(null);
  const [envoi, setEnvoi] = useState(false);

  async function enregistrer(e: React.FormEvent) {
    e.preventDefault();
    const saisie: SaisieDestination =
      type === "acheter" ? { type, url } : type === "envoyer_message" ? { type, telephone, message } : { type, telephone };
    const resultat = construireDestination(saisie, pays);
    if (!resultat.ok) return setEtat({ ok: false, texte: resultat.erreur });
    setEnvoi(true);
    const { error } = await supabaseNavigateur()
      .from("campaign_destinations")
      .upsert({ campagne_id: campagneId, type, url: resultat.url, libelle: resultat.libelle }, { onConflict: "campagne_id,type" });
    setEnvoi(false);
    setEtat(error ? { ok: false, texte: "Enregistrement refusé. Réessayez." } : { ok: true, texte: "Bouton enregistré." });
    if (!error) router.refresh();
  }

  async function retirer() {
    setEnvoi(true);
    const { error } = await supabaseNavigateur().from("campaign_destinations").delete().eq("campagne_id", campagneId).eq("type", type);
    setEnvoi(false);
    if (!error) {
      setTelephone("");
      setMessage("");
      setUrl("");
      setEtat({ ok: true, texte: "Bouton retiré." });
      router.refresh();
    }
  }

  const champ = "mt-1 block min-h-12 w-full rounded-xl border border-vupay-trait bg-white px-3 text-base";
  const id = `dest-${type}`;
  return (
    <form onSubmit={enregistrer} className={`rounded-2xl border-2 bg-white p-4 ${existante ? "border-vupay-succes" : "border-vupay-trait"}`}>
      <p className="font-bold">
        {libelleAction(type)} {existante && <span className="text-sm font-normal text-vupay-succes">· actif</span>}
      </p>
      <p className="text-xs text-vupay-doux">{AIDE[type]}</p>
      {type === "acheter" ? (
        <>
          <label htmlFor={id} className="sr-only">
            Adresse de la boutique
          </label>
          <input id={id} className={champ} type="url" inputMode="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://ma-boutique.ml/produit" />
        </>
      ) : (
        <>
          <label htmlFor={id} className="mt-2 block text-sm font-bold">
            Numéro WhatsApp
          </label>
          <input id={id} className={champ} type="tel" inputMode="tel" value={telephone} onChange={(e) => setTelephone(e.target.value)} placeholder="70 12 34 56" />
          {type === "envoyer_message" && (
            <>
              <label htmlFor={`${id}-msg`} className="mt-2 block text-sm font-bold">
                Message déjà écrit
              </label>
              <textarea id={`${id}-msg`} className={`${champ} py-2`} rows={2} maxLength={LONGUEUR_MAX_MESSAGE} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Bonjour, je suis intéressé par…" />
            </>
          )}
        </>
      )}
      {etat && (
        <p role={etat.ok ? "status" : "alert"} className={`mt-2 text-sm font-bold ${etat.ok ? "text-vupay-succes" : "text-vupay-erreur"}`}>
          {etat.texte}
        </p>
      )}
      <div className="mt-3 flex gap-2">
        <button disabled={envoi} className="min-h-11 flex-1 rounded-xl bg-vupay-primaire px-3 text-sm font-bold text-white disabled:opacity-60">
          {existante ? "Mettre à jour" : "Activer ce bouton"}
        </button>
        {existante && (
          <button type="button" disabled={envoi} onClick={retirer} className="min-h-11 rounded-xl border-2 border-vupay-erreur px-3 text-sm font-bold text-vupay-erreur">
            Retirer
          </button>
        )}
      </div>
    </form>
  );
}
