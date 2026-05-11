---
title: "How to Cost a Recipe (The Yield Percentage Most Operators Skip)"
description: "How to cost a recipe plate-by-plate, why yield percentage matters more than spec sheets show, and the Q-factor most kitchens forget. From a 5-year GM."
pubDate: 2026-05-11
author: "Brock"
tags: ["Recipe costing", "Food cost", "Kitchen ops", "Operations"]
relatedCalc: "recipe-cost"
heroImage: "/illustrations/recipe-cost.webp"
---

The first time a sous chef handed me a recipe cost sheet for a new burger, the math looked perfect. Ground chuck at $4.20 a pound, 6 oz portion, $1.58 per patty. Brioche bun forty cents. Cheese, lettuce, tomato, pickles, sauce, the works. Total plate cost $3.12. We were selling it at $14, food cost 22.3%, looked like a winner.

Three weeks later the food cost report came back and the burger was running 31%. Same recipe, same vendor, same portion. Nothing had changed except the actual cost was now nine points higher than the spec sheet said.

The math was not wrong. The spec sheet was just incomplete. It costed the ingredients at as-purchased prices and ignored every step between the box on the receiving dock and the plate on the table. That gap is called yield percentage, and almost every independent kitchen costs without it.

This is the version of recipe costing I wish somebody had walked me through when I started writing P&Ls.

## The three terms that get mixed up

People say "recipe cost" and mean three different things.

- **Recipe cost** is the total cost of producing a batch. A recipe that yields 12 servings of bolognese costs whatever the meat, tomato, soffritto, wine, and cheese added up to. That is your batch cost.
- **Plate cost** is the per-serving cost of that batch divided by portions, plus the cost of anything that goes on the plate but is not in the batch (the garnish, the bread, the herbs, the side).
- **Portion cost** is the most-narrow version: the cost of one portion of one item. Useful when you sell a thing by itself (a single oyster, an add-on shrimp skewer) but not the full picture of what hits the table.

Most operators use these interchangeably and end up with numbers that look right but predict the wrong food cost. The vocabulary matters because each term ignores different costs. Mixing them up is how a 22% food cost on paper becomes 31% on the report.

## Why your costs are 15-20% understated without yield percentage

Yield percentage is the share of an ingredient you actually use after trimming, peeling, cooking down, or otherwise losing weight between as-purchased (AP) and edible-portion (EP) state.

The formula:

> **Yield % = EP weight ÷ AP weight × 100**

A whole beef tenderloin, untrimmed, runs about $24 a pound at wholesale. Trim off the silver skin, the chain, the head, and the tail and you get roughly 70% yield (Culinary Institute of America). That $24 AP price is really $34.29 per usable pound. Cost a 6 oz steak at AP price and you book $9.00 in food cost. Cost the same steak at the honest EP price and you book $12.86. That is the 30% gap that shows up in your real food cost report.

Same story with produce. A case of romaine yields about 75% after trimming the cores and the outer leaves (US Foods produce yield tables). Mushrooms run 80-85%. Bell peppers 75% after stem and seed. Onions 90%. The "five pound bag of yellow onions" you bought is really 4.5 pounds usable, and the spec sheet that costs onions at the wholesale price is understating by about 11%.

Aggregate across a menu and the typical untrimmed-cost spec sheet runs **15-20% under the real food cost** (CIA, Restaurant365). That is not an error band. That is the gap most independent kitchens never close.

## The math, end to end

A clean recipe cost calculation goes:

1. List every ingredient by AP weight or volume.
2. Multiply by AP unit cost. That gives you batch AP cost.
3. Apply yield percentage to each ingredient with trim or cook loss. That gives you the EP cost per ingredient.
4. Sum EP costs. That is your real batch cost.
5. Divide by portions to get plate cost from the batch.
6. Add plated-but-not-in-batch costs (garnish, sauce drizzle, bread, side).
7. Add a Q-factor of 5-8% for the kitchen items that never make it onto a recipe sheet (oil for the pan, salt, prep loss, the slice of butter on top).

Most spreadsheets stop at step 2 and divide. That is how spec sheets and reality diverge.

## A worked example

Here is the burger from the opening, costed honestly.

**The patty:**
- 6 oz raw ground chuck at $4.20/lb AP
- Cook loss for an 80/20 chuck patty hits 22-25% (USDA Food Buying Guide) so 6 oz raw becomes about 4.5 oz cooked. We sell a patty, not a raw weight, so portion 8 oz raw if you want a 6 oz cooked patty. Honest AP cost: $2.10 per patty.

**The bun:**
- Brioche bun, $0.40 each from the bakery. No yield adjustment (you use the whole bun). $0.40.

**Cheese:**
- One slice American at $0.18. No yield loss. $0.18.

**Lettuce:**
- Two leaves of green leaf, AP $0.06 worth, but yield on green leaf is 75% after trimming the rib. EP cost: $0.08.

**Tomato:**
- Two slices of beefsteak tomato. AP cost about $0.14 worth at retail wholesale. Yield on beefsteak after coring is 88-92% (US Foods produce yields). Call it 90%. EP cost: $0.16.

**Pickles, onion, sauce:**
- $0.22 combined at AP. Yield negligible (these are pre-prepped). $0.22.

**Side of fries:**
- 5 oz cooked frozen fry from a 5-lb bag at $1.85 per pound. Yield on a frozen fry runs 75-85% after fryer loss (Lamb Weston cut yield data). At 80% yield, your 5 oz cooked portion needs 6.25 oz raw. Cost: $0.72.

**Subtotal EP cost:** $3.86.

**Add the Q-factor:** 7% for oil, butter on the bun, salt, sauce on the side, the rosemary garnish nobody costed.

$3.86 × 1.07 = **$4.13 plate cost**.

At a $14 menu price, that is a food cost of **29.5%**. Almost ten points off the original spec sheet's 22.3%. This is the math that closes the gap between "the spreadsheet said we were healthy" and "the P&L says we're hot." Nothing got stolen. Nothing got wasted. The recipe just got costed wrong from day one.

## When to recost (and what should actually trigger it)

The textbook answer is quarterly. That is fine if your costs are stable. They are not. Most kitchens recost when something obviously breaks, by which point the damage is in the P&L.

Recost a recipe when:

- **A protein vendor price changes by 5% or more.** Beef, chicken, pork, seafood drift constantly. Five percent on a $4 protein item is a $0.20 plate-cost shift, which on a $14 menu price is 1.4 points of food cost.
- **You change vendors.** Even at "same price," the yield differs. Different ground chuck blends have different cook loss. Different produce vendors trim differently. Don't trust headline pricing.
- **You change a recipe.** Substituting butter for oil, swapping cheddar for Gruyère, dropping a garnish, adding a sauce. Every change moves the cost.
- **Your inventory variance flags hot.** If theoretical food cost says 28% but actuals come back at 33%, the gap is either pricing, portion drift, theft, or under-costing. Recosting catches the under-costing case immediately.
- **You see a sales mix shift.** When the high-FC items start outselling the low-FC items, your blended food cost climbs even if every individual recipe is fine. Recost the climbing items first.

## What this looks like in the calculator

The [recipe cost calculator](/calculators/recipe-cost/) on this site asks for ingredient AP cost, yield %, and portions, then applies the Q-factor at the end. The format follows the CIA standard recipe-card layout but on a phone, between rushes. It is the same math your accountant runs on a quarterly recosting cycle, with the yield step pre-built in so you don't skip it.

For the burger above, you'd plug in seven ingredients with their AP costs and yield percentages, set portions to 1, and the calculator returns $4.13. Then you'd run it against the menu price field to see the food cost percentage. Then you'd run it again three weeks later when the protein vendor lifts beef by 6% and the number tells you whether to reprice, change the portion, or change the vendor.

## The cross-checks that catch a bad recipe cost

A recipe cost number alone is just a number. Three quick cross-checks tell you if the number is honest.

1. **Walk-the-line check.** Take ten plates off the line at random. Weigh the protein. Compare against the spec. If half of them are 6.5 oz when the spec says 6 oz, your real cost is 8% higher than your sheet.

2. **Invoice-back check.** Pull last week's protein invoice. Divide invoiced pounds by plates sold of that protein. Should match the spec weight within a couple of percent. If you bought 60 pounds of beef and only sold 120 burgers (60 × 16 / 8 oz = 120), and you actually sold 95, you have shrinkage. If you sold 130, you are under-portioning.

3. **P&L back-into-it check.** Take a category like "burgers." Total burger revenue ÷ total burger food cost (from your accounting system, not your spec). That is your real burger food cost percentage. Compare against the weighted average from your spec sheets. The gap is the gap your recosting has to close.

## The mistake I see most often

The mistake is not skipping yield. It is doing yield once, at recipe creation, and never touching it again.

Yield is not a constant. Beef yields shift with breed, age, and trim style. Produce yields shift with season and freight. Cook loss shifts with cooking method and equipment. A burger that yielded 78% on a flat-top last summer might yield 73% on a charbroiler this winter. That five-point shift is six cents per patty, which sounds like nothing until you multiply by 800 burgers a week, multiply by 50 weeks, and find $2,400 a year hiding in cook loss alone.

The fix is not to recost weekly. It is to track the *actuals* and recost when actuals drift more than 5% from the spec. Inventory variance is the early-warning system. Recipe recosting is the response.

## Quick references

**Standard yield percentages** (for back-of-envelope cost work):
- Beef tenderloin (whole, trimmed): 70%
- Beef strip loin (whole, trimmed): 80%
- Chicken (whole, fabricated to boneless skinless breast): 25-28%
- Salmon (whole, filleted, pin bones out): 50-55%
- Romaine lettuce: 75%
- Iceberg lettuce: 80%
- Beefsteak tomato (cored): 88-92%
- Yellow onion (peeled): 88-92%
- Bell pepper (stemmed and seeded): 75%
- Mushrooms (button, trimmed): 80-85%

**Cook loss** (raw to cooked):
- 80/20 ground chuck patty: 22-25%
- Chicken breast (grilled): 25%
- Salmon fillet (pan): 18-22%
- Pork shoulder (braised): 35-40%
- Brisket (smoked): 30-35%

**Q-factor by concept:**
- QSR / fast casual: 3-5%
- Casual full-service: 5-8%
- Fine dining: 8-12% (more garnish, more sauce work, more butter)

## What to do today

Pull three of your highest-volume menu items. Re-cost them with yield percentage applied to every ingredient that gets trimmed, peeled, or cooked. Add a Q-factor. Compare to the spec sheet your kitchen has been using.

If the new number is within two points of the old number, your kitchen is among the few that costs honestly. If the new number is five or more points higher, that gap is your hidden food cost. Reprice, re-portion, or change the recipe. Your variance report will tell you within a month whether you closed the gap.

Sources: [Culinary Institute of America](https://www.ciachef.edu/), USDA Food Buying Guide, [US Foods produce yield tables](https://www.usfoods.com/), [Restaurant365](https://www.restaurant365.com/), [Toast](https://pos.toasttab.com/), [meez yield database](https://www.getmeez.com/).
