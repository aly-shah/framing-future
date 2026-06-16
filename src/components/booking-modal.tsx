"use client";

import { useEffect, useState } from "react";
import { useBooking } from "./booking-context";
import { useLocale } from "./i18n";

export function BookingModal() {
  const { open, closeBooking } = useBooking();
  const { t } = useLocale();
  const b = t.booking;
  const [sent, setSent] = useState(false);

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
      <div className="relative w-full max-w-lg bg-ink-card border border-line rounded-3xl shadow-2xl overflow-hidden animate-modal-in">
        <div className="bg-ink-2 p-6 sm:p-8 text-white relative border-b border-line">
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
          <p className="text-white/60 text-sm mt-2">{b.subtitle}</p>
        </div>

        {sent ? (
          <div className="p-8 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="var(--color-accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h4 className="font-display text-xl font-semibold">{b.thankYou}</h4>
            <p className="text-white/55 mt-2 text-sm">{b.thankYouText}</p>
            <button
              onClick={() => {
                setSent(false);
                closeBooking();
              }}
              className="btn-primary mt-6"
            >
              {b.close}
            </button>
          </div>
        ) : (
          <form
            className="p-6 sm:p-8 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label={b.firstName} name="firstName" />
              <Field label={b.lastName} name="lastName" />
            </div>
            <Field label={b.email} name="email" type="email" />
            <div className="grid gap-1.5">
              <label className="text-sm font-medium text-white/90">{b.iam}</label>
              <select
                name="role"
                className="rounded-xl border border-line bg-ink px-4 py-3 text-sm text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
              >
                {b.roles.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
            <div className="grid gap-1.5">
              <label className="text-sm font-medium text-white/90">{b.clarityOn}</label>
              <textarea
                name="message"
                rows={3}
                className="rounded-xl border border-line bg-ink px-4 py-3 text-sm text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none resize-none"
                placeholder={b.messagePlaceholder}
              />
            </div>
            <button type="submit" className="btn-primary w-full mt-1">
              {b.submit}
            </button>
            <p className="text-xs text-white/45 text-center">{b.gdpr}</p>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm font-medium text-white/90">{label}</label>
      <input
        required
        name={name}
        type={type}
        className="rounded-xl border border-line bg-ink px-4 py-3 text-sm text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none"
      />
    </div>
  );
}
