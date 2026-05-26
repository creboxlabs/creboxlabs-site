export const SITE = {
  name: "Crebox Labs",
  legalName: "Crebox Labs LLC",
  tagline: "We build digital products for emerging markets.",
  description:
    "A Wyoming-registered digital studio building software, AI tools, and consumer experiences for the MENA region and beyond.",
  url: "https://creboxlabs.com",
  emails: {
    general: "hello@creboxlabs.com",
    privacy: "privacy@creboxlabs.com",
    legal: "legal@creboxlabs.com",
  },
  address: {
    line1: "Crebox Labs LLC",
    line2: "c/o Northwest Registered Agent, LLC",
    line3: "30 N Gould St, Ste N",
    line4: "Sheridan, WY 82801",
    line5: "United States",
  },
  founded: "2026",
  lastUpdated: "2026-05-26",
} as const;

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;
