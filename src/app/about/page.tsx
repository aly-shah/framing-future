"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/i18n";
import { aboutContent } from "@/components/about-i18n";
import { BookButton } from "@/components/book-button";

const PILLAR_COLORS = ["#2f80ed", "#8b5cf6", "#ec4899", "#f0673b", "#22b07d"];
const PILLAR_LETTERS = ["S", "E", "V", "D", "A"];

const BELIEVE_ICONS = [
  { color: "#f5b50a", d: "M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.8 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3z" },
  { color: "#2f80ed", d: "M12 5c3 0 5 2 5 5v2a8 8 0 0 1-1 4M12 5c-3 0-5 2-5 5v3M9 13v2M15 11v3a6 6 0 0 1-.6 2.6M12 9v5" },
  { color: "#8b5cf6", d: "M12 4c2 3 5 3 5 7a5 5 0 0 1-10 0c0-4 3-4 5-7zM12 13v8M9 18l3 3 3-3" },
  { color: "#0f1417", d: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" },
];

const WORK_ICONS = [
  { color: "#16c5bb", d: "M12 4 2 9l10 5 8-4v6M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" },
  { color: "#0f1417", d: "M12 3l7 3v5c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6l7-3z M9.5 12l1.8 1.8L15 10" },
  { color: "#0f1417", d: "M7 7h10v10H7zM9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" },
];

const VALUE_ICONS = [
  "M12 20.5C7 17 4 13.5 4 9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 8 2.5c0 4-3 7.5-8 11z", // heart
  "M5 13l4 4L19 7", // check
  "M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3zM19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z", // sparkle
  "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M17 11a3 3 0 1 0-2-5.2M21 20a6 6 0 0 0-5-5.9", // people
  "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3.5 12h17M12 3c2.5 2.5 2.5 16.5 0 18M12 3c-2.5 2.5-2.5 16.5 0 18", // globe
  "M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.8 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3z", // star
];

export default function AboutPage() {
  const { locale } = useLocale();
  const a = aboutContent[locale];

  return (
    <>
      {/* HERO */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/about-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-ink/70" />
        <div className="container-x relative pt-40 pb-24 md:pt-48 md:pb-28 text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] max-w-3xl mx-auto">
            {a.hero.title.join(" ")}
          </h1>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto text-lg">{a.hero.subtitle}</p>
          <div className="mt-9 flex justify-center">
            <a href="#started" className="btn-outline text-white">
              {a.hero.button}
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT ALL STARTED */}
      <section id="started" className="bg-ink scroll-mt-20">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white text-center lg:text-left">
            {a.started.heading}
          </h2>
          <div className="space-y-5">
            {a.started.paragraphs.map((p, i) => (
              <p key={i} className="text-white/65 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-ink">
        <div className="container-x pb-20 md:pb-28 grid md:grid-cols-2 gap-8">
          {[
            { ...a.mission, icon: "M5 13l4 4L19 7" },
            { ...a.vision, icon: "M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.8 6.6 19.5l1.2-6L3.3 9.3l6.1-.7L12 3z" },
          ].map((b) => (
            <div key={b.label} className="rounded-card border border-line bg-ink-card p-8 text-center">
              <div className="mx-auto w-14 h-14 rounded-full border border-line flex items-center justify-center text-white">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d={b.icon} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mt-5">{b.label}</h3>
              <p className="text-white/60 mt-3 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THE HEART — SEVDA pillars */}
      <section className="bg-ink">
        <div className="container-x pb-20 md:pb-28 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">{a.heart.heading}</h2>
          <p className="text-white/55 mt-3">{a.heart.subtitle}</p>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-14 items-stretch">
            {a.heart.pillars.map((p, i) => (
              <div key={p.name} className="text-center flex flex-col h-full">
                <div
                  className="mx-auto w-14 h-14 rounded-full flex items-center justify-center font-display text-xl font-semibold text-white shrink-0"
                  style={{ background: PILLAR_COLORS[i] }}
                >
                  {PILLAR_LETTERS[i]}
                </div>
                <h3 className="font-semibold text-white mt-4 min-h-[3rem] flex items-center justify-center">{p.name}</h3>
                <p className="text-white/55 text-sm mt-1 leading-relaxed flex-1">{p.desc}</p>
                <p className="text-accent italic text-sm mt-4">“{p.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORTEXCRAFT */}
      <section className="bg-ink">
        <div className="container-x pb-20 md:pb-28 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-center">
          <div className="aspect-square rounded-card overflow-hidden border border-line">
            <Image
              src="/mind.avif"
              alt="CortexCraft™ — learning in the mind and the heart"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow !text-white/50">{a.cortex.eyebrow}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mt-2">{a.cortex.heading}</h2>
            <div className="space-y-4 mt-5">
              {a.cortex.paragraphs.map((p, i) => (
                <p key={i} className="text-white/65 leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY QUOTE */}
      <section className="bg-ink">
        <div className="container-x pb-20 md:pb-28 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">{a.methodology.heading}</h2>
          <p className="font-display text-lg sm:text-2xl text-white/80 italic mt-7 leading-relaxed max-w-6xl mx-auto">
            “{a.methodology.quote}”
          </p>
        </div>
      </section>

      {/* MEET THE FOUNDER */}
      <section className="bg-ink">
        <div className="container-x pb-20 md:pb-28">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white text-center mb-12">
            {a.founder.heading}
          </h2>
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
            <div className="rounded-card overflow-hidden border border-line">
              <Image src="/assets/founder.webp" alt="Sevda Yücel" width={603} height={603} className="w-full h-auto" />
            </div>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white">{a.founder.title}</h3>
              <p className="text-accent font-medium mt-2">{a.founder.role}</p>
              <div className="space-y-4 mt-5">
                {a.founder.paragraphs.map((p, i) => (
                  <p key={i} className="text-white/65 leading-relaxed">{p}</p>
                ))}
              </div>
              <blockquote className="mt-6 border-l-2 border-accent pl-5 text-white/85 italic">
                “{a.founder.quote}”
              </blockquote>
              <div className="mt-7">
                <p className="font-semibold text-white mb-3">{a.founder.credLabel}</p>
                <ul className="space-y-2">
                  {a.founder.creds.map((c) => (
                    <li key={c} className="flex gap-2.5 text-white/65 text-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I BELIEVE IN — light */}
      <section className="bg-paper text-ink">
        <div className="container-x py-24 md:py-32 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold">{a.believe.heading}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
            {a.believe.items.map((item, i) => (
              <div key={item.name} className="text-center">
                <div className="mx-auto w-20 h-20 flex items-center justify-center" style={{ color: BELIEVE_ICONS[i].color }}>
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
                    <path d={BELIEVE_ICONS[i].d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold mt-5">{item.name}</h3>
                <p className="text-muted-l text-base mt-3 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK — light gray */}
      <section className="bg-paper-2 text-ink">
        <div className="container-x py-20 md:py-28 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">{a.howWeWork.heading}</h2>
          <div className="grid sm:grid-cols-3 gap-10 mt-14">
            {a.howWeWork.items.map((item, i) => (
              <div key={item.name} className="text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center" style={{ color: WORK_ICONS[i].color }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d={WORK_ICONS[i].d} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-semibold mt-4">{item.name}</h3>
                <p className="text-muted-l text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CORE VALUES — light */}
      <section className="bg-paper text-ink">
        <div className="container-x py-20 md:py-28 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold">{a.values.heading}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {a.values.items.map((item, i) => {
              const elevated = i === 0;
              return (
                <div
                  key={item.name}
                  className={`rounded-card p-8 text-center border transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:border-mist hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.25)] ${
                    elevated ? "bg-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.25)] border-mist" : "border-transparent"
                  }`}
                >
                  <div className="mx-auto w-11 h-11 flex items-center justify-center text-ink">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d={VALUE_ICONS[i]} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mt-4">{item.name}</h3>
                  <p className="text-muted-l text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EVIDENCE-BASED — light gray */}
      <section className="bg-paper-2 text-ink">
        <div className="container-x py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold">{a.evidence.heading}</h2>
            <p className="text-muted-l mt-4">{a.evidence.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {a.evidence.frameworks.map((f) => (
              <div key={f} className="flex items-center gap-4 rounded-xl border border-emerald-300/70 bg-emerald-50 px-6 py-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="shrink-0 text-emerald-600">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-display text-lg sm:text-xl text-emerald-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="container-x pb-20 md:pb-24 pt-20 md:pt-24">
          <div
            className="relative rounded-[2rem] overflow-hidden px-8 py-20 md:px-16 md:py-24 text-center bg-cover bg-center"
            style={{ backgroundImage: "url('/footerbg.webp')" }}
          >
            <div className="absolute inset-0 bg-ink/55" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white leading-tight">
                {a.cta.heading}
              </h2>
              <p className="text-white/70 mt-5 text-lg">{a.cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center mt-8 gap-4">
                <Link href="/contact" className="btn-primary w-full sm:w-auto">
                  {a.cta.button}
                </Link>
                <BookButton className="btn-outline text-white w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
