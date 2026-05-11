---
title: "How to Calculate Prime Cost (Weekly, Not Monthly)"
description: "The right way to calculate restaurant prime cost: weekly cadence, fully loaded labor, why a 60% target hides more than it reveals. From a 5-year GM."
pubDate: 2026-05-14
author: "Brock"
tags: ["Prime cost", "Food cost", "Labor", "Operations"]
relatedCalc: "prime-cost"
heroImage: "/illustrations/prime-cost.webp"
---

Prime cost is the single number every restaurant operator should be tracking weekly. Most aren't. Most pull it monthly from the bookkeeper, see "62%" on the report, shrug, and move on. By the time the monthly number lands, the week that broke prime cost is already four weeks gone and the second bad week is already two weeks in.

This is the version of prime cost I wish somebody had walked me through the first time I tried to read a P&L.

## The formula

Prime cost is the sum of two things: cost of goods sold (food + beverage) and total labor (wages + payroll burden).

> **Prime cost % = (COGS + Total Labor) ÷ Total Sales × 100**

That is the headline math. The trick is what goes inside each bucket.

**COGS** for prime cost includes both food and beverage. Food cost percentage on its own is useful but only tells half the bar program's story. A restaurant with great food cost (28%) and bad pour cost (28% on beer) still has hot prime cost because the bev side is leaking.

**Total labor** for prime cost is the *fully loaded* number. Not just the gross wages on the payroll report. The fully loaded number adds:

- FICA (7.65%)
- Federal unemployment tax (FUTA, ~0.6% on first $7K)
- State unemployment tax (SUTA, varies 1-6%)
- Workers comp insurance (restaurant industry runs 3-7% of payroll depending on state)
- Health insurance contribution (if you offer it)
- Paid time off accrual
- Manager salaries amortized to the week

The fully loaded labor cost is typically **25-35% higher than gross wages alone** (Restaurant365, Toast). If your weekly gross wage bill is $12,000, your fully loaded labor for prime cost purposes is closer to $15,500-$16,200. Operators who run prime cost on gross wages alone are understating by 4-6 points and wondering why their net margin doesn't match the report.

## Why weekly, not monthly

The textbook answer says monthly. Industry standard says weekly. The textbook is wrong.

A monthly prime cost number tells you what already happened to four weeks of business. Weekly prime cost tells you what is happening *right now* and lets you adjust before the second bad week lands. A weekly hit of 65% prime cost on a target of 60% costs you about 1% of weekly revenue. Catch it in week one and fix in week two: 1% loss. Don't catch it until the monthly closes: 4% loss across the period.

The weekly cadence requires:

1. A real-time inventory count (Sunday night for a Mon-Sun week, or Wednesday for a Wed-Tue week).
2. Sales pulled from POS for the same period.
3. Labor pulled from your time clock with payroll burden applied.

Most independent operators have all three. They just don't pull them on a schedule. The fix is a forty-minute Monday morning routine, not a software purchase.

## A worked example

Take a casual full-service restaurant doing **$82,000** in weekly sales.

**Food cost** for the week:
- Beginning inventory: $14,200
- Purchases: $22,800
- Ending inventory: $13,400
- COGS food: $14,200 + $22,800 − $13,400 = **$23,600**

**Beverage cost** for the week:
- Beginning bev inventory: $8,400
- Bev purchases: $5,200
- Ending bev inventory: $7,800
- COGS bev: $8,400 + $5,200 − $7,800 = **$5,800**

**Total COGS:** $23,600 + $5,800 = **$29,400** (35.9% of sales)

**Labor** for the week:
- Gross hourly wages: $9,800
- Salaried manager (weekly portion): $1,750
- Payroll burden (FICA, SUTA, workers comp, ~28% blended): $3,234
- Health insurance allocation: $620
- **Total labor: $15,404** (18.8% of sales)

**Prime cost:** $29,400 + $15,404 = $44,804 = **54.6%**

That is healthy for a casual full-service. Industry target band: 55-65% (Restaurant365, Toast). At 54.6%, this operation has room to invest in better ingredients, a small price hold, or higher wages without putting the model at risk.

## Where the 60% benchmark comes from (and when to ignore it)

The "prime cost should be 60% or less" rule of thumb comes from Restaurant365's industry survey work and from Bo Bennett's prime cost benchmark series at Baker Tilly. The number is useful as a starting reference. It is wrong as a universal target.

Better targets by concept:

- **QSR / fast food:** 55-60% (low food cost, higher labor share due to labor-intensive low-ticket service)
- **Fast casual:** 55-60%
- **Casual full-service:** 55-62%
- **Fine dining:** 60-65% (higher food cost from premium ingredients, higher labor from skilled BOH and higher service ratio)
- **Pizza:** 50-58% (low food cost, sometimes 22-26%, wins back room on labor)
- **Coffee shop / bakery:** 55-62%
- **Sports bar / pub:** 55-62%

The right target for *your* concept is whatever lets you hit your net profit goal after rent, utilities, marketing, and royalty/franchise fees. For most independents that target is set by what's left after the fixed costs. If your rent + utilities + insurance + marketing run $24,000/month on $325,000 monthly revenue (7.4%), you need to keep prime cost below about 67% to leave 5-6% net margin. If those fixed costs run $14,000/month, you have more room.

## Three numbers to fix first when prime cost runs over 65%

Prime cost over 65% is not one problem. It is one of three problems (sometimes all three at once).

**1. Food cost is too high.** Run an inventory variance check. If theoretical food cost says 30% and actual says 35%, the 5-point gap is either waste, theft, portion drift, recipe non-compliance, or pricing not catching up to ingredient cost. Each has a different fix.

**2. Labor cost is too high.** SPLH and labor cost % tell different stories. A 38% labor cost on $7K Saturday means $2,660 in labor against 14 server hours plus 6 BOH hours plus a manager. If your SPLH target is $125, you should have been at 56 labor hours max. If you ran 80, you over-scheduled. The fix is forecasting and staggered shift starts, not firing people.

**3. Beverage program is leaking.** Pour cost above the bar-program target (18-24% blended) usually means free pours, comps without manager approval, over-pouring on well drinks, or wine BTG yield problems. The bar leak is the most-often-missed contributor to bad prime cost.

The order to investigate: pull the food cost variance first (cheapest to check, fastest to fix). Then SPLH by daypart. Then bar variance. Most prime cost over-runs are 60-70% food cost and 30-40% labor, with the bar quietly contributing a point or two.

## What this looks like in the calculator

The [prime cost calculator](/calculators/prime-cost/) on this site takes food cost, beverage cost, and fully loaded labor (including the burden multiplier) and returns prime cost percentage against concept-specific benchmarks. Plug in your weekly numbers, see where you land against the 55-65% band, and the answer tells you whether to drill into [food cost](/calculators/food-cost/), [labor cost](/calculators/labor-cost/), or [pour cost](/calculators/liquor-pour-cost/) first.

The calculator is built for the Monday morning forty-minute routine, not a quarterly review. Run it once a week with the same source data and prime cost stops being a surprise on the P&L.

## What to do today

Pull last week's sales, last week's inventory count (or estimate ending inventory ±5%), last week's payroll. Apply a 28% burden multiplier to the gross wages. Run the prime cost number. If you have never done this weekly, your first number will probably surprise you. The surprise is the point.

Sources: [Restaurant365](https://www.restaurant365.com/), [Toast](https://pos.toasttab.com/), [Baker Tilly Restaurant Industry Benchmark Report](https://www.bakertilly.com/), NRA 2024 Industry Factbook.
