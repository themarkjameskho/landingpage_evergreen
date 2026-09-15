import groq from 'groq';
import { sanityClient } from './sanity';
import type { LandingPage } from '../types/cms';

const landingPageSlug = import.meta.env.SANITY_LANDING_PAGE_SLUG ?? 'landing-page';
const landingPageQuery = groq`*[_type == "page" && pageType == "landing-page" && slug.current == $slug][0]{ title, "slug": slug.current, "seo": { "seoTitle": seo.seoTitle, "seoDescription": seo.seoDescription }, "sections": sections[_type == "heroSection"]{ _type, title, subtitle, primaryCtaLabel, primaryCtaLink, backgroundImage } }`;
export async function getLandingPage(): Promise<LandingPage | null> {
  if (!sanityClient) return null;
  return sanityClient.fetch<LandingPage | null>(landingPageQuery, { slug: landingPageSlug });
}
