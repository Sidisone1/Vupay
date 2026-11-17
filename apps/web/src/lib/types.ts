// Types partagés de Vupay. Toutes les sommes sont des entiers en FCFA (XOF).

export type Fcfa = number;

export type Role = "diffuseur" | "annonceur" | "admin";
export type RoleAdmin = "super_admin" | "moderateur" | "finance" | "support";

export type Reseau = "whatsapp" | "instagram" | "facebook" | "tiktok" | "snapchat" | "telegram";

export type Pays = "ML" | "CI" | "SN" | "BF" | "BJ" | "TG" | "NE" | "GW";

export type Niveau = "bronze" | "argent" | "or";

export type StatutKyc = "non_soumis" | "en_attente" | "valide" | "refuse";

export type ObjectifCampagne = "vues" | "clics";

export type StatutCampagne =
  | "brouillon"
  | "en_moderation"
  | "active"
  | "en_pause"
  | "terminee"
  | "refusee";

export type StatutPreuve = "en_attente" | "validee_auto" | "a_verifier" | "validee" | "refusee";

export type StatutRetrait = "demande" | "a_valider" | "en_cours" | "paye" | "echoue" | "annule";

/** Types d'écritures du journal comptable unique (ledger_entries). */
export type TypeEcriture =
  | "gain_vues" // crédit diffuseur après preuve validée
  | "gain_clics" // crédit diffuseur pour clics valides
  | "prime_parrainage"
  | "retrait" // débit diffuseur
  | "retrait_annule" // recrédit après échec opérateur
  | "recharge_annonceur" // crédit portefeuille annonceur
  | "debit_campagne" // débit annonceur pour vues/clics validés
  | "remboursement_annonceur"
  | "ajustement"; // correction manuelle admin (journalisée)

export interface Ecriture {
  compte: string; // id du profil ou de l'annonceur
  type: TypeEcriture;
  montant: Fcfa; // positif = crédit, négatif = débit
  disponible: boolean; // false = en attente de validation
}
