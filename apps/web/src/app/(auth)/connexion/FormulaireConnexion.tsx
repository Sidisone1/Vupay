"use client";

import { useEffect, useState } from "react";
import { supabaseNavigateur } from "@/lib/supabase/client";
import { codeOtpValide, masquerTelephone, normaliserTelephone, NUMEROTATION } from "@/lib/telephone";
import type { Pays } from "@/lib/types";

type Canal = "whatsapp" | "sms";
const DELAI_RENVOI = 60; // secondes avant de pouvoir redemander un code

export function FormulaireConnexion({ suite, espace }: { suite: string | null; espace?: "diffuseur" | "annonceur" }) {
  const [etape, setEtape] = useState<"numero" | "code">("numero");
  const [pays, setPays] = useState<Pays>("ML");
  const [saisie, setSaisie] = useState("");
  const [canal, setCanal] = useState<Canal>("sms");
  const [telephone, setTelephone] = useState("");
  const [code, setCode] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [envoi, setEnvoi] = useState(false);
  const [attente, setAttente] = useState(0);

  useEffect(() => {
    if (attente <= 0) return;
    const minuteur = setTimeout(() => setAttente(attente - 1), 1000);
    return () => clearTimeout(minuteur);
  }, [attente]);

  async function demanderCode(e?: React.FormEvent) {
    e?.preventDefault();
    const numero = normaliserTelephone(saisie, pays);
    if (!numero) {
      setErreur(`Numéro invalide pour ce pays (${NUMEROTATION[pays].chiffres} chiffres attendus).`);
      return;
    }
    setErreur(null);
    setEnvoi(true);
    const { error } = await supabaseNavigateur().auth.signInWithOtp({ phone: numero.e164, options: { channel: canal } });
    setEnvoi(false);
    if (error) {
      setErreur("Le code n'a pas pu être envoyé. Vérifiez le numéro ou réessayez dans une minute.");
      return;
    }
    setTelephone(numero.e164);
    setCode("");
    setAttente(DELAI_RENVOI);
    setEtape("code");
  }

  async function verifierCode(e: React.FormEvent) {
    e.preventDefault();
    if (!codeOtpValide(code)) {
      setErreur("Le code contient 6 chiffres.");
      return;
    }
    setErreur(null);
    setEnvoi(true);
    const { error } = await supabaseNavigateur().auth.verifyOtp({ phone: telephone, token: code.trim(), type: "sms" });
    setEnvoi(false);
    if (error) {
      setErreur("Code incorrect ou expiré.");
      return;
    }
    const params = new URLSearchParams();
    if (suite) params.set("suite", suite);
    if (espace) params.set("espace", espace);
    // Rechargement complet : le serveur relit la session et oriente selon les droits.
    window.location.assign(`/bienvenue${params.size ? `?${params}` : ""}`);
  }

  const champ = "mt-1 block min-h-12 w-full rounded-xl border border-vupay-trait bg-white px-3 text-base";
  const bouton = "mt-5 min-h-12 w-full rounded-2xl bg-vupay-primaire px-4 font-bold text-white disabled:opacity-60";

  if (etape === "code") {
    return (
      <form onSubmit={verifierCode} className="mt-6">
        <p className="text-sm">
          Code envoyé {canal === "whatsapp" ? "sur WhatsApp" : "par SMS"} au <strong>{masquerTelephone(telephone)}</strong>.
        </p>
        <label className="mt-4 block text-sm font-bold" htmlFor="code">
          Code à 6 chiffres
        </label>
        <input
          id="code"
          className={`${champ} tracking-[0.5em]`}
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={6}
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
          autoFocus
        />
        {erreur && <p role="alert" className="mt-3 text-sm font-bold text-vupay-erreur">{erreur}</p>}
        <button type="submit" disabled={envoi} className={bouton}>
          {envoi ? "Vérification…" : "Valider"}
        </button>
        <div className="mt-4 flex justify-between text-sm">
          <button type="button" className="font-bold text-vupay-primaire" onClick={() => setEtape("numero")}>
            Changer de numéro
          </button>
          <button type="button" className="font-bold text-vupay-primaire disabled:text-vupay-doux" disabled={attente > 0 || envoi} onClick={() => demanderCode()}>
            {attente > 0 ? `Renvoyer (${attente} s)` : "Renvoyer le code"}
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={demanderCode} className="mt-6">
      <label className="block text-sm font-bold" htmlFor="pays">
        Pays
      </label>
      <select id="pays" className={champ} value={pays} onChange={(e) => setPays(e.target.value as Pays)}>
        {(Object.keys(NUMEROTATION) as Pays[]).map((p) => (
          <option key={p} value={p}>
            {NUMEROTATION[p].nom} (+{NUMEROTATION[p].indicatif})
          </option>
        ))}
      </select>
      <label className="mt-4 block text-sm font-bold" htmlFor="telephone">
        Numéro de téléphone
      </label>
      <input
        id="telephone"
        className={champ}
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        placeholder={"0".repeat(NUMEROTATION[pays].chiffres).replace(/(.{2})(?=.)/g, "$1 ")}
        value={saisie}
        onChange={(e) => setSaisie(e.target.value)}
      />
      <fieldset className="mt-4">
        <legend className="text-sm font-bold">Recevoir le code</legend>
        <div className="mt-1 grid grid-cols-2 gap-2">
          {(["sms", "whatsapp"] as Canal[]).map((c) => (
            <label key={c} className={`flex min-h-12 items-center justify-center rounded-xl border-2 px-2 text-center font-bold ${canal === c ? "border-vupay-primaire bg-white" : "border-vupay-trait"}`}>
              <input type="radio" name="canal" value={c} checked={canal === c} onChange={() => setCanal(c)} className="sr-only" />
              {c === "sms" ? "Par SMS" : "Sur WhatsApp"}
            </label>
          ))}
        </div>
      </fieldset>
      {erreur && <p role="alert" className="mt-3 text-sm font-bold text-vupay-erreur">{erreur}</p>}
      <button type="submit" disabled={envoi} className={bouton}>
        {envoi ? "Envoi…" : "Recevoir mon code"}
      </button>
    </form>
  );
}
