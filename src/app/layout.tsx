import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vupay — plateforme publicitaire",
  description: "Gagnez de l'argent en diffusant des pubs sur vos statuts et stories. Retrait Mobile Money.",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { themeColor: "#6C3BF5", width: "device-width", initialScale: 1 };

export default function RacineLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
