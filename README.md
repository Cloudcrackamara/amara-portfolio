# Amarachi — Engineering Portfolio

Personal portfolio for Amarachi, an end-to-end engineer who takes products from idea through development, deployment, and ongoing operations.

## Stack

- [Next.js 16](https://nextjs.org) — **Pages Router** (`src/pages`), built with Turbopack
- React 19, TypeScript
- Tailwind CSS 4 (CSS-first config, no `tailwind.config` file)
- Framer Motion, Lucide React
- Fonts via `next/font/google` (self-hosted at build time): Space Grotesk, Inter, JetBrains Mono

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev     # http://localhost:3000
```

| Script          | Purpose                          |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack) |
| `npm run lint`  | Run ESLint                       |
| `npm run build` | Create a production build        |
| `npm run start` | Serve the production build       |

## Project structure

```
src/
  components/
    layout/     Page shells, header, footer
    sections/   Page sections
    projects/   Project cards, lists, detail views
    ui/         Small reusable primitives (Button, Section, Reveal, ImageFrame)
  data/         Content (profile.ts, projects.ts)
  pages/        Routes (Pages Router)
    projects/   Project routes
    api/        API routes
  styles/       globals.css — Tailwind import and design tokens
  types/        Shared TypeScript types
  utils/        Small helpers (cn)
```

Import from `src` with the `@/` alias, e.g. `import { Button } from "@/components/ui/Button"`.

## Design system

Tokens live in `src/styles/globals.css`. Light ("lights on") is the default; the lamp adds `html.dark`.
Every token has a light and a dark value, and each generates Tailwind utilities.

| Token       | Light     | Dark      | Example utilities          |
| ----------- | --------- | --------- | -------------------------- |
| `bg`        | `#FFFFFF` | `#0B0B0C` | `bg-bg`                    |
| `ink`       | `#0B0B0C` | `#F2F2EE` | `text-ink`                 |
| `muted`     | `#4A4A47` | `#B4B3AC` | `text-muted`               |
| `yellow`    | `#FFD60A` | `#FFD60A` | `bg-yellow` (fills only)   |
| `gold`      | `#7A5C00` | `#FFD60A` | `text-gold` (yellow text)  |
| `card`      | `#FFF8D6` | `#1C1A0E` | `bg-card`                  |
| `line`      | `#E6E4DA` | `#2A2A28` | `border-line`              |

Yellow on white is too faint for text, so use `text-gold` for yellow-looking text.
Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (labels, terminal), Caveat (the handwritten "Available").

## Content

All copy lives in `src/data/`, so text changes never touch components:

- `profile.ts` — name, bio, links, photos, CV path
- `projects.ts` — the featured project cards, in display order
- `site.ts` — nav, skills strip, terminal rows, stack, process, services, resume, certifications

## GitHub data (auto-updating)

`src/lib/github.ts` runs in `getStaticProps`, and the page revalidates every hour (ISR on Vercel):

- **Latest from GitHub** — any public repo with the `portfolio` topic appears on its own.
  Add a `cover.png` to the repo root to give it a picture.
- **Recent on GitHub** and the **contribution graph** in the sidebar.

Create a fine-grained GitHub token with read-only access to public repositories, then set it as
`GITHUB_TOKEN` in `.env.local` (local) and in Vercel → Settings → Environment Variables.
Without the token the site still builds: repos load from the public API, and the contribution
graph falls back to a saved snapshot.

## Deploy (Vercel)

1. Push this folder to a GitHub repository.
2. In Vercel, **Add New Project** and import the repository (Next.js is detected automatically).
3. Add the `GITHUB_TOKEN` environment variable, then **Deploy**. Every push redeploys.
