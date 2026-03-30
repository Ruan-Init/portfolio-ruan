import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ruanespindola.dev"),
  title: {
    default: "Ruan Espindola — Desenvolvedor Frontend",
    template: "%s | Ruan Espindola",
  },
  description:
    "Desenvolvedor Frontend especializado em React, Next.js e TypeScript. Criando interfaces modernas, performáticas e acessíveis em Brasília, DF.",
  keywords: [
    "desenvolvedor frontend",
    "react",
    "next.js",
    "typescript",
    "tailwind",
    "node.js",
    "brasília",
    "portfolio",
    "ruan espindola",
  ],
  authors: [{ name: "Ruan Carlos Espindola da Silva" }],
  creator: "Ruan Espindola",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ruanespindola.dev",
    title: "Ruan Espindola — Desenvolvedor Frontend",
    description:
      "Desenvolvedor Frontend especializado em React, Next.js e TypeScript.",
    siteName: "Ruan Espindola",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruan Espindola — Desenvolvedor Frontend",
    description:
      "Desenvolvedor Frontend especializado em React, Next.js e TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-bg text-white antialiased selection:bg-accent selection:text-bg">
        {children}
      </body>
    </html>
  );
}
