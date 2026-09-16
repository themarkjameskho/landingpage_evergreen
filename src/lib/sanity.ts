import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImage } from '../types/cms';

const runtimeEnv = (globalThis as typeof globalThis & { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {};
const firstNonEmpty = (...values: Array<string | undefined>) => values.find((value) => value?.trim());
const projectId = firstNonEmpty(
  import.meta.env.SANITY_PROJECT_ID,
  import.meta.env.SANITY_API_PROJECT_ID,
  import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  runtimeEnv.SANITY_PROJECT_ID,
  runtimeEnv.SANITY_API_PROJECT_ID,
  runtimeEnv.PUBLIC_SANITY_PROJECT_ID
) ?? 'led01j89';
const dataset = firstNonEmpty(
  import.meta.env.SANITY_DATASET,
  import.meta.env.SANITY_API_DATASET,
  import.meta.env.PUBLIC_SANITY_DATASET,
  runtimeEnv.SANITY_DATASET,
  runtimeEnv.SANITY_API_DATASET,
  runtimeEnv.PUBLIC_SANITY_DATASET
) ?? 'production';
const apiVersion = firstNonEmpty(
  import.meta.env.SANITY_API_VERSION,
  runtimeEnv.SANITY_API_VERSION
) ?? '2024-05-12';
const previewDrafts = (import.meta.env.SANITY_PREVIEW_DRAFTS ?? runtimeEnv.SANITY_PREVIEW_DRAFTS) === 'true'
  || (import.meta.env.DEV && Boolean(runtimeEnv.SANITY_API_TOKEN));
const token = previewDrafts
  ? (import.meta.env.SANITY_API_READ_TOKEN ?? runtimeEnv.SANITY_API_READ_TOKEN ?? runtimeEnv.SANITY_API_TOKEN)
  : undefined;
export const sanityClient = createClient({ projectId, dataset, apiVersion, useCdn: !previewDrafts && import.meta.env.SANITY_USE_CDN !== 'false', perspective: previewDrafts ? 'drafts' : 'published', token });
const builder = projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null;
export function buildSanityImageUrl(image: SanityImage, options: { width: number; height?: number; quality?: number; fit?: 'crop' | 'clip' }) {
  if (!builder || !image?.asset?._ref) return undefined;
  let request = builder.image(image).width(options.width).quality(options.quality ?? 80).auto('format');
  if (options.height) request = request.height(options.height);
  if (options.fit) request = request.fit(options.fit);
  return request.url();
}
