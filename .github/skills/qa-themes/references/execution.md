# Executing theme QA

Run project commands from the selected repository root. Values in angle brackets
are placeholders, not literal arguments. Inspect the current package scripts:
target branches may have older commands or routes.

## Browser-first path

Use an available browser automation tool (for example Playwright MCP), or the
repository's installed `playwright` package through a small session-local Node
script. The latter can launch Chromium, navigate, inspect locators and computed
styles, collect browser errors, and save screenshots. Resolve Playwright from
the selected checkout; a script outside it may not resolve its node_modules
automatically. Do not add a dependency or automation script to the repository.

If no executable browser path is available, record BLOCKED. A browser preview or
static code inspection alone does not prove browser assertions passed.

After approval, start the existing devkit on an unused port, for example:

```bash
npm start -- --host 127.0.0.1 --port 3000 --strictPort
```

Record the process handle and actual URL. Confirm it responds. A reachable port
alone is not source identity: verify the process's working directory or use a
server started by this run in the selected checkout. Do not attach to an unknown
server or kill a process to reclaim its port.

Current source-driven routes are:

```text
http://127.0.0.1:3000/<component>/<test-file-stem>?theme=<theme>&swatch=<swatch>
http://127.0.0.1:3000/button/button-states?theme=meridian&swatch=all
```

The devkit discovers `packages/html/src/**/tests/*.tsx`, compiles CSS on demand,
and supports source updates. `all` loads the theme's default `dist/all.css`;
it does not mean all swatches. Named swatches must exist in that theme's source.
Use the same viewport for comparable captures; start with 1024 x 768 and device
scale factor 1, adding narrow or wide layouts only when relevant to the risk.

Before every assertion/capture:

- Register page-error, console-error, and failed-request/HTTP-error collection
  before navigation. Distinguish pre-existing noise from relevant failures.
- Require a visible, nonempty `#test-area` and the expected component selector.
  A devkit error page or merely finding `#app` is not a rendered test.
- Require `link[data-role="kendo-theme"]` to reference the expected theme/swatch,
  a successful CSS response, and an accessible stylesheet with nonempty rules.
  Inspect a meaningful computed style on the tested component as well.
- Wait for `document.fonts.ready` and stable target geometry; disable animations
  for still comparisons. Do not use only an arbitrary sleep as readiness.
- Save raw `#test-area` captures under `RUN_DIR` with unique case/configuration
  filenames. Also capture a surrounding view when cropping would hide overflow,
  clipping, or popup positioning. Record screenshot crop and viewport.

Use explicit checks for the planned risk: bounding boxes for clipping/alignment,
computed styles for token application, and DOM attributes for rendered semantics.
Inspect screenshots, not only file existence. Long fixture pages may scroll or
overflow intentionally; compare the component against its contract, not a blanket
"no overflow anywhere" rule.

## Existing supplemental commands

Choose only relevant commands; these are not a mandatory full-suite checklist.
Do not run source-regenerating documentation or markup commands merely to get
a clean report. Record missing prerequisites as blockers if they cannot be
prepared without changing tracked source.

| Purpose | Command |
|---|---|
| Compile a selected theme | `npm run sass --workspace=@progress/kendo-theme-<theme>` |
| Build HTML exports for accessibility | `npm run build --prefix packages/html` |
| Check selected component templates | `npm run test:a11y -- <component> [component...]` |
| Build fixture bundles for existing screenshot runner | `npm run build:tests --prefix packages/html` |
| Capture compiled fixtures | `node scripts/capture.mjs --themes <themes> --components <components> --outDir <RUN_DIR>/actual --port <unused-port>` |
| Check HTML metadata requirements | `npm run test:html` |
| Browser contrast on generated HTML | `THEME=<theme> SWATCH=<full-swatch-name> npm run test:contrast` |

Comma-separated theme/component names are supported by `capture.mjs`; component
arguments to `test:a11y` are space-separated. Compile selected themes before
using the compiled-fixture capture path. It starts and stops its own HTTP server
and requires built `packages/html/dist/**/tests/**/app.js` files.

Important limitations of the current runners:

- `capture.mjs` uses Chromium, a fixed 1024 x 768 viewport, and `swatch=all`.
  It does not execute assertions, compare images, or prove successful CSS loading
  just by finding the theme link. It can finish without matching fixtures.
  Check the expected screenshot inventory and browser evidence. Use direct
  browser automation for named swatches, different viewports, or selected cases.
- `test:a11y` checks templates in JSDOM, not every visual fixture or real component
  interaction. It disables contrast and other rules, accepts documented violation
  categories, and catches individual template errors. Read
  `tests/_output/a11y-unified-report.json` and the command log: require a nonzero
  template count, no unaccounted render errors, and disclose excluded violations.
  Do not use `test:a11y:affected`: the current runner does not implement affected
  selection. These checks do not certify complete WCAG compliance.
- `test:contrast` consumes generated `tests/**/*.html`, not devkit source routes.
  Check that those pages and the named swatch CSS represent the tested revision.
  It has exclusions and no component filter; do not pretend a supplied component
  argument narrows it. Missing/stale generated input is a coverage gap.

## Optional baseline comparison

Use an existing CI report for the exact PR/base revisions or approved baseline
images when available. Keep expected and actual captures in separate run-local
directories with identical relative filenames. Record baseline SHA, browser,
platform/fonts, viewport, theme/swatch, and fixture data. Different OS/browser/font
environments are not trustworthy pixel-regression evidence.

With matching, nonempty image inventories, the existing comparison tool can run:

```bash
npx --no-install reg-cli <RUN_DIR>/actual <RUN_DIR>/expected \
  <RUN_DIR>/diff --report <RUN_DIR>/visual.html --json <RUN_DIR>/visual.json
```

Inspect its JSON/report even when the command returns nonzero: changed pixels
are evidence to interpret, whereas missing output or a runner error is a blocker.
New/deleted fixtures must be explained rather than silently omitted.
Never run `test:visual:save`, accept new baselines, or run publishing workflows.
If no comparable baseline exists, say "no pixel baseline comparison"; individual
contract checks can still pass, but a requested comparison remains GAP. Do not
claim a new regression without independent base evidence.
