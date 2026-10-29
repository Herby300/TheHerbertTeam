import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { readdirSync, readFileSync } from 'node:fs';

// Blog post dates for sitemap <lastmod>. Read straight from frontmatter so the
// sitemap only claims a change when a post was actually published or updated.
const blogDir = new URL('./src/content/blog/', import.meta.url);
const blogLastmod = new Map();
for (const file of readdirSync(blogDir)) {
  if (!/\.(md|mdx)$/.test(file)) continue;
  const text = readFileSync(new URL(file, blogDir), 'utf8');
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
  if (/^draft:\s*true/m.test(fm)) continue;
  const field = (name) => fm.match(new RegExp(`^${name}:\\s*['"]?([0-9]{4}-[0-9]{2}-[0-9]{2})`, 'm'))?.[1];
  const date = field('updatedDate') ?? field('pubDate');
  if (date) blogLastmod.set(file.replace(/\.(md|mdx)$/, ''), date);
}
const newestPost = [...blogLastmod.values()].sort().at(-1);

export default defineConfig({
  site: 'https://www.theherbertteam.com',
  // One URL per page: /about/ (not /about). vercel.json redirects the
  // slashless form, and every internal link uses the trailing slash.
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap({
      // Keep the noindex confirmation pages out of the sitemap.
      filter: (page) => !page.includes('/thank-you'),
      serialize(item) {
        const path = new URL(item.url).pathname;
        const slug = path.match(/^\/blog\/([^/]+)\/$/)?.[1];
        if (slug && blogLastmod.has(slug)) item.lastmod = blogLastmod.get(slug);
        else if (path === '/blog/' && newestPost) item.lastmod = newestPost;
        return item;
      },
    }),
    mdx(),
  ],
  output: 'static',
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      // Emit one CSS file site-wide — avoids duplicate Tailwind utility chunks
      // (about.* + _slug_.*) on the homepage critical path.
      cssCodeSplit: false,
    },
  },
});
