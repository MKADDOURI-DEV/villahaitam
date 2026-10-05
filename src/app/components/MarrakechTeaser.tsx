"use client";
import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const PLACES = [
{
  nameFr: "Jemaa el-Fna",
  nameEn: "Jemaa el-Fna",
  nameAr: "جامع الفنا",
  descFr: "La place mythique de Marrakech, cœur vibrant de la médina.",
  descEn: "The mythical square of Marrakech, vibrant heart of the medina.",
  descAr: "الساحة الأسطورية في مراكش، القلب النابض لمدينتها القديمة.",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cac2fd04-1765111002310.png",
  alt: "Jemaa el-Fna square at sunset with food stalls, smoke and crowd, warm orange light, Marrakech medina"
},
{
  nameFr: "Jardin Majorelle",
  nameEn: "Majorelle Garden",
  nameAr: "حديقة ماجوريل",
  descFr: "Un jardin botanique emblématique aux couleurs vives, chef-d'œuvre de Yves Saint Laurent.",
  descEn: "An iconic botanical garden with vibrant colours, masterpiece of Yves Saint Laurent.",
  descAr: "حديقة نباتية أيقونية بألوانها الزاهية، تحفة فنية ليف سان لوران.",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c5244b81-1765570886067.png",
  alt: "Majorelle Garden Marrakech bright cobalt blue building surrounded by tropical plants and cacti"
},
{
  nameFr: "Palais Bahia",
  nameEn: "Bahia Palace",
  nameAr: "قصر الباهية",
  descFr: "Un palais du XIXe siècle aux décors marocains somptueux et aux jardins enchanteurs.",
  descEn: "A 19th-century palace with sumptuous Moroccan décor and enchanting gardens.",
  descAr: "قصر من القرن التاسع عشر بزخارف مغربية فاخرة وحدائق ساحرة.",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f01e49fd-1772210725810.png",
  alt: "Bahia Palace Marrakech ornate Moorish archways with intricate zellige tilework and carved cedar ceilings, bright courtyard"
}];


export default function MarrakechTeaser() {
  const { lang, dir } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll<HTMLElement>(".marrakech-card").forEach((el, i) => {
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
    <section ref={sectionRef} className="marrakech-section" id="marrakech" dir={dir}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">
            {lang === "fr" ? "À Proximité" : lang === "en" ? "Nearby" : "في المجاورة"}
          </span>
          <h2 className="section-title">
            {lang === "fr" ? "Découvrez Marrakech depuis Villa Haitam" :
            lang === "en" ? "Discover Marrakech from Villa Haitam" : "اكتشف مراكش من فيلا حيتام"}
          </h2>
        </div>

        <div className="marrakech-grid">
          {PLACES?.map((place) =>
          <article
            key={place?.nameFr}
            className="marrakech-card"
            style={{ opacity: 0, transform: "translateY(40px)", transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)" }}>
            
              <div className="marrakech-img-wrap">
                <AppImage
                src={place?.image}
                alt={place?.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="marrakech-img" />
              
              </div>
              <div className="marrakech-body">
                <h3 className="marrakech-name">
                  {lang === "fr" ? place?.nameFr : lang === "en" ? place?.nameEn : place?.nameAr}
                </h3>
                <p className="marrakech-desc">
                  {lang === "fr" ? place?.descFr : lang === "en" ? place?.descEn : place?.descAr}
                </p>
              </div>
            </article>
          )}
        </div>

        <div className="amenities-cta">
          <Link href="/exp-rience" className="section-link-btn">
            {lang === "fr" ? "Toutes les activités" :
            lang === "en" ? "All Activities" : "جميع الأنشطة"}
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>);

}