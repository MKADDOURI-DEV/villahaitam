import React from "react";
import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "../styles/tailwind.css";
import { LanguageProvider } from "@/context/LanguageContext";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Villa Haitam Marrakech — Villa Privée avec Piscine",
  description:
    "Villa Haitam, villa privée de luxe à Marrakech. Piscine privée, 3 chambres, 9 personnes, jardin, terrasse. Commune Souihla, Marrakech.",
  keywords: [
    "Villa Haitam Marrakech",
    "villa privée Marrakech",
    "villa avec piscine Marrakech",
    "location villa Marrakech",
    "Villa Marrakech Souihla",
  ],
  openGraph: {
    title: "Villa Haitam Marrakech",
    description:
      "Villa privée de luxe à Marrakech. Piscine privée, 3 chambres, jardin.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Villa Haitam Marrakech",
    images: [{ url: "/assets/images/app_logo.png", width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Haitam Marrakech",
    description:
      "Villa privée de luxe à Marrakech. Piscine privée, 3 chambres, jardin.",
    images: ["/assets/images/app_logo.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className={dmSans.className}>
        <LanguageProvider>{children}</LanguageProvider>

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fvillahaita1603back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.21" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.3" /></body>
    </html>
  );
}