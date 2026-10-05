"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import { SITE_CONFIG, getWhatsAppUrl, getPhoneUrl } from "@/data/siteConfig";
import ReservationForm from "@/components/ReservationForm";
import Icon from "@/components/ui/AppIcon";
import AppImage from "@/components/ui/AppImage";

export default function ContactContent() {
  const { lang, dir } = useLanguage();

  const contactActions = [
  {
    icon: "PhoneIcon",
    labelFr: "Appeler",
    labelEn: "Call",
    labelAr: "اتصل",
    subFr: SITE_CONFIG.phone,
    subEn: SITE_CONFIG.phone,
    subAr: SITE_CONFIG.phone,
    href: getPhoneUrl(),
    external: false,
    colorClass: "contact-action-phone"
  },
  {
    icon: "ChatBubbleLeftRightIcon",
    labelFr: "WhatsApp",
    labelEn: "WhatsApp",
    labelAr: "واتساب",
    subFr: "Message instantané",
    subEn: "Instant message",
    subAr: "رسالة فورية",
    href: getWhatsAppUrl(),
    external: true,
    colorClass: "contact-action-wa"
  },
  {
    icon: "MapPinIcon",
    labelFr: "Itinéraire",
    labelEn: "Directions",
    labelAr: "الاتجاهات",
    subFr: "Google Maps",
    subEn: "Google Maps",
    subAr: "خرائط جوجل",
    href: SITE_CONFIG.googleMapsUrl,
    external: true,
    colorClass: "contact-action-map"
  }];


  return (
    <div className="contact-page" dir={dir}>
      {/* Page Hero */}
      <div className="page-hero page-hero-short">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1888a3c65-1772545829640.png"
          alt="Marrakech medina rooftops at sunset with orange sky and minarets, deep atmospheric shadows, warm orange tones"
          fill
          priority
          sizes="100vw"
          className="page-hero-img" />
        
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="section-eyebrow text-white/70">
            {lang === "fr" ? "Nous contacter" : lang === "en" ? "Get in Touch" : "تواصل معنا"}
          </span>
          <h1 className="page-hero-title">{t("nav.contact", lang)}</h1>
        </div>
      </div>

      <div className="contact-main">
        <div className="section-container">
          <div className="contact-grid">
            {/* Left: Contact info */}
            <div className="contact-info-col">
              <span className="section-eyebrow">
                {lang === "fr" ? "Coordonnées" : lang === "en" ? "Contact Details" : "معلومات الاتصال"}
              </span>
              <h2 className="contact-title">
                {lang === "fr" ? "Villa Haitam Marrakech" :
                lang === "en" ? "Villa Haitam Marrakech" : "فيلا حيتام مراكش"}
              </h2>
              <div className="contact-address">
                <Icon name="MapPinIcon" size={18} variant="solid" className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-foreground font-medium">{SITE_CONFIG.address.line1}</p>
                  <p className="text-sm text-muted-foreground">{SITE_CONFIG.address.line2}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="contact-actions-list">
                {contactActions.map((action) =>
                <a
                  key={action.labelFr}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  className={`contact-action-card ${action.colorClass}`}>
                  
                    <div className="contact-action-icon">
                      <Icon name={action.icon as any} size={22} variant="solid" />
                    </div>
                    <div>
                      <span className="contact-action-label">
                        {lang === "fr" ? action.labelFr : lang === "en" ? action.labelEn : action.labelAr}
                      </span>
                      <span className="contact-action-sub">
                        {lang === "fr" ? action.subFr : lang === "en" ? action.subEn : action.subAr}
                      </span>
                    </div>
                    <Icon name="ArrowRightIcon" size={18} variant="outline" className="contact-action-arrow" />
                  </a>
                )}
              </div>

              {/* Hours note */}
              <div className="contact-hours-note">
                <Icon name="ClockIcon" size={16} variant="outline" className="text-muted-foreground shrink-0" />
                <p className="text-sm text-muted-foreground">
                  {lang === "fr" ? "Nous répondons généralement dans les 24 heures." :
                  lang === "en" ? "We generally respond within 24 hours." : "نرد عادةً خلال ٢٤ ساعة."}
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form-col">
              <span className="section-eyebrow">
                {lang === "fr" ? "Formulaire" : lang === "en" ? "Form" : "النموذج"}
              </span>
              <h2 className="contact-form-title">{t("res.title", lang)}</h2>
              <ReservationForm />
            </div>
          </div>
        </div>
      </div>
    </div>);

}