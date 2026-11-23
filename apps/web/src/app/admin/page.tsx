import Link from "next/link";
import { CadreAdmin } from "@/components/admin/CadreAdmin";
import { menuAdmin } from "@/lib/admin";
import { adminPeut } from "@/lib/permissions";
import { exigerAdmin } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

const NOMS_ROLES = { super_admin: "Super admin", moderateur: "Modérateur", finance: "Finance", support: "Support" } as const;

export default async function BackOffice() {
  const { client, utilisateur } = await exigerAdmin(null);

  // Nombre de dossiers à traiter, seulement pour les files que cet admin peut voir.
  const [kyc, entreprises] = await Promise.all([
    adminPeut(utilisateur, "valider_kyc")
      ? client.from("kyc_documents").select("id", { count: "exact", head: true }).eq("statut", "en_attente")
      : null,
    adminPeut(utilisateur, "verifier_entreprises")
      ? client.from("advertisers").select("id", { count: "exact", head: true }).eq("statut_verification", "en_attente")
      : null,
  ]);
  const enAttente: Record<string, number | null | undefined> = { "/admin/kyc": kyc?.count, "/admin/entreprises": entreprises?.count };

  return (
    <CadreAdmin titre="Back-office Vupay" retour={null}>
      <p className="mt-1 text-sm text-vupay-doux">
        Rôle : {utilisateur.roleAdmin ? NOMS_ROLES[utilisateur.roleAdmin] : "aucun rôle d'administration attribué"}
      </p>
      <nav className="mt-4 grid gap-2">
        {menuAdmin(utilisateur).map((l) => (
          <Link key={l.href} href={l.href} className="flex min-h-12 items-center justify-between rounded-xl bg-white px-4 py-3 font-bold shadow-sm">
            <span>{l.libelle}</span>
            {enAttente[l.href] ? (
              <span className="rounded-full bg-vupay-ocre px-2 py-0.5 text-sm text-vupay-encre" aria-label={`${enAttente[l.href]} en attente`}>
                {enAttente[l.href]}
              </span>
            ) : null}
          </Link>
        ))}
      </nav>
      <form action="/deconnexion" method="post">
        <button className="mt-6 text-sm font-bold text-vupay-primaire">Se déconnecter</button>
      </form>
    </CadreAdmin>
  );
}
