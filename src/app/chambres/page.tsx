import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChambresContent from "@/app/chambres/components/ChambresContent";

export const metadata = {
  title: "Chambres — Villa Haitam Marrakech",
  description:
    "Découvrez les 3 chambres de Villa Haitam Marrakech. Chaque chambre offre confort, climatisation, Wi-Fi et salle de bain privée.",
};

export default function ChambresPage() {
  return (
    <>
      <Header />
      <main>
        <ChambresContent />
      </main>
      <Footer />
    </>
  );
}