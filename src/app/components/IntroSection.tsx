"use client";
import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import Link from "next/link";

const STATS = [
{ numKey: "stat.surface", labelKey: "stat.surface.label" },
{ numKey: "stat.guests", labelKey: "stat.guests.label" },
{ numKey: "stat.rooms", labelKey: "stat.rooms.label" },
{ numKey: "stat.pool", labelKey: "stat.pool.label" }];


export default function IntroSection() {
  const { lang, dir } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll<HTMLElement>(".reveal-item").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    observer?.observe(section);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="intro-section" dir={dir} id="villa-intro">
      <div className="intro-inner">
        {/* Image side */}
        <div className="intro-image-col reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)" }}>
          <div className="intro-img-wrap">
            <AppImage
              src="https://images.unsplash.com/photo-1628876686954-799063157243"
              alt="Luxury Moroccan villa courtyard with traditional architecture, warm stone walls and lush green plants"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="intro-img" />
            
          </div>
          {/* Floating stat card */}
          <div className="intro-float-card">
            <span className="intro-float-num">2 000 m²</span>
            <span className="intro-float-label">
              {lang === "fr" ? "d'espace privé" : lang === "en" ? "private space" : "مساحة خاصة"}
            </span>
          </div>
        </div>

        {/* Content side */}
        <div className="intro-content-col">
          <span className="intro-eyebrow reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s" }}>
            {lang === "fr" ? "La Villa" : lang === "en" ? "The Villa" : "الفيلا"}
          </span>
          <h2 className="intro-title reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s" }}>
            {t("intro.welcome", lang)}
          </h2>
          <p className="intro-desc reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.3s" }}>
            {t("intro.desc", lang)}
          </p>

          {/* Stats grid */}
          <div className="intro-stats reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s" }}>
            {STATS?.map((s) =>
            <div key={s?.numKey} className="intro-stat">
                <div className="intro-stat-rule" />
                <span className="intro-stat-num">{t(s?.numKey, lang)}</span>
                <span className="intro-stat-label">{t(s?.labelKey, lang)}</span>
              </div>
            )}
          </div>

          <Link
            href="/la-villa"
            className="intro-cta reveal-item"
            style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s" }}>
            
            {lang === "fr" ? "Découvrir la villa" : lang === "en" ? "Discover the Villa" : "اكتشف الفيلا"}
            <span className="intro-cta-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>);

}