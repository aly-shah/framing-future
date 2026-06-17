import type { Metadata } from "next";
import { LegalShell } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Imprint — FramingFuture™",
};

export default function ImprintPage() {
  return (
    <LegalShell eyebrow="Legal information" title="Imprint">
      <p>
        Information in accordance with Section 5 of the German Digital Services Act (DDG) and Section 18 (2) of
        the German Interstate Broadcasting Treaty (MStV). Status: June 2026.
      </p>

      <h2>Service provider</h2>
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

      <h2>Contact</h2>
      <p>
        Telephone: +49 1520 2339664
        <br />
        Email: <a href="mailto:coachsevda@framingfuture.com">coachsevda@framingfuture.com</a>
        <br />
        Web: framingfuture.com
      </p>

      <h2>Responsible for content in accordance with Section 18 (2) MStV</h2>
      <p>
        Sevda Yücel
        <br />
        Dietrich-Bonhoeffer-Straße 2
        <br />
        41466 Neuss
        <br />
        Germany
      </p>

      <h2>VAT</h2>
      <p>
        In accordance with Section 19 UStG, no VAT is shown on invoices (small business regulation).
      </p>

      <h2>Job title &amp; qualification</h2>
      <p>
        Job title: Coach (Certified Professional Coach — CPC)
        <br />
        Certifying body: Certified Coaches Alliance (CCA) — CTA-CPC certified
        <br />
        ICF certification (International Coaching Federation) in preparation
        <br />
        Professional titles were awarded in the Federal Republic of Germany.
      </p>

      <h2>Trademark and design rights</h2>
      <p>
        The following designations are registered trademarks or claimed trademarks of the service provider:
      </p>
      <ul>
        <li>FramingFuture™</li>
        <li>SEVDA™ Flow</li>
        <li>CortexCraft™</li>
        <li>Yücel Coaching Lab™</li>
      </ul>
      <p>
        Use of these designations by third parties—especially in connection with coaching, training, or
        consulting services—requires the owner&apos;s express written consent.
      </p>

      <h2>EU dispute resolution</h2>
      <p>
        The European Commission provides a platform for online dispute resolution (ODR):{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
      </p>
      <p>You can find our email address in the legal notice above.</p>

      <h2>Consumer dispute resolution / universal arbitration board</h2>
      <p>
        We are neither willing nor obligated to participate in dispute resolution proceedings before a consumer
        arbitration board.
      </p>

      <h2>Liability for content</h2>
      <p>
        As a service provider, we are responsible for our own content on these pages in accordance with Section
        7 (1) of the German Digital Services Act (DDG). However, under Sections 8 to 10 DDG, we are not
        obligated as a service provider to monitor transmitted or stored third-party information or to
        investigate circumstances that indicate illegal activity.
      </p>
      <p>
        Obligations to remove or block the use of information under general law remain unaffected. However,
        liability in this respect is only possible from the time we become aware of a specific legal
        infringement. Upon becoming aware of such legal infringements, we will remove the content in question
        immediately.
      </p>

      <h2>Liability for links</h2>
      <p>
        Our website contains links to external third-party websites over whose content we have no influence.
        Therefore, we cannot assume any liability for this external content. The respective provider or operator
        of the linked pages is always responsible for their content.
      </p>
      <p>
        The linked pages were checked for possible legal violations at the time the links were created. No
        illegal content was apparent at that time. However, continuous monitoring of the content of linked
        pages is not feasible without specific indications of a legal violation. Upon notification of legal
        violations, we will remove such links immediately.
      </p>

      <h2>Copyright</h2>
      <p>
        The content and works created by the service provider on these pages are subject to German copyright
        law. Reproduction, processing, distribution, and any form of exploitation beyond the limits of
        copyright law require the written consent of the respective author or creator. Downloads and copies of
        this page are permitted only for private, non-commercial use.
      </p>
      <p>
        Where content on this site has not been created by the operator, the copyrights of third parties are
        respected. In particular, third-party content is identified as such. Should you nevertheless become
        aware of a copyright infringement, please notify us accordingly. Upon notification of legal violations,
        we will remove such content immediately.
      </p>

      <h2>Image credits</h2>
      <p>
        All images and graphics used on this website are either from our own collection, were commissioned by
        the service provider, or are from royalty-free sources. Third-party rights remain unaffected.
      </p>
    </LegalShell>
  );
}
