#!/usr/bin/env node
/**
 * Audit every URL in sitemap against on-page-seo.md checklist.
 * Output: pass/fail per page with specific gap callouts.
 */

const SITE = 'https://restaurantcalcs.com';

const URLS = [
  '/',
  '/calculators/',
  '/calculators/food-cost/',
  '/calculators/recipe-cost/',
  '/calculators/labor-cost/',
  '/calculators/tip-pool/',
  '/calculators/menu-pricing/',
  '/calculators/liquor-pour-cost/',
  '/calculators/break-even/',
  '/calculators/inventory-variance/',
  '/calculators/prime-cost/',
  '/calculators/keg-cost/',
  '/calculators/no-show-deposit/',
  '/calculators/menu-engineering/',
  '/calculators/delivery-profit/',
  '/calculators/catering-pricing/',
  '/calculators/turnover-cost/',
  '/calculators/fountain-cost/',
  '/blog/',
  '/blog/tip-pool-legal-guide-2026/',
  '/blog/bar-pour-cost-leaks/',
  '/blog/food-cost-discipline-flacos/',
  '/about/',
  '/contact/',
  '/privacy/',
  '/terms/',
];

const EXTERNAL_AUTHORITATIVE_DOMAINS = [
  'dol.gov', 'restaurant.org', 'irs.gov', 'sba.gov', 'bls.gov',
  'pos.toasttab.com', 'restaurant365.com', 'marginedge.com',
  'home.binwise.com', 'binwise.com', 'bevspot.com', 'culinary.edu', 'ciachef.edu',
  'usbg.org', 'backbar.com',
  '7shifts.com', 'getsling.com', 'lightspeed.com',
  'fortune.com', 'inc.com', 'forbes.com', 'eater.com',
  'restauranthospitality.com', 'restaurantbusinessonline.com',
  'wikipedia.org', 'cornell.edu', 'aicpa.org',
  'policies.google.com', 'tools.google.com', 'support.google.com',
];

async function audit(url) {
  const html = await fetch(SITE + url).then((r) => r.text());

  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const title = titleMatch?.[1] || '';
  const descMatch = html.match(/name="description" content="([^"]+)"/);
  const desc = descMatch?.[1] || '';
  const canonical = /rel="canonical"/.test(html);
  const ogTitle = /property="og:title"/.test(html);
  const ogDesc = /property="og:description"/.test(html);
  const ogImg = /property="og:image"/.test(html);
  const twTitle = /name="twitter:title"/.test(html);
  const twDesc = /name="twitter:description"/.test(html);
  const lang = /<html\s+lang="en"/.test(html);
  const viewport = /name="viewport"/.test(html);
  const charset = /<meta\s+charset/.test(html);
  const favicon = /rel="icon"/.test(html);
  const apple = /apple-touch-icon/.test(html);
  const skipLink = /skip-link|"#main"/.test(html);
  const h1Count = (html.match(/<h1\b/g) || []).length;
  const h2Count = (html.match(/<h2\b/g) || []).length;

  // External links
  const allHrefs = [...html.matchAll(/href="(https?:\/\/[^"]+)"/g)].map((m) => m[1]);
  const externalAuthLinks = allHrefs.filter((h) =>
    EXTERNAL_AUTHORITATIVE_DOMAINS.some((d) => h.includes(d)),
  );
  const externalCount = new Set(externalAuthLinks.map((h) => new URL(h).host)).size;

  // Schema types present
  const schemaTypes = new Set([...html.matchAll(/"@type":"([^"]+)"/g)].map((m) => m[1]));

  // Image audit
  const imgs = [...html.matchAll(/<img[^>]+>/g)].map((m) => m[0]);
  const imgsMissingAlt = imgs.filter((i) => !/alt="/.test(i)).length;

  const lastUpdated = /Last reviewed/.test(html);

  // Score against checklist
  const fails = [];
  if (title.length < 30 || title.length > 70) fails.push(`title length ${title.length}`);
  if (desc.length < 130 || desc.length > 160) fails.push(`desc length ${desc.length}`);
  if (!canonical) fails.push('canonical missing');
  if (!ogTitle || !ogDesc || !ogImg) fails.push('OG incomplete');
  if (!twTitle || !twDesc) fails.push('Twitter Card incomplete');
  if (!lang) fails.push('lang missing');
  if (!viewport) fails.push('viewport missing');
  if (!charset) fails.push('charset missing');
  if (!favicon) fails.push('favicon missing');
  if (!apple) fails.push('apple-touch-icon missing');
  if (!skipLink) fails.push('skip-link missing');
  if (h1Count !== 1) fails.push(`h1=${h1Count}`);
  if (h2Count < 2) fails.push(`h2=${h2Count}`);
  if (externalCount < 2) fails.push(`ext-auth-links=${externalCount}`);
  if (imgsMissingAlt > 0) fails.push(`imgs-no-alt=${imgsMissingAlt}`);
  if (!lastUpdated) fails.push('last-updated missing');

  return {
    url,
    title: `${title.length}ch`,
    desc: `${desc.length}ch`,
    h1: h1Count,
    h2: h2Count,
    extLinks: externalCount,
    imgs: imgs.length,
    imgsBadAlt: imgsMissingAlt,
    schemaCount: schemaTypes.size,
    fails: fails.length ? fails : ['PASS'],
  };
}

async function main() {
  console.log('SEO audit — RestaurantCalcs\n');
  const results = await Promise.all(URLS.map(audit));
  for (const r of results) {
    const status = r.fails[0] === 'PASS' ? '✓' : '✗';
    console.log(`${status} ${r.url}`);
    console.log(`   title=${r.title} desc=${r.desc} h1=${r.h1} h2=${r.h2} ext=${r.extLinks} imgs=${r.imgs} imgsBadAlt=${r.imgsBadAlt} schemas=${r.schemaCount}`);
    if (r.fails[0] !== 'PASS') console.log(`   gaps: ${r.fails.join(', ')}`);
  }
  const passed = results.filter((r) => r.fails[0] === 'PASS').length;
  console.log(`\n${passed}/${results.length} pages pass`);
}

main();
