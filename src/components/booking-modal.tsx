"use client";

import { useEffect } from "react";
import { useBooking } from "./booking-context";
import { useLocale } from "./i18n";
import { LunacalEmbed } from "./lunacal-embed";

export function BookingModal() {
  const { open, closeBooking } = useBooking();
  const { t } = useLocale();
  const b = t.booking;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeBooking]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeBooking} />
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-ink-card border border-line rounded-3xl shadow-2xl overflow-hidden animate-modal-in">
        <div className="bg-ink-2 p-6 sm:p-7 text-white relative border-b border-line shrink-0">
          <button
            onClick={closeBooking}
            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white"
            aria-label={b.close}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <p className="eyebrow">{b.eyebrow}</p>
          <h3 className="font-display text-2xl font-semibold mt-2">{b.title}</h3>
          <p className="text-white/60 text-sm mt-2 max-w-lg">{b.subtitle}</p>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto">
          <LunacalEmbed />
        </div>
      </div>
    </div>
  );
}
