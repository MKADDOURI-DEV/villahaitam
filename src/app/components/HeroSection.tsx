"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AppImage from "@/components/ui/AppImage";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function HeroSection() {
  const { lang, dir } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef?.current;
    const content = contentRef?.current;
    if (!hero || !content) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const parallaxBg = hero?.querySelector<HTMLElement>(".hero-parallax-bg");
      if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrollY * 0.35}px)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Entrance animation
    const elements = content?.querySelectorAll<HTMLElement>(".hero-animate");
    elements?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      setTimeout(() => {
        el.style.transition = "opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 300 + i * 150);
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={heroRef} className="hero-section" id="hero" dir={dir}>
      {/* Parallax Background */}
      <div className="hero-parallax-bg">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1c9fd0dc3-1772622671317.png"
          alt="Villa with private pool surrounded by palm trees and lush garden at golden hour, warm terracotta tones, deep shadows"
          fill
          priority
          sizes="100vw"
          className="hero-bg-img" />
        
        <div className="hero-overlay" />
      </div>

      {/* Badge */}
      <div className="hero-badge hero-animate">
        <span className="hero-badge-dot" />
        Marrakech · Souihla
      </div>

      {/* Content */}
      <div ref={contentRef} className="hero-content">
        <h1 className="hero-title hero-animate">
          {lang === "fr" ?
          <>
              Votre villa privée<br />
              <span className="hero-title-italic">aux portes de</span>
              <br />Marrakech
            </> :
          lang === "en" ?
          <>
              Your private villa<br />
              <span className="hero-title-italic">at the gates of</span>
              <br />Marrakech
            </> :

          <>
              فيلتك الخاصة<br />
              <span className="hero-title-italic">على أبواب</span>
              <br />مراكش
            </>
          }
        </h1>

        <p className="hero-subtitle hero-animate">
          {t("hero.subtitle", lang)}
        </p>

        <div className="hero-actions hero-animate">
          <Link href="/contact" className="hero-btn-primary">
            {t("hero.cta1", lang)}
          </Link>
          <Link href="/la-villa" className="hero-btn-secondary">
            {t("hero.cta2", lang)}
          </Link>
        </div>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-whatsapp hero-animate">
          
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {t("hero.whatsapp", lang)}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line">
          <div className="hero-scroll-dot" />
        </div>
      </div>

      {/* Bottom stats strip */}
      <div className="hero-stats-strip">
        <div className="hero-stat">
          <span className="hero-stat-num">2 000 m²</span>
          <span className="hero-stat-label">
            {lang === "fr" ? "Villa privée" : lang === "en" ? "Private villa" : "فيلا خاصة"}
          </span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-num">9</span>
          <span className="hero-stat-label">
            {lang === "fr" ? "Personnes" : lang === "en" ? "Guests" : "أشخاص"}
          </span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-num">3</span>
          <span className="hero-stat-label">
            {lang === "fr" ? "Chambres" : lang === "en" ? "Bedrooms" : "غرف"}
          </span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-num">
            {lang === "fr" ? "Piscine" : lang === "en" ? "Pool" : "مسبح"}
          </span>
          <span className="hero-stat-label">
            {lang === "fr" ? "Privée" : lang === "en" ? "Private" : "خاص"}
          </span>
        </div>
      </div>
    </section>);

}