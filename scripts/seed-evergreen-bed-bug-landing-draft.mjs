import { createHash } from 'node:crypto';
import { createClient } from '@sanity/client';

const APPLY_FLAG = '--apply-draft';
const apply = process.argv.includes(APPLY_FLAG);
const PROJECT_ID = 'led01j89';
const DATASET = 'production';
const DOCUMENT_ID = 'evergreen-bed-bug-landing-page';
const token = process.env.SANITY_API_TOKEN;

if (process.env.SANITY_PROJECT_ID !== PROJECT_ID || process.env.SANITY_DATASET !== DATASET) {
  throw new Error(`Refusing to target ${process.env.SANITY_PROJECT_ID ?? 'missing'}/${process.env.SANITY_DATASET ?? 'missing'}.`);
}
if (apply && !token) throw new Error('SANITY_API_TOKEN is required for --apply-draft. No content was changed.');

const client = createClient({ projectId: PROJECT_ID, dataset: DATASET, apiVersion: '2024-05-12', useCdn: false, token, perspective: token ? 'raw' : 'published' });
const image = (id, alt) => ({ _type: 'image', asset: { _type: 'reference', _ref: id }, alt });
const assetIds = {
  heat: 'image-d7f4d59ae471e26b6afa007731abd55ee2b7befc-1024x768-png',
  inspection: 'image-4673dffdefe4f0c3927564f72e3ce6894774a464-1024x768-png',
  commercial: 'image-21efd0e27d4750c88326d2afdd333a3ebc76c44b-1024x768-png'
};

const draft = {
  _id: `drafts.${DOCUMENT_ID}`,
  _type: 'page',
  title: 'EverGreen Bed Bug Exterminator',
  slug: { _type: 'slug', current: 'landing-page' },
  pageType: 'landing-page',
  architectureType: 'supporting',
  primaryKeyword: 'bed bug treatment Arkansas',
  searchIntent: 'local',
  uniqueAngle: 'Campaign landing page for the dedicated EverGreen bed bug service, kept separate from the primary lawn and pest website.',
  sourceNotes: 'Draft-only implementation source. Public live page observed 2026-09-15. Claims, offer terms, financing, review code, service-area wording, and final canonical URL require owner approval before publication.',
  openItems: [
    'Confirm offer terms and whether the web special may be displayed.',
    'Approve experience, warranty, same-day service, technology, and financing claims.',
    'Provide approved reviews embed code and provider terms.',
    'Confirm form destination, legal links, service-area wording, and production canonical URL.'
  ],
  seo: {
    seoTitle: 'Bed Bug Treatment | EverGreen Bed Bug Exterminator',
    seoDescription: 'Explore EverGreen bed bug treatment options for homes and businesses. Call to discuss the next step for your property.'
  },
  sections: [
    {
      _key: 'landing-hero', _type: 'heroSection',
      title: 'Sleep Soundly Again. We’ll Handle the Rest.',
      subtitle: 'Specialized bed bug treatment for homes and businesses. Talk with EverGreen about the right next step for your property.',
      primaryCtaLabel: 'Call (479) 397-3936', primaryCtaLink: 'tel:+14793973936',
      secondaryCtaLabel: 'Explore Treatment Options', secondaryCtaLink: '#treatments',
      sideImage: image(assetIds.heat, 'EverGreen technician operating bed bug heat-treatment equipment.')
    },
    {
      _key: 'why-evergreen', _type: 'twoColTextImageSection',
      title: 'A clear plan for a stressful problem.',
      subtitle: 'EverGreen starts with the details of your property and the treatment approach that fits.',
      description: [{ _type: 'block', _key: 'why-copy', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 'why-copy-span', text: 'This draft keeps the focus on a thoughtful treatment conversation. Final claims and treatment expectations must be approved before this page is published.' }] }],
      images: [image(assetIds.inspection, 'EverGreen technician inspecting the edge of a mattress with a flashlight.')], imagePlacement: 'imageLeft', backgroundTheme: 'soft-green'
    },
    {
      _key: 'proof-points', _type: 'iconGridSection', title: 'Why customers choose EverGreen',
      subtitle: 'The following proof points are sourced from the current live landing page and remain pending approval for public use.', colorTheme: 'white', columns: 3,
      items: [
        { _key: 'experience', label: '10+ Years', description: 'Pending approval of experience claim.' },
        { _key: 'local', label: 'Locally Owned', description: 'Pending approval of ownership positioning.' },
        { _key: 'discretion', label: 'Total Discretion', description: 'Pending approval of service positioning.' },
        { _key: 'technology', label: 'Cutting-Edge Tech', description: 'Pending approval of technology claim.' },
        { _key: 'warranty', label: '90 Day Warranty', description: 'Pending approval of warranty terms.' },
        { _key: 'same-day', label: 'Same Day Service', description: 'Pending approval of availability claim.' }
      ]
    },
    {
      _key: 'treatments', _type: 'serviceGridSection', title: 'Specialized treatment options',
      subtitle: 'Discuss the right approach for your property with an EverGreen specialist.', backgroundVariant: 'softGreen', desktopColumns: 2,
      items: [
        { _key: 'heat', label: 'Heat Treatment', description: 'A treatment option to discuss with EverGreen for eligible properties.', image: image(assetIds.heat, 'Bed bug heat-treatment equipment set up by EverGreen.'), imageDisplay: 'landscape' },
        { _key: 'chemical', label: 'Chemical Treatment', description: 'A treatment option to discuss with EverGreen based on the needs of your property.', image: image(assetIds.inspection, 'EverGreen technician inspecting a mattress edge during a bed bug service.'), imageDisplay: 'landscape' }
      ]
    },
    {
      _key: 'spaces', _type: 'serviceGridSection', title: 'Solutions for every space',
      subtitle: 'Treatment conversations for homes, businesses, and multi-family properties.', backgroundVariant: 'white', desktopColumns: 2,
      items: [
        { _key: 'residential', label: 'Residential Services', description: 'Bed bug treatment planning for homes and residential properties.', image: image(assetIds.inspection, 'EverGreen technician inspecting a mattress edge in a residential setting.'), imageDisplay: 'landscape' },
        { _key: 'commercial', label: 'Commercial Services', description: 'Bed bug treatment planning for commercial and multi-family properties.', image: image(assetIds.commercial, 'EverGreen technician walking through a multi-family property exterior.'), imageDisplay: 'landscape' }
      ]
    },
    {
      _key: 'faq', _type: 'faqSection', heading: 'Questions about bed bug treatment?',
      description: 'These draft questions are intentionally general until the live-page treatment and efficacy language is reviewed.', colorTheme: 'darkGreen', buttonLabel: 'Call (479) 397-3936', buttonLink: 'tel:+14793973936',
      faqs: [
        { _key: 'faq-1', question: 'How do I get started?', answer: 'Call EverGreen to discuss the property and the next appropriate step.' },
        { _key: 'faq-2', question: 'Do you serve homes and businesses?', answer: 'This draft is structured for residential, commercial, and multi-family conversations. Confirm final service scope before publication.' },
        { _key: 'faq-3', question: 'Which treatment is right for my property?', answer: 'Treatment selection depends on the property and service assessment. EverGreen can explain the available options.' }
      ]
    }
  ]
};

const digest = createHash('sha256').update(JSON.stringify(draft)).digest('hex');
const [assets, published, existingDraft] = await Promise.all([
  client.fetch('*[_type == "sanity.imageAsset" && _id in $ids]._id', { ids: Object.values(assetIds) }),
  client.fetch('*[_id == $id][0]{_id,_rev,title}', { id: DOCUMENT_ID }),
  client.fetch('*[_id == $id][0]{_id,_rev,title,"slug":slug.current,pageType}', { id: draft._id })
]);
const missingAssets = Object.values(assetIds).filter((id) => !assets.includes(id));
if (missingAssets.length) throw new Error(`Missing allowlisted Sanity image assets: ${missingAssets.join(', ')}`);
if (published) throw new Error(`Refusing to create a draft because published ${DOCUMENT_ID} already exists.`);

console.log(`Target: ${PROJECT_ID}/${DATASET}`);
console.log(`Mode: ${apply ? 'create unpublished draft only' : 'dry-run only'}`);
console.log(`Draft ID: ${draft._id}`);
console.log(`Content SHA-256: ${digest}`);
console.log(`Sections: ${draft.sections.length}; images: ${assets.length}; existing draft: ${existingDraft ? 'yes' : 'no'}`);
if (!apply) process.exit(0);
if (existingDraft) throw new Error(`Draft ${draft._id} already exists. No overwrite was attempted.`);

await client.create(draft, { visibility: 'sync' });
const readback = await client.fetch('*[_id == $id][0]{_id,_type,title,"slug":slug.current,pageType,"sectionCount":count(sections)}', { id: draft._id });
if (!readback || readback._id !== draft._id || readback.pageType !== 'landing-page' || readback.sectionCount !== draft.sections.length) {
  throw new Error('Draft readback did not match the requested landing-page document.');
}
const publishedAfter = await client.fetch('*[_id == $id][0]{_id,_rev}', { id: DOCUMENT_ID });
if (publishedAfter) throw new Error('Published document unexpectedly appeared during draft creation.');
console.log(`Readback passed: ${readback.title} (${readback.sectionCount} sections). No published document was created or changed.`);
