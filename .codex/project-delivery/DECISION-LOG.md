# Decision Log

| Decision ID | Date | Context | Options | Decision | Trade-offs | Owner | Authority | Reconsideration trigger |
|---|---|---|---|---|---|---|---|---|
| DEC-001 | 2026-09-15 | Separate landing-page repository needs shared content and media | New Sanity project; duplicate Studio; existing Evergreen Sanity project | Reuse existing Evergreen Sanity project and dataset; add a `landing-page` page category in the existing Studio later | Requires explicit query isolation and a shared-schema update, but avoids duplicated content and media | Mark | User direction | Editorial ownership or security boundary changes |
| DEC-002 | 2026-09-15 | Existing Evergreen architecture is Astro 5 + Vercel adapter 9, while audit proposes breaking upgrades | Keep compatible baseline; upgrade to Astro 7 / Vercel 11 | Keep the compatible baseline for local foundation only | Build passes, but release is blocked by dependency audit findings | Mark | Codex local setup; release upgrade needs Mark direction | Before connecting Vercel or deploying |
