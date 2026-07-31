import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/** Design sandboxes and utility routes stay out of search results. */
const excludedFromSitemap = (page) =>
  page.includes('/404') || page.includes('-lab') || page.includes('/work/');

export default defineConfig({
  site: 'https://michaeljlow.com',
  redirects: {
    '/work': '/how-i-work',
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !excludedFromSitemap(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
