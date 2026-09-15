# Evergreen Live Landing-Page Mapping Plan

Status: Mapping plan; no CMS writes or publication
Source: https://www.evergreenbedbugs.com/
Observed: 2026-09-15
Target repository: `/Volumes/juandemarkho/Projects/landing_page_Evergreen`
Shared CMS: Existing Evergreen Sanity project, `production` dataset

## Purpose

Rebuild the live landing page as a minimal Astro/Sanity page in the separate landing-page repository while preserving the approved Evergreen website elements. The repository owns components, layout, queries, and styles. Sanity owns page copy, image references, SEO metadata, and approved embeds. Image files must not be copied into this repository.

## Live page inventory

| Order | Live content block | Observed content/function | Target implementation | Sanity data needed | Status |
|---|---|---|---|---|---|
| 1 | Header/navigation | Evergreen logo, Home, Bed Bug Treatment, Reviews, click-to-call `(479) 397-3936` | Reuse website header/navigation pattern; copy only required component code | Logo reference or approved shared logo treatment; nav links; phone | Needs component extraction |
| 2 | Hero | “Sleep Soundly Again. We’ll Handle the Rest.”, web special graphic/offer, supporting paragraph, treatment image | Existing `HeroSection.astro`, adapted for the landing-page layout | H1, subtitle, approved offer/coupon, background image reference + alt text, CTA destination | Copy/source review required |
| 3 | Why Choose EverGreen | Image plus six proof/value items: experience, locally owned, discretion, technology, warranty, same-day service | `TwoColTextImageSection.astro` plus `IconGridSection.astro`, or one landing-specific composition using existing atoms | Image reference + alt text; six icons, titles, descriptions; warranty/same-day claims approval | Component mapping required |
| 4 | Specialized Treatments | Heat Treatment and Chemical Treatment cards with descriptions, bullets, and “Read more” links | `ServiceGridSection.astro` or a minimal treatment-card composition | Two treatment items, icons/images, body copy, bullets, canonical link | Copy/source review required |
| 5 | Solutions for Every Space | Residential Services and Commercial Services cards alternating with two images | `ImageCardSection.astro`/`AreasSection.astro` pattern, using Sanity image references | Two audience cards, two image references + alt text, bullets | Component mapping required |
| 6 | FAQ | Nine bed-bug/heat-treatment questions and answers over a dark image background | Existing `FaqSection.astro` with background image | FAQ items, background image reference + alt text | Claims require evidence review |
| 7 | Financing | “Flexible Financing Available,” Wisetack copy, external application CTA, financing graphic | Existing `TwoColTextImageSection.astro` or a constrained landing-specific variant | Approved copy, Wisetack URL, image reference + alt text | External link must be verified |
| 8 | Customer Reviews | Review heading with an empty/externally rendered review area in the observed page | Existing review/embed contract if available; otherwise a bounded Sanity embed slot | Review code from Mark, provider identity, approved review content/source | BLOCKED pending review code |
| 9 | Trust strip | “90 Day Warranty” and “Same Day Service” proof items | `TrustBarSection.astro` or `IconGridSection.astro` | Approved claims, icons, supporting text | Claims approval required |
| 10 | Footer | Logo, service area text, phone, copyright | Existing footer/layout pattern | Logo reference or shared asset treatment, NAP, phone, legal links | NAP and legal inputs required |

## Recommended Sanity document

Create one existing `page` document in the shared Studio:

```text
pageType: landing-page
slug: landing-page
title: [approved internal/page title]
sections:
  - heroSection
  - twoColTextImageSection / iconGridSection
  - serviceGridSection
  - areasSection or landing-specific solutions section
  - faqSection
  - twoColTextImageSection
  - approved review embed section
  - trustBarSection
```

The existing Studio must first add `landing-page` to the `pageType` options. That is a separate, approval-gated change in the existing Evergreen repository. Do not create a second Sanity project or a second Studio for this landing page.

## Component reuse plan

Reuse or adapt the existing Evergreen website patterns from `evergreen_lawn_pest`:

- `src/components/navigation/SiteHeader.astro`
- `src/components/sections/HeroSection.astro`
- `src/components/sections/TwoColTextImageSection.astro`
- `src/components/sections/IconGridSection.astro`
- `src/components/sections/ServiceGridSection.astro`
- `src/components/sections/FaqSection.astro`
- `src/components/sections/TrustBarSection.astro`
- `src/components/sections/SectionRenderer.astro`
- shared layout, button, typography, and design-token styles

Copy only the code required by this page and adapt it to this repository’s contracts. Do not copy `public/` image files. Sanity image objects must retain crop/hotspot data and generate CDN URLs with stable dimensions.

## Review-code dependency

When the review code is supplied:

1. Identify the provider and whether it is an iframe, script, or markup embed.
2. Confirm the source, review count/rating, and whether it is approved for display.
3. Choose the safe implementation contract (prefer a bounded embed slot or approved Sanity-managed embed field).
4. Keep third-party scripts isolated and document privacy/performance impact.
5. Verify the rendered review section at desktop and narrow mobile widths without submitting or altering the provider account.

Until then, the review section remains `BLOCKED`; no ratings, testimonials, or review counts should be invented or hardcoded.

## Evidence and open items

- Live structure and visible copy were observed from the public homepage on 2026-09-15.
- The live page contains claims requiring source/owner approval, including “10+ Years,” “90 Day Warranty,” “Same Day Service,” treatment efficacy, EPA-related language, and financing language.
- The live page’s FAQ includes medical/psychological and efficacy claims; preserve as source material only until reviewed.
- Confirm the production phone, service-area wording, NAP, legal links, offer terms, financing destination, and canonical landing-page URL.
- Confirm whether the landing page should retain the live page’s current navigation and footer or use a campaign-specific reduced layout.
- Confirm the desired form and lead destination before adding any form component.

## Acceptance checks for the mapping phase

- Every live block has an explicit target component or an identified new component.
- Every image is represented as a Sanity image reference with alt text and dimensions; no image file is stored in the repo.
- Every public claim has an evidence/approval owner before customer-facing copy is finalized.
- Review integration remains blocked until the review code and provider/source are supplied.
- The landing repo can query only `pageType == "landing-page"` and the configured slug.
- No Sanity document is written and no live page is changed by this mapping step.
