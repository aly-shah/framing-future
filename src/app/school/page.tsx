"use client";

import Image from "next/image";
import { useLocale } from "@/components/i18n";
import { schoolContent, SCHOOL_PROGRAM_META, SCHOOL_OFFERS_META } from "@/components/school-i18n";
import { BookButton } from "@/components/book-button";

const FEATURE_IMGS = ["/assets/sch-teachers.webp", "/assets/sch-support.webp"];

export default function SchoolPage() {
  const { locale } = useLocale();
  const s = schoolContent[locale];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-cover bg-center" style={{ backgroundImage: "url('/assets/school-banner.jpg')" }}>
        <div className="absolute inset-0 bg-ink/78" />
        <div className="container-x relative pt-40 pb-24 md:pt-48 md:pb-28 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] max-w-3xl mx-auto">
            {s.hero.title}
          </h1>
          <p className="text-white/70 mt-5 max-w-2xl mx-auto text-lg">{s.hero.subtitle}</p>
          <div className="mt-8 flex justify-center">
            <BookButton label={s.hero.button} />
          </div>
        </div>
      </section>

      {/* FEATURE 1 — image left */}
      <section className="bg-paper text-ink">
        <div className="container-x py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-card overflow-hidden border border-mist">
            <Image src={FEATURE_IMGS[0]} alt={s.features[0].heading} width={600} height={600} className="w-full h-auto object-cover" />
          </div>
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">{s.features[0].heading}</h2>
            <p className="text-lg text-muted-l mt-5 leading-relaxed">{s.features[0].text}</p>
          </div>
        </div>
      </section>

      {/* FEATURE 2 — image right */}
      <section className="bg-paper text-ink">
        <div className="container-x pb-16 md:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="lg:order-2 rounded-card overflow-hidden border border-mist">
            <Image src={FEATURE_IMGS[1]} alt={s.features[1].heading} width={600} height={600} className="w-full h-auto object-cover" />
          </div>
          <div className="lg:order-1">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">{s.features[1].heading}</h2>
            <p className="text-lg text-muted-l mt-5 leading-relaxed">{s.features[1].text}</p>
          </div>
        </div>
      </section>

      {/* BAND */}
      <section className="bg-ink">
        <div className="container-x py-6">
          <div className="relative rounded-[2rem] overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center bg-cover bg-center" style={{ backgroundImage: "url('/footerbg.webp')" }}>
            <div className="absolute inset-0 bg-ink/55" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">{s.band.heading}</h2>
              <p className="text-white/70 mt-4">{s.band.text}</p>
              <div className="flex justify-center mt-7">
                <BookButton label={s.band.button} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-paper text-ink">
        <div className="container-x py-20 md:py-28">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-center">{s.programs.heading}</h2>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 mt-14">
            {s.programs.items.map((p, i) => {
              const m = SCHOOL_PROGRAM_META[i];
              return (
                <div key={i} className="group">
                  <div className="aspect-[16/10] overflow-hidden rounded-lg">
                    <Image src={m.img} alt={m.title} width={395} height={240} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 mt-4 rounded-[5px] text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5" style={{ background: `linear-gradient(90deg, ${m.color}, ${m.colorTo})` }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d={m.icon} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {m.cat}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-3">{m.title}</h3>
                  <p className="text-muted-l text-[15px] mt-2 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-mist text-muted-l text-xs px-3 py-1.5">{tag}</span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-ink hover:text-accent transition-colors">
                    {s.programs.learnMore}
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP STEPS */}
      <section className="bg-paper text-ink">
        <div className="container-x pb-20 md:pb-28">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-center">{s.partnership.heading}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
            {s.partnership.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-ink text-white font-display font-semibold flex items-center justify-center">
                  {i + 1}
                </div>
                <h3 className="font-semibold mt-4">{step.name}</h3>
                <p className="text-muted-l text-sm mt-2 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="bg-paper text-ink">
        <div className="container-x pb-20 md:pb-28">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow !text-accent">{s.offers.eyebrow}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">{s.offers.heading}</h2>
            <p className="text-muted-l mt-4">{s.offers.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-14 max-w-4xl mx-auto">
            {s.offers.cards.map((card, i) => (
              <div key={i} className="rounded-card bg-ink text-white p-8 flex flex-col">
                <p className="text-[11px] uppercase tracking-wider text-accent font-semibold">{card.tier}</p>
                <h3 className="font-display text-2xl font-semibold mt-2">{card.name}</h3>
                <p className="text-white/55 text-sm mt-2 leading-relaxed">{card.desc}</p>
                <ul className="space-y-2.5 mt-5 flex-1">
                  {card.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-white/75 text-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-line">
                  <p className="font-display text-2xl font-semibold">
                    <span className="text-sm text-white/50 font-sans mr-1">{s.offers.fromLabel}</span>
                    {SCHOOL_OFFERS_META[i].priceFrom}
                  </p>
                  <p className="text-white/45 text-xs mt-1">{card.priceUnit}</p>
                </div>
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
              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white leading-tight">{s.cta.heading}</h2>
              <p className="text-white/70 mt-5 text-lg">{s.cta.subtitle}</p>
              <div className="flex justify-center mt-8">
                <BookButton label={s.cta.button} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
