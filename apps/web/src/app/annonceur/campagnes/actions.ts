"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseServeur } from "@/lib/supabase/server";

const texte = (v: FormDataEntryValue | null) => (typeof v === "string" ? v : "");
const UUID = /^[0-9a-f-]{36}$/;

/** Crée un brouillon avec le seul nom du produit, puis ouvre l'écran de préparation. */
export async function creerCampagne(form: FormData) {
  const titre = texte(form.get("titre")).replace(/\s+/g, " ").trim();
  if (titre.length < 3 || titre.length > 80) redirect("/annonceur/campagnes/nouvelle?erreur=titre");
  const client = supabaseServeur();
  const {
    data: { user },
  } = await client.auth.getUser();
  if (!user) redirect("/connexion?suite=/annonceur/campagnes/nouvelle");
  const { data: entreprise } = await client.from("advertisers").select("id").eq("proprietaire_id", user.id).order("cree_le").limit(1).maybeSingle();
  if (!entreprise) redirect("/annonceur/entreprise");
  const { data, error } = await client.from("campaigns").insert({ annonceur_id: entreprise.id, titre }).select("id").single();
  if (error || !data) redirect("/annonceur/campagnes/nouvelle?erreur=base");
  redirect(`/annonceur/campagnes/${data.id}`);
}

async function changerStatut(form: FormData, statut: "en_moderation" | "brouillon") {
  const id = texte(form.get("id"));
  if (!UUID.test(id)) redirect("/annonceur/campagnes");
  const { data } = await supabaseServeur().from("campaigns").update({ statut }).eq("id", id).select("id");
  revalidatePath(`/annonceur/campagnes/${id}`);
  redirect(`/annonceur/campagnes/${id}?${data?.length ? `fait=${statut}` : "erreur=statut"}`);
}

export async function soumettreCampagne(form: FormData) {
  await changerStatut(form, "en_moderation");
}

export async function retirerCampagne(form: FormData) {
  await changerStatut(form, "brouillon");
}
