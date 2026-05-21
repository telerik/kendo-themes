#!/usr/bin/env node

/* eslint-disable no-console */

/**
 * CSS Compliance Audit
 *
 * Validates compiled CSS dist files against:
 *   1. W3C CSS syntax (via css-tree parse errors)
 *   2. Browser compatibility (via the project's .browserslistrc + caniuse-lite)
 *   3. Deprecated / removed CSS features
 *
 * Usage:
 *   node audit-css.mjs [theme] [--category syntax|compat|deprecated|all]
 *
 * Requires: css-tree (peer), caniuse-lite + browserslist (already in repo)
 */

import { readFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { parseArgs } from "node:util";

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

const { values, positionals } = parseArgs({
    options: {
        category: { type: "string", default: "all" },
        help: { type: "boolean", short: "h", default: false },
        json: { type: "boolean", default: false },
        verbose: { type: "boolean", short: "v", default: false },
    },
    allowPositionals: true,
    strict: false,
});

if (values.help) {
    console.log(`
CSS Compliance Audit — validate compiled CSS against W3C specs and browser targets.

Usage:
  node audit-css.mjs [THEME] [OPTIONS]

Arguments:
  THEME               Theme name (default, classic, material, fluent, bootstrap)
                      or "all" (default: all)

Options:
  --category CAT      Category: syntax, compat, deprecated, or all (default: all)
  --json              Output results as JSON
  -v, --verbose       Show passing checks too
  -h, --help          Show this help

Categories:
  syntax       W3C CSS parse errors (invalid properties, malformed values)
  compat       Browser compatibility issues per .browserslistrc targets
  deprecated   Deprecated / removed CSS features

Examples:
  node audit-css.mjs
  node audit-css.mjs default
  node audit-css.mjs fluent --category compat
  node audit-css.mjs all --category syntax --json
`);
    process.exit(0);
}

const REPO_ROOT = resolve(
    new URL(".", import.meta.url).pathname,
    "../../../.."
);
const THEMES = ["default", "classic", "material", "fluent", "bootstrap"];
const targetTheme = positionals[0] || "all";
const category = values.category || "all";

let themes;
if (targetTheme === "all") {
    themes = THEMES;
} else if (THEMES.includes(targetTheme)) {
    themes = [targetTheme];
} else {
    console.error(`Unknown theme: ${targetTheme}`);
    process.exit(1);
}

// ---------------------------------------------------------------------------
// Dynamic imports — these packages may not be installed yet
// ---------------------------------------------------------------------------

let cssTree;
try {
    cssTree = await import("css-tree");
} catch {
    console.error(
        "css-tree is required. Install it:\n  npm install --save-dev css-tree"
    );
    process.exit(1);
}

let browserslist;
try {
    browserslist = (await import("browserslist")).default;
} catch {
    console.error("browserslist is required (should already be installed).");
    process.exit(1);
}

let caniuseLite;
try {
    caniuseLite = await import("caniuse-lite");
} catch {
    console.error("caniuse-lite is required (should already be installed).");
    process.exit(1);
}

// ---------------------------------------------------------------------------
// Browser target resolution
// ---------------------------------------------------------------------------

const targetBrowsers = browserslist(undefined, { path: REPO_ROOT });

/**
 * Check if a caniuse feature is fully supported by all target browsers.
 * Returns { supported: boolean, unsupported: string[] }
 */
function checkFeatureSupport(featureId) {
    let featureData;
    try {
        const packed = caniuseLite.features[featureId];
        if (!packed) {
            return { supported: true, unsupported: [] };
        }
        featureData = caniuseLite.feature(packed);
    } catch {
        return { supported: true, unsupported: [] };
    }

    const unsupported = [];

    for (const browser of targetBrowsers) {
        // browser format: "chrome 120"
        const parts = browser.split(" ");
        const name = parts[0];
        const version = parts.slice(1).join(" ");

        const stats = featureData.stats[name];
        if (!stats) {
            continue;
        }

        // Find the closest matching version
        const support = stats[version];
        if (!support) {
            continue;
        }

        // "y" = supported, "a" = partial, "n" = not supported, "p" = polyfill
        // Flags can have notes like "y x" (prefixed) or "a #1"
        const flag = support.split(" ")[0];
        if (flag === "n" || flag === "p") {
            unsupported.push(browser);
        }
    }

    return { supported: unsupported.length === 0, unsupported };
}

// ---------------------------------------------------------------------------
// 1. Syntax validation (W3C CSS parse errors via css-tree)
// ---------------------------------------------------------------------------

function auditSyntax(css, filePath) {
    const issues = [];

    // Parse with error collection
    const parseErrors = [];
    try {
        const ast = cssTree.parse(css, {
            filename: filePath,
            positions: true,
            onParseError(error) {
                parseErrors.push(error);
            },
        });

        // Also validate property values against W3C syntax definitions
        cssTree.walk(ast, {
            visit: "Declaration",
            enter(node) {
                // Skip custom properties -- they accept any value
                if (node.property.startsWith("--")) {
                    return;
                }

                // Skip declarations whose value contains var() —
                // css-tree cannot validate substituted values
                const valueStr = cssTree.generate(node.value);
                if (/\bvar\s*\(/.test(valueStr)) {
                    return;
                }

                const syntax = cssTree.lexer.matchProperty(
                    node.property,
                    node.value
                );

                if (syntax && syntax.error) {
                    // Filter out known-good modern syntax that css-tree might not support yet
                    if (isKnownModernSyntax(node.property, valueStr)) {
                        return;
                    }

                    issues.push({
                        category: "syntax",
                        severity: "warning",
                        property: node.property,
                        value: valueStr.substring(0, 120),
                        message: syntax.error.message,
                        line: node.loc?.start?.line,
                        column: node.loc?.start?.column,
                        file: filePath,
                    });
                }
            },
        });
    } catch (e) {
        issues.push({
            category: "syntax",
            severity: "error",
            message: `Fatal parse error: ${e.message}`,
            file: filePath,
        });
    }

    for (const err of parseErrors) {
        issues.push({
            category: "syntax",
            severity: "error",
            message: err.message,
            line: err.line,
            column: err.column,
            file: filePath,
        });
    }

    return issues;
}

/**
 * Filter out valid modern CSS that css-tree may not fully support.
 */
function isKnownModernSyntax(property, value) {
    // oklch() and oklch(from ...) — CSS Color Level 4 / 5
    if (/oklch\s*\(/.test(value)) {
        return true;
    }
    // color-mix() — CSS Color Level 5
    if (/color-mix\s*\(/.test(value)) {
        return true;
    }
    // light-dark() — CSS Color Level 5
    if (/light-dark\s*\(/.test(value)) {
        return true;
    }
    // Relative color syntax with `from`
    if (/\bfrom\s+var\(/.test(value)) {
        return true;
    }
    // anchor() positioning
    if (/anchor\s*\(/.test(value)) {
        return true;
    }

    return false;
}

// ---------------------------------------------------------------------------
// 2. Browser compatibility audit
// ---------------------------------------------------------------------------

/**
 * CSS features to check, mapped to caniuse IDs and detection patterns.
 */
const COMPAT_FEATURES = [
    {
        id: "css-oklch",
        caniuseId: "mdn-css_types_color_oklch",
        label: "oklch() color function",
        pattern: /oklch\s*\(/,
    },
    {
        id: "css-color-mix",
        caniuseId: "mdn-css_types_color_color-mix",
        label: "color-mix() function",
        pattern: /color-mix\s*\(/,
    },
    {
        id: "css-relative-color",
        caniuseId: "css-relative-colors",
        label: "Relative color syntax (oklch from ...)",
        pattern: /oklch\(\s*from\b/,
    },
    {
        id: "css-has",
        caniuseId: "css-has",
        label: ":has() pseudo-class",
        pattern: /:has\s*\(/,
    },
    {
        id: "css-matches",
        caniuseId: "css-matches-pseudo",
        label: ":is() pseudo-class",
        pattern: /:is\s*\(/,
    },
    {
        id: "css-where",
        caniuseId: "mdn-css_selectors_where",
        label: ":where() pseudo-class",
        pattern: /:where\s*\(/,
    },
    {
        id: "css-nesting",
        caniuseId: "css-nesting",
        label: "CSS Nesting",
        pattern: /\{[^}]*\{/,
    },
    {
        id: "css-container-queries",
        caniuseId: "css-container-queries",
        label: "@container queries",
        pattern: /@container\b/,
    },
    {
        id: "css-cascade-layers",
        caniuseId: "css-cascade-layers",
        label: "@layer (cascade layers)",
        pattern: /@layer\b/,
    },
    {
        id: "css-subgrid",
        caniuseId: "css-subgrid",
        label: "subgrid",
        pattern: /subgrid/,
    },
    {
        id: "css-at-property",
        caniuseId: "mdn-css_at-rules_property",
        label: "@property rule",
        pattern: /@property\b/,
    },
    {
        id: "css-custom-properties",
        caniuseId: "css-variables",
        label: "CSS Custom Properties (var())",
        pattern: /var\s*\(--/,
    },
    {
        id: "css-grid",
        caniuseId: "css-grid",
        label: "CSS Grid Layout",
        pattern: /display\s*:\s*grid/,
    },
    {
        id: "css-flexbox-gap",
        caniuseId: "flexbox-gap",
        label: "gap in Flexbox",
        pattern: /gap\s*:/,
    },
    {
        id: "css-logical-properties",
        caniuseId: "css-logical-props",
        label: "Logical properties (inline-size, etc.)",
        pattern: /\b(inline-size|block-size|margin-inline|padding-inline|border-inline|inset-inline|margin-block|padding-block|border-block|inset-block)\b/,
    },
    {
        id: "css-color-function",
        caniuseId: "css-color-function",
        label: "color() function",
        pattern: /\bcolor\s*\(\s*(srgb|display-p3|a98-rgb|prophoto-rgb|rec2020)/,
    },
    {
        id: "css-light-dark",
        caniuseId: "mdn-css_types_color_light-dark",
        label: "light-dark() function",
        pattern: /light-dark\s*\(/,
    },
];

function auditCompat(css, filePath) {
    const issues = [];

    for (const feat of COMPAT_FEATURES) {
        const matches = css.match(new RegExp(feat.pattern, "g"));
        if (!matches || matches.length === 0) {
            continue;
        }

        const { supported, unsupported } = checkFeatureSupport(feat.caniuseId);

        if (!supported) {
            issues.push({
                category: "compat",
                severity: "warning",
                feature: feat.label,
                caniuseId: feat.caniuseId,
                occurrences: matches.length,
                unsupportedBrowsers: unsupported,
                file: filePath,
            });
        } else if (values.verbose) {
            issues.push({
                category: "compat",
                severity: "info",
                feature: feat.label,
                occurrences: matches.length,
                message: "Fully supported by all target browsers",
                file: filePath,
            });
        }
    }

    return issues;
}

// ---------------------------------------------------------------------------
// 3. Deprecated / removed CSS features
// ---------------------------------------------------------------------------

const DEPRECATED_PATTERNS = [
    {
        pattern: /-webkit-appearance\s*:/,
        replacement: "appearance",
        message:
            "-webkit-appearance is deprecated; use unprefixed 'appearance' instead",
    },
    {
        pattern: /-moz-appearance\s*:/,
        replacement: "appearance",
        message:
            "-moz-appearance is deprecated; use unprefixed 'appearance' instead",
    },
    {
        pattern: /-webkit-box-orient\s*:/,
        replacement: "flex-direction",
        message:
            "-webkit-box-orient is deprecated; use flexbox (flex-direction) instead",
    },
    {
        pattern: /-webkit-box-align\s*:/,
        replacement: "align-items",
        message:
            "-webkit-box-align is deprecated; use flexbox (align-items) instead",
    },
    {
        pattern: /-webkit-box-pack\s*:/,
        replacement: "justify-content",
        message:
            "-webkit-box-pack is deprecated; use flexbox (justify-content) instead",
    },
    {
        pattern: /-ms-flexbox\b/,
        replacement: "flex",
        message: "-ms-flexbox is deprecated; use unprefixed 'flex' instead",
    },
    {
        pattern: /-ms-flex-\w+/,
        replacement: "flex-*",
        message: "-ms-flex-* properties are deprecated; use unprefixed flex",
    },
    {
        pattern: /-webkit-linear-gradient\s*\(/,
        replacement: "linear-gradient()",
        message:
            "-webkit-linear-gradient is deprecated; use unprefixed linear-gradient()",
    },
    {
        pattern: /-webkit-radial-gradient\s*\(/,
        replacement: "radial-gradient()",
        message:
            "-webkit-radial-gradient is deprecated; use unprefixed radial-gradient()",
    },
    {
        pattern: /-ms-filter\s*:/,
        replacement: "filter or opacity",
        message:
            "-ms-filter is removed (IE-only); use standard 'filter' or 'opacity'",
    },
    {
        pattern: /-ms-transform\s*:/,
        replacement: "transform",
        message: "-ms-transform is deprecated; use unprefixed 'transform'",
    },
    {
        pattern: /-webkit-transform\s*:/,
        replacement: "transform",
        message: "-webkit-transform is deprecated; use unprefixed 'transform'",
    },
    {
        pattern: /-webkit-transition\s*:/,
        replacement: "transition",
        message:
            "-webkit-transition is deprecated; use unprefixed 'transition'",
    },
    {
        pattern: /-webkit-animation\s*:/,
        replacement: "animation",
        message: "-webkit-animation is deprecated; use unprefixed 'animation'",
    },
    {
        pattern: /-webkit-user-select\s*:/,
        replacement: "user-select",
        message:
            "-webkit-user-select is deprecated; use unprefixed 'user-select'",
    },
    {
        pattern: /-moz-user-select\s*:/,
        replacement: "user-select",
        message:
            "-moz-user-select is deprecated; use unprefixed 'user-select'",
    },
    {
        pattern: /-ms-user-select\s*:/,
        replacement: "user-select",
        message:
            "-ms-user-select is deprecated; use unprefixed 'user-select'",
    },
    {
        pattern: /-webkit-text-size-adjust\s*:/,
        replacement: "text-size-adjust",
        message:
            "-webkit-text-size-adjust should use unprefixed 'text-size-adjust'",
    },
    {
        pattern: /-webkit-font-smoothing\s*:/,
        replacement: "font-smooth (non-standard)",
        message:
            "-webkit-font-smoothing is non-standard; consider if it's needed",
    },
    {
        pattern: /(?<!-)zoom\s*:\s*[^;]*;/,
        replacement: "transform: scale()",
        message:
            "zoom is non-standard; use 'transform: scale()' for cross-browser support",
    },
];

function auditDeprecated(css, filePath) {
    const issues = [];
    const lines = css.split("\n");

    for (const dep of DEPRECATED_PATTERNS) {
        let count = 0;
        const matchLines = [];

        for (let i = 0; i < lines.length; i++) {
            if (dep.pattern.test(lines[i])) {
                count++;
                if (matchLines.length < 5) {
                    matchLines.push(i + 1);
                }
            }
        }

        if (count > 0) {
            issues.push({
                category: "deprecated",
                severity: "warning",
                message: dep.message,
                replacement: dep.replacement,
                occurrences: count,
                sampleLines: matchLines,
                file: filePath,
            });
        }
    }

    return issues;
}

// ---------------------------------------------------------------------------
// Report formatting
// ---------------------------------------------------------------------------

function formatTextReport(allResults) {
    const lines = [];
    let totalIssues = 0;

    for (const { theme, issues } of allResults) {
        const errors = issues.filter((i) => i.severity === "error");
        const warnings = issues.filter((i) => i.severity === "warning");
        const infos = issues.filter((i) => i.severity === "info");

        lines.push(`\n=== Theme: ${theme} ===`);

        if (issues.length === 0) {
            lines.push("  No issues found.");
            continue;
        }

        // Group by category
        for (const cat of ["syntax", "compat", "deprecated"]) {
            const catIssues = issues.filter(
                (i) => i.category === cat && i.severity !== "info"
            );
            if (catIssues.length === 0 && !values.verbose) {
                continue;
            }

            const catInfos = issues.filter(
                (i) => i.category === cat && i.severity === "info"
            );
            const label = cat.toUpperCase();

            lines.push(`\n  --- ${label} ---`);

            if (catIssues.length === 0) {
                lines.push("  (none)");
            }

            for (const issue of catIssues) {
                totalIssues++;
                if (cat === "syntax") {
                    const loc = issue.line
                        ? `:${issue.line}:${issue.column || 0}`
                        : "";
                    lines.push(
                        `  [${issue.severity}] ${issue.file}${loc}`
                    );
                    if (issue.property) {
                        lines.push(
                            `    Property: ${issue.property}: ${issue.value}`
                        );
                    }
                    lines.push(`    ${issue.message}`);
                } else if (cat === "compat") {
                    lines.push(
                        `  [warning] ${issue.feature} (${issue.occurrences} occurrences)`
                    );
                    lines.push(
                        `    Unsupported in: ${issue.unsupportedBrowsers.join(", ")}`
                    );
                    lines.push(
                        `    caniuse: https://caniuse.com/${issue.caniuseId}`
                    );
                } else if (cat === "deprecated") {
                    lines.push(
                        `  [warning] ${issue.message} (${issue.occurrences} occurrences)`
                    );
                    lines.push(`    Replacement: ${issue.replacement}`);
                    lines.push(
                        `    Sample lines: ${issue.sampleLines.join(", ")}`
                    );
                }
            }

            if (values.verbose) {
                for (const info of catInfos) {
                    lines.push(
                        `  [info] ${info.feature || info.message} — ${info.message || "OK"} (${info.occurrences || 0} occurrences)`
                    );
                }
            }
        }

        lines.push(
            `\n  Summary: ${errors.length} error(s), ${warnings.length} warning(s)${values.verbose ? `, ${infos.length} info(s)` : ""}`
        );
    }

    lines.push(`\n=== Total issues across all themes: ${totalIssues} ===`);

    return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const allResults = [];

for (const theme of themes) {
    const distPath = join(REPO_ROOT, "packages", theme, "dist", "all.css");

    if (!existsSync(distPath)) {
        console.warn(
            `Skipping ${theme}: ${distPath} not found. Run 'npm run sass' first.`
        );
        continue;
    }

    const css = readFileSync(distPath, "utf-8");
    let issues = [];

    if (category === "all" || category === "syntax") {
        issues = issues.concat(auditSyntax(css, `packages/${theme}/dist/all.css`));
    }
    if (category === "all" || category === "compat") {
        issues = issues.concat(auditCompat(css, `packages/${theme}/dist/all.css`));
    }
    if (category === "all" || category === "deprecated") {
        issues = issues.concat(
            auditDeprecated(css, `packages/${theme}/dist/all.css`)
        );
    }

    allResults.push({ theme, issues });
}

if (values.json) {
    console.log(JSON.stringify(allResults, null, 2));
} else {
    console.log(formatTextReport(allResults));
}

const hasErrors = allResults.some((r) =>
    r.issues.some((i) => i.severity === "error")
);
const hasWarnings = allResults.some((r) =>
    r.issues.some((i) => i.severity === "warning")
);

if (hasErrors) {
    process.exit(2);
} else if (hasWarnings) {
    process.exit(1);
}
