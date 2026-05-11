---
title: "Theoretical vs Actual Food Cost (Variance Explained)"
description: "Theoretical food cost vs actual: what the gap means, acceptable variance bands by segment, and the five places variance hides. From a 5-year GM."
pubDate: 2026-05-23
author: "Brock"
tags: ["Food cost", "Variance", "Inventory", "Operations"]
relatedCalc: "inventory-variance"
heroImage: "/illustrations/inventory-variance.webp"
---

Every operator who has ever pulled a food cost report wondered why the number was higher than the recipes said it should be. The gap has a name: variance. It is the difference between what your recipes predict you should be spending and what your invoices and inventory say you actually spent. Variance is the operational quality signal nobody puts on a P&L line.

## The two numbers

**Theoretical food cost** is the cost predicted by your recipes against your actual sales mix.

> **Theoretical COGS = Σ (Items Sold × Recipe Cost per Item)**

If you sold 320 burgers at $4.10 plate cost and 180 salads at $2.40 plate cost, your theoretical food cost for those items is $1,312 + $432 = $1,744.

**Actual food cost** is the cost calculated from your inventory and purchases.

> **Actual COGS = Beginning Inventory + Purchases + Adjustments − Ending Inventory**

If your beginning inventory was $11,400, purchases were $24,800, and ending inventory was $10,900, your actual COGS is $25,300.

**Variance** is the gap between the two.

> **Variance % = (Actual COGS − Theoretical COGS) ÷ Sales × 100**

A 5% variance on $86,000 in sales is **$4,300 of unaccounted food cost** that month. Multiply by 12 months and that is $51,600 a year of cost the recipes did not predict.

## What variance actually measures

The variance number tells you the gap between recipe-predicted cost and reality. The causes, in rough order of size in most operations:

**1. Waste and spoilage** (typically 1-3% of food cost): Produce that goes bad before sale, proteins that get prepped and not used, line waste during service.

**2. Theft** (0-2%): Walk-out theft, employee theft of inventory, vendor short-shipping that gets booked as full delivery.

**3. Portion drift** (1-3%): Recipes say 4 oz of cheese; the line is pulling 5. Recipes say 6 oz protein; the cook is plating 6.5. Across a full shift this adds up.

**4. Recipe non-compliance** (0.5-2%): Substituting more expensive ingredients when the cheaper one is out. Adding a side that wasn't in the recipe. Putting an extra portion of bacon "to be generous."

**5. Pricing drift** (0.5-2%): Ingredient cost went up but the recipe cost wasn't updated. You are pricing menu items against last quarter's food cost while paying this quarter's prices.

Sum the typical ranges: **2.5-12% variance is normal**. The healthy operations sit at 2-3%. The struggling operations live at 6-10% and wonder where the margin went.

## Acceptable variance bands by segment

Industry standard variance bands (Restaurant365, MarginEdge, Supy):

- **QSR / fast food:** 1.5-3% acceptable variance
- **Fast casual:** 2-4%
- **Casual full-service:** 3-5%
- **Fine dining:** 4-6% (more complex recipes, more components, naturally higher noise)
- **Pizza:** 2-4% (simple recipes, fewer components)
- **Sushi:** 4-7% (perishability waste is inherent)
- **Bakery:** 2-5%

If your variance runs above these bands, the gap is operational drift, not normal noise. The fix is in one of the five categories above.

## A worked example

Casual full-service restaurant.

**Theoretical COGS** for the month (sales mix × recipe costs): $28,400

**Actual COGS** (inventory math): $32,800

**Variance:** $32,800 − $28,400 = **$4,400**

**Food sales:** $98,000

**Variance %:** $4,400 ÷ $98,000 = **4.5%**

This is at the top end of acceptable for casual full-service (3-5%). The operation is running within band but should track downward, not upward. A move to 5.5% or 6% would push into the diagnostic zone where one of the five causes is taking real margin.

The diagnostic order at 4.5%:
1. Check the protein invoices versus protein plates sold. If you bought 200 lb of beef and the burger sales mix says you should have used 180 lb, the 20 lb gap is at least $80 of variance traceable to protein-side waste or theft.
2. Walk the line during service and watch the plating. Eyeball 10 plates, weigh 3 of them. If portion drift is the problem, this catches it in 30 minutes.
3. Pull your recipe costs and compare to current invoice pricing. If beef went from $4.20 to $4.65/lb but the recipe still costs at $4.20, your theoretical is artificially low.

Most variance problems are findable in 2-3 hours of focused investigation. The fix typically takes longer than the diagnosis.

## The five places variance hides

**1. The receiving dock.** When deliveries arrive and the receiver checks "X cases" without weighing or counting individual items, vendor short-shipments and damaged goods get booked at full delivery value. Variance lives here as "purchases that didn't actually become inventory."

**2. The prep table.** Aggressive prep on slow days = waste. A line cook who breaks down a case of romaine on Wednesday for Saturday service has a Wednesday-prep romaine that is questionable by Friday. The honest fix: prep against forecast, not against habit.

**3. The expo line.** Plating drift. A 6 oz steak that gets plated at 6.4 oz is 6.7% over-portioned. Variance lives here as "theoretical predicted X, line plated Y, and the gap is the variance."

**4. The walk-in cooler.** First-in-first-out (FIFO) compliance, or the lack of it. New product going in front of old product means old product spoils. Standard restaurant waste rate from FIFO failures: 1-2% of food cost.

**5. The dumpster.** Literal food waste. Bread that hardens, vegetables that wilt, proteins that hit their date. Most operations significantly underestimate this category until someone weighs the dumpster.

## How to reduce variance

The variance number does not lie, but it can be reduced through specific operational fixes.

**Receiving:** Weigh everything. Use a scale, not a "looks about right." Reject damaged goods. Note short-shipments on the invoice and call the vendor before paying.

**Prep:** Forecast-based prep schedules. The Wednesday prep for Saturday service is rarely worth the waste.

**Plating:** Visual spec sheets at the line. Weights for proteins, scoop sizes for sides. Manager checks during shift.

**Storage:** FIFO labeled and enforced. Date all containers. Rotate weekly.

**Recipes:** Update recipe costs quarterly against current invoice pricing. Recost when a major ingredient moves more than 5%.

**Comping and waste tracking:** Every comp and every line-waste event gets logged. The log itself changes behavior because line cooks know it is being watched.

A focused 90-day variance reduction program typically moves an operation from 6-8% variance to 3-4%, which on a $1.2M food revenue base is $30-48K in recovered margin annually.

## What this looks like in the calculator

The [inventory variance calculator](/calculators/inventory-variance/) on this site takes theoretical COGS (from your sales mix × recipe costs) and actual COGS (from your inventory math) and returns the variance percentage with segment benchmarks. Run alongside the [food cost calculator](/calculators/food-cost/) for the full picture.

## What to do today

Pull last month's theoretical food cost (your POS or inventory software can usually generate this from recipe data) and last month's actual food cost. Calculate the gap as a percentage of food sales. Compare to your segment's acceptable variance band.

If you are within band, run the diagnostic anyway to keep variance trending downward. If you are above band, the diagnostic is the priority work for the next two weeks. The recovered margin pays for the time.

Sources: [Restaurant365](https://www.restaurant365.com/), [MarginEdge](https://www.marginedge.com/blog/), [Supy](https://supy.io/), [Toast](https://pos.toasttab.com/), CrunchTime Information Systems.
