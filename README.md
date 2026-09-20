# gloria-sPortfolioKlosync

Portfolio site for Gloria Dede, built with Next.js (App Router), React, TypeScript and Tailwind CSS v4.

## Scripts

```bash
npm run dev     # start the dev server on http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Structure

UI and logic are kept apart, and every file stays under 200 lines.

```
src/
  app/                 routes: /, /about, /projects, /projects/[slug]
  components/          presentational components only (layout, ui, home, projects, project-detail, about)
  hooks/               all stateful/behavioural logic (menu, carousel, tabs, accordion, quote rotator, ...)
  data/                static content (projects, expertise, about copy, site links)
  lib/                 pure helpers and the project loaders (getProjects, getProject, ...)
public/                images, audio
```

## Loading states

The old full-screen spinner was removed. Projects show skeletons instead: the `/projects` list is wrapped in
`<Suspense>` with `ProjectsSkeleton`, and every project image (cards, detail galleries, home carousel) shows a
skeleton until it has loaded.
