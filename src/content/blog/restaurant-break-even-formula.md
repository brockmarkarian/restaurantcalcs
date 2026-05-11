---
title: "Restaurant Break-Even Formula (In Dollars and In Covers)"
description: "Two break-even formulas every operator should run, the cover gap reading, and what changes when you add or kill a daypart. From a 5-year GM."
pubDate: 2026-05-18
author: "Brock"
tags: ["Break-even", "Operations", "P&L", "Formulas"]
relatedCalc: "break-even"
heroImage: "/illustrations/break-even.webp"
---

Break-even is the number that tells you how big the hill is before you start counting profit. Most operators know the dollars version. Fewer know the covers version. The two formulas answer different questions and most decisions need both.

## The two formulas

**Break-even in dollars:**

> **Break-even Revenue = Fixed Costs ÷ Contribution Margin Ratio**

Where contribution margin ratio = (Sales − Variable Costs) ÷ Sales, expressed as a decimal.

**Break-even in covers:**

> **Break-even Covers = Fixed Costs ÷ (Average Check − Variable Cost per Cover)**

The dollars version tells you what revenue covers the bills. The covers version tells you what foot traffic does the same. Different operating decisions use different versions.

## Fixed vs variable: where labor lives

The biggest source of break-even errors is misclassifying labor.

**Fixed costs:**
- Rent
- Utilities (mostly, with caveats)
- Insurance
- Manager salaries
- Marketing retainers
- Software subscriptions
- Loan payments
- **Salaried portion of labor**

**Variable costs:**
- Food cost (COGS food)
- Beverage cost (COGS bev)
- Hourly labor (mostly)
- Credit card processing fees
- Packaging / supplies
- Per-cover or per-transaction software fees
- **Tip pool out (if you split tips into a category)**

The trap: hourly labor is *mostly* variable but has a fixed floor. You need a minimum crew to open the doors regardless of volume. The honest classification splits it: the floor crew is fixed, the volume-scaling crew is variable. Most operators don't bother and just put all hourly labor in variable, which understates the fixed floor by 10-20%. Fine for back-of-envelope. Bad for major decisions like "should we open Monday lunch."

## A worked example

Casual full-service restaurant.

**Monthly fixed costs:**
- Rent: $14,800
- Utilities: $3,200
- Insurance: $1,400
- Manager salary (1 GM, 1 AGM, fully loaded): $9,200
- Marketing: $1,800
- Software (POS, inventory, accounting): $850
- Loan payment: $2,100
- Salaried portion of labor + minimum-crew hourly floor: $7,400
- **Total fixed: $40,750**

**Variable cost structure** (as % of sales):
- Food cost: 30%
- Beverage cost (allocated): 2%
- Hourly labor above floor: 16%
- Credit card processing: 2.4%
- Packaging / supplies: 1.6%
- **Total variable: 52%**

**Contribution margin ratio:** 1 − 0.52 = **48%**

**Break-even in dollars:** $40,750 ÷ 0.48 = **$84,896/month**

**Average check:** $38
**Variable cost per cover:** $38 × 52% = $19.76
**Contribution margin per cover:** $38 − $19.76 = $18.24

**Break-even in covers:** $40,750 ÷ $18.24 = **2,234 covers/month**

That is about 74 covers/day. If the operation does 110 covers on a typical weekday and 220 on a typical Friday/Saturday, the break-even gets hit before lunch on the last Wednesday of the month. Anything past that is contribution to net margin.

## The cover gap: how to read "1,847 covers"

A break-even cover number means very different things depending on your hours and seating.

**45-seat dining room, dinner only, Tue-Sat (20 service days/month):**
- 2,234 covers ÷ 20 days = 112 covers/day
- 112 covers ÷ 45 seats = 2.5 turns/night
- 2.5 turns is aggressive for dinner. Achievable Fri/Sat but unlikely Tue/Wed.
- Implication: this operation is fragile. One bad week and break-even slips.

**80-seat dining room, lunch + dinner, 7 days (30 service days/month):**
- 2,234 covers ÷ 30 days = 74 covers/day
- Across lunch + dinner = 37 covers each daypart
- 37 covers ÷ 80 seats = 0.46 turns
- Implication: covers per service is well below capacity. Break-even is comfortable.

The covers version tells you whether your break-even is geometrically possible given your physical capacity. The dollars version tells you what revenue clears the bills. Both numbers are needed.

## What changes when you add or kill a daypart

Adding a daypart shifts both fixed and variable cost structure. Killing one does the same in reverse.

**Add Monday lunch:**
- Fixed cost change: minimal (rent/utilities/insurance already paid for the space, manager already on salary). Maybe +$200 for additional cleaning supplies, water, gas.
- Variable cost change: scales with revenue. The 52% structure holds.
- New break-even covers needed (the *additional* covers to cover the *additional* fixed): about 11 covers per Monday lunch.
- If Monday lunch generates 22 covers/day, it adds about $836/week in contribution margin. Good move.
- If Monday lunch generates 8 covers/day, it loses $190/week. Kill it.

**Kill Sunday brunch:**
- Fixed cost change: minimal (same rent, manager).
- Variable cost change: scales with the lost revenue.
- The right way to evaluate: what's the contribution margin from Sunday brunch *only*?
- If Sunday brunch does $3,200 revenue and runs 65% variable cost (typical brunch with high labor intensity), contribution is $3,200 × 35% = $1,120/week.
- Killing it costs $1,120/week in contribution. Unless those hours go somewhere productive, that is real money walked away from.

Most operators evaluate daypart decisions on revenue alone. The right evaluation is on contribution margin against the marginal cost of running the daypart. A $2,500 daypart can be more profitable than a $3,500 daypart if the smaller one has better cost structure.

## When break-even is the wrong question

Break-even tells you what covers the bills. It does not tell you whether the business is healthy. A break-even at $85K monthly revenue on a $1.5M ceiling is fragile. A break-even at $85K on a $2.4M ceiling is comfortable.

The follow-up number to break-even is **margin of safety**:

> **Margin of Safety = (Actual Revenue − Break-Even Revenue) ÷ Actual Revenue**

For most independents, healthy margin of safety is **25-40%** (your actual revenue is 25-40% above break-even). Below 15%, you are one bad month from negative cash flow. Above 50%, you have room to invest in renovations, wage increases, or marketing experiments.

## What this looks like in the calculator

The [break-even calculator](/calculators/break-even/) on this site asks for fixed costs, variable cost structure (as a percentage or in dollars per cover), and your average check. It returns both formulas and margin of safety. Run alongside the [prime cost calculator](/calculators/prime-cost/) for the full operational picture.

## What to do today

Pull last month's P&L. Tag every line as fixed or variable. Add the labor floor to fixed. Run both formulas. The break-even covers number is the new gut check, if today's covers fall below it, you are not making money. If covers exceed it by 30%+, you have a healthy margin of safety.

This number changes when rent goes up, when wages shift, when food cost trends, or when you change your menu mix. Run it quarterly at minimum. Run it whenever a major cost line moves.

Sources: [Toast](https://pos.toasttab.com/), [Restaurant365](https://www.restaurant365.com/), [Lightspeed](https://www.lightspeedhq.com/blog/), NRA 2024 Industry Factbook, Baker Tilly Restaurant Industry Benchmark Report.
