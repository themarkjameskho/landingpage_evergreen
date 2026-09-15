# Evidence Register

| Evidence ID | Date | Scope | Check | Result | Exact identity | Source | Limits | Supports |
|---|---|---|---|---|---|---|---|---|
| EV-001 | 2026-09-15 | Local repository foundation | Static analysis | Passed | `npm run check` on commit `030292f` | Local command output | One deprecation hint from the Sanity image URL package; no errors | CC-002 |
| EV-002 | 2026-09-15 | Local repository foundation | Production build | Passed | `npm run build` on commit `030292f` | Local command output | Local Node 26 differs from Vercel's Node 24 runtime; no deployed route tested | CC-002 |
| EV-003 | 2026-09-15 | Dependency release readiness | Runtime dependency audit | Failed | `npm audit --omit=dev --audit-level=high` | npm audit | 1 critical and 4 high findings; the proposed automated fix is a breaking Astro 7 / Vercel 11 upgrade | Release readiness |
| EV-004 | 2026-09-15 | GitHub repository connection | Remote identity | Passed | `origin` = `https://github.com/themarkjameskho/landingpage_evergreen.git` | `git remote -v` and `git ls-remote --heads origin` | Remote is reachable and empty; push verification follows this record update | CC-002 |
| EV-005 | 2026-09-15 | Live landing-page mapping | Public source inventory | Passed | `https://www.evergreenbedbugs.com/` observed in browser on 2026-09-15 | CUA accessibility tree and full-page screenshot | Third-party review code, claim approval, and implementation parity remain open | Mapping plan |

Allowed results: Passed, Failed, Skipped, Unknown.
