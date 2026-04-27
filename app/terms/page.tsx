import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of the Crebox Labs website and any communication with Crebox Labs.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-32 pt-24 md:px-8 md:pt-32">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-muted">
        Last updated: {SITE.lastUpdated}
      </p>

      <div className="prose-content mt-12 space-y-10 text-foreground/90">
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Acceptance of terms
          </h2>
          <p className="mt-4 leading-relaxed">
            By accessing or using{" "}
            <a
              href={SITE.url}
              className="text-accent underline-offset-4 hover:underline"
            >
              creboxlabs.com
            </a>{" "}
            (the &quot;Site&quot;), you agree to these Terms of Service. If you
            do not agree, please do not use the Site. These Terms govern your
            use of the Site and any communication you initiate with Crebox Labs
            LLC (&quot;Crebox Labs&quot;).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            What this Site is
          </h2>
          <p className="mt-4 leading-relaxed">
            The Site is an informational presence for Crebox Labs. It does not
            provide an account system, a paid product, a newsletter, or
            transactional functionality. Email addresses published on the Site
            are intended for inquiries and partnership conversations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Intellectual property
          </h2>
          <p className="mt-4 leading-relaxed">
            The Site, including its text, design, layout, and brand elements, is
            owned by Crebox Labs and is protected by applicable intellectual
            property laws. You may not copy, reproduce, or distribute material
            from the Site for commercial use without prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Acceptable use
          </h2>
          <p className="mt-4 leading-relaxed">
            You agree not to attempt to disrupt, probe, or interfere with the
            normal operation of the Site, and not to use any communication
            channel published here for unlawful, fraudulent, or harassing
            purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            No warranty
          </h2>
          <p className="mt-4 leading-relaxed">
            The Site is provided on an &quot;as is&quot; and &quot;as
            available&quot; basis, without warranties of any kind, whether
            express or implied. Crebox Labs does not warrant that the Site will
            be uninterrupted, error-free, or free of harmful components, and
            disclaims all implied warranties to the maximum extent permitted by
            law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Limitation of liability
          </h2>
          <p className="mt-4 leading-relaxed">
            To the fullest extent permitted by applicable law, Crebox Labs and
            its members, officers, and contractors will not be liable for any
            indirect, incidental, special, consequential, or punitive damages
            arising from your use of, or inability to use, the Site. The total
            aggregate liability of Crebox Labs in connection with the Site shall
            not exceed one hundred United States dollars (USD 100).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Governing law
          </h2>
          <p className="mt-4 leading-relaxed">
            These Terms are governed by the laws of the United States of
            America and the laws applicable in the jurisdiction where Crebox
            Labs LLC is registered, without regard to conflict-of-laws
            principles. Any dispute arising out of or related to these Terms or
            the Site shall be resolved exclusively in that jurisdiction, and
            you consent to the personal jurisdiction of those courts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Changes to these Terms
          </h2>
          <p className="mt-4 leading-relaxed">
            We may update these Terms from time to time. Updates take effect
            when published on this page; the &quot;Last updated&quot; date above
            reflects the most recent revision. Continued use of the Site after a
            change constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="mt-4 leading-relaxed">
            For questions about these Terms, write to{" "}
            <a
              href={`mailto:${SITE.emails.legal}`}
              className="font-mono text-accent underline-offset-4 hover:underline"
            >
              {SITE.emails.legal}
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}
