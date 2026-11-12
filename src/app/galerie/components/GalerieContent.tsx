"use client";
import React, { useState, useCallback } from "react";
import AppImage from "@/components/ui/AppImage";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import Icon from "@/components/ui/AppIcon";

type Category =
"all" | "villa" | "chambres" | "piscine" | "jardin" | "terrasse" | "exterieurs" | "marrakech";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Category;
  captionFr: string;
  captionEn: string;
  captionAr: string;
}

const GALLERY: GalleryItem[] = [
{ id: 1, src: "/assets/images/villa/salon-a.jpg", alt: "Salon marocain traditionnel avec banquettes et plafond en bois sculpté", category: "villa", captionFr: "Salon marocain", captionEn: "Moroccan lounge", captionAr: "الصالون المغربي" },
{ id: 2, src: "/assets/images/villa/piscine.jpg", alt: "Piscine privée de la villa entourée de jardin et de palmiers", category: "piscine", captionFr: "Piscine privée", captionEn: "Private pool", captionAr: "المسبح الخاص" },
{ id: 3, src: "/assets/images/villa/chambre-1-a.jpg", alt: "Suite principale avec grand lit et canapé", category: "chambres", captionFr: "Suite Principale", captionEn: "Master Suite", captionAr: "الجناح الرئيسي" },
{ id: 4, src: "/assets/images/villa/terrasse.jpg", alt: "Terrasse de la villa avec vue sur la piscine et les palmiers", category: "terrasse", captionFr: "Terrasse", captionEn: "Terrace", captionAr: "الشرفة" },
{ id: 5, src: "/assets/images/villa/chambre-2-a.jpg", alt: "Chambre Jardin avec lit double et porte-fenêtre sur le jardin", category: "chambres", captionFr: "Chambre Jardin", captionEn: "Garden Room", captionAr: "غرفة الحديقة" },
{ id: 6, src: "/assets/images/villa/chambre-3.jpg", alt: "Chambre Terrasse avec lit double, berceau et balcon", category: "chambres", captionFr: "Chambre Terrasse", captionEn: "Terrace Room", captionAr: "غرفة الشرفة" },
{ id: 7, src: "/assets/images/villa/salon-b.jpg", alt: "Salon marocain ouvrant sur le jardin", category: "villa", captionFr: "Salon & jardin", captionEn: "Lounge & garden", captionAr: "الصالون والحديقة" },
{ id: 8, src: "/assets/images/villa/chambre-4-a.jpg", alt: "Chambre avec grand lit, canapé et accès jardin", category: "chambres", captionFr: "Chambre 4", captionEn: "Bedroom 4", captionAr: "الغرفة 4" },
{ id: 9, src: "/assets/images/villa/chambre-5.jpg", alt: "Chambre avec deux lits et papier peint décoratif", category: "chambres", captionFr: "Chambre 5", captionEn: "Bedroom 5", captionAr: "الغرفة 5" },
{ id: 10, src: "/assets/images/villa/chambre-1-b.jpg", alt: "Suite principale avec coin cuisine et télévision", category: "chambres", captionFr: "Suite Principale (coin salon)", captionEn: "Master Suite (living area)", captionAr: "الجناح الرئيسي (ركن الجلوس)" },
{ id: 11, src: "/assets/images/villa/salle-de-bain.jpg", alt: "Salle de bain avec baignoire et zelliges", category: "villa", captionFr: "Salle de bain", captionEn: "Bathroom", captionAr: "الحمام" },
{ id: 12, src: "/assets/images/villa/chambre-2-b.jpg", alt: "Chambre Jardin avec télévision et armoire", category: "chambres", captionFr: "Chambre Jardin", captionEn: "Garden Room", captionAr: "غرفة الحديقة" },
{ id: 13, src: "https://img.rocket.new/generatedImages/rocket_gen_img_1cac2fd04-1765111002310.png", alt: "Jemaa el-Fna square Marrakech at sunset with food stalls, smoke and crowd, orange light", category: "marrakech", captionFr: "Jemaa el-Fna", captionEn: "Jemaa el-Fna", captionAr: "جامع الفنا" },
{ id: 14, src: "https://img.rocket.new/generatedImages/rocket_gen_img_19e8be197-1767795439559.png", alt: "Majorelle Garden Marrakech cobalt blue building surrounded by tropical plants and cacti", category: "marrakech", captionFr: "Jardin Majorelle", captionEn: "Majorelle Garden", captionAr: "حديقة ماجوريل" },
{ id: 15, src: "https://img.rocket.new/generatedImages/rocket_gen_img_1f01e49fd-1772210725810.png", alt: "Bahia Palace Marrakech ornate Moorish archways with intricate zellige tilework and carved cedar ceilings", category: "marrakech", captionFr: "Palais Bahia", captionEn: "Bahia Palace", captionAr: "قصر الباهية" }];


const CATS: {key: Category;labelKey: string;}[] = [
{ key: "all", labelKey: "gallery.all" },
{ key: "villa", labelKey: "gallery.villa" },
{ key: "chambres", labelKey: "gallery.rooms" },
{ key: "piscine", labelKey: "gallery.pool" },
{ key: "terrasse", labelKey: "gallery.terrace" },
{ key: "marrakech", labelKey: "gallery.marrakech" }];


export default function GalerieContent() {
  const { lang, dir } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "all" ? GALLERY : GALLERY.filter((g) => g.category === activeCategory);

  const openLightbox = useCallback((id: number) => setLightbox(id), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const currentIdx = lightbox !== null ? filtered.findIndex((g) => g.id === lightbox) : -1;

  const prev = () => {
    if (currentIdx <= 0) return;
    setLightbox(filtered[currentIdx - 1].id);
  };
  const next = () => {
    if (currentIdx >= filtered.length - 1) return;
    setLightbox(filtered[currentIdx + 1].id);
  };

  const currentItem = lightbox !== null ? filtered.find((g) => g.id === lightbox) : null;

  return (
    <div className="galerie-page" dir={dir}>
      {/* Page Hero */}
      <div className="page-hero page-hero-short">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1888a3c65-1772545829640.png"
          alt="Panoramic view of Marrakech medina rooftops at dusk, warm orange and deep blue sky, minarets silhouetted"
          fill
          priority
          sizes="100vw"
          className="page-hero-img" />
        
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-eyebrow text-white/70">
            {lang === "fr" ? "Photos" : lang === "en" ? "Photos" : "الصور"}
          </span>
          <h1 className="page-hero-title">
            {lang === "fr" ? "Galerie" : lang === "en" ? "Gallery" : "معرض الصور"}
          </h1>
        </div>
      </div>

      {/* Filters */}
      <div className="galerie-filters" dir={dir}>
        {CATS.map((c) =>
        <button
          key={c.key}
          onClick={() => setActiveCategory(c.key)}
          className={`galerie-filter-btn ${activeCategory === c.key ? "galerie-filter-active" : ""}`}>
          
            {t(c.labelKey, lang)}
          </button>
        )}
      </div>

      {/* Gallery Grid — Masonry-style */}
      <div className="galerie-grid">
        {filtered.map((item, i) =>
        <button
          key={item.id}
          className={`galerie-item ${i % 5 === 0 ? "galerie-item-tall" : ""}`}
          onClick={() => openLightbox(item.id)}
          aria-label={item.captionFr}>
          
            <AppImage
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="galerie-img" />
          
            <div className="galerie-item-overlay">
              <span className="galerie-item-caption">
                {lang === "fr" ? item.captionFr : lang === "en" ? item.captionEn : item.captionAr}
              </span>
              <Icon name="MagnifyingGlassPlusIcon" size={20} variant="outline" className="text-white" />
            </div>
          </button>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && currentItem &&
      <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <Icon name="XMarkIcon" size={28} variant="outline" />
          </button>
          <button
          className="lightbox-prev"
          onClick={(e) => {e.stopPropagation();prev();}}
          disabled={currentIdx === 0}
          aria-label="Previous">
          
            <Icon name="ChevronLeftIcon" size={32} variant="outline" />
          </button>
          <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <AppImage
            src={currentItem.src}
            alt={currentItem.alt}
            fill
            sizes="100vw"
            className="lightbox-img"
            priority />
          
            <div className="lightbox-caption">
              {lang === "fr" ? currentItem.captionFr : lang === "en" ? currentItem.captionEn : currentItem.captionAr}
            </div>
          </div>
          <button
          className="lightbox-next"
          onClick={(e) => {e.stopPropagation();next();}}
          disabled={currentIdx === filtered.length - 1}
          aria-label="Next">
          
            <Icon name="ChevronRightIcon" size={32} variant="outline" />
          </button>
          <div className="lightbox-counter">
            {currentIdx + 1} / {filtered.length}
          </div>
        </div>
      }
    </div>);

}