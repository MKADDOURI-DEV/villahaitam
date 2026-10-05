"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import ReservationForm from "@/components/ReservationForm";

export default function ReservationSection() {
  const { lang, dir } = useLanguage();

  return (
    <section className="res-section" id="reservation" dir={dir}>
      <div className="res-section-inner">
        <div className="res-header">
          <span className="section-eyebrow">
            {lang === "fr" ? "Réservation" : lang === "en" ? "Booking" : "الحجز"}
          </span>
          <h2 className="section-title">{t("res.title", lang)}</h2>
          <p className="res-subtitle">{t("res.subtitle", lang)}</p>
        </div>
        <ReservationForm />
      </div>
    </section>
  );
}