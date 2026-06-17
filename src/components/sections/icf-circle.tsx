"use client";

import { useState } from "react";
import { useLocale } from "@/components/i18n";

const NODES = [
  { color: "var(--color-orange)", angle: -90, dir: "top", icon: "M12 3v4m0 0 3 3m-3-3-3 3M5 14l2 7h10l2-7a7 7 0 0 0-14 0z" }, // future / pilot
  { color: "var(--color-blue)", angle: 0, dir: "right", icon: "M3.5 12h17M12 3.5c2.4 2.3 2.4 14.7 0 17M12 3.5c-2.4 2.3-2.4 14.7 0 17" }, // world / ICF
  { color: "var(--color-purple)", angle: 90, dir: "bottom", icon: "M9 3h6v3l-2 4v4a3 3 0 1 1-2 0v-4L9 6z" }, // science
  { color: "var(--color-pink)", angle: 180, dir: "left", icon: "M7 11V8a5 5 0 0 1 10 0v3M5 11h14v9H5z" }, // lock / gdpr
];

const TIP_POS: Record<string, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
  right: "left-full top-1/2 -translate-y-1/2 ml-3",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
  left: "right-full top-1/2 -translate-y-1/2 mr-3",
};

export function IcfCircle() {
  const { t } = useLocale();
  const labels = t.why.nodeLabels;
  const [hovered, setHovered] = useState<number | null>(null);
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
          <div className="absolute inset-0 flex items-center justify-center px-8">
            <p className="font-display text-xl sm:text-2xl font-semibold text-center max-w-[220px] leading-snug transition-colors">
              {hovered !== null ? labels[hovered] : t.why.features[0].title}
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
                className="absolute"
                style={{
                  left: `${(x / SIZE) * 100}%`,
                  top: `${(y / SIZE) * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <button
                  aria-label={labels[i]}
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-default"
                  style={{ background: n.color }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d={n.icon} stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* tooltip */}
                <div
                  className={`absolute z-20 w-44 rounded-lg bg-ink text-white text-xs leading-relaxed px-3 py-2 shadow-xl text-center pointer-events-none transition-opacity duration-200 ${
                    TIP_POS[n.dir]
                  } ${hovered === i ? "opacity-100" : "opacity-0"}`}
                >
                  {labels[i]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
