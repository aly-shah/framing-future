"use client";

import Image from "next/image";
import { useLocale } from "@/components/i18n";
import { BookButton } from "@/components/book-button";

export function Founder() {
  const { t } = useLocale();
  const f = t.founder;
  return (
    <section id="founder" className="bg-ink pb-24 md:pb-32 scroll-mt-20">
      <div className="container-x grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-3 rounded-[1.75rem] bg-white/5" />
          <div className="relative rounded-card overflow-hidden border border-line">
            <Image
              src="/assets/founder.webp"
              alt="Sevda Yücel, founder of FramingFuture™"
              width={603}
              height={603}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white">
            {f.greeting}
            <br />
            Sevda Yücel.
          </h2>
          <p className="text-lg text-white/65 mt-6 leading-relaxed max-w-xl">{f.body}</p>
          <div className="mt-8">
            <BookButton />
          </div>
        </div>
      </div>
    </section>
  );
}
