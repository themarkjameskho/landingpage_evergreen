import groq from 'groq';
import { productionSanityClient, sanityClient } from './sanity';
import type { LandingPage } from '../types/cms';

const defaultLandingPageSlug = import.meta.env.SANITY_LANDING_PAGE_SLUG ?? 'landing-page';
const landingPageQuery = groq`*[_type == "page" && pageType == "landing-page" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  seo,
  sections[]{...}
}`;

export async function getLandingPage(slug = defaultLandingPageSlug): Promise<LandingPage | null> {
  if (!sanityClient) return null;
  const page = await sanityClient.fetch<LandingPage | null>(landingPageQuery, { slug });
  if (page) return page;
  return productionSanityClient === sanityClient
    ? null
    : productionSanityClient.fetch<LandingPage | null>(landingPageQuery, { slug });
}
