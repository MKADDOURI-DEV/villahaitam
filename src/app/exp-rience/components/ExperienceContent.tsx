"use client";
import React, { useState } from "react";
import AppImage from "@/components/ui/AppImage";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";

import Link from "next/link";
import Icon from "@/components/ui/AppIcon";

type Tab = "relax" | "famille" | "amis" | "marrakech";

const TABS: {key: Tab;labelKey: string;}[] = [
{ key: "relax", labelKey: "exp.relax" },
{ key: "famille", labelKey: "exp.family" },
{ key: "amis", labelKey: "exp.friends" },
{ key: "marrakech", labelKey: "exp.marrakech" }];


const ATTRACTIONS = [
{
  nameFr: "Jemaa el-Fna",
  nameEn: "Jemaa el-Fna",
  nameAr: "جامع الفنا",
  descFr: "La place mythique de Marrakech, cœur vibrant de la médina. Spectacles de rue, conteurs, musiciens et marchés nocturnes.",
  descEn: "The mythical square of Marrakech, vibrant heart of the medina. Street performances, storytellers, musicians and night markets.",
  descAr: "الساحة الأسطورية في مراكش، القلب النابض لمدينتها القديمة. عروض الشوارع والحكائين والموسيقيين والأسواق الليلية.",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cac2fd04-1765111002310.png",
  alt: "Jemaa el-Fna square Marrakech at sunset with food stalls, smoke and crowd, warm orange and deep blue sky",
  mapsQuery: "Jemaa el-Fna Marrakech"
},
{
  nameFr: "Jardin Majorelle",
  nameEn: "Majorelle Garden",
  nameAr: "حديقة ماجوريل",
  descFr: "Jardin botanique iconique aux couleurs cobalt et jaune vif, créé par Jacques Majorelle et restauré par Yves Saint Laurent.",
  descEn: "Iconic botanical garden with cobalt and bright yellow colours, created by Jacques Majorelle and restored by Yves Saint Laurent.",
  descAr: "حديقة نباتية أيقونية بألوان الكوبالت والأصفر الزاهي، أنشأها جاك ماجوريل وجدده إيف سان لوران.",
  image: "https://images.unsplash.com/photo-1729456229097-e60798212180",
  alt: "Majorelle Garden Marrakech cobalt blue building surrounded by tropical plants cacti and water features in bright sunlight",
  mapsQuery: "Jardin Majorelle Marrakech"
},
{
  nameFr: "Palais Bahia",
  nameEn: "Bahia Palace",
  nameAr: "قصر الباهية",
  descFr: "Palais du XIXe siècle aux décors marocains somptueux, zellige, stucs et boiseries sculptées, entouré de jardins enchanteurs.",
  descEn: "19th-century palace with sumptuous Moroccan décor, zellige, stucco and carved woodwork, surrounded by enchanting gardens.",
  descAr: "قصر من القرن التاسع عشر بزخارف مغربية فاخرة، زليج وجبس ونقوش خشبية محفورة، محاط بحدائق ساحرة.",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f01e49fd-1772210725810.png",
  alt: "Bahia Palace Marrakech ornate Moorish archways with intricate zellige tilework carved cedar ceilings bright interior courtyard",
  mapsQuery: "Palais Bahia Marrakech"
},
{
  nameFr: "La Palmeraie",
  nameEn: "The Palmeraie",
  nameAr: "النخيل",
  descFr: "Vaste palmeraie aux portes de Marrakech, idéale pour des balades à cheval, à dromadaire ou en quad.",
  descEn: "Vast palm grove at the gates of Marrakech, ideal for horse riding, camel trekking or quad biking.",
  descAr: "واحة نخيل شاسعة على أبواب مراكش، مثالية لركوب الخيل والجمال أو الدراجات الرباعية.",
  image: "https://images.unsplash.com/photo-1657642719946-e8b8557c4655",
  alt: "Marrakech Palmeraie palm grove with tall date palms and sandy paths in warm afternoon light",
  mapsQuery: "Palmeraie Marrakech"
},
{
  nameFr: "Les Souks",
  nameEn: "The Souks",
  nameAr: "الأسواق",
  descFr: "Labyrinthe de ruelles commerçantes dans la médina, offrant artisanat, épices, textiles et objets traditionnels marocains.",
  descEn: "Labyrinth of commercial alleys in the medina, offering crafts, spices, textiles and traditional Moroccan objects.",
  descAr: "متاهة من الأزقة التجارية في المدينة القديمة، تقدم الحرف اليدوية والتوابل والمنسوجات والأشياء المغربية التقليدية.",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a234905a-1772222832420.png",
  alt: "Marrakech souk market narrow alley with colorful textiles lanterns and spice stalls warm golden light",
  mapsQuery: "Souks Marrakech médina"
},
{
  nameFr: "Montagne & Atlas",
  nameEn: "Mountains & Atlas",
  nameAr: "الجبال والأطلس",
  descFr: "Les montagnes de l\'Atlas offrent des paysages époustouflants et des villages berbères authentiques à découvrir.",
  descEn: "The Atlas Mountains offer breathtaking landscapes and authentic Berber villages to discover.",
  descAr: "تقدم جبال الأطلس مناظر خلابة وقرى أمازيغية أصيلة يمكن اكتشافها.",
  image: "https://images.unsplash.com/photo-1701017684891-7eee65ea121d",
  alt: "Atlas Mountains Morocco dramatic rocky peaks with snow caps and green valleys in clear blue sky",
  mapsQuery: "Atlas Mountains Morocco near Marrakech"
}];


const TAB_CONTENT: Record<Tab, {
  titleFr: string;titleEn: string;titleAr: string;
  descFr: string;descEn: string;descAr: string;
  image: string;alt: string;
  featuresFr: string[];featuresEn: string[];featuresAr: string[];
}> = {
  relax: {
    titleFr: "La détente absolue",
    titleEn: "Absolute relaxation",
    titleAr: "الاسترخاء المطلق",
    descFr: "Profitez de la piscine privée, du jardin luxuriant et des terrasses pour une immersion totale dans la sérénité. Villa Haitam est pensée pour le repos.",
    descEn: "Enjoy the private pool, lush garden and terraces for a total immersion in serenity. Villa Haitam is designed for rest.",
    descAr: "استمتعوا بالمسبح الخاص والحديقة الخضراء والشرفات للانغماس الكامل في الهدوء. فيلا حيتام مصممة للراحة.",
    image: "https://images.unsplash.com/photo-1700918209645-33e66e389ba9",
    alt: "Private pool with turquoise water and sun loungers surrounded by lush tropical garden at golden hour, peaceful atmosphere",
    featuresFr: ["Piscine privée", "Jardin verdoyant", "Terrasse lounge", "Espace barbecue", "Calme & nature"],
    featuresEn: ["Private pool", "Lush garden", "Lounge terrace", "Barbecue area", "Calm & nature"],
    featuresAr: ["مسبح خاص", "حديقة خضراء", "شرفة استرخاء", "منطقة شواء", "هدوء وطبيعة"]
  },
  famille: {
    titleFr: "En famille, loin du monde",
    titleEn: "Family time, away from the world",
    titleAr: "وقت العائلة، بعيداً عن الضجيج",
    descFr: "Villa Haitam offre un espace privé et sécurisé idéal pour les familles. Les enfants profitent du jardin et de l'aire de jeux pendant que les adultes se détendent.",
    descEn: "Villa Haitam offers a private and secure space ideal for families. Children enjoy the garden and playground while adults relax.",
    descAr: "توفر فيلا حيتام مساحة خاصة وآمنة مثالية للعائلات. يستمتع الأطفال بالحديقة وملعب الأطفال بينما يسترخي الكبار.",
    image: "https://images.unsplash.com/photo-1708332753447-f25529f3fc72",
    alt: "Lush private garden with palm trees and green grass perfect for family activities in warm Moroccan sunlight",
    featuresFr: ["Espace privé & sécurisé", "Piscine familiale", "Aire de jeux", "Jardin spacieux", "3 chambres"],
    featuresEn: ["Private & secure space", "Family pool", "Playground", "Spacious garden", "3 bedrooms"],
    featuresAr: ["مساحة خاصة وآمنة", "مسبح عائلي", "ملعب أطفال", "حديقة فسيحة", "٣ غرف نوم"]
  },
  amis: {
    titleFr: "Entre amis, votre villa privée",
    titleEn: "With friends, your private villa",
    titleAr: "مع الأصدقاء، فيلتكم الخاصة",
    descFr: "Réunissez vos amis dans un espace entièrement privatisé. Barbecue, piscine, terrasse et soirées sous les étoiles marocaines.",
    descEn: "Gather your friends in a fully privatised space. Barbecue, pool, terrace and evenings under the Moroccan stars.",
    descAr: "اجمعوا أصدقاءكم في مساحة خاصة بالكامل. شواء ومسبح وشرفة وأمسيات تحت النجوم المغربية.",
    image: "https://images.unsplash.com/photo-1608956905586-adaad6346779",
    alt: "Villa terrace with outdoor seating area and barbecue surrounded by palm trees at dusk, warm lantern lights",
    featuresFr: ["Villa entièrement privatisée", "Barbecue extérieur", "Piscine privée", "Terrasses spacieuses", "Jusqu'à 9 personnes"],
    featuresEn: ["Fully privatised villa", "Outdoor barbecue", "Private pool", "Spacious terraces", "Up to 9 guests"],
    featuresAr: ["فيلا خاصة بالكامل", "شواء خارجي", "مسبح خاص", "شرفات فسيحة", "ما يصل إلى ٩ أشخاص"]
  },
  marrakech: {
    titleFr: "Marrakech à portée de main",
    titleEn: "Marrakech within reach",
    titleAr: "مراكش في متناول يدك",
    descFr: "Depuis Villa Haitam, Marrakech et ses trésors sont à quelques kilomètres. Médina, souks, palais, jardins et expériences inoubliables.",
    descEn: "From Villa Haitam, Marrakech and its treasures are just a few kilometres away. Medina, souks, palaces, gardens and unforgettable experiences.",
    descAr: "من فيلا حيتام، مراكش وكنوزها على بعد كيلومترات قليلة. المدينة القديمة والأسواق والقصور والحدائق وتجارب لا تنسى.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17815ea93-1773214096137.png",
    alt: "Panoramic view of Marrakech medina with palm trees Atlas mountains in background warm afternoon light",
    featuresFr: ["Médina de Marrakech", "Jemaa el-Fna", "Souks artisanaux", "Palais historiques", "Jardin Majorelle"],
    featuresEn: ["Marrakech Medina", "Jemaa el-Fna", "Artisan souks", "Historic palaces", "Majorelle Garden"],
    featuresAr: ["مدينة مراكش القديمة", "جامع الفنا", "أسواق الحرف", "القصور التاريخية", "حديقة ماجوريل"]
  }
};

export default function ExperienceContent() {
  const { lang, dir } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>("relax");
  const content = TAB_CONTENT[activeTab];

  return (
    <div className="experience-page" dir={dir}>
      {/* Page Hero */}
      <div className="page-hero">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_17815ea93-1773214096137.png"
          alt="Marrakech landscape panoramic view with palm trees Atlas mountains in background warm golden afternoon light, deep shadows"
          fill
          priority
          sizes="100vw"
          className="page-hero-img" />
        
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-eyebrow text-white/70">
            {lang === "fr" ? "Vivre la villa" : lang === "en" ? "Live the villa" : "عيش تجربة الفيلا"}
          </span>
          <h1 className="page-hero-title">{t("exp.title", lang)}</h1>
        </div>
      </div>

      {/* Tabs */}
      <section className="exp-tabs-section">
        <div className="section-container">
          <div className="exp-tabs" dir={dir}>
            {TABS.map((tab) =>
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`exp-tab ${activeTab === tab.key ? "exp-tab-active" : ""}`}>
              
                {t(tab.labelKey, lang)}
              </button>
            )}
          </div>

          {/* Tab Content */}
          <div className="exp-tab-content">
            <div className="exp-tab-img-col">
              <div className="exp-tab-img-wrap">
                <AppImage
                  src={content.image}
                  alt={content.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover rounded-2xl" />
                
              </div>
            </div>
            <div className="exp-tab-text-col">
              <h2 className="exp-tab-title">
                {lang === "fr" ? content.titleFr : lang === "en" ? content.titleEn : content.titleAr}
              </h2>
              <p className="exp-tab-desc">
                {lang === "fr" ? content.descFr : lang === "en" ? content.descEn : content.descAr}
              </p>
              <ul className="exp-features-list">
                {(lang === "fr" ?
                content.featuresFr :
                lang === "en" ?
                content.featuresEn :
                content.featuresAr).
                map((f) =>
                <li key={f} className="exp-feature-item">
                    <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                )}
              </ul>
              <Link href="/contact" className="reserve-btn inline-flex mt-8 text-sm font-semibold uppercase tracking-widest px-8 py-3">
                {t("nav.reserver", lang)}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marrakech Attractions */}
      <section className="exp-attractions-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">
              {lang === "fr" ? "À Explorer" : lang === "en" ? "To Explore" : "للاستكشاف"}
            </span>
            <h2 className="section-title">
              {lang === "fr" ? "Marrakech & ses environs" :
              lang === "en" ? "Marrakech & its surroundings" : "مراكش وضواحيها"}
            </h2>
          </div>
          <div className="attractions-grid">
            {ATTRACTIONS.map((attr) =>
            <article key={attr.nameFr} className="attraction-card">
                <div className="attraction-img-wrap">
                  <AppImage
                  src={attr.image}
                  alt={attr.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="attraction-img" />
                
                </div>
                <div className="attraction-body">
                  <h3 className="attraction-name">
                    {lang === "fr" ? attr.nameFr : lang === "en" ? attr.nameEn : attr.nameAr}
                  </h3>
                  <p className="attraction-desc">
                    {lang === "fr" ? attr.descFr : lang === "en" ? attr.descEn : attr.descAr}
                  </p>
                  <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(attr.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="attraction-maps-btn">
                  
                    <Icon name="MapPinIcon" size={14} variant="solid" className="text-primary" />
                    {lang === "fr" ? "Voir sur Google Maps" : lang === "en" ? "View on Google Maps" : "عرض على خرائط جوجل"}
                  </a>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="exp-cta-section">
        <div className="exp-cta-inner">
          <h2 className="exp-cta-title">
            {lang === "fr" ? "Prêt à vivre l'expérience ?" :
            lang === "en" ? "Ready to experience it?" : "هل أنتم مستعدون لتجربتها؟"}
          </h2>
          <p className="exp-cta-sub">
            {lang === "fr" ? "Réservez votre séjour à Villa Haitam et vivez Marrakech autrement." :
            lang === "en" ? "Book your stay at Villa Haitam and experience Marrakech differently." : "احجزوا إقامتكم في فيلا حيتام وعيشوا مراكش بطريقة مختلفة."}
          </p>
          <Link href="/contact" className="reserve-btn text-sm font-semibold uppercase tracking-widest px-10 py-4">
            {t("nav.reserver", lang)}
          </Link>
        </div>
      </section>
    </div>);

}