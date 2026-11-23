// Edge Function (Deno) — « Send SMS Hook » de Supabase Auth : envoie le code de connexion
// par l'API SMS d'Orange au lieu d'un fournisseur international.
// Supabase appelle cette fonction à chaque demande de code ; la signature est vérifiée.
//
// Secrets à définir (Supabase → Edge Functions → Secrets), jamais dans le code :
//   SEND_SMS_HOOK_SECRET      généré par Supabase (Authentication → Hooks → Send SMS)
//   ORANGE_CLIENT_ID          Orange Developer → My apps
//   ORANGE_CLIENT_SECRET      Orange Developer → My apps
//   ORANGE_NOM_EXPEDITEUR     facultatif : nom approuvé par Orange (ex. « VUPAY »)
import { Webhook } from "https://esm.sh/standardwebhooks@1.0.0";
import { requeteEnvoi, URL_JETON } from "./regles.ts";

let jeton: { valeur: string; expire: number } | null = null;

async function obtenirJeton(forcer = false): Promise<string> {
  if (!forcer && jeton && jeton.expire > Date.now()) return jeton.valeur;
  const id = Deno.env.get("ORANGE_CLIENT_ID");
  const secret = Deno.env.get("ORANGE_CLIENT_SECRET");
  if (!id || !secret) throw new Error("Identifiants Orange manquants");
  const reponse = await fetch(URL_JETON, {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa(`${id}:${secret}`)}`,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: "grant_type=client_credentials",
  });
  if (!reponse.ok) throw new Error(`Jeton Orange refusé (${reponse.status})`);
  const donnees = await reponse.json();
  // Le jeton vaut une heure ; on le renouvelle une minute avant.
  jeton = { valeur: donnees.access_token, expire: Date.now() + (Number(donnees.expires_in ?? 3600) - 60) * 1000 };
  return jeton.valeur;
}

async function envoyer(telephone: string, code: string): Promise<Response> {
  const { url, corps } = requeteEnvoi(telephone, code, Deno.env.get("ORANGE_NOM_EXPEDITEUR"));
  const appel = (valeur: string) =>
    fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${valeur}`, "Content-Type": "application/json" },
      body: JSON.stringify(corps),
    });
  let reponse = await appel(await obtenirJeton());
  if (reponse.status === 401) reponse = await appel(await obtenirJeton(true)); // jeton expiré
  return reponse;
}

const erreur = (http_code: number, message: string) =>
  new Response(JSON.stringify({ error: { http_code, message } }), {
    status: http_code,
    headers: { "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  const secret = Deno.env.get("SEND_SMS_HOOK_SECRET");
  if (!secret) return erreur(500, "Secret du hook manquant");
  const contenu = await req.text();
  let telephone: string;
  let code: string;
  try {
    const { user, sms } = new Webhook(secret.replace("v1,whsec_", "")).verify(contenu, Object.fromEntries(req.headers)) as {
      user: { phone: string };
      sms: { otp: string };
    };
    telephone = user.phone;
    code = sms.otp;
  } catch {
    return erreur(401, "Signature invalide");
  }

  try {
    const reponse = await envoyer(telephone, code);
    if (!reponse.ok) {
      // Sans recopier le numéro ni le code dans les journaux.
      console.error("Envoi Orange refusé", reponse.status, await reponse.text());
      return erreur(502, "Le SMS n'a pas pu être envoyé. Réessayez dans un instant.");
    }
    return new Response(JSON.stringify({}), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Erreur inconnue";
    console.error("Envoi SMS impossible :", message);
    return erreur(message.startsWith("Pays non couvert") ? 400 : 500, message.startsWith("Pays non couvert")
      ? "La connexion par SMS n'est pas encore ouverte dans votre pays."
      : "Le SMS n'a pas pu être envoyé. Réessayez dans un instant.");
  }
});
