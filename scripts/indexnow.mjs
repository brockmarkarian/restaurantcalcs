#!/usr/bin/env node
/**
 * IndexNow ping — submits all URLs in the built sitemap to IndexNow.
 * Bing, Yandex, Naver, Seznam pick up the ping.
 *
 * Usage: node scripts/indexnow.mjs
 * Reads INDEXNOW_KEY, INDEXNOW_KEY_LOCATION, SITE_URL from .env
 */

import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

async function loadEnv() {
  try {
    const envText = await readFile(join(root, '.env'), 'utf-8');
    for (const line of envText.split('\n')) {
      const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
    }
  } catch {
    // .env optional
  }
}

await loadEnv();

const KEY = process.env.INDEXNOW_KEY;
const KEY_LOCATION = process.env.INDEXNOW_KEY_LOCATION;
const SITE_URL = process.env.SITE_URL;

if (!KEY || !KEY_LOCATION || !SITE_URL) {
  console.error('[indexnow] missing INDEXNOW_KEY / INDEXNOW_KEY_LOCATION / SITE_URL in .env');
  process.exit(0);
}

const host = new URL(SITE_URL).host;

async function getUrlsFromSitemap() {
  try {
    const sitemapPath = join(root, 'dist', 'client', 'sitemap-0.xml');
    const xml = await readFile(sitemapPath, 'utf-8');
    const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
    return matches;
  } catch (e) {
    console.error('[indexnow] could not read sitemap:', e.message);
    return [SITE_URL + '/'];
  }
}

const urlList = await getUrlsFromSitemap();
if (!urlList.length) process.exit(0);

console.log(`[indexnow] submitting ${urlList.length} URL(s)`);
for (const u of urlList.slice(0, 10)) console.log(`  - ${u}`);
if (urlList.length > 10) console.log(`  ...and ${urlList.length - 10} more`);

const payload = { host, key: KEY, keyLocation: KEY_LOCATION, urlList };

try {
  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (res.ok || res.status === 202) {
    console.log(`[indexnow] OK HTTP ${res.status} — pinged Bing / Yandex / Naver / Seznam`);
  } else {
    const txt = await res.text();
    console.error(`[indexnow] failed HTTP ${res.status}: ${txt.slice(0, 200)}`);
  }
} catch (e) {
  console.error('[indexnow] request error:', e.message);
}
