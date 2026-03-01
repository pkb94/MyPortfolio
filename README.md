# My Portfolio

A personal portfolio site built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**, exported as a fully static site (SSG) and deployed to Vercel with a custom Cloudflare-managed domain.

## Tech Stack

- **Framework:** Next.js 16 (App Router, `output: "export"`)
- **UI:** React 19 + Tailwind CSS v4
- **Language:** TypeScript
- **Hosting:** Vercel
- **DNS:** Cloudflare

## Features

- ⚡ Static site generation — zero server-side runtime, CDN-served HTML
- 🌙 Dark / Light mode toggle (persisted in `localStorage`)
- 📱 Fully responsive (mobile-first)
- ♿ Accessible components (ARIA labels, semantic HTML)

## Sections

| Section    | Description                            |
|------------|----------------------------------------|
| Hero       | Name, title, and call-to-action        |
| About      | Bio, stats, and résumé download        |
| Experience | Work history timeline                  |
| Projects   | Featured project cards with links      |
| Skills     | Tech stack grouped by category         |

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # generates /out static export
```

## Deployment — Vercel + Cloudflare

### 1. Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js and uses `npm run build` → `out/`.

### 2. Connect Your Cloudflare Domain

1. In the Vercel dashboard → **Settings → Domains** → add your domain (e.g. `yourname.dev`).
2. Vercel shows two DNS records — add them in **Cloudflare DNS**:
   - **A record** `@` → `76.76.21.21`
   - **CNAME** `www` → `cname.vercel-dns.com`
3. Set both records to **DNS only** (grey cloud ☁️) — Vercel manages SSL.
4. Wait ~5 minutes for propagation.

> **Why DNS-only?** Vercel handles TLS/SSL via its own certificates. Enabling the Cloudflare proxy (orange cloud 🟠) can conflict with Vercel's HTTPS termination.

## Customisation

| What to change | File |
|----------------|------|
| Name / title / bio | `src/components/Hero.tsx`, `About.tsx`, `Navbar.tsx` |
| Work history | `src/components/Experience.tsx` — edit the `experience` array |
| Projects | `src/components/Projects.tsx` — edit the `projects` array |
| Tech skills | `src/components/Skills.tsx` — edit `skillsData` |
| Social links | `src/components/Footer.tsx` |
| Résumé PDF | Replace `public/resume.pdf` |
