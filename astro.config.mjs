// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { execSync } from 'node:child_process';
import { readFileSync, readdirSync, existsSync } from 'node:fs';

// Real per-URL lastmod for the sitemap: posts use updatedDate/pubDate from
// frontmatter, other pages use the last git commit that touched their source.
const postDates = {};
for (const f of readdirSync('./src/content/blog').filter((f) => f.endsWith('.md'))) {
  const fm = readFileSync(`./src/content/blog/${f}`, 'utf8').split('---')[1] || '';
  const d = (fm.match(/^updatedDate:\s*"?([\d-]+)/m) || fm.match(/^pubDate:\s*"?([\d-]+)/m) || [])[1];
  if (d) postDates[f.replace(/\.md$/, '')] = d;
}
const newestPost = Object.values(postDates).filter((d) => new Date(d) <= new Date()).sort().pop();
const gitDate = (file) => {
  try { return existsSync(file) ? execSync(`git log -1 --format=%cs -- "${file}"`).toString().trim() || undefined : undefined; }
  catch { return undefined; }
};
function lastmodFor(url) {
  const path = new URL(url).pathname;
  const post = path.match(/^\/blog\/([^/]+)\/$/);
  if (post) return postDates[post[1]];
  if (path === '/' || path === '/blog/') return newestPost;
  const page = path === '/calculators/' ? 'src/pages/calculators/index.astro' : `src/pages${path.replace(/\/$/, '')}.astro`;
  return gitDate(page);
}

export default defineConfig({
  site: 'https://restaurantcalcs.com',
  adapter: cloudflare(),
  // Inline the CSS so no stylesheet blocks the first paint (styles are small per page)
  build: { inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        const d = lastmodFor(item.url);
        if (d) item.lastmod = new Date(d).toISOString(); else delete item.lastmod;
        return item;
      },
    }),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          // Astro names page CSS like "food-cost@_@astro.[hash].css". Cloudflare
          // 307s the "@" URL to its %40 form and Chrome loops on it, so the
          // stylesheet never loads. Swap "@" for "_" in every emitted name.
          assetFileNames: (info) => `_astro/${(info.names?.[0] ?? info.name ?? 'asset').replace(/@/g, '_').replace(/\.[^.]+$/, '')}.[hash][extname]`,
        },
      },
    },
  },
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: { className: ['anchor-link'], 'aria-label': 'Section permalink' },
          content: { type: 'text', value: ' #' },
        },
      ],
    ],
  },
});
