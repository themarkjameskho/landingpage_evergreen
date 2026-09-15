# Evergreen landing page

Separate Astro repository for an Evergreen landing page. It reads approved page content and images from the existing Evergreen Sanity project; it does not contain a separate Studio or duplicate media library.

The live-page inventory and implementation plan are documented in [`project-docs/LIVE-LANDING-PAGE-MAP.md`](project-docs/LIVE-LANDING-PAGE-MAP.md).

## Local setup

1. Copy `.env.example` to `.env` and supply the shared Sanity project ID and dataset.
2. In the existing Evergreen Studio, add `landing-page` to the `pageType` list before creating the document.
3. Create a `page` document with `pageType: landing-page`, slug `landing-page` (or update `SANITY_LANDING_PAGE_SLUG`), SEO fields, and a `heroSection`.
4. Run `npm run dev`.

The root route is dynamic (`prerender = false`) so Vercel can serve Sanity-backed content with ISR after deployment. Local builds safely show a non-customer-facing setup state until the CMS configuration is present.

## Commands

```sh
npm run dev
npm run check
npm run build
```

## Boundaries

- GitHub remote, Vercel project, production domain, webhooks, forms, analytics, and published Sanity content are intentionally not configured yet.
- Do not add a full Studio to this repository unless editorial ownership changes. The shared Evergreen Studio remains the schema and content-authoring surface.
