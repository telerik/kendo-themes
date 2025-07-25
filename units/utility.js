const sass = require("sass");
const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const selectorParser = require("postcss-selector-parser");
const { selectorSpecificity } = require("@csstools/selector-specificity");
const { SourceMapConsumer } = require("@jridgewell/source-map");
const { describe, it, expect, beforeAll } = require("@jest/globals");
const { createSpecificityMap } = require("./specificity");
const { generateSpecificityReport } = require("./specificity-report");

const htmlPackage = require("../packages/html/dist/cjs");

const theme = process.env.THEME;
const themeDir = path.resolve(__dirname, "../packages", theme);
const themeScssDir = path.resolve(themeDir, "scss");
const nodeModulesDir = path.resolve(__dirname, "../node_modules");
const themeMetadataDir = path.resolve(themeDir, "dist", "meta", "sassdoc-data.json");

const data = JSON.parse(fs.readFileSync(themeMetadataDir));

// Custom Jest matcher for specificity testing with colored output
expect.extend({
    toHaveSpecificity(received, expected, sourceLocation) {
        const pass = received === expected;

        if (pass) {
            return {
                message: () =>
                    `Expected ${this.utils.printReceived(received)} not to equal ${this.utils.printExpected(expected)}`,
                pass: true,
            };
        }

        const receivedColor = this.utils.printReceived(received);
        const expectedColor = this.utils.printExpected(expected);

        return {
            message: () =>
                `Expected specificity to match:\n` +
                `  Expected: ${expectedColor}\n` +
                `  Received: ${receivedColor}\n\n` +
                `Source location: ${sourceLocation}`,
            pass: false,
        };
    },
});

/**
 * Extract official component class names from HTML package exports
 * @returns {string[]} Array of official component class names (e.g., ['k-button', 'k-icon', 'k-badge'])
 */
function getOfficialComponentClasses() {
    const componentClasses = new Set();

    // Iterate through all exports in htmlPackage
    Object.values(htmlPackage).forEach((exportedItem) => {
        // Check if the export has a static className field
        if (exportedItem && typeof exportedItem === "function" && exportedItem.className) {
            componentClasses.add(exportedItem.className);
        }
    });

    const components = Array.from(componentClasses);
    return components;
}

// Cache the component classes for performance
const OFFICIAL_COMPONENT_CLASSES = getOfficialComponentClasses();

/**
 * Detect if a selector contains legitimate component nesting
 * @param {string} selector - CSS selector to analyze
 * @returns {boolean} True if selector contains legitimate component nesting
 */
function hasComponentNesting(selector) {
    // Extract all .k-* classes from the selector
    const kendoClasses = selector.match(/\.k-[\w-]+/g) || [];

    // Filter to only actual component classes (not variants/states)
    const componentClasses = kendoClasses.filter((cls) => {
        const className = cls.substring(1); // Remove the leading dot
        return OFFICIAL_COMPONENT_CLASSES.includes(className);
    });

    // Allow nesting if we have exactly 2 different component types
    return componentClasses.length === 2 && new Set(componentClasses).size === 2;
}

// #region helpers
function writeResultToDist(result, file, fileType = "css", subdir = "") {
    const distDir = path.resolve(__dirname, theme, "dist", subdir);
    const outputPath = path.join(distDir, `${file}.${fileType}`);

    !fs.existsSync(distDir) && fs.mkdirSync(distDir);
    fs.writeFileSync(outputPath, result, "utf8");
}

function compileSassString(sassString, options = {}) {
    const result = sass.compileString(sassString, {
        loadPaths: [themeScssDir, nodeModulesDir],
        sourceMap: options.sourceMap || false,
        sourceMapIncludeSources: options.sourceMapIncludeSources || false,
    });

    return options.sourceMap ? result : result.css;
}

/**
 * Calculate CSS selector specificity using the @csstools/selector-specificity package
 * Returns an object with both the array format and calculated value:
 * {
 *   specificity: [a, b, c] where a=IDs, b=classes/attributes/pseudo-classes, c=types/pseudo-elements
 *   specificityValue: calculated value (a*100 + b*10 + c)
 * }
 */
function calculateSpecificity(selector) {
    try {
        const selectorAST = selectorParser().astSync(selector);
        const specificity = selectorSpecificity(selectorAST);

        // The selectorSpecificity returns { a, b, c } where:
        // a = IDs, b = classes/attributes/pseudo-classes, c = types/pseudo-elements
        const specificityArray = [specificity.a, specificity.b, specificity.c];
        const specificityValue = specificity.a * 100 + specificity.b * 10 + specificity.c;

        return {
            specificity: specificityArray,
            specificityValue,
        };
    } catch {
        // Fallback for malformed selectors - silently return minimal specificity
        return {
            specificity: [0, 0, 1],
            specificityValue: 1,
        };
    }
}

/**
 * Resolve source location from CSS line using source map
 * @param {number} cssLine - Line number in the generated CSS (1-based)
 * @param {number} cssColumn - Column number in the generated CSS (1-based)
 * @param {Object} sourceMap - Source map object from Sass compilation
 * @returns {string} Source file and line reference
 */
function resolveSourceLocation(sourceMap, cssLine, cssColumn = 0) {
    if (!sourceMap) {
        return `CSS line ${cssLine}`;
    }

    try {
        const consumer = new SourceMapConsumer(sourceMap);
        const position = consumer.originalPositionFor({
            line: cssLine,
            column: cssColumn,
        });

        if (position && position.source && position.line !== null) {
            return `${position.source}:${position.line}`;
        }

        return `CSS line ${cssLine}`;
    } catch (error) {
        throw new Error(`Error resolving source location for CSS line ${cssLine}: ${error.message}`);
    }
}
/**
 * Parse CSS and extract selectors with their specificity and source locations
 * @param {string} css - The CSS to analyze
 * @param {Object} options - Options for filtering
 * @param {string} options.filter - Only include selectors containing this string
 * @param {number} options.minSpecificity - Only include selectors above this specificity
 * @param {Object} options.sourceMap - Source map object from Sass compilation
 * @returns {Array} Array of {selector, specificity, specificityValue, sourceLocation} objects
 */
function getSelectorsSpecificity(css, options = {}) {
    const { filter, minSpecificity = 0, sourceMap } = options;
    const selectors = [];

    const root = postcss.parse(css, { from: undefined });

    root.walkRules((rule) => {
        rule.selectors.forEach((selector) => {
            // Apply filter if specified
            if (filter && !selector.includes(filter)) {
                return;
            }

            const specificityResult = calculateSpecificity(selector);

            // Apply minimum specificity filter
            if (specificityResult.specificityValue < minSpecificity) {
                return;
            }

            let sourceLocation = "Source location not available";

            // Get source location using source map if available
            if (sourceMap && rule.source && rule.source.start) {
                sourceLocation = resolveSourceLocation(sourceMap, rule.source.start.line, rule.source.start.column);
            }

            selectors.push({
                selector: selector.trim(),
                specificity: specificityResult.specificity,
                specificityValue: specificityResult.specificityValue,
                sourceLocation: sourceLocation,
            });
        });
    });

    // Sort by specificity (highest first)
    return selectors.sort((a, b) => b.specificityValue - a.specificityValue);
}
// #endregion

/**
 * Tests a kendo module using a jest testing template.
 * @param {string} module - The module's name.
 * @param {string} map - The module's map name.
 * @param {string} cssVariablePrefix - The module's css variables prefix.
 * @param {boolean} testCustomizations - Toggles the module's customizations test.
 */
function testKendoModule(module, map, cssVariablePrefix, testCustomizations = true) {
    let uniqueValues;
    let configuration = "";

    if (testCustomizations) {
        const modulePrettyValue = data.variables.filter((item) => item.context.name === map)[0].prettyValue;
        uniqueValues = Object.fromEntries(Object.entries(modulePrettyValue).map(([key]) => [key, `test-${module}-${key.toString()}`]));

        const customizations = `
            $${map}: (
                ${Object.entries(uniqueValues)
                    .map(([key, value]) => `${key}: '${value}',`)
                    .join("\n")}
            )`;

        configuration = ` with (${customizations})`;
    }

    const result = compileSassString(`
        @use 'index.scss' as *${configuration};
        @include core-styles();
    `);

    writeResultToDist(result, module);

    // Module Testing Template
    describe(module, () => {
        it("should compile", () => {
            expect(result).toBeDefined();
        });

        testCustomizations &&
            it("should compile with map customizations", () => {
                Object.entries(uniqueValues).forEach(([property, value]) => {
                    try {
                        expect(result).toContain(`${value};`);
                    } catch {
                        throw new Error(`Missing value for "$${property}": expected "${value}" in the result.`);
                    }
                });
            });

        cssVariablePrefix &&
            it("should compile with css variables", () => {
                try {
                    expect(result).toContain(`${cssVariablePrefix}`);
                } catch {
                    throw new Error(`Missing "${cssVariablePrefix}" css variable prefix in the result.`);
                }
            });
    });
}

/**
 * Tests a kendo component using a jest testing template.
 * @param {string} component - The component's name.
 * @param {string} group - The component's group name.
 * @param {string | string[]} className - The component's className.
 * @param {string[]} dependencyClasses - The component's dependencies classNames.
 * @param {string[]} variableExceptions - The component's excluded from test variables.
 * @param {boolean} testCustomizations - Toggles the component's variable customizations test.
 */
// eslint-disable-next-line max-params
function testKendoComponent(component, group, className, dependencyClasses, variableExceptions, testCustomizations = true) {
    let uniqueValues;
    let configuration = "";

    if (testCustomizations) {
        const componentVariables = data.variables
            .filter((item) => item.group[0] === group && item.resolvedType !== "Map")
            .map((item) => item.context.name)
            .filter((item) => !variableExceptions?.includes(item));

        uniqueValues = Object.fromEntries(componentVariables.map((item) => [item, `test-${item}`]));

        const customizations = Object.entries(uniqueValues)
            .map(([key, value]) => `$${key}: ${value},`)
            .join("\n");

        configuration = ` with (${customizations})`;
    }

    const result = compileSassString(`
        @use 'index.scss' as *${configuration};
        @include kendo-${component}--styles();
    `);

    writeResultToDist(result, component);

    // Component Testing Template
    describe(component, () => {
        it("should compile", () => {
            expect(result).toBeDefined();
        });

        className &&
            it("should compile with component selector styles", () => {
                const classNames = Array.isArray(className) ? className : [className];
                classNames.forEach((name) => {
                    try {
                        expect(result).toContain(`.${name} `);
                    } catch {
                        throw new Error(`Missing ".${name}" selector in the result.`);
                    }
                });
            });

        testCustomizations &&
            it("should compile with all variable customizations", () => {
                Object.entries(uniqueValues).forEach(([property, value]) => {
                    try {
                        expect(result).toContain(value);
                    } catch {
                        throw new Error(`Missing value for "$${property}" variable: expected "${value}" value in the result.`);
                    }
                });
            });

        dependencyClasses &&
            it("should compile with component dependency selectors styles", () => {
                dependencyClasses.forEach((className) => {
                    try {
                        expect(result).toContain(`.${className} `);
                    } catch {
                        throw new Error(`Missing ".${className}" dependency selector in the result.`);
                    }
                });
            });
    });
}

/**
 * Test a kendo theme using a jest testing template.
 * @param {number} maxSpecificity - Maximum specificity threshold for the theme.
 * @param {number} averageSpecificity - Average specificity threshold for the theme.
 */
function testKendoTheme(maxSpecificity, averageSpecificity) {
    // Compile the entire theme
    const result = compileSassString(`
        @use 'index.scss' as *;
        @include kendo-theme--styles();
    `);

    writeResultToDist(result, `${theme}-theme`);

    // Theme-level specificity testing
    if (maxSpecificity || averageSpecificity) {
        describe("specificity analysis", () => {
            let specificityTest;

            beforeAll(() => {
                specificityTest = createSpecificityMap(result);

                writeResultToDist(JSON.stringify(specificityTest, null, 2), `${theme}-specificity-data`, "json", "specificity");

                // TODO Simplify
                const specificityJsonPath = path.resolve(__dirname, theme, "dist", "specificity", `${theme}-specificity-data.json`);
                const reportPath = path.resolve(__dirname, theme, "dist", "specificity", `${theme}-specificity-report.md`);
                generateSpecificityReport(specificityJsonPath, reportPath);
            });

            maxSpecificity &&
                it("should not exceed maximum specificity threshold", () => {
                    const allSpecificityValues = [];
                    Object.values(specificityTest).forEach((componentSelectors) => {
                        componentSelectors.forEach((selector) => {
                            allSpecificityValues.push(selector.specificityValue);
                        });
                    });

                    const currentMaxSpecificity = Math.max(...allSpecificityValues);
                    expect(currentMaxSpecificity).toBeLessThanOrEqual(maxSpecificity);
                });

            averageSpecificity &&
                it("should not exceed average specificity threshold", () => {
                    const allSpecificityValues = [];
                    Object.values(specificityTest).forEach((componentSelectors) => {
                        componentSelectors.forEach((selector) => {
                            allSpecificityValues.push(selector.specificityValue);
                        });
                    });

                    const currentAverageSpecificity = allSpecificityValues.reduce((sum, value) => sum + value, 0) / allSpecificityValues.length;
                    expect(currentAverageSpecificity).toBeLessThanOrEqual(averageSpecificity);
                });
        });
    }
}

/**
 * Calculate dynamic specificity threshold starting from 0 (pure CSS increments)
 * @param {string} selector - CSS selector to analyze
 * @param {number} baseThreshold - Starting threshold (default: 0)
 * @returns {number} Calculated threshold value
 */
function calculateSpecificityThreshold(selector) {
    let threshold = 10;

    // Component variants (+10 max) - fill modes, sizes, theme colors, roundness
    if (/\.k-[\w-]+-(solid|outline|flat|link|clear)/.test(selector) || /\.k-[\w-]+-(sm|md|lg|xl|xs|xxl|xxxl)/.test(selector) || /\.k-[\w-]+-(primary|secondary|tertiary|info|success|warning|error|dark|light|inverse)/.test(selector) || /\.k-rounded-(none|xs|sm|md|lg|xl|xxl|xxxl|full)/.test(selector)) {
        threshold += 10;
    }

    // Allow one level of component nesting (+10) - using official component registry
    if (hasComponentNesting(selector)) {
        threshold += 10;
    }

    // State modifiers (+10 each) - both CSS classes and pseudo-classes count as classes in specificity
    if (/:hover|:focus|:active|:disabled|\.k-hover|\.k-focus|\.k-active|\.k-disabled|\.k-selected|\.k-generating/.test(selector)) {
        threshold += 10; // Both pseudo-classes and CSS classes add 10 points to specificity value
    }

    // Pseudo-elements (+1)
    if (/::before|::after/.test(selector)) {
        threshold += 1;
    }

    // DOM elements (+1 per element) - match actual element selectors, not class names
    // Look for elements that are either at the start, after whitespace, or after combinators
    // but not after dots (class selectors) or dashes/letters (part of class names)
    const elementMatches = selector.match(/(?:^|[\s>+~])(svg|input|span|div|button|a|i|em|strong|p|h[1-6]|ul|li|table|tr|td|th|form|label|select|textarea|img)(?=[\s>+~#.[:]|$)/g);
    if (elementMatches && elementMatches.length) {
        threshold += 1;
    }

    return threshold;
}

/**
 * Generate descriptive type for a selector based on its characteristics
 * Creates human-readable test descriptions like "component nesting with state modifier"
 * @param {string} selector - CSS selector to analyze
 * @returns {string} Human-readable description for test cases
 */
function getDescriptorType(selector) {
    const features = [];

    // Check for component nesting using our official component detection
    if (hasComponentNesting(selector)) {
        features.push("component nesting");
    } else {
        // Count CSS classes for general nesting description
        const kendoClasses = selector.match(/\.k-[\w-]+/g) || [];
        if (kendoClasses.length >= 2) {
            features.push(`${kendoClasses.length} nested classes`);
        }
    }

    // Check for component variants (size, style, color, etc.)
    if (/\.k-[\w-]+-(sm|md|lg|xl|xs|xxl|xxxl)/.test(selector)) {
        features.push("size variant");
    }
    if (/\.k-[\w-]+-(solid|outline|flat|link|clear)/.test(selector)) {
        features.push("style variant");
    }
    if (/\.k-[\w-]+-(primary|secondary|tertiary|info|success|warning|error|dark|light|inverse)/.test(selector)) {
        features.push("color variant");
    }
    if (/\.k-rounded-(none|xs|sm|md|lg|xl|xxl|xxxl|full)/.test(selector)) {
        features.push("rounded variant");
    }

    // Check for interactive states
    if (/:hover|:focus|:active|:disabled/.test(selector)) {
        features.push("interactive state");
    }
    if (/\.k-hover|\.k-focus|\.k-active|\.k-disabled|\.k-selected|\.k-generating/.test(selector)) {
        features.push("state modifier");
    }

    // Check for pseudo-elements
    if (/::before|::after/.test(selector)) {
        features.push("pseudo-element");
    }

    // Check for complex selectors
    if (/:not\(/.test(selector)) {
        features.push("negation selector");
    }
    if (/[>+~]/.test(selector)) {
        features.push("combinator");
    }

    // Check for DOM elements
    const elementMatches = selector.match(/\b(svg|input|span|div|button|a|i|em|strong|p|h[1-6]|ul|li|table|tr|td|th|form|label|select|textarea|img)\b/g);
    if (elementMatches && elementMatches.length > 0) {
        features.push("element selector");
    }

    // Create readable description
    if (features.length === 0) {
        return "basic selector";
    }
    if (features.length === 1) {
        return features[0];
    }
    if (features.length === 2) {
        return `${features[0]} with ${features[1]}`;
    }

    const lastFeature = features.pop();
    return `${features.join(", ")} and ${lastFeature}`;
}

module.exports = {
    testKendoModule,
    testKendoComponent,
    testKendoTheme,
    calculateSpecificity,
    getSelectorsSpecificity,
    resolveSourceLocation,
    calculateSpecificityThreshold,
    getDescriptorType,
};
