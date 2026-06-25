# CLAUDE.md — Digital Literacy for Effective AI

Persistent context for this repository. Read this before any task.

## What this is

A standalone, static, gated learning app for the DTTT Academy programme "Digital Literacy for Effective AI". It lives on its own subdomain and is linked into the Webflow site later. Self-contained shell and navigation, Memberstack for auth and gating. Not embedded in Webflow.

## Stack

- Astro, static output to `dist/`.
- Interactive pieces as islands (React components or client scripts).
- Memberstack DOM for auth and gating, client-side.
- Hosted on Netlify, deployed manually with the CLI.

## Commands

- Dev server: `npm run dev`
- Build: `npm run build` (outputs static `dist/`)
- Preview deploy: `netlify deploy`
- Publish: `netlify deploy --prod`
- Do not connect Netlify to auto-deploy from GitHub. Commit freely for history. Deploy only at milestones, only when asked.

## Layout

- `src/layouts/` — the shell (Context 3 sidebar and topbar).
- `src/components/` — the component-library primitives and the paged module template.
- `src/content/modules/` — modules as content, one entry per module.
- `public/<programme>/<track>-<module>/` — Your turn assets (sample.csv, prompt.txt).
- `/reference/` — the design-system HTML and the Module Design Standard. The source of truth for look and behaviour.

## Design rules (do not break)

- A module is a paginated lesson: one part per frame, no scroll within a frame. If a part does not fit, split it into two frames.
- Contact-first: the interactive piece is the first real step, before any concept prose.
- Standard frame sequence: cover, see it for yourself, what you just saw, quick check, choose your approach, your turn, carry forward.
- Reading text weight 400, not 300. Teal for emphasis only. Navy is the house colour. Inter and IBM Plex. Flat finish, 3 to 4px radius.
- British English, no em dashes, define every technical term on first use, neutral on tools.
- Match `reference/Digital_Literacy_Module_4-2_paginated-v2.html` for look and behaviour. Follow `reference/digital-literacy-module-design-standard.md` for the rules.

## Auth and progress

- Memberstack publishable key in `.env` as `PUBLIC_MEMBERSTACK_KEY`. Never commit a secret key.
- Progress is completion plus furthest step, stored as JSON on the member record, behind a `progressStore` abstraction with a localStorage fallback when logged out.

## Adding a module

A module is data, not a new page. Add an entry to `src/content/modules/` with id, track, title, hook, outcome, video id, frames, interactive config, assets and prev/next. The template renders it.

## Working style

- Feature branch, commit at logical points.
- Verify with a local build before deploying.
- Deploy only at milestones, only when asked.
