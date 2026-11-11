# Joseph Benedict Pacanza — Portfolio (React + TypeScript)

A Vite + React 18 + TypeScript rebuild of the static HTML/CSS/JS portfolio.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build
```

## What's inside

- **Pages**: Home, About Me, Portfolio (React Router, `HashRouter` so it works on any static host)
- **All content lives in one typed file**: `src/data/portfolio.ts` (profile, skills, projects, education, soft skills, learning path, stats). Edit it and the whole site updates.
- **Look & feel**: dark/light theme (remembered), animated aurora + mouse spotlight, interactive particle network, scroll progress bar, page transitions, scroll-reveal sections
- **Interactions**: typewriter hero, animated counters and skill bars, 3D tilt cards with glare, skill marquee, filterable projects with a details modal
- **Command palette**: press `Ctrl/⌘ + K` to jump to pages, toggle theme, open GitHub/LinkedIn, or copy your email
- Respects `prefers-reduced-motion`; keyboard accessible

## Things to finish

1. Put your resume at `public/resume.pdf` (the Resume buttons point to `/resume.pdf`).
2. Replace the `'#'` values for `github` / `live` in `src/data/portfolio.ts` with real project links. The modal shows the buttons automatically once a link isn't `'#'`.
3. Add the GitHub repo link for Salita (and other projects) in `portfolio.ts`; set `year` / `status` on each project for the chips on the cards.
4. Check `responseTime` in `portfolio.ts` (shown under the contact buttons) and change it to what's true for you.
5. The Learning Path only has Year 1 — add more entries when you're ready.
6. Optional: add an Open Graph preview image (`og:image`) and, once you have a custom domain, a sitemap.

## Deploying (Vercel)

Import the repo on Vercel; the Vite preset works as-is (build: `npm run build`, output: `dist`).
