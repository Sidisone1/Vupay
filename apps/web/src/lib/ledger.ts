import { exigerFcfa } from "./argent";
import type { Ecriture, Fcfa } from "./types";

// Les soldes ne sont jamais stockés : ils sont recalculés depuis le journal (ledger_entries).

export function soldes(ecritures: Ecriture[], compte: string): { disponible: Fcfa; enAttente: Fcfa } {
  let disponible = 0;
  let enAttente = 0;
  for (const e of ecritures) {
    if (e.compte !== compte) continue;
    exigerFcfa(e.montant);
    if (e.disponible) disponible += e.montant;
    else enAttente += e.montant;
  }
  return { disponible, enAttente };
}

/** Vérifie qu'un retrait est possible ; renvoie la liste des raisons de refus. */
export function verifierRetrait(
  montant: Fcfa,
  disponible: Fcfa,
  opts: { seuil: Fcfa; kycValide: boolean; numeroAuNomDuTitulaire: boolean },
): string[] {
  exigerFcfa(montant);
  const raisons: string[] = [];
  if (!opts.kycValide) raisons.push("Vérification d'identité requise avant le premier retrait");
  if (!opts.numeroAuNomDuTitulaire) raisons.push("Le numéro de retrait doit être au nom de la personne vérifiée");
  if (montant < opts.seuil) raisons.push(`Montant minimum : ${opts.seuil} F`);
  if (montant > disponible) raisons.push("Solde disponible insuffisant");
  return raisons;
}

/** Validation automatique sous le plafond journalier, manuelle au-dessus. */
export const retraitAutomatique = (montantDuJour: Fcfa, plafond: Fcfa) => montantDuJour <= plafond;
