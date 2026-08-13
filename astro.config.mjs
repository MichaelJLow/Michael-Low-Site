import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/** Design sandboxes and soft-redirect URLs stay out of the sitemap. */
const excludedFromSitemap = (page) =>
  page.includes('/404') ||
  page.includes('-lab') ||
  page.includes('/work/') ||
  page.includes('/systems/') ||
  page.includes('/capabilities');

export default defineConfig({
  site: 'https://www.workwithlayer.com',
  redirects: {
    '/work': '/how-i-work',
    '/systems/invoiceflow-ap': '/insights/invoice-processing-automation',
    '/insights/invoice-and-document-processing': '/insights/invoice-processing-automation',
    '/insights/opsdesk-shared-inbox-control': '/insights/shared-inbox-routing-and-approval',
    '/insights/marketing-operations-workflow': '/insights/marketing-content-engine',
    '/insights/lead-qualification-and-follow-up': '/insights/sales-opportunity-intelligence',
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
