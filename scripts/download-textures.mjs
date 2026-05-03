#!/usr/bin/env node
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'public', 'textures');

const SOURCES = [
  { slug: 'paper-grain', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_200002_e7a16dcf-2c8b-484d-8365-4585a5b2e4bd.png', maxW: 1600, q: 75 },
  { slug: 'coffee-ring', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_200005_539454be-4379-47a5-8d20-7427f438cfdf.png', maxW: 600, q: 82 },
  { slug: 'dark-bar-wood', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_200008_d1dd39b7-4b5b-4f9d-b6b2-2c2cd7bb5aaa.png', maxW: 1600, q: 75 },
  { slug: 'bar-tools-flatlay', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_200011_b58b43c9-3ff2-4176-964f-bc2c4ca0760c.png', maxW: 1600, q: 82 },
  { slug: 'receipt-strip', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_200014_1bfe6d3c-8b6c-46b1-97e7-f1b216c173f8.png', maxW: 1600, q: 80 },
];

async function processOne({ slug, url, maxW, q }) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed fetch ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const webpPath = join(outDir, `${slug}.webp`);
  await sharp(buf).resize(maxW, null, { withoutEnlargement: true }).webp({ quality: q }).toFile(webpPath);
  console.log(`[textures] ${slug}.webp`);
}

async function main() {
  await mkdir(outDir, { recursive: true });
  for (const s of SOURCES) {
    try { await processOne(s); }
    catch (err) { console.error(`[textures] ${s.slug} failed:`, err.message); }
  }
  console.log('[textures] done');
}

main();
