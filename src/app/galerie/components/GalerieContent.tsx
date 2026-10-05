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
{ id: 1, src: "https://img.rocket.new/generatedImages/rocket_gen_img_1bdacc616-1771902895284.png", alt: "Moroccan villa exterior with private pool, palm trees, terracotta walls, golden afternoon light", category: "villa", captionFr: "Extérieur de la villa", captionEn: "Villa exterior", captionAr: "واجهة الفيلا" },
{ id: 2, src: "https://img.rocket.new/generatedImages/rocket_gen_img_199dd8d5f-1772622672096.png", alt: "Private swimming pool surrounded by lush garden and palm trees at a Moroccan villa, turquoise water", category: "piscine", captionFr: "Piscine privée", captionEn: "Private pool", captionAr: "المسبح الخاص" },
{ id: 3, src: "https://img.rocket.new/generatedImages/rocket_gen_img_1576be1d1-1773166795046.png", alt: "Luxury master suite bedroom with warm terracotta walls, white linen, natural light, garden view", category: "chambres", captionFr: "Suite Principale", captionEn: "Master Suite", captionAr: "الجناح الرئيسي" },
{ id: 4, src: "https://images.unsplash.com/photo-1708332753447-f25529f3fc72", alt: "Lush private garden with palm trees, flowering plants and stone pathways in warm sunlight", category: "jardin", captionFr: "Jardin privé", captionEn: "Private garden", captionAr: "الحديقة الخاصة" },
{ id: 5, src: "https://img.rocket.new/generatedImages/rocket_gen_img_16b5cb96d-1766912802576.png", alt: "Outdoor terrace with sun loungers overlooking Marrakech countryside, palm trees at dusk", category: "terrasse", captionFr: "Terrasse", captionEn: "Terrace", captionAr: "الشرفة" },
{ id: 6, src: "https://img.rocket.new/generatedImages/rocket_gen_img_1857d9c88-1776458364592.png", alt: "Cozy Moroccan bedroom with terracotta accents, wooden furniture and soft morning light", category: "chambres", captionFr: "Chambre Jardin", captionEn: "Garden Room", captionAr: "غرفة الحديقة" },
{ id: 7, src: "https://img.rocket.new/generatedImages/rocket_gen_img_1cac2fd04-1765111002310.png", alt: "Jemaa el-Fna square Marrakech at sunset with food stalls, smoke and crowd, orange light", category: "marrakech", captionFr: "Jemaa el-Fna", captionEn: "Jemaa el-Fna", captionAr: "جامع الفنا" },
{ id: 8, src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a7e4a4f8-1783858393331.png", alt: "Moroccan villa interior courtyard with traditional riad architecture, zellige tiles, warm stone", category: "villa", captionFr: "Cour intérieure", captionEn: "Inner courtyard", captionAr: "الفناء الداخلي" },
{ id: 9, src: "https://img.rocket.new/generatedImages/rocket_gen_img_1cf78b66d-1784052318574.png", alt: "Warm Moroccan bedroom with private terrace access, golden sunset light, traditional tile floor", category: "chambres", captionFr: "Chambre Terrasse", captionEn: "Terrace Room", captionAr: "غرفة الشرفة" },
{ id: 10, src: "https://img.rocket.new/generatedImages/rocket_gen_img_19e8be197-1767795439559.png", alt: "Majorelle Garden Marrakech cobalt blue building surrounded by tropical plants and cacti", category: "marrakech", captionFr: "Jardin Majorelle", captionEn: "Majorelle Garden", captionAr: "حديقة ماجوريل" },
{ id: 11, src: "https://images.unsplash.com/photo-1643858001483-e4f7839c5495", alt: "Moroccan villa outdoor dining area with terracotta pots, olive trees and evening lantern light", category: "exterieurs", captionFr: "Espace repas extérieur", captionEn: "Outdoor dining", captionAr: "مساحة الطعام الخارجية" },
{ id: 12, src: "https://img.rocket.new/generatedImages/rocket_gen_img_1f01e49fd-1772210725810.png", alt: "Bahia Palace Marrakech ornate Moorish archways with intricate zellige tilework and carved cedar ceilings", category: "marrakech", captionFr: "Palais Bahia", captionEn: "Bahia Palace", captionAr: "قصر الباهية" }];


const CATS: {key: Category;labelKey: string;}[] = [
{ key: "all", labelKey: "gallery.all" },
{ key: "villa", labelKey: "gallery.villa" },
{ key: "chambres", labelKey: "gallery.rooms" },
{ key: "piscine", labelKey: "gallery.pool" },
{ key: "jardin", labelKey: "gallery.garden" },
{ key: "terrasse", labelKey: "gallery.terrace" },
{ key: "exterieurs", labelKey: "gallery.exterior" },
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