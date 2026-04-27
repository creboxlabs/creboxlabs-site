import Link from "next/link";
import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/site-config";

export default function Nav() {
  return (
    <header className="border-b border-border">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 md:px-8"
        aria-label="Primary"
      >
        <Logo />
        <ul className="flex items-center gap-7 text-sm">
          {NAV_LINKS.map((link) => (
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
      </nav>
    </header>
  );
}
