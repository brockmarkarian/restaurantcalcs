#!/usr/bin/env node
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'public', 'patterns');

const SOURCES = [
  { slug: 'halftone-dots', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_211718_f9844662-b8e1-412a-8442-765483d51b63.png', maxW: 1600, q: 78 },
  { slug: 'topo-lines', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_211721_2664c541-92c9-46c6-80ec-f169586913bc.png', maxW: 1600, q: 78 },
  { slug: 'tally-marks', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_211723_a665b914-6e70-4f29-9085-6141d8670923.png', maxW: 1600, q: 78 },
  { slug: 'bar-tools-motif', url: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CHfa7KXY1QMcURyCkOtv2444uF/hf_20260501_211727_645dfc85-bd43-4a9d-bcc7-52b0f93d84c8.png', maxW: 1600, q: 78 },
];

async function processOne({ slug, url, maxW, q }) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed fetch ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const webpPath = join(outDir, `${slug}.webp`);
  await sharp(buf).resize(maxW, null, { withoutEnlargement: true }).webp({ quality: q }).toFile(webpPath);
  console.log(`[patterns] ${slug}.webp`);
}

async function main() {
  await mkdir(outDir, { recursive: true });
  for (const s of SOURCES) {
    try { await processOne(s); }
    catch (err) { console.error(`[patterns] ${s.slug} failed:`, err.message); }
  }
  console.log('[patterns] done');
}

main();
