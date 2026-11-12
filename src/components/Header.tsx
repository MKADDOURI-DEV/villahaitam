"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AppLogo from "@/components/ui/AppLogo";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import { SITE_CONFIG, getWhatsAppUrl, getPhoneUrl } from "@/data/siteConfig";
import Icon from "@/components/ui/AppIcon";

const NAV_LINKS = [
  { key: "nav.home", href: "/" },
  { key: "nav.villa", href: "/la-villa" },
  { key: "nav.chambres", href: "/chambres" },
  { key: "nav.experience", href: "/exp-rience" },
  { key: "nav.galerie", href: "/galerie" },
  { key: "nav.contact", href: "/contact" },
];

const LANGS = [
  { code: "fr" as const, label: "FR" },
  { code: "en" as const, label: "EN" },
  { code: "ar" as const, label: "ع" },
];

export default function Header() {
  const { lang, setLang, dir } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`header-nav ${scrolled ? "header-scrolled" : "header-transparent"}`}
        dir={dir}
      >
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 logo-link">
            <AppLogo src="/assets/images/logo-mark.png" size={44} />
            <span className="font-display text-lg tracking-widest uppercase font-semibold hidden sm:block">
              Villa Haitam
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="nav-link text-xs font-medium uppercase tracking-widest"
              >
                {t(link.key, lang)}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-1">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`lang-btn ${lang === l.code ? "lang-active" : ""}`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 icon-action-btn"
              aria-label="WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="text-xs font-medium hidden lg:block">WhatsApp</span>
            </a>

            {/* Phone */}
            <a
              href={getPhoneUrl()}
              className="hidden md:flex items-center gap-1.5 icon-action-btn"
              aria-label={SITE_CONFIG.phone}
            >
              <Icon name="PhoneIcon" size={16} variant="solid" />
              <span className="text-xs font-medium hidden lg:block">
                {SITE_CONFIG.phone}
              </span>
            </a>

            {/* Reserve CTA */}
            <Link
              href="/contact"
              className="reserve-btn text-xs font-semibold uppercase tracking-widest"
            >
              {t("nav.reserver", lang)}
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden p-2 -mr-1"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Icon name="Bars3Icon" size={24} variant="outline" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? "mobile-menu-open" : ""}`}
        dir={dir}
      >
        <div className="mobile-menu-inner">
          <div className="flex justify-between items-center mb-12">
            <span className="font-display text-xl tracking-widest uppercase font-semibold">
              Villa Haitam
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="p-2"
            >
              <Icon name="XMarkIcon" size={28} variant="outline" />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="mobile-nav-link font-display text-4xl uppercase tracking-tighter"
              >
                {t(link.key, lang)}
              </Link>
            ))}
          </nav>

          <div className="mt-12 flex flex-col gap-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="reserve-btn text-center text-sm font-semibold uppercase tracking-widest py-4"
            >
              {t("nav.reserver", lang)}
            </Link>
            <div className="flex gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-primary/30 rounded py-3 text-sm font-medium text-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={getPhoneUrl()}
                className="flex-1 flex items-center justify-center gap-2 border border-primary/30 rounded py-3 text-sm font-medium text-primary"
              >
                <Icon name="PhoneIcon" size={16} variant="solid" className="text-primary" />
                Appeler
              </a>
            </div>
          </div>

          {/* Language in mobile */}
          <div className="mt-8 flex gap-2">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`lang-btn ${lang === l.code ? "lang-active" : ""}`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp (mobile) */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}