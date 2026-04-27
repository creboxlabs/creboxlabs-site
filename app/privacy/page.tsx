import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Crebox Labs collects, uses, and protects information when you contact us.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-32 pt-24 md:px-8 md:pt-32">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-muted">
        Last updated: {SITE.lastUpdated}
      </p>

      <div className="prose-content mt-12 space-y-10 text-foreground/90">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Overview</h2>
          <p className="mt-4 leading-relaxed">
            This privacy policy describes how Crebox Labs LLC (&quot;Crebox
            Labs&quot;, &quot;we&quot;, or &quot;us&quot;) handles information
            when you visit{" "}
            <a
              href={SITE.url}
              className="text-accent underline-offset-4 hover:underline"
            >
              creboxlabs.com
            </a>{" "}
            or contact us by email. We have designed this site to collect as
            little personal information as possible.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Information we collect
          </h2>
          <p className="mt-4 leading-relaxed">
            We do not run an account system, newsletter, or contact form on this
            site. The only personal information we receive is the content of
            email messages you choose to send to one of our published addresses
            (such as{" "}
            <span className="font-mono">{SITE.emails.privacy}</span>). This
            typically includes your name, email address, and the message you
            wrote.
          </p>
          <p className="mt-4 leading-relaxed">
            Our hosting provider may automatically log standard request metadata
            (IP address, user-agent string, timestamp) when your browser loads a
            page, as part of normal infrastructure operation. We do not use this
            data for tracking or profiling.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            How we use information
          </h2>
          <p className="mt-4 leading-relaxed">
            We use the contents of your emails solely to read and reply to your
            inquiry. We do not enrich, sell, share, or otherwise pass your
            personal information to third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Cookies and tracking
          </h2>
          <p className="mt-4 leading-relaxed">
            This site does not set marketing cookies, advertising pixels, or
            third-party analytics. The only client-side storage that may be used
            is the minimum required for the site to function (for example,
            cached static assets served by your browser).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Third-party services
          </h2>
          <p className="mt-4 leading-relaxed">
            The site is hosted on Vercel, which provides standard infrastructure
            logging and TLS termination. Email sent to our published addresses
            is delivered through standard email infrastructure. We do not embed
            other third-party services on this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Data retention</h2>
          <p className="mt-4 leading-relaxed">
            We retain email correspondence for as long as is reasonably useful
            to maintain the relationship or comply with legal obligations. You
            may ask us to delete prior correspondence at any time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Your rights</h2>
          <p className="mt-4 leading-relaxed">
            You may request a copy of any personal information we hold about
            you, ask us to correct inaccuracies, or ask us to delete it. To
            exercise any of these rights, write to{" "}
            <a
              href={`mailto:${SITE.emails.privacy}`}
              className="font-mono text-accent underline-offset-4 hover:underline"
            >
              {SITE.emails.privacy}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Changes to this policy
          </h2>
          <p className="mt-4 leading-relaxed">
            We may revise this policy from time to time. The &quot;Last
            updated&quot; date at the top of the page indicates when the most
            recent revision was published.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Contacting us
          </h2>
          <p className="mt-4 leading-relaxed">
            For questions about this policy, write to{" "}
            <a
              href={`mailto:${SITE.emails.privacy}`}
              className="font-mono text-accent underline-offset-4 hover:underline"
            >
              {SITE.emails.privacy}
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}
