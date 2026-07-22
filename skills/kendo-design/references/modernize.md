# Modernize — Refactor to the Kendo Design System

You are refactoring existing UI code so it aligns with the Kendo Design System — without changing functionality or breaking layouts. Meridian is the canonical theme; all token alignment targets Meridian values.

**This runs in the main conversation, not a delegated sub-agent — and that includes not spawning one yourself.** The whole point of doing this pass here is that it is a long, grindy, exhaustive sweep — you must not summarize a partial pass as done. A handful of edits followed by a tidy "Migration Summary" is a failure mode, not a completion. The **Inventory** and **Completeness Gate** phases below exist specifically to prevent stopping early; treat them as hard gates, not optional bookkeeping.

**Do not delegate any part of this workflow to a background task, sub-agent, or "let me kick this off and get back to you" flow — for any reason, including "it's a big mechanical pass" or "so I don't lose context."** That instinct is exactly the failure mode this doc exists to prevent: pushing the grindy part out of the conversation you're accountable in is how "6 classes migrated" gets reported as done last time. Apply every edit yourself, directly, in this conversation, file by file. If the pass is large, say so and checkpoint (see "Don't Stop Early") — don't hand it off.

## How You Work

1. **Detect the stack** — plain CSS, SCSS, CSS-in-JS, Tailwind, utility classes, framework component styles.
2. **Migrate to Meridian (Phase 0)** — swap a non-Meridian Kendo theme to Meridian (conditional, mandatory when kendo-themes is present).
3. **Build the Inventory (Phase 1)** — exhaustively enumerate every violation, project-wide, before editing anything. This is the completion contract for the whole pass.
4. **Reconcile → DESIGN.md (Phase 2)** — scan the app's global customizations and write a reconciled `DESIGN.md` (identity persists verbatim, incidentals snap). Self-contained; build it inline here.
5. **Propagate → theme (Phase 3)** — push the reconciled tokens into the theme (`$kendo-*` / `--kendo-*`) so components stop diverging from the app shell.
6. **Capture "before" (Phase 12)** — screenshot every affected surface *before touching anything*, including elements that aren't visible on load (open the popups, dialogs, dropdowns, etc.).
7. **Plan the migration** — group the remaining changes (Phases 4+) by category and risk level, first **classifying each design module** as systematic, one-off, or foreign (see Migration Strategy). Present the plan for confirmation before editing.
8. **Apply changes** — make surgical edits, one category at a time, checking items off the Inventory as you go.
9. **Verify against the Inventory (Phase 13)** — re-scan and reconcile every enumerated item. Do not stop while unresolved items remain unless explicitly flagged.
10. **Capture "after" & document (Phase 12)** — reshoot the same surfaces and states, pair them with the "before" shots.

## Phase 0: Migrate to Meridian (runs first)

Before aligning any tokens, ensure the project's Kendo theme is Meridian. This phase is **conditional on the project using kendo-themes**, but when it applies the swap is **mandatory** — Meridian is the target everywhere.

1. **Detect** whether the project uses kendo-themes at all:
   - A `@progress/kendo-theme-*` dependency in `package.json`, or
   - An imported theme/swatch (`@progress/kendo-theme-*` import, a compiled `*.css` from a Kendo theme, or a Kendo swatch SCSS entry point).
2. **Branch on the result:**
   - **Not using kendo-themes** (~10% — plain CSS, Tailwind, custom, or a non-Kendo design system) → **skip Phase 0** and proceed to Phase 1. Do not add a Kendo theme dependency.
   - **Using a Kendo theme that is NOT Meridian** (e.g. Default, Bootstrap, Material, Fluent, Classic) → **swap to Meridian (mandatory)**:
     - Replace the `@progress/kendo-theme-<name>` dependency with `@progress/kendo-theme-meridian`.
     - Update every import/reference (JS/TS imports, SCSS `@use`/`@import`, bundler/build config, CSS `<link>`s) to point at Meridian.
     - **Remove the old theme import** so two themes never load at once.
     - Reinstall dependencies and **verify the build compiles** before continuing.
   - **Already on Meridian** → nothing to change; proceed to Phase 1.
3. **Align target** — after Phase 0, all subsequent phases align to **Meridian** token values, regardless of what the project started with.

## Modes

- **Dry-run** (when user says "plan", "preview", or "what would change"): Produce the migration plan (Phases 0–1) without making edits.
- **Interactive** (default): Show plan, then apply after confirmation.
- **Auto** (when user says "just do it" or uses `--yolo`): Apply all changes directly. The Inventory and Completeness Gate still apply — "auto" means skip the confirmation prompt, not skip verification.
- **De-utility-ification is not a mode — it's Phase 10, and Phase 10 is mandatory.** Every modernize pass eliminates utility-class markup (Kendo's own `k-utils` and Tailwind alike) in favor of semantic component CSS/SCSS, same as every other default phase. It only doesn't run when the user explicitly opts *into* utility classes for a scope (Phase 11) or explicitly tells you to leave specific utility usage alone (record as `deferred` with the reason).

## Phase 1: Build the Inventory (completion contract — do this before any edit)

Every prior failure mode of this workflow traces back to the same root cause: an open-ended "migrate the app" instruction lets the pass declare victory after a token gesture. The Inventory fixes that by turning "migrate the app" into a finite, countable checklist that must reach zero (or an explicitly justified non-zero) before the pass ends.

1. **Scan the whole project**, not a sample, for every category this workflow touches:
   - Utility-class usage — Kendo's own `k-utils` classes (`k-d-flex`, `k-gap-*`, `k-p-*`, etc.) **and** Tailwind classes. Always inventory these — Phase 10 (de-utility-ification) is mandatory, so every occurrence must reach a terminal state at the Completeness Gate like everything else, not just be tracked passively.
   - Hard-coded colors (hex, `rgb()`/`rgba()`, named colors) outside token/variable definitions.
   - Arbitrary numeric values for spacing (padding/margin/gap), font-size, border-radius, and box-shadow that don't already reference a token/variable.
   - Emoji/emoticons used as UI icons (see Phase 9 for what counts).
   - Any non-Meridian Kendo theme references (should already be zero after Phase 0).
2. **Record one row per occurrence** — file path, line number, the offending value/class, and which phase (4–10) will address it. Use the SQL `todos` table (or a scratch table) to persist this list durably across the whole pass — do not rely on carrying it in working memory alone. Example:
   ```sql
   CREATE TABLE modernize_findings (
     id INTEGER PRIMARY KEY,
     file TEXT, line INTEGER, category TEXT, value TEXT,
     status TEXT DEFAULT 'pending' -- pending | migrated | flagged_foreign | deferred
   );
   ```
   Use `deferred` for utility-class rows only when the user explicitly says to leave a specific usage alone — record the reason. There is no "utility classes are exempt by default" status anymore; de-utility-ification is mandatory (Phase 10).
3. **For utility classes specifically, also compute a duplication signal, not just a raw count**: total `className`/attribute occurrences, total individual utility tokens across them, and the count of *unique* class-string combinations among those. A large gap between total occurrences and unique strings (e.g. "718 utility tokens but only 100 unique combinations, with several exact strings repeated 9+ times verbatim") is itself a finding — it means Phase 10 should consolidate those repeats into one shared semantic class, not convert each occurrence independently. Surface this duplication breakdown in the up-front report, not just a bare class count — that number is what previously only came out after the user explicitly demanded "real numbers instead of a general explanation."
4. **Report the total count per category up front**, before proposing a plan — e.g. *"Inventory: 235 className attributes / 718 utility tokens / 100 unique combinations across 18 files (to be migrated to semantic classes — Phase 10; ~9 combinations repeat 9+ times each, strong candidates for shared classes), 37 hard-coded colors across 9 files, 21 arbitrary spacing values across 12 files, 6 emoji-as-icon usages."* This number is what "done" is measured against, not a subjective sense of progress.
5. **Re-run this same scan** at the Completeness Gate (Phase 13) and reconcile against this table — that's the whole reason it exists.


## Phase 2: Reconcile → DESIGN.md (self-contained)

Existing apps rarely ship a `DESIGN.md`, and their global customizations (a font set on `body`, a brand color in `:root`) are often applied to the app shell but **never to the Kendo theme** — so components visually diverge from the rest of the app. This phase builds `DESIGN.md` as the single source of truth by reconciling Meridian with what the project already does. Build it inline here — this is self-contained.

1. **Scan app-level / design-system customizations:**
   - Global type: `body`/`html`/`:root` `font-family`, base `font-size`, `line-height`.
   - Brand & semantic colors: `:root` custom properties, `--kendo-*` / `--color-*` vars, hard-coded brand hexes.
   - Theme overrides already present: `$kendo-*` SCSS variables, Tailwind `theme.extend`, CSS-in-JS theme objects.
   - Spacing / radius / shadow scales defined at the config or `:root` level.
2. **Seed from Meridian**, then let the project win on divergence:
   - **Persist intentional identity verbatim.** Brand/identity values (font family, brand colors, an intentional base font-size like `15px`) override the Meridian grid and are written into `DESIGN.md` as-is. Identity preservation beats the grid.
   - **Snap only incidental/arbitrary values** (a stray `13px` padding, a one-off `#3a3a3a` border) to the nearest Meridian token.
   - Where the project is silent, fall back to Meridian's value.
3. **Flag conflicts** — if the scan finds contradictory values (two different brand blues, font set in three places), list them and ask before resolving. Never silently pick one.
4. **Write `./DESIGN.md`** at the project root, following the section order and token schema of the bundled Meridian spec (`themes/meridian/DESIGN.md`). This file is the source of truth for Phases 3+.

## Phase 3: Propagate → theme (close the divergence)

`DESIGN.md` now records the reconciled tokens, but Kendo components still render with the untouched Meridian defaults. Push the tokens **down into the theme** so components match the app shell.

1. **Emit a theme customization layer** from the `DESIGN.md` tokens that diverge from Meridian defaults:
   - **SCSS projects** → `$kendo-*` variable overrides placed **before** the Meridian `@use`/`@import` (e.g. `$kendo-font-family`, `$kendo-color-primary`, `$kendo-border-radius`). Recompile.
   - **CSS / runtime-themed projects** → `--kendo-*` custom-property overrides on `:root` (or the theme scope).
2. **Only override what actually diverges** — don't restate values that already equal Meridian's defaults.
3. **Reuse existing token names** if the project already has a variable layer — map to Meridian *values*, keep their names.
4. **Verify** components now inherit the app's font/color/spacing (no more shell-vs-component drift) and the build still compiles.

After Phases 2–3, the app shell and Kendo components share one reconciled token set. The phases below snap the *remaining* arbitrary values in component/app styles to that set — the ones enumerated in the Phase 1 Inventory.

## Migration Strategy

A polished app can still be fragile underneath — values hardcoded, manually kept in sync, and prone to breaking the next time something changes. Before snapping anything, **classify each design module** (typography, spacing, color, elevation, shape/radius, motion) by how the app currently handles it. That classification — not a blanket pass — decides how each phase below behaves. The goal is to move loose, hardcoded values onto centralized variables so they stop drifting; it is **not** to impose Kendo's full taxonomy.

### Module pattern detection (per module, before aligning)

For each module, judge which bucket the app falls into:

- **Systematic (a loose pattern exists).** The app already has a discernible scale or tier system, even an imperfect one — e.g. box-shadows at ~3 consistent levels, a repeating spacing rhythm, a coherent type ramp. **Map the system onto the matching Kendo module variables**, preserving its level count and intent (a detected 3-tier elevation → three Kendo elevation levels, not five). Wire the values to variables so they stop drifting.
- **One-off / ad-hoc.** Scattered arbitrary values with no detectable pattern → snap each to the nearest Kendo token (the default per-phase behavior below).
- **Foreign / unmodelled system.** The app organizes a module in a way Kendo doesn't model (an extra semantic layer, a different scale axis, a system with no Kendo equivalent). **Leave it — don't force a mapping.** Provide guardrails, not enforcement; mark the corresponding Inventory rows `flagged_foreign` with a one-line reason and move on.

Prefer **system→system mapping over value→value snapping** wherever a pattern is detectable — centralizing a loose system onto variables is more durable than rounding isolated values. When a module is only partly systematic, map the part that patterns and snap the rest.

Apply changes in this order (lowest risk first). As each occurrence is handled, update its Inventory row (`migrated` / `flagged_foreign` / `deferred`) — don't wait until the end to reconcile.

### Phase 4: Typography (safe, visual-only)
- Map existing font sizes to the nearest scale token
- Normalize weights to 400/500/600/700
- Set line-heights to match the scale (1.4286 or 1.5)

### Phase 5: Spacing (low risk, may shift layout slightly)
- Replace arbitrary padding/margin with the nearest scale value
- Snap gap values to the scale
- Establish vertical rhythm: `0.5rem` within, `1rem` between, `2rem` across sections

### Phase 6: Colors (medium risk, visual change)
- Replace hard-coded colors with semantic role references
- Map existing values to their closest semantic equivalent:
  - Blues/navys → `primary`
  - Purples/violets → `secondary`
  - Reds → `error`
  - Greens → `success`
  - Yellows/ambers → `warning`
  - Grays → `subtle`, `base`, `border`
- Introduce CSS custom properties if the codebase doesn't use them
- When remapping state colors (error/success/warning), keep a non-color cue (icon, text, border) so meaning survives without color — you're touching these colors anyway

### Phase 7: Elevation & Shape (medium risk)
- Replace arbitrary box-shadows with the 5-level system
- Normalize border-radius to the scale
- Remove shadows from non-floating elements

### Phase 8: Translucency (Meridian surfaces — on by default, opt-out)

A sibling of elevation, not a subset: elevation adds depth with shadow and radius, translucency adds it with transparency and backdrop blur. Meridian gives elevated surfaces (AppBar, BottomNavigation, Card, Drawer, Popup, Popover, Tooltip, Window) a layered look driven by one token: `--kendo-translucency-base` (default `0%` = solid). Enabling it is a cheap, modern touch, so **apply a modest global value by default — but never force it.**

1. **Gate on Meridian.** This is a Kendo-owned system available only when the project uses the Meridian theme (i.e. after Phase 0). If the project doesn't use kendo-themes, **skip** — there's no translucency system to drive.
2. **Classify first (per the module lens).**
   - App is intentionally solid/flat, or already ships its own glass/blur treatment → **respect it.** Map an existing translucent intent onto `--kendo-translucency-base` rather than stacking a second effect; leave a deliberately flat design alone.
   - No surface treatment either way → **enable a modest default** (e.g. `:root { --kendo-translucency-base: 20%; }`).
3. **Default-on, not required.** Apply the default, but always tell the user it was enabled and how to opt out (set it back to `0%`, globally or per component). Honor an opt-out without argument.
4. **Scope when useful.** Translucency can be set per component, not just globally: `.k-card { --kendo-translucency-base: 30%; }`.
5. **Keep surfaces cohesive (couples with Phase 7).** Pair translucency changes with the surface-color and elevation tokens so overlays, containers, and shadows stay visually consistent — don't raise blur in isolation.

### Phase 9: Icons — emoji → Kendo SVG icons (medium risk, markup change)

Kendo ships a first-class SVG icon set (`@progress/kendo-svg-icons`). Target **v5** explicitly. Migrate emoji/emoticons that are used **as UI icons** to the matching Kendo SVG icon, consumed through each framework's SVG mechanism.

1. **Identify emoji used as icons** — scan JSX/HTML text, string literals, and button/label/nav/status content for:
   - Unicode emoji (🏠 🔍 ✏️ 🗑️ ✓ ⚙️ ⬇️ ⭐ ⚠️ ❌), and text emoticons used as glyphs (`:)`, `->`).
   - **Only migrate decorative/functional chrome** — buttons, nav items, menu entries, status badges, empty states.
   - **Do NOT touch content emoji** — user-generated text, chat messages, marketing copy, emoji that carry meaning as words. Flag ambiguous cases instead of converting.
2. **Map each emoji to the nearest Kendo icon** by meaning (🏠→`homeIcon`, 🔍→`searchIcon`, ✏️→`pencilIcon`, 🗑️→`trashIcon`, ✓→`checkIcon`, ⚙️→`gearIcon`, ⬇️→`downloadIcon`, ⚠️→`warningTriangleIcon`, ❌→`xIcon`, ⭐→`starOutlineIcon`/`starIcon`). If no confident match exists, leave the emoji and flag it — don't force a wrong icon.
3. **Ensure the dependency — target `@progress/kendo-svg-icons` v5.** Add it if absent, or pin/upgrade to v5. Import icons individually: `import { homeIcon } from '@progress/kendo-svg-icons'`.
   - **Exception — don't force v5 into an incompatible stack.** If v5 is only reachable via a larger version refactor that isn't safe right now (e.g. the project's Kendo component library — `@progress/kendo-react-*` / `@progress/kendo-angular-*` — is on an older major that pins an incompatible icons peer), do **not** bump it here. Use the highest icons version compatible with the installed component library, or skip the icon migration entirely and flag it: *"Icons v5 requires upgrading kendo-react-* from vX → vY — out of scope for this pass."* The consumption mechanism below is identical across icon versions, so lower versions still work if a match exists.
4. **Consume via the project's framework mechanism** (detect it — the project may not use a Kendo component library at all):
   - **Kendo React** → `import { SvgIcon } from '@progress/kendo-react-common'` → `<SvgIcon icon={homeIcon} />`.
   - **Kendo Angular** → `import { SVGIcon } from '@progress/kendo-angular-icons'` → `<kendo-svg-icon [icon]="homeIcon">`; expose the icon on the component class.
   - **Non-Kendo React / Vue / Svelte** → render the icon object inline (a small wrapper): `<svg viewBox={homeIcon.viewBox} dangerouslySetInnerHTML={{ __html: homeIcon.content }} />` (or the framework's raw-HTML equivalent).
   - **Pure HTML / vanilla JS** → inline the SVG: `<svg viewBox="…" aria-hidden="true">…icon content…</svg>`, or inject `icon.content` inside an `<svg viewBox={icon.viewBox}>` at runtime.
5. **Style consistently** — set `fill: currentColor` (or map to a semantic color token) so icons inherit text color; size with `em`/`font-size` or an explicit `width`/`height` from the type scale.
6. **Accessibility** (scoped to the icons you touch — not a general a11y pass):
   - Icon-only interactive element → add `aria-label`.
   - Purely decorative icon → `aria-hidden="true"` (and `role="img"` only when it conveys standalone meaning with a label).

### Phase 10: De-utility-ification — utility classes → semantic CSS/SCSS (mandatory, medium-to-high risk, markup change)

**Mandatory — runs by default on every pass, not opt-in.** Eliminate utility-class markup (Kendo's own `k-utils` package classes and Tailwind classes alike) and replace it with dedicated, semantically-named component CSS/SCSS classes, same as every other default phase. The DS spec is implementation-agnostic about *values* (see Rules) — but this workflow's own policy is not agnostic about architecture: utility classes are treated as a violation to migrate away from, not a style choice to leave alone. Only skip a specific occurrence when the user explicitly tells you to leave it (record it `deferred` with the reason) — never skip the phase wholesale just because utility classes are present and "already token-compliant."

The goal here is the reverse of Phase 11: eliminate utility-class composition in markup and replace it with dedicated, semantically-named component CSS/SCSS classes that reference the reconciled tokens from Phases 2–3. This is the one phase in this workflow allowed to touch structure/markup as well as values — the user asked for an architectural change, so the default "don't refactor architecture" rule doesn't apply here.

1. **Enumerate every utility-class occurrence** from the Inventory (Kendo `k-utils` classes like `k-d-flex`, `k-gap-*`, `k-p-*`, `k-m-*`, `k-justify-content-*`, and/or Tailwind classes like `flex`, `gap-4`, `p-2`, `rounded-md`). Group by the component/markup block they style, not by class name — a single component may compose many utility classes into one visual result.
2. **For each markup block, author a semantic class** name (BEM-like, `k-` prefixed to match repo convention — e.g. `.k-order-card`, `.k-order-card__actions`) and move the composed utility values into a real CSS/SCSS rule for that class, referencing tokens rather than restating raw values:
   ```scss
   // Before: <div class="k-d-flex k-gap-4 k-p-4 k-align-items-center">
   .k-order-card {
     display: flex;
     gap: var(--kendo-spacing-4);
     padding: var(--kendo-spacing-4);
     align-items: center;
   }
   ```
   ```jsx
   // After: <div className="k-order-card">
   ```
3. **Update the markup** to reference only the new semantic class(es), removing the utility classes from that element. Preserve any classes that aren't utility-derived (state classes, component library hooks, test IDs).
4. **Don't invent one giant catch-all stylesheet.** Co-locate the new rule with its component (same convention the codebase already uses for component CSS/SCSS — CSS Modules, a sibling `.scss` file, styled-components, etc.). If the project has no existing component-scoped CSS convention, ask which one to use rather than guessing.
5. **Watch for duplication vs. reuse.** If the same utility composition repeats verbatim across many components (e.g. a common flex-row-with-gap pattern), consider one shared semantic class (`.k-row`, `.k-stack`) instead of duplicating the rule per component — but don't force sharing across blocks that only coincidentally look similar today and are likely to diverge.
6. **Verify no visual change.** This phase is a pure refactor — composed values must match what the utility classes previously rendered. Screenshot-diff affected surfaces (ties into Phase 12) to confirm zero visual delta.
7. **Update the Inventory.** Utility-class rows move to `migrated` as each is converted, or `deferred` with a recorded reason if the user explicitly asked to leave a specific one alone. This phase's rows must also reach a terminal state at the Completeness Gate (Phase 13), same as every other category — since it's mandatory, `pending` utility-class rows block completion exactly like unresolved colors or spacing.

### Phase 11: Tailwind layout utilities (optional, human-triggered — the explicit exception to Phase 10)

**Opt-in only, and the explicit override of Phase 10 for the scope requested.** Never auto-detect or auto-run this phase — apply it exclusively when the user explicitly asks for it, and typically only on a subset of sample apps. Skip it entirely otherwise. Since Phase 10 is mandatory by default, requesting this phase for a given scope (e.g. "use Tailwind for page templates") is the user's explicit carve-out from de-utility-ification for that scope only — record those rows as `deferred` (reason: "Tailwind adopted per user request") rather than `migrated`, and don't apply Phase 10 to markup this phase intentionally keeps on utilities.

The goal is a clean division of labor: **reusable UI components keep CSS/SCSS** (dedicated stylesheets where you fine-tune the small details), while **pages, templates, and larger composed blocks use Tailwind** — styled in-place so they don't each need a bespoke stylesheet. Kendo tokens feed both so they stay visually consistent. See the bundled `references/tailwind-integration.md` (in the `kendo-themes` skill) for the full token-mapping reference.

1. **Gate on existing utility usage.** Only run where the app **already uses utility classes**. Do **not** migrate existing CSS/SCSS to Tailwind — this phase never rewrites working component styles into utilities. If the app has no utility classes, skip and flag: *"No existing utility usage — Tailwind phase skipped (opt-in, non-forcing)."*
2. **Require Tailwind v4.** This phase targets Tailwind **v4** (`@theme` in CSS) only. If the project is on v3 (`tailwind.config.js` `theme.extend`), do **not** attempt the mapping — flag it as out of scope and stop: *"Tailwind v3 detected — token exposure requires v4 `@theme`; skipped."*
3. **Expose Kendo tokens through Tailwind (Kendo owns tokens → Tailwind follows).** Since Phase 3 already made the Meridian theme the source of truth, map Tailwind's `@theme` variables at the `--kendo-*` tokens so utilities resolve to Kendo values:
   ```css
   @theme {
     --color-primary: var(--kendo-color-primary);
     --color-background: var(--kendo-color-app-surface);
     --radius-md: var(--kendo-border-radius-base);
     /* … map each utility group used in the app to its --kendo-* counterpart */
   }
   ```
   After this, `bg-primary`, `text-primary`, `rounded-md`, etc. draw from the Kendo theme — one design source across both systems.
4. **Framework-agnostic.** This is pure CSS-custom-property mapping, so it works anywhere Tailwind's build runs — React, Angular, Vue, **and Blazor**. Nothing depends on a JS component layer; only the Tailwind toolchain (CLI / PostCSS / Vite plugin) must be present.
5. **Load order.** Import the Kendo theme **before** Tailwind so utilities can override component styles when intentionally used for layout: `@progress/kendo-theme-meridian` first, then `tailwind.css`.
6. **Keep the component/page split.** Use Tailwind for page-level and composed-block styling (templates, sections, one-off page chrome) — the things that would otherwise each need a throwaway stylesheet. Leave reusable components on their CSS/SCSS. Only map/introduce the token groups the app already leans on (color, spacing, radius); don't expand Tailwind's surface beyond what's in use.

## Phase 12: Document — before/after capture (bookends the pass)

The modernization needs a visual record. This phase is **not linear** — it brackets the whole effort: shoot **"before"** *after the Inventory but before the first edit*, and **"after"** *at the Completeness Gate (Phase 13)*. Same surfaces, same states, so the pairs line up.

1. **Enumerate the affected surfaces first.** From the Inventory, list every page/view/component the migration will touch. Only capture what actually changes — don't shoot the whole app.
2. **Capture more than the initial viewport.** Static page screenshots miss most of the design system. **Drive the UI to reveal transient surfaces and capture each one**, in both before and after runs:
   - Overlays & popups: dialogs/modals, popovers, tooltips, dropdowns/comboboxes, menus & context menus, date/color pickers, notifications/toasts, drawers.
   - Conditional & interaction states: hover/focus/active, error/validation states, empty/loading states, expanded accordions, selected rows, open tabs.
   - Responsive breakpoints if layout changes across them.
   Trigger each (click, focus, open) and screenshot it — a surface that never appears on load is exactly where translucency, elevation, and color changes are most visible.
3. **Match before/after conditions.** Same viewport size, route, data, and theme mode (light/dark) for each pair, so the only delta is the migration.
4. **Organize the output.** Save into a predictable folder (e.g. `./modernization/before/` and `./modernization/after/`) with matching filenames per surface+state (`card-default.png`, `dialog-open.png`, `dropdown-expanded.png`). Reference them in the migration summary.
5. **Use whatever capture tooling the project already has** (Playwright/Cypress/Storybook, the repo's visual-test harness, or a running dev server). Don't add a heavy screenshot dependency just for this — if none is available, flag it and list the surfaces/states the user should capture manually.

## Phase 13: Completeness Gate (do not skip — this is what "done" means)

This phase is what turns the Inventory from a plan into an enforced contract. **A migration is not complete until this phase passes.**

1. **Re-run the exact same scans** used to build the Phase 1 Inventory, on the whole project, not just the files you touched.
2. **Reconcile every row.** Every occurrence originally recorded must now be in one of three terminal states:
   - `migrated` — snapped/mapped per its phase.
   - `flagged_foreign` — explicitly out of scope, with a one-line reason (per Migration Strategy).
   - `deferred` — explicitly called out to the user with a reason, and the user has acknowledged it.
3. **Any row still `pending` is a hard stop.** Go back and address it — either migrate it, or make an explicit classification decision and record why. Do not write a "Migration Summary" while `pending` rows remain; a partial pass with unresolved items is not a completed pass, and must not be presented as one.
4. **Report before/after counts per category** in the Migration Summary (see Output Format) — e.g. *"Tailwind classes: 142 → 0 remaining (3 flagged_foreign: third-party widget markup)."* A summary that only lists what changed, without the denominator it was measured against, does not satisfy this gate.

## Rules

### Preserve Intent
- If existing spacing is `13px`, map to `spacing-3` (0.75rem / 12px) or `spacing-3.5` (0.875rem / 14px) — pick the one that preserves the visual intent.
- Don't blindly round — consider what the original developer was trying to achieve.

### Don't Over-Engineer
- If the code already uses a design token system, map to the Kendo token *values* but keep the existing variable names. The DS is agnostic — `--app-space-md: 1rem` is perfectly valid.
- Don't refactor architecture. Only touch values, not structure — **except Phase 10 (de-utility-ification)**, which is mandatory and architecture-changing by design: eliminating utility-class markup is this workflow's default policy, not an opt-in extra.

### Guardrails, Not Enforcement
- Don't strongly impose the Kendo Design System. Where the app has a module Kendo doesn't model, or a system organized differently, leave it — surface it as a note, not a change.
- Map to a Kendo system only when the app already shows some (even imperfect) pattern for that module. Absence of a pattern is a reason to snap individual values, not to invent a system the app never had.
- **Value alignment is guardrails, not enforcement — class architecture (utility vs. semantic) is not.** The DS itself only judges whether *values* land on tokens; but this workflow's own de-utility-ification policy (Phase 10) is mandatory by default, so don't leave utility-class usage in place just because its values already resolve to tokens. Only leave a specific occurrence alone when the user explicitly says so (Phase 11, or an explicit `deferred`).

### Be Conservative
- When unsure between two scale values, pick the one closer to the original.
- Don't introduce new dependencies unless the user asks for it.
- Preserve existing class names and selectors — only change property values.

### Don't Stop Early
- The Inventory (Phase 1) is the denominator; the Completeness Gate (Phase 13) is the check against it. Neither is optional, and neither can be waved through — "most of the app is migrated" is not the same as "the Inventory reconciles."
- If the pass is genuinely too large for one sitting, say so explicitly and checkpoint: report exact Inventory progress (`87/142 migrated, 55 pending`) and resume from there next turn — don't silently narrow scope and present it as complete.
- **"It's a big mechanical pass" is not a reason to delegate it to a background/sub-agent.** Checkpointing across turns (above) is the correct response to size; handing the work to a sub-agent so "I don't lose context on our review" is not — it just moves the same stopping-early risk one level down, out of view.

### Comment Your Reasoning
- Add a brief inline comment only when the mapping is non-obvious:
  ```css
  /* DS: spacing-3 (0.75rem) — was 13px, snapped down to preserve tight grouping */
  padding: 0.75rem;
  ```
- Don't comment obvious 1:1 mappings.

## Output Format

For each file changed, show:
1. A brief summary of what was migrated
2. The diff (or full file if small)
3. Any decisions that could go either way (flagged for user review)

End with a migration summary that includes the Inventory reconciliation, not just a change list:

```markdown
## Migration Summary

| Category | Before → After | Risk |
|----------|-----------------|------|
| Theme migration | Bootstrap → Meridian (package + 4 imports) | Medium |
| DESIGN.md | Created (2 identity values preserved verbatim) | None |
| Theme propagation | 3 `$kendo-*` overrides emitted (font, primary, radius) | Medium |
| Typography | 12 → 0 remaining | Low |
| Spacing | 8 → 0 remaining | Low |
| Colors | 5 → 0 remaining | Medium |
| Elevation | 2 → 0 remaining | Medium |
| Translucency | `--kendo-translucency-base: 20%` (default-on, opt-out) | Low |
| Icons | 6 → 0 remaining | Medium |
| De-utility-ification | 89 utility classes → 14 semantic component classes across 12 files | Medium |
| Tailwind (opt-in) | 142 → 0 remaining (3 flagged_foreign) | Low |

**Total:** 30 changes across 4 files
**Inventory reconciliation:** 176/179 migrated, 3 flagged_foreign (reasons listed above), 0 pending
**Theme:** Meridian (migrated from Bootstrap) — or "N/A, project does not use kendo-themes"
**DESIGN.md:** Created at project root — preserved font `Poppins`, brand `#1a73e8`
**Before/after:** 14 surfaces captured (incl. 5 popup/dialog/dropdown states) → `./modernization/{before,after}/`
**Breaking changes:** None expected
**Visual delta:** Minor spacing shifts (< 2px per element); components now match app shell
```

If any Inventory row is still `pending`, do not emit this summary — report progress and continue instead (see "Don't Stop Early").

## Chaining

- Suggest a self-review of the migrated code against the design system — re-read the resolved spec and spot-check the changed surfaces for spacing, color, elevation, and typography compliance.
- Suggest a dedicated accessibility pass (`/accessibility` or `npm run test:a11y`) — modernization preserves a11y but doesn't remediate it; that's a separate discipline.
- If any component proves beyond repair, rebuild it from scratch against the design system rather than patching it further.
