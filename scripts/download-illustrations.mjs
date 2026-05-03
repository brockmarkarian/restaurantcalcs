#!/usr/bin/env node
/**
 * Downloads Higgsfield-generated PNGs and converts to WebP for site use.
 * Output: public/illustrations/{slug}.webp
 */

import { writeFile, mkdir, unlink } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'public', 'illustrations');

const SOURCES = [
  { slug: 'food-cost', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_162512_f28675d9-fa1a-43de-82af-23a7197ae52f.png' },
  { slug: 'recipe-cost', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_162744_290c9b59-7a58-4ec1-9e24-6c1318cffcd2.png' },
  { slug: 'labor-cost', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_162747_ee15aedd-023d-4bc8-ac4c-672af560bab2.png' },
  { slug: 'tip-pool', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_162750_2c1c2ac8-dfe6-4257-908d-eef22784d66d.png' },
  { slug: 'menu-pricing', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_162753_2e159e16-6140-401f-a388-dff444551ae4.png' },
  { slug: 'liquor-pour-cost', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_190323_c134a7fa-9c98-4b1a-b5c3-e2397b286f3f.png' },
  { slug: 'break-even', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_190326_832cc19c-9ca4-463c-8b02-97e10e62f9c4.png' },
  { slug: 'inventory-variance', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_190329_087f3da3-ceff-4950-9048-b0b0292407ff.png' },
  { slug: 'blog-tip-pool-legal', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_190332_3b813a42-1df1-478c-b5e5-a69882413434.png' },
  { slug: 'blog-bar-pour-cost', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_190335_f73e49d6-8800-4aa4-a829-d72d5c0dde8e.png' },
  { slug: 'blog-flacos', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_190338_315c8827-fc8e-40d0-bffe-aa32cdd2d024.png' },
];

async function processOne({ slug, url }) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed fetch ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const webpPath = join(outDir, `${slug}.webp`);
  await sharp(buf).resize(1600, null, { withoutEnlargement: true }).webp({ quality: 82 }).toFile(webpPath);
  console.log(`[illustrations] ${slug}.webp written`);
}

async function main() {
  await mkdir(outDir, { recursive: true });
  for (const s of SOURCES) {
    try { await processOne(s); }
    catch (err) { console.error(`[illustrations] ${s.slug} failed:`, err.message); }
  }

  // Clean up the test PNG
  try { await unlink(join(outDir, 'test-food-cost.png')); } catch {}
  console.log('[illustrations] done');
}

main();
