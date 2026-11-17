import { EcranAVenir } from "@/components/EcranAVenir";

export default function AdminJournal() {
  return <EcranAVenir titre="Journal des actions" lot="Lot 1 · Socle" retour="/admin" fonctions={["Qui a fait quoi dans le back-office (audit_logs)", "Rôles : super-admin, modérateur, finance, support"]} />;
}
