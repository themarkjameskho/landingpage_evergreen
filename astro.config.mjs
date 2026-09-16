// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

const defaultSiteUrl = 'https://landingpage-evergreen-hmstr-ai-306b1248.vercel.app';
const configuredSiteUrl = process.env.SITE_URL;
const configuredWebhookSecret = process.env.SANITY_WEBHOOK_SECRET;
let siteUrl = defaultSiteUrl;

if (configuredSiteUrl) {
  try {
    const parsedSiteUrl = new URL(configuredSiteUrl);

    if (parsedSiteUrl.protocol === 'http:' || parsedSiteUrl.protocol === 'https:') {
      siteUrl = parsedSiteUrl.toString().replace(/\/$/, '');
    }
  } catch {
    // Keep the known-valid deployment URL when SITE_URL is malformed.
  }
}

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  trailingSlash: 'always',
  output: 'static',
  adapter: vercel({
    isr: {
      expiration: 60,
      ...(configuredWebhookSecret && configuredWebhookSecret.length >= 32
        ? { bypassToken: configuredWebhookSecret }
        : {})
    }
  }),
  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }]
  }
});
