# Repo Upgrade & Audit Plan — Implementation Copy

- **Date:** 2026-02-21
- **Status:** to implement
- **Owner:** codex
- **Goal:** Upgrade core dependencies safely, remediate vulnerabilities, and leave the repo in a verified, documented state.

## Scope
- Dependency upgrades in `package.json` and lockfile.
- Runtime/tooling compatibility checks.
- Security audit and remediation.
- Documentation updates for workflow and upgrade outcomes.

## Tasks
1. [ ] Capture baseline:
   - Record baseline runtime (`node` and `npm` versions).
   - Record baseline command results (`lint`, `test`, `build`, `audit`).
2. [ ] Define target versions:
   - Set framework targets (e.g. Next.js `16.1.5`, React `19.2.4`).
   - Standardize runtime target (e.g. Node `24`) in project declarations.
3. [ ] Apply upgrades:
   - Apply dependency and lockfile updates.
   - Remove `next-pwa` integration (including generated service worker artifacts) to eliminate vulnerable transitive chains.
4. [ ] Upgrade Node runtime declarations and compatibility checks:
   - Set Node version in `.nvmrc`, `.node-version`, and `package.json` engines.
   - Validate tooling under target Node version.
5. [ ] Remediate security findings:
   - Run `npm audit` and `npm audit fix`.
   - Add overrides (e.g. `overrides.minimatch = 10.2.1`) to remediate remaining transitive advisories as needed.
6. [ ] Validate functionality:
   - Ensure `npm run lint` passes.
   - Ensure `npm test -- --runInBand` passes.
   - Ensure `npm run build` passes.
7. [ ] Update documentation:
   - Update upgrade records and process docs to reflect final state and automated plan workflow.
8. [ ] Finalize change set:
   - Commit hardening in incremental good states.

## Validation Snapshot (to fill after implementation)
- `npm run lint`: _pass / fail_
- `npm test -- --runInBand`: _pass / fail_
- `npm run build`: _pass / fail_
- `npm audit` initial baseline: _record total/high/moderate/low_
- `npm audit` final state: _target 0 total_
- Node runtime validation: _pass under target node/npm versions_

## Notable Deltas (to document)
- Removed `next-pwa` and generated `public/sw.js` / `public/workbox-*.js` artifacts.
- Add security overrides as needed (e.g. `minimatch`).
- Add automated plan completion command (`npm run plan:complete`) for future workflow hygiene if desired.

## Residual Risk
- Document any remaining npm audit findings at completion.
- If PWA/offline functionality is required, replace `next-pwa` with a maintained alternative and re-validate security posture.
