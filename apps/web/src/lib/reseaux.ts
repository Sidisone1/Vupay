import type { Pays, Reseau } from "./types";

export interface InfoReseau {
  nom: string;
  format: string;
  phase: 1 | 2 | 3;
  lienCliquable: "oui" | "selon_compte" | "non_garanti";
  apiVues: boolean; // vérification automatique possible (comptes pro / Pages)
}

// Source : cahier des charges, « Réseaux couverts ». À revérifier au développement.
export const RESEAUX: Record<Reseau, InfoReseau> = {
  whatsapp: { nom: "WhatsApp", format: "Statut", phase: 1, lienCliquable: "oui", apiVues: false },
  instagram: { nom: "Instagram", format: "Story", phase: 1, lienCliquable: "oui", apiVues: true },
  facebook: { nom: "Facebook", format: "Story", phase: 1, lienCliquable: "selon_compte", apiVues: true },
  tiktok: { nom: "TikTok", format: "Story", phase: 2, lienCliquable: "non_garanti", apiVues: false },
  snapchat: { nom: "Snapchat", format: "Story", phase: 2, lienCliquable: "oui", apiVues: false },
  telegram: { nom: "Telegram", format: "Story", phase: 3, lienCliquable: "selon_compte", apiVues: false },
};

export const PAYS: Record<Pays, { nom: string; phase: 1 | 2 | 3; operateurs: string[] }> = {
  ML: { nom: "Mali", phase: 1, operateurs: ["Orange Money", "Moov Money", "Wave"] },
  CI: { nom: "Côte d'Ivoire", phase: 1, operateurs: ["Orange Money", "MTN MoMo", "Moov Money", "Wave"] },
  SN: { nom: "Sénégal", phase: 2, operateurs: ["Orange Money", "Wave", "Free Money / Mixx"] },
  BF: { nom: "Burkina Faso", phase: 2, operateurs: ["Orange Money", "Moov Money"] },
  BJ: { nom: "Bénin", phase: 2, operateurs: ["MTN MoMo", "Moov Money", "Celtis Cash"] },
  TG: { nom: "Togo", phase: 3, operateurs: ["Flooz (Moov)", "T-Money / Mixx"] },
  NE: { nom: "Niger", phase: 3, operateurs: ["Airtel Money", "Moov Money"] },
  GW: { nom: "Guinée-Bissau", phase: 3, operateurs: ["Orange Money", "MTN MoMo"] },
};

export const reseauxActifs = (phase: 1 | 2 | 3) =>
  (Object.keys(RESEAUX) as Reseau[]).filter((r) => RESEAUX[r].phase <= phase);
