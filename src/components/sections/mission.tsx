"use client";

import { useLocale } from "@/components/i18n";

export function Mission() {
  const { t } = useLocale();
  const m = t.mission;
  return (
    <section className="bg-ink text-center pb-24 md:pb-28">
      <div className="container-x max-w-4xl">
        <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight text-white">
          {m.heading.join(" ")}
        </h2>
        <p className="text-white/60 mt-6 text-lg max-w-2xl mx-auto">{m.sub}</p>
      </div>
    </section>
  );
}
