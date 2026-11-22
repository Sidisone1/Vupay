import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vupay — Publicité et clics qualifiés",
  description: "Vupay connecte entreprises et diffuseurs. Les interactions de contact qualifiées sont suivies et vérifiées.",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" },
};
export const viewport: Viewport = { themeColor: "#006B3A", width: "device-width", initialScale: 1 };
export default function RacineLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body className="min-h-screen">{children}</body></html>;
}
