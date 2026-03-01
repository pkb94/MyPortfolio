# Copilot Instructions

## Project Context
This is a personal portfolio site built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. It uses `output: "export"` for fully static site generation (SSG). It is hosted on Vercel with a Cloudflare-managed custom domain.

## Key Conventions
- All components live in `src/components/`
- Section data (experience, projects, skills) is co-located in the component file as typed arrays — no external CMS
- Dark mode uses Tailwind v4 `@custom-variant dark` with a class toggle on `<html>` managed by `ThemeProvider`
- No API routes — everything is static
- Use `dark:` prefix for dark mode variants throughout
- Prefer `tailwind` utility classes over inline styles
- Accessibility: always include `aria-label` on icon-only buttons/links

## Component Structure
- `ThemeProvider` — client component, manages `dark` class on `<html>`
- `Navbar` — fixed top bar with smooth-scroll anchor links + theme toggle
- `Hero`, `About`, `Experience`, `Projects`, `Skills` — page sections
- `Footer` — social links

## Editing Content
- **Personal info**: `Hero.tsx`, `About.tsx`, `Navbar.tsx`, `Footer.tsx`
- **Work history**: `experience` array in `Experience.tsx`
- **Projects**: `projects` array in `Projects.tsx`
- **Skills**: `skillsData` in `Skills.tsx`
- **Résumé**: `public/resume.pdf`
