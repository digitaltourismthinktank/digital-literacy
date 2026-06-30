# Digital Literacy for Effective AI — Build Reference

This bundle is the current design work for the DTTT **Digital Literacy for Effective AI**
learning experience, collected for handoff to Claude Code. Everything here is the
**latest version as it stands** — nothing has been redesigned or recreated. Files were
renamed for clarity and their internal links repointed to match; the markup, styles and
content are unchanged from the source project.

Part of the DTTT (Digital Tourism Think Tank) Knowledge Programme. Navy / teal palette,
Inter + IBM Plex Sans + IBM Plex Mono, British English.

---

## What's in here

### `Module Template - Paged Lesson.html`  ← **build the module from this**
The current **module template** and the canonical lesson experience. A *paged* lesson:
one part per frame, advanced with back / next inside a fixed-height stage, following the
standard sequence — **cover → see it for yourself → what you just saw → quick check →
choose your approach → your turn → carry forward**. The cover opens on a square (1:1)
orientation-video centrepiece. Worked through real content as **Module 4.2 · Spreadsheets
and CSVs**, on the same DTTT shell and Context-3 (course-only) sidebar as the member
platform.

This **supersedes** the earlier single-scrolling-page module (the "scrolling" version in
the source project), which is intentionally omitted. Its design tokens are inlined, so it
is self-contained and does not depend on `shared-styles.css`.

### `Learning Component Library.html`
The **learning component / interaction library** — the reference sheet. Every learning
component shown in its default state with a one-line "use for" spec: callouts, inline term
definitions, predict-then-reveal, multi-view inspector, decision matrix, before/after,
parameter explorer, step-through pipeline, and the **paged-module additions** (lesson
cover, paged stage + controls, the standard "Your turn" block). This is the most recent
library — it carries the paged-module pieces the earlier version did not. Links to
`shared-styles.css`.

### `Programme Landing Page.html`
The **programme overview / landing page** for the course — hero, the single front-door
entry experience, and the programme framing. Links to `shared-styles.css`.

### `shared-styles.css`
The **shared stylesheet and design tokens** used by the landing page and the component
library: the master-system colour tokens (navy / teal, warm paper + cool learning
surface), type stacks, spacing/radius scale, and the shared nav, buttons, editorial
primitives and footer. The module template inlines this same token set.

### `assets/`
Brand logo marks referenced by the pages — `dttt-lockup-white.svg` (landing page nav +
footer, module sidebar) and `dttt-icon-black.svg` (component library top bar).

---

## Notes for the build

- **Start the module build from `Module Template - Paged Lesson.html`.** It is the
  current pattern; the component library is the parts catalogue a module is assembled from.
- Fonts load from Google Fonts via `<link>` in each page — an internet connection is
  needed for the exact type, otherwise the stack falls back gracefully.
- The three pages cross-link to each other by these filenames; keep them in the same
  folder (and `assets/` alongside) so the relative links and styles resolve.
- British English and no em dashes in product copy; teal is reserved for emphasis only.
