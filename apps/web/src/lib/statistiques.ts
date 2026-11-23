// Résumés des visites et actions pour les écrans diffuseur et annonceur.
// Les visites sont affichées à part : elles ne sont jamais rémunérées.
import { ACTIONS_CONTACT, type ActionContact } from "./contacts";

export type StatutAction = "validee" | "en_attente" | "refusee";

export interface Resume {
  visites: number; // visites humaines (robots exclus)
  parType: Record<ActionContact, Record<StatutAction, number>>;
  validees: number;
  enAttente: number;
  refusees: number;
}

export function resumer(visites: { robot: boolean }[], actions: { type: ActionContact; statut: StatutAction }[]): Resume {
  const parType = Object.fromEntries(
    ACTIONS_CONTACT.map((t) => [t, { validee: 0, en_attente: 0, refusee: 0 }]),
  ) as Resume["parType"];
  for (const a of actions) parType[a.type][a.statut] += 1;
  const total = (s: StatutAction) => actions.filter((a) => a.statut === s).length;
  return {
    visites: visites.filter((v) => !v.robot).length,
    parType,
    validees: total("validee"),
    enAttente: total("en_attente"),
    refusees: total("refusee"),
  };
}

/** Taux d'action : actions validées pour 100 visites humaines (arrondi), ou null sans visite. */
export function tauxAction(r: Resume): number | null {
  return r.visites === 0 ? null : Math.round((r.validees / r.visites) * 100);
}
