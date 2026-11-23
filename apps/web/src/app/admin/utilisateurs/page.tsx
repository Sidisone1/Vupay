import Link from "next/link";
import { CadreAdmin, Message } from "@/components/admin/CadreAdmin";
import { filtreTelephone, lirePage, PAR_PAGE } from "@/lib/admin";
import { adminPeut } from "@/lib/permissions";
import { exigerAdmin } from "@/lib/supabase/admin";
import type { Role, RoleAdmin, StatutKyc } from "@/lib/types";
import { changerRoleAdmin, changerSuspension } from "../actions";

export const dynamic = "force-dynamic";

type Ligne = {
  id: string;
  telephone: string;
  pays: string;
  ville: string | null;
  statut_kyc: StatutKyc;
  suspendu: boolean;
  role_admin: RoleAdmin | null;
  cree_le: string;
  profile_roles: { role: Role }[];
};

const KYC: Record<StatutKyc, string> = { non_soumis: "KYC non soumis", en_attente: "KYC en attente", valide: "KYC validé", refuse: "KYC refusé" };
const RESULTATS: Record<string, [ "ok" | "erreur", string ]> = {
  suspendu: ["ok", "Compte suspendu."],
  reactive: ["ok", "Compte réactivé."],
  role: ["ok", "Accès admin mis à jour."],
  erreur: ["erreur", "Action impossible (droits insuffisants, ou action sur votre propre compte)."],
};

export default async function AdminUtilisateurs({ searchParams }: { searchParams: { q?: string; page?: string; resultat?: string } }) {
  const { client, utilisateur, moi } = await exigerAdmin(null);
  const peutSuspendre = adminPeut(utilisateur, "suspendre_utilisateurs");
  const peutGererAdmins = adminPeut(utilisateur, "gerer_admins");
  const filtre = filtreTelephone(searchParams.q ?? "");
  const page = lirePage(searchParams.page);

  let requete = client
    .from("profiles")
    .select("id, telephone, pays, ville, statut_kyc, suspendu, role_admin, cree_le, profile_roles(role)", { count: "exact" })
    .order("cree_le", { ascending: false })
    .range((page - 1) * PAR_PAGE, page * PAR_PAGE - 1);
  if (filtre) requete = requete.like("telephone", `%${filtre}%`);
  const { data, count } = await requete;
  const lignes = (data ?? []) as unknown as Ligne[];
  const pages = Math.max(1, Math.ceil((count ?? 0) / PAR_PAGE));
  const resultat = searchParams.resultat ? RESULTATS[searchParams.resultat] : undefined;
  const lienPage = (p: number) => `/admin/utilisateurs?${new URLSearchParams({ ...(filtre && { q: filtre }), page: String(p) })}`;

  return (
    <CadreAdmin titre="Utilisateurs">
      <form className="mt-4 flex gap-2" role="search">
        <label htmlFor="q" className="sr-only">
          Rechercher un numéro
        </label>
        <input id="q" name="q" defaultValue={searchParams.q ?? ""} inputMode="tel" placeholder="Rechercher un numéro" className="min-h-12 min-w-0 flex-1 rounded-xl border border-vupay-trait bg-white px-3 text-base" />
        <button className="min-h-12 rounded-xl bg-vupay-primaire px-4 font-bold text-white">Chercher</button>
      </form>
      {resultat && <Message type={resultat[0]} texte={resultat[1]} />}
      <p className="mt-3 text-sm text-vupay-doux">
        {count ?? 0} compte{(count ?? 0) > 1 ? "s" : ""}
        {filtre ? ` contenant « ${filtre} »` : ""}.
      </p>

      <ul className="mt-3 grid gap-3">
        {lignes.map((u) => {
          const roles = u.profile_roles.map((r) => r.role);
          const estMoi = u.id === moi;
          return (
            <li key={u.id} className={`rounded-2xl bg-white p-4 shadow-sm ${u.suspendu ? "border-2 border-vupay-erreur" : ""}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-bold">
                  {u.telephone} {estMoi && <span className="text-sm font-normal text-vupay-doux">(vous)</span>}
                </p>
                {u.suspendu && <span className="rounded-full bg-vupay-erreur px-2 py-0.5 text-xs font-bold text-white">Suspendu</span>}
              </div>
              <p className="text-sm text-vupay-doux">
                {u.pays}
                {u.ville ? ` · ${u.ville}` : ""} · inscrit le {new Date(u.cree_le).toLocaleDateString("fr-FR")}
              </p>
              <p className="mt-1 flex flex-wrap gap-1 text-xs">
                {roles.map((r) => (
                  <span key={r} className="rounded-full bg-vupay-sable px-2 py-0.5 font-bold">
                    {r === "admin" ? `admin${u.role_admin ? ` · ${u.role_admin}` : ""}` : r}
                  </span>
                ))}
                <span className="rounded-full border border-vupay-trait px-2 py-0.5">{KYC[u.statut_kyc]}</span>
              </p>

              {!estMoi && (peutSuspendre || peutGererAdmins) && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {peutSuspendre && (
                    <form action={changerSuspension}>
                      <Cachés id={u.id} q={filtre} page={page} />
                      <input type="hidden" name="suspendre" value={u.suspendu ? "non" : "oui"} />
                      <button className={`min-h-11 rounded-xl px-3 text-sm font-bold ${u.suspendu ? "bg-vupay-primaire text-white" : "border-2 border-vupay-erreur text-vupay-erreur"}`}>
                        {u.suspendu ? "Réactiver" : "Suspendre"}
                      </button>
                    </form>
                  )}
                  {peutGererAdmins && (
                    <form action={changerRoleAdmin} className="flex gap-2">
                      <Cachés id={u.id} q={filtre} page={page} />
                      <label htmlFor={`role-${u.id}`} className="sr-only">
                        Accès admin
                      </label>
                      <select id={`role-${u.id}`} name="role_admin" defaultValue={roles.includes("admin") ? (u.role_admin ?? "aucun") : "aucun"} className="min-h-11 rounded-xl border border-vupay-trait bg-white px-2 text-sm">
                        <option value="aucun">Pas d&apos;accès admin</option>
                        <option value="moderateur">Modérateur</option>
                        <option value="finance">Finance</option>
                        <option value="support">Support</option>
                        <option value="super_admin">Super admin</option>
                      </select>
                      <button className="min-h-11 rounded-xl border-2 border-vupay-primaire px-3 text-sm font-bold text-vupay-primaire">Appliquer</button>
                    </form>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {pages > 1 && (
        <nav className="mt-4 flex items-center justify-between text-sm font-bold" aria-label="Pages">
          {page > 1 ? <Link href={lienPage(page - 1)} className="text-vupay-primaire">← Précédent</Link> : <span />}
          <span>
            Page {page} / {pages}
          </span>
          {page < pages ? <Link href={lienPage(page + 1)} className="text-vupay-primaire">Suivant →</Link> : <span />}
        </nav>
      )}
    </CadreAdmin>
  );
}

function Cachés({ id, q, page }: { id: string; q: string | null; page: number }) {
  return (
    <>
      <input type="hidden" name="id" value={id} />
      {q && <input type="hidden" name="q" value={q} />}
      <input type="hidden" name="page" value={page} />
    </>
  );
}
