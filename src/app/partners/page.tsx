"use client";

import Image from "next/image";
import { useLocale } from "@/components/i18n";
import { partnersContent } from "@/components/partners-i18n";
import { BookButton } from "@/components/book-button";

const COLLAB = [
  { color: "#2f80ed", icon: "M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 10v.01M5 20a7 7 0 0 1 14 0" },
  { color: "#8b5cf6", icon: "M14 4l6 6M3 21l1-4 12-12 3 3-12 12-4 1z" },
  { color: "#ec4899", icon: "M12 20.5C7 17 4 13.5 4 9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 8 2.5c0 4-3 7.5-8 11z" },
  { color: "#f0673b", icon: "M9 3h6v4l-2 4v4a3 3 0 1 1-2 0v-4L9 7z" },
];

export default function PartnersPage() {
  const { locale } = useLocale();
  const c = partnersContent[locale];
  const FEATURE_IMGS = ["/assets/ptr-companies.webp", "/assets/ptr-foundations.webp"];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-cover bg-center" style={{ backgroundImage: "url('/assets/ptr-companies.webp')" }}>
        <div className="absolute inset-0 bg-ink/78" />
        <div className="container-x relative pt-40 pb-24 md:pt-48 md:pb-28 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] max-w-3xl mx-auto">
            {c.hero.title}
          </h1>
          <p className="text-white/70 mt-5 max-w-2xl mx-auto text-lg">{c.hero.subtitle}</p>
          <div className="mt-8 flex justify-center">
            <BookButton label={c.hero.button} />
          </div>
        </div>
      </section>

      {/* FEATURE 1 — image left */}
      <section className="bg-paper text-ink">
        <div className="container-x py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-card overflow-hidden border border-mist">
            <Image src={FEATURE_IMGS[0]} alt={c.features[0].heading} width={600} height={600} className="w-full h-auto object-cover" />
          </div>
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">{c.features[0].heading}</h2>
            <div className="space-y-4 mt-5">
              {c.features[0].paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-muted-l leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2 — image right */}
      <section className="bg-paper text-ink">
        <div className="container-x pb-16 md:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="lg:order-2 rounded-card overflow-hidden border border-mist">
            <Image src={FEATURE_IMGS[1]} alt={c.features[1].heading} width={600} height={600} className="w-full h-auto object-cover" />
          </div>
          <div className="lg:order-1">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">{c.features[1].heading}</h2>
            <div className="space-y-4 mt-5">
              {c.features[1].paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-muted-l leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BAND */}
      <section className="bg-ink">
        <div className="container-x py-6">
          <div className="relative rounded-[2rem] overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center bg-cover bg-center" style={{ backgroundImage: "url('/footerbg.webp')" }}>
            <div className="absolute inset-0 bg-ink/55" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight">{c.band.heading}</h2>
              <p className="text-white/70 mt-4">{c.band.text}</p>
              <div className="flex justify-center mt-7">
                <BookButton label={c.band.button} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE COLLABORATE */}
      <section className="bg-paper text-ink">
        <div className="container-x py-20 md:py-28">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-center">{c.collaborate.heading}</h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-14 mt-16 max-w-4xl mx-auto">
            {c.collaborate.items.map((item, i) => (
              <div
                key={i}
                className={`text-center rounded-card p-6 transition-transform duration-300 hover:-translate-y-1.5 ${
                  i === 3 ? "bg-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.25)] border border-mist" : ""
                }`}
              >
                <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ background: COLLAB[i].color }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d={COLLAB[i].icon} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold mt-4">{item.name}</h3>
                <p className="text-muted-l text-sm mt-2 leading-relaxed max-w-sm mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="container-x pb-20 md:pb-24">
          <div className="relative rounded-[2rem] overflow-hidden px-8 py-20 md:px-16 md:py-24 text-center bg-cover bg-center" style={{ backgroundImage: "url('/footerbg.webp')" }}>
            <div className="absolute inset-0 bg-ink/55" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white leading-tight">{c.cta.heading}</h2>
              <p className="text-white/70 mt-5 text-lg">{c.cta.subtitle}</p>
              <div className="flex justify-center mt-8">
                <BookButton label={c.cta.button} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
