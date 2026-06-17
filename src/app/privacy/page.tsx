import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy — FramingFuture™",
};

const TOOLS: [string, string][] = [
  ["Hosting (ALL-INKL.COM)", "Secure hosting on EU servers, data processing agreement in place."],
  ["WordPress & Hazel Theme", "Technical basis of the website, no data is transferred to third parties."],
  ["RankMath Pro", "SEO optimization, no storage of personal data."],
  ["SureForms", "Contact form and bookings; data is transferred to Brevo (CRM)."],
  ["WhatsApp Widget (Meta Platforms Ireland Ltd.)", "Communication via Meta servers; data transfer to DPF/SCC."],
  ["TinyTalk AI Assistant", "Chat communication, processed on EU servers, anonymized."],
  ["Brevo (Sendinblue GmbH, Berlin)", "Email communication, EU server, data processing agreement."],
  ["Lunacal", "Appointment management; synchronization with Brevo."],
  ["FuseBase", "Parent & school portals (portal.framingfuture.com); Data processing agreement, SCC protection."],
  ["Dadan", "Video embedding; no tracking cookies, no storage of personal data."],
  ["Gamma", "Interactive presentations; US provider with DPF certification, no storage of user data."],
  ["Late", "Internal social media planning, no processing at the website level."],
  ["Note", "Locally hosted UI component library, no data transfer."],
  ["Academy LMS", "Online courses, voluntary registration, processing on EU servers."],
  ["WbizTool & Lancepilot", "Internal management of contracts, invoices and tasks."],
];

export default function PrivacyPage() {
  return (
    <LegalShell eyebrow="Legal information" title="Privacy Policy" meta="FramingFuture.com — As of June 2026">
      <h2>1. Responsible body</h2>
      <p>
        <strong>FramingFuture™</strong>
        <br />
        Owner: Sevda Yücel
        <br />
        Dietrich-Bonhoeffer-Straße 2, 41466 Neuss, Germany
        <br />
        Email: <a href="mailto:coachsevda@framingfuture.com">coachsevda@framingfuture.com</a>
        <br />
        Telephone: +49 1520 2339664
      </p>

      <h2>2. Basic principles &amp; legal basis</h2>
      <p>
        We process personal data exclusively within the framework of the General Data Protection Regulation
        (GDPR) and the Telecommunications and Telemedia Data Protection Act (TTDSG).
      </p>
      <p>
        Legal basis: Art. 6 para. 1 lit. a–f GDPR (consent, performance of a contract, legal obligation,
        legitimate interest).
      </p>
      <p>
        Legitimate interests include, in particular, technical security, the optimization of our services, and
        customer communication.
      </p>

      <h2>3. Visit the website</h2>
      <p>
        When you visit our website, technical data (e.g., IP address, browser type, time) is automatically
        recorded in server log files. This is for the purpose of ensuring system stability and for error
        analysis.
      </p>
      <p>This data will be deleted after a maximum of 7 days. Legal basis: Art. 6 para. 1 lit. f GDPR.</p>

      <h2>4. Cookies &amp; Consent</h2>
      <p>
        Our website uses a cookie consent tool from a European provider to manage your consent to the storage
        of cookies.
      </p>
      <p>
        Optional cookies (analysis, statistics) are only set after explicit consent (Section 25 Paragraph 1
        TTDSG, Article 6 Paragraph 1 Letter a GDPR). Consent can be withdrawn at any time.
      </p>

      <h2>5. Tools &amp; Systems Used</h2>
      <p>
        All external service providers have a data processing agreement in place (Art. 28 GDPR). The following
        list reflects the status of the tools currently in use as of June 2026.
      </p>
      <ul>
        {TOOLS.map(([name, desc]) => (
          <li key={name}>
            <strong>{name}:</strong> {desc}
          </li>
        ))}
      </ul>

      <h2>6. Data transfer to third countries</h2>
      <p>
        For services located outside the EU (e.g., Meta, Gamma, FuseBase), processing is carried out solely on
        the basis of the EU-US Data Privacy Framework (DPF) or the Standard Contractual Clauses (SCCs) pursuant
        to Article 46 GDPR. Despite existing safeguards, an equivalent level of data protection cannot be
        guaranteed in individual cases.
      </p>

      <h2>7. Storage period &amp; deletion</h2>
      <p>
        Data is deleted as soon as the purpose for which it was collected no longer applies or you withdraw
        your consent. Server logs: 7 days. Contract data: in accordance with statutory retention requirements
        (§ 257 HGB, § 147 AO).
      </p>

      <h2>8. Rights of those affected</h2>
      <p>
        You have the right to information, rectification, erasure, restriction of processing, data portability,
        and objection (Articles 15–21 GDPR). You can withdraw your consent at any time (Article 7(3) GDPR).
      </p>
      <p>
        Complaints should be addressed to the State Commissioner for Data Protection and Freedom of Information
        NRW (LDI NRW), Kavalleriestraße 2–4, 40213 Düsseldorf,{" "}
        <a href="https://www.ldi.nrw.de" target="_blank" rel="noreferrer">www.ldi.nrw.de</a>.
      </p>

      <h2>9. Security &amp; SSL Encryption</h2>
      <p>
        This website uses SSL/TLS encryption to protect your data from unauthorized access.
      </p>

      <h2>10. Scope &amp; Amendments</h2>
      <p>
        This privacy policy applies exclusively to www.framingfuture.com. We reserve the right to make changes.
        The current version can be found online at any time at /datenschutz.
      </p>
    </LegalShell>
  );
}
