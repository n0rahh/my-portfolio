# Portfolio frontend

Vue 3 + Vuetify 3 + Vite single-page app. See the [root README](../README.md) for the full setup, environment variables and deployment guide.

```bash
npm install
npm run dev        # start dev server on http://localhost:3000
npm run build      # production build
npm run preview    # serve the production build
npm run lint       # ESLint
```

## Structure

```
src/
├── api/           fetch-based API client + cached portfolio endpoints
├── components/
│   ├── home/      page sections (Banner, About, Projects, Skills, Contact)
│   ├── skills/    skills + work-experience widgets
│   └── UI/        reusable primitives (GlassCard, SectionContainer, ArrowButton)
├── directives/    v-reveal scroll-reveal directive
├── plugins/       Vuetify (theme + SVG icons)
├── router/        routes, scroll behavior, page titles
├── styles/        design tokens, typography, global styles
└── views/         Home, Project, Policy
```

## Conventions

- All colors, spacing, radii and breakpoints come from `src/styles/tokens.scss` — don't hard-code values in components.
- Typography uses the fluid classes from `src/styles/typography.scss` (`h0–h4`, `p1–p3`); avoid per-breakpoint font-size overrides.
- `SectionContainer` owns the horizontal page gutter; sections must not add their own page-level padding.
- API access goes through `src/api/portfolio.js` (cached) — components never call `fetch` directly.
