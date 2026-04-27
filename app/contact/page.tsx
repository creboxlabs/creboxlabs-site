import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Crebox Labs for partnership, press, privacy, or legal inquiries.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    label: "General & partnerships",
    description: "Inquiries, press, and everything else.",
    email: SITE.emails.general,
  },
  {
    label: "Privacy",
    description: "Questions about our privacy practices or your data.",
    email: SITE.emails.privacy,
  },
  {
    label: "Legal",
    description: "Terms, intellectual property, and legal correspondence.",
    email: SITE.emails.legal,
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-32 pt-24 md:px-8 md:pt-32">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        Get in touch
      </h1>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/90">
        <p>
          Pick the channel that fits your message. We aim to reply within five
          business days.
        </p>
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-surface">
        <ul className="divide-y divide-border">
          {channels.map((c) => (
            <li
              key={c.email}
              className="flex flex-col gap-3 p-7 md:flex-row md:items-center md:justify-between md:gap-8"
            >
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium uppercase tracking-wider text-muted">
                  {c.label}
                </span>
                <span className="text-foreground/90">{c.description}</span>
              </div>
              <a
                href={`mailto:${c.email}`}
                className="font-mono text-base text-foreground transition-colors hover:text-accent md:text-right"
              >
                {c.email}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-surface p-8">
        <span className="text-sm font-medium uppercase tracking-wider text-muted">
          Mailing address
        </span>
        <address className="mt-3 ml-4 not-italic leading-relaxed text-foreground/90">
          {SITE.address.line1}
          <br />
          {SITE.address.line2}
          <br />
          {SITE.address.line3}
          <br />
          {SITE.address.line4}
          <br />
          {SITE.address.line5}
        </address>
      </div>
    </section>
  );
}
