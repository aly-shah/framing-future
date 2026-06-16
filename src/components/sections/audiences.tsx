"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/i18n";

const META = [
  { img: "/assets/aud-families.png", href: "/parents" },
  { img: "/assets/aud-youth.png", href: "/youth" },
  { img: "/assets/aud-moms.png", href: "/parents" },
  { img: "/assets/aud-dads.png", href: "/parents" },
  { img: "/assets/aud-schools.png", href: "/school" },
  { img: "/assets/aud-companies.png", href: "/partners" },
];

export function Audiences() {
  const { t } = useLocale();
  const a = t.audiences;
  return (
    <section className="bg-paper-2 text-ink">
      <div className="container-x py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow !text-accent">{a.eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">{a.heading}</h2>
          <p className="text-muted-l mt-4 text-lg">{a.sub}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {a.items.map((item, i) => (
            <Link
              key={item.title}
              href={META[i].href}
              className="group rounded-card overflow-hidden bg-white border border-mist hover:shadow-[0_30px_70px_-35px_rgba(0,0,0,0.35)] transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src={META[i].img}
                  alt={item.title}
                  width={395}
                  height={240}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-l mt-1.5 text-[15px]">{item.text}</p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-accent">
                  {a.learnMore}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
