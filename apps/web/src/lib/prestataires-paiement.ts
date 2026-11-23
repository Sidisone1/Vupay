export type PrestatairePaiement = "saspay" | "ligdicash";
export type UsagePaiement = "recharge" | "retrait";
export const PRESTATAIRES: Readonly<Record<PrestatairePaiement, {
  nom: string;
  usagesPrevus: readonly UsagePaiement[];
  activeEnProduction: false;
}>> = {
  saspay: { nom: "SasPay", usagesPrevus: ["recharge", "retrait"], activeEnProduction: false },
  ligdicash: { nom: "LigdiCash", usagesPrevus: ["recharge", "retrait"], activeEnProduction: false },
};

export function prestataireDisponibleEnProduction(p: PrestatairePaiement): boolean {
  return PRESTATAIRES[p].activeEnProduction;
}
