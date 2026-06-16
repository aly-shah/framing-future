"use client";

import Image from "next/image";
import { useLocale } from "@/components/i18n";
import { youthContent, PROGRAM_META, MODULE_META } from "@/components/youth-i18n";
import { BookButton } from "@/components/book-button";

const STEP_ICONS = [
  "M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.8 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3z", // star
  "M6 20v-6M12 20V8M18 20v-9", // bars
  "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M17 11a3 3 0 1 0-2-5.2M21 20a6 6 0 0 0-5-5.9", // people
];

const WHY_ICONS = [
  "M7 7h10v10H7zM9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3", // chip
  "M12 3l7 3v5c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6l7-3z", // shield
  "M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.8 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3z", // star
];

export default function YouthPage() {
  const { locale } = useLocale();
  const y = youthContent[locale];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-cover bg-center" style={{ backgroundImage: "url('/assets/aud-youth.png')" }}>
        <div className="absolute inset-0 bg-ink/75" />
        <div className="container-x relative pt-40 pb-24 md:pt-48 md:pb-28 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] max-w-3xl mx-auto">
            {y.hero.title}
          </h1>
          <p className="text-white/70 mt-5 max-w-xl mx-auto text-lg">{y.hero.subtitle}</p>
          <div className="mt-8 flex justify-center">
            <a href="#why" className="btn-outline text-white">{y.hero.button}</a>
          </div>
        </div>
      </section>

      {/* THREE STEPS */}
      <section className="bg-ink">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-xl mx-auto flex flex-col items-center text-center">
            {y.steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center text-white">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d={STEP_ICONS[i]} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mt-4">{s.title}</h3>
                <p className="text-white/55 mt-2 max-w-md">{s.desc}</p>
                {i < y.steps.length - 1 && <div className="w-px h-14 bg-line my-6" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-paper text-ink">
        <div className="container-x py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">{y.programs.heading}</h2>
            <p className="text-muted-l mt-3">{y.programs.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 mt-14">
            {y.programs.items.map((p, i) => {
              const m = PROGRAM_META[i];
              return (
                <div key={i} className="group">
                  <div className="aspect-[16/10] overflow-hidden rounded-lg">
                    <Image
                      src={m.img}
                      alt={m.title}
                      width={395}
                      height={240}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 mt-4 rounded-[5px] text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5"
                    style={{ background: `linear-gradient(90deg, ${m.color}, ${m.colorTo})` }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d={m.icon} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p.badge}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-3">{m.title}</h3>
                  <p className="text-muted-l text-[15px] mt-2 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-mist text-muted-l text-xs px-3 py-1.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-ink hover:text-accent transition-colors">
                    {y.programs.learnMore}
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

      {/* WHY IT WORKS */}
      <section id="why" className="bg-paper text-ink scroll-mt-20">
        <div className="container-x pb-20 md:pb-28">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-center">
            Why it works
          </h2>
          <div className="grid sm:grid-cols-3 gap-10 mt-14">
            {y.why.map((w, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center text-ink">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d={WHY_ICONS[i]} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold mt-4">{w.title}</h3>
                <p className="text-muted-l text-sm mt-1">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="bg-ink">
        <div className="container-x py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">{y.modules.eyebrow}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mt-3">{y.modules.heading}</h2>
            <p className="text-white/60 mt-4">{y.modules.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {MODULE_META.map((m, i) => {
              const item = y.modules.items[i];
              return (
                <div key={i} className="rounded-card border border-line bg-ink-card p-6 flex flex-col">
                  <p className="text-xs uppercase tracking-wider text-accent font-semibold">
                    {m.cat} · {item.age}
                  </p>
                  <p className="text-xs text-white/40 mt-1">{item.duration}</p>
                  <h3 className="font-display text-xl font-semibold text-white mt-3">{m.title}</h3>
                  <p className="text-white/60 text-sm mt-2 leading-relaxed flex-1">{item.desc}</p>
                  <div className="mt-5 pt-4 border-t border-line space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/55">{y.modules.basisLabel}</span>
                      <span className="font-semibold text-white">{m.basis}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/55">{y.modules.premiumLabel}</span>
                      <span className="font-semibold text-white">{m.premium}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="container-x pb-20 md:pb-24">
          <div
            className="relative rounded-[2rem] overflow-hidden px-8 py-20 md:px-16 md:py-24 text-center bg-cover bg-center"
            style={{ backgroundImage: "url('/footerbg.webp')" }}
          >
            <div className="absolute inset-0 bg-ink/55" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white leading-tight">
                {y.cta.heading}
              </h2>
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
