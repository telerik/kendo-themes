# reg-suit Visual Regression — Implementation Plan (free-only)

## Context

`kendo-themes` renders ~4,200 screenshots (6 themes × ~700 variants) in CI and **commits them to
git** as `chore: update visual previews` (~221 MB, no LFS). A broad change touches thousands of PNGs
in one commit — GitHub's Files-changed view and Chrome both fail to load it, and there is no diff
visualization. This plan replaces that with **reg-suit**: baselines kept off the main branch, an
expected ǀ actual ǀ diff report **published to GitHub Pages**, and a **PR comment** with change
counts. **Hard constraint: 100% free — no paid services, no SaaS, no external storage, no GitHub App.**

**Stack:** `reg-suit` (MIT) + `reg-keygen-git-hash-plugin` (keys snapshots to the base commit) +
`reg-publish-gh-pages-plugin` (stores baselines + report on the repo's `gh-pages` branch, served free
by GitHub Pages). PR comment via `actions/github-script` + `GITHUB_TOKEN`. **Capture is unchanged**
(Firefox via `@progress/kendo-e2e`); reg-suit only diffs the produced PNG directory.

---

## How reg-suit fits the existing pipeline

`_create-screenshots.yml` already produces `tests/_output/{theme}/{component}/{variant}.png` per
theme and uploads them as `screenshots-{theme}` artifacts — **kept as-is**. Only the downstream
`detect-changes` job in `ci.yml` (which untars artifacts then `git add/commit/push` the PNGs) is
replaced by a reg-suit job:

```
create-screenshots (matrix, 6 themes)            [UNCHANGED]
        │  artifacts: screenshots-{theme}.tar
        ▼
visual-regression (NEW, replaces detect-changes):
  checkout (full history) → npm ci → download+untar artifacts → tests/_output/
  npx reg-suit run
    ├─ keygen   : find base commit's snapshot key from git history
    ├─ fetch    : pull expected baseline from gh-pages
    ├─ compare  : matchingThreshold/thresholdRate → .reg/ (HTML report + diff PNGs) + out.json
    └─ publish  : push new expected + report to gh-pages   → GitHub Pages
  post sticky PR comment (counts + report URL) from .reg/out.json
```

Baselines + report live on `gh-pages` (free); the working branches stop carrying PNGs.

---

## Step 0 — Local sandbox (try it before any PR)

reg-suit/`reg-cli` is just a "diff two folders → HTML report" engine; none of the CI / gh-pages /
git-hash machinery is needed to validate the review experience locally. These helpers give a
one-command local flow that produces the **exact** report reviewers will see.

**0.1 New file `regconfig.local.json`** (root) — same thresholds as prod, but **no plugins** (skips
gh-pages/keygen; compares `actualDir` against the locally-seeded `.reg/expected`):

```json
{
  "core": {
    "workingDir": ".reg",
    "actualDir": "tests/_output",
    "thresholdRate": 0.001,
    "matchingThreshold": 0.05,
    "enableAntialias": true,
    "ximgdiff": { "invocationType": "client" }
  },
  "plugins": {}
}
```

**0.2 New file `scripts/visual-local.mjs`** — cross-platform (Node `fs.cpSync`, no `cp`/`shx` dep):

```js
#!/usr/bin/env node
// Local visual-regression sandbox. No CI / gh-pages / git needed.
//   node scripts/visual-local.mjs --save   # snapshot current tests/_output as the baseline
//   node scripts/visual-local.mjs          # compare tests/_output vs baseline -> .reg/report.html
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const ACTUAL = 'tests/_output', EXPECTED = '.reg/expected', DIFF = '.reg/diff';
const REPORT = '.reg/report.html', JSON_OUT = '.reg/out.json';

if (!existsSync(ACTUAL)) {
  console.error(`No screenshots at ${ACTUAL}. Run: npm run test:create-screenshots <theme>`);
  process.exit(1);
}
if (process.argv.includes('--save')) {
  rmSync(EXPECTED, { recursive: true, force: true });
  mkdirSync(EXPECTED, { recursive: true });
  cpSync(ACTUAL, EXPECTED, { recursive: true });
  console.log(`Saved baseline: ${ACTUAL} -> ${EXPECTED}`);
  process.exit(0);
}
if (!existsSync(EXPECTED)) {
  console.error(`No baseline yet. First run: node scripts/visual-local.mjs --save`);
  process.exit(1);
}
execFileSync('npx', ['reg-cli', ACTUAL, EXPECTED, DIFF, '--report', REPORT, '--json', JSON_OUT],
  { stdio: 'inherit', shell: true });
console.log(`\nReport: ${REPORT}`);
```

**0.3 `package.json` scripts** (add alongside `test:visual`):

```jsonc
"test:visual:save":  "node ./scripts/visual-local.mjs --save",
"test:visual:local": "node ./scripts/visual-local.mjs"
```

**0.4 Add `reg-cli` to devDependencies** (the engine the local script calls directly — reg-suit
bundles it but doesn't always expose its bin): `npm install -D reg-cli`.

**Local flow:**

```bash
npm run sass                                   # build theme CSS first
npm run test:create-screenshots default        # capture "before"  (Bash/Git Bash, not PowerShell)
npm run test:visual:save                        # snapshot as baseline -> .reg/expected
# ...edit some SCSS, then:
npm run sass && npm run test:create-screenshots default   # capture "after"
npm run test:visual:local                       # diff -> .reg/report.html (same UI as gh-pages)
start .reg\report.html                          # PowerShell open
```

To exercise the **real** prod config + thresholds locally (after `test:visual:save` seeds
`.reg/expected`): `npx reg-suit run --config regconfig.local.json`. Everything lives under `.reg/`
(gitignored) — throwaway, no git/CI/Pages involved. `test:create-screenshots` runs the existing
bash+Firefox script, so invoke it via Bash/Git Bash.

---

## Step 0b — Devkit-integrated visual dev loop (Depth 2 + SCSS watch)

**Key enabler (verified):** the dev server (`npm start`, proxy :3000) serves React test pages at
`http://localhost:3000/packages/html/dist/<component>/tests/<variant>/`, and `assets/scripts.js`
swaps the theme `<link>` at runtime from `?theme=<name>&swatch=<name>` (default `meridian`/`all`).
So **one running devkit renders every theme** for any component via query param. We drive that live
server directly (no static-HTML extraction, no per-theme `sed`) and re-capture on SCSS save.

**New file `scripts/visual-dev.mjs`** — usage `npm run test:visual:dev <component> [theme...]`
(themes default to the one(s) you're editing). Outline:

```js
#!/usr/bin/env node
// Devkit-driven local visual loop. Assumes `npm start` is running (proxy :3000).
//   npm run test:visual:dev button meridian bootstrap
import { chromium } from 'playwright';
import { watch } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { globSync } from 'glob';

const [ component, ...themes ] = process.argv.slice(2);
const THEMES = themes.length ? themes : ['meridian'];
const BASE = 'http://localhost:3000';

// 1. discover this component's test pages from the built devkit output
const variants = globSync(`./packages/html/dist/${component}/tests/**/app.js`)
  .map(p => p.replace(/\\/g, '/').replace(/\/app\.js$/, '/'));   // -> served URL paths

async function capture() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: 1 });
  for (const theme of THEMES) {
    for (const v of variants) {
      const variantName = v.split('/').at(-2);
      await page.goto(`${BASE}/${v}?theme=${theme}`, { waitUntil: 'networkidle' });
      await page.locator('#test-area, #app').first()
        .screenshot({ path: `tests/_output/${theme}/${component}/${variantName}.png` });
    }
  }
  await browser.close();
  // 2. diff just this component against the saved baseline -> report
  execFileSync('npx', ['reg-cli',
    `tests/_output`, `.reg/expected`, `.reg/diff`,
    '--report', '.reg/report.html', '--json', '.reg/out.json'],
    { stdio: 'inherit', shell: true });
  console.log('Report: .reg/report.html  (refresh the tab)');
}

await capture();                                   // initial run
// 3. watch the edited theme(s)' SCSS, debounce, re-capture
let t; for (const theme of THEMES) {
  watch(`packages/${theme}/scss`, { recursive: true }, () => {
    clearTimeout(t);
    t = setTimeout(() => {
      execFileSync('npx', ['nx', 'run', `@progress/kendo-theme-${theme}:sass`], { stdio: 'inherit', shell: true });
      capture();
    }, 300);
  });
}
```

**`package.json`:** add `"test:visual:dev": "node ./scripts/visual-dev.mjs"` and devDeps
`playwright` (pins Chromium → deterministic; doubles as the Phase 6 capture engine).

**Local flow:** terminal A `npm start`; terminal B `npm run test:visual:save` once (to seed a baseline
captured with *this same Playwright path*), then `npm run test:visual:dev button meridian`. Edit a
button SCSS file → it rebuilds that theme's CSS, re-screenshots only `button` for `meridian`, and
refreshes `.reg/report.html`. You watch the live page in the devkit tab and the pixel diff in the
report tab.

**Important caveat:** this loop captures the **live React pages via Playwright/Chromium**, which is a
*different renderer* than CI's current Firefox-on-static-HTML path — so its baseline must be seeded
with the same script (`test:visual:save` after a Depth-2 capture), and is **separate** from CI's
baseline. The Phase 6 determinism step is where CI adopts this **same** devkit-driven Playwright
capture, unifying "what you preview" with "what CI diffs" into one path. Output stays under `.reg/`
and `tests/_output/` (gitignored).

---

## Step 1 — Dependencies & scripts (`package.json`, root)

Add devDependencies (latest free versions) and a local script:

```jsonc
"devDependencies": {
  // ...existing...
  "reg-suit": "^0.x",
  "reg-keygen-git-hash-plugin": "^0.x",
  "reg-publish-gh-pages-plugin": "^0.x"
},
"scripts": {
  // ...existing...
  "test:visual": "reg-suit run"
}
```

Install: `npm install -D reg-suit reg-keygen-git-hash-plugin reg-publish-gh-pages-plugin`.

## Step 2 — reg-suit config (new file `regconfig.json`, repo root)

```json
{
  "core": {
    "workingDir": ".reg",
    "actualDir": "tests/_output",
    "thresholdRate": 0.001,
    "matchingThreshold": 0.05,
    "enableAntialias": true,
    "ximgdiff": { "invocationType": "client" }
  },
  "plugins": {
    "reg-keygen-git-hash-plugin": true,
    "reg-publish-gh-pages-plugin": {
      "branchName": "gh-pages"
    }
  }
}
```

- `actualDir: tests/_output` — reg-suit recurses across all 6 themes; the report groups by path
  (`{theme}/{component}/{variant}.png`).
- `matchingThreshold` (per-pixel AA tolerance, 0–1) + `thresholdRate` (max fraction of differing
  pixels before an image counts as changed) absorb Firefox sub-pixel/font noise — the immediate,
  free fix for the spurious-diff churn. Start at these values; tune after the first runs.
- Notify is deliberately **not** a plugin (avoids the reg-suit GitHub App / org-admin install) — done
  with a self-contained CI step in Step 3.

## Step 3 — New reusable workflow (`.github/workflows/_visual-regression.yml`)

```yaml
name: Visual regression
on:
  workflow_call:
    outputs:
      report-url: { value: ${{ jobs.run.outputs.report-url }} }
      changed:    { value: ${{ jobs.run.outputs.changed }} }
      new:        { value: ${{ jobs.run.outputs.new }} }

concurrency:
  group: visual-regression-${{ github.ref }}
  cancel-in-progress: true

jobs:
  run:
    runs-on: ubuntu-latest
    permissions:
      contents: write        # push baseline + report to gh-pages
      pull-requests: write   # post the PR comment
    outputs:
      report-url: ${{ steps.summary.outputs.report-url }}
      changed:    ${{ steps.summary.outputs.changed }}
      new:        ${{ steps.summary.outputs.new }}
    steps:
      - uses: actions/checkout@v6
        with:
          fetch-depth: 0      # reg-keygen-git-hash-plugin needs full history

      - id: setup-node
        uses: actions/setup-node@v6
        with:
          node-version: 24.x

      - name: Use cache for root node_modules
        id: cache-root-node_modules
        uses: actions/cache@v5
        with:
          path: node_modules
          key: root-node_modules-${{ steps.setup-node.outputs.node-version }}-${{ hashFiles('package-lock.json') }}

      - name: Install
        if: steps.cache-root-node_modules.outputs.cache-hit != 'true'
        run: npm ci --no-audit --no-fund

      - name: Download screenshot artifacts
        uses: actions/download-artifact@v8
        with:
          path: .tmp

      - name: Unpack artifacts            # restores tests/_output/{theme}/...
        run: find .tmp -name "*.tar" -type f -exec tar -xf {} \;

      - name: Configure git identity
        run: |
          git config user.name "kendo-bot"
          git config user.email "kendouiteam@progress.com"

      - name: Run reg-suit
        env:
          GITHUB_TOKEN: ${{ github.token }}
        run: npx reg-suit run || true     # visual change is NOT a hard failure; review is human

      - name: Summarize result
        id: summary
        uses: actions/github-script@v9
        with:
          script: |
            const fs = require('fs');
            const out = JSON.parse(fs.readFileSync('.reg/out.json', 'utf8'));
            const changed = out.failedItems.length;
            const added   = out.newItems.length;
            const deleted = out.deletedItems.length;
            const passed  = out.passedItems.length;
            const reportUrl = `https://${context.repo.owner}.github.io/${context.repo.repo}/`;
            core.setOutput('report-url', reportUrl);
            core.setOutput('changed', String(changed));
            core.setOutput('new', String(added));

            if (!context.issue.number) return;   // only comment on PR events
            const marker = '<!-- reg-suit-visual-report -->';
            const body = [
              marker,
              '### 🖼️ Visual regression',
              `| Changed | New | Deleted | Passed |`,
              `|--:|--:|--:|--:|`,
              `| **${changed}** | ${added} | ${deleted} | ${passed} |`,
              '',
              `📊 [Open the diff report](${reportUrl})`,
              changed === 0 && added === 0
                ? '_No visual changes detected._'
                : '_Review the report, then approve by merging — the baseline updates on `develop`._',
            ].join('\n');

            const { owner, repo } = context.repo;
            const issue_number = context.issue.number;
            const { data: comments } = await github.rest.issues.listComments({ owner, repo, issue_number });
            const existing = comments.find(c => c.body && c.body.includes(marker));
            if (existing) {
              await github.rest.issues.updateComment({ owner, repo, comment_id: existing.id, body });
            } else {
              await github.rest.issues.createComment({ owner, repo, issue_number, body });
            }
```

Notes:
- `reg-suit run` does compare → publish (pushes expected images + the HTML report to `gh-pages` via
  `GITHUB_TOKEN`) → writes machine-readable `.reg/out.json` (`failedItems`=changed, `newItems`,
  `deletedItems`, `passedItems`).
- `|| true` keeps visual changes non-blocking, matching today's behavior; the comment + report are
  the review surface.
- The comment is **sticky** (single upserted comment keyed by an HTML marker) — no PR spam.

## Step 4 — Wire it into `ci.yml` (replace `detect-changes`)

**Replace** the entire `detect-changes` job (current lines 45–94) with a call to the new workflow:

```yaml
  visual-regression:
    name: Visual regression
    needs: [ render-test-pages, create-screenshots ]
    uses: ./.github/workflows/_visual-regression.yml
```

**Rewire `ci-visual`** (current lines 145–151) to depend on the new job:

```yaml
  ci-visual:
    name: Status check > Visual
    runs-on: ubuntu-latest
    needs: [ visual-regression ]
    steps:
      - name: Done
        run: echo "Done!"
```

**Rewire `set-commit-status`** (current lines 97–143). Today it gated on
`detect-changes.outputs.snapshot_sha` (which only existed because a bot commit created a new SHA).
With reg-suit there is no new commit, so set statuses on `github.sha` unconditionally and point the
Visual check's `target_url` at the Pages report:

- Change `needs:` — replace `detect-changes` with `visual-regression`.
- Change `if:` from `always() && needs.detect-changes.outputs.snapshot_sha` to `always()`.
- In the script: set `const sha = context.sha;` (drop the `snapshot_sha` reference) and set the
  Visual entry's `target_url` to `${{ needs.visual-regression.outputs.report-url }}`.

**Delete** from the old job: the `Compare artifacts`, `Push changes to GitHub`, and
`Get snapshot commit SHA` steps, plus the `snapshot_sha` output (all gone with the job replacement).

## Step 5 — Stop tracking the committed PNGs (`.gitignore` + git)

Add to `.gitignore`:

```
tests/_output/
.reg/
```

Then untrack the existing snapshots (kept in history; reg-suit now owns them):

```
git rm -r --cached tests/_output
git commit -m "chore: stop tracking visual snapshots (managed by reg-suit)"
```

Optional, coordinated history rewrite to reclaim the ~221 MB (schedule with the team — it force-pushes):
`git filter-repo --path tests/_output --invert-paths`.

## Step 6 — One-time setup & baseline seeding

1. **Enable GitHub Pages:** repo Settings → Pages → Source = `gh-pages` branch. Free for public
   repos. Report served at `https://<owner>.github.io/kendo-themes/`.
2. **Seed the baseline:** on the first `reg-suit run` with no expected snapshot, everything is
   `newItems` and gets published to `gh-pages` as the initial baseline.
3. **Publish a `develop` baseline** so feature branches have something to diff against — see Step 7.

## Step 7 — Publish baseline on `develop`

`ci.yml` has `branches-ignore: [master, develop, v4-dev]`, so develop never runs visual today.
Feature branches diff against the published develop snapshot, so develop must publish one. Add a small
workflow (or extend the existing develop/weekly pipeline) that on push to `develop` runs
compile-themes → render-test-pages → create-screenshots → `_visual-regression.yml`. reg-keygen keys
the snapshot to the develop commit; feature runs resolve their merge-base and compare against it.

---

## Step 8 — Unified Playwright capture (CI + local, one deterministic path)

**Goal:** CI and the local watch loop (Step 0b) produce pixels from the **same script** in the
**same OS/font environment**, so a developer's local capture is pixel-comparable to CI's published
baseline — not merely self-consistent. Two layers must be unified:

### (a) Capture *code* — one module `scripts/capture.mjs`

Extract the Playwright capture out of Step 0b into a reusable function called by three callers (the
watch loop, a one-shot CLI, and CI):

Decision: capture the **live devkit pages** (preview == diff), with **all speed levers applied up
front** — one page load per variant, in-page theme swap, parallel workers, `load` not `networkidle`:

```js
// scripts/capture.mjs — live devkit pages; ONE load/variant + in-page theme swap; parallel; load (not networkidle)
import { chromium } from 'playwright';
import { createServer } from 'http-server';      // already a devDep
import { globSync } from 'glob';
import os from 'node:os';

const CONCURRENCY = Math.max(2, os.cpus().length - 1);

export async function capture({ themes, components = ['*'], outDir = 'tests/_output', port = 18222 }) {
  const server = createServer({ root: './' });   // serves /packages/html/dist + /packages/<theme>/dist/all.css
  await new Promise(r => server.listen(port, '127.0.0.1', r));

  const variants = components.flatMap(comp =>
    globSync(`./packages/html/dist/${comp}/tests/**/app.js`)
      .map(p => p.replace(/\\/g, '/').replace(/\/app\.js$/, '/')));   // served URL paths

  const browser = await chromium.launch();
  const queue = [ ...variants ];

  async function worker() {                                          // N parallel pages
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
    for (let v = queue.shift(); v; v = queue.shift()) {
      const compName = v.split('/dist/')[1].split('/')[0];
      const name = v.split('/').at(-2);
      await page.goto(`http://127.0.0.1:${port}/${v}`, { waitUntil: 'load' });   // ONE load per variant
      for (const theme of themes) {                                              // swap themes in-page → 6× fewer loads
        await page.evaluate(t => new Promise(res => {
          const link = document.querySelector('link[data-role="kendo-theme"]');
          link.onload = res;
          link.href = `/packages/${t}/dist/all.css`;
        }), theme);
        await page.evaluate(() => document.fonts.ready);
        await page.locator('#test-area, #app').first()
          .screenshot({ path: `${outDir}/${theme}/${compName}/${name}.png`, animations: 'disabled' });
      }
    }
    await page.close();
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  await browser.close(); server.close();
}
```

- The theme `<link>` swap mirrors the devkit's own `assets/scripts.js`; themes are pure CSS, so
  swapping the stylesheet restyles the live page with **no React re-render** — that's what lets one
  page load serve all 6 themes.
- `scripts/visual-dev.mjs` (Step 0b) imports `capture(...)` instead of its inline Playwright block —
  watch loop and CI share one implementation.
- A thin CLI wrapper parses `--themes a,b --components '*'` and calls `capture(...)`.

### (b) Capture *environment* — one pinned Docker image (the real determinism fix)

Playwright pins the **browser engine** but **not fonts** — Windows-local vs Linux-CI text AA still
differs. Running the *same container* in both places is what makes pixels match. `Dockerfile.visual`:

```dockerfile
FROM node:24-bookworm-slim
RUN apt-get update && apt-get install -y --no-install-recommends \
      fontconfig fonts-liberation fonts-dejavu-core fonts-noto-core fonts-noto-color-emoji \
 && rm -rf /var/lib/apt/lists/*
RUN npx --yes playwright@1.XX.0 install --with-deps chromium
WORKDIR /work
```

Build once, push to **GHCR** (free): `ghcr.io/<owner>/kendo-visual:1`. Pin the tag (and the
`playwright`/font versions) — that pin *is* the determinism contract.

### CI rewrite (`_create-screenshots.yml`)

Replace the Firefox setup + `create-screenshots.sh` with the container running `capture.mjs`. The
artifact contract is unchanged (`screenshots-{theme}.tar` → `tests/_output/{theme}`), so the
downstream reg-suit job (Step 3) needs no change:

```yaml
jobs:
  run:
    runs-on: ubuntu-latest
    container: ghcr.io/<owner>/kendo-visual:1        # SAME image devs use locally
    strategy:
      matrix: { theme: [default, bootstrap, material, classic, fluent, meridian] }
    steps:
      - uses: actions/checkout@v6
      - run: npm ci --no-audit --no-fund
      - uses: actions/download-artifact@v8            # built devkit dist + compiled theme CSS
        with: { path: .tmp }
      - run: find .tmp -name "*.tar" -type f -exec tar -xf {} \;
      - run: node scripts/capture.mjs --themes ${{ matrix.theme }} --components '*'
      - run: tar -cf screenshots-${{ matrix.theme }}.tar tests/_output/${{ matrix.theme }}
      - uses: actions/upload-artifact@v7
        with: { name: screenshots-${{ matrix.theme }}, path: screenshots-${{ matrix.theme }}.tar }
```

**Prereq wiring:** the live pages need the **built devkit** (`packages/html/dist/**`, from
`build:tests`) and **compiled themes** (`packages/<theme>/dist/all.css`, from `compile-themes`).
Today `_create-screenshots.yml` consumes the static `tests/**/*.html`; switch its upstream artifacts
to the devkit `dist` + theme CSS (add an upload of `packages/html/dist` from the html-build job if not
already published). `render-test-pages.mjs` leaves the screenshot path entirely.

### Local exact-CI repro

Add `"test:visual:docker"` running the identical image:

```
docker run --rm -v "${PWD}:/work" ghcr.io/<owner>/kendo-visual:1 \
  node scripts/capture.mjs --themes meridian --components '*'
```

- **Fast inner loop** (Step 0b `test:visual:dev`) = native Playwright on the dev's OS vs a
  **locally-seeded** baseline → instant feedback while authoring (not pixel-comparable to CI, and
  that's fine for iterating).
- **Canonical/update baseline** → `test:visual:docker` produces CI-identical pixels; seed the reg-suit
  baseline from these.

### Performance — committed levers (all applied up front)

Decision: **live devkit pages** (preview == diff) made fast by applying every lever now — not a
naive port. The speed comes from these, all already encoded in the `capture.mjs` above:

1. **In-page theme swap (biggest win):** one page load per variant, then swap the stylesheet `href`
   in-page for each theme + `await document.fonts.ready` + screenshot → **~700 loads, not ~4,200**
   (6× fewer). Works because themes are pure CSS (no React re-render).
2. **One persistent Chromium + `CONCURRENCY` parallel pages** (≈ CPU-core× on the capture loop) — vs
   today's per-theme sequential `npx snapshot`.
3. **`waitUntil: 'load'`, not `networkidle`** — these demos do no data fetching; networkidle is dead
   time on every page.
4. **Browser baked into the Docker image** — removes the per-run `wget firefox-latest` **and**
   `playwright install` cost the current matrix pays 6×.
5. **Fixed viewport, animations off** (already `k-no-animations`); optionally block irrelevant
   requests.

Why this nets out **faster** than today despite live React: each individual live screenshot is
heavier than a static one, but levers 1–2 cut total navigations ~6× and add core-level parallelism,
and lever 4 removes most per-run setup. The heavier-per-shot cost is more than paid back.

> **Validate with a profile run** on the real ~4,200-shot set after wiring, and tune `CONCURRENCY`.
> Note much of today's slowness is per-theme **setup** (Firefox download, `npm ci`, copy+`sed`),
> which the Docker image + single capture process removes regardless.

**CI matrix note:** with in-page theme swap, one capture process can do all 6 themes in a single
pass. You can either keep the 6-way **per-theme matrix** (more parallel CI jobs, each captures one
theme) or collapse to **one job capturing all themes** (simpler, fewer runners). Decide based on
runner availability — the artifact contract (`screenshots-{theme}.tar`) supports either.

### Determinism checklist (in `capture.mjs`)

Fixed viewport + `deviceScaleFactor:1`; `await document.fonts.ready`; `screenshot({ animations:
'disabled' })`; devkit already injects `k-no-animations` (default `animations` off); avoid
time/random content. With the pinned image this is reproducible enough to push reg-suit
`matchingThreshold`/`thresholdRate` toward 0.

### Cutover

Changing engine (Firefox→Chromium) and source (static-HTML→live devkit) changes pixels, so the old
baseline is obsolete. On the first `develop` run under the new image, reg-suit republishes **all**
snapshots as the new baseline (one-time bulk "new"). Then **retire `build/create-screenshots.sh`**;
keep `render-test-pages.mjs` only if you still want the separate **DOM-markup** diff (independent of
pixels).

**Net result:** one `capture.mjs`, one `?theme=` mechanism, one pinned image →
`test:visual:docker` == CI pixel-for-pixel, while the native `test:visual:dev` stays for speed.

---

## Files touched

| File | Change |
|---|---|
| `package.json` | +4 devDeps (reg-suit, 2 plugins, reg-cli), `test:visual` + `test:visual:save` + `test:visual:local` scripts |
| `regconfig.json` | **new** — reg-suit config (CI) |
| `regconfig.local.json` | **new** — local sandbox config (no plugins) |
| `scripts/visual-local.mjs` | **new** — one-command local compare helper |
| `scripts/visual-dev.mjs` | **new** — devkit-driven watch loop (Playwright, `?theme=`, reg-cli) |
| `package.json` (dev loop) | +`playwright` devDep, +`test:visual:dev` script |
| `.github/workflows/_visual-regression.yml` | **new** — reg-suit run + sticky PR comment |
| `.github/workflows/ci.yml` | replace `detect-changes` with `visual-regression`; rewire `ci-visual` + `set-commit-status` |
| `.gitignore` | ignore `tests/_output/` and `.reg/` |
| develop pipeline | run the visual job on `develop` to publish the baseline |
| repo settings | enable GitHub Pages on `gh-pages` |
| **Step 8 (unified capture):** | |
| `scripts/capture.mjs` | **new** — shared Playwright capture (devkit + `?theme=`), used by dev loop & CI |
| `scripts/visual-dev.mjs` | refactor to import `capture()` (one implementation) |
| `Dockerfile.visual` | **new** — pinned Node 24 + Chromium + fonts; pushed to GHCR (free) |
| `package.json` (Step 8) | +`test:visual:docker` script |
| `_create-screenshots.yml` | **rewritten** — run in the GHCR container, call `capture.mjs`; same artifact contract |
| `build/create-screenshots.sh` | **retired** (Firefox/`npx snapshot` path removed) |
| html-build job | publish `packages/html/dist` as an artifact for the capture job |

## Cost (all free)
reg-suit + plugins: MIT/OSS · GitHub Pages: free (public repo) · storage: the repo's own `gh-pages`
branch · PR comment: `GITHUB_TOKEN` + `github-script` · no SaaS, no external storage, no App install.

## Verification (end-to-end)

1. **Local:** `npm run test:create-screenshots default` then `npm run test:visual` → `.reg/index.html`
   opens with the expected/actual/diff triptych + slider.
2. **First CI run on a branch:** reg-suit publishes the baseline to `gh-pages`; Pages serves the
   report; the PR gets a sticky comment with counts + a working report link.
3. **Single change:** tweak one component's SCSS, push → only that variant shows as "changed" in the
   report; others "passed" (confirms thresholds are neither too noisy nor too loose).
4. **No image commits:** `git log --stat` shows no PNGs and no `chore: update visual previews` commit.
5. **Status check:** `Status check > Visual` appears on the PR, `target_url` opens the Pages report.

## Notes / decisions to confirm at implementation time
- **Baseline location:** this plan uses the **same repo's** `gh-pages` branch (simplest free path;
  keeps develop/feature *working* history clean). Alternative — a **dedicated public snapshots repo**
  + deploy key — keeps the main repo's object store pristine too, also free, slightly more setup.
- **Determinism / unified capture:** fully specified in **Step 8** — one `capture.mjs` (Playwright +
  live devkit + `?theme=`) run inside one pinned **GHCR Docker image** in both CI and local
  (`test:visual:docker`), so local pixels match CI. Playwright pins the browser; the Docker image
  pins the **fonts** (the part that actually causes Windows-vs-Linux AA drift). Can land after the
  core reg-suit rollout (Steps 1–7); the fast native `test:visual:dev` loop works before it.
- **Sequencing:** ship Steps 0/0b (local sandbox + dev loop) and Steps 1–7 (reg-suit + gh-pages + PR
  comment) first for the review-pain win; adopt Step 8 (unified Playwright/Docker capture) as the
  determinism follow-up, with a one-time baseline re-seed at cutover.
