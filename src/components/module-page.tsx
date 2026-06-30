"use client";

import Link from "next/link";
import { useLocale } from "@/components/i18n";
import { BookButton } from "@/components/book-button";
import { ModuleSlug, MODULE_META, modulesContent } from "@/components/modules-i18n";

export function ModulePage({ slug }: { slug: ModuleSlug }) {
  const { locale } = useLocale();
  const t = modulesContent[locale];
  const meta = MODULE_META[slug];
  const m = t.modules[slug];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink overflow-hidden border-b border-line">
        <div className="container-x relative pt-36 pb-16 md:pt-44 md:pb-20 text-center">
          <span
            className="inline-flex items-center rounded-[5px] text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5"
            style={{ background: `linear-gradient(90deg, ${meta.color}, ${meta.colorTo})` }}
          >
            {m.category}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-3xl mx-auto leading-tight mt-6">
            {meta.title}
          </h1>
          <p className="text-lg text-white/60 mt-5 max-w-2xl mx-auto">{m.tagline}</p>
        </div>
      </section>

      {/* INTRO + PLACEHOLDER */}
      <section className="bg-ink">
        <div className="container-x py-20 md:py-28 max-w-3xl mx-auto">
          <p className="text-white/70 text-lg leading-relaxed">{m.intro}</p>

          <div className="rounded-card border border-line bg-ink-card p-7 sm:p-8 mt-10">
            <h2 className="font-display text-xl font-semibold text-white">{t.placeholderTitle}</h2>
            <p className="text-white/55 mt-3 leading-relaxed">{t.placeholderText}</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <BookButton />
            <Link href="/youth" className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-accent transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.back}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="container-x pb-20 md:pb-24">
          <div className="relative rounded-[2rem] overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center bg-cover bg-center" style={{ backgroundImage: "url('/footerbg.webp')" }}>
            <div className="absolute inset-0 bg-ink/55" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight">{t.ctaHeading}</h2>
              <div className="flex justify-center mt-8">
                <BookButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
