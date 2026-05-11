---
title: "What Is Menu Engineering (Stars / Plowhorses / Puzzles / Dogs)"
description: "The menu engineering matrix explained: how to classify items by margin and popularity, what to do with each quadrant, and when to rerun the analysis."
pubDate: 2026-05-24
author: "Brock"
tags: ["Menu engineering", "Pricing", "Margin", "Operations"]
relatedCalc: "menu-engineering"
heroImage: "/illustrations/menu-engineering.webp"
---

Menu engineering is the discipline of looking at your menu through two lenses at once: which items make you the most money per cover, and which items get ordered most often. The crossover of those two axes is a four-quadrant matrix that tells you exactly what to do with each item: promote, reprice, reposition, or kill.

This is the version that walks through the math, not just the labels.

## The two axes

**Contribution margin (CM)** is profitability in dollars per item. The formula:

> **Contribution Margin = Menu Price − Food Cost (in dollars per item)**

Note the units. CM is *dollars*, not percentage. A $42 steak with 38% food cost has $26.04 of contribution margin. A $14 salad with 22% food cost has $10.92 of contribution margin. The steak is more profitable per cover despite the higher food cost percentage. This is the trap that makes operators optimize for food cost % instead of CM dollars.

**Item velocity** is popularity, measured as a percentage of category sales. The formula:

> **Velocity % = Units Sold of This Item ÷ Total Units Sold in Category × 100**

If you sold 320 burgers, 180 salads, 240 sandwiches, and 110 entrees, the burger velocity in the "entree" category is 320 ÷ (320+180+240+110) = 37.6%. The category average velocity (if items were evenly distributed) would be 100% ÷ number of items.

## The four quadrants

The matrix splits the menu into four boxes based on whether each item is above or below the *category average* on each axis.

**Stars: above-average CM, above-average velocity.** These are the items that make money and sell. The instruction: promote and protect. Feature on the menu, train staff to upsell, never run out, never quietly reduce portion or quality.

**Plowhorses: below-average CM, above-average velocity.** Popular but not profitable. The instruction: re-cost or reprice carefully. These items are working for you in volume but the per-cover dollar is thin. Watch out for raising prices too aggressively because the popularity is fragile.

**Puzzles: above-average CM, below-average velocity.** Profitable but not popular. The instruction: reposition, train upsell, or re-test. These items make money but don't move. The fix is menu placement, server training, or a name/description change before considering removal.

**Dogs: below-average CM, below-average velocity.** Low margin and low popularity. The instruction: kill. But check first, sometimes a "dog" is a side dish that doesn't sell as a standalone entrée but appears on many tickets as a modifier. Check the modifier data before pulling it.

## A worked example

Restaurant with 8 entrée items, last month's data.

| Item | Sold | Price | Food Cost | CM ($) | CM % | Velocity % | Category |
|---|---|---|---|---|---|---|---|
| Burger | 320 | $14 | $4.10 | $9.90 | 70.7% | 37.6% | Plowhorse |
| Salad | 180 | $14 | $2.40 | $11.60 | 82.9% | 21.2% | Star |
| Sandwich | 240 | $13 | $3.20 | $9.80 | 75.4% | 28.2% | Plowhorse |
| Steak | 110 | $42 | $14.40 | $27.60 | 65.7% | 12.9% | Puzzle |

Wait, that doesn't show 4 quadrants because all four happen to be above or below average on each axis. Let me extend with more items.

| Item | Sold | Price | Food Cost | CM ($) | Velocity % | Quadrant |
|---|---|---|---|---|---|---|
| Burger | 320 | $14 | $4.10 | $9.90 | 25.5% | Plowhorse |
| Salad | 180 | $14 | $2.40 | $11.60 | 14.3% | Star |
| Sandwich | 240 | $13 | $3.20 | $9.80 | 19.1% | Plowhorse |
| Steak | 110 | $42 | $14.40 | $27.60 | 8.8% | Puzzle |
| Pasta | 95 | $18 | $3.60 | $14.40 | 7.6% | Puzzle |
| Wings | 280 | $13 | $4.70 | $8.30 | 22.3% | Plowhorse |
| Tacos | 22 | $16 | $4.20 | $11.80 | 1.7% | Puzzle (almost dog) |
| Salmon | 8 | $26 | $9.20 | $16.80 | 0.6% | Dog |

Total items: 1,255. Category average velocity: 12.5%.
Category average CM: $13.78 (sum of CM × velocity weighted).

Quadrant analysis:
- **Stars** (above-avg CM, above-avg velocity): Salad. (High CM at $11.60, high velocity at 14.3%.)
- **Plowhorses** (below-avg CM, above-avg velocity): Burger, Sandwich, Wings.
- **Puzzles** (above-avg CM, below-avg velocity): Steak, Pasta, Tacos, Salmon.
- **Dogs** (below-avg CM, below-avg velocity): None in this example.

Wait, Salmon is a Puzzle by definition (above-avg CM, below-avg velocity), but only 8 sold. At 8 units sold, it might be a Dog candidate for *practical* reasons (not enough volume to justify keeping the SKU). The matrix gives you the classification; you still have to apply operator judgment.

## What to do with each quadrant

**Stars (Salad):**
- Feature on the menu (top placement, photo if menu has photos)
- Train servers to upsell additions (added protein, premium toppings)
- Protect quality and portion, do not silently downsize when ingredient costs move
- Consider modest price increases (5-10%) since velocity suggests price tolerance

**Plowhorses (Burger, Sandwich, Wings):**
- Recost to find ingredient savings (without quality reduction)
- Test small price increases ($0.50-1.00) to see if velocity holds
- Look for high-CM modifier add-ons (premium toppings, sides) that lift the per-cover CM
- Do NOT reprice aggressively, the popularity is the asset

**Puzzles (Steak, Pasta, Tacos):**
- Reposition on the menu (move to top or top-of-category placement)
- Train servers to recommend (specific scripts: "Our most popular high-end item is...")
- Reword the description to highlight value (origin of the protein, hand-made preparation)
- Re-test after 60 days; if velocity doesn't move, consider removing

**Dogs:**
- Verify the item isn't propping up modifier or side sales
- If standalone unprofitable AND unpopular, kill it
- Replace with a tested item from the same category that has better margin potential

## When to rerun the matrix

The matrix changes when sales mix changes. Quarterly is the baseline cadence. Rerun more often when:

- You change a menu price
- A major ingredient cost shifts more than 5% (which moves CM)
- You add or remove an item
- Seasonal menu changes
- A new local competitor opens (sometimes shifts your sales mix)

The "do this annually" advice you sometimes see is wrong. Sales mix and ingredient costs move quarterly at minimum.

## The trap: optimizing for CM % instead of CM dollars

The most common menu engineering mistake is using contribution margin *percentage* instead of contribution margin *dollars*.

A $14 salad with 22% food cost has 82.9% CM percentage, looks great.

A $42 steak with 38% food cost has 65.7% CM percentage, looks worse on paper.

But the steak's CM in dollars is **$27.60**, vs the salad's **$11.60**. Per cover, the steak makes you 2.4x more money.

The math: you don't pay rent in percentages. You pay rent in dollars. Optimize for total CM dollars across the menu, not for the highest CM percentage line item.

This matters most in menu placement decisions. Feature the high-CM-dollar items, even if their CM percentage is lower than the appetizers. A steakhouse with featured steaks at 38% food cost is doing the right thing; a steakhouse with featured salads at 22% food cost is leaving money on the table.

## What this looks like in the calculator

The [menu engineering calculator](/calculators/menu-engineering/) on this site takes your menu items, their sales counts, prices, and food costs and returns the matrix classification per item with the quadrant action. Update it quarterly (or after any major menu change) and let it tell you what to feature, what to reprice, and what to remove.

For the underlying margin math, see [Contribution Margin vs Food Cost Percentage](/blog/contribution-margin-vs-food-cost-percentage/).

## What to do today

Pull last month's sales count by menu item. Pull current food cost per item. Calculate CM in dollars and velocity percentage. Plot the four quadrants. The action list (promote, reprice, reposition, remove) writes itself once the matrix is built.

The first time you do this, you will find one Star that you haven't been featuring and one Dog that you have been protecting out of habit. Both are easy wins.

Sources: [Toast](https://pos.toasttab.com/), [MarginEdge](https://www.marginedge.com/blog/), Restaurant Peers, [meez](https://www.getmeez.com/), Cornell Hotel School menu engineering research.
