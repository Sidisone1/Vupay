import { describe, expect, it } from "vitest";
import { formaterTelephone, normaliserTelephone, paysDuTelephone } from "./telephone";

describe("numéros de téléphone", () => {
  it("accepte un numéro malien saisi de plusieurs façons", () => {
    expect(normaliserTelephone("70 00 00 01", "ML")).toBe("+22370000001");
    expect(normaliserTelephone("+223 70-00-00-01", "ML")).toBe("+22370000001");
    expect(normaliserTelephone("0022370000001", "ML")).toBe("+22370000001");
  });
  it("respecte la longueur du pays (Côte d'Ivoire et Bénin à 10 chiffres)", () => {
    expect(normaliserTelephone("07 07 07 07 07", "CI")).toBe("+2250707070707");
    expect(normaliserTelephone("0707070707", "ML")).toBeNull();
    expect(normaliserTelephone("01 97 00 00 00", "BJ")).toBe("+2290197000000");
  });
  it("refuse un indicatif d'un autre pays, des lettres ou un numéro trop court", () => {
    expect(normaliserTelephone("+225 0707070707", "ML")).toBeNull();
    expect(normaliserTelephone("70abc001", "ML")).toBeNull();
    expect(normaliserTelephone("7000", "ML")).toBeNull();
    expect(normaliserTelephone("", "ML")).toBeNull();
  });
  it("retrouve le pays et formate pour l'affichage", () => {
    expect(paysDuTelephone("+22370000001")).toBe("ML");
    expect(paysDuTelephone("+2250707070707")).toBe("CI");
    expect(paysDuTelephone("+33612345678")).toBeNull();
    expect(formaterTelephone("+22370000001")).toBe("+223 70 00 00 01");
  });
});
