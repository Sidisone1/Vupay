"use server";

import { redirect } from "next/navigation";
import { accueilUtilisateur } from "@/lib/permissions";
import { supabaseServeur } from "@/lib/supabase/server";
import { chargerUtilisateur } from "@/lib/supabase/utilisateur";
import { NUMEROTATION } from "@/lib/telephone";

const lireEspace = (v: FormDataEntryValue | null) => (v === "diffuseur" || v === "annonceur" ? v : null);
const texte = (v: FormDataEntryValue | null) => (typeof v === "string" ? v : "");

/** Première connexion : crée le profil (le téléphone vient de l'OTP, voir creer_mon_profil). */
export async function creerProfil(form: FormData) {
  const espace = lireEspace(form.get("espace"));
  const pays = texte(form.get("pays"));
  const suite = texte(form.get("suite"));
  if (!espace || !(pays in NUMEROTATION)) redirect("/bienvenue?erreur=1");

  const client = supabaseServeur();
  const { error } = await client.rpc("creer_mon_profil", {
    p_pays: pays,
    p_espace: espace,
    p_ville: texte(form.get("ville")).trim().slice(0, 80) || null,
  });
  if (error) redirect("/bienvenue?erreur=1");
  await rediriger(client, suite);
}

/** Ouvre le second espace (diffuseur ou annonceur) avec le même compte. */
export async function ouvrirEspace(form: FormData) {
  const espace = lireEspace(form.get("espace"));
  const suite = texte(form.get("suite"));
  if (!espace) redirect("/bienvenue?erreur=1");

  const client = supabaseServeur();
  const {
    data: { user },
  } = await client.auth.getUser();
  if (!user) redirect("/connexion");
  const { error } = await client.from("profile_roles").insert({ profil_id: user.id, role: espace });
  if (error) redirect(`/bienvenue?espace=${espace}&erreur=1`);
  await rediriger(client, suite || `/${espace}`);
}

async function rediriger(client: ReturnType<typeof supabaseServeur>, suite: string) {
  const utilisateur = await chargerUtilisateur(client);
  redirect(utilisateur && utilisateur !== "sans_profil" ? accueilUtilisateur(utilisateur, suite) : "/bienvenue");
}
