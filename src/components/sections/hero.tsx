"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/components/i18n";
import { BookButton } from "@/components/book-button";

const SLIDE_VIDEOS = ["/assets/hero-1.mp4", "/assets/hero.mp4", "/assets/hero-3.mp4"];
const SLIDES = SLIDE_VIDEOS.length;

export function Hero() {
  const { t } = useLocale();
  const h = t.hero;
  const [slide, setSlide] = useState(0);
  const go = (dir: number) => setSlide((s) => (s + dir + SLIDES) % SLIDES);

  // auto-advance every 9s; re-arms on any slide change (manual or auto)
  useEffect(() => {
    const id = setTimeout(() => setSlide((s) => (s + 1) % SLIDES), 9000);
    return () => clearTimeout(id);
  }, [slide]);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {SLIDE_VIDEOS.map((src, i) => (
        <video
          key={src}
          autoPlay
          muted
          loop
          playsInline
          preload={i === 0 ? "auto" : "none"}
          className={`absolute inset-0 w-full h-full object-cover bg-ink transition-opacity duration-700 ${
            slide === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/65 to-ink/95" />

      {/* slide arrows */}
      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="container-x relative z-10 pt-28 pb-24 text-center">
        <div className="max-w-5xl mx-auto animate-fade-up">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mx-auto max-w-5xl">
            {h.titlePre} {h.titleHi}
            {h.titlePost ? ` ${h.titlePost}` : ""}
          </h1>
          <p className="text-lg text-white/70 mt-6 max-w-xl mx-auto">
            {h.subPre}{" "}
            <span className="text-white font-medium">SEVDA™</span> {h.subAnd}{" "}
            <span className="text-white font-medium">CortexCraft™</span>
            {h.subPost}
          </p>
          <div className="flex justify-center mt-9">
            <BookButton />
          </div>
        </div>
      </div>

      {/* carousel dots */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center gap-2">
        {Array.from({ length: SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              slide === i ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
