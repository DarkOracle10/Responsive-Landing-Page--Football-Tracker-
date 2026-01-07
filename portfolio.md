# Football Training Tracker — Portfolio One-Pager

A modern, responsive landing page for tracking football workouts and performance. Built to be fast, accessible, and installable as a PWA.

## Snapshot
- Purpose: Help players log sessions, visualize progress, and stay consistent.
- Audience: Amateur/club footballers, coaches, and fitness enthusiasts.
- Form factor: Mobile-first, scales to desktop; offline-ready via service worker.

## Problem → Solution
- **Problem:** Players struggle to keep consistent, structured training logs and see clear progress.
- **Solution:** A zero-friction web app that lets users log workouts, persist data locally, visualize trends, and export their history.

## Outcomes
- Lighthouse targets: 95+ Performance, 100 Accessibility / Best Practices / SEO; PWA installable.
- UX coverage: Keyboard-first nav, skip links, focus management, ARIA labeling, responsive down to 320px.

## Feature Highlights
- Interactive workout logger (type, duration, intensity, notes) with localStorage persistence.
- CSV export for workout history; client-only storage for privacy.
- Dark mode (system-aware + manual toggle).
- Responsive hero, feature grid, testimonials, and CTA flow.
- Toast notifications and animated counters for engagement.
- PWA: manifest + service worker for offline caching and installability.
- SEO/SMO: Meta tags, Open Graph, Twitter cards, canonical URL, JSON-LD.

## Experience & Design System
- Brand colors: primary `#00a86b`, secondary `#003d82`, accent `#ffd700`.
- Typography: System stack (Segoe UI / -apple-system / Roboto) for speed and clarity.
- Layout: CSS custom properties, Grid/Flex, 4+ breakpoints; intersection-observer animations.
- Accessibility: Skip link, proper roles, semantic landmarks, focus-visible styling.

## Architecture & Stack
- Frontend: HTML5, CSS3 (custom properties, Grid/Flex), Vanilla JS (ES6+).
- Tooling: Vite for dev/build; ESLint, Stylelint, Prettier, PostCSS/Autoprefixer.
- PWA: `manifest.json`, `sw.js`, cache strategy tuned for static assets + shell.
- Hosting: Netlify-ready; works as static site (no backend required).

## Implementation Notes
- Structured data via JSON-LD `SoftwareApplication` schema for rich results.
- Debounced scroll handlers and preconnect hints to optimize performance.
- Theme toggle uses `data-theme` on `<html>`; tokens live in `style.css`.
- Workout logic and constants contained in `script.js` (e.g., `WORKOUT_TYPES`).

## Setup & Run
1) Install deps (optional for dev server): `npm install`
2) Dev server: `npm run dev` → open http://localhost:5173
3) Static usage: open `index.html` directly in a browser.
4) Lint/format: `npm run lint`, `npm run format`.

## Deploy
- Netlify: connect repo, build command `npm run build` (or none), publish `dist/` (or root for static).
- Other: Vercel / Cloudflare Pages / GitHub Pages with static export.

## Roadmap Ideas
- Cloud sync and auth (Supabase/Firebase).
- Metrics charts (progressive line/area charts, rolling averages).
- Reminders and streaks; richer workout templates.
- Multi-language support.

## Contact
- Author: Your Name (GitHub: @DarkOrace10)
- Live demo: https://your-username.netlify.app
- License: MIT

---
**Call to Action:** Install the PWA, log your next session, export to CSV, and share your progress.
