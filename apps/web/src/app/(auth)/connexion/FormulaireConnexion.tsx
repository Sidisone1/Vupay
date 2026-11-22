"use client";

import { useState } from "react";
import { formaterTelephone, LISTE_PAYS, PAYS_TELEPHONE } from "@/lib/telephone";
import type { Pays } from "@/lib/types";
import { envoyerCode, verifierCode } from "./actions";

const champ = "mt-1 w-full rounded-xl border border-vupay-trait bg-white px-3 py-3 text-base outline-none focus:border-vupay-primaire";
const bouton = "mt-5 w-full rounded-2xl bg-vupay-primaire px-4 py-3 font-bold text-white disabled:opacity-60";

export function FormulaireConnexion({ canal, espace, suite }: { canal: "sms" | "whatsapp"; espace: string | null; suite: string | null }) {
  const [pays, setPays] = useState<Pays>("ML");
  const [saisie, setSaisie] = useState("");
  const [telephone, setTelephone] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [enCours, setEnCours] = useState(false);

  async function demander(e: React.FormEvent) {
    e.preventDefault();
    setErreur(null);
    setEnCours(true);
    const r = await envoyerCode(pays, saisie).catch(() => ({ ok: false as const, erreur: "Connexion impossible. Réessayez." }));
    setEnCours(false);
    if (r.ok) setTelephone(r.telephone);
    else setErreur(r.erreur);
  }

  async function valider(e: React.FormEvent) {
    e.preventDefault();
    if (!telephone) return;
    setErreur(null);
    setEnCours(true);
    const r = await verifierCode(telephone, code).catch(() => ({ ok: false as const, erreur: "Connexion impossible. Réessayez." }));
    if (!r.ok) {
      setEnCours(false);
      return setErreur(r.erreur);
    }
    const params = new URLSearchParams();
    if (espace) params.set("espace", espace);
    if (suite) params.set("suite", suite);
    window.location.assign(`/auth/suite?${params}`);
  }

  if (!telephone) {
    return (
      <form onSubmit={demander} className="mt-6" noValidate>
        <label className="block text-sm font-semibold" htmlFor="pays">Pays</label>
        <select id="pays" className={champ} value={pays} onChange={(e) => setPays(e.target.value as Pays)}>
          {LISTE_PAYS.map((p) => (
            <option key={p} value={p}>{PAYS_TELEPHONE[p].nom} (+{PAYS_TELEPHONE[p].indicatif})</option>
          ))}
        </select>
        <label className="mt-4 block text-sm font-semibold" htmlFor="telephone">
          Numéro {canal === "whatsapp" ? "WhatsApp" : "de téléphone"}
        </label>
        <input id="telephone" className={champ} type="tel" inputMode="tel" autoComplete="tel-national"
          placeholder={`${PAYS_TELEPHONE[pays].chiffres} chiffres`}
          value={saisie} onChange={(e) => setSaisie(e.target.value)} required />
        {erreur && <p role="alert" className="mt-3 text-sm font-semibold text-vupay-erreur">{erreur}</p>}
        <button className={bouton} disabled={enCours || !saisie.trim()}>{enCours ? "Envoi…" : "Recevoir mon code"}</button>
      </form>
    );
  }

  return (
    <form onSubmit={valider} className="mt-6" noValidate>
      <p className="text-sm">Code envoyé au <strong>{formaterTelephone(telephone)}</strong>.</p>
      <label className="mt-4 block text-sm font-semibold" htmlFor="code">Code reçu</label>
      <input id="code" className={`${champ} tracking-[0.4em]`} inputMode="numeric" autoComplete="one-time-code"
        pattern="[0-9]*" maxLength={8} value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))} autoFocus />
      {erreur && <p role="alert" className="mt-3 text-sm font-semibold text-vupay-erreur">{erreur}</p>}
      <button className={bouton} disabled={enCours || code.length < 6}>{enCours ? "Vérification…" : "Valider"}</button>
      <button type="button" className="mt-3 w-full text-sm font-semibold text-vupay-primaire"
        onClick={() => { setTelephone(null); setCode(""); setErreur(null); }}>
        Changer de numéro ou renvoyer un code
      </button>
    </form>
  );
}
