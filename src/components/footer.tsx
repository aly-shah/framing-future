"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { Newsletter } from "./newsletter";
import { useLocale, LOCALES, Locale } from "./i18n";

const SOCIALS = [
  { name: "Facebook", path: "M13 22v-8h2.7l.4-3H13V9.1c0-.9.3-1.5 1.6-1.5H16V5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H7v3h2.6v8H13z" },
  { name: "Instagram", path: "M12 8.6A3.4 3.4 0 1 0 12 15.4 3.4 3.4 0 0 0 12 8.6zm0 5.6a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4zm4.3-5.7a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0zM12 6.8c1.5 0 1.7 0 2.3.1.6 0 .9.1 1.1.2.3.1.5.2.7.5.3.2.4.4.5.7.1.2.2.5.2 1.1 0 .6.1.8.1 2.3s0 1.7-.1 2.3c0 .6-.1.9-.2 1.1-.1.3-.2.5-.5.7a1.9 1.9 0 0 1-.7.5c-.2.1-.5.2-1.1.2-.6 0-.8.1-2.3.1s-1.7 0-2.3-.1c-.6 0-.9-.1-1.1-.2a1.9 1.9 0 0 1-.7-.5 1.9 1.9 0 0 1-.5-.7c-.1-.2-.2-.5-.2-1.1 0-.6-.1-.8-.1-2.3s0-1.7.1-2.3c0-.6.1-.9.2-1.1.1-.3.2-.5.5-.7.2-.3.4-.4.7-.5.2-.1.5-.2 1.1-.2.6 0 .8-.1 2.3-.1M12 5.5c-1.5 0-1.8 0-2.4.1-.6 0-1 .1-1.4.3-.4.1-.7.3-1 .7-.4.3-.6.6-.7 1-.2.4-.3.8-.3 1.4-.1.6-.1.9-.1 2.5s0 1.9.1 2.5c0 .6.1 1 .3 1.4.1.4.3.7.7 1 .3.4.6.6 1 .7.4.2.8.3 1.4.3.6.1.9.1 2.4.1s1.8 0 2.4-.1c.6 0 1-.1 1.4-.3.4-.1.7-.3 1-.7.4-.3.6-.6.7-1 .2-.4.3-.8.3-1.4.1-.6.1-.9.1-2.5s0-1.9-.1-2.5c0-.6-.1-1-.3-1.4a2.7 2.7 0 0 0-.7-1 2.7 2.7 0 0 0-1-.7c-.4-.2-.8-.3-1.4-.3-.6-.1-.9-.1-2.4-.1z" },
  { name: "LinkedIn", path: "M8.3 18.3V9.7H5.6v8.6h2.7zM6.9 8.5a1.6 1.6 0 1 0 0-3.1 1.6 1.6 0 0 0 0 3.1zM18.4 18.3v-4.7c0-2.5-1.3-3.7-3.1-3.7-1.4 0-2 .8-2.4 1.3V9.7H10.2c0 .8 0 8.6 0 8.6h2.7v-4.8c0-.3 0-.5.1-.7.2-.5.7-1 1.4-1 1 0 1.4.8 1.4 1.9v4.6h2.6z" },
  { name: "TikTok", path: "M16.5 5.5c.5 1 1.4 1.8 2.5 2v2.3c-1 0-2-.3-2.9-.9v4.2a4.6 4.6 0 1 1-4.6-4.6c.2 0 .4 0 .6.1v2.4a2.2 2.2 0 1 0 1.5 2.1V5.5h2.9z" },
];

const FLAG_NAME: Record<Locale, string> = {
  en: "🇬🇧 English",
  de: "🇩🇪 Deutsch (German)",
  tr: "🇹🇷 Türkçe (Turkish)",
};

export function Footer() {
  const { t, locale, setLocale } = useLocale();

  const links = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.youth, href: "/youth" },
    { label: t.nav.parents, href: "/parents" },
    { label: t.nav.school, href: "/school" },
    { label: t.nav.partners, href: "/partners" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="bg-ink text-white border-t border-line">
      <div className="container-x py-16">
        {/* Top: logo + nav */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Logo variant="light" className="[&_img]:w-9 [&_img]:h-9 [&_span]:text-xl" />
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/75 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter + socials */}
        <div className="grid lg:grid-cols-2 gap-8 mt-12 items-end">
          <div>
            <p className="text-white/60 text-sm mb-4">{t.footer.newsletterText}</p>
            <Newsletter />
          </div>
          <div className="flex gap-3 lg:justify-end">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href="#"
                aria-label={s.name}
                className="w-10 h-10 rounded-full bg-white/8 hover:bg-accent hover:text-ink flex items-center justify-center transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-line flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/55">
            <p>{t.footer.copyright}</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {t.footer.legalItems.map((l) => (
                <a key={l} href="#" className="hover:text-white transition-colors">
                  {l}
                </a>
              ))}
            </div>
            <Link href="/contact" className="text-accent hover:underline">
              {t.footer.returning}
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
            {LOCALES.map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`transition-colors ${
                  locale === l ? "text-accent" : "text-white/55 hover:text-white"
                }`}
              >
                {FLAG_NAME[l]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
