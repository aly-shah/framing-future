"use client";

import Image from "next/image";
import { useLocale } from "@/components/i18n";

export function Why() {
  const { t } = useLocale();
  const w = t.why;
  return (
    <section className="bg-paper text-ink">
      <div className="container-x py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold leading-tight">
            Why FramingFuture™
          </h2>
          <p className="text-lg text-muted-l mt-6 leading-relaxed">{w.body}</p>
        </div>

        <div className="relative">
          <div className="rounded-card overflow-hidden border border-mist">
            <Image
              src="/glasses.webp"
              alt="FramingFuture™ — clarity"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
