import { ReactNode } from "react";

export function LegalShell({
  eyebrow,
  title,
  meta,
  children,
}: {
  eyebrow: string;
  title: string;
  meta?: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative bg-ink overflow-hidden border-b border-line">
        <div className="container-x relative pt-36 pb-14 md:pt-44 md:pb-16 text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white mt-3">{title}</h1>
          {meta && <p className="text-white/55 mt-4">{meta}</p>}
        </div>
      </section>
      <section className="bg-paper text-ink">
        <div className="container-x py-16 md:py-20 max-w-3xl">
          <div className="legal-prose">{children}</div>
        </div>
      </section>
    </>
  );
}
