"use client";

import { useLocale } from "@/components/i18n";

const ICONS = [
  // SELF — person in circle
  <>
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.5 18a5.5 5.5 0 0 1 11 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </>,
  // WORLD — globe
  <>
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2.5 12h19M12 2.5c2.6 2.5 2.6 16.5 0 19M12 2.5c-2.6 2.5-2.6 16.5 0 19" stroke="currentColor" strokeWidth="1.5" />
  </>,
  // FUTURE — lightning
  <path d="M13 2 5 13h5l-1 9 8-12h-5l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />,
];

export function Pillars() {
  const { t } = useLocale();
  const p = t.pillars;
  return (
    <section className="bg-paper text-ink">
      <div className="container-x py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-10 md:gap-6">
          {p.items.map((item, i) => (
            <div
              key={item.tag}
              className="text-center px-4 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mx-auto w-12 h-12 flex items-center justify-center text-ink">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  {ICONS[i]}
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold mt-5">{item.tag}</h3>
              <p className="italic text-ink/70 mt-3">{item.verb}.</p>
              <p className="text-muted-l mt-4 leading-relaxed text-[15px] max-w-xs mx-auto">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
