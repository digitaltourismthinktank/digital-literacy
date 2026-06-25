# Digital Literacy for Effective AI — Claude Code Build Brief

**For Claude Code. This brief is one autonomous milestone: a working, deployed slice of the course on its own subdomain, built as a reusable system so that adding modules later is a content task, not a rebuild.**

---

## What you are building

A standalone, static, gated learning app for the DTTT Academy programme "Digital Literacy for Effective AI". It lives on its own subdomain now and is linked into the main Webflow site later, so it must be self-contained: its own shell, its own navigation, its own auth handover through the shared Memberstack project. It is not embedded in Webflow.

---

## Reference material (read first)

- `Digital_Literacy_Module_4-2_paginated-v2.html` — the visual and behavioural target for a module. Port it. Do not redesign its look.
- `Learning_Component_Library.html` — the component primitives.
- `digital-literacy-module-design-standard.md` — the rules the build must hold (paged lesson, no-scroll, contact-first, the frame sequence, Your turn, progress, craft).
- the consolidated structure and navigation brief — the shell and Context 3 navigation.
- the Memberstack integration doc (see the final section).

Your first task is to extract the design tokens and shared component CSS from the reference HTML into a single tokens-and-components layer. The reference files are the design system in concrete form. Turn them into reusable components rather than copying markup per page.

---

## Stack

Astro, static output. It is content-first (modules are content, not hand-built pages), ships almost no JavaScript, supports the interactive pieces as islands (the inspector and the rest port in directly), and outputs plain static HTML, which keeps hosting cheap and the deploy workflow simple. The rich interactive primitives become islands (React components or client scripts); the shell and static frames are Astro components. If the team prefers all-React, Vite plus React is the fallback, but Astro fits this shape best.

---

## Architecture

- **Shell.** The Context 3 sidebar and topbar as a shared layout. Self-contained, course-only navigation, a back-to-dashboard link. No dependency on Webflow.
- **Module template.** One reusable paged-lesson component: a fixed-height stage, frames advanced with back, next and arrow keys, progress segments along the top, and the no-scroll rule. Ported from the 4.2 prototype.
- **Component library.** The primitives as shared components: the multi-view inspector, inline term define, predict-then-reveal, before-and-after, the see-it-versus-AI split, the decision matrix, the Your turn block, callouts, recap, where-to-next.
- **Modules as content.** A module is data (its frames, the interactive config, asset paths, prev and next), authored in a content collection. Adding a module is adding content, not building a page.
- **Programme overview.** The landing page, with the corrected course data and progress surfaced.

---

## Content model

Define a module content schema: id, track, title, hook, outcome, video (square, a Vimeo id), frames (typed: interactive, concept, check, tools, your-turn, recap), interactive config (which primitive and its data), assets (sample file, prompt), and nav (prev and next). Author 4.2 against it as the first real module. Stub the other Track 4 modules (4.1, 4.3 to 4.6) as coming-soon entries so the structure and navigation are complete.

---

## Memberstack and gating

- Use the shared Memberstack project (the same public key as the existing project). Add this subdomain to the Memberstack allowed domains.
- Gating is client-side through the Memberstack DOM package: a logged-in member carries straight in, the programme is gated by tier.
- Reuse the pattern in the Memberstack integration doc. Do not reinvent it.
- Keep the publishable key in `.env`. Never commit any secret key.

---

## Progress and state

- Two signals only: completion (explicit) and furthest step reached (for resume).
- Persist on the member's Memberstack record as a small JSON object keyed by module, for example `{"4.2":{"status":"complete","furthest":6}}`.
- Put it behind a small `progressStore` abstraction (read and write) so the UI does not care whether localStorage (logged-out preview) or Memberstack (logged-in) sits behind it.
- Surface it as an overall ring, per-track bars, per-module ticks, and a resume affordance, as in the overview reference.
- The Your turn self-check can feed a confidence reading later. Record the response, but keep it simple.

---

## Your turn assets

Host sample files and prompts on this same deploy under a predictable path: `/<programme>/<track>-<module>/sample.csv` and `/prompt.txt`. The template resolves a module's assets from its number, not from bespoke links. For 4.2, create the messy `bookings_q3.csv` and the prompt as real files at that path.

---

## Routing and domain

Static routes. The programme overview at the subdomain root, modules by number (for example `/4-2-spreadsheets-and-csvs`). Coming-soon modules resolve to a placeholder.

---

## Deploy workflow (deploy rarely)

- Develop locally with the dev server. Commit to GitHub freely, for history.
- Do not connect Netlify to auto-deploy from the repo.
- The build runs locally (`astro build` to `dist/`). Deploy only at milestones with the Netlify CLI: `netlify deploy` for a private preview, `netlify deploy --prod` to publish.
- This keeps Netlify build minutes near zero (the build is local) and means a deploy happens only when chosen. For this milestone, deploy once, at the end.

---

## Build sequence (this milestone)

1. Scaffold the Astro repo, tooling and `CLAUDE.md`. Commit the reference files into `/reference`.
2. Extract tokens and shared component CSS from the references.
3. Build the shell (the Context 3 layout).
4. Build the paged module template (stage, frames, pager, no-scroll, progress, keyboard).
5. Port the component library primitives.
6. Define the module content schema, author 4.2 fully, stub the rest of Track 4.
7. Build the programme overview with the corrected data and progress.
8. Wire Memberstack gating and the progress store.
9. Create the Your turn assets at the path convention.
10. Local build, verify, then one `netlify deploy --prod`.

---

## Definition of done

A member can sign in, land on the programme overview, open 4.2, move through every frame without scrolling, use the inspector and the Your turn block (download the sample, copy the prompt, complete the self-check), have completion and resume persist on their Memberstack record, and see progress on the overview. The other Track 4 modules show as coming soon. The whole thing is deployed once on the subdomain and feels like one product with the member platform.

---

## Constraints

- Hold the Module Design Standard: no scroll within a frame, contact-first, the standard frame sequence, reading text at weight 400, teal for emphasis only, the tokens, flat finish.
- British English, no em dashes, every technical term defined on first use, neutral on tools.
- Accessible: keyboard navigation for the pager, visible focus states, sufficient contrast, semantic HTML.
- Mobile-responsive.
- Work on a feature branch, commit at logical points, deploy only at the end.

---

## Scope note

This milestone builds the system and the first complete module, not the full course content. The remaining sixty-plus modules are content-gated: each needs its teaching, interactive data, sample file and video written before it can be authored against this template. Build the machine well, so that once content exists a module is added as data. A good second milestone is a complete Track 4 once 4.1 and 4.3 to 4.6 are written.

---

## Memberstack integration doc

A short integration doc from the existing Claude Code project should sit in `/reference`. It captures the package used, the init, the env var for the key, how gating is applied, and how member JSON is read and written for progress. Reuse it rather than rediscovering the pattern.
