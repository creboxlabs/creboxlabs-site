import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Crebox Labs for partnership, press, or general inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-32 pt-24 md:px-8 md:pt-32">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        Get in touch
      </h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/90">
        <p>
          For partnership inquiries, press, privacy or legal questions, please
          email{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="font-mono font-medium text-accent underline-offset-4 hover:underline"
          >
            {SITE.email}
          </a>
          . We aim to reply within five business days.
        </p>
        <p className="text-muted">
          A postal mailing address is available on request.
        </p>
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-surface p-8">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium uppercase tracking-wider text-muted">
            Email
          </span>
          <a
            href={`mailto:${SITE.email}`}
            className="font-mono text-lg text-foreground transition-colors hover:text-accent"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </section>
  );
}
