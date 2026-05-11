---
title: "Sales Per Labor Hour: The Number That Tells You Who To Cut First"
description: "From a 5-year bar GM: the math behind the 9pm 'cut a server' decision, why SPLH beats labor cost % at the shift level, and concept-by-concept benchmarks."
pubDate: 2026-05-04
author: "Brock"
tags: ["Labor cost", "Scheduling", "SPLH", "Operations"]
relatedCalc: "labor-cost"
heroImage: "/illustrations/blog-splh-shift.webp"
---

The hardest schedule decisions I made at the bar were never the dinner ones.

Dinner is loud and the math is obvious. The hard ones were the 1:30am decisions. The nightclub closes at 2. Eight people are on the clock. Nobody has sold a drink in twenty minutes. Cut a bartender too early and you miss the next rush of three regulars who walk in for last call. Keep them ten minutes too long and you've quietly given away forty bucks of margin.

Multiply that decision across five nights a week, fifty weeks a year, and you are looking at real money. The labor cost percentage on the P&L will not catch that. The labor cost percentage shows up after the period closes, looks fine, and tells you nothing about *which* shift bled.

**Sales per labor hour is the number that catches it.**

This post is the case for using SPLH at the shift level instead of (or alongside) labor cost percentage at the period level, with the concept-by-concept benchmarks and the practical reality of when to cut.

## What SPLH actually is

SPLH = total revenue ÷ total labor hours.

Revenue means net sales for the shift or window. Labor hours means everybody on the clock, front, back, manager, bartender. Not wages. Hours. The metric is intentionally simple because it has to be calculable in your head at 1am when the POS dashboard is laggy and you have to decide whether to cut somebody.

A typical full-service casual on a Saturday night might run **$70 of sales per labor hour**. A QSR at lunch peak might run **$50**. A fine dining room with a heavy tasting menu might run **$120**. A pizza concept on a Friday night runs **$60-75**. Those are not target numbers. Those are *normal* numbers, from industry benchmark sources.

If you are running half that, you have too many people on the clock. If you are running double, you are running shorthanded and probably hurting the guest experience and the staff.

## Why labor cost percentage is the wrong shift-level metric

Labor cost % is fine for the P&L. It is the wrong number to use at 9pm.

Three reasons:

**Wages aren't the binding constraint at the shift level.** What matters at 9pm is whether one more bartender adds enough revenue to cover their hour. A senior bartender at $24/hr and a barback at $14/hr generate the same number of *minutes* of operational capacity. Wages distort the decision. Hours don't.

**The percentage hides the absolute number.** A 28% labor cost on a $1,200 night is $336. A 28% labor cost on a $600 night is $168. The percentage is the same. The decision (do I cut?) is wildly different. Absolute SPLH lets you see the actual operational picture.

**Period-level vs shift-level mismatch.** Your monthly labor cost percentage tells you whether the period was healthy. It cannot tell you which shifts were healthy. A great Saturday at $90 SPLH and a brutal Tuesday at $30 SPLH average out to a perfectly fine $60 SPLH on the month. The Tuesday is bleeding. The percentage hides it. SPLH at the shift level surfaces it.

## SPLH benchmarks by concept

These are industry benchmarks. Plot your shift number against the band:

- **QSR / fast food:** $40-60/hr (Toast, 7shifts)
- **Fast casual:** $55-80/hr
- **Casual dining:** $60-85/hr
- **Pizza concepts:** $50-80/hr
- **Fine dining / upscale casual:** $80-150/hr (depends heavily on average check)
- **Bars / pubs / sports bars (late shift):** $80-120/hr at peak, $30-50/hr in slow windows
- **Coffee / cafe:** $40-70/hr

Read the band, not the midpoint. A casual dining at $50 SPLH is bleeding. A casual dining at $90 SPLH is excellent and probably understaffed. The healthy band is wide because concept variance is huge.

## The cut decision at 9pm

Here is the math I run on the fly. Use it. Adapt it.

**Question 1: What's the SPLH right now?** Pull current shift sales. Divide by current labor hours on the clock.

**Question 2: What's the SPLH if I cut one person?** Same sales (those have already happened). Subtract the labor hours from the cut person from the rest of their shift. Recalculate.

**Question 3: What's the realistic remaining sales for the shift?** Be honest. Saturday at 9pm probably has another two hours of solid revenue. Tuesday at 9pm probably has thirty minutes.

**Question 4: Can the people remaining handle it?** This is the only question that is not math. It is operations. A short-staffed Saturday at 9pm is risk. A short-staffed Tuesday at 9pm is fine.

If the answer to 1 is "below band" and the answer to 4 is "yes, the remaining team can handle it," cut. If the answer to 1 is "in band but trending down" and the answer to 4 is "yes," consider cutting.

The mistake new managers make is cutting too early on a Tuesday because they're trying to look good on the labor number, then the regulars walk in at 9:30 and there are not enough people on the floor. The mistake old managers make is keeping everyone on the clock because they hate the conversation, and the SPLH number quietly drifts under the band for an hour at a time, four nights a week.

## The 1:30am decision specifically

This one is its own beast.

The nightclub or late-night bar at 1:30 is a special operations problem. The decision is: cut a bartender at 1:30 and miss potential last-call revenue, or keep them through 2am and probably lose forty bucks.

The math: if you have not sold a drink in fifteen minutes and there are not new bodies coming through the door, the rest of the shift is going to do less than $40 in revenue per remaining hour. A bartender at $24/hr fully-loaded (wages + payroll tax + workers comp, see [labor cost calc](/calculators/labor-cost/)) is producing negative SPLH from 1:30 to 2:00 in that scenario.

Cut. The forty bucks is gone either way; you might as well not pay another forty bucks of labor on top of it.

The honest version is that I cut wrong both directions in my five years at Cosmos. Cut too early on a Saturday, the rush walked in at 1:45 and we ran the bar shorthanded for twenty minutes. Cut too late on a Tuesday, gave away an hour of bartender wages on a dead room. The point is not to be perfect. The point is to *make the decision based on the math* and not based on the manager's emotional read of the room.

## Failure modes (where SPLH lies to you)

SPLH is the right number for shift-level decisions, but it can mislead in three specific cases.

**1. Tip-pool concepts vs non-pool.** A tip pool concept will show different SPLH than a non-pool concept at the same volume because effective wage costs are distributed differently. The math still works. The benchmark you compare to needs to match your tip structure.

**2. Heavy comping or promo nights.** "Half-off apps Tuesday" inflates check counts but suppresses revenue per hour. SPLH looks bad. The real metric on a promo night is contribution margin per labor hour, not raw sales. Use SPLH but adjust the band.

**3. Catering or prep shifts.** Back-of-house prep shifts produce zero revenue in the moment but enable revenue later in the week. Do not run SPLH on a prep shift. Run it on revenue-generating shifts only.

**4. The closing crew.** The last hour of every shift has near-zero revenue and near-full labor. Closers are necessary, but their SPLH math is brutal. Build it into your headcount budget; don't try to optimize it out.

## What to do this week

Pull your last full week of sales by daypart. For each daypart, calculate SPLH. Plot it against the band for your concept.

You will see at least one window where SPLH is below band. That is the conversation for next week's schedule.

If you want a tool that does this math, the [labor cost percentage calculator](/calculators/labor-cost/) has SPLH built in alongside the loaded-labor math. Plug in your shift sales, hours, wages, and burden multiplier. It tells you SPLH, labor cost percentage, and where you fall against the band. No signup, no upsell, no email gate.

For the bigger labor picture, the [prime cost calculator](/calculators/prime-cost/) puts labor and food cost together so you can see the line that actually matters at the P&L level.

The math is the easy part. The discipline of running SPLH at 9pm on a Tuesday, when nobody's watching, the floor is dead, and you have a manager's instinct telling you to keep everybody on because you hate the conversation, that is the part that keeps the labor line clean across a quarter. The number does not lie. The number tells you whether to cut. Your job is to read the band and have the conversation.
