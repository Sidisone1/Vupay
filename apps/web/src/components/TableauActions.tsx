import { ACTIONS_CONTACT, libelleAction } from "@/lib/contacts";
import { tauxAction, type Resume } from "@/lib/statistiques";

/** Visites (jamais payées) puis actions par type et par statut. */
export function TableauActions({ resume }: { resume: Resume }) {
  const taux = tauxAction(resume);
  return (
    <div className="rounded-2xl bg-white p-4">
      <div className="grid grid-cols-3 gap-2 text-center">
        <Chiffre valeur={resume.visites} libelle="Visites" aide="non payées" />
        <Chiffre valeur={resume.validees} libelle="Actions validées" />
        <Chiffre valeur={resume.enAttente} libelle="En vérification" />
      </div>
      <table className="mt-4 w-full text-sm">
        <caption className="sr-only">Actions par type</caption>
        <thead>
          <tr className="text-left text-xs text-vupay-doux">
            <th className="py-1 font-normal">Bouton</th>
            <th className="py-1 text-right font-normal">Validées</th>
            <th className="py-1 text-right font-normal">À vérifier</th>
            <th className="py-1 text-right font-normal">Refusées</th>
          </tr>
        </thead>
        <tbody>
          {ACTIONS_CONTACT.map((t) => (
            <tr key={t} className="border-t border-vupay-trait">
              <td className="py-2">{libelleAction(t)}</td>
              <td className="py-2 text-right font-bold">{resume.parType[t].validee}</td>
              <td className="py-2 text-right">{resume.parType[t].en_attente}</td>
              <td className="py-2 text-right text-vupay-doux">{resume.parType[t].refusee}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-xs text-vupay-doux">
        {taux === null ? "Pas encore de visite." : `${taux} action(s) validée(s) pour 100 visites.`} Une même personne ne compte
        qu&apos;une fois par bouton. Les visites seules ne sont jamais rémunérées.
      </p>
    </div>
  );
}

function Chiffre({ valeur, libelle, aide }: { valeur: number; libelle: string; aide?: string }) {
  return (
    <div className="rounded-xl bg-vupay-fond p-2">
      <p className="text-2xl font-black text-vupay-primaire">{valeur}</p>
      <p className="text-xs font-bold leading-tight">{libelle}</p>
      {aide && <p className="text-[11px] text-vupay-doux">{aide}</p>}
    </div>
  );
}
