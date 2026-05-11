---
title: "Contribution Margin vs Food Cost Percentage (Why Food Cost % Lies)"
description: "The dollar-vs-percentage trap that makes operators kill profitable items: why a 38% food cost steak makes more money than a 22% food cost salad."
pubDate: 2026-05-25
author: "Brock"
tags: ["Margin", "Pricing", "Menu engineering", "Operations"]
relatedCalc: "menu-engineering"
heroImage: "/illustrations/menu-engineering.webp"
---

The mistake I see most often in menu pricing decisions is operators using food cost percentage as the optimization target. They look at a 38% food cost dish and assume it is hurting them. They look at a 22% food cost dish and assume it is helping. Both assumptions are wrong because food cost % is a ratio. Profit is paid in dollars.

This is the version of the contribution margin argument with the math worked out so you don't have to take it on faith.

## The two numbers

**Food cost percentage** is the share of revenue from each item that goes to ingredient cost.

> **Food Cost % = Food Cost ÷ Menu Price × 100**

**Contribution margin (in dollars)** is the dollar amount that each item contributes to covering fixed costs and profit.

> **Contribution Margin = Menu Price − Variable Food Cost**

Same data, different framing. Food cost % is a ratio. CM is dollars. Both have a role, but they answer different questions, and using the wrong one for menu decisions costs real money.

## The classic example

A $14 salad with 22% food cost vs a $42 steak with 38% food cost.

| Item | Price | Food Cost $ | Food Cost % | CM $ | CM % |
|---|---|---|---|---|---|
| Salad | $14 | $3.08 | 22% | $10.92 | 78% |
| Steak | $42 | $15.96 | 38% | $26.04 | 62% |

By food cost percentage, the salad wins. 22% beats 38%. Operator logic suggests featuring the salad, downplaying the steak, maybe considering whether the steak should even stay on the menu.

By contribution margin in dollars, the steak wins by a mile. $26.04 per cover vs $10.92. The steak makes 2.4x more money per plate.

Which framing is right?

The right framing is dollars. You pay rent in dollars. You pay labor in dollars. You pay vendors in dollars. The percentage matters only as a check that the dollar amount is being earned efficiently. A 38% food cost that produces $26 of contribution margin per cover is doing more work than a 22% food cost that produces $11.

## When the percentage trap costs you money

The trap shows up in three operational decisions.

**1. Menu placement.** Operators feature their low-food-cost items at the top of the menu. The math says feature the high-CM-dollar items, even if they have higher food cost percentages.

**2. Sales mix shift decisions.** When food cost runs hot, operators try to shift the mix toward low-food-cost items. If that shift moves customers from $42 steak (CM $26.04) to $14 salad (CM $10.92), every customer who makes the switch costs you $15.12 in margin. Five customers switching per night = $75 of lost margin per night = $27,000 lost per year. Food cost percentage drops on the report, but the bottom line gets worse.

**3. Item removal decisions.** A high-food-cost item with strong velocity (a Plowhorse in menu engineering terms) gets killed because "the food cost is too high." If the killed item had $14 of CM per cover and the replacement has $9, every kept customer is now $5/cover less profitable.

The pattern: food cost percentage tells you efficiency. CM dollars tell you wealth. Optimize for wealth.

## The exception: when ratio matters

There is one scenario where food cost percentage matters more than CM dollars: overall P&L tracking against industry benchmarks.

The reason: total food cost % is the operational efficiency signal that lets you compare your operation against industry medians. A casual full-service restaurant running 35% food cost is hot. One running 29% is healthy. That comparison only works at the operational level, not at the per-dish level.

So:
- **Operational level (whole P&L):** Track food cost % against benchmarks. This is the operational health check.
- **Menu decisions (per item):** Optimize for CM dollars. This is where profit gets made or lost.

Operators conflate the two and apply the operational signal to the menu decisions. That is the trap.

## A worked example: same revenue, different mix

Two scenarios, same restaurant, same monthly revenue ($120,000).

**Scenario A: Heavy on low-food-cost items**

- 60% of revenue from salads, sandwiches, apps (avg CM 80%, avg ticket $13)
- 40% of revenue from entrées and steaks (avg CM 65%, avg ticket $36)
- Total food cost: 28%
- Total contribution margin: $120,000 × 72% (1-28%) = $86,400

**Scenario B: Heavy on high-food-cost-but-high-CM-dollar items**

- 40% of revenue from salads, sandwiches, apps
- 60% of revenue from entrées and steaks
- Total food cost: 33% (higher because entrées have higher food cost %)
- Total contribution margin: $120,000 × 67% = $80,400

Wait, Scenario A wins in this math. The 5-point food cost difference produces $6,000 less CM in Scenario B. So food cost percentage *does* matter at the aggregate level after all.

But there is a hidden variable: average ticket. Scenario B's customer mix produces a higher average ticket. If Scenario B's 60-40 entree-heavy mix lifts average check from $32 to $38, the revenue isn't $120K, it might be $138K, and at 67% CM that is $92,460 of contribution margin. Scenario B wins by $6,000.

The point: percentage framing alone misses the average-check effect. The right analysis is contribution margin in dollars across a full sales mix, not "lower food cost % = better."

## The right way to use both

The discipline:

**Per-item menu decisions:** Use CM in dollars. Feature high-CM-dollar items. Place them at the top of the menu. Train upsell. Don't kill an item because its food cost % is "too high", kill it only if CM dollars are below category average.

**Aggregate operational tracking:** Use food cost % against benchmark. If your weekly food cost runs 5 points above your segment median, that is the operational signal. Investigate variance, recipe compliance, portion drift, pricing, not "I should sell more salads."

**Menu engineering:** Use CM dollars on one axis and velocity on the other (see [What Is Menu Engineering](/blog/menu-engineering-matrix-explained/)). This is the dollar-framing applied systematically across the menu.

**Pricing decisions:** Use both. A new menu item should have CM dollars that beat the category average AND food cost % that doesn't pull the aggregate above benchmark.

## What this looks like in the calculator

The [menu pricing calculator](/calculators/menu-pricing/) on this site lets you set target prices by either food cost % method or CM-dollar method. Toggling between them shows the difference. Most operators are surprised at how different the recommended prices are depending on which framing they apply.

The [menu engineering calculator](/calculators/menu-engineering/) plots CM in dollars on the Y axis (not CM %), which is the version that produces the right action list.

## What to do today

Pull last month's top 10 items by sales count. Calculate CM in dollars for each. Sort by CM dollars descending. Now sort the same list by food cost % ascending. The two lists should not match. The items that appear high on the food-cost-% list but low on the CM-dollars list are the ones you have been over-featuring. The items high on the CM-dollars list but lower on the food-cost-% list are the ones you have been under-featuring.

The fix is menu placement, not recipe rewrites. A simple repositioning exercise based on CM dollars typically lifts category contribution by 5-12% in the first quarter (Cornell School of Hotel Administration research).

Sources: [Toast](https://pos.toasttab.com/), [TouchBistro](https://www.touchbistro.com/), [meez](https://www.getmeez.com/), Cornell Hotel School research on menu engineering, [Restaurant365](https://www.restaurant365.com/).
