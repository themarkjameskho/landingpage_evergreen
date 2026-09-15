// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://example.com',
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel({
    isr: {
      expiration: 60,
      bypassToken: process.env.SANITY_WEBHOOK_SECRET
    }
  }),
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }]
  }
});
