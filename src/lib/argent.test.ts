import { describe, expect, it } from "vitest";
import { exigerFcfa, formaterFcfa } from "./argent";

describe("argent", () => {
  it("refuse les décimales", () => {
    expect(() => exigerFcfa(10.5)).toThrow();
    expect(exigerFcfa(1000)).toBe(1000);
  });
  it("formate en FCFA", () => {
    expect(formaterFcfa(57118)).toBe("57 118 F");
    expect(formaterFcfa(-1000)).toBe("-1 000 F");
  });
});
