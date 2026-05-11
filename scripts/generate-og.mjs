#!/usr/bin/env node
/**
 * Generate per-page OG images (1200x630) using satori + @resvg/resvg-js.
 * Reads sitemap-0.xml from dist/client, renders one PNG per route.
 * Output: dist/client/og/{slug}.png
 *
 * Run AFTER `astro build` so sitemap exists.
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distRoot = join(root, 'dist', 'client');
const ogDir = join(distRoot, 'og');

const bricolage = await readFile(join(__dirname, 'fonts', 'Bricolage-500.ttf'));
const geist = await readFile(join(__dirname, 'fonts', 'Geist-500.ttf'));

// Page → display title mapping (override per route)
const PAGE_TITLES = {
  '/': { title: 'Restaurant math, done right.', eyebrow: 'Free calculators · No signup' },
  '/calculators/': { title: 'Restaurant math, solved.', eyebrow: 'All free ops calculators' },
  '/calculators/food-cost/': { title: 'Food Cost Percentage Calculator', eyebrow: 'Free · Math shown' },
  '/calculators/recipe-cost/': { title: 'Recipe & Plate Cost Calculator', eyebrow: 'Free · Multi-row · Q-factor' },
  '/calculators/labor-cost/': { title: 'Labor Cost Percentage Calculator', eyebrow: 'Free · Concept-aware · SPLH' },
  '/calculators/tip-pool/': { title: 'Tip Pool & Tip Out Calculator', eyebrow: 'Free · FLSA compliance flags' },
  '/calculators/menu-pricing/': { title: 'Menu Pricing Calculator', eyebrow: 'Free · Charm rounding · CM%' },
  '/calculators/liquor-pour-cost/': { title: 'Liquor Pour Cost Calculator', eyebrow: 'Free · Per-drink + aggregate' },
  '/calculators/break-even/': { title: 'Restaurant Break-Even Calculator', eyebrow: 'Free · Margin of Safety' },
  '/calculators/inventory-variance/': { title: 'Inventory Variance Calculator', eyebrow: 'Free · Sign-aware status' },
  '/calculators/prime-cost/': { title: 'Restaurant Prime Cost Calculator', eyebrow: 'Free · Concept benchmarks' },
  '/calculators/keg-cost/': { title: 'Draft Beer / Keg Cost Calculator', eyebrow: 'Free · Pour cost · Profit per keg' },
  '/calculators/no-show-deposit/': { title: 'No-Show Cost & Deposit Calculator', eyebrow: 'Free · Deposit math · Recovery' },
  '/calculators/menu-engineering/': { title: 'Menu Engineering Matrix Calculator', eyebrow: 'Free · Star / Plowhorse / Puzzle / Dog' },
  '/calculators/delivery-profit/': { title: 'Delivery True-Profit Calculator', eyebrow: 'Free · Net per order · Reverse-solve' },
  '/calculators/catering-pricing/': { title: 'Catering & Event Pricing Calculator', eyebrow: 'Free · Service charge + gratuity split' },
  '/calculators/turnover-cost/': { title: 'Employee Turnover Cost Calculator', eyebrow: 'Free · Annual cost · Concept benchmarks' },
  '/calculators/fountain-cost/': { title: 'Fountain Drink / BIB Cost Calculator', eyebrow: 'Free · Pour cost · Yield per BIB' },
  '/blog/': { title: 'Real operator stories. No listicles.', eyebrow: 'Field notes from the line' },
  '/blog/tip-pool-legal-guide-2026/': { title: 'Tip Pool Legal Guide: FLSA, Tip Credits, and What Gets You Sued', eyebrow: 'By Brock Markarian · 9 min read' },
  '/blog/bar-pour-cost-leaks/': { title: '5 Ways Bar Pour Cost Actually Leaks', eyebrow: 'By Brock Markarian · 8 min read' },
  '/blog/food-cost-discipline-flacos/': { title: 'What Food Cost Actually Means (And What Killed Flaco\'s Cafe)', eyebrow: 'By Brock Markarian · 7 min read' },
  '/blog/half-barrel-pints-foam-loss/': { title: 'Half-Barrel Pints, Foam Loss, and What a Draft Beer Actually Costs', eyebrow: 'By Brock Markarian · 7 min read' },
  '/blog/soda-fountain-margin-free-refills/': { title: 'Soda Fountain Margin: How Much a Free Refill Actually Costs You', eyebrow: 'By Brock Markarian · 7 min read' },
  '/blog/weekly-vs-monthly-inventory/': { title: 'Why Monthly Inventory Lies (And the Weekly Fix That Catches Leaks)', eyebrow: 'By Brock Markarian · 7 min read' },
  '/blog/splh-shift-cuts/': { title: 'Sales Per Labor Hour: The Number That Tells You Who To Cut First', eyebrow: 'By Brock Markarian · 7 min read' },
  '/blog/how-to-cost-a-recipe/': { title: 'How to Cost a Recipe (The Yield Percentage Most Operators Skip)', eyebrow: 'By Brock Markarian · 9 min read' },
  '/blog/third-party-delivery-real-cost/': { title: 'What Third-Party Delivery Actually Costs You (The Math Nobody Quotes)', eyebrow: 'By Brock Markarian · 8 min read' },
  '/blog/restaurant-turnover-cost-benchmarks/': { title: 'What Restaurant Turnover Actually Costs (The $5,864 Per Quit)', eyebrow: 'By Brock Markarian · 8 min read' },
  '/blog/how-to-calculate-prime-cost/': { title: 'How to Calculate Prime Cost (Weekly, Not Monthly)', eyebrow: 'By Brock Markarian · 8 min read' },
  '/blog/food-cost-percentage-formula/': { title: 'Food Cost Percentage Formula (Real Worked Example)', eyebrow: 'By Brock Markarian · 7 min read' },
  '/blog/how-to-calculate-labor-cost-percentage/': { title: 'How to Calculate Labor Cost Percentage (Beyond Wages)', eyebrow: 'By Brock Markarian · 8 min read' },
  '/blog/how-to-calculate-pour-cost/': { title: 'How to Calculate Pour Cost (Why 20% Is Wrong)', eyebrow: 'By Brock Markarian · 8 min read' },
  '/blog/restaurant-break-even-formula/': { title: 'Restaurant Break-Even Formula (Dollars and Covers)', eyebrow: 'By Brock Markarian · 7 min read' },
  '/blog/food-cost-percentage-by-restaurant-type/': { title: 'Average Food Cost Percentage by Restaurant Type (2026)', eyebrow: 'By Brock Markarian · 8 min read' },
  '/blog/labor-cost-percentage-by-segment-2026/': { title: 'Average Labor Cost Percentage by Segment (2026)', eyebrow: 'By Brock Markarian · 8 min read' },
  '/blog/pour-cost-benchmarks-by-category/': { title: 'Pour Cost Benchmarks for Bars (Beer, Wine, Liquor)', eyebrow: 'By Brock Markarian · 7 min read' },
  '/blog/restaurant-profit-margin-benchmarks-2026/': { title: 'Restaurant Profit Margin Benchmarks (2026 by Segment)', eyebrow: 'By Brock Markarian · 8 min read' },
  '/blog/theoretical-vs-actual-food-cost/': { title: 'Theoretical vs Actual Food Cost (Variance Explained)', eyebrow: 'By Brock Markarian · 7 min read' },
  '/blog/menu-engineering-matrix-explained/': { title: 'Menu Engineering: Stars / Plowhorses / Puzzles / Dogs', eyebrow: 'By Brock Markarian · 8 min read' },
  '/blog/contribution-margin-vs-food-cost-percentage/': { title: 'Contribution Margin vs Food Cost % (Why Ratio Lies)', eyebrow: 'By Brock Markarian · 7 min read' },
  '/blog/why-is-my-food-cost-too-high/': { title: 'Why Is My Food Cost Too High? 7 Root Causes', eyebrow: 'By Brock Markarian · 8 min read' },
  '/blog/reduce-labor-cost-without-cutting-hours/': { title: 'How to Reduce Labor Cost Without Cutting Hours', eyebrow: 'By Brock Markarian · 8 min read' },
  '/blog/how-to-reduce-restaurant-turnover/': { title: 'How to Reduce Restaurant Turnover (Real Numbers)', eyebrow: 'By Brock Markarian · 8 min read' },
  '/blog/tip-pool-vs-tip-out/': { title: 'Tip Pool vs Tip Out (When to Switch)', eyebrow: 'By Brock Markarian · 7 min read' },
  '/blog/cost-plus-vs-margin-pricing-menu/': { title: 'Cost-Plus vs Margin Pricing (Three Methods Compared)', eyebrow: 'By Brock Markarian · 7 min read' },
  '/blog/charm-pricing-vs-round-pricing/': { title: 'Charm Pricing vs Round Pricing on Restaurant Menus', eyebrow: 'By Brock Markarian · 7 min read' },
  '/blog/ghost-kitchen-vs-brick-mortar/': { title: 'Ghost Kitchen vs Brick & Mortar (Honest Comparison)', eyebrow: 'By Brock Markarian · 8 min read' },
  '/blog/catering-pricing-offsite-events/': { title: 'Catering Pricing: Off-Site Event Math', eyebrow: 'By Brock Markarian · 8 min read' },
  '/about/': { title: 'About RestaurantCalcs', eyebrow: 'Restaurant math, done right' },
  '/contact/': { title: 'Contact RestaurantCalcs', eyebrow: 'Get in touch' },
  '/privacy/': { title: 'Privacy Policy', eyebrow: 'No calculator inputs stored' },
  '/terms/': { title: 'Terms of Service', eyebrow: 'Educational use only' },
};

function template(title, eyebrow) {
  return {
    type: 'div',
    props: {
      style: {
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        background: '#1a1814',
        position: 'relative',
        padding: '64px 72px',
        color: '#f4f1ea',
        fontFamily: 'Geist',
      },
      children: [
        // Saffron accent strip top
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '6px',
              background: '#c87500',
            },
          },
        },
        // Saffron radial glow accent (faked w/ div)
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: '-200px', right: '-200px',
              width: '500px', height: '500px',
              borderRadius: '50%',
              background: 'rgba(200, 117, 0, 0.18)',
              filter: 'blur(80px)',
            },
          },
        },
        // Header — RestaurantCalcs brand
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '40px',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #c87500, #8d5200)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#1a1814',
                  },
                  children: '%',
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontFamily: 'Bricolage',
                    fontSize: '24px',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    color: '#ffffff',
                  },
                  children: 'RestaurantCalcs',
                },
              },
            ],
          },
        },
        // Eyebrow
        {
          type: 'div',
          props: {
            style: {
              fontSize: '18px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#c87500',
              marginBottom: '24px',
            },
            children: eyebrow,
          },
        },
        // Title
        {
          type: 'div',
          props: {
            style: {
              fontFamily: 'Bricolage',
              fontSize: title.length > 40 ? '64px' : '80px',
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: '#ffffff',
              maxWidth: '1056px',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
            },
            children: title,
          },
        },
        // Footer band
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '24px',
              borderTop: '1px solid rgba(244, 241, 234, 0.20)',
              fontSize: '18px',
              fontWeight: 500,
              color: 'rgba(244, 241, 234, 0.65)',
            },
            children: [
              { type: 'div', props: { children: 'restaurantcalcs.com' } },
              {
                type: 'div',
                props: {
                  style: { color: '#c87500', fontWeight: 600 },
                  children: 'Free · No signup · Math shown',
                },
              },
            ],
          },
        },
      ],
    },
  };
}

async function generate(route, meta) {
  const svg = await satori(template(meta.title, meta.eyebrow), {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Bricolage', data: bricolage, weight: 500, style: 'normal' },
      { name: 'Geist', data: geist, weight: 500, style: 'normal' },
    ],
  });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  const slug = route === '/' ? 'index' : route.replace(/^\/|\/$/g, '').replace(/\//g, '_');
  const out = join(ogDir, `${slug}.png`);
  await writeFile(out, png);
  console.log(`[og] generated ${slug}.png`);
}

async function main() {
  if (!existsSync(distRoot)) {
    console.error(`[og] dist/client not found at ${distRoot}. Run \`astro build\` first.`);
    process.exit(1);
  }
  await mkdir(ogDir, { recursive: true });

  const routes = Object.keys(PAGE_TITLES);
  for (const route of routes) {
    try {
      await generate(route, PAGE_TITLES[route]);
    } catch (err) {
      console.error(`[og] failed ${route}:`, err.message);
    }
  }
  console.log(`[og] done — ${routes.length} images`);
}

main();
