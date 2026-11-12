"use client";
import React from "react";
import AppImage from "@/components/ui/AppImage";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/siteConfig";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

const VILLA_SPECS = [
{ icon: "HomeIcon", fr: "2 000 m²", en: "2,000 m²", ar: "٢٠٠٠ م²", labelFr: "Surface totale", labelEn: "Total area", labelAr: "المساحة الإجمالية" },
{ icon: "UserGroupIcon", fr: "9 personnes", en: "9 guests", ar: "٩ أشخاص", labelFr: "Capacité max.", labelEn: "Max. capacity", labelAr: "السعة القصوى" },
{ icon: "MoonIcon", fr: "3 chambres", en: "3 bedrooms", ar: "٣ غرف نوم", labelFr: "Chambres", labelEn: "Bedrooms", labelAr: "غرف النوم" },
{ icon: "SparklesIcon", fr: "3 salles de bain", en: "3 bathrooms", ar: "٣ حمامات", labelFr: "Salles de bain", labelEn: "Bathrooms", labelAr: "الحمامات" },
{ icon: "SunIcon", fr: "Piscine privée", en: "Private pool", ar: "مسبح خاص", labelFr: "Piscine", labelEn: "Pool", labelAr: "المسبح" },
{ icon: "MapPinIcon", fr: "Souihla, Marrakech", en: "Souihla, Marrakech", ar: "سويهلة، مراكش", labelFr: "Localisation", labelEn: "Location", labelAr: "الموقع" }];


const AMENITIES = [
{ icon: "WifiIcon", fr: "Wi-Fi gratuit", en: "Free Wi-Fi", ar: "واي فاي مجاني" },
{ icon: "TruckIcon", fr: "Parking privé", en: "Private parking", ar: "موقف خاص" },
{ icon: "SunIcon", fr: "Piscine privée", en: "Private pool", ar: "مسبح خاص" },
{ icon: "HomeIcon", fr: "Cuisine équipée", en: "Equipped kitchen", ar: "مطبخ مجهز" },
{ icon: "FireIcon", fr: "Barbecue", en: "Barbecue", ar: "شواء" },
{ icon: "BoltIcon", fr: "Climatisation", en: "Air conditioning", ar: "تكييف هواء" },
{ icon: "SparklesIcon", fr: "Jardin privé", en: "Private garden", ar: "حديقة خاصة" },
{ icon: "BuildingOfficeIcon", fr: "Terrasse", en: "Terrace", ar: "شرفة" },
{ icon: "StarIcon", fr: "Aire de jeux", en: "Playground", ar: "ملعب أطفال" }];


export default function LaVillaContent() {
  const { lang, dir } = useLanguage();

  return (
    <div className="villa-page" dir={dir}>
      {/* Page Hero */}
      <div className="page-hero">
        <AppImage
          src="/assets/images/villa/piscine.jpg"
          alt="Villa Haitam: piscine privée et jardin"
          fill
          priority
          sizes="100vw"
          className="page-hero-img" />
        
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-eyebrow text-white/70">
            {lang === "fr" ? "Villa Haitam" : lang === "en" ? "Villa Haitam" : "فيلا حيتام"}
          </span>
          <h1 className="page-hero-title">
            {lang === "fr" ? "La Villa" : lang === "en" ? "The Villa" : "الفيلا"}
          </h1>
          <p className="page-hero-sub">
            {SITE_CONFIG.address.full}
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="villa-intro-section">
        <div className="section-container">
          <div className="villa-intro-grid">
            <div>
              <span className="section-eyebrow">
                {lang === "fr" ? "Présentation" : lang === "en" ? "Overview" : "نظرة عامة"}
              </span>
              <h2 className="section-title">
                {lang === "fr" ? "Une villa d'exception à Marrakech" : lang === "en" ? "An exceptional villa in Marrakech" : "فيلا استثنائية في مراكش"}
              </h2>
              <p className="villa-intro-text">
                {lang === "fr" ? "Villa Haitam est une résidence privée d'exception nichée dans la région de Souihla, à quelques kilomètres de Marrakech. Sur plus de 2 000 m² de terrain, elle offre calme, intimité et espace, avec une piscine privée,un jardin et des terrasses pour profiter pleinement de Marrakech autrement." :
                lang === "en" ? "Villa Haitam is an exceptional private residence nestled in the Souihla region, a few kilometres from Marrakech. Over 2,000 m² of land offering calm, privacy and space, with a private pool, garden and terraces to enjoy Marrakech differently." : "فيلا حيتام هي إقامة خاصة استثنائية تقع في منطقة سويهلة، على بعد كيلومترات قليلة من مراكش. على أكثر من ٢٠٠٠ متر مربع من الأرض توفر الهدوء والخصوصية والمساحة، مع مسبح خاص وحديقة وشرفات للاستمتاع بمراكش بطريقة مختلفة."}
              </p>
              <Link href="/contact" className="reserve-btn inline-flex mt-6 text-sm font-semibold uppercase tracking-widest px-8 py-3">
                {lang === "fr" ? "Réserver la villa" : lang === "en" ? "Book the Villa" : "احجز الفيلا"}
              </Link>
            </div>
            <div className="villa-intro-img-col">
              <div className="villa-intro-img-wrap">
                <AppImage
                  src="/assets/images/villa/salon-b.jpg"
                  alt="Salon marocain de la villa ouvrant sur le jardin"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover" />
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="villa-specs-section">
        <div className="section-container">
          <div className="villa-specs-grid">
            {VILLA_SPECS.map((spec) =>
            <div key={spec.fr} className="villa-spec-card">
                <div className="villa-spec-icon">
                  <Icon name={spec.icon as any} size={24} variant="outline" className="text-primary" />
                </div>
                <span className="villa-spec-val">
                  {lang === "fr" ? spec.fr : lang === "en" ? spec.en : spec.ar}
                </span>
                <span className="villa-spec-label">
                  {lang === "fr" ? spec.labelFr : lang === "en" ? spec.labelEn : spec.labelAr}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pool Feature */}
      <section className="villa-pool-feature">
        <div className="villa-pool-img-wrap">
          <AppImage
            src="/assets/images/villa/piscine.jpg"
            alt="Piscine privée de la villa entourée de jardin et de palmiers"
            fill
            sizes="100vw"
            className="object-cover" />
          
          <div className="villa-pool-overlay" />
          <div className="villa-pool-text">
            <h2 className="villa-pool-title">
              {lang === "fr" ? "Piscine privée" : lang === "en" ? "Private Pool" : "مسبح خاص"}
            </h2>
            <p className="villa-pool-sub">
              {lang === "fr" ? "Disponible exclusivement pour les locataires de la villa." :
              lang === "en" ? "Available exclusively for villa guests." : "متاح حصريًا لضيوف الفيلا."}
            </p>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="villa-amenities-section">
        <div className="section-container">
          <h2 className="section-title mb-12">
            {lang === "fr" ? "Équipements & Services" : lang === "en" ? "Amenities & Services" : "المرافق والخدمات"}
          </h2>
          <div className="amenities-grid">
            {AMENITIES.map((a) =>
            <div key={a.fr} className="amenity-item" style={{ opacity: 1, transform: "none" }}>
                <div className="amenity-icon-wrap">
                  <Icon name={a.icon as any} size={22} variant="outline" className="text-primary" />
                </div>
                <span className="amenity-label">
                  {lang === "fr" ? a.fr : lang === "en" ? a.en : a.ar}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="villa-location-section">
        <div className="section-container">
          <div className="villa-location-grid">
            <div>
              <span className="section-eyebrow">
                {lang === "fr" ? "Localisation" : lang === "en" ? "Location" : "الموقع"}
              </span>
              <h2 className="section-title">
                {lang === "fr" ? "Où nous trouver" : lang === "en" ? "Where to Find Us" : "أين نجدنا"}
              </h2>
              <p className="villa-location-text">
                {lang === "fr" ? "Villa Haitam est idéalement située dans la commune de Souihla, à quelques kilomètres du centre de Marrakech. Un cadre paisible à la campagne, tout en restant proche des richesses de la ville." :
                lang === "en" ? "Villa Haitam is ideally located in the commune of Souihla, a few kilometres from the centre of Marrakech. A peaceful countryside setting, while remaining close to the riches of the city." : "تقع فيلا حيتام في موقع مثالي في بلدية سويهلة، على بعد كيلومترات قليلة من وسط مراكش. إطار ريفي هادئ مع الحفاظ على القرب من كنوز المدينة."}
              </p>
              <div className="villa-location-address">
                <Icon name="MapPinIcon" size={18} variant="solid" className="text-primary mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.address.full}</span>
              </div>
              <div className="villa-location-actions">
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reserve-btn inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest px-6 py-3">
                  
                  <Icon name="MapPinIcon" size={16} variant="solid" />
                  {lang === "fr" ? "Voir l'itinéraire" : lang === "en" ? "Get Directions" : "الاتجاهات"}
                </a>
                <Link href="/contact" className="section-link-btn">
                  {lang === "fr" ? "Nous contacter" : lang === "en" ? "Contact Us" : "اتصل بنا"}
                  <span>→</span>
                </Link>
              </div>
            </div>
            <div className="villa-map-placeholder">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_17815ea93-1773214096137.png"
                alt="Marrakech landscape panoramic view with palm trees and Atlas mountains in the distance, warm afternoon light"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover rounded-2xl" />
              
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-overlay-btn">
                
                <Icon name="MapPinIcon" size={20} variant="solid" className="text-white" />
                {lang === "fr" ? "Ouvrir dans Maps" : lang === "en" ? "Open in Maps" : "فتح في الخرائط"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>);

}