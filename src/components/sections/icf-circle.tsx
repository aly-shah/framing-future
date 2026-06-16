"use client";

import { useLocale } from "@/components/i18n";

const NODES = [
  { color: "var(--color-orange)", angle: -90, icon: "M12 3v4m0 0 3 3m-3-3-3 3M5 14l2 7h10l2-7a7 7 0 0 0-14 0z" }, // future
  { color: "var(--color-blue)", angle: 0, icon: "M3.5 12h17M12 3.5c2.4 2.3 2.4 14.7 0 17M12 3.5c-2.4 2.3-2.4 14.7 0 17" }, // world
  { color: "var(--color-purple)", angle: 90, icon: "M9 3h6v3l-2 4v4a3 3 0 1 1-2 0v-4L9 6z" }, // science flask
  { color: "var(--color-pink)", angle: 180, icon: "M7 11V8a5 5 0 0 1 10 0v3M5 11h14v9H5z" }, // lock (gdpr)
];

export function IcfCircle() {
  const { t } = useLocale();
  // ICF feature title is the 1st feature in the dictionary
  const label = t.why.features[0].title;
  const SIZE = 400;
  const C = SIZE / 2;
  const R = 165;
  return (
    <section className="bg-paper-2 text-ink">
      <div className="container-x pb-20 md:pb-28 flex justify-center">
        <div className="relative" style={{ width: "min(400px, 86vw)", height: "min(400px, 86vw)" }}>
          {/* ring */}
          <div className="absolute inset-8 rounded-full border-2 border-mist animate-spin-slow" />
          {/* center label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-display text-xl sm:text-2xl font-semibold text-center max-w-[200px] leading-snug">
              {label}
            </p>
          </div>
          {/* nodes */}
          {NODES.map((n, i) => {
            const rad = (n.angle * Math.PI) / 180;
            const x = C + R * Math.cos(rad);
            const y = C + R * Math.sin(rad);
            return (
              <div
                key={i}
                className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  left: `${(x / SIZE) * 100}%`,
                  top: `${(y / SIZE) * 100}%`,
                  transform: "translate(-50%, -50%)",
                  background: n.color,
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d={n.icon} stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
