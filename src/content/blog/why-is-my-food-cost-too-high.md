---
title: "Why Is My Food Cost Too High? 7 Root Causes (Diagnostic Order)"
description: "The seven root causes of high food cost, the diagnostic flowchart for finding which one is yours, and the triage order based on variance size."
pubDate: 2026-05-26
author: "Brock"
tags: ["Food cost", "Variance", "Diagnostics", "Operations"]
relatedCalc: "food-cost"
heroImage: "/illustrations/food-cost.webp"
---

When food cost runs hot, the temptation is to fix everything at once. Tighten portions, renegotiate vendors, reprice the menu, retrain the line, install cameras, write up the closing manager. None of it works because none of it is targeted. The right approach is diagnostic, in order, smallest fix first. Here is the flowchart.

## First, run the variance check

Before investigating causes, calculate the gap between theoretical food cost (what your recipes predict) and actual food cost (what your inventory says you spent). That number is your variance.

If theoretical says 30% and actual says 33%, your variance is 3 points. If theoretical says 30% and actual says 38%, variance is 8 points. The size of the variance points you at which causes to investigate first.

**Small variance (1-3 points):** Pricing drift, recipe non-compliance.
**Medium variance (3-5 points):** Portion drift, waste and spoilage.
**Large variance (5+ points):** Theft, receiving fraud, or systematic operational failure.

The diagnostic logic: bigger problems leave bigger fingerprints. A 1.5% variance is normal noise. An 8% variance has a specific cause and that cause is large enough to find.

For the full theoretical-vs-actual calculation, see [Theoretical vs Actual Food Cost](/blog/theoretical-vs-actual-food-cost/).

## Cause 1: Outdated menu prices (cost went up, price didn't)

The most common cause. Ingredient costs drift constantly. Menu prices don't.

Beef went from $4.20 to $4.65/lb? That is +10.7% on the protein. If the menu hasn't moved, a burger that costed at $4.10 plate cost now costs $4.31. On a $14 menu price, food cost moved from 29.3% to 30.8%. Replicate across the menu and you have a 1-2 point shift in aggregate food cost from pricing drift alone.

**How to spot it:** Pull recipe costs (what your spec sheet says each plate costs) and compare to current invoice pricing. If the recipe says beef at $4.20 and your last invoice was $4.65, that recipe is undercosted.

**How to fix it:** Recost every recipe quarterly against current invoice pricing. Reprice menu items where ingredient cost has shifted more than 5%.

## Cause 2: Portion drift (especially proteins and cheese)

Recipes say 6 oz of protein. Line is plating 6.5 oz. Recipes say 1 oz of cheese. Line is pulling 1.3 oz. Aggregate across a full shift and these add up.

**Typical sizes of portion drift problems:**

- Proteins (steak, chicken, fish): 0.3-0.8 oz over per portion = 5-13% food cost increase on that item
- Cheese: 0.2-0.4 oz over per portion = 20-40% increase on cheese cost per item
- Bacon: 0.5-1 oz over = 25-50% on bacon
- Sauce: 0.5-1 oz over = significant when sauce has expensive ingredients

**How to spot it:** Walk the line during service. Watch the plating. Pull 10 random plates and weigh them. Compare to spec.

**How to fix it:** Visual spec sheets at every station. Weight checks during service. Manager spot-checks. Most portion drift fixes itself within 2 weeks of consistent oversight.

## Cause 3: Waste and spoilage (FIFO not enforced)

Product going bad before it gets sold. The walk-in cooler is the diagnosis spot.

**The pattern:** New deliveries get placed in front of old product. The old product sits, hits its date, and gets thrown. Or product gets prepped too aggressively for forecasted volume and the prepped product can't survive multiple service days.

**Typical size of waste:** 1-3% of food cost. In an operation where someone is tracking it, often higher.

**How to spot it:** Weigh the dumpster for a week. (Yes, really.) Or audit the walk-in for items past their date. Or compare prep waste tracking against forecast.

**How to fix it:** Date everything. Rotate weekly. Prep against forecast, not against habit. Smaller, more frequent prep cycles for perishables.

## Cause 4: Theft and unauthorized comps

This is the cause operators think of first. It is rarely the largest cause.

**Patterns:**
- Walk-out theft (staff taking food home)
- Unauthorized comps (server comps a friend's meal without manager approval)
- Inventory theft (entire cases going missing from the walk-in)
- Bar-side: free pours to friends, untracked comps

**Typical size of theft:** 0-2% of food cost in most operations. Higher in operations with weak controls.

**How to spot it:** Variance gap between theoretical and actual that doesn't trace to portion drift or waste. Sudden spike in cost after a specific personnel change. Inventory items that show consistent shortage.

**How to fix it:** Manager approval required for all comps and voids. POS tracking of who comped what and why. Spot-check inventory on high-risk items (premium liquor, expensive proteins). Camera placement in receiving and high-shrink areas.

The theft is rarely a single bad actor. It is usually loose controls that allow small amounts to leak across many people.

## Cause 5: Receiving fraud (short deliveries logged at full)

The vendor delivers 38 cases. Your receiver checks "40 cases" on the invoice because they didn't actually count. Two cases of cost just hit your COGS without arriving as inventory.

**How to spot it:** Audit a delivery yourself for a week. Compare actual count to invoice.

**How to fix it:** Receivers count every item or weigh every box (depending on the product). Receivers sign for what they verified, not what the invoice says. Discrepancies get noted on the invoice before payment.

This is more common than operators admit, and easier to fix than most other causes.

## Cause 6: Recipe non-compliance / off-recipe substitutions

The kitchen runs out of an ingredient. The cook substitutes a more expensive alternative without flagging it. Or the cook adds an extra component "to be generous." Or the cook follows their own recipe that they prefer over the spec.

**Typical size:** 0.5-2% of food cost.

**How to spot it:** Compare recipe spec to plated reality during a walk-the-line audit. Survey line cooks: "Do you ever change the recipe?" Answers are usually honest.

**How to fix it:** Visual spec sheets posted at each station. Substitution rules in writing (when an ingredient is out, what is the approved substitute). Manager check-ins during prep and service.

## Cause 7: Sales mix shift toward high-FC items

Your menu hasn't changed. Your customers' ordering pattern has. Maybe a new local trend toward steak. Maybe a promotion that lifted high-cost items. Maybe a price increase on lower-cost items that pushed customers to the high-cost ones.

**The effect:** Same recipes, same operational excellence, food cost climbs because the *mix* of what is being ordered shifted toward higher-food-cost items.

**How to spot it:** Pull sales mix from POS month-over-month. Look for material shifts in the top 20 items.

**How to fix it:** This is usually not a fix; it is a recognition. The aggregate food cost can be healthy at the new mix even if the percentage looks higher. Run [contribution margin analysis](/blog/contribution-margin-vs-food-cost-percentage/) to see if total CM dollars are healthy despite the higher percentage.

## The triage order

When food cost runs hot, investigate in this order:

1. **Pricing drift** (15 minutes): Compare recipe costs to current invoices. Quick win.
2. **Portion drift** (1 shift): Walk the line, weigh 10 plates. Fast diagnosis.
3. **Variance check** (1 hour): Theoretical vs actual. The number that tells you how big the problem is.
4. **Waste audit** (1 week): Weigh dumpster, audit walk-in for FIFO violations.
5. **Receiving audit** (1 week): Verify deliveries match invoices.
6. **Theft and comp audit** (ongoing): Pull POS comp data, watch high-risk inventory.
7. **Sales mix analysis** (1 hour): Verify whether the shift is a problem or a recognition.

Most food cost problems get diagnosed in the first three steps. The bigger investigations (waste, receiving, theft) only matter if the simpler causes don't account for the variance.

## What this looks like in the calculator

The [food cost calculator](/calculators/food-cost/) gives you the aggregate. The [inventory variance calculator](/calculators/inventory-variance/) gives you the gap to investigate. The diagnostic order above is the path from gap to root cause.

## What to do today

If your food cost is running hot, do not start with theft. Start with pricing drift and portion drift. The combined fix on those two causes often closes 60-70% of the variance gap and takes a single day of focused work.

Theft investigations are dramatic but rarely productive in the first round. Save the camera installation budget until you have ruled out the boring causes first.

Sources: [Toast](https://pos.toasttab.com/), [Restaurant365](https://www.restaurant365.com/), Restaurant Systems Pro (David Scott Peters), [Apicbase](https://get.apicbase.com/blog/), [MarginEdge](https://www.marginedge.com/blog/).
