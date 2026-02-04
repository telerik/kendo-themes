#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * ARIA Attributes Validator
 *
 * This script validates that HTML components have the correct ARIA attributes
 * applied according to the specifications in the /aria directory.
 *
 * Usage:
 *   npm run test:aria                    # Test all components
 *   npm run test:aria button             # Test specific component
 *   npm run test:aria -- --fix           # Suggest fixes
 */

import { Browser, By } from '@progress/kendo-e2e';
import { createServer } from 'http-server';
import { globSync } from 'glob';
import { readFileSync } from 'fs';
import { basename, dirname } from 'path';

const PORT = 18112;
const HOST = 'localhost';
const TESTS_PATH = './tests';
const ARIA_SPECS_PATH = './aria';
const COMPONENT_PAGE_EXT = '.html';
const THEME = "default";
const SWATCH = "default-ocean-blue-a11y";

// Get component name from command line
const componentArg = process.argv[2];
const componentFilter = componentArg && !componentArg.startsWith('--') ? componentArg : null;
const fixMode = process.argv.includes('--fix');
const verboseMode = process.argv.includes('--verbose');

/**
 * Parse ARIA specification from markdown file
 * @param {string} componentName - Name of the component
 * @returns {object} Parsed ARIA rules
 */
function parseAriaSpec(componentName) {
    const specFiles = globSync(`${ARIA_SPECS_PATH}/**/*_aria.md`);
    const specFile = specFiles.find(f => {
        const name = basename(f, '_aria.md');
        return name === componentName || name.replace('-', '') === componentName.replace('-', '');
    });

    if (!specFile) {
        return null;
    }

    const content = readFileSync(specFile, 'utf-8');
    const rules = [];

    // Parse markdown table
    const tableRegex = /\|\s*Selector\s*\|\s*Attribute\s*\|\s*Usage\s*\|[\s\S]*?\n\|(.*?)\n(?=\n|$)/gm;
    const rowRegex = /^\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|$/gm;

    let match;
    let lastSelector = null;

    while ((match = tableRegex.exec(content)) !== null) {
        const tableContent = match[0];
        let rowMatch;

        while ((rowMatch = rowRegex.exec(tableContent)) !== null) {
            let [, selector, attribute, usage] = rowMatch;

            // Skip header and separator rows
            if (selector.includes('---') || selector.toLowerCase().includes('selector')) {
                continue;
            }

            // Clean up values
            selector = selector.trim().replace(/`/g, '');
            attribute = attribute.trim().replace(/`/g, '');
            usage = usage.trim();

            // Handle empty selector cells (inherit from previous row)
            if (!selector || selector === '') {
                if (lastSelector) {
                    selector = lastSelector;
                } else {
                    continue; // Skip if no previous selector
                }
            } else {
                lastSelector = selector;
            }

            rules.push({
                selector,
                attribute,
                usage
            });
        }

        // Reset lastSelector between tables
        lastSelector = null;
    }

    return {
        componentName,
        specFile,
        rules
    };
}

/**
 * Extract referenced component specs from markdown
 * @param {string} content - Markdown content
 * @returns {string[]} Array of referenced component names
 */
function extractReferencedSpecs(content) {
    const references = [];
    // Match links to other aria specs: [Component](component_aria.md) or [text](component_aria.md)
    const refRegex = /\[([^\]]+)\]\(([^)]+_aria\.md)\)/g;
    let match;
    while ((match = refRegex.exec(content)) !== null) {
        const specFile = match[2];
        const componentName = specFile.replace('_aria.md', '');
        references.push(componentName);
    }
    return [...new Set(references)]; // Dedupe
}

/**
 * Parse ARIA spec with references
 * @param {string} componentName - Component name
 * @returns {object} Spec with rules and references
 */
function parseAriaSpecWithReferences(componentName) {
    const spec = parseAriaSpec(componentName);
    if (!spec) {
        return null;
    }

    const content = readFileSync(spec.specFile, 'utf-8');
    spec.references = extractReferencedSpecs(content);

    return spec;
}

/**
 * Get all rules including referenced component specs
 * @param {string} componentName - Component name
 * @returns {object} Combined spec with all rules
 */
function getFullSpec(componentName) {
    const mainSpec = parseAriaSpecWithReferences(componentName);
    if (!mainSpec) {
        return null;
    }

    const allRules = [...mainSpec.rules];
    const loadedRefs = new Set([componentName]);

    // Load referenced specs
    for (const ref of mainSpec.references) {
        if (loadedRefs.has(ref)) {
            continue;
        }
        loadedRefs.add(ref);

        const refSpec = parseAriaSpec(ref);
        if (refSpec && refSpec.rules) {
            // Add rules from referenced spec, marking their source
            for (const rule of refSpec.rules) {
                allRules.push({
                    ...rule,
                    source: ref // Track where rule came from
                });
            }
        }
    }

    return {
        ...mainSpec,
        allRules,
        referencedSpecs: mainSpec.references
    };
}

/**
 * Validate attribute on an element
 * @param {WebElement} element - Element to validate
 * @param {object} rule - ARIA rule
 * @returns {object} Validation result
 */
async function validateAttribute(element, rule) {
    const { attribute } = rule;

    // Check for alternative attributes first (e.g., "aria-label or aria-labelledby")
    if (attribute.includes(' or ')) {
        const alternatives = attribute.split(' or ').map(a => a.trim());

        for (const alt of alternatives) {
            // Special case: nodeName check
            if (alt.includes('nodeName=')) {
                const tagName = await element.getTagName();
                const expectedTag = alt.split('nodeName=')[1].trim();
                if (tagName.toLowerCase() === expectedTag.toLowerCase()) {
                    return { valid: true, reason: 'correct-nodename' };
                }
                continue; // Try next alternative
            }

            const parts = alt.split('=');
            const attrName = parts[0].trim();
            const expectedValue = parts.length > 1 ? parts[1].trim() : null;

            try {
                const actualValue = await element.getAttribute(attrName);

                // If attribute exists
                if (actualValue !== null) {
                    // For boolean attributes (disabled, readonly, etc.), presence is what matters
                    if (attrName === 'disabled' || attrName === 'readonly' || attrName === 'required') {
                        return { valid: true, actual: actualValue, reason: 'boolean-attribute-present' };
                    }

                    // For ARIA attributes with expected values, validate the value
                    if (expectedValue && expectedValue !== 'true/false') {
                        if (actualValue === expectedValue || actualValue === '') {
                            // Empty string is valid for boolean attributes
                            return { valid: true, actual: actualValue, reason: 'alternative-match' };
                        }
                    } else {
                        // Attribute exists and no specific value required
                        return { valid: true, actual: actualValue, reason: 'alternative-present' };
                    }
                }
            } catch {
                continue; // Try next alternative
            }
        }

        // None of the alternatives matched
        return {
            valid: false,
            reason: 'missing',
            expected: attribute.split(' or ').map(a => a.split('=')[0].trim()).join(' or '),
            actual: null
        };
    }

    // Parse single attribute (can be role=button, aria-label, etc.)
    const parts = attribute.split('=');
    const attrName = parts[0].trim();
    const expectedValue = parts.length > 1 ? parts[1].trim() : null;

    // Special case: aria-labelledby and aria-describedby accept aria-label/aria-description as alternatives
    const labelAlternatives = {
        'aria-labelledby': 'aria-label',
        'aria-describedby': 'aria-description'
    };

    if (labelAlternatives[attrName]) {
        const alternative = labelAlternatives[attrName];
        try {
            const altValue = await element.getAttribute(alternative);
            if (altValue !== null && altValue.trim() !== '') {
                return { valid: true, actual: altValue, reason: 'alternative-label-attribute' };
            }
        } catch {
            // Continue with primary attribute check
        }
    }

    try {
        // Special case: nodeName check
        if (attribute.includes('nodeName=')) {
            const tagName = await element.getTagName();
            const expectedTag = attribute.split('nodeName=')[1].trim();
            if (tagName.toLowerCase() === expectedTag.toLowerCase()) {
                return { valid: true, reason: 'correct-nodename' };
            }
            return {
                valid: false,
                reason: 'incorrect-nodename',
                expected: expectedTag,
                actual: tagName
            };
        }

        const actualValue = await element.getAttribute(attrName);

        // Check if attribute exists
        if (actualValue === null) {
            return {
                valid: false,
                reason: 'missing',
                expected: attrName,
                actual: null
            };
        }

        // For boolean HTML attributes, presence is sufficient
        if (attrName === 'disabled' || attrName === 'readonly' || attrName === 'required' || attrName === 'checked') {
            return { valid: true, actual: actualValue };
        }

        // For ID reference attributes, check presence not exact value
        // Spec notation like "aria-labelledby=.k-dialog-titlebar id" describes what it points to, not literal value
        const isIdReference = (attrName === 'aria-labelledby' || attrName === 'aria-describedby' || attrName === 'aria-controls' || attrName === 'aria-activedescendant') && expectedValue && (expectedValue.includes(' id') || expectedValue.startsWith('.k-'));

        if (isIdReference) {
            // Just check that the attribute has a non-empty value
            if (actualValue && actualValue.trim() !== '') {
                return { valid: true, actual: actualValue, reason: 'id-reference-present' };
            }
            return {
                valid: false,
                reason: 'missing-id-reference',
                expected: `ID reference (${expectedValue})`,
                actual: actualValue
            };
        }

        // Validate value if specified
        if (expectedValue && expectedValue !== 'true/false') {
            // Handle OR values separated by / (e.g., "none/presentation", "readonly/aria-readonly")
            if (expectedValue.includes('/') && !expectedValue.includes(' ')) {
                const possibleValues = expectedValue.split('/').map(v => v.trim());
                if (possibleValues.includes(actualValue)) {
                    return { valid: true, actual: actualValue, reason: 'or-value-match' };
                }
                return {
                    valid: false,
                    reason: 'incorrect-value',
                    expected: expectedValue,
                    actual: actualValue
                };
            }

            if (actualValue !== expectedValue) {
                return {
                    valid: false,
                    reason: 'incorrect-value',
                    expected: expectedValue,
                    actual: actualValue
                };
            }
        }

        return { valid: true, actual: actualValue };
    } catch (error) {
        return {
            valid: false,
            reason: 'error',
            error: error.message
        };
    }
}

/**
 * Check if an attribute is conditional based on usage text
 * @param {string} usage - Usage description from spec
 * @returns {boolean} True if attribute is conditional
 */
function isConditionalAttribute(usage) {
    if (!usage) {
        return false;
    }

    const conditionalKeywords = [
        'only when',
        'only be present when',
        'only if',
        'only present',
        'rendered only when',
        'should only be present',
        'only present and required if',
        'if the value is not indeterminate',
        'optional',
        'if not present'
    ];

    const lowerUsage = usage.toLowerCase();
    return conditionalKeywords.some(keyword => lowerUsage.includes(keyword));
}

/**
 * Validate a single HTML page
 * @param {string} filePath - Path to HTML file
 * @param {object} ariaSpec - Parsed ARIA specification
 * @param {Browser} browser - Browser instance
 * @returns {object} Validation results
 */
async function validatePage(filePath, ariaSpec, browser) {
    if (!ariaSpec || !ariaSpec.rules.length) {
        return { skipped: true, reason: 'no-spec' };
    }

    const url = `http://${HOST}:${PORT}/${filePath.replace('./', '')}?theme=${THEME}&swatch=${SWATCH}`;

    try {
        await browser.navigateTo(url);
    } catch (err) {
        console.error(`Failed to navigate to ${url}:`, err);
        return { error: true, message: err.message };
    }

    const violations = [];
    const passed = [];
    const untestedRules = [];
    const testedRules = new Set();

    for (const rule of ariaSpec.rules) {
        const { selector, attribute, usage } = rule;

        // Skip rules with empty attributes or TODO markers - these are placeholders
        if (!attribute || attribute.trim() === '' ||
            (usage && (usage.includes('TODO') || usage.toLowerCase().includes('define ')))) {
            if (verboseMode) {
                console.log(`  ℹ Skipping placeholder rule: ${selector} (${usage?.slice(0, 40)}...)`);
            }
            continue;
        }

        try {
            let elements = [];

            // Use JavaScript querySelector to bypass Selenium CSS limitations
            try {
                const script = `return Array.from(document.querySelectorAll(${JSON.stringify(selector)}));`;
                elements = await browser.driver.executeScript(script);

                if (verboseMode && elements && elements.length > 0) {
                    console.log(`  ✓ Found ${elements.length} element(s) for selector: ${selector}`);
                }
            } catch (jsError) {
                if (verboseMode) {
                    console.log(`  ℹ JavaScript query error for ${selector}: ${jsError.message}`);
                }
                // Fallback to Selenium's By.css if executeScript fails
                elements = await browser.driver.findElements(By.css(selector));
            }

            if (!elements || elements.length === 0) {
                // Selector not found - track as untested
                untestedRules.push(rule);
                if (verboseMode) {
                    console.log(`  ℹ Selector not found: ${selector}`);
                }
                continue;
            }

            // Mark rule as tested
            const ruleKey = `${rule.selector}|${rule.attribute}`;
            testedRules.add(ruleKey);

            // Validate each element
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                const result = await validateAttribute(element, rule, browser);

                if (!result.valid) {
                    // Check if this is a conditional attribute that can be omitted
                    if (isConditionalAttribute(rule.usage) && result.reason === 'missing') {
                        // Conditional attribute is missing - this is acceptable
                        if (verboseMode) {
                            console.log(`  ℹ Conditional attribute ${rule.attribute} not present (acceptable)`);
                        }
                        continue;
                    }

                    // Before marking as violation, check if a more specific selector overrides this
                    // This handles cases like .k-dialog (role=dialog) vs .k-dialog.k-alert (role=alertdialog)
                    const attrName = rule.attribute.split('=')[0].trim();
                    let overridden = false;

                    // Find all rules that apply to this element with more specific selectors
                    for (const otherRule of ariaSpec.rules) {
                        if (otherRule === rule) {continue;}

                        // Check if this is the same attribute
                        const otherAttrName = otherRule.attribute.split('=')[0].trim();
                        if (attrName !== otherAttrName) {continue;}

                        // Check if element matches the other selector (more specific)
                        try {
                            const matchesScript = `
                                const el = arguments[0];
                                return el.matches(${JSON.stringify(otherRule.selector)});
                            `;
                            const matches = await browser.driver.executeScript(matchesScript, element);

                            // If it matches a more specific selector (longer = more specific)
                            if (matches && otherRule.selector.length > rule.selector.length) {
                                // Validate against the more specific rule
                                const specificResult = await validateAttribute(element, otherRule, browser);
                                if (specificResult.valid) {
                                    overridden = true;
                                    passed.push({ rule: otherRule, index: i });
                                    break;
                                }
                            }
                        } catch {
                            // Ignore errors in specificity check
                        }
                    }

                    if (!overridden) {
                        const html = await element.getAttribute('outerHTML');
                        violations.push({
                            rule,
                            element: html.substring(0, 200), // Truncate for readability
                            index: i,
                            ...result
                        });
                    }
                } else {
                    passed.push({ rule, index: i });
                }
            }
        } catch (error) {
            if (verboseMode) {
                console.error(`  ⚠ Error validating selector ${selector}:`, error.message);
            }
        }
    }

    return {
        filePath,
        spec: ariaSpec.specFile,
        totalRules: ariaSpec.rules.length,
        testedRules: testedRules.size,
        untestedRules,
        violations,
        passed: passed.length,
        violationCount: violations.length
    };
}

/**
 * Main validation function
 */
async function validateAriaAttributes() {
    console.log('🔍 ARIA Attributes Validator\n');

    if (componentFilter) {
        console.log(`📦 Testing component: ${componentFilter}\n`);
    } else {
        console.log('📦 Testing all components\n');
    }

    // Build glob pattern
    const globPattern = componentFilter
        ? `${TESTS_PATH}/${componentFilter}/**/*${COMPONENT_PAGE_EXT}`
        : `${TESTS_PATH}/!(utils|_*)/**/*${COMPONENT_PAGE_EXT}`;

    const files = globSync(globPattern, { dotRelative: true })
        .filter(f => !f.includes('jquery'));

    if (files.length === 0) {
        console.error(`❌ No test files found for pattern: ${globPattern}`);
        process.exit(1);
    }

    console.log(`Found ${files.length} test file(s)\n`);

    // Start server
    const server = createServer({
        root: './',
        port: PORT
    });
    server.listen(PORT, HOST);

    // Start browser
    const browser = new Browser();

    const results = [];
    let totalViolations = 0;
    let totalPassed = 0;
    let skipped = 0;

    for (const file of files) {
        // Determine component name from path (e.g., "./tests/avatar/avatar.html" -> "avatar")
        const pathParts = file.replace(/^\.\//, '').split('/');
        const componentName = pathParts[1];  // tests/avatar/... -> "avatar"

        if (verboseMode) {
            console.log(`Testing ${file}...`);
        }

        // Get ARIA spec with referenced specs
        const ariaSpec = getFullSpec(componentName);

        if (!ariaSpec) {
            if (verboseMode) {
                console.log(`  ⚠ No ARIA spec found for ${componentName}`);
            }
            skipped++;
            continue;
        }

        // Log referenced specs being tested
        if (verboseMode && ariaSpec.referencedSpecs && ariaSpec.referencedSpecs.length > 0) {
            console.log(`  Including specs from: ${ariaSpec.referencedSpecs.join(', ')}`);
        }

        // Validate page using allRules (includes referenced specs)
        const specForValidation = { ...ariaSpec, rules: ariaSpec.allRules };
        const result = await validatePage(file, specForValidation, browser);

        if (result.skipped || result.error) {
            skipped++;
            continue;
        }

        results.push(result);
        totalViolations += result.violationCount;
        totalPassed += result.passed;

        if (result.violationCount > 0) {
            console.log(`❌ ${file}: ${result.violationCount} violation(s)`);

            if (verboseMode || fixMode) {
                result.violations.forEach((v, idx) => {
                    console.log(`   ${idx + 1}. ${v.rule.selector}`);
                    console.log(`      Missing/incorrect: ${v.rule.attribute}`);
                    console.log(`      Usage: ${v.rule.usage.substring(0, 80)}...`);
                    if (v.expected && v.actual !== undefined) {
                        console.log(`      Expected: ${v.expected}, Got: ${v.actual || '(none)'}`);
                    }
                });
            }
        } else {
            console.log(`✅ ${file}: All checks passed`);
        }
    }

    // Cleanup
    await browser.close();
    server.close();

    // Aggregate coverage data across all files for the same component
    const componentCoverage = {};
    for (const result of results) {
        const pathParts = result.filePath.replace(/^\.\//, '').split('/');
        const componentName = pathParts[1];

        if (!componentCoverage[componentName]) {
            // Get the full spec for this component (including references)
            const ariaSpec = getFullSpec(componentName);
            const allRules = ariaSpec ? ariaSpec.allRules : [];
            componentCoverage[componentName] = {
                totalRules: allRules.length,
                allRules: allRules,
                allTestedRules: new Set(),
                untestedRules: new Map(),
                referencedSpecs: ariaSpec ? ariaSpec.referencedSpecs : []
            };
            // Initialize all rules as untested
            for (const rule of allRules) {
                const ruleKey = `${rule.selector}|${rule.attribute}`;
                componentCoverage[componentName].untestedRules.set(ruleKey, rule);
            }
        }

        // Mark rules as tested if they were found in this file
        if (result.untestedRules) {
            for (const rule of componentCoverage[componentName].allRules) {
                const ruleKey = `${rule.selector}|${rule.attribute}`;
                const wasUntestedInThisFile = result.untestedRules.some(
                    ur => `${ur.selector}|${ur.attribute}` === ruleKey
                );
                if (!wasUntestedInThisFile) {
                    // Rule was tested in this file
                    componentCoverage[componentName].allTestedRules.add(ruleKey);
                    componentCoverage[componentName].untestedRules.delete(ruleKey);
                }
            }
        }
    }

    // Calculate actual tested count for each component
    for (const component in componentCoverage) {
        const coverage = componentCoverage[component];
        coverage.actualTested = coverage.allTestedRules.size;
    }

    // Print summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 Summary\n');
    console.log(`Total files tested: ${results.length}`);
    console.log(`Files skipped: ${skipped}`);
    console.log(`Total rules passed: ${totalPassed}`);
    console.log(`Total violations: ${totalViolations}\n`);

    // Print coverage summary
    const componentsWithGaps = Object.entries(componentCoverage).filter(
        ([, coverage]) => coverage.untestedRules.size > 0
    );

    if (componentsWithGaps.length > 0) {
        console.log('⚠️  Coverage Gaps Detected\n');
        componentsWithGaps.forEach(([component, coverage]) => {
            const coveragePercent = ((coverage.actualTested / coverage.totalRules) * 100).toFixed(1);
            console.log(`   ${component}: ${coverage.actualTested}/${coverage.totalRules} rules tested (${coveragePercent}%)`);
            console.log(`   Missing ${coverage.untestedRules.size} rule(s):\n`);
            Array.from(coverage.untestedRules.values()).forEach((rule, idx) => {
                console.log(`     ${idx + 1}. ${rule.selector} - ${rule.attribute}`);
                console.log(`        ${rule.usage.substring(0, 70)}${rule.usage.length > 70 ? '...' : ''}\n`);
            });
        });
    }

    if (totalViolations > 0) {
        console.log('❌ ARIA attribute validation failed\n');

        if (!verboseMode && !fixMode) {
            console.log('Run with --verbose or --fix for detailed information\n');
        }

        // Generate detailed report
        const report = {
            timestamp: new Date().toISOString(),
            summary: {
                filesTested: results.length,
                skipped,
                passed: totalPassed,
                violations: totalViolations
            },
            results
        };

        // Save report
        const reportPath = './tests/_output/aria-validation-report.json';
        try {
            const { mkdirSync, writeFileSync } = await import('fs');
            mkdirSync(dirname(reportPath), { recursive: true });
            writeFileSync(reportPath, JSON.stringify(report, null, 2));
            console.log(`📄 Detailed report saved to: ${reportPath}\n`);
        } catch (err) {
            console.error('Failed to save report:', err.message);
        }

        process.exit(1);
    } else {
        console.log('✅ All ARIA attribute validations passed\n');
        process.exit(0);
    }
}

// Run validator
validateAriaAttributes().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
