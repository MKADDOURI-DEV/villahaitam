"use client";
import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import Link from "next/link";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function PoolSection() {
  const { lang, dir } = useLanguage();
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bg = bgRef?.current;
    if (!bg) return;
    const onScroll = () => {
      const rect = bg?.closest("section")?.getBoundingClientRect();
      if (!rect) return;
      const offset = -rect?.top * 0.3;
      bg.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="pool-section" id="piscine" dir={dir}>
      {/* Parallax bg */}
      <div ref={bgRef} className="pool-parallax-bg">
        <AppImage
          src="https://images.unsplash.com/photo-1715125176619-7f31842f0e74"
          alt="Private outdoor pool surrounded by palm trees and garden at a Moroccan villa, bright turquoise water, deep blue sky, sun loungers"
          fill
          sizes="100vw"
          className="pool-bg-img" />
        
        <div className="pool-overlay" />
      </div>

      {/* Content */}
      <div className="pool-content">
        <span className="pool-eyebrow">
          {lang === "fr" ? "Piscine Privée" : lang === "en" ? "Private Pool" : "مسبح خاص"}
        </span>
        <h2 className="pool-title">{t("pool.title", lang)}</h2>
        <div className="pool-divider" />
        <p className="pool-desc">{t("pool.desc", lang)}</p>
        <div className="pool-actions">
          <Link href="/contact" className="pool-btn-primary">
            {t("hero.cta1", lang)}
          </Link>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="pool-btn-secondary">
            
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>);

}