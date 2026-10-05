"use client";
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import Icon from "@/components/ui/AppIcon";

interface FormData {
  name: string;
  email: string;
  phone: string;
  arrival: string;
  departure: string;
  adults: string;
  children: string;
  subject: string;
  message: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  arrival: "",
  departure: "",
  adults: "2",
  children: "0",
  subject: "",
  message: "",
};

export default function ReservationForm() {
  const { lang, dir } = useLanguage();
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Requis";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email invalide";
    if (!form.phone.trim()) e.phone = "Requis";
    if (!form.arrival) e.arrival = "Requis";
    if (!form.departure) e.departure = "Requis";
    if (form.arrival && form.departure && form.departure <= form.arrival)
      e.departure = "Départ doit être après arrivée";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // TODO: Connect to backend/email service
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <div className="form-success" dir={dir}>
        <div className="form-success-icon">
          <Icon name="CheckCircleIcon" size={48} variant="solid" className="text-primary" />
        </div>
        <p className="text-lg font-medium text-foreground text-center">
          {t("res.success", lang)}
        </p>
        <button
          className="reserve-btn mt-6 text-sm font-semibold uppercase tracking-widest px-8 py-3"
          onClick={() => { setSubmitted(false); setForm(INITIAL); }}
        >
          {lang === "fr" ? "Nouvelle demande" : lang === "en" ? "New Request" : "طلب جديد"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="res-form" dir={dir} noValidate>
      <div className="form-grid-2">
        <div className="form-group">
          <label className="form-label">{t("res.name", lang)} *</label>
          <input
            type="text"
            className={`form-input ${errors.name ? "form-input-error" : ""}`}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder={lang === "ar" ? "الاسم الكامل" : "Nom complet"}
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label className="form-label">{t("res.email", lang)} *</label>
          <input
            type="email"
            className={`form-input ${errors.email ? "form-input-error" : ""}`}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="email@example.com"
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label className="form-label">{t("res.phone", lang)} *</label>
          <input
            type="tel"
            className={`form-input ${errors.phone ? "form-input-error" : ""}`}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+212 6XX XXX XXX"
          />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label className="form-label">{t("res.adults", lang)}</label>
          <select
            className="form-input"
            value={form.adults}
            onChange={(e) => setForm({ ...form, adults: e.target.value })}
          >
            {[1,2,3,4,5,6,7,8,9].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">{t("res.arrival", lang)} *</label>
          <input
            type="date"
            className={`form-input ${errors.arrival ? "form-input-error" : ""}`}
            value={form.arrival}
            min={today}
            onChange={(e) => setForm({ ...form, arrival: e.target.value })}
          />
          {errors.arrival && <span className="form-error">{errors.arrival}</span>}
        </div>
        <div className="form-group">
          <label className="form-label">{t("res.departure", lang)} *</label>
          <input
            type="date"
            className={`form-input ${errors.departure ? "form-input-error" : ""}`}
            value={form.departure}
            min={form.arrival || today}
            onChange={(e) => setForm({ ...form, departure: e.target.value })}
          />
          {errors.departure && <span className="form-error">{errors.departure}</span>}
        </div>
        <div className="form-group">
          <label className="form-label">{t("res.children", lang)}</label>
          <select
            className="form-input"
            value={form.children}
            onChange={(e) => setForm({ ...form, children: e.target.value })}
          >
            {[0,1,2,3,4,5,6].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-group mt-4">
        <label className="form-label">{t("res.message", lang)}</label>
        <textarea
          className="form-input form-textarea"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder={
            lang === "fr" ?"Vos questions ou demandes particulières..."
              : lang === "en" ?"Your questions or special requests..." :"أسئلتكم أو طلباتكم الخاصة..."
          }
          rows={4}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="reserve-btn w-full mt-6 py-4 text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2"
      >
        {loading ? (
          <span className="animate-spin">
            <Icon name="ArrowPathIcon" size={18} variant="outline" />
          </span>
        ) : (
          <Icon name="PaperAirplaneIcon" size={18} variant="solid" />
        )}
        {t("res.send", lang)}
      </button>
    </form>
  );
}