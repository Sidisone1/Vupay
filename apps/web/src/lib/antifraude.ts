import { PLAFOND_VUES_PAR_STORY } from "./tarifs";
import type { Niveau } from "./types";

// Règles anti-fraude du cahier des charges. Seuils de départ, à ajuster après un mois de données.
export const SEUILS = {
  facteurVuesAnormales: 1.5, // vues > 1,5 × portée habituelle → vérification manuelle
  tauxClicSuspect: 0.15, // taux de clic > 15 % → suspicion de clics achetés
};

export interface EntreePreuve {
  vuesLues: number | null; // lues par l'OCR
  codeLu: string | null; // code court lu sur la capture
  codeAttendu: string;
  porteeHabituelle: number; // moyenne des vues du diffuseur sur ce réseau
  empreinteDejaVue: boolean; // capture réutilisée
  interfaceReseauConforme: boolean; // IA de vision : bonne interface, pas de retouche
  niveau: Niveau;
  clicsValides: number;
}

export type Decision =
  | { statut: "refusee"; motifs: string[]; vuesPayees: 0 }
  | { statut: "a_verifier"; motifs: string[]; vuesPayees: number }
  | { statut: "validee_auto"; motifs: []; vuesPayees: number };

export function evaluerPreuve(p: EntreePreuve): Decision {
  const refus: string[] = [];
  if (p.empreinteDejaVue) refus.push("Capture déjà utilisée");
  if (!p.codeLu || p.codeLu.toUpperCase() !== p.codeAttendu.toUpperCase()) {
    refus.push("Code absent ou faux");
  }
  if (refus.length) return { statut: "refusee", motifs: refus, vuesPayees: 0 };

  const doutes: string[] = [];
  const vues = p.vuesLues ?? 0;
  if (p.vuesLues === null) doutes.push("Nombre de vues illisible");
  if (!p.interfaceReseauConforme) doutes.push("Interface non reconnue ou image retouchée");
  if (p.porteeHabituelle > 0 && vues > SEUILS.facteurVuesAnormales * p.porteeHabituelle) {
    doutes.push("Vues anormales par rapport à la portée habituelle");
  }
  if (vues > 0 && p.clicsValides / vues > SEUILS.tauxClicSuspect) {
    doutes.push("Taux de clic suspect");
  }

  const vuesPayees = Math.min(vues, PLAFOND_VUES_PAR_STORY[p.niveau]);
  if (doutes.length) return { statut: "a_verifier", motifs: doutes, vuesPayees };
  return { statut: "validee_auto", motifs: [], vuesPayees };
}

/** Un clic n'est payé qu'une fois par appareil et par IP sur 24 h, hors robots et hors diffuseur. */
export interface EntreeClic {
  estRobot: boolean;
  estLeDiffuseur: boolean;
  dejaCompteSur24h: boolean; // même appareil ou même IP hachée sur ce lien
}

export const clicValide = (c: EntreeClic) => !c.estRobot && !c.estLeDiffuseur && !c.dejaCompteSur24h;
