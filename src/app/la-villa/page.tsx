import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LaVillaContent from "@/app/la-villa/components/LaVillaContent";

export const metadata = {
  title: "La Villa — Villa Haitam Marrakech",
  description:
    "Villa Haitam : 2000m², 9 personnes, 3 chambres, piscine privée, jardin, terrasse. Villa privée de luxe à Marrakech, Commune Souihla.",
};

export default function LaVillaPage() {
  return (
    <>
      <Header />
      <main>
        <LaVillaContent />
      </main>
      <Footer />
    </>
  );
}