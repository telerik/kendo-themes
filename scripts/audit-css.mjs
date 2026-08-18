#!/usr/bin/env node

/* eslint-disable no-console */

/**
 * CI CSS audit for compiled theme CSS.
 *
 * Checks:
 * 1) W3C syntax via css-tree parser and property-value grammar validation
 * 2) Browser support via @mdn/browser-compat-data + caniuse-lite + browserslist
 *
 * Usage:
 *   node scripts/audit-css.mjs [theme|all]
 */

import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const REPO_ROOT = resolve(new URL(".", import.meta.url).pathname, "..");
const THEMES = [
    "default",
    "classic",
    "material",
    "fluent",
    "bootstrap",
    "meridian",
];
const requestedTheme = process.argv[2] || "all";

let themesToAudit;
if (requestedTheme === "all") {
    themesToAudit = THEMES;
} else if (THEMES.includes(requestedTheme)) {
    themesToAudit = [requestedTheme];
} else {
    themesToAudit = null;
}

if (!themesToAudit) {
    console.error(`Unknown theme: ${requestedTheme}`);
    process.exit(1);
}

// --- Dependencies ---

let cssTree;
try {
    cssTree = await import("css-tree");
} catch {
    console.error("css-tree is required. Install it with: npm i -D css-tree");
    process.exit(1);
}

let browserslist;
try {
    browserslist = (await import("browserslist")).default;
} catch {
    console.error("browserslist is required (already present in this repo).");
    process.exit(1);
}

let caniuseLite;
try {
    caniuseLite = await import("caniuse-lite");
} catch {
    console.error("caniuse-lite is required (already present in this repo).");
    process.exit(1);
}

let bcd;
try {
    bcd = (await import("@mdn/browser-compat-data", { with: { type: "json" } })).default;
} catch {
    try {
        // Fallback: read the JSON file directly
        const bcdPath = join(REPO_ROOT, "node_modules", "@mdn", "browser-compat-data", "data.json");
        bcd = JSON.parse(readFileSync(bcdPath, "utf-8"));
    } catch {
        console.error("@mdn/browser-compat-data is required. Install it with: npm i -D @mdn/browser-compat-data");
        process.exit(1);
    }
}

const targetBrowsers = browserslist(undefined, { path: REPO_ROOT });

// --- Browserslist → BCD browser name mapping ---

const BROWSERSLIST_TO_BCD = {
    chrome: "chrome",
    edge: "edge",
    firefox: "firefox",
    safari: "safari",
    opera: "opera",
    "ios_saf": "safari_ios",
    "and_chr": "chrome_android",
    "and_ff": "firefox_android",
    android: "webview_android",
};

/**
 * Parse browserslist entries into structured objects.
 * e.g. "chrome 144" → { bcdName: "chrome", version: 144 }
 */
function parseBrowserTargets() {
    const targets = [];
    for (const entry of targetBrowsers) {
        const [name, ...vParts] = entry.split(" ");
        const version = vParts.join(" ");
        const bcdName = BROWSERSLIST_TO_BCD[name];
        if (!bcdName) {continue;}

        // Parse version — handle ranges like "15.4-15.5" by taking the lower bound
        const numVersion = parseFloat(version.split("-")[0]);
        if (isNaN(numVersion)) {continue;}

        targets.push({ browserslistName: name, bcdName, version: numVersion, raw: entry });
    }
    return targets;
}

const browserTargets = parseBrowserTargets();

// --- Feature definitions ---
// Each feature can use:
//   - bcdPath: dot-separated path into @mdn/browser-compat-data
//   - caniuseId: feature ID for caniuse-lite (used when bcdPath is absent or as fallback)
//   - pattern: regex to detect feature usage in CSS text
//   - detector: named custom detection logic

const COMPAT_FEATURES = [
    {
        bcdPath: "css.types.color.oklch",
        label: "oklch() color function",
        pattern: /oklch\s*\(/,
    },
    {
        bcdPath: "css.types.color.color-mix",
        label: "color-mix() function",
        pattern: /color-mix\s*\(/,
    },
    {
        bcdPath: "css.types.color.oklch.relative_syntax",
        caniuseId: "css-relative-colors",
        label: "relative color syntax",
        pattern: /oklch\(\s*from\b/,
    },
    {
        bcdPath: "css.selectors.has",
        caniuseId: "css-has",
        label: ":has() pseudo-class",
        pattern: /:has\s*\(/,
    },
    {
        bcdPath: "css.selectors.is",
        caniuseId: "css-matches-pseudo",
        label: ":is() pseudo-class",
        pattern: /:is\s*\(/,
    },
    {
        bcdPath: "css.selectors.where",
        label: ":where() pseudo-class",
        pattern: /:where\s*\(/,
    },
    {
        bcdPath: "css.at-rules.container",
        caniuseId: "css-container-queries",
        label: "@container queries",
        pattern: /@container\b/,
    },
    {
        bcdPath: "css.at-rules.layer",
        caniuseId: "css-cascade-layers",
        label: "@layer",
        pattern: /@layer\b/,
    },
    {
        bcdPath: "css.at-rules.property",
        label: "@property",
        pattern: /@property\b/,
    },
    {
        caniuseId: "css-variables",
        label: "CSS custom properties",
        pattern: /var\s*\(--/,
    },
    {
        caniuseId: "css-grid",
        label: "CSS Grid",
        pattern: /display\s*:\s*grid/,
    },
    {
        bcdPath: "css.properties.gap.flex_context",
        caniuseId: "flexbox-gap",
        label: "flexbox gap",
        pattern: null,
        detector: "flex-gap",
    },
    {
        bcdPath: "css.properties.margin-inline",
        caniuseId: "css-logical-props",
        label: "logical properties",
        pattern: /\b(inline-size|block-size|margin-inline|padding-inline|inset-inline|margin-block|padding-block|inset-block)\b/,
    },
    {
        bcdPath: "css.types.color.light-dark",
        label: "light-dark() function",
        pattern: /light-dark\s*\(/,
    },
];

// --- Known false positives in css-tree's lexer ---
// These are valid CSS that css-tree's grammar doesn't yet recognize.

const SYNTAX_ALLOWLIST = [
    // css-tree lacks baseline-position in justify-content syntax (valid per CSS Box Alignment Level 3)
    { property: "justify-content", pattern: /\bbaseline\b/ },
    // user-select: contain is valid per CSS UI Level 4 (used in content-editable contexts)
    { property: "user-select", pattern: /\bcontain\b/ },
];

function isAllowlisted(property, value) {
    return SYNTAX_ALLOWLIST.some(
        (entry) => entry.property === property && entry.pattern.test(value)
    );
}

// --- BCD support checking ---

function resolveBcdPath(dotPath) {
    const parts = dotPath.split(".");
    let obj = bcd;
    for (const part of parts) {
        obj = obj?.[part];
    }
    return obj?.__compat ?? null;
}

function checkBcdSupport(bcdPath) {
    const compat = resolveBcdPath(bcdPath);
    if (!compat) {return null;} // path not found — can't determine

    const unsupported = [];
    for (const target of browserTargets) {
        const support = compat.support[target.bcdName];
        if (!support) {continue;}

        const entries = Array.isArray(support) ? support : [support];
        // Find the first entry that represents general support (no flags, not partial)
        const primary = entries.find((e) => !e.flags && !e.prefix) || entries[0];
        const addedVersion = parseFloat(primary.version_added);

        if (!primary.version_added || primary.version_added === false) {
            unsupported.push(target.raw);
        } else if (!isNaN(addedVersion) && target.version < addedVersion) {
            unsupported.push(target.raw);
        }
    }
    return unsupported;
}

// --- caniuse-lite support checking (fallback) ---

function checkCaniuseSupport(featureId) {
    const packed = caniuseLite.features[featureId];
    if (!packed) {return null;} // feature not found

    const feature = caniuseLite.feature(packed);
    const unsupported = [];

    for (const browser of targetBrowsers) {
        const [name, ...versionParts] = browser.split(" ");
        const version = versionParts.join(" ");
        const stats = feature.stats[name];
        if (!stats) {continue;}

        const support = stats[version];
        if (!support) {continue;}

        const flag = support.split(" ")[0];
        if (flag === "n" || flag === "p") {
            unsupported.push(browser);
        }
    }
    return unsupported;
}

/**
 * Check browser support for a feature using BCD first, caniuse-lite as fallback.
 * Returns { unsupported: string[], source: string } or null if no data.
 */
function checkFeatureSupport(feature) {
    // Try BCD first (more comprehensive)
    if (feature.bcdPath) {
        const result = checkBcdSupport(feature.bcdPath);
        if (result !== null) {
            return { unsupported: result, source: "bcd" };
        }
    }

    // Fallback to caniuse-lite
    if (feature.caniuseId) {
        const result = checkCaniuseSupport(feature.caniuseId);
        if (result !== null) {
            return { unsupported: result, source: "caniuse" };
        }
    }

    // No data source found — report as unverifiable
    return null;
}

// --- Syntax auditing ---

function auditSyntax(css, file) {
    const issues = [];
    const parseErrors = [];

    try {
        const ast = cssTree.parse(css, {
            filename: file,
            positions: true,
            onParseError(error) {
                parseErrors.push(error);
            },
        });

        cssTree.walk(ast, {
            visit: "Declaration",
            enter(node) {
                if (node.property.startsWith("--")) {
                    return;
                }

                const value = cssTree.generate(node.value);
                if (/\bvar\s*\(/.test(value)) {
                    return;
                }

                if (isAllowlisted(node.property, value)) {
                    return;
                }

                const match = cssTree.lexer.matchProperty(node.property, node.value);
                if (match?.error) {
                    issues.push({
                        type: "syntax",
                        file,
                        line: node.loc?.start?.line,
                        column: node.loc?.start?.column,
                        property: node.property,
                        value: value.slice(0, 80),
                        message: match.error.message,
                    });
                }
            },
        });
    } catch (error) {
        issues.push({
            type: "syntax",
            file,
            message: `Fatal parse error: ${error.message}`,
        });
    }

    for (const error of parseErrors) {
        issues.push({
            type: "syntax",
            file,
            line: error.line,
            column: error.column,
            message: error.message,
        });
    }

    return issues;
}

// --- Compat auditing ---

function countFlexGapUsage(css, ast) {
    let count = 0;

    cssTree.walk(ast, {
        visit: "Declaration",
        enter(node) {
            const prop = node.property.toLowerCase();
            if (prop === "gap" || prop === "row-gap" || prop === "column-gap") {
                count += 1;
            }
        },
    });

    return count;
}

function auditCompat(css, file) {
    const issues = [];
    const warnings = [];

    let ast;
    try {
        ast = cssTree.parse(css, {
            filename: file,
            positions: false,
            onParseError() { /* handled by auditSyntax */ },
        });
    } catch {
        return { issues, warnings };
    }

    for (const feature of COMPAT_FEATURES) {
        let matchCount = 0;

        if (feature.detector === "flex-gap") {
            matchCount = countFlexGapUsage(css, ast);
        } else if (feature.pattern) {
            const matches = css.match(new RegExp(feature.pattern.source, "g"));
            matchCount = matches?.length || 0;
        }

        if (matchCount === 0) {continue;}

        const result = checkFeatureSupport(feature);

        if (result === null) {
            warnings.push({
                type: "compat-warning",
                file,
                feature: feature.label,
                count: matchCount,
                message: `No compat data found (bcdPath: ${feature.bcdPath || "none"}, caniuseId: ${feature.caniuseId || "none"})`,
            });
            continue;
        }

        if (result.unsupported.length > 0) {
            issues.push({
                type: "compat",
                file,
                feature: feature.label,
                count: matchCount,
                unsupported: result.unsupported,
                source: result.source,
            });
        }
    }

    return { issues, warnings };
}

// --- Reporting ---

function printReport(results, missingFiles) {
    let syntaxCount = 0;
    let compatCount = 0;
    let warningCount = 0;

    for (const result of results) {
        const syntax = result.issues.filter((i) => i.type === "syntax");
        const compat = result.issues.filter((i) => i.type === "compat");
        const warnings = result.warnings || [];

        syntaxCount += syntax.length;
        compatCount += compat.length;
        warningCount += warnings.length;

        console.log(`\n${result.theme}: ${syntax.length} syntax, ${compat.length} compat, ${warnings.length} warnings`);

        for (const issue of syntax.slice(0, 10)) {
            const location = issue.line ? `:${issue.line}:${issue.column || 0}` : "";
            console.log(
                `  [syntax] ${issue.file}${location} ${issue.property ? `${issue.property}: ${issue.value}` : issue.message}`
            );
        }

        for (const issue of compat.slice(0, 10)) {
            console.log(
                `  [compat] ${issue.feature} (${issue.count} occurrences) unsupported in: ${issue.unsupported.join(", ")} [${issue.source}]`
            );
        }

        for (const warning of warnings.slice(0, 5)) {
            console.log(`  [warn] ${warning.feature} (${warning.count} occurrences): ${warning.message}`);
        }

        const omitted = Math.max(0, syntax.length - 10) + Math.max(0, compat.length - 10);
        if (omitted > 0) {
            console.log(`  ... ${omitted} additional issues omitted`);
        }
    }

    if (missingFiles.length > 0) {
        console.log(`\nMissing compiled CSS files: ${missingFiles.length}`);
        for (const missing of missingFiles) {
            console.log(`  [missing] ${missing.theme}: ${missing.file}`);
        }
    }

    console.log(`\nSummary: ${syntaxCount} syntax, ${compatCount} compat, ${warningCount} warnings`);
    console.log(`Browsers: ${targetBrowsers.join(", ")}`);

    return { syntaxCount, compatCount, warningCount };
}

// --- Main ---

const results = [];
const missingFiles = [];

for (const theme of themesToAudit) {
    const file = `packages/${theme}/dist/all.css`;
    const fullPath = join(REPO_ROOT, file);

    if (!existsSync(fullPath)) {
        missingFiles.push({ theme, file });
        continue;
    }

    const css = readFileSync(fullPath, "utf-8");
    const syntaxIssues = auditSyntax(css, file);
    const { issues: compatIssues, warnings } = auditCompat(css, file);
    results.push({ theme, issues: [...syntaxIssues, ...compatIssues], warnings });
}

const { syntaxCount, compatCount } = printReport(results, missingFiles);

// Exit with failure only on actual issues (syntax errors or compat failures)
// Warnings (missing data) do not fail CI.
if (syntaxCount > 0 || compatCount > 0) {
    process.exit(1);
}

if (missingFiles.length > 0) {
    process.exit(1);
}
