import "@/styles/globals.css";
import type { Metadata } from "next";

import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Calculadora de IMC (Índice de Massa Corporal) - Adultos, Idosos e Crianças`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>{children}</body>
    </html>
  );
}
