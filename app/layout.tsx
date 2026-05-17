import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transforma Consulting | Ideje i pristupi koji pokreću promjene",
  description: "Transforma Consulting pomaže organizacijama, institucijama i zajednicama da razviju jasne ideje, kvalitetne projekte, snažna partnerstva i procese koji donose stvarnu promjenu.",
  keywords: ["Transforma", "consulting", "savjetovanje", "projekti", "edukacije", "facilitacija", "Sarajevo"],
  openGraph: {
    title: "Transforma Consulting",
    description: "Ideje i pristupi koji pokreću promjene.",
    url: "https://transforma.ba",
    siteName: "Transforma Consulting",
    locale: "bs_BA",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bs">
      <body>{children}</body>
    </html>
  );
}
