// Codes courts uniques : imprimés sur le visuel (ex. « ST-4K7 ») et dans le lien (vupay.app/c/ab12).
// Alphabet sans caractères ambigus (0/O, 1/I/L) pour faciliter la lecture OCR.
const ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";

function aleatoire(n: number): string {
  const octets = new Uint8Array(n);
  crypto.getRandomValues(octets);
  return Array.from(octets, (o) => ALPHABET[o % ALPHABET.length]).join("");
}

export const codeVisuel = () => `ST-${aleatoire(3)}`;
export const codeLien = () => aleatoire(6).toLowerCase();
