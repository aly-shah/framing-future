"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "@/components/i18n";

export function LogoShowcase() {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-ink py-20 md:py-32 overflow-hidden">
      <div className="container-x flex justify-center">
        <div
          className="relative flex flex-row items-center justify-center cursor-pointer select-none"
          onClick={() => setOpen((o) => !o)}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          role="button"
          aria-label={t.hero.badge}
        >
          {/* revealed tagline (centered, behind the halves) */}
          <span
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap bg-white text-ink font-medium text-sm sm:text-xl px-3.5 py-2.5 sm:px-5 sm:py-3 transition-opacity duration-500 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {t.hero.badge}
          </span>

          {/* first half — slides left to reveal the tagline */}
          <Image
            src="/assets/logo-left.png"
            alt="FramingFuture™"
            width={211}
            height={291}
            priority
            className={`relative z-10 h-28 sm:h-40 w-auto object-contain transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? "-translate-x-28 sm:-translate-x-48" : ""
            }`}
          />

          {/* second half — slides right to reveal the tagline */}
          <Image
            src="/assets/logo-right.png"
            alt=""
            width={211}
            height={291}
            priority
            className={`relative z-10 h-28 sm:h-40 w-auto object-contain transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? "translate-x-28 sm:translate-x-48" : ""
            }`}
          />
        </div>
      </div>
    </section>
  );
}
