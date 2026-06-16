"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { useBooking } from "./booking-context";
import { useLocale, LOCALES, LOCALE_LABELS, Locale } from "./i18n";

const FLAGS: Record<Locale, string> = { en: "🇬🇧", de: "🇩🇪", tr: "🇹🇷" };

export function Navbar() {
  const { openBooking } = useBooking();
  const { t, locale, setLocale } = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.youth, href: "/youth" },
    { label: t.nav.parents, href: "/parents" },
    { label: t.nav.school, href: "/school" },
    { label: t.nav.partners, href: "/partners" },
    { label: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-ink/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-20 py-3.5">
        <Link href="/" aria-label="FramingFuture home">
          <Logo
            variant="light"
            className="[&_img]:w-10 [&_img]:h-10 [&_span]:text-xl"
          />
        </Link>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center rounded-full bg-white/10 p-0.5">
            {LOCALES.map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                aria-label={LOCALE_LABELS[l]}
                className={`px-2 py-1 text-xs font-semibold rounded-full transition-colors ${
                  locale === l ? "bg-white text-ink" : "text-white/70 hover:text-white"
                }`}
              >
                <span className="mr-1">{FLAGS[l]}</span>
                {LOCALE_LABELS[l]}
              </button>
            ))}
          </div>

          <button
            onClick={openBooking}
            className="hidden md:inline-flex btn-primary !py-2.5 !px-4 text-sm"
          >
            {t.nav.book}
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 -mr-2 text-white"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Dropdown menu (all screen sizes) */}
      {menuOpen && (
        <div className="bg-ink border-t border-line animate-fade-up">
          <ul className="container-x py-5 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block py-2.5 text-lg font-medium ${
                    pathname === l.href ? "text-accent" : "text-white/85 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-2 pt-3 sm:hidden">
              {LOCALES.map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`px-3 py-1.5 text-sm font-semibold rounded-full border border-line ${
                    locale === l ? "bg-white text-ink" : "text-white/75"
                  }`}
                >
                  {FLAGS[l]} {LOCALE_LABELS[l]}
                </button>
              ))}
            </li>
            <li className="pt-4">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openBooking();
                }}
                className="btn-primary w-full"
              >
                {t.nav.book}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
