import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import IntroSection from "@/app/components/IntroSection";
import RoomsPreview from "@/app/components/RoomsPreview";
import PoolSection from "@/app/components/PoolSection";
import AmenitiesSection from "@/app/components/AmenitiesSection";
import ReservationSection from "@/app/components/ReservationSection";
import MarrakechTeaser from "@/app/components/MarrakechTeaser";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <RoomsPreview />
        <PoolSection />
        <AmenitiesSection />
        <MarrakechTeaser />
        <ReservationSection />
      </main>
      <Footer />
    </>
  );
}