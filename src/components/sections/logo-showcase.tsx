"use client";

import Image from "next/image";
import { useLocale } from "@/components/i18n";

export function LogoShowcase() {
  const { t } = useLocale();
  return (
    <section className="bg-ink py-24 md:py-32 overflow-hidden">
      <div className="container-x flex justify-center">
        <div className="group relative flex items-center justify-center cursor-pointer select-none h-32 sm:h-40">
          {/* revealed tagline (sits behind the halves, centered) */}
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap bg-white text-ink font-medium text-base sm:text-xl px-5 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {t.hero.badge}
          </span>

          {/* left half — slides left on hover */}
          <Image
            src="/assets/logo-left.png"
            alt="FramingFuture™"
            width={211}
            height={291}
            priority
            className="relative z-10 h-full w-auto object-contain transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-36 sm:group-hover:-translate-x-48"
          />

          {/* right half — slides right on hover */}
          <Image
            src="/assets/logo-right.png"
            alt=""
            width={211}
            height={291}
            priority
            className="relative z-10 h-full w-auto object-contain transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-36 sm:group-hover:translate-x-48"
          />
        </div>
      </div>
    </section>
  );
}
