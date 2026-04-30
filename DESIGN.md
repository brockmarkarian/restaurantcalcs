# RestaurantCalcs Design System

A merged design DNA pulling from Stripe (financial trust), Wise (number drama), and Lamborghini (counter reveals). Tuned for independent restaurant owners — calm, confident, restaurant-coded warmth, not corporate sterile.

## 1. Visual Theme & Atmosphere

RestaurantCalcs is a **trusted utility for stressed operators**. The interface should feel like a quiet ledger in a busy kitchen — calm enough to think clearly, premium enough to trust with money decisions, warm enough to not feel like enterprise software.

The page opens on a warm off-white canvas (`#fafaf7`) with deep charcoal headings (`#1a1814`) and a single saffron-amber accent (`#c87500`) that functions as both brand anchor and CTA highlight. This is **not** Stripe's cool tech-purple, **not** Wise's electric lime, **not** Lamborghini's hard black gold. It's a warmer, food-coded palette that reads as confident and human.

The defining moments:
- **Display headlines at light weight (300)** — Stripe's "whispered authority" approach. Calcs about money don't need to shout.
- **Big number drama on results** — Wise-style 96px–120px numerics when delivering the answer ("Your food cost is **28.4%**"). The result is the hero.
- **Counter animation reveals** — Lambo-grade odometer-style number tickers. When you press Calculate, the result counts up over 800ms with tabular numerals, creating a small dramatic moment that signals "this is the answer."
- **Tabular numerals everywhere a number lives** — `font-feature-settings: "tnum"` on every numeric input, output, comparison row.
- **Generous whitespace + hairline borders** — Stripe's spatial discipline. No noise, no gradients, no purple-gradient AI slop.

**Key Characteristics:**
- Warm off-white canvas (`#fafaf7`) — not pure white, slightly food-warm
- Deep charcoal headings (`#1a1814`) with brown undertone — not black, not navy
- Single saffron-amber accent (`#c87500`) — restaurant-coded, the only chromatic color
- Display headlines at weight 300 (light) for confident-not-shouting authority
- Display body fonts: **General Sans** (humanist) for headings, **Geist Sans** (geometric modern) for body, **Geist Mono** for numerics. NEVER Inter, Arial, Roboto, system-ui, or generic sans.
- Big number readouts (72px–120px) on calc results with tabular figures
- 0.8s odometer counter animation on result reveal
- Conservative border-radius (8px–14px) — premium, not pill, not sharp
- Multi-layer warm shadows: `rgba(60, 50, 40, 0.08)` + `rgba(0, 0, 0, 0.04)` for soft food-warm depth

## 2. Color Palette & Roles

### Primary
- **Saffron Amber** (`#c87500`): Primary brand color, CTA backgrounds, link text, active states. Warm restaurant-coded amber, not yellow, not orange-red.
- **Saffron Hover** (`#a86200`): Darker amber for hover states on primary CTAs.
- **Saffron Light** (`#fbe9cf`): Tinted surface for amber-themed cards, badges, soft backgrounds.

### Surface & Text
- **Warm Canvas** (`#fafaf7`): Page background — barely off-white, food-warm undertone.
- **Cream Surface** (`#f4f1ea`): Secondary surface for cards, calc backgrounds, expandable panels.
- **Pure White** (`#ffffff`): Card surfaces, button text on dark, high-contrast input fields.
- **Heading** (`#1a1814`): Primary heading color. Deep charcoal with brown undertone — warm, premium, food-grade.
- **Body** (`#3d3a32`): Secondary text, descriptions, input labels.
- **Muted** (`#7a7569`): Captions, helper text, metadata, inactive states.

### Result Drama
- **Result Default** (`#c87500`): Big numeric result text color when neutral or default.
- **Result Warning** (`#b15a1f`): Big numeric result when over target (food cost too high, labor cost too high).
- **Result Success** (`#5c6b2e`): Big numeric result when under target (food cost below target = winning).

### Borders & Dividers
- **Hairline Border** (`#e8e4dd`): Standard border on cards, inputs, dividers.
- **Active Border** (`#c87500`): Active state borders on selected inputs, current calc tab.
- **Soft Border** (`#f0ece4`): Subtle borders for secondary panels, expandable rows.

### Shadow Colors
- **Shadow Warm** (`rgba(60, 50, 40, 0.08)`): Primary card elevation — warm food-toned shadow.
- **Shadow Ambient** (`rgba(0, 0, 0, 0.04)`): Secondary shadow layer for depth reinforcement.
- **Shadow Lift** (`rgba(60, 50, 40, 0.12)`): Hover state shadow on calc result cards.

## 3. Typography Rules

### Font Families
- **Display & Body Headings**: `General Sans`, fallback: `system-ui` — humanist sans, distinctive `g`, `a`, `Q` shapes. Never Inter.
- **Body & UI**: `Geist Sans`, fallback: `system-ui` — geometric, fresh, Vercel-tier. Never Inter.
- **Numerics & Monospace**: `Geist Mono`, fallback: `ui-monospace` — used on EVERY number (inputs, outputs, calc results, table cells).
- **OpenType Features**: `"ss01"` enabled globally on General Sans + Geist Sans for distinctive letterforms; `"tnum"` enforced on every numeric context (input fields, result displays, comparison tables, captions).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Result Mega | Geist Mono | 120px (7.5rem) | 400 | 0.92 | -0.04em | Hero result on calc page — counter-animated |
| Result Display | Geist Mono | 96px (6.0rem) | 400 | 0.95 | -0.03em | Standard calc result readout |
| Result Inline | Geist Mono | 56px (3.5rem) | 400 | 1.00 | -0.02em | Inline result in comparison rows |
| Display Hero | General Sans | 56px (3.5rem) | 300 | 1.05 | -0.025em | Homepage headline — whispered authority |
| Display Large | General Sans | 48px (3.0rem) | 300 | 1.10 | -0.02em | Calc page page-title |
| Section Heading | General Sans | 32px (2.0rem) | 400 | 1.15 | -0.018em | Feature section titles |
| Sub-heading | General Sans | 24px (1.5rem) | 500 | 1.20 | -0.012em | Card titles, panel headers |
| Body Large | Geist Sans | 18px (1.125rem) | 400 | 1.55 | normal | Hero subhead, intro paragraphs |
| Body | Geist Sans | 16px (1.0rem) | 400 | 1.60 | normal | Standard reading text |
| Body Emphasis | Geist Sans | 16px (1.0rem) | 600 | 1.60 | normal | Inline strong, key labels |
| Button | Geist Sans | 16px (1.0rem) | 600 | 1.00 | normal | Primary button text |
| Button Small | Geist Sans | 14px (0.875rem) | 600 | 1.00 | normal | Secondary buttons |
| Input Value | Geist Mono | 18px (1.125rem) | 500 | 1.40 | normal | Number input field text — `tnum` |
| Input Label | Geist Sans | 13px (0.8125rem) | 500 | 1.40 | 0.02em | Form field labels — slight tracking up |
| Caption | Geist Sans | 13px (0.8125rem) | 400 | 1.50 | normal | Helper text, metadata |
| Caption Number | Geist Mono | 12px (0.75rem) | 400 | 1.45 | -0.01em | Small numeric data — `tnum` |
| Micro | Geist Sans | 11px (0.6875rem) | 500 | 1.30 | 0.04em | Badges, status pills — uppercase |

### Principles

- **Light weight is the brand voice** (Stripe-DNA). Display headings at weight 300. Owner-facing tool that's confident enough not to need bold.
- **Big numerics are the drama** (Wise + Lambo DNA). Calc results render at 96px–120px in Geist Mono with tabular figures. The result IS the hero of every calc page.
- **Counter animation on every result reveal** (Lambo DNA). When user presses Calculate, the big result counts up from 0 to final value over 800ms with `requestAnimationFrame`. Easing: `cubic-bezier(0.16, 1, 0.3, 1)`. Numbers must use Geist Mono + `tnum` so digit width doesn't shift during animation.
- **Tabular numerals are mandatory** anywhere a number lives. Inputs, outputs, comparisons. `font-variant-numeric: tabular-nums`.
- **No bold (700+)** in display text. Stripe-style restraint. Use weight 500-600 max for emphasis.
- **No italics** anywhere. Restaurant financial decisions don't need stylistic flourishes.
- **Uppercase only on micro labels** (11px badges, status pills). Never on display headlines.

## 4. Component Stylings

### Buttons

**Primary CTA** — Saffron filled
- Background: `#c87500` (Saffron Amber)
- Text: `#ffffff`
- Padding: 14px 28px (large) / 10px 20px (standard)
- Border-radius: 10px
- Font: Geist Sans, 16px, weight 600
- Shadow: `0 1px 2px rgba(60, 50, 40, 0.08), 0 4px 12px rgba(200, 117, 0, 0.16)`
- Hover: `#a86200` background, `translateY(-1px)`, shadow lifts to `0 6px 16px rgba(200, 117, 0, 0.22)`
- Active: `translateY(0)`, shadow drops back
- Transition: `all 180ms cubic-bezier(0.16, 1, 0.3, 1)`

**Secondary CTA** — Ghost on canvas
- Background: transparent
- Text: `#1a1814`
- Border: 1px solid `#e8e4dd`
- Padding: matches primary
- Border-radius: 10px
- Hover: background `#f4f1ea`, border `#1a1814`

**Text Link** — Inline action
- Color: `#c87500`
- Underline on hover only
- Font: Geist Sans, weight 500

### Calc Result Card (the hero component)

The most important component on the site. Every calc page has one.

- Background: `#ffffff`
- Border: 1px solid `#e8e4dd`
- Border-radius: 14px
- Padding: 48px 56px (desktop) / 32px 24px (mobile)
- Shadow: `0 1px 3px rgba(60, 50, 40, 0.08), 0 12px 32px rgba(60, 50, 40, 0.06)`
- Layout: result number centered or left-aligned, label above in Caption style, "show your math" button below

**Result Number element:**
- Geist Mono, 120px desktop / 72px mobile, weight 400, color `#c87500` (or warning/success variant)
- `font-variant-numeric: tabular-nums`
- `letter-spacing: -0.04em`
- Wraps in a `<span data-counter>` that gets the counter-up animation on calculate

### Input Fields

- Background: `#ffffff`
- Border: 1.5px solid `#e8e4dd`
- Border-radius: 10px
- Padding: 12px 14px
- Font: Geist Mono, 18px, weight 500, `tnum`
- Label above in Caption style
- Focus: border `#c87500`, shadow `0 0 0 3px rgba(200, 117, 0, 0.12)`
- Error: border `#b15a1f`
- Right-aligned for currency / percent / decimal — left-aligned for general text

### Tool Grid Card (homepage)

- Background: `#ffffff`
- Border: 1px solid `#e8e4dd`
- Border-radius: 12px
- Padding: 28px 24px
- Shadow: `0 1px 2px rgba(60, 50, 40, 0.06)`
- Hover: shadow lifts to `0 8px 24px rgba(60, 50, 40, 0.10)`, border `#c87500`, transform `translateY(-2px)`
- Transition: 200ms cubic-bezier(0.16, 1, 0.3, 1)
- Content: small icon top-left, calc title (Sub-heading), 2-line description, calc-time estimate as Micro badge bottom

### Expandable "Show Your Math" Panel

Beneath every result. Toggles open with smooth height transition.

- Trigger: text link "Show your math ↓" in Body Emphasis style
- Panel background: `#f4f1ea` (Cream Surface)
- Border-radius: 10px
- Padding: 24px 28px
- Content: line-by-line breakdown using Caption Number style for values, Caption style for labels
- Animation: height + opacity transition over 220ms

### Navigation

- Sticky top, `#fafaf7` background with backdrop-blur(8px) when scrolled
- Border-bottom: 1px solid transparent → `#e8e4dd` after scroll trigger
- Logo: wordmark left, plain Geist Sans 18px weight 600 in `#1a1814`
- Nav links: Geist Sans 14px weight 500, color `#3d3a32`, hover `#1a1814`
- CTA right (filled saffron Primary CTA Small)
- Mobile: hamburger reveals slide-down menu

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128

### Containers
- Max-width content: 1180px
- Max-width prose (calc explainer text): 720px
- Section padding: 96px vertical (desktop), 56px (mobile)
- Card grid gap: 24px

### Grid
- 12-column on desktop (>1024px)
- 6-column on tablet (640–1024px)
- Stacked on mobile (<640px)

## 6. Motion & Interactivity

### Counter Reveal (THE signature moment)

When user clicks Calculate, the big result number animates up from 0 to final value:

- Duration: 800ms
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (custom out)
- Implementation: `requestAnimationFrame` loop interpolating numeric value
- Format: maintain decimal places throughout (e.g., 0.0% → 14.2% → 28.4%)
- Tabular numerals required so digit columns don't shift mid-animation
- After settle: subtle scale pulse (1 → 1.03 → 1) over 240ms for "landed" feel

```javascript
function animateCounter(el, from, to, duration = 800, decimals = 1) {
  const start = performance.now();
  const ease = (t) => 1 - Math.pow(1 - t, 3); // cubic out
  function frame(now) {
    const t = Math.min((now - start) / duration, 1);
    const value = from + (to - from) * ease(t);
    el.textContent = value.toFixed(decimals);
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
```

### Hover & Focus Transitions
- All interactive elements: 180ms cubic-bezier(0.16, 1, 0.3, 1)
- Card lifts: `translateY(-2px)` + shadow change
- Buttons: subtle `translateY(-1px)` on hover

### Scroll Reveals (sparing)
- Hero on load: stagger fade-up for headline / subhead / CTA buttons (60ms delay each)
- Section reveals: only on calc explainer pages, not on tool grid (unnecessary noise)

### Reduce Motion
- Respect `prefers-reduced-motion: reduce` — counter animation jumps to final value, no scale pulse, no transforms

## 7. Anti-Patterns (NEVER DO)

- **Never use Inter, Roboto, Arial, Helvetica, system-ui as primary font** — AI slop
- **Never use purple gradients** — Stripe's only choice, AI cliché
- **Never use lime green** — Wise's signature, doesn't fit restaurant warmth
- **Never use pure black** — even Lambo's DNA was wrong for owner-facing utility; we use `#1a1814`
- **Never use weight 700+ on display headlines** — Stripe-DNA: light is the voice
- **Never use italics** for emphasis — switch font weight or color instead
- **Never use generic sans without `tnum`** on numbers — digit width shift during counter animation looks broken
- **Never use stock illustrations** — restaurant ops site needs photographic moments (kitchen close-ups, receipts, ledgers) or none at all
- **Never use rounded-pill buttons** — too playful for financial trust; stick to 10px–12px radius
- **Never use background gradients on hero** — clean canvas only, depth comes from typography + shadow

## 8. Page Patterns

### Homepage
- Hero: Display Hero headline ("Restaurant math, done right.") + Body Large subhead + 2 CTAs (primary saffron + ghost "Browse all calculators")
- Tool grid: 3-column on desktop, cards as defined in Components
- Trust strip: small caption "Built for the line, not the boardroom · Free forever · No signup · Mobile-friendly"
- Footer: minimal, Geist Sans body, links in muted color

### Individual Calc Page
- Page title (Display Large) + 1-paragraph explainer (Body Large)
- 2-column layout: input form left, Result Card right (stacks on mobile)
- "Show your math" expandable below result
- Below the fold: long-form FAQ + AI-citation hooks (programmatic SEO content)
- Related calcs grid at bottom

### Calc Page Result Card
- "Your food cost percentage" (Caption Label, uppercase, muted color)
- Big counter number (Result Mega, 120px, animated up)
- Status badge: "Healthy" / "Above target" / "Critical" in Micro style with color-coded background
- Small print: "Industry benchmark: 28-32%" in Caption Number style
- Show-your-math toggle

This DNA is the merge of Stripe's discipline, Wise's number drama, and Lamborghini's reveal moment — restaurant-coded for owner trust.
