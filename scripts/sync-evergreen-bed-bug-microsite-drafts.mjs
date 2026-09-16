import { createClient } from '@sanity/client';

const APPLY_FLAG = '--apply-drafts';
const apply = process.argv.includes(APPLY_FLAG);
const projectId = 'led01j89';
const dataset = 'production';
const expectedHomeRevision = 'E0G8RNyVcKW2onHF5DUJCj';
const token = process.env.SANITY_API_TOKEN;

if (process.env.SANITY_PROJECT_ID !== projectId || process.env.SANITY_DATASET !== dataset) throw new Error('Refusing to target an unexpected Sanity project or dataset.');
if (apply && !token) throw new Error('SANITY_API_TOKEN is required for --apply-drafts. No content was changed.');

const client = createClient({ projectId, dataset, apiVersion: '2025-09-15', useCdn: false, token, perspective: 'raw' });
const image = (ref, alt) => ({ _type: 'image', asset: { _type: 'reference', _ref: ref }, alt });
const assets = {
  hero: 'image-d7f4d59ae471e26b6afa007731abd55ee2b7befc-1024x768-png',
  inspection: 'image-d7f4d59ae471e26b6afa007731abd55ee2b7befc-1024x768-png',
  heat: 'image-d7f4d59ae471e26b6afa007731abd55ee2b7befc-1024x768-png',
  treatment: 'image-d7f4d59ae471e26b6afa007731abd55ee2b7befc-1024x768-png',
  residential: 'image-d7f4d59ae471e26b6afa007731abd55ee2b7befc-1024x768-png',
  commercial: 'image-d7f4d59ae471e26b6afa007731abd55ee2b7befc-1024x768-png',
  preparation: 'image-d7f4d59ae471e26b6afa007731abd55ee2b7befc-1024x768-png',
  financing: 'image-4673dffdefe4f0c3927564f72e3ce6894774a464-1024x768-png',
  assessment: 'image-d7f4d59ae471e26b6afa007731abd55ee2b7befc-1024x768-png'
  ,bedBugIcon: 'image-029308604d99a0b48a71efa8e28d7740e0303a2a-256x256-svg'
};
const block = (text, key) => [{ _type: 'block', _key: key, style: 'normal', markDefs: [], children: [{ _type: 'span', _key: `${key}-text`, text }] }];
const pending = 'Source copy from the current live page. Claims and offer details remain draft-only until owner approval.';

const home = {
  title: 'EverGreen Bed Bug Exterminator', slug: { _type: 'slug', current: 'landing-page' }, pageType: 'landing-page', architectureType: 'supporting',
  seo: { seoTitle: 'EverGreen Bed Bug Exterminator | Sleep Soundly Again', seoDescription: 'Explore EverGreen bed bug treatment options for homes and businesses. Call to discuss the next step for your property.' },
  sourceNotes: pending,
  sections: [
    { _key:'landing-hero', _type:'heroSection', title:"Sleep Soundly Again. We'll Handle the Rest.", subtitle:"Reclaiming your home from bed bugs shouldn't feel like a battle you have to fight alone.", primaryCtaLabel:'Call (479) 397-3936', primaryCtaLink:'tel:+14793973936', secondaryCtaLabel:'Explore Treatment Options', secondaryCtaLink:'/bed-bug-treatment/', backgroundImage:image(assets.hero,'EverGreen bed bug treatment service.') },
    { _key:'why-evergreen', _type:'twoColTextImageSection', title:'Why Choose EverGreen?', subtitle:"We aren't just another pest control company. We are your local specialists in total bed bug eradication.", description:block(pending,'why-copy'), images:[image(assets.inspection,'Technician inspecting the edge of a mattress with a flashlight.')], imagePlacement:'imageLeft' },
    { _key:'proof-points', _type:'iconGridSection', title:'Why Choose EverGreen?', items:[
      { _key:'experience', label:'10+ Years of Experience', description:'A decade of refined techniques and proven results.' },
      { _key:'local', label:'Locally Owned & Operated', description:'We understand our community’s needs and provide personalized, neighborly service.' },
      { _key:'discretion', label:'Total Discretion', description:'Our unmarked, discreet vehicles ensure your business remains your business.' },
      { _key:'technology', label:'Cutting-Edge Tech', description:'We utilize advanced technology to detect and destroy bed bugs at every life cycle stage.' },
      { _key:'warranty', label:'90 Day Warranty', description:'A decade of refined techniques and proven results.' },
      { _key:'same-day', label:'Same Day Service', description:'A decade of refined techniques and proven results.' }
    ]},
    { _key:'treatments', _type:'serviceGridSection', title:'Our Specialized Treatments', subtitle:'Every infestation is unique. We offer tailored solutions to fit your specific environment and urgency.', desktopColumns:2, items:[
      { _key:'heat', label:'Heat Treatment', description:'The gold standard for bed bug removal. We raise the temperature of your space to a level that is lethal to bed bugs but safe for your belongings.', image:image(assets.heat,'Bed bug heat treatment equipment set up by EverGreen.'), icon:image(assets.bedBugIcon,'Bed bug treatment icon.'), imageDisplay:'landscape', linkLabel:'Explore treatment', linkUrl:'/bed-bug-treatment/' },
      { _key:'chemical', label:'Chemical Treatment', description:'A strategic, targeted approach using professional-grade, EPA-approved residuals.', image:image(assets.treatment,'EverGreen technician preparing treatment details.'), icon:image(assets.bedBugIcon,'Bed bug treatment icon.'), imageDisplay:'landscape', linkLabel:'Explore treatment', linkUrl:'/bed-bug-treatment/' }
    ]},
    { _key:'spaces', _type:'serviceGridSection', title:'Solutions for Every Space', subtitle:'Treatment planning for homes, businesses, and multi-family properties.', desktopColumns:2, items:[
      { _key:'residential', label:'Residential Services', description:"Protecting your sanctuary and your family's sleep. Specialized treatments for apartments and homes.", image:image(assets.residential,'Residential bed bug treatment setting.'), imageDisplay:'landscape' },
      { _key:'commercial', label:'Commercial Services', description:'Fast response for hotels, dorms, and care facilities. Discreet maintenance to protect your reputation.', image:image(assets.commercial,'Commercial bed bug treatment setting.'), imageDisplay:'landscape' }
    ]},
    { _key:'faq', _type:'faqSection', heading:"FAQ's", description:'Answers to common questions from the current live page.', layoutVariant:'twoColumn', image:image(assets.preparation,'Preparation details for bed bug treatment.'), buttonLabel:'Call (479) 397-3936', buttonLink:'tel:+14793973936', faqs:[
      { _key:'spread', question:'How are bedbugs spread?', answer:"Bedbugs are known hitchhikers, usually picked up and brought in from public or private establishments or visitors from places with a known infestation." },
      { _key:'life', question:'How long do bedbugs live?', answer:'9 to 12 months. Once they have a blood meal, they can survive up to nine months before feeding again.' },
      { _key:'eggs', question:'How many eggs can a female bed bug lay?', answer:'One to seven per day and 200 to 500 in her lifetime.' },
      { _key:'control', question:'Why are bed bugs difficult to control?', answer:'They reproduce rapidly and hide very well. They are also resistant to most over-the-counter products.' },
      { _key:'disease', question:'Do bedbugs transmit diseases?', answer:'No, but the bites can be itchy and can affect sleep and wellbeing.' },
      { _key:'heat', question:'Why is heat treatment effective?', answer:'Heat gets everywhere. Sustained temperatures above 120°F for over four hours will kill all life stages of the bed bug.' }
    ]},
    { _key:'financing', _type:'twoColTextImageSection', title:'Flexible Financing Available', subtitle:'Pre-qualify in minutes with no impact to your credit score. Flexible payment options available through Wisetack.', description:block(pending,'financing-copy'), images:[image(assets.financing,'EverGreen service consultation.')], ctaLabel:'Apply for Financing', ctaLink:'https://wisetack.us/#/c561eud/prequalify', imagePlacement:'imageRight' }
  ]
};
const treatment = {
  _id:'drafts.evergreen-bed-bug-treatment-page', _type:'page', title:'EverGreen Bed Bug Treatment', slug:{_type:'slug',current:'landing-bed-bug-treatment'}, pageType:'landing-page', architectureType:'supporting', sourceNotes:pending,
  seo:{seoTitle:'Bed Bug Treatment | EverGreen Bed Bug Exterminator',seoDescription:'Learn about heat and chemical bed bug treatment options from EverGreen.'},
  sections:[
    { _key:'treatment-hero', _type:'heroSection', title:'Reclaim Your Sleep. Guaranteed.', subtitle:"Don't wait for the problem to grow. Get a fast, free consultation from the local experts who care.", primaryCtaLabel:'Call (479) 397-3936', primaryCtaLink:'tel:+14793973936', sideImage:image(assets.heat,'EverGreen heat treatment equipment.') },
    { _key:'heat-treatment', _type:'twoColTextImageSection', title:'Bed Bug Heat Extermination', description:block('We use specialized, industrial-grade heaters to raise the temperature of your home to a consistent 48°C to 52°C (120°F to 140°F). This temperature is lethal to bed bugs at every stage of life, including the eggs.','heat-copy'), images:[image(assets.assessment,'Bed bug treatment assessment.')], imagePlacement:'imageRight' },
    { _key:'heat-benefits', _type:'iconGridSection', title:'Why Choose Heat?', items:[
      { _key:'eco', label:'Eco-Friendly', description:'No chemicals, no residues, and no need to throw away your furniture.', icon:image(assets.bedBugIcon,'Bed bug treatment icon.') }, { _key:'penetration', label:'Total Penetration', description:"Heat reaches deep into wall voids, floorboards, and mattress seams where sprays can't.", icon:image(assets.bedBugIcon,'Bed bug treatment icon.') }, { _key:'turnaround', label:'Fast Turnaround', description:'You can return to your home the very same evening.', icon:image(assets.bedBugIcon,'Bed bug treatment icon.') }, { _key:'single', label:'Single Visit Solution', description:'High success rate in a single application.', icon:image(assets.bedBugIcon,'Bed bug treatment icon.') }
    ]},
    { _key:'chemical-treatment', _type:'twoColTextImageSection', title:'Chemical Treatment', description:block('For specific infestations or budget-conscious plans, we use EPA-approved, low-toxicity residuals. Our technicians apply these treatments to the exact harborage points where bed bugs hide and travel.','chemical-copy'), images:[image(assets.treatment,'EverGreen treatment detail.')], ctaLabel:'Call (479) 397-3936', ctaLink:'tel:+14793973936', imagePlacement:'imageLeft' },
    { _key:'chemical-benefits', _type:'iconGridSection', title:'Key Benefits', items:[
      { _key:'protection', label:'Long-Term Protection', description:'Provides a protective barrier that continues to work for weeks after application.', icon:image(assets.bedBugIcon,'Bed bug treatment icon.') }, { _key:'budget', label:'Budget-Friendly', description:'A cost-effective alternative for localized or early-stage infestations.', icon:image(assets.bedBugIcon,'Bed bug treatment icon.') }, { _key:'strategic', label:'Strategic Application', description:"We use a rotating series of professional-grade formulas to help prevent resistance.", icon:image(assets.bedBugIcon,'Bed bug treatment icon.') }, { _key:'safety', label:'Safety First', description:'Products are applied with precision to protect your family and pets.', icon:image(assets.bedBugIcon,'Bed bug treatment icon.') }
    ]}
  ]
};
const reviews = {
  _id:'drafts.evergreen-bed-bug-reviews-page', _type:'page', title:'Customer Reviews', slug:{_type:'slug',current:'landing-reviews'}, pageType:'landing-page', architectureType:'supporting', sourceNotes:'Draft-only review route. Approved review provider code is required before review content can be rendered.',
  seo:{seoTitle:'Customer Reviews | EverGreen Bed Bug Exterminator',seoDescription:'Read customer feedback for EverGreen Bed Bug Exterminator.'},
  sections:[{ _key:'reviews-intro', _type:'heroSection', title:'Customer Reviews', subtitle:"Our customers' feedback is valued." }]
};

const documents = [home, treatment, reviews];
const assetIds = Object.values(assets);
const existing = await client.fetch(`*[_id in ["drafts.evergreen-bed-bug-landing-page", "drafts.evergreen-bed-bug-treatment-page", "drafts.evergreen-bed-bug-reviews-page"]]{_id,_rev,title,"sectionCount":count(sections)}`);
const foundAssets = await client.fetch('*[_type == "sanity.imageAsset" && _id in $ids]._id', { ids:assetIds });
const missing = assetIds.filter((id) => !foundAssets.includes(id));
if (missing.length) throw new Error(`Missing allowlisted image assets: ${missing.join(', ')}`);
console.log(JSON.stringify({ mode:apply ? 'apply drafts only' : 'dry run', documents:documents.map((doc) => ({id:doc._id ?? 'drafts.evergreen-bed-bug-landing-page',slug:doc.slug.current,sections:doc.sections.length})), existing },null,2));
if (!apply) process.exit(0);
const currentHome = existing.find((doc) => doc._id === 'drafts.evergreen-bed-bug-landing-page');
const currentTreatment = existing.find((doc) => doc._id === treatment._id);
const currentReviews = existing.find((doc) => doc._id === reviews._id);
if (!currentHome || currentHome._rev !== expectedHomeRevision) throw new Error('Home draft changed since the last verified revision. Refusing to overwrite it.');
if (!currentTreatment || !currentReviews) throw new Error('Treatment or reviews draft is missing. Refusing to create a partial microsite update.');
await client.transaction()
  .patch('drafts.evergreen-bed-bug-landing-page', { ifRevisionID: expectedHomeRevision, set: home })
  .patch(treatment._id, { ifRevisionID: currentTreatment._rev, set: treatment })
  .patch(reviews._id, { ifRevisionID: currentReviews._rev, set: reviews })
  .commit({ visibility:'sync' });
const readback = await client.fetch(`*[_id in ["drafts.evergreen-bed-bug-landing-page", "drafts.evergreen-bed-bug-treatment-page", "drafts.evergreen-bed-bug-reviews-page"]] | order(_id asc) {_id,title,"slug":slug.current,pageType,"sectionCount":count(sections)}`);
if (readback.length !== 3 || readback.some((doc) => doc.pageType !== 'landing-page')) throw new Error('Draft readback failed.');
console.log(JSON.stringify({readback,published:await client.fetch('*[_id in ["evergreen-bed-bug-landing-page", "evergreen-bed-bug-treatment-page", "evergreen-bed-bug-reviews-page"]]{_id}')},null,2));
