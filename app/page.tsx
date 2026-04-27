import Link from "next/link";

const services = [
  {
    title: "Product Studio",
    body: "We design and build consumer-facing software end to end.",
  },
  {
    title: "AI Tooling",
    body: "We build AI-powered features for users in markets that are often overlooked.",
  },
  {
    title: "Research",
    body: "We invest time in understanding the regions and audiences we build for.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-24 md:px-8 md:pb-32 md:pt-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Crebox Labs
          </h1>
          <p className="mt-6 text-2xl font-medium text-foreground md:text-3xl">
            We build digital products for emerging markets.
          </p>
          <p className="mt-6 max-w-xl text-lg text-muted">
            A small studio shipping software, AI tools, and consumer
            experiences. Quietly. Carefully.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
            >
              Get in touch
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-8">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted">
            What we do
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="rounded-2xl border border-border bg-background p-7 transition-colors hover:border-accent/40"
              >
                <span
                  aria-hidden
                  className="block h-8 w-8 rounded-lg bg-accent/10 ring-1 ring-accent/30"
                />
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-muted">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-8">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted">
            Where we work
          </h2>
          <p className="mt-6 max-w-3xl text-xl text-foreground md:text-2xl">
            Crebox Labs operates remotely. Our work focuses on the MENA region
            and adjacent markets.
          </p>
        </div>
      </section>
    </>
  );
}
