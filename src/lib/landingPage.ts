import groq from 'groq';
import { sanityClient } from './sanity';
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
  return sanityClient.fetch<LandingPage | null>(landingPageQuery, { slug });
}
