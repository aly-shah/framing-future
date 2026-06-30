"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale } from "@/components/i18n";
import { contactContent, CONTACT_DETAILS } from "@/components/contact-i18n";
import { useBooking } from "@/components/booking-context";

const COLLAGE = [
  { src: "/assets/sch-core.webp", rot: "-rotate-6", pos: "top-0 left-2" },
  { src: "/assets/sch-connect.webp", rot: "rotate-3", pos: "top-6 left-28" },
  { src: "/assets/prog-core.png", rot: "rotate-6", pos: "top-32 left-0" },
  { src: "/assets/aud-youth.png", rot: "-rotate-3", pos: "top-36 left-24" },
];

export default function ContactPage() {
  const { locale } = useLocale();
  const c = contactContent[locale];
  const { openBooking } = useBooking();
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(0);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-cover bg-center" style={{ backgroundImage: "url('/footerbg.webp')" }}>
        <div className="absolute inset-0 bg-ink/75" />
        <div className="container-x relative pt-36 pb-20 md:pt-44 md:pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1]">
              {c.hero.title.map((l, i) => (
                <span key={i} className="block">{l}</span>
              ))}
            </h1>
            <p className="text-white/70 mt-5 text-lg">{c.hero.subtitle}</p>
            <button onClick={openBooking} className="btn-primary mt-7">
              {c.hero.button}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* collage */}
          <div className="hidden lg:flex items-center justify-center gap-6">
            <div className="relative w-64 h-64">
              {COLLAGE.map((img, i) => (
                <div key={i} className={`absolute ${img.pos} ${img.rot} w-28 h-20 rounded-lg overflow-hidden border-2 border-white/15 shadow-xl`}>
                  <Image src={img.src} alt="" width={140} height={100} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="font-display text-3xl text-white/80">×</span>
            <div className="w-52 rounded-xl overflow-hidden border-2 border-white/15 shadow-2xl">
              <Image src="/assets/founder.webp" alt="Coach Sevda" width={250} height={250} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-ink">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="eyebrow">{c.info.eyebrow}</p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white mt-3 leading-tight">
              {c.info.heading.map((l, i) => (
                <span key={i} className="block">{l}</span>
              ))}
            </h2>
            <p className="text-white/60 mt-5 max-w-md leading-relaxed">{c.info.text}</p>

            <div className="mt-10 space-y-5">
              <a href={`mailto:${CONTACT_DETAILS.email}`} className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                <Ico d="M3 6h18v12H3zM3 7l9 6 9-6" />
                {CONTACT_DETAILS.email}
              </a>
              <a href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                <Ico d="M4 4h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
                {CONTACT_DETAILS.phone}
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <Ico d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11zM12 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
                <span>
                  {CONTACT_DETAILS.location}
                  <span className="block text-white/45 text-sm">{c.info.locationSub}</span>
                </span>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="rounded-card border border-line bg-ink-card p-7 sm:p-8">
            {sent ? (
              <div className="text-center py-10">
                <div className="mx-auto w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="var(--color-accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{c.form.thankYou}</h3>
                <p className="text-white/55 mt-2 text-sm">{c.form.thankYouText}</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label={c.form.firstName} required />
                  <Field label={c.form.lastName} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label={c.form.email} type="email" required />
                  <Field label={c.form.phone} type="tel" />
                </div>
                <div className="grid gap-1.5">
                  <label className="text-sm font-medium text-white/90">{c.form.message} <span className="text-accent">*</span></label>
                  <textarea required rows={5} className="rounded-xl border border-line bg-ink px-4 py-3 text-sm text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none resize-none" />
                </div>
                <button type="submit" className="btn-primary justify-self-start mt-1">{c.form.submit}</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink">
        <div className="container-x pb-24 md:pb-32">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white">{c.faq.heading}</h2>
          </div>
          <div className="max-w-3xl mx-auto mt-12 space-y-3">
            {c.faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="rounded-xl border border-line bg-ink-card overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-medium text-white">{item.q}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 text-accent">
                      {isOpen ? (
                        <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      ) : (
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      )}
                    </svg>
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-5 -mt-1 text-white/60 text-sm leading-relaxed">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Ico({ d }: { d: string }) {
  return (
    <span className="w-9 h-9 shrink-0 rounded-lg bg-white/8 flex items-center justify-center text-accent">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d={d} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Field({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm font-medium text-white/90">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input type={type} required={required} className="rounded-xl border border-line bg-ink px-4 py-3 text-sm text-white focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" />
    </div>
  );
}
