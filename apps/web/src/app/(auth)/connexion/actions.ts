"use server";

import { canalOtp, supabaseConfigure } from "@/lib/supabase/config";
import { supabaseServeur } from "@/lib/supabase/server";
import { estPays, normaliserTelephone, PAYS_TELEPHONE } from "@/lib/telephone";

// L'OTP passe par le serveur : pas de SDK Supabase dans le navigateur, page plus légère en 3G.

export type ResultatOtp = { ok: true; telephone: string } | { ok: false; erreur: string };

/** Traduit les erreurs Supabase Auth les plus courantes. */
function messageErreur(message: string): string {
  if (/rate|too many|seconds/i.test(message)) return "Trop de demandes. Patientez une minute avant de redemander un code.";
  if (/expired|invalid|token/i.test(message)) return "Code incorrect ou expiré.";
  if (/phone.*(provider|disabled)|unsupported|sms/i.test(message)) return "L'envoi de codes n'est pas encore activé. Réessayez plus tard.";
  return "Une erreur est survenue. Vérifiez votre connexion et réessayez.";
}

export async function envoyerCode(pays: string, saisie: string): Promise<ResultatOtp> {
  if (!supabaseConfigure()) return { ok: false, erreur: "La connexion n'est pas encore branchée." };
  if (!estPays(pays)) return { ok: false, erreur: "Choisissez votre pays." };
  const telephone = normaliserTelephone(saisie, pays);
  if (!telephone) {
    return { ok: false, erreur: `Numéro invalide pour ${PAYS_TELEPHONE[pays].nom} (${PAYS_TELEPHONE[pays].chiffres} chiffres).` };
  }
  const { error } = await supabaseServeur().auth.signInWithOtp({ phone: telephone, options: { channel: canalOtp() } });
  return error ? { ok: false, erreur: messageErreur(error.message) } : { ok: true, telephone };
}

export async function verifierCode(telephone: string, code: string): Promise<ResultatOtp> {
  if (!supabaseConfigure()) return { ok: false, erreur: "La connexion n'est pas encore branchée." };
  const token = code.replace(/\D/g, "");
  if (!/^\+\d{8,15}$/.test(telephone) || token.length < 6) return { ok: false, erreur: "Code incorrect ou expiré." };
  const { error } = await supabaseServeur().auth.verifyOtp({ phone: telephone, token, type: "sms" });
  return error ? { ok: false, erreur: messageErreur(error.message) } : { ok: true, telephone };
}
