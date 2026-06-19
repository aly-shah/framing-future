"use client";

import { LegalShell } from "@/components/legal-shell";
import { useLocale } from "@/components/i18n";
import { privacyContent } from "@/components/legal-i18n";

export default function PrivacyPage() {
  const { locale } = useLocale();
  const p = privacyContent[locale];

  return (
    <LegalShell eyebrow={p.eyebrow} title={p.title} meta={p.meta}>
      <h2>{p.s1h}</h2>
      <p>
        <strong>FramingFuture™</strong>
        <br />
        {p.responsibleLabels.owner}: Sevda Yücel
        <br />
        Dietrich-Bonhoeffer-Straße 2, 41466 Neuss, Germany
        <br />
        {p.responsibleLabels.email}:{" "}
        <a href="mailto:coachsevda@framingfuture.com">coachsevda@framingfuture.com</a>
        <br />
        {p.responsibleLabels.phone}: +49 1520 2339664
      </p>

      <h2>{p.s2.h}</h2>
      <p>{p.s2.p1}</p>
      <p>{p.s2.p2}</p>
      <p>{p.s2.p3}</p>

      <h2>{p.s3.h}</h2>
      <p>{p.s3.p1}</p>
      <p>{p.s3.p2}</p>

      <h2>{p.s4.h}</h2>
      <p>{p.s4.p1}</p>
      <p>{p.s4.p2}</p>

      <h2>{p.s5.h}</h2>
      <p>{p.s5.p1}</p>
      <ul>
        {p.tools.map(([name, desc]) => (
          <li key={name}>
            <strong>{name}:</strong> {desc}
          </li>
        ))}
      </ul>

      <h2>{p.s6.h}</h2>
      <p>{p.s6.p}</p>

      <h2>{p.s7.h}</h2>
      <p>{p.s7.p}</p>

      <h2>{p.s8.h}</h2>
      <p>{p.s8.p1}</p>
      <p>
        {p.s8.p2pre}
        <a href="https://www.ldi.nrw.de" target="_blank" rel="noreferrer">
          www.ldi.nrw.de
        </a>
        {p.s8.p2post}
      </p>

      <h2>{p.s9.h}</h2>
      <p>{p.s9.p}</p>

      <h2>{p.s10.h}</h2>
      <p>{p.s10.p}</p>
    </LegalShell>
  );
}
