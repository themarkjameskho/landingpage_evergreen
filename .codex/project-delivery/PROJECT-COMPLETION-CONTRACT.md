# Project Completion Contract

Project: landing_page_Evergreen
Project root: `/Volumes/juandemarkho/Projects/landing_page_Evergreen`
Lifecycle mode: new
Contract version: 1
Created: 2026-09-15T15:03:58.005Z
Status: Drafted; implementation foundation in progress
Acceptance authority: Mark

## Business outcome

- Outcome: A separate, minimal Evergreen landing-page site that reads approved content and images from the existing Evergreen Sanity project.
- Baseline: The local repository did not exist before 2026-09-15.
- Target: A GitHub-connected Astro repository with a CMS-driven landing page, verified staging, and authorised production launch.
- Measurement: Local checks/build pass; CMS page renders on staging; final content and launch acceptance are recorded.

## Scope

### Included

- One Astro repository at `/Volumes/juandemarkho/Projects/landing_page_Evergreen`.
- One root route filtered to the dedicated shared-Sanity `landing-page` category and configured slug.
- Sanity CDN images and a documented CMS environment contract.

### Excluded

- New Sanity project/dataset, duplicate Studio, GitHub remote, deployment, published content, forms, analytics, and production changes until separately authorised.

## Required user journeys and capabilities

| ID | Journey or capability | Acceptance criterion | Evidence required | Owner | Status |
|---|---|---|---|---|---|
| CC-001 | CMS-backed landing page | Root route renders the approved, classified Sanity page and its hero image without exposing credentials. | Vercel staging route and Sanity readback. | Mark | Not started |
| CC-002 | Local developer foundation | Repository initializes, documents its environment contract, and passes static analysis/build. | Git status, `npm run check`, `npm run build`. | Codex | In progress |

## Quality and operational requirements

| ID | Area | Requirement | Evidence required | Owner | Status |
|---|---|---|---|---|---|
| CC-Q-001 | Security |  |  |  | Unknown |
| CC-Q-002 | Privacy and data |  |  |  | Unknown |
| CC-Q-003 | Accessibility |  |  |  | Unknown |
| CC-Q-004 | Performance and reliability |  |  |  | Unknown |
| CC-Q-005 | Observability and incident response |  |  |  | Unknown |
| CC-Q-006 | Backup and recovery |  |  |  | Unknown |
| CC-Q-007 | Deployment and rollback |  |  |  | Unknown |
| CC-Q-008 | Documentation and ownership |  |  |  | Unknown |

## Release and closure

- Required release state:
- Migration or cutover:
- Production validation:
- Decommissioning:
- Handover:

## Deferrals and accepted risks

| ID | Item | Rationale | Owner | Authority | Review date |
|---|---|---|---|---|---|

## Completion decision

- Gate result: HOLD
- First blocker: Approved landing-page copy, design inputs, form destination, and deployment details are not yet supplied.
- Decision evidence:
- Approved by:
- Approved at:
