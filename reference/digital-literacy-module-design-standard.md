# Digital Literacy for Effective AI — Module Design Standard

*The canonical standard for how every module in the course is structured and delivered. It sits alongside the design foundations and the course specification, and it is the reference that Claude Code and Claude Design build to. Where it differs from the "how each module works" and "module shape" guidance in the course specification, this standard takes precedence. It changes how a module is delivered, not what a module teaches.*

*It is read alongside the Module Build Reference, the build-facing companion that records how the reference build implements this standard and the refinements proven while building Module 4.2. Where this standard and that reference describe the same thing, they agree by design.*

---

## Status and scope

The course specification lists what a module contains: a learning outcome, a why-this-matters, numbered concept sections, a neutral tools comparison, a hands-on exercise, a recap, where-to-go-next, and an interactive piece. None of that changes. What changes is the delivery. Those parts are no longer a single long page to scroll. They are delivered as a paginated lesson, one part per frame, and they are ordered so the learner does before they read.

This standard supersedes the module-interior guidance in the earlier Claude Design component brief, which described a single scrolling page broken up with visuals. The reference build is Module 4.2 in its paged form.

---

## The governing principle

A module is a learning experience, not a reading experience. Everything here serves that one line. In practice it means four things:

1. Interactivity runs throughout, not only at the centre.
2. The insights that matter are shown, through visuals and interaction, not told in prose.
3. Comparisons are decision-useful: understand the field, then choose the option you are comfortable with.
4. It never reads like an article. If a frame is mostly prose, it is not finished.

---

## The delivery model: a paginated lesson

A module is a sequence of frames inside a fixed lesson stage. The learner moves through with back and next (and arrow keys), with progress shown as segments along the top. They see one part at a time and never the whole length at once, which is what stops a module feeling long or like homework.

**The no-scroll rule.** Each frame fits the stage without scrolling. This is a hard rule, not a preference. If a part does not fit one frame, it becomes two frames. It never becomes a scroll. The discipline is useful: it forces each frame to hold a single idea and stops any module sprawling.

---

## Contact-first ordering

The learner does before they read. The interactive piece comes early, usually as the first real step, framed as a small challenge ("switch this on and watch what happens"). The concept then lands because the learner has just seen it happen, rather than being taught in the abstract first. The older, article-shaped order (teach the concept, then demonstrate it) is exactly what we are moving away from.

---

## The standard frame sequence

This is the default spine of a module. Not every module is identical, but this is the shape to follow, and the interactive frame and the Your turn frame are mandatory.

1. **Cover.** A designed opening: the module title, a one-line hook, the outcome stated as a promise, a short visible scene-setting block (what this is, why you'd care, what you'll do), a one-line shape of the lesson, and the orientation video. The scene-setting reads with the video unplayed. Brief and skippable.
2. **See it for yourself.** The interactive centrepiece, framed as a challenge. This is the first real step, so the first thing the learner does is interact.
3. **What you just saw.** The concept, carried by a visual (a diagram, a before-and-after, a split) with minimal prose. This is where the doing is made sense of.
4. **Quick check.** A predict-then-reveal question that asks the learner to commit a guess before the answer.
5. **Choose your approach.** The tools comparison, decision-useful, neutral, never a recommendation.
6. **Your turn.** The standard do-it-yourself component, described below.
7. **Carry forward.** A few takeaways and where to go next, ending on the mark-complete action.

---

## The cover, scene-setting, and orientation video

The cover sets the scene for everyone, including a learner who lands on the module cold as a free sample with none of the Track 0 routing in front of it. So the cover carries a short visible block, readable in seconds with the video unplayed: what this is, why you'd care, and what you'll do. It also states the shape of the lesson in one line, so a learner moving fast knows what they are committing to.

The video is square (1:1), presented as the deliberate piece of a designed cover, not a thumbnail on an edge. It runs 60 to 90 seconds and does one job: explain why this matters for what the learner is trying to do with AI. It is the richer version of the scene-setting the cover already does in text, not the only version, so a learner who skips it loses nothing required. It never teaches the concept. Teaching lives in the interactive layer, where it can be corrected without a reshoot. The video embeds via Vimeo in production.

---

## The interactive centrepiece

Every module has one rich interactive piece, drawn from the shared component library, that carries the core idea. It is framed as something to do, not something to watch. For 4.2 it is the inspector. The library exists so that modules are assembled from proven primitives rather than designed one by one. The inspector is delivered one view at a time at full width, with its state toggle kept persistent; the Module Build Reference sets out this primitive in full.

---

## The Your turn component

Every module ends its practical part with the same recognisable Your turn block, so the do-it-yourself moment is consistent across the whole course. It contains:

- A **sample file** to download (the messy example used in the module).
- A **prompt to paste**, copyable in one tap.
- A short set of **steps**, including swapping in the learner's own file.
- A **how-did-it-go self-check** (It worked, Partly, I got stuck) that gives a short tailored reply.

The self-check is the consistent ending interaction and is the natural place to capture a confidence signal later. Instructions are tool-neutral: the learner tries it in whatever AI tool or system they already use, and where relevant, importing to or exporting from their other tools.

**Asset hosting.** Sample files and prompts are hosted on a single assets site (Netlify is fine) under a predictable per-module path, for example `/<programme>/<track>-<module>/sample.csv` and `/prompt.txt`, so the template resolves a module's assets from its number rather than from bespoke links. This scales cleanly across seventy modules.

---

## Two depths in one module

A module serves both a beginner and a confident user without splitting into two versions. Two separate modes would double the authoring and the maintenance across seventy modules, and the tool listings already update on their own cycle, so the cost compounds. It breaks the build-once economy the product rests on.

Instead, the default flow is lean and contact-first, and optional depth is offered in place: a collapsed panel on the concept frames, labelled so a beginner can open it for grounding and a confident learner can pass it by. Context the whole audience needs is never hidden behind a panel; it lives in the open on the cover. The panel carries only the extra grounding a beginner might want.

---

## Progress and state

Progress is two signals only: completion (explicit) and furthest step reached (for resume). It persists on the member's Memberstack record so it follows them across devices, and surfaces as an overall ring, per-track bars, per-module ticks, and a resume affordance. The Your turn self-check can later feed a confidence reading. Do not infer progress from where someone has browsed.

---

## Craft rules

- Reading text is weight 400, not 300. Light display weight is fine for large headings, but body copy that someone actually reads is 400 for legibility.
- The lesson stage is a fixed height with the controls pinned, so the back and next buttons do not move between frames.
- Tokens throughout: navy as the house colour, teal for emphasis and premium signals only, Inter and IBM Plex, flat finish, 3 to 4px radius.
- British English, no em dashes, every technical term defined the first time it appears, neutral on tools by design.

---

## What maps onto what

Nothing in the course specification is lost. It is re-housed:

- Learning outcome and why-this-matters become the cover.
- Concept sections become See it for yourself plus What you just saw.
- The tools comparison becomes Choose your approach.
- The hands-on exercise becomes Your turn.
- The recap and where-to-go-next become Carry forward.
- The interactive artifact becomes the centrepiece, now an early step rather than a piece at the foot of a long page.

---

## Authoring checklist

A new module is built to this standard when:

- It opens on a cover with a square why-this-matters video, a visible scene-setting block that reads with the video unplayed, and the outcome stated as a promise.
- The shape of the lesson is stated once, on the cover, and every frame is signposted with its step and progress.
- The first real step is interactive, framed as a challenge.
- Each frame holds one idea and fits the stage without scrolling.
- Concepts are shown with a visual, not delivered as paragraphs.
- Optional depth for beginners lives in a collapsed panel on the concept frames, never in a second module variant.
- The tools comparison is neutral and decision-useful.
- There is a Your turn block with a sample file, a copyable prompt, steps, and a self-check.
- It ends on carry-forward points, where-to-go-next, and mark-complete.
- Reading text is weight 400, teal is reserved for emphasis, and the voice follows house style.

---

*End of standard. Read alongside the design foundations, the Module Build Reference, and the reference build of Module 4.2.*
