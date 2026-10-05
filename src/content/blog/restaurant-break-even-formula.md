---
title: "Restaurant Break-Even Formula (In Dollars and In Covers)"
description: "Two break-even formulas every operator should run, the cover gap reading, and what changes when you add or kill a daypart. From a 5-year GM."
pubDate: 2026-05-18
updatedDate: 2026-06-01
author: "Brock"
tags: ["Break-even", "Operations", "P&L", "Formulas"]
relatedCalc: "break-even"
heroImage: "/illustrations/break-even.webp"
---

Break-even is the number that tells you how big the hill is before you start counting profit. Most operators know the dollars version. The covers version, way fewer. They answer different questions, and most decisions you make behind the line need both of them.

## The two formulas

**Break-even in dollars:**

> **Break-even Revenue = Fixed Costs ÷ Contribution Margin Ratio**

Where contribution margin ratio = (Sales − Variable Costs) ÷ Sales, expressed as a decimal.

**Break-even in covers:**

> **Break-even Covers = Fixed Costs ÷ (Average Check − Variable Cost per Cover)**

The dollars version tells you what revenue covers the bills. The covers version tells you how many butts in seats does the same thing. Which one you reach for depends on the decision in front of you.

## Fixed vs variable: where labor lives

The fastest way to get this number wrong is to misclassify labor. I've watched plenty of people do it.

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

Here's the trap. Hourly labor is *mostly* variable, but it has a fixed floor. You need a minimum crew to open the doors no matter how slow it gets, one cook, one server, somebody on the bar, and that crew gets paid whether you do 12 covers or 120. The honest way to classify it is to split it: the floor crew is fixed, the volume-scaling crew on top is variable. Most operators don't bother. They dump all hourly labor into variable, which understates the fixed floor by 10-20%. Fine for back-of-envelope math. Bad when you're deciding something real, like whether to open Monday lunch.

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

That's about 74 covers/day. Say this place does 110 covers on a typical weekday and 220 on a typical Friday or Saturday. The break-even gets hit before lunch on the last Wednesday of the month. Everything past that point is contribution to net margin. That's the part you actually get to keep.

## The cover gap: how to read "1,847 covers"

The same break-even cover number can mean two completely different things depending on your hours and your seats. Here's what I mean.

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

The covers version tells you whether your break-even is even physically possible in the room you've got. The dollars version tells you what revenue clears the bills. You want both on the table, because one of them can be quietly impossible while the other looks fine on paper.

## What changes when you add or kill a daypart

Add a daypart and you shift both your fixed and variable cost structure. Kill one and the same thing happens in reverse.

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

Most operators judge a daypart on revenue alone, and that's how you end up keeping a busy shift that bleeds you. Judge it on contribution margin against the marginal cost of actually running it. A $2,500 daypart can beat a $3,500 daypart all day if the smaller one has better cost structure.

## When break-even is the wrong question

Break-even tells you what covers the bills. It doesn't tell you whether the place is healthy, and those are not the same question. A break-even at $85K monthly revenue on a $1.5M ceiling is fragile. Same $85K on a $2.4M ceiling, and you can breathe.

The follow-up number to break-even is **margin of safety**:

> **Margin of Safety = (Actual Revenue − Break-Even Revenue) ÷ Actual Revenue**

For most independents, a healthy margin of safety is **25-40%**, meaning your actual revenue runs 25-40% above break-even. Below 15% and you're one bad month from negative cash flow, and that's the kind of month that shows up out of nowhere. Above 50% and you've finally got room to spend on the things that have been waiting, a remodel, a raise for the crew, an actual marketing budget.

## What this looks like in the calculator

The [break-even calculator](/calculators/break-even/) on this site asks for your fixed costs, your variable cost structure (as a percentage or in dollars per cover), and your average check. Plug those in and it hands back both formulas plus the margin of safety. Run it next to the [prime cost calculator](/calculators/prime-cost/) and you've got the whole operational picture in front of you.

## What to do today

Pull last month's P&L. Tag every line as fixed or variable. Remember to push the labor floor into fixed. Run both formulas. The break-even covers number is your new gut check: if today's covers fall below it, you're not making money, simple as that. Clear it by 30% or more and you've got a healthy margin of safety to work with.

This number moves every time rent goes up, wages shift, food cost creeps, or you mess with the menu mix. Run it quarterly at the bare minimum, and run it again the day any big cost line moves on you.

Sources: [Toast](https://pos.toasttab.com/), [Restaurant365](https://www.restaurant365.com/), [Lightspeed](https://www.lightspeedhq.com/blog/), NRA 2024 Industry Factbook, Baker Tilly Restaurant Industry Benchmark Report.
