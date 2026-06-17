"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { useBooking } from "./booking-context";
import { useLocale, LOCALES, LOCALE_LABELS, Locale } from "./i18n";

const FLAGS: Record<Locale, string> = { en: "🇬🇧", de: "🇩🇪", tr: "🇹🇷" };

type Phase = null | "enter" | "active" | "exit";

export function Navbar() {
  const { openBooking } = useBooking();
  const { t, locale, setLocale } = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [phase, setPhase] = useState<Phase>(null);

  const links = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.youth, href: "/youth" },
    { label: t.nav.parents, href: "/parents" },
    { label: t.nav.school, href: "/school" },
    { label: t.nav.partners, href: "/partners" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const menuVisible = phase !== null;

  const openMenu = () => {
    setPhase("enter");
    requestAnimationFrame(() => requestAnimationFrame(() => setPhase("active")));
  };
  const closeMenu = () => {
    setPhase((p) => (p ? "exit" : p));
    window.setTimeout(() => setPhase(null), 450);
  };
  const toggleMenu = () => (menuVisible ? closeMenu() : openMenu());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close on route change
  useEffect(() => {
    setPhase((p) => (p ? "exit" : p));
    const id = window.setTimeout(() => setPhase(null), 450);
    return () => window.clearTimeout(id);
  }, [pathname]);

  // lock scroll + escape to close while menu visible
  useEffect(() => {
    if (!menuVisible) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuVisible]);

  const drawerTransform =
    phase === "active" ? "translate-x-0" : phase === "exit" ? "translate-x-full" : "-translate-x-full";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-x flex items-center justify-between h-20 py-3.5">
        <Link href="/" aria-label="FramingFuture home">
          <Logo variant="light" className="[&_img]:w-10 [&_img]:h-10 [&_span]:text-xl" />
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

          <button onClick={openBooking} className="hidden md:inline-flex btn-primary !py-2.5 !px-4 text-sm">
            {t.nav.book}
          </button>

          <button onClick={toggleMenu} className="p-2 -mr-2 text-white" aria-label="Open menu" aria-expanded={menuVisible}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Full-screen slide drawer */}
      {menuVisible && (
        <div
          className={`fixed inset-0 z-[60] bg-ink will-change-transform transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${drawerTransform}`}
        >
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="absolute top-6 right-6 p-2 text-white hover:text-accent transition-colors"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div className="h-full flex flex-col items-center justify-center gap-8 px-6">
            <ul className="flex flex-col items-center gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={closeMenu}
                    className={`block text-2xl sm:text-3xl font-medium uppercase tracking-wide transition-colors ${
                      pathname === l.href ? "text-accent" : "text-white/85 hover:text-accent"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              {LOCALES.map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`px-3 py-1.5 text-sm font-semibold rounded-full border transition-colors ${
                    locale === l ? "border-accent text-accent" : "border-line text-white/70 hover:text-white"
                  }`}
                >
                  {FLAGS[l]} {LOCALE_LABELS[l]}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                closeMenu();
                openBooking();
              }}
              className="btn-primary"
            >
              {t.nav.book}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
