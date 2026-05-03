# Content Rules — RestaurantCalcs

> **Read this file before writing any blog post, operator-story section, or calculator-page essay.** Then read `references/voice.md`, `references/humour.md`, `references/stats.md`, `references/stories.md`, `references/opinions.md` in that order.

---

## The four-file pre-flight

1. **`references/voice.md`** — Brock's writing style, sentence rhythm, vocabulary, formatting, AI tells to delete
2. **`references/humour.md`** — How Brock makes the reader smile (deadpan operator humour, never punching down)
3. **`references/stats.md`** — Canonical industry benchmarks + Brock's own numbers. Never invent.
4. **`references/stories.md`** — Cosmos / Felix / Joe recurring anchors. One story per post max.
5. **`references/opinions.md`** — Hot takes Brock has, all backed by numbers or lived experience. One per post max.

---

## Hard rules derived from references

### Voice (from `voice.md`)
- Short sentences (mostly under 18 words). One idea per sentence.
- Start with the answer. Then add context.
- First-person "I" for personal experience, "we" for the site/team.
- Real numbers + cited sources. Not "industry standard is..." — say "(Toast)" or "(DOL Fact Sheet #15)" inline.
- Headings are statements, not labels.

### Humour (from `humour.md`)
- One moment every 400–600 words: specific operator incident, self-deprecation, or deadpan industry observation.
- Lead with what Brock got wrong. Self-deprecation is the trust contract.
- Punch at the system, the math, the absentee owners. Never the reader.
- Specific beats general. Always.
- Sign-off makes the reader smile. No exclamation marks. No emojis.

### Stats (from `stats.md`)
- Use only the cited benchmarks in `stats.md`.
- Never invent dollar amounts attached to a named operator (Cosmos, Felix's Flaco's, Joe's Manolos).
- Hedge or skip if the number isn't on the canonical list. "Roughly," "in the high-30s," "ballpark" all fine.
- Always cite source inline when stating a benchmark.

### Stories (from `stories.md`)
- One operator anchor per post max. Don't pile Felix + Joe + Cosmos in one piece without explicit narrative reason.
- Use only documented incidents. Never invent new specific moments at any of the three businesses.
- Generic anonymous archetypes ("an operator I knew once...") are fine for pedagogy.
- Honor the operator. Frame closures and failures as structural, not moral.

### Opinions (from `opinions.md`)
- One strong opinion per post max. Always backed by a number, citation, or lived experience.
- Use the existing 11. Don't invent new hot takes without backing.
- Frame as lived ("in five years on the bar I saw...") not universal ("all operators...").

### Schema (from existing site infra)
- Every blog post needs `heroImage`, `relatedCalc`, full frontmatter per `src/content.config.ts` schema.
- Every calc page operator-story uses `.operator-story` class for full-bleed bg + drop cap + signed-off byline.
- BlogPosting + BreadcrumbList + Person/Author schemas auto-render via `src/pages/blog/[...slug].astro`.

---

## Pre-publish checklist

Before shipping any post, run this list:

1. **Voice tells** — re-read `voice.md` "Tells that it's AI-written" and delete anything that matches.
2. **Humour count** — at least 3 dad-jokes-or-asides for a 1500-word post; at least one self-deprecation; one sign-off that lands.
3. **Cited numbers** — every quantitative claim either has an inline citation or a hedge ("roughly", "ballpark"). Search-replace any naked benchmark to add `(Toast)` or `(DOL)` or appropriate cite.
4. **No invented quotes** — no Felix or Joe verbatim quotes unless explicitly logged in `references/stories.md`.
5. **One story max** — count the named-operator anchors. If more than one, decide which is primary and demote the other to a passing reference.
6. **One opinion max** — count the strong claims. Demote secondary ones.
7. **Sign-off** — last sentence should be specific + a little dry. Re-write if it reads as "and that's why you should use our calculator."
8. **Length** — long-form posts target 1500–2500 words. Anything under 1000 is too thin for SEO velocity. Anything over 3500 needs to be split.

---

## Writing process (recommended)

1. Pick a topic + target keyword.
2. Pick the operator anchor: Cosmos / Felix / Joe / Cosmos-archetype-anonymous. Just one.
3. Pick the opinion + its backing.
4. Draft outline:
   - Specific incident hook (lived-experience first paragraph, no listicle vibes)
   - Direct answer to the topic
   - Mechanism / steps / order
   - Cited benchmarks
   - Failure modes / "what didn't work"
   - Sign-off that lands
5. Draft prose. Don't overthink. The voice references are there to catch you on revision.
6. Revise against the pre-publish checklist.
7. Publish.

---

## Anti-patterns (delete on sight)

- "Whether you're a [X], [Y], or [Z]…" intros
- "In today's fast-paced restaurant industry..."
- Bullet points where every bullet is a full sentence ending in a period
- Three-item lists where every item starts with an "-ing" verb
- The word "comprehensive"
- Closing sentences that restate the opening
- Generic restaurant clichés ("the kitchen never sleeps", "running on coffee")
- Exclamation marks
- Emojis (anywhere — body, headings, CTAs)
- Em dashes used as decorative pauses (use a period, or "—" only for genuine break)
- Naked benchmarks without source citations
- Forced quirky humour that isn't lived-experience or industry-aimed
- Hot takes without backing

---

## Existing posts (audit baseline)

These three blog posts went live before the voice references were formalized. They're solid but read as "AI-edited" in places — not voice-pure Brock:

- `/blog/tip-pool-legal-guide-2026/`
- `/blog/bar-pour-cost-leaks/`
- `/blog/food-cost-discipline-flacos/`

**Action item (next session):** revoice each one against `references/voice.md` + `references/humour.md`. Add specific Cosmos asides where currently generic. Strengthen sign-offs. Verify benchmarks have citations.

Operator-story sections on calc pages (food-cost, recipe-cost, labor-cost, tip-pool, liquor-pour-cost, break-even, inventory-variance, menu-pricing) — same audit. Most are already voice-aligned via session-by-session iteration but worth a final pass.
