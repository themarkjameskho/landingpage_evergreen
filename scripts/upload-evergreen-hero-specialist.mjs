import fs from 'node:fs';
import { createClient } from '@sanity/client';

const projectId = 'led01j89';
const dataset = 'production';
const draftId = 'drafts.evergreen-bed-bug-landing-page';
const imagePath = '/Users/Mark/Downloads/evergreen_bedbug_treatment_specialist.png';

if (process.env.SANITY_PROJECT_ID !== projectId || process.env.SANITY_DATASET !== dataset) {
  throw new Error('Refusing to target an unexpected Sanity project or dataset.');
}
if (!process.env.SANITY_API_TOKEN) throw new Error('SANITY_API_TOKEN is required.');
if (!fs.existsSync(imagePath)) throw new Error(`Image not found: ${imagePath}`);

const client = createClient({ projectId, dataset, apiVersion: '2025-09-15', useCdn: false, token: process.env.SANITY_API_TOKEN, perspective: 'raw' });
const current = await client.fetch(`*[_id == $id][0]{_id,_rev,sections}`, { id: draftId });
if (!current) throw new Error('Landing-page draft is missing.');

const heroIndex = current.sections.findIndex((section) => section._key === 'landing-hero');
if (heroIndex < 0) throw new Error('Landing hero section is missing.');

const asset = await client.assets.upload('image', fs.createReadStream(imagePath), {
  filename: 'evergreen-bedbug-treatment-specialist.png',
  contentType: 'image/png'
});

const sections = structuredClone(current.sections);
sections[heroIndex].sideImage = {
  _type: 'image',
  asset: { _type: 'reference', _ref: asset._id },
  alt: 'EverGreen bed bug treatment specialist'
};
delete sections[heroIndex].backgroundImage;

await client.patch(draftId, { ifRevisionID: current._rev }).set({ sections }).commit({ visibility: 'sync' });
const readback = await client.fetch(`*[_id == $id][0]{_id,_rev,"hero":sections[_key == "landing-hero"][0]{sideImage,backgroundImage}}`, { id: draftId });
if (readback?.hero?.sideImage?.asset?._ref !== asset._id || readback?.hero?.backgroundImage) throw new Error('Hero image draft readback failed.');

console.log(JSON.stringify({ mode: 'draft only', draftId, assetId: asset._id, hero: readback.hero }, null, 2));
