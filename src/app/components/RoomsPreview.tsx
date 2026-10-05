"use client";
import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import Link from "next/link";

const ROOMS = [
{
  id: 1,
  nameFr: "Suite Principale",
  nameEn: "Master Suite",
  nameAr: "الجناح الرئيسي",
  descFr: "Grande chambre lumineuse avec vue sur le jardin et la piscine. Salle de bain privée avec douche et baignoire.",
  descEn: "Spacious bright room with garden and pool views. Private bathroom with shower and bathtub.",
  descAr: "غرفة فسيحة ومضيئة مع إطلالة على الحديقة والمسبح. حمام خاص مع دش وحوض استحمام.",
  capacity: "2-3",
  image: "https://images.unsplash.com/photo-1721216596273-586bfde422e7",
  alt: "Luxury Moroccan master bedroom with warm terracotta walls, white linen, natural light from garden-facing windows",
  features: ["Wi-Fi", "Climatisation", "Salle de bain privée"]
},
{
  id: 2,
  nameFr: "Chambre Jardin",
  nameEn: "Garden Room",
  nameAr: "غرفة الحديقة",
  descFr: "Chambre confortable ouvrant directement sur le jardin verdoyant. Décoration chaleureuse et authentique.",
  descEn: "Comfortable room opening directly onto the lush garden. Warm and authentic decoration.",
  descAr: "غرفة مريحة تفتح مباشرة على الحديقة الخضراء. ديكور دافئ وأصيل.",
  capacity: "2",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_4a58aaa5d-1790934921462.png",
  alt: "Cozy Moroccan bedroom with terracotta accents, wooden furniture and soft morning light through garden doors",
  features: ["Wi-Fi", "Climatisation", "Vue jardin"]
},
{
  id: 3,
  nameFr: "Chambre Terrasse",
  nameEn: "Terrace Room",
  nameAr: "غرفة الشرفة",
  descFr: "Chambre avec accès à la terrasse privée. Idéale pour profiter des couchers de soleil sur Marrakech.",
  descEn: "Room with access to a private terrace. Perfect for enjoying sunsets over Marrakech.",
  descAr: "غرفة مع إمكانية الوصول إلى شرفة خاصة. مثالية للاستمتاع بغروب الشمس فوق مراكش.",
  capacity: "2-4",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11a08d8b3-1778777382071.png",
  alt: "Warm Moroccan bedroom with access to private terrace, golden sunset light, traditional zellige tile details",
  features: ["Wi-Fi", "Climatisation", "Terrasse privée"]
}];


export default function RoomsPreview() {
  const { lang, dir } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll<HTMLElement>(".room-card").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    observer?.observe(section);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="rooms-section" id="chambres-preview" dir={dir}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">
            {lang === "fr" ? "Hébergement" : lang === "en" ? "Accommodation" : "الإقامة"}
          </span>
          <h2 className="section-title">{t("rooms.title", lang)}</h2>
        </div>

        <div className="rooms-grid">
          {ROOMS?.map((room) =>
          <article
            key={room?.id}
            className="room-card"
            style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)" }}>
            
              <div className="room-img-wrap">
                <AppImage
                src={room?.image}
                alt={room?.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="room-img" />
              
                <div className="room-img-overlay" />
                <span className="room-capacity-badge">
                  {room?.capacity} {lang === "fr" ? "pers." : lang === "en" ? "guests" : "أشخاص"}
                </span>
              </div>
              <div className="room-body">
                <h3 className="room-name">
                  {lang === "fr" ? room?.nameFr : lang === "en" ? room?.nameEn : room?.nameAr}
                </h3>
                <p className="room-desc">
                  {lang === "fr" ? room?.descFr : lang === "en" ? room?.descEn : room?.descAr}
                </p>
                <div className="room-features">
                  {room?.features?.map((f) =>
                <span key={f} className="room-feature-tag">{f}</span>
                )}
                </div>
                <div className="room-actions">
                  <Link href="/contact" className="reserve-btn text-xs font-semibold uppercase tracking-widest px-5 py-2.5">
                    {t("rooms.cta", lang)}
                  </Link>
                  <Link href="/chambres" className="room-details-link">
                    {lang === "fr" ? "Voir les détails" : lang === "en" ? "View Details" : "عرض التفاصيل"}
                    →
                  </Link>
                </div>
              </div>
            </article>
          )}
        </div>

        <div className="rooms-cta-row">
          <Link href="/chambres" className="section-link-btn">
            {lang === "fr" ? "Toutes les chambres" : lang === "en" ? "All Rooms" : "جميع الغرف"}
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>);

}