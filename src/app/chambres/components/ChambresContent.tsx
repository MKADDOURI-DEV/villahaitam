"use client";
import React, { useState } from "react";
import AppImage from "@/components/ui/AppImage";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import Link from "next/link";
import Icon from "@/components/ui/AppIcon";
import { getWhatsAppUrl } from "@/data/siteConfig";

const ROOMS = [
{
  id: 1,
  nameFr: "Suite Principale",
  nameEn: "Master Suite",
  nameAr: "الجناح الرئيسي",
  descFr:
  "Grande chambre lumineuse baignée de lumière naturelle, avec vue directe sur le jardin et la piscine. Décoration chaleureuse aux tons terracotta et blanc. Salle de bain privée spacieuse.",
  descEn:
  "Large bright room bathed in natural light, with direct views of the garden and pool. Warm terracotta and white décor. Spacious private bathroom.",
  descAr:
  "غرفة كبيرة ومشرقة تغمرها الضوء الطبيعي، مع إطلالة مباشرة على الحديقة والمسبح. ديكور دافئ بألوان الطرة والأبيض. حمام خاص فسيح.",
  capacity: "2–3",
  bed: { fr: "Grand lit double", en: "King size bed", ar: "سرير كبير" },
  bathroom: { fr: "Salle de bain privée", en: "Private bathroom", ar: "حمام خاص" },
  view: { fr: "Jardin & Piscine", en: "Garden & Pool", ar: "الحديقة والمسبح" },
  images: [
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1696b88e8-1772057043546.png",
    alt: "Luxury master suite bedroom with warm terracotta walls, white linen, garden view, natural morning light"
  },
  {
    src: "https://images.unsplash.com/photo-1723259457609-fe1eaf02cf77",
    alt: "Modern private bathroom with white marble, warm lighting, Moroccan tile accents"
  }],

  amenities: ["Wi-Fi", "Climatisation", "Salle de bain privée", "Vue jardin", "Vue piscine"]
},
{
  id: 2,
  nameFr: "Chambre Jardin",
  nameEn: "Garden Room",
  nameAr: "غرفة الحديقة",
  descFr:
  "Chambre confortable et authentique ouvrant directement sur le jardin verdoyant. Idéale pour une famille ou deux adultes cherchant calme et nature.",
  descEn:
  "Comfortable and authentic room opening directly onto the lush garden. Ideal for a family or two adults seeking calm and nature.",
  descAr:
  "غرفة مريحة وأصيلة تفتح مباشرة على الحديقة الخضراء. مثالية لعائلة أو شخصين بالغين يبحثان عن الهدوء والطبيعة.",
  capacity: "2",
  bed: { fr: "Lit double", en: "Double bed", ar: "سرير مزدوج" },
  bathroom: { fr: "Salle de bain privée", en: "Private bathroom", ar: "حمام خاص" },
  view: { fr: "Jardin", en: "Garden", ar: "الحديقة" },
  images: [
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1cf78b66d-1784052318574.png",
    alt: "Cozy Moroccan garden room with warm wood furniture, terracotta details, soft natural light from garden doors"
  },
  {
    src: "https://images.unsplash.com/photo-1644162036280-97a514dee7ad",
    alt: "Lush private garden view from room window, palm trees and flowering plants in morning light"
  }],

  amenities: ["Wi-Fi", "Climatisation", "Salle de bain privée", "Vue jardin", "Accès direct jardin"]
},
{
  id: 3,
  nameFr: "Chambre Terrasse",
  nameEn: "Terrace Room",
  nameAr: "غرفة الشرفة",
  descFr:
  "Chambre avec accès à une terrasse privée idéale pour profiter des couchers de soleil sur la campagne de Marrakech. Peut accueillir jusqu\'à 4 personnes.",
  descEn:
  "Room with access to a private terrace, perfect for enjoying sunsets over the Marrakech countryside. Can accommodate up to 4 guests.",
  descAr:
  "غرفة مع إمكانية الوصول إلى شرفة خاصة مثالية للاستمتاع بغروب الشمس فوق ريف مراكش. يمكنها استيعاب ما يصل إلى 4 أشخاص.",
  capacity: "2–4",
  bed: { fr: "Lits configurables", en: "Configurable beds", ar: "أسرة قابلة للتعديل" },
  bathroom: { fr: "Salle de bain privée", en: "Private bathroom", ar: "حمام خاص" },
  view: { fr: "Terrasse & Campagne", en: "Terrace & Countryside", ar: "الشرفة والريف" },
  images: [
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1667f3ed4-1785927081180.png",
    alt: "Bright Moroccan room with private terrace access, golden sunset light streaming through, traditional zellige tile floor"
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1ac138d85-1772209854785.png",
    alt: "Private villa terrace with sun loungers overlooking Marrakech countryside, palm trees at dusk"
  }],

  amenities: ["Wi-Fi", "Climatisation", "Salle de bain privée", "Terrasse privée", "Vue campagne"]
}];


export default function ChambresContent() {
  const { lang, dir } = useLanguage();
  const [activeImgs, setActiveImgs] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0 });

  return (
    <div className="chambres-page" dir={dir}>
      {/* Page Hero */}
      <div className="page-hero">
        <AppImage
          src="https://images.unsplash.com/photo-1721216596273-586bfde422e7"
          alt="Elegant Moroccan villa bedroom with warm terracotta tones, white linen and garden view, dim atmospheric lighting"
          fill
          priority
          sizes="100vw"
          className="page-hero-img" />
        
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-eyebrow text-white/70">
            {lang === "fr" ? "Hébergement" : lang === "en" ? "Accommodation" : "الإقامة"}
          </span>
          <h1 className="page-hero-title">{t("rooms.title", lang)}</h1>
          <p className="page-hero-sub">
            {lang === "fr" ? "3 chambres pour jusqu'à 9 personnes" :
            lang === "en" ? "3 bedrooms for up to 9 guests" : "٣ غرف نوم لما يصل إلى ٩ أشخاص"}
          </p>
        </div>
      </div>

      {/* Rooms */}
      <div className="chambres-list">
        {ROOMS.map((room, idx) =>
        <article key={room.id} className={`chambre-article ${idx % 2 === 1 ? "chambre-article-reverse" : ""}`}>
            {/* Images */}
            <div className="chambre-imgs-col">
              <div className="chambre-main-img-wrap">
                <AppImage
                src={room.images[activeImgs[room.id]]?.src || room.images[0].src}
                alt={room.images[activeImgs[room.id]]?.alt || room.images[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="chambre-main-img" />
              
              </div>
              {room.images.length > 1 &&
            <div className="chambre-thumb-row">
                  {room.images.map((img, i) =>
              <button
                key={i}
                onClick={() => setActiveImgs((p) => ({ ...p, [room.id]: i }))}
                className={`chambre-thumb ${activeImgs[room.id] === i ? "chambre-thumb-active" : ""}`}>
                
                      <AppImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="100px"
                  className="object-cover" />
                
                    </button>
              )}
                </div>
            }
            </div>

            {/* Info */}
            <div className="chambre-info-col">
              <span className="chambre-num">
                {String(room.id).padStart(2, "0")}
              </span>
              <h2 className="chambre-name">
                {lang === "fr" ? room.nameFr : lang === "en" ? room.nameEn : room.nameAr}
              </h2>
              <p className="chambre-desc">
                {lang === "fr" ? room.descFr : lang === "en" ? room.descEn : room.descAr}
              </p>

              {/* Details grid */}
              <div className="chambre-details">
                <div className="chambre-detail">
                  <Icon name="UserGroupIcon" size={18} variant="outline" className="text-primary" />
                  <div>
                    <span className="chambre-detail-label">{t("rooms.capacity", lang)}</span>
                    <span className="chambre-detail-val">
                      {room.capacity} {lang === "fr" ? "pers." : lang === "en" ? "guests" : "أشخاص"}
                    </span>
                  </div>
                </div>
                <div className="chambre-detail">
                  <Icon name="MoonIcon" size={18} variant="outline" className="text-primary" />
                  <div>
                    <span className="chambre-detail-label">{lang === "fr" ? "Lit" : lang === "en" ? "Bed" : "السرير"}</span>
                    <span className="chambre-detail-val">
                      {lang === "fr" ? room.bed.fr : lang === "en" ? room.bed.en : room.bed.ar}
                    </span>
                  </div>
                </div>
                <div className="chambre-detail">
                  <Icon name="EyeIcon" size={18} variant="outline" className="text-primary" />
                  <div>
                    <span className="chambre-detail-label">{t("rooms.view", lang)}</span>
                    <span className="chambre-detail-val">
                      {lang === "fr" ? room.view.fr : lang === "en" ? room.view.en : room.view.ar}
                    </span>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="chambre-amenities">
                {room.amenities.map((a) =>
              <span key={a} className="room-feature-tag">{a}</span>
              )}
              </div>

              {/* CTAs */}
              <div className="chambre-ctas">
                <Link href="/contact" className="reserve-btn text-sm font-semibold uppercase tracking-widest px-8 py-3">
                  {t("rooms.cta", lang)}
                </Link>
                <a
                href={getWhatsAppUrl(
                  `Bonjour, je suis intéressé(e) par la ${room.nameFr} de Villa Haitam Marrakech. Pouvez-vous m'indiquer les disponibilités ?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="chambre-wa-btn">
                
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t("rooms.request", lang)}
                </a>
              </div>
            </div>
          </article>
        )}
      </div>
    </div>);

}