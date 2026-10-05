"use client";
import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Icon from "@/components/ui/AppIcon";
import Link from "next/link";

const AMENITIES = [
  { icon: "WifiIcon", fr: "Wi-Fi Gratuit", en: "Free Wi-Fi", ar: "واي فاي مجاني" },
  { icon: "TruckIcon", fr: "Parking Privé", en: "Private Parking", ar: "موقف خاص" },
  { icon: "SunIcon", fr: "Piscine Privée", en: "Private Pool", ar: "مسبح خاص" },
  { icon: "HomeIcon", fr: "Cuisine Équipée", en: "Equipped Kitchen", ar: "مطبخ مجهز" },
  { icon: "FireIcon", fr: "Barbecue", en: "Barbecue", ar: "شواء" },
  { icon: "BoltIcon", fr: "Climatisation", en: "Air Conditioning", ar: "تكييف هواء" },
  { icon: "SparklesIcon", fr: "Jardin Privé", en: "Private Garden", ar: "حديقة خاصة" },
  { icon: "BuildingOfficeIcon", fr: "Terrasse", en: "Terrace", ar: "شرفة" },
  { icon: "StarIcon", fr: "Aire de Jeux", en: "Playground", ar: "ملعب أطفال" },
];

export default function AmenitiesSection() {
  const { lang, dir } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll<HTMLElement>(".amenity-item").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 60);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="amenities-section" id="services" dir={dir}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">
            {lang === "fr" ? "Équipements" : lang === "en" ? "Amenities" : "المرافق"}
          </span>
          <h2 className="section-title">
            {lang === "fr" ? "Services & Équipements" : lang === "en" ? "Services & Amenities" : "الخدمات والمرافق"}
          </h2>
        </div>

        <div className="amenities-grid">
          {AMENITIES.map((a) => (
            <div
              key={a.fr}
              className="amenity-item"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}
            >
              <div className="amenity-icon-wrap">
                <Icon name={a.icon as any} size={22} variant="outline" className="text-primary" />
              </div>
              <span className="amenity-label">
                {lang === "fr" ? a.fr : lang === "en" ? a.en : a.ar}
              </span>
            </div>
          ))}
        </div>

        <div className="amenities-cta">
          <Link href="/la-villa" className="section-link-btn">
            {lang === "fr" ? "Tous les équipements" : lang === "en" ? "All Amenities" : "جميع المرافق"}
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}