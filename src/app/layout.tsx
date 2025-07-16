import "@/styles/globals.css";
import type { Metadata } from "next";

import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Calculadora de IMC - Adultos, Idosos e Crianças`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="google-site-verification" content="jMe4B3UjZdywbjepRqkW4fytr0BgmNnIbDJmf5Nnl4Q" />
        <meta name="google-adsense-account" content="ca-pub-7342347486013902" />
        <meta name="description" content="Calculadora de IMC para Adultos, Idosos e Criancas." />
        <meta name="keywords" content="imc, calculadora imc, imc adulto, imc bebe, imc idoso, imc crianca, indice massa corporal" />
        <link rel="canonical" href="https://calculadora-imc-adultos-criancas-idos.vercel.app" />

        <meta property="og:title" content="Calculadora de IMC - Adultos, Idosos e Criancas." />
        <meta property="og:description" content="Calculadora de IMC para Adultos, Idosos e Criancas." />
        <meta property="og:url" content="https://calculadora-imc-adultos-criancas-idos.vercel.app" />
      </head>
      <body className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>{children}</body>
    </html>
  );
}
