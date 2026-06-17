"use client";

import Image from "next/image";
import { useLocale } from "@/components/i18n";
import {
  parentsContent,
  PARENT_PROGRAM_META,
  PARENT_PACKAGES_META,
  PARENT_CONNECT_META,
} from "@/components/parents-i18n";
import { BookButton } from "@/components/book-button";

const STEP_ICONS = [
  "M4 5v14h16M8 15l3-4 3 2 4-6", // chart
  "M7 11V7a2 2 0 0 1 4 0M11 11V5a2 2 0 0 1 4 0v6M15 9a2 2 0 0 1 4 0v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-5.2-3l-2-3.5a1.6 1.6 0 0 1 2.7-1.6L7 12", // hand
];

const WHY_ICONS = [
  "M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM8 12l-1 9 5-3 5 3-1-9", // medal
  "M12 3l7 3v5c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6l7-3z", // shield
  "M12 4 2 9l10 5 8-4v6M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5", // cap
  "M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.8 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3z", // star
];

export default function ParentsPage() {
  const { locale } = useLocale();
  const c = parentsContent[locale];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-cover bg-center" style={{ backgroundImage: "url('/assets/prog-flow.png')" }}>
        <div className="absolute inset-0 bg-ink/75" />
        <div className="container-x relative pt-40 pb-24 md:pt-48 md:pb-28 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] max-w-3xl mx-auto">
            {c.hero.title}
          </h1>
          <p className="text-white/70 mt-5 max-w-xl mx-auto text-lg">{c.hero.subtitle}</p>
          <div className="mt-8 flex justify-center">
            <BookButton label={c.hero.button} />
          </div>
        </div>
      </section>

      {/* TWO STEPS */}
      <section className="bg-ink">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-xl mx-auto flex flex-col items-center text-center">
            {c.steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center text-white">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d={STEP_ICONS[i]} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mt-4">{s.title}</h3>
                <p className="text-white/55 mt-2 max-w-md">{s.desc}</p>
                {i < c.steps.length - 1 && <div className="w-px h-14 bg-line my-6" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-paper text-ink">
        <div className="container-x py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">{c.programs.heading}</h2>
            <p className="text-muted-l mt-3">{c.programs.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 mt-14">
            {c.programs.items.map((p, i) => {
              const m = PARENT_PROGRAM_META[i];
              return (
                <div key={i} className="group">
                  <div className="aspect-[16/10] overflow-hidden rounded-lg">
                    <Image src={m.img} alt={m.title} width={395} height={240} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 mt-4 rounded-[5px] text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5"
                    style={{ background: `linear-gradient(90deg, ${m.color}, ${m.colorTo})` }}
                  >
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
                    {c.programs.learnMore}
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
      <section className="bg-paper text-ink">
        <div className="container-x pb-20 md:pb-28">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-center">{c.whyTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
            {c.why.map((w, i) => (
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

      {/* PACKAGE LADDER */}
      <section className="bg-paper text-ink">
        <div className="container-x pb-20 md:pb-28">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow !text-accent">{c.ladder.eyebrow}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">{c.ladder.heading}</h2>
            <p className="text-muted-l mt-4">{c.ladder.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-14">
            {c.ladder.packages.map((pkg, i) => {
              const m = PARENT_PACKAGES_META[i];
              return (
                <div
                  key={i}
                  className={`rounded-card bg-ink text-white p-7 flex flex-col ${
                    m.featured ? "ring-2 ring-accent lg:-translate-y-3" : "border border-line"
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-wider text-accent font-semibold">{pkg.tier}</p>
                  <h3 className="font-display text-xl font-semibold mt-2">{m.name}</h3>
                  <p className="text-white/55 text-sm mt-2 leading-relaxed">{pkg.desc}</p>
                  <ul className="space-y-2.5 mt-5 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-white/75 text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent">
                          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-5 border-t border-line">
                    <p className="font-display text-3xl font-semibold">{m.price}</p>
                    <p className="text-white/45 text-xs mt-1">
                      {c.ladder.monthlyPrefix} {m.monthly}{c.ladder.monthlySuffix}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connect standalone */}
          <div className="rounded-card bg-ink text-white p-8 mt-6 grid md:grid-cols-[1.4fr_1fr] gap-6 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-accent font-semibold">{c.ladder.connect.tag}</p>
              <h3 className="font-display text-2xl font-semibold mt-2">{PARENT_CONNECT_META.name}</h3>
              <p className="text-white/55 text-sm mt-2 leading-relaxed max-w-xl">{c.ladder.connect.desc}</p>
            </div>
            <div className="space-y-2 text-sm md:border-l md:border-line md:pl-6">
              <div className="flex justify-between">
                <span className="text-white/55">{c.ladder.connect.basisLabel}</span>
                <span className="font-semibold">{PARENT_CONNECT_META.basis}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/55">{c.ladder.connect.premiumLabel}</span>
                <span className="font-semibold">{PARENT_CONNECT_META.premium}</span>
              </div>
            </div>
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
