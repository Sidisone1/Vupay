import { describe, expect, it } from "vitest";
import { codeOtpValide, masquerTelephone, normaliserTelephone } from "./telephone";

describe("normalisation des numéros", () => {
  it("accepte les écritures courantes d'un numéro malien", () => {
    for (const saisie of ["70123456", "70 12 34 56", "70-12-34-56", "+223 70 12 34 56", "0022370123456", "(+223) 70.12.34.56"]) {
      expect(normaliserTelephone(saisie, "ML")).toEqual({ e164: "+22370123456", pays: "ML" });
    }
  });
  it("respecte la longueur de chaque pays", () => {
    expect(normaliserTelephone("0701020304", "CI")).toEqual({ e164: "+2250701020304", pays: "CI" });
    expect(normaliserTelephone("771234567", "SN")).toEqual({ e164: "+221771234567", pays: "SN" });
    expect(normaliserTelephone("0197000000", "BJ")).toEqual({ e164: "+2290197000000", pays: "BJ" });
    expect(normaliserTelephone("7012345", "ML")).toBeNull();
    expect(normaliserTelephone("701234567", "ML")).toBeNull();
  });
  it("reconnaît le pays d'un numéro saisi avec indicatif", () => {
    expect(normaliserTelephone("+221 77 123 45 67", "ML")).toEqual({ e164: "+221771234567", pays: "SN" });
  });
  it("refuse les pays non couverts et les saisies invalides", () => {
    expect(normaliserTelephone("+33612345678", "ML")).toBeNull();
    expect(normaliserTelephone("70abc456", "ML")).toBeNull();
    expect(normaliserTelephone("", "ML")).toBeNull();
  });
});

describe("code OTP", () => {
  it("exige exactement 6 chiffres", () => {
    expect(codeOtpValide("123456")).toBe(true);
    expect(codeOtpValide(" 123456 ")).toBe(true);
    expect(codeOtpValide("12345")).toBe(false);
    expect(codeOtpValide("12345a")).toBe(false);
  });
});

describe("masquage", () => {
  it("ne laisse voir que les 4 derniers chiffres", () => {
    expect(masquerTelephone("+22370123456")).toBe("+223 •• •• 34 56");
    expect(masquerTelephone("+2250701020304")).toBe("+225 •• •• •• 03 04");
  });
});
