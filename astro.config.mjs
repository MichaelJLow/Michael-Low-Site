import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/** Design sandboxes and soft-redirect URLs stay out of the sitemap. */
const excludedFromSitemap = (page) =>
  page.includes('/404') ||
  page.includes('-lab') ||
  page.includes('/work/') ||
  page.includes('/systems/');

export default defineConfig({
  site: 'https://www.workwithlayer.com',
  redirects: {
    '/work': '/how-i-work',
    '/systems/invoiceflow-ap': '/insights/invoice-and-document-processing',
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
