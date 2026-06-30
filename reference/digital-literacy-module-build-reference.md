# Digital Literacy for Effective AI — Module Build Reference

*The build-facing companion to the Module Design Standard. The standard says what a module is. This document says how the reference build implements it, and records the refinements proven while building Module 4.2 in its paged form. Claude Code builds to this. Module 4.2 is the reference build; hold every new module against it.*

---

## Status and scope

This sits underneath the Module Design Standard, not beside it. Nothing here overrides the standard's principles (contact-first, no-scroll, shown not told, neutral on tools, house style). What it adds is the implementation detail the standard leaves open, plus four refinements that came out of real feedback on the 4.2 build.

One of those refinements updates the standard rather than just implementing it. The standard treats the cover video as the thing that sets the scene. We have learned the cover needs to set its own scene in plain text as well, because a module can be landed on cold and the video may not exist yet. That point is marked clearly below and the standard should be updated to match.

---

## What this session settled

Four decisions, recorded so the reasoning survives the build.

1. **The cover carries visible scene-setting, not only a video.** A short what / why / what block plus a one-line signpost, readable with the video unplayed or absent.
2. **Every frame is signposted.** A step label, a filled progress segment, and a stated shape for the whole lesson, so a learner on the fast path always knows where they are.
3. **Depth is handled by progressive disclosure inside one module, not by two separate modes.** A collapsed "new to this?" panel on concept frames. One build, one source of truth, both audiences served.
4. **The interactive centrepiece is a single-view inspector, not a multi-column one.** One representation at a time, full width, with the state toggle kept persistent. This supersedes any side-by-side arrangement.

---

## The frame sequence, as built

A module is a sequence of frames inside a fixed lesson stage. The learner moves with back and next and the arrow keys. Progress shows as segments along the top. One frame is visible at a time, and no frame scrolls. If a part will not fit, it becomes two frames, never a scroll.

The reference build runs seven frames. This is the spine to follow.

**0. Cover.** Module label, title, a one-line hook, the outcome stated as a promise, and the orientation video as a square (1:1) placeholder until filmed. Plus the visible scene-setting block and signpost (see below). Brief and skippable.

**1. See it for yourself.** The interactive centrepiece, framed as a challenge, as the first real step. This is the single-view inspector (see the primitive below). The learner does before they read.

**2. What you just saw.** The concept, carried by a visual (a before-and-after, a split, a small diagram) with minimal prose. Carries the "new to this?" disclosure panel.

**3. Quick check.** One predict-then-reveal question. The learner commits a guess, then the answer and the reason are revealed. The question ties directly to something they just saw in the inspector.

**4. Choose your approach.** The tools comparison. Neutral, decision-useful, never a recommendation. Free or paid status and a one-line use note per tool.

**5. Your turn.** The standard do-it-yourself block: a sample file to download, a one-tap copyable prompt, a short set of steps including swapping in the learner's own file, and a how-did-it-go self-check with a short tailored reply.

**6. Carry forward.** A few takeaways, two or three where-to-go-next links, and the mark-complete action.

The interactive frame and the Your turn frame are mandatory. The rest is the default shape and can flex where a module genuinely calls for it.

---

## The cover sets its own scene

*This refines the Module Design Standard.*

The cover does two jobs at once. For a learner arriving through Track 0, it orients. For a learner landing cold on the module as a free sample from the homepage, it has to stand alone. The video cannot be the only thing carrying that weight, because at this stage the videos are not filmed, and even once they are, a learner who skips the video should lose nothing required.

So the cover carries a visible block, readable in seconds:

- **What this is.** One sentence naming the module in plain terms.
- **Why you'd care.** One sentence connecting it to a problem the learner recognises.
- **What you'll do.** One sentence describing the hands-on shape.

The video keeps its job (a 60 to 90 second human framing of why this matters) but is now the richer version of scene-setting the cover already does in text, not the only version.

---

## Signposting and the fast path

The course promises short modules, around ten to fifteen minutes. A learner moving fast should never feel lost. Three devices carry this, and all three are cheap.

- **A step label on every frame.** "Step 1 of 6", and a two or three word name for the step. The cover is the exception and reads as the title.
- **Progress segments** along the top, one per frame, filling as the learner advances.
- **A one-line shape on the cover.** "Six short steps. You'll try something first, then we'll explain what you saw." This pre-empts the "how long is this" question before it lands.

The recap frame should not be the first place a learner finally understands the structure. If it is, the front of the module is under-orienting.

---

## Progressive disclosure: one module, two depths

The instinct to serve both a beginner and a confident user is right. Two separate modes (a beginner edition and an advanced edition of each module) is the wrong mechanism. It doubles authoring and doubles maintenance across seventy modules, and the tool listings already update on their own cycle, so the cost compounds. It breaks the build-once economy the whole product rests on.

The answer is progressive disclosure inside the single module.

- **Default to the lean, contact-first flow.** A confident learner moves straight through.
- **Offer optional depth where a beginner needs it.** A collapsed panel, "New to this? Start here", expands to give the grounding (for 4.2, what a spreadsheet is versus what a CSV is). Collapsed by default, short when open, never a scroll.

The rule that scales: the cover carries always-visible context for everyone, and the concept frames carry optional depth for those who want it. Context the whole audience needs is never hidden behind a toggle. The disclosure panel earns its place only where a beginner might genuinely need more, which is the concept frames, not every frame.

---

## The inspector primitive (single view)

This is the most reusable interactive in the course, so it is worth pinning down. Module 4.2's three-view CSV inspector is the reference instance. The shape generalises to any module that shows the same artefact in more than one form.

**The structure.** Two controls and one stage.

- **A state toggle.** The comparison that actually teaches. For 4.2 this is Clean against Messy. It stays visible at all times, because flipping it is the core learning moment.
- **View tabs.** The same artefact rendered different ways. For 4.2: Raw file, Spreadsheet, How AI reads it. One tab is active at a time.
- **A single full-width view stage.** Shows the selected view only, at a comfortable, legible size. A short caption names what the view is.
- **A persistent consequence strip** pinned below (see next section), so the stakes of the state toggle stay on screen whichever view is open.

**Why single-view, not multi-column.** Three legible representations of any artefact larger than a few rows will not fit side by side in a fixed no-scroll stage without shrinking the type below readable size. We tried the three-up and it forced a scroll on the widest view every time. One view at a time gives each representation the full width, keeps the type legible, behaves on mobile without a separate layout, and is the more dependable primitive across seventy modules. The cost (no simultaneous side-by-side) is small, because the comparison that teaches is the state toggle, and that is always live.

**What is parameterised** when this primitive is reused: the artefact's two or more states, the set of views, the per-view captions, the flagged problem cells, and the consequence question and its answers. The chrome (toggle, tabs, stage, strip) does not change between modules.

---

## The consequence strip

An optional library primitive, not a mandatory frame. It shows the concrete downstream effect of the concept: the learner asks the artefact a real question and sees it answered correctly on the good version and visibly fail on the broken one. For 4.2: "What was total revenue?" returns the right figure on the clean file and cannot answer reliably on the messy one.

**Use it where the concept has a concrete right-or-wrong or before-and-after outcome.** Most of Track 4 and Track 5 qualify. Do not force it where the consequence would be contrived (colour profiles, bias and ethics, vendor evaluation). Forcing it everywhere is how a course starts to feel templated. Keep it a strong default that authors reach for when it fits, alongside the two genuinely mandatory pieces (the interactive centrepiece and Your turn).

---

## State, assets, and tokens

**State.** In the standalone reference file, progress and the self-check are held in memory only. In production both persist on the member's Memberstack record, so they follow the learner across devices. Progress is two signals: completion (explicit) and furthest step reached (for resume). Do not infer progress from where someone has browsed.

**Assets.** Your turn sample files and prompts resolve from the module number, on a single assets site, at a predictable per-module path, for example `/<programme>/<track>-<module>/sample.csv` and `/prompt.txt`. The template builds the path from the number rather than from bespoke links, so this scales cleanly across the course.

**Tokens.** Navy is the house colour. Teal is for emphasis and premium signals only, used sparingly: the active state, the "what to look for" cue, a correct answer, mark-complete. Inter for interface and reading text, IBM Plex Mono for raw data and code. Flat finish, 3 to 4px radius. Reading text is weight 400, never 300. British English, no em dashes, every technical term defined the first time it appears.

---

## Authoring checklist (additions to the standard)

On top of the standard's checklist, a module built to this reference also:

- Opens on a cover whose scene-setting reads with the video unplayed.
- States the shape of the lesson once, on the cover.
- Labels every frame with its step and shows filled progress segments.
- Puts the interactive first, as a framed challenge.
- Uses the single-view inspector for any same-artefact-many-forms interactive, with the state toggle kept persistent.
- Adds the consequence strip only where there is a concrete outcome to show.
- Carries optional depth in a collapsed panel on concept frames, never in a second module variant.
- Keeps every frame to one idea and to the stage without scrolling.

---

## Not yet settled

Two honest flags, so they are not mistaken for closed questions.

**Contact-first is held loosely.** Everything in the 4.2 feedback was consistent with thin scaffolding and a missing video, not with doing-before-reading being wrong, so the fixes addressed the scaffolding. If beginners keep bouncing once the scaffolding is solid, that is the signal to revisit the ordering itself. Fix scaffolding first, then judge.

**Depth-matching belongs upstream once it exists.** Track 0, the self-assessment, and the task-based pathway are designed to route the right learner to the right depth. None are built yet, so Module 4.2 is currently doing orientation work on its own that the routing layer will eventually share. The progressive-disclosure panel is the in-module half of this, not the whole answer.

---

*End of reference. Read alongside the Module Design Standard and the reference build of Module 4.2.*
