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
  // Long single words (e.g. German "Datenschutzerklärung") would break
  // mid-word on mobile. When the title has a long word, scale the heading
  // with the viewport so it stays on one line; short titles keep full size.
  const hasLongWord = title.split(/\s+/).some((w) => w.length > 12);

  return (
    <>
      <section className="relative bg-ink overflow-hidden border-b border-line">
        <div className="container-x relative pt-36 pb-14 md:pt-44 md:pb-16 text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h1
            className={`font-display font-semibold text-white mt-3 break-words ${
              hasLongWord
                ? "text-[clamp(1.25rem,6vw,1.875rem)] sm:text-4xl md:text-5xl"
                : "text-3xl sm:text-4xl md:text-5xl"
            }`}
          >
            {title}
          </h1>
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
