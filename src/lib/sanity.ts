import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImage } from '../types/cms';

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET;
export const sanityClient = projectId && dataset ? createClient({ projectId, dataset, apiVersion: import.meta.env.SANITY_API_VERSION ?? '2024-05-12', useCdn: import.meta.env.SANITY_USE_CDN !== 'false' }) : null;
const builder = projectId && dataset ? imageUrlBuilder({ projectId, dataset }) : null;
export function buildSanityImageUrl(image: SanityImage, options: { width: number; quality?: number }) {
  if (!builder || !image?.asset?._ref) return undefined;
  return builder.image(image).width(options.width).quality(options.quality ?? 80).auto('format').url();
}
