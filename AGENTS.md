# Crebox Labs site — agent rules

Static marketing site for Crebox Labs LLC. Holding-company / KYC artifact.

## Brand firewall

- No mention of any specific products, customer brands, or operating subsidiaries.
- No founder personal name on any page.
- No outbound links to founder-owned domains.
- No analytics, trackers, or third-party scripts beyond Vercel + Cloudflare email routing.
- No newsletter form, no blog, no preview-deploy public exposure.

## Stack

Next.js 16 App Router · Tailwind 4 · TypeScript · Vercel.

## Brand tokens

| Token       | Value     |
| ----------- | --------- |
| Background  | `#FAFAFA` |
| Foreground  | `#0A0A0A` |
| Muted       | `#6B6B6B` |
| Accent      | `#6E3AFF` |
| Surface     | `#FFFFFF` |

## Conventions

- All site config (URLs, emails, address, nav) lives in `lib/site-config.ts`. Never hardcode strings in components.
- Dynamic OG / icons via `app/opengraph-image.tsx`, `app/icon.tsx`, `app/apple-icon.tsx`.
- Sitemap and robots are file-based: `app/sitemap.ts`, `app/robots.ts`.
- All pages export `Metadata` with a `title`, `description`, and `alternates.canonical`.

## Next 16 caveats

This version has breaking changes — APIs, conventions, and file structure may differ from older training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing non-trivial code.

