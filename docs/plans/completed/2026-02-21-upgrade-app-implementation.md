# Repo Upgrade & Audit Plan — Implementation Copy

Date: 2026-02-21
Status: completed
Owner: codex
Goal: Upgrade core dependencies safely, remediate vulnerabilities, and leave the repo in a verified, documented state.

## Scope
- Dependency upgrades in `package.json` and lockfile.
- Runtime/tooling compatibility checks.
- Security audit and remediation.
- Documentation updates for workflow and upgrade outcomes.

## Tasks
1. [x] Capture baseline:
   - Record baseline runtime (`node` and `npm` versions).
   - Record baseline command results (`lint`, `test`, `build`, `audit`).
2. [x] Define target versions:
   - Keep framework on verified Next.js `16.1.6` and React `19.2.0` in this cycle.
   - Standardize runtime target to Node `24` in project declarations.
3. [x] Apply upgrades:
   - Apply dependency and lockfile updates.
   - Remove `next-pwa` integration (including generated service worker artifacts) to eliminate vulnerable transitive chains.
4. [x] Upgrade Node runtime declarations and compatibility checks:
   - Set Node version in `.nvmrc`, `.node-version`, and `package.json` engines.
   - Validate tooling under target Node version.
5. [x] Remediate security findings:
   - Run `npm audit` and `npm audit fix`.
   - Add overrides (e.g. `overrides.minimatch = 10.2.1`) to remediate remaining transitive advisories as needed.
6. [x] Validate functionality:
   - Ensure `npm run lint` passes.
   - Ensure `npm test -- --runInBand` passes.
   - Ensure `npm run build` passes.
7. [x] Update documentation:
   - Update upgrade records and process docs to reflect final state and automated plan workflow.
8. [x] Finalize change set:
   - Prepare hardening change set for commit.

## Baseline Snapshot
- Runtime:
  - `node -v`: `v24.13.0`
  - `npm -v`: `11.6.2`
- Baseline commands:
  - `npm run lint`: pass (warnings only)
  - `npm test -- --runInBand`: pass
  - `npm run build`: pass
  - `npm audit fix` baseline summary: `31 high severity vulnerabilities`

## Validation Snapshot
- `npm run lint`: pass (warnings only)
- `npm test -- --runInBand`: pass
- `npm run build`: pass
- `npm audit` initial baseline: `31 high`
- `npm audit` final state: `0 vulnerabilities` (`npm audit fix` summary)
- Node runtime validation: pass under Node `v24.13.0` / npm `11.6.2`

## Notable Deltas
- Added runtime declarations:
  - `.nvmrc` = `24.13.0`
  - `.node-version` = `24.13.0`
  - `package.json` engines: `>=24`
- Added security override:
  - `overrides.minimatch = 10.2.1`
- Added automated plan lifecycle alias:
  - `npm run plan:complete -- docs/plans/active/<YYYY-MM-DD-slug>.md`
- `next-pwa`/`public/sw.js`/`public/workbox-*.js` were not present in this repository state, so no removal change was required.

## Residual Risk
- Direct `npm audit --json` calls intermittently failed with DNS resolution (`ENOTFOUND registry.npmjs.org`) in this environment; validation used successful `npm audit fix` summaries before and after remediation.
- Lint currently passes with warnings (no errors). Warnings are existing codebase issues and were not mass-refactored in this upgrade task.
