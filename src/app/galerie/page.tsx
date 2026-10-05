import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalerieContent from "@/app/galerie/components/GalerieContent";

export const metadata = {
  title: "Galerie Photos — Villa Haitam Marrakech",
  description:
    "Découvrez Villa Haitam en images : piscine privée, chambres, jardin, terrasse et les environs de Marrakech.",
};

export default function GaleriePage() {
  return (
    <>
      <Header />
      <main>
        <GalerieContent />
      </main>
      <Footer />
    </>
  );
}