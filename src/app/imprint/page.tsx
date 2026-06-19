"use client";

import { LegalShell } from "@/components/legal-shell";
import { useLocale } from "@/components/i18n";
import { imprintContent } from "@/components/legal-i18n";

export default function ImprintPage() {
  const { locale } = useLocale();
  const m = imprintContent[locale];

  return (
    <LegalShell eyebrow={m.eyebrow} title={m.title}>
      <p>{m.intro}</p>

      <h2>{m.provider.h}</h2>
      <p>
        Sevda Yücel
        <br />
        FramingFuture™ — Coaching &amp; Transformation
        <br />
        Dietrich-Bonhoeffer-Straße 2
        <br />
        41466 Neuss
        <br />
        Germany
      </p>

      <h2>{m.contact.h}</h2>
      <p>
        {m.contact.phoneLabel}: +49 1520 2339664
        <br />
        {m.contact.emailLabel}:{" "}
        <a href="mailto:coachsevda@framingfuture.com">coachsevda@framingfuture.com</a>
        <br />
        {m.contact.webLabel}: framingfuture.com
      </p>

      <h2>{m.responsibleContent.h}</h2>
      <p>
        Sevda Yücel
        <br />
        Dietrich-Bonhoeffer-Straße 2
        <br />
        41466 Neuss
        <br />
        Germany
      </p>

      <h2>{m.vat.h}</h2>
      <p>{m.vat.p}</p>

      <h2>{m.jobTitle.h}</h2>
      <p>
        {m.jobTitle.lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < m.jobTitle.lines.length - 1 && <br />}
          </span>
        ))}
      </p>

      <h2>{m.trademark.h}</h2>
      <p>{m.trademark.p1}</p>
      <ul>
        {m.trademarks.map((tm) => (
          <li key={tm}>{tm}</li>
        ))}
      </ul>
      <p>{m.trademark.p2}</p>

      <h2>{m.odr.h}</h2>
      <p>
        {m.odr.pPre}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
      </p>
      <p>{m.odr.pPost}</p>

      <h2>{m.consumer.h}</h2>
      <p>{m.consumer.p}</p>

      <h2>{m.liabilityContent.h}</h2>
      <p>{m.liabilityContent.p1}</p>
      <p>{m.liabilityContent.p2}</p>

      <h2>{m.liabilityLinks.h}</h2>
      <p>{m.liabilityLinks.p1}</p>
      <p>{m.liabilityLinks.p2}</p>

      <h2>{m.copyright.h}</h2>
      <p>{m.copyright.p1}</p>
      <p>{m.copyright.p2}</p>

      <h2>{m.imageCredits.h}</h2>
      <p>{m.imageCredits.p}</p>
    </LegalShell>
  );
}
