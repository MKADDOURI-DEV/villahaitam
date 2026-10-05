import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactContent from "@/app/contact/components/ContactContent";

export const metadata = {
  title: "Contact — Villa Haitam Marrakech",
  description:
    "Contactez Villa Haitam Marrakech. Appelez, WhatsApp, ou envoyez une demande de réservation. Douar Aarich, Commune Souihla, Marrakech.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}