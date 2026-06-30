# MEMBERSTACK.md

Auth, gating, and progress for the Digital Literacy build. This is a scaffold. Fill the placeholders marked `[TODO]` before testing gated routes. Keys live in environment variables, never in the repo.

---

## Project

Reuse the existing DTTT Memberstack project. Do not create a new one.

- **Public key:** `[TODO: DTTT Memberstack public key]`. Load from env (for example `PUBLIC_MEMBERSTACK_KEY`); never commit it.
- **Allowed domains:** add the course subdomain `[TODO: subdomain]` to the project's allowed domains in Memberstack before testing any gated route. Without this, auth will silently fail on the new domain.

---

## Gating tiers (from the course spec)

- **Free / lead:** Track 0 modules 0.1 to 0.4 including the self-assessment, plus Module 4.2 as a sample.
- **Foundation:** Tracks 0 to 5.
- **Complete:** all tracks including the sector track.
- **Team:** multi-seat licence.

For this milestone, only the free sample (4.2) and basic gating need to work. The paid tiers can be stubbed.

---

## Progress: the `progressStore` contract

Progress persists on the member record as small JSON, behind a `progressStore` abstraction so the rest of the app never calls Memberstack directly. If the backend changes later, only `progressStore` changes.

**Two signals only:**

- `complete`: explicit, per module.
- `furthest`: furthest step reached, per module, for resume.

Do not infer progress from where someone has browsed.

**Suggested shape** on the member record, in one custom JSON field (for example `dl_progress`):

```json
{
  "4.2": { "complete": true,  "furthest": 6 },
  "4.1": { "complete": false, "furthest": 2 }
}
```

**Interface** to implement against (swap the backend freely behind it):

- `progressStore.get(moduleId)` returns `{ complete, furthest }` or `null`
- `progressStore.getAll()` returns the full map
- `progressStore.setComplete(moduleId)`
- `progressStore.setFurthest(moduleId, step)` — monotonic, never lowers a recorded value
- **Signed-out fallback:** session-scoped only, no persistence. When signed in, the member record is the source of truth.

---

## Surfacing

Progress is designed to surface as an overall ring, per-track bars, per-module ticks, and a resume affordance. Not all of this is needed this milestone; the store plus per-module `complete` and `furthest` are. The Your turn self-check can later feed a confidence reading; out of scope now.

---

*Read alongside CLAUDE.md.*
