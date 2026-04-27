import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Crebox Labs is a Wyoming-registered digital studio building software, AI tools, and consumer experiences for emerging-market audiences.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Quality over scale",
    body: "We ship fewer things, more carefully.",
  },
  {
    title: "Underserved first",
    body: "We build for users that bigger companies skip.",
  },
  {
    title: "Calm by design",
    body: "No growth-hacking, no dark patterns, no infinite scroll for its own sake.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-24 md:px-8 md:pt-32">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          About Crebox Labs
        </h1>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/90">
          <p>
            Crebox Labs is a digital studio founded in 2026, registered as a
            limited liability company in Wyoming, United States.
          </p>
          <p>
            We build consumer-facing software with a focus on emerging-market
            audiences — products in languages, design conventions, and use-cases
            that the global tech industry tends to overlook. Our work spans web
            platforms, mobile experiences, and AI-powered tools.
          </p>
          <p>
            We are deliberately small. We don&apos;t take outside funding. We
            ship things we&apos;d want to use ourselves and the people we know.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-8">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted">
            Principles
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <li
                key={p.title}
                className="rounded-2xl border border-border bg-surface p-7"
              >
                <span
                  aria-hidden
                  className="block h-8 w-8 rounded-lg bg-accent/10 ring-1 ring-accent/30"
                />
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
