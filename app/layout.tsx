import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aivio Health — Intelligente Pflegesoftware",
  description:
    "KI-gestützte Pflegedokumentation, Tourenplanung und Abrechnung für ambulante Pflegedienste in Deutschland.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://aivio.health"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
