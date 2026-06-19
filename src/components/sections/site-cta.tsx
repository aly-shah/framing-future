"use client";

import { useLocale } from "@/components/i18n";
import { BookButton } from "@/components/book-button";

export function SiteCta() {
  const { t } = useLocale();
  const c = t.cta;
  return (
    <section className="bg-ink">
      <div className="container-x pb-20 md:pb-24">
        <div
          className="relative rounded-[2rem] overflow-hidden px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-28 text-center bg-cover bg-center"
          style={{ backgroundImage: "url('/footerbg.webp')" }}
        >
          <div className="absolute inset-0 bg-ink/55" />
          <div className="relative max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white leading-tight">
              {c.heading}
            </h2>
            <div className="flex justify-center mt-9">
              <BookButton className="btn-primary w-full sm:w-auto justify-center whitespace-nowrap text-sm sm:text-base !px-4 sm:!px-7" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
