import Link from "next/link";
import Logo from "./Logo";
import { FOOTER_LINKS, SITE } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-sm text-muted">
            © {SITE.founded} {SITE.legalName}. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <ul className="flex flex-wrap gap-6 text-sm">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-foreground/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${SITE.email}`}
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
