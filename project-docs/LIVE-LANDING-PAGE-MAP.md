# Evergreen Live Landing-Page Mapping Plan

Status: Revised three-page microsite plan; no publication
Source: https://www.evergreenbedbugs.com/
Observed: 2026-09-15
Target repository: `/Volumes/juandemarkho/Projects/landing_page_Evergreen`
Shared CMS: Existing Evergreen Sanity project, `production` dataset

## Purpose

Rebuild the live landing page as a minimal Astro/Sanity page in the separate landing-page repository while preserving the approved Evergreen website elements. The repository owns components, layout, queries, and styles. Sanity owns page copy, image references, SEO metadata, and approved embeds. Image files must not be copied into this repository.

## Revised microsite architecture

The target is a three-route microsite, not a single long landing page.

| Route | Navigation label | Live source | Page job | Content sequence |
|---|---|---|---|---|
| `/` | Home | `https://www.evergreenbedbugs.com/` | Establish trust and guide a visitor to treatment details or a call | Header, hero, Why Choose EverGreen, treatment preview, solutions for every space, FAQ preview, financing, trust proof, footer |
| `/bed-bug-treatment/` | Bed Bug Treatment | `https://www.evergreenbedbugs.com/bed-bug-treatment/` | Explain heat and chemical treatment options | Header, treatment hero, heat treatment, why choose heat, chemical treatment, key benefits, call CTA, footer |
| `/reviews/` | Reviews | `https://www.evergreenbedbugs.com/reviews/` | Give reviews a dedicated destination | Header, Customer Reviews heading, approved review embed or cards, contact CTA, footer |

The primary desktop navigation remains Home, Bed Bug Treatment, Reviews, and the telephone CTA `(479) 397-3936`.

## Design implementation direction

This is a preserve-and-evolve redesign of the live microsite. The design will use the existing EverGreen visual system as its base and modernize the presentation without changing the information architecture or customer-facing copy sequence.

- Use the website repository's `evergreen-lawns-pest-logo.png` and `favicon.svg` in the landing repository. These are brand assets, not Sanity content images.
- Port the website's established layout rules, typography, buttons, navigation behavior, image framing, and responsive spacing into the landing repository. The original website repository remains unchanged.
- Use Sanity CDN images for all customer-facing photography and retain image crop and hotspot data. Do not copy customer-facing imagery into this repository.
- Use one dark evergreen visual theme with leaf green as the single conversion accent. Motion stays restrained and honors reduced-motion preferences.
- Recompose the home page as a more varied editorial sequence: strong image-led hero, proof grid, treatment split, audience panels, accordion FAQ, financing callout, and trust/footer. Avoid repeated generic card grids.

## Composition and image-placement spec

### Shared shell

| Area | Implementation |
|---|---|
| Header | A compact, single-line navigation bar using the EverGreen logo at left, Home / Bed Bug Treatment / Reviews in the center, and the phone CTA at right. On mobile, the phone CTA stays visible while navigation moves into a simple menu. |
| Visual language | Deep evergreen background system, white and pale-sage content surfaces, and leaf green for the single primary action. The site uses a consistent 14px card radius only when an image needs containment. Images are not rounded by default. |
| Image behavior | Every Sanity image uses its original crop/hotspot. Full-bleed and edge-to-edge images remain square-edged. Only contained editorial image panels use the shared 14px radius. |
| Motion | CSS-only fade/translate entry on hero and content groups, plus tactile button and card hover states. No decorative animation and no motion for users with reduced-motion enabled. |

### Home route `/`

```text
Desktop

┌──────────────────────────────────────────────────────────────────────┐
│ logo        Home  Bed Bug Treatment  Reviews             Call button │
├──────────────────────────────────────────────────────────────────────┤
│                         FULL-BLEED HERO IMAGE                        │
│      dark evergreen image wash, not a floating rounded photo         │
│                                                                      │
│  Sleep Soundly Again. We'll Handle the Rest.                         │
│  Supporting copy + primary call CTA + treatment-page link            │
├──────────────────────────────────────────────────────────────────────┤
│ WHY CHOOSE EVERGREEN                                                  │
│ wide editorial image (left 58%) | 2 x 3 proof tile field (right)    │
│ image is tall and flush with the section edge, not a rounded card    │
├──────────────────────────────────────────────────────────────────────┤
│ TREATMENTS                                                            │
│ full-width heat image band          | Heat details + link            │
│ Chemical details + link             | full-height chemical image     │
├──────────────────────────────────────────────────────────────────────┤
│ SOLUTIONS FOR EVERY SPACE                                              │
│ Residential: large landscape image panel | Commercial: dark text panel│
│ Residential: dark text panel                | Commercial: large image │
├──────────────────────────────────────────────────────────────────────┤
│ FAQ                                                                    │
│ photo strip across the top, then a two-column accordion below         │
├──────────────────────────────────────────────────────────────────────┤
│ FINANCING: pale-sage horizontal callout with compact illustration      │
├──────────────────────────────────────────────────────────────────────┤
│ warranty + same-day proof, footer                                      │
└──────────────────────────────────────────────────────────────────────┘
```

| Home section | Image placement | Why this treatment is used |
|---|---|---|
| Hero | One Sanity treatment image fills the entire hero behind a deep-green overlay. | The image establishes urgency and keeps the first viewport immersive, while the overlay guarantees readable text. |
| Why Choose EverGreen | One tall, edge-aligned lifestyle/treatment image occupies about 58% of the section. The six proof items form a compact 2 x 3 field beside it. | It gives the proof a visual anchor without turning every proof item into a card. |
| Specialized Treatments | Heat and chemical treatments are two full-width, opposing editorial bands. Each uses a large image on one side and text on the other. | The two choices are distinct enough to deserve their own moment. This is the only intentional split-layout pair. |
| Solutions for Every Space | A four-cell asymmetric grid: two real images and two dark information panels. | Residential and commercial services appear as a composed whole rather than two identical cards. |
| FAQ | A shallow, full-width Sanity image introduces the section. The questions sit below in two balanced accordion columns. | The image changes the rhythm before a text-heavy section. |
| Financing | A single horizontal callout with financing graphic at the far edge. | It is a conversion interruption, not another full visual section. |

Mobile collapse: hero stays image-led with the text over its lower third; proof tiles become a two-column grid; treatment bands stack image first then copy; the solutions grid becomes image-panel followed by its associated content panel; FAQ becomes one accordion column.

### Bed Bug Treatment route `/bed-bug-treatment/`

```text
┌──────────────────────────────────────────────────────────────────────┐
│ treatment hero: dark stage, wide equipment image cropped to right    │
│ Reclaim Your Sleep. Guaranteed. + call CTA                            │
├──────────────────────────────────────────────────────────────────────┤
│ heat treatment: full-bleed equipment image with overlaid title only   │
│ detailed heat copy and benefit list on the surface below              │
├──────────────────────────────────────────────────────────────────────┤
│ Why Choose Heat: four benefits arranged as an offset 2 + 2 field      │
├──────────────────────────────────────────────────────────────────────┤
│ Chemical Treatment: text-led dark panel paired with a vertical image  │
├──────────────────────────────────────────────────────────────────────┤
│ Key Benefits: compact icon list, final phone CTA, footer              │
└──────────────────────────────────────────────────────────────────────┘
```

The treatment page uses larger photographic stages and fewer containers. Heat is the visual lead. Chemical treatment is visually quieter so visitors can compare the two approaches without seeing a repeated mirrored layout.

### Reviews route `/reviews/`

```text
┌──────────────────────────────────────────────────────────────────────┐
│ dark editorial page header with Customer Reviews                      │
├──────────────────────────────────────────────────────────────────────┤
│ full-width, bounded review provider embed or approved Sanity cards    │
├──────────────────────────────────────────────────────────────────────┤
│ compact phone CTA and footer                                           │
└──────────────────────────────────────────────────────────────────────┘
```

The review provider content determines the final layout. Until the embed code arrives, the page will use a clearly bounded integration slot without invented ratings, review counts, or testimonials.

## Sanity image art direction

The following existing Sanity assets are selected for the initial build. They remain in Sanity and will be rendered from the CDN with source crop and hotspot metadata.

| Route and placement | Sanity asset | Intended treatment |
|---|---|---|
| Home hero | `image-9f9f1e64c47c3cfd88f63494f91b9f31f2f16da7-2882x1918-jpg` (`bedbug treatment.jpg`) | Full-bleed background with deep-green contrast overlay. |
| Why Choose EverGreen | `image-4673dffdefe4f0c3927564f72e3ce6894774a464-1024x768-png` (mattress edge inspection) | Tall left editorial panel. |
| Heat treatment preview | `image-d7f4d59ae471e26b6afa007731abd55ee2b7befc-1024x768-png` (heat treatment equipment) | Full-width treatment band. |
| Chemical treatment preview | `image-8d4156ace7cf2a498b5e5f7a1939ab8613eb0dbf-2882x1918-jpg` (`Treatment details pending .jpg`) | Right-side vertical treatment stage. |
| Residential solution | `image-8c6340019cd0f796ee059c13d614271db9f71441-2882x1918-jpg` (`residential.jpg`) | Large landscape panel in the solutions grid. |
| Commercial solution | `image-7ef1166fe2a05e9019b012d4de82ea56d30443fb-2882x1918-jpg` (`Commercial.jpg`) | Large landscape panel in the solutions grid. |
| FAQ image strip | `image-eb97ee42b4523df2e5f6c16f94cb2e9bb4a17a15-2882x1918-jpg` (`Preparation details pending .jpg`) | Shallow, edge-to-edge section introduction. |
| Financing callout | `image-7222832d1491fd6d1777fe4a5537240c14aa53a7-1024x768-png` (`Discuss the service options.png`) | Compact supporting visual, cropped to the far edge of the callout. |
| Treatment hero | `image-d7f4d59ae471e26b6afa007731abd55ee2b7befc-1024x768-png` (heat treatment equipment) | Wide right-cropped hero visual. |
| Heat detail stage | `image-4a45de1f7a38b424567ec1dc07d84d04ddc9fcc0-2882x1918-jpg` (`Assessment details pending .jpg`) | Full-width photographic stage before heat benefits. |
| Chemical detail stage | `image-8d4156ace7cf2a498b5e5f7a1939ab8613eb0dbf-2882x1918-jpg` (`Treatment details pending .jpg`) | Full-height supporting visual alongside chemical content. |

## Confirmed live-source content sequence

### Home

1. `Sleep Soundly Again. We'll Handle the Rest.` hero with treatment imagery and call CTA.
2. `Why Choose EverGreen?` with experience, locally owned operation, discretion, technology, warranty, and same-day service proof.
3. `Our Specialized Treatments` preview for Heat Treatment and Chemical Treatment, each linking to `/bed-bug-treatment/`.
4. `Solutions for Every Space` with Residential Services and Commercial Services.
5. `FAQ's` with the live questions and answers.
6. `Flexible Financing Available` with the approved Wisetack destination, pending source approval.
7. Warranty and same-day-service proof, pending claim approval.
8. Shared footer with Northwest Arkansas and Arkansas River Valley service area and click-to-call phone.

### Bed Bug Treatment

1. `Reclaim Your Sleep. Guaranteed.` treatment hero.
2. `Bed Bug Heat Extermination` explanation.
3. `Why Choose Heat?` benefits.
4. `Chemical Treatment` explanation.
5. `Key Benefits` for the chemical approach.
6. Call CTA and shared footer.

### Reviews

1. `Customer Reviews` heading.
2. `Our Customer's Feedback is Valued` content area.
3. Approved provider embed or approved Sanity review cards.
4. Call CTA and shared footer.

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

Create three draft `page` documents in the shared Studio, all using the existing
`page` schema and the segregated `landing-page` page type:

```text
home:             CMS slug landing-page,              public route /
treatment:        CMS slug landing-bed-bug-treatment, public route /bed-bug-treatment/
reviews:          CMS slug landing-reviews,           public route /reviews/
```

The existing Studio must first add `landing-page` to the `pageType` options. That
change is isolated to the existing Evergreen repository. Do not create a second
Sanity project or a second Studio for this landing page.

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
- The landing repo can query only `pageType == "landing-page"` and the three configured slugs.
- The three Sanity documents are draft-only; no published document or live page is changed.
