---
title: "Why Monthly Inventory Lies (And the Weekly Fix That Catches Leaks)"
description: "From a 5-year bar GM: monthly variance is too late, weekly is the real number, and the discipline of looking matters more than the math."
pubDate: 2026-05-04
author: "Brock"
tags: ["Inventory", "Variance", "Operations"]
relatedCalc: "inventory-variance"
heroImage: "/illustrations/blog-weekly-inventory.webp"
---

I ran my first variance count three months too late.

By the time I sat down with the count book, the spreadsheet, and an honest evening, the leak was already big enough to be embarrassing. Not because anybody was stealing. Not because the kitchen was reckless. Just because three months is enough time for any of a dozen small things to compound, and nobody had been *looking*.

That is the entire problem with monthly inventory. By the time you see the gap, it is already a month old. And by the time you investigate, it is sometimes six weeks. The trail is cold. The bartender who was overpouring on Saturdays cannot tell you what they were doing five weeks ago because they barely remember last shift. The cook who was over-portioning on the lunch special swapped to dinner three weeks ago. Even the vendor short-ship that started it all has moved on to the next operator.

Weekly inventory is not about having tighter numbers. **Weekly inventory is about catching the gap while the trail is still warm.**

This post is the case for switching from monthly to weekly counts and the practical guide to doing it without burning out the team.

## What monthly inventory actually catches

Monthly counts catch the obvious leaks. The ones that a good GM already knows about because the regulars have been complaining or the recipe specs are visibly stale or the walk-in temperature has been off for two weeks.

Monthly counts do not catch:

- **Slow drift.** A bartender pouring 1.7 ounces instead of 1.5 across thirty days is a quietly enormous gap. One ounce extra times a thousand drinks is sixty-some-odd drinks worth of liquor. Your variance flags it. Your monthly count averages it across the whole window so you see "high" and assume it is normal seasonal noise.
- **One bad week.** A walk-in seal that fails for three days and gets fixed on the fourth is invisible in monthly numbers because the other 27 days dilute it. You will see the spike in spoilage cost on the P&L but you will not see *which days* it happened, so you cannot point to the failure event.
- **Vendor short-ships that get back-billed.** The distributor is supposed to deliver six cases of well vodka. They deliver five. The driver writes "6" on the invoice. You sign it. Monthly count: you are missing a case. Weekly count: you can call the distributor while the truck is still in town.
- **Comp creep.** Comp policies drift. A new bartender starts comping rounds for regulars without ringing the comp button. The owner brings friends in three Saturdays in a row. Monthly count picks up the dollar gap. It does not pick up the *who*.

## Why weekly works

Three reasons. None of them are about the math being more accurate.

**The trail is warm.** A gap discovered on Monday for a week ending Sunday is investigable. The bartender who worked Saturday is still on the schedule. The kitchen who ran the special on Friday remembers what they 86'd. The cooler that warmed up on Wednesday probably still has the temperature log if you set one up. Investigation is *possible* because everybody can recall.

**The gap is smaller.** A weekly variance of two percent is fifty bucks at most concepts. A monthly variance of two percent is two-fifty. The two-percent number is the same. The dollar amount, and therefore the seriousness, scales differently. Catching a fifty-dollar leak before it becomes a thousand-dollar problem is the entire game.

**The discipline replaces the shock.** I had to count bottles enough times for the discipline of *looking* to replace the shock of *finding*. By the third weekly count, I was no longer surprised by the gap. I was just diagnosing it. That mental shift is the biggest unlock in this work. You stop reacting and start managing.

## The benchmarks

Before we get into the practical setup, the band:

- **Best-in-class operators run under 1% variance** of sales (industry benchmark, multiple sources)
- **Acceptable / normal range:** 2-3%
- **In-trouble territory:** sustained above 4-5%
- **Open-investigation territory:** anything over 6%

Those numbers assume you are running concept-appropriate spec discipline. If your recipes are six months out of date, your variance number is a fiction either direction. Recost annually at minimum, quarterly is better.

## Theoretical vs actual: the comparison that catches real leaks

Variance has two forms. Most operators only run one.

**Actual variance** = (theoretical usage based on POS sales × spec) versus (actual usage based on inventory count). This is the one most calculators help with. It catches the gap.

**Theoretical-vs-actual food cost** = (food sales × COGS percentage based on specs) versus (food sales × actual COGS percentage based on inventory math). This catches the *system*-level gap.

If your theoretical food cost is 28% but your actual is 33%, the gap is 5%. That gap can come from any of: bad portion control, stale recipe costs, vendor price changes you didn't bake in, comp creep, waste, theft, training, equipment drift. Variance does not tell you which one. Variance tells you the gap exists.

The discipline of running both numbers weekly is what separates operators who control their costs from operators who get a quarterly P&L surprise. The math is the easy part. The weekly habit is the discipline.

## How to actually run weekly inventory without burning out

The tactical reality. Most operators don't switch to weekly because they think it doubles the team's workload. It does not. It changes the workload.

**Cut the SKU list.** Do not count everything every week. Count the **A-items**: the top 20% of SKUs that drive 80% of cost. For most concepts that is 20-40 items. Count those weekly. Count the long tail monthly. Pareto applies to your stock room as much as it applies to anything else.

**Standardize the count form.** Same person, same time, same handwriting, same order through the walk-in. The form is the system. Switching counters mid-quarter is the fastest way to introduce phantom variance.

**Friday close to Friday close.** Pick a closing day that aligns with the natural slowdown. Sunday is brutal. Friday afternoon is rough but doable. Tuesday morning is the cleanest in most concepts. Pick one. Stick to it.

**One person counts. The GM reviews.** The count is one job. The reconciliation against the POS is the GM's job. Splitting them protects against the most common variance fraud (the same person counts AND reconciles AND blames everyone else when the numbers are off).

**Recipe cost monthly. Spec audit quarterly.** A recipe priced at six-month-old vendor numbers will produce theoretical numbers that don't match anything. Spec audit means walking the line and confirming the cooks are pulling the actual portion the recipe says. They drift. They always drift.

## The Cosmos frame

I worked in a sports bar in California for five years. The owner was not heavily engaged in day-to-day operations. Three of those five years I was running variance reports because nobody else was going to. There was no playbook. There was no consultant. There was just me, the count book, and the slowly developing understanding that the variance report's job was not to *catch* anything. The variance report's job was to make the gap visible to a person whose job was to fix it.

If you are reading this and your monthly variance has been "kinda high but not that bad" for the last six months, you do not have a variance problem. You have a *looking* problem. The variance report is making a gap visible. Nobody is looking. That is the issue. Switch to weekly. Look harder. The math will follow.

## What to do this week

Pick a closing day. Pull yesterday's POS sales report. Walk the cooler with a pen and a count book. Compare what the math says you should have used to what you actually have. The number you get is your starting baseline. Next week, do it again. Compare. Repeat.

If you want a tool that does the math for you without an email gate, [we built one](/calculators/inventory-variance/). Plug in opening, purchases, closing, and the theoretical from your POS. It tells you the variance, the dollar gap, and where it falls on the band. No signup, no upsell.

For the wider picture, the [food cost percentage calculator](/calculators/food-cost/) and [prime cost calculator](/calculators/prime-cost/) handle the layer above this one, converting the variance you found into the P&L number that decides whether you are running a healthy program or a slowly closing one.

The number does not lie. The number does not have feelings about your bartenders or your line cooks or your vendor relationships. The number tells you whether the program is bleeding. Looking weekly is the difference between catching it on Monday and finding out about it on the next quarterly P&L.
