# DS Abstraction — Exploration Notes

> **Purpose:** Explore how to abstract the Kendo Design System into a form that AI coding and design agents can consume effectively.

---

## Session 1 — 2026-06-30: Framing the Problem

### Key Question

Can the Kendo Design System exist as a **standalone, implementation-agnostic asset** — separate from any specific component library (Kendo React, Angular, Blazor, etc.)?

### The Architectural Fork

We identified two possible meanings of "abstracting" the DS:

- **A) DS = components.** The design system includes the actual component implementation. Abstracting means detaching styling from behavior (the "headless UI" path).
- **B) DS = standalone specification.** The design system is an abstract asset. Specific component libraries (Kendo React, Kendo Angular, or even a customer's own components) are projections/implementations of it.

**Decision: We're exploring path B.**

### Core Insight

The Kendo Design System's value isn't just "well-built components" — it's **well-designed decisions**: interaction patterns, accessibility contracts, spacing systems, state management, composition rules. Components are just one delivery vehicle for those decisions.

### Use Case

End users apply the **Kendo Design System** to their **own component suite**. An agent could be told: *"Build me a form using MY component library, but follow the Kendo Design System"* — and it would know the spacing, states, interaction patterns, accessibility contracts, and composition rules.

### What's In Scope (Design Decisions)

| Category | Example |
|---|---|
| **Behaviors** | "A date picker constrains keyboard navigation to valid dates" |
| **States** | "Error state uses `token.color.error` with a 4px left border" |
| **Design Tokens** | Spacing, color, typography as abstract references |
| **Accessibility Contracts** | "Data grids must announce sort changes to screen readers" |
| **Composition Rules** | "Forms group related fields with 16px vertical rhythm" |
| **Interaction Patterns** | "Dropdowns dismiss on outside click and Escape key" |

### What's Out of Scope (Implementation Details)

- Framework-specific props (`onChange`, `@Output`, etc.)
- CSS class names (`k-invalid`, `k-button-primary`)
- Import paths (`@progress/kendo-react-*`)
- Concrete DOM structure or markup

### Open Questions

- What **format** should this abstraction take? (Markdown? JSON schema? Both?)
- Should it be **testable/validatable** — can an agent check if a custom component correctly implements the Kendo DS spec?
- **Who authors** this asset? Design team? Engineering? Auto-generated from existing docs?
- How does an agent **bridge** from the abstract spec to a specific component library at code-generation time?
- What's the **delivery mechanism** for agents? (DESIGN.md? MCP plugin? Copilot Skill? RAG?)

---

## Session 2 — 2026-06-30: Distribution & Packaging (Plugin Research)

### Key Question

How do we **distribute** the Kendo Design System to AI agents? What's the right delivery mechanism?

### Research Subjects

- **Impeccable** (`pbakaus/impeccable`) — Design quality skill for AI coding agents
- **gstack** (`garrytan/gstack`) — Full SDLC workflow framework by Garry Tan (YC)

### Definitions: Plugin vs Skill vs DESIGN.md

| Concept | What it is | Role |
|---------|-----------|------|
| **Skill** | A Markdown file (SKILL.md) that teaches the AI how to do something | The content — instructions, procedures, commands |
| **Plugin** | A packaged bundle with a manifest (`.claude-plugin/plugin.json`) | The distribution format — versioning, marketplace, namespacing |
| **DESIGN.md** | A design system spec at the project root | Passive context — the AI reads it automatically for all interactions |

**Key insight:** You install plugins; you use skills. Plugins are containers, skills are the tools inside. A plugin doesn't add capability beyond what skills/hooks already provide — it's purely a distribution wrapper (like npm packages vs raw JS files).

### Findings: How Impeccable & gstack Compare

| | Impeccable | gstack |
|---|---|---|
| Scope | Design quality only | Full SDLC process |
| Is a plugin? | ✅ Yes (`.claude-plugin` manifest) | ❌ No (skills folder via git clone) |
| Distribution | `npx install`, marketplace, git submodule | `git clone` + `./setup` script |
| DESIGN.md approach | Generated per-project (`/impeccable init`) | N/A |
| Multi-tool support | 11 AI tools (Claude, Cursor, Codex, Gemini, etc.) | 10 AI tools |

gstack is a plugin in spirit, just not in packaging. It predates/developed alongside the marketplace system and solved distribution its own way.

### Decision: Layered Architecture

For Kendo, we don't generate DESIGN.md per-project (Impeccable's approach). Our design system IS the product — we impose it, consumers customize on top.

**Two layers:**

```
Plugin (we control, always up to date):
  └── skills/kendo/DESIGN.md       ← Kendo base: components, patterns, tokens, anti-patterns

Project root (consumer controls):
  └── DESIGN.md                    ← Their overrides: brand colors, fonts, spacing, voice
```

The skill instructs the AI: "Read Kendo base first, then apply project-level overrides."

**Why this wins:**
- Kendo updates (new components, patterns) flow through to consumers automatically
- Users customize brand freely via project-level overrides
- Plugin never becomes obsolete — always provides the foundation
- Same mental model as Kendo theming today (we ship components, they apply CSS variables)

### Recommended Plugin Structure

```
kendo-design/
├── .claude-plugin/
│   └── plugin.json            ← metadata + dependency on kendo-themes
├── skills/
│   └── kendo/
│       ├── SKILL.md           ← instructions + future commands (audit, migrate, etc.)
│       └── DESIGN.md          ← Kendo base spec (components, tokens, patterns)
```

### Plugin Dependencies

Plugins can declare dependencies on other plugins:

```json
{
  "name": "kendo-design",
  "version": "1.0.0",
  "dependencies": ["kendo-themes"]
}
```

- `kendo-themes` (existing skill for ready-made styles, no components) → publish as standalone plugin
- Installing `kendo-design` auto-pulls `kendo-themes`
- Users can install `kendo-themes` independently if they only want styles

### Growth Path

| Phase | What we ship | Value |
|-------|-------------|-------|
| **Now** | DESIGN.md inside a plugin shell | Passive context — AI defaults to Kendo |
| **Next** | Add commands: `/kendo audit`, `/kendo migrate`, `/kendo component` | Active capabilities |
| **Later** | Hooks (auto-lint on save), agents, monitors | Automated enforcement |

**Why start as a plugin even with just DESIGN.md:**
- Cost today = one `plugin.json` file
- Cost of retrofitting later = restructuring, re-distributing, breaking users

### Multi-Theme Strategy

**Context:** Kendo's design system is theme-based. Themes (Default, Material, Bootstrap, Fluent, etc.) are all equally preferred — there's no "primary" and "secondary." DESIGN.md has no standard schema and no built-in multi-theme support; it's freeform.

**Decision: One complete DESIGN.md per theme (Option A)**

Each theme file is a self-contained, standalone spec — includes everything (tokens, behaviors, a11y, composition rules). The consumer picks one, copies it to their project root, and customizes from there.

```
Plugin:
├── skills/kendo/
│   ├── SKILL.md                 ← init command: "which theme?" → copies it
│   └── themes/
│       ├── default.md           ← Complete, self-contained DESIGN.md
│       ├── material.md
│       ├── bootstrap.md
│       └── fluent.md

Consumer's project root (after /kendo init):
└── DESIGN.md                    ← Copied from chosen theme, now theirs to customize
```

**Why Option A over layered approach (base + overlay):**
- Simplest mental model: pick one file, copy it, done
- No "load base then overlay" indirection for the AI to handle
- Consumer sees one complete source of truth
- Easy to understand what you're getting

**Managing duplication (internal concern, invisible to consumer):**

Each theme file repeats shared content (behaviors, a11y, composition). Internally, we maintain DRY sources and compose at build time:

```
Source (our repo):                    Built output (in plugin):
  base.md                               themes/default.md    ← base + default tokens
  + themes/default-tokens.md            themes/material.md   ← base + material tokens
  + themes/material-tokens.md           themes/bootstrap.md  ← base + bootstrap tokens
  + themes/bootstrap-tokens.md          themes/fluent.md     ← base + fluent tokens
```

Consumer gets a clean standalone file. We maintain composable sources. Updates to shared behavior (e.g., new component spec) propagate to all themes via the build step.

### Open Questions (from this session)

- What goes in each theme DESIGN.md? (tokens, component catalog, anti-patterns, usage guidance?)
- What commands would be most valuable first? (`/kendo audit`? `/kendo generate`? `/kendo migrate`?)
- Should we support multi-tool distribution beyond Claude Code? (Cursor, Codex, Gemini CLI)
- How does `kendo-themes` relate? Does it need its own plugin manifest?
- Can we auto-detect if a project already has a DESIGN.md and skip/merge intelligently?
- How do we handle theme updates after a consumer has customized their copy?

---

## Session 3 — 2026-07-06: DESIGN.md Adoption & Identity Framing

### DESIGN.md Adoption Status

The Google DESIGN.md specification (open-sourced April 2026) is already the de facto standard for describing visual identity to AI coding agents. Native support confirmed in:

- **Google Stitch** — originated here
- **Claude Code** — reads from project root
- **Cursor** — reads from project root
- **GitHub Copilot** — reads from project root
- **Gemini** — native via Stitch

Agents look for `DESIGN.md` at the project root (same convention as `README.md`). No plugin/skill infrastructure is required for the file to be consumed.

### Implication for Our Approach

**DESIGN.md alone delivers ~90% of the value.** A consumer who drops our DESIGN.md in their project root gets design system enforcement from any major AI agent — zero plugin overhead.

The SKILL.md becomes a **distribution/packaging mechanism**, not a requirement:
- Bundling DESIGN.md into an installable plugin with `/kendo init`
- Theme selection (meridian vs material vs bootstrap at init time)
- Explaining kendo-themes coordination when both are present

### Key Insight: Visual Identity Framing

**Q:** Is the Kendo Design System the consumer's visual identity?
**A:** Yes — always.

The Kendo Design System = the **rules, rhythm, structure, and patterns**.
Themes = the **values that fill those rules**.

Swapping `color.primary` from one value to another doesn't create a different design system — it's still the Kendo DS wearing different clothes. The 4px rhythm, 3-tier elevation, state expression model — those are the DS.

Consumer scenarios (refined):
1. **Out-of-the-box** (e.g. Meridian) → our tokens + our rules = our DS ✅
2. **Custom theme** → their tokens + our rules = still our DS ✅
3. **Custom DS on Kendo components** → their rules + their tokens = NOT our target ❌

### Multi-Theme Simplification

This framing confirms: each DESIGN.md variant (meridian, material, bootstrap, fluent, classic) differs **only in YAML frontmatter tokens**. The markdown body (rules, rationale, Do's and Don'ts) is **identical** across all themes — because the rules ARE the design system, regardless of color palette.

### Decisions Made

| # | Decision | Rationale |
|---|----------|-----------|
| 1 | DESIGN.md is self-sufficient | Industry-standard, all major agents support it natively |
| 2 | SKILL.md = optional distribution layer | Adds init workflow and theme coordination, not core value |
| 3 | Kendo DS = rules (invariant across themes) | Tokens change per theme; structure/patterns/guardrails don't |
| 4 | Consumer always inherits our visual identity | Even with custom tokens, they're using our DS — not building their own |
| 5 | Multi-theme = same body, different frontmatter | DRY by design — one source of truth for rules |

### Open Questions (from this session)

- How do we package the "body stays the same, frontmatter varies" multi-theme build?
- Should DESIGN.md ship as part of `@progress/kendo-theme-*` npm packages?
- Do we provide a CLI/script for consumers to generate a custom-theme DESIGN.md from a base?
- What's the minimum viable DESIGN.md body content for first validation?


---

## Session 4 — 2026-07-16: Command Namespacing & Skill→Agent Delegation

### Key Question

Should DS operations be exposed as separate top-level slash commands (`/ds-init`, `/ds-audit`, …) or namespaced under a single Impeccable-style entry point (`/kendo-design <subcommand>`)?

### Research: How Impeccable Does It

- Impeccable = one `user-invocable: true` skill named `impeccable` + ~23 sub-commands passed as **free-text arguments** (`/impeccable init`, `/impeccable audit`). The skill name IS the namespace.
- It splits concerns: PRODUCT.md (strategic) + DESIGN.md (visual tokens); has `init` (interview) and `document` (scan vs seed) flows.

### CLI Behavior — Verified Against the Bundle

Checked `@github/copilot` `app.js` directly (not guessed):

| Finding | Evidence |
|---|---|
| Slash name = filename/skill-name minus `.md`, validated `^[a-zA-Z0-9][a-zA-Z0-9._\- ]*$`, ≤64 chars | `das()` fn |
| **No plugin namespace is ever prepended** to command names | — |
| `user-invocable` and `disable-model-invocation` are **independent** flags | a skill can auto-load AND be user-invocable |
| Trailing text after a slash command is **free text** passed to the body | body routes on keywords |
| **`argument-hint` is NOT parsed by Copilot CLI** (zero matches) — it's a Claude Code convention | grep of bundle |

### Autocomplete Tradeoff (settled)

- `/kendo-design` (the skill name) **autocompletes**; the subcommand (`init`) does **not** — it's typed from memory. No per-command arg schema exists, and `argument-hint` is ignored by Copilot CLI.
- Discrete `/ds-*` commands would each fully autocomplete, but at the cost of a cluttered top-level namespace.
- **Chose namespacing** (`/kendo-design <sub>`) for intuitive DX; accepted the no-subcommand-autocomplete cost. Impeccable makes the same tradeoff.

### Architecture (implemented & verified)

One entry point, `/kendo-design <subcommand>`:

| Subcommand | How it runs |
|---|---|
| `init` | **Inline flow** — skill reads `references/init.md`, runs scan/seed, writes project-root `DESIGN.md` |
| `audit` | **Delegates to `ds-audit` subagent** |
| `modernize` | Delegates to `ds-modernize` subagent |
| `generate` | Delegates to `ds-generate` subagent |
| _(passive / no subcommand)_ | Auto-loads and enforces the spec when writing/reviewing UI |

- `skills/kendo-design/SKILL.md` → `user-invocable: true` + compact routing table (passive behavior unchanged).
- `commands/ds-init.md` → moved to `skills/kendo-design/references/init.md` (progressive disclosure). `commands/` dir dropped.

### THE key finding: skill→agent delegation works natively

Tested `/kendo-design audit` headless (`--yolo`) against a mock project with deliberate violations. Output showed the runtime spawn a namespaced subagent:

```
● Read (Kendo-design:ds-audit agent — Kendo DS compliance audit)
  └ Completed
```

The `ds-audit` agent ran its full persona (caught contrast fails, off-grid spacing `13/27/7/5/9px`, off-scale type, hard-coded colors) and returned a structured report; the main session condensed it.

**Implication:** we keep BOTH the tidy namespace AND the rich agent personas — no need to fold agent capabilities into the skill or flatten to a simpler orchestration. `modernize`/`generate` use the identical delegation path.

`/kendo-design init` was also verified end-to-end: scan mode detected Meridian+React, **preserved the project's committed brand color (`#1a73e8`) and `Inter` font**, resolved the rest to Meridian tokens.

### Decisions Made

| # | Decision | Rationale |
|---|----------|-----------|
| 1 | Namespace under `/kendo-design <sub>` (retire `/ds-init`) | Intuitive, uncluttered DX; Impeccable-proven pattern |
| 2 | Skill is `user-invocable: true` AND still auto-loads | Independent flags; no downside |
| 3 | `init` runs inline; audit/modernize/generate delegate to agents | Verified delegation fires — personas preserved |
| 4 | `argument-hint` not used | Copilot CLI ignores it |
| 5 | Accept no subcommand autocomplete | Cost of namespacing; matches Impeccable |

### Open Questions (from this session)

- Do we keep thin `/ds-*` alias commands for power-user autocomplete, or fully retire them? (Currently retired.)
- Should `init`'s seed-mode interview be shortened further, or is the current 3-question set right?
- Same delegation confirmed for `audit` — spot-check `modernize`/`generate` before shipping, or trust the shared path?

---

---

## Session 5 — 2026-07-16: Multi-Theme DESIGN.md Layout

### Context

The bundled spec was a single `references/DESIGN.md` (which turned out to *be* the Meridian theme — its oklch values match `packages/meridian/scss/core/color-system/_swatch.scss`). Kendo ships six themes, so a single spec can't represent them all. We needed a per-theme layout and to weight in **Meridian** as the recommended default (v14.0.0+), distinct from the **Default** theme (the *old* default, now maintenance mode).

### Layout Decision

Per-theme specs now live **next to SKILL.md**, one folder per theme, out of `references/`:

```
skills/kendo-design/
├── SKILL.md
├── references/
│   └── init.md
└── themes/
    ├── meridian/DESIGN.md   ← recommended default (was references/DESIGN.md)
    ├── default/DESIGN.md    ← original theme, maintenance mode (authored this session)
    ├── bootstrap/DESIGN.md  ← placeholder (TODO, no token frontmatter)
    ├── material/DESIGN.md   ← placeholder
    ├── fluent/DESIGN.md     ← placeholder
    └── classic/DESIGN.md    ← placeholder
```

Reconciles the user's two instincts: per-theme `themes/<theme>/DESIGN.md` structure, rooted **inside the skill package** (bundled), not in a repo-root `/themes/` or the external docs repo.

### Scope This Pass

Meridian already exists → kept as-is (relabelled). Only **Default** was fully authored; the other four are **TODO placeholders** that point at their in-repo token sources so a future agent (or sub-agent) can fill them in without guessing.

### Token Provenance (source of truth = this repo)

| Token group | Source (per theme) |
|---|---|
| Colors | `packages/<theme>/scss/core/color-system/_swatch.scss` (anchor = non-`oklch(from …)` entries). Default uses `packages/core/.../_swatch.scss` (`$default-colors`). |
| Border radius | `packages/<theme>/scss/core/border-radii/index.scss` (base × multipliers) |
| Typography | `packages/<theme>/scss/core/typography/index.scss` (font stack + scale) |
| Spacing | `packages/<theme>/scss/core/spacing/index.scss` (shared 0.25rem base) |
| Elevation | `packages/<theme>/scss/core/elevation/index.scss` (shadow levels 1–5) |
| Narrative / usage | external `kendo-design-system` docs: `apps/docs/content/pages/{foundation,themes/kendo-themes/<theme>}/**/index.mdx` |

### Default vs Meridian (the real deltas)

| Aspect | Meridian (default) | Default (maintenance) |
|---|---|---|
| Primary | navy-slate `oklch(37.17% …)` | signature red-orange `oklch(69.85% 0.1923 27.19deg)` |
| Font | Inter first | system-ui stack (no Inter) |
| Radius base | 0.375rem (6px) | 0.25rem (4px) |
| Elevation | warm-cool gray `rgb(56,66,80)`, layered `-y` offsets | neutral black `rgba(0,0,0,…)`, simpler scale |
| Spacing / type scale | — | **identical** to Meridian |

### Theme Selection (spec resolution)

SKILL.md spec-resolution is now theme-aware: **project-local `./DESIGN.md` > `themes/<theme>/DESIGN.md`**. Detect theme from installed `@progress/kendo-theme-<name>` / imported swatch / user choice → map to folder; if placeholder or unknown → fall back to `themes/meridian/DESIGN.md`. sessionStart hook + run-eval.sh now seed `themes/meridian/DESIGN.md`.

### Verification

`/kendo-design init` (headless, `--yolo`) on a mock `@progress/kendo-theme-default` React project: detected Default → read `themes/default/DESIGN.md` (not meridian) → generated a tailored `DESIGN.md` preserving Default's red-orange primary and system-ui font. Theme routing confirmed. Committed `6cd21f9b68`. Plugin bumped 0.2.5 → 0.2.6.

### Decisions Made

| # | Decision | Rationale |
|---|----------|-----------|
| 1 | Per-theme `themes/<theme>/DESIGN.md`, next to SKILL.md, out of `references/` | Scales to all 6 themes; keeps specs bundled with the skill |
| 2 | Meridian = default; existing spec relabelled `themes/meridian/DESIGN.md` | It already *was* Meridian; matches v14.0.0 recommendation |
| 3 | Author Default now; placeholders for bootstrap/material/fluent/classic | User asked to keep it simple; placeholders carry authoring instructions |
| 4 | Placeholders ship **no token frontmatter** | Prevents agents consuming half-defined values; forces meridian fallback |
| 5 | Token values extracted from repo SCSS, never hand-written | Accuracy; placeholders document exact source paths |

### Open Questions (from this session)

- Author the four placeholder themes — do it directly, or spawn a sub-agent per theme (the original idea) now that the pattern + source map are proven?
- Should the theme body (principles, do's/don'ts, motion, iconography) be factored into a shared include instead of duplicated per theme, or is per-file duplication fine for a spec that agents read whole?
- Does the external `kendo-design-system` narrative add enough per-theme nuance to justify pulling from it, or are the repo SCSS values sufficient?
