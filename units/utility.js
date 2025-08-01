const sass = require("sass");
const fs = require("fs");
const path = require("path");
const { describe, it, expect } = require("@jest/globals");

const theme = process.env.THEME;
const themeDir = path.resolve(__dirname, "../packages", theme);
const themeScssDir = path.resolve(themeDir, "scss");
const nodeModulesDir = path.resolve(__dirname, "../node_modules");
const themeMetadataDir = path.resolve(themeDir, "dist", "meta", "sassdoc-data.json");

const data = JSON.parse(fs.readFileSync(themeMetadataDir));

// #region helpers
function writeResultToDist(result, file) {
    const distDir = path.resolve(__dirname, theme, "dist");
    const outputPath = path.join(distDir, `${file}.css`);

    !fs.existsSync(distDir) && fs.mkdirSync(distDir);
    fs.writeFileSync(outputPath, result, "utf8");
}

function compileSassString(sassString) {
    return sass.compileString(sassString, {
        loadPaths: [themeScssDir, nodeModulesDir],
    }).css;
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

module.exports = {
    testKendoModule,
    testKendoComponent,
};
