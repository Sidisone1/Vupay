import Link from "next/link";
import { redirect } from "next/navigation";
import { supabaseServeur } from "@/lib/supabase/server";

const libelles: Record<string, string> = {
  gain_vues: "Gain historique", gain_clics: "Gain de diffusion", prime_parrainage: "Prime de parrainage",
  retrait: "Retrait", retrait_annule: "Retrait annulé", recharge_annonceur: "Recharge",
  debit_campagne: "Dépense de campagne", remboursement_annonceur: "Remboursement", ajustement: "Ajustement",
};

interface Mouvement { id: string; type: string; montant: string; date: string; disponible: boolean }
interface Releve { disponible: string; en_attente: string; lignes: Mouvement[]; suite: boolean }

const format = new Intl.NumberFormat("fr-FR");
const montant = (valeur: string) => format.format(BigInt(valeur)) + " FCFA";
const dates = new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium", timeZone: "Africa/Bamako" });

export async function Portefeuille({ espace, avant }: { espace: "diffuseur" | "annonceur"; avant?: string }) {
  const chemin = espace === "diffuseur" ? "/diffuseur/gains" : "/annonceur/portefeuille";
  if (avant !== undefined && (typeof avant !== "string" || !/^[1-9]\d{0,18}$/.test(avant) || BigInt(avant) > 9223372036854775807n)) redirect(chemin);
  const client = supabaseServeur();
  const { data: { user } } = await client.auth.getUser();
  if (!user) redirect("/connexion?suite=" + chemin);
  const { data, error } = await client.rpc("mon_portefeuille", { p_espace: espace, p_avant: avant ?? null });
  const releve: Releve | null = error ? null : data;
  return (
    <main className="mx-auto min-h-screen max-w-lg px-5 py-6">
      <Link href={"/" + espace}>← Mon espace</Link>
      <h1 className="my-4 text-2xl font-black">{espace === "diffuseur" ? "Mes gains" : "Portefeuille annonceur"}</h1>
      {releve ? <>
        <dl className="grid gap-3 rounded-2xl bg-white p-4">
          <div><dt>Disponible</dt><dd className="break-words text-2xl font-bold">{montant(releve.disponible)}</dd></div>
          <div><dt>En attente</dt><dd>{montant(releve.en_attente)}</dd></div>
        </dl>
        <h2 className="mb-2 mt-6 font-bold">Historique des opérations</h2>
        {releve.lignes.length === 0 && <p>Aucune opération sur cette page.</p>}
        <ul className="divide-y rounded-xl bg-white">{releve.lignes.map(ligne => (
          <li key={ligne.id} className="p-3">
            <strong>{libelles[ligne.type] ?? ligne.type}</strong>
            <p>{montant(ligne.montant)} · {ligne.disponible ? "Disponible" : "En attente"}</p>
            <small>{dates.format(new Date(ligne.date))} · Opération nº {ligne.id}</small>
          </li>
        ))}</ul>
        <nav className="mt-4 flex flex-wrap gap-4">
          {avant && <Link href={chemin}>Opérations récentes</Link>}
          {releve.suite && <Link href={chemin + "?avant=" + releve.lignes[releve.lignes.length - 1].id}>Opérations plus anciennes</Link>}
        </nav>
      </> : <p role="alert">Le journal est momentanément indisponible. Réessayez plus tard.</p>}
    </main>
  );
}
