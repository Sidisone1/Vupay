import { describe, expect, it } from "vitest";
import { destinationAutorisee, potentiellementRemunerable } from "./contacts";

describe("destinations de la publicité Vupay", () => {
  it("accepte un WhatsApp officiel", () => {
    expect(destinationAutorisee({ type:"envoyer_message", url:"https://wa.me/22370000000?text=Bonjour", libelle:"Message" })).toBe(true);
  });
  it("refuse un schéma non HTTPS", () => {
    expect(destinationAutorisee({ type:"acheter", url:"javascript:alert(1)", libelle:"Acheter" })).toBe(false);
  });
  it("refuse des hôtes trompeurs et locaux", () => {
    expect(destinationAutorisee({ type:"numero_whatsapp", url:"https://wa.me.evil.example/2237", libelle:"WhatsApp" })).toBe(false);
    expect(destinationAutorisee({ type:"acheter", url:"https://localhost/admin", libelle:"Acheter" })).toBe(false);
  });
  it("ne paie ni une visite simple ni une action en attente", () => {
    expect(potentiellementRemunerable(null)).toBe(false);
    const event = {attributionId:"a",campagneId:"c",type:"acheter" as const,destinationId:"d",cleIdempotence:"x",statut:"en_attente" as const,horodatage:"2026-11-20T00:00:00Z"};
    expect(potentiellementRemunerable(event)).toBe(false);
    expect(potentiellementRemunerable({...event,statut:"validee"})).toBe(true);
  });
});
