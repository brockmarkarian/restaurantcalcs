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
