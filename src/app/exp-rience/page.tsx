import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ExperienceContent from "@/app/exp-rience/components/ExperienceContent";

export const metadata = {
  title: "Expérience — Villa Haitam Marrakech",
  description:
    "Découvrez l'expérience Villa Haitam : détente au bord de la piscine, séjour en famille, entre amis, et exploration de Marrakech.",
};

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main>
        <ExperienceContent />
      </main>
      <Footer />
    </>
  );
}