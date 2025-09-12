import * as sass from "sass";
import * as fs from "fs";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const theme = process.env.THEME as string;
const themeDir = path.resolve(__dirname, "../packages", theme);
const themeScssDir = path.resolve(themeDir, "scss");
const nodeModulesDir = path.resolve(__dirname, "../node_modules");
const themeMetadataDir = path.resolve(themeDir, "dist", "meta", "sassdoc-data.json");

interface Variable {
    context: {
        name: string;
    };
    group: string[];
    resolvedType?: string;
    prettyValue?: Record<string, any>;
}

interface SassDocData {
    variables: Variable[];
}

const data: SassDocData = JSON.parse(fs.readFileSync(themeMetadataDir, 'utf8'));

// #region helpers
function writeResultToDist(result: string, file: string): void {
    const distDir = path.resolve(__dirname, theme, "dist");
    const outputPath = path.join(distDir, `${file}.css`);

    !fs.existsSync(distDir) && fs.mkdirSync(distDir);
    fs.writeFileSync(outputPath, result, "utf8");
}

function compileSassString(sassString: string): string {
    return sass.compileString(sassString, {
        loadPaths: [themeScssDir, nodeModulesDir],
    }).css;
}
// #endregion

/**
 * Tests a kendo module using a jest testing template.
 * @param module - The module's name.
 * @param map - The module's map name.
 * @param cssVariablePrefix - The module's css variables prefix.
 * @param testCustomizations - Toggles the module's customizations test.
 */
function testKendoModule(
    module: string,
    map: string,
    cssVariablePrefix: string,
    testCustomizations: boolean = true
): void {
    let uniqueValues: Record<string, string>;
    let configuration = "";

    if (testCustomizations) {
        const moduleVariable = data.variables.find((item) => item.context.name === map);
        if (!moduleVariable) {
            throw new Error(`Module variable with name "${map}" not found`);
        }

        const modulePrettyValue = moduleVariable.prettyValue;
        if (!modulePrettyValue) {
            throw new Error(`Module variable "${map}" has no prettyValue`);
        }

        uniqueValues = Object.fromEntries(
            Object.entries(modulePrettyValue).map(([key]) => [key, `test-${module}-${key.toString()}`])
        );

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
 * @param component - The component's name.
 * @param group - The component's group name.
 * @param className - The component's className.
 * @param dependencyClasses - The component's dependencies classNames.
 * @param variableExceptions - The component's excluded from test variables.
 * @param testCustomizations - Toggles the component's variable customizations test.
 */
function testKendoComponent(
    component: string | null,
    group: string | null,
    className: string | string[] | null,
    dependencyClasses: string[],
    variableExceptions?: string[],
    testCustomizations: boolean = true
): void {
    // Fail the test if component is null
    if (component === null || group === null) {
        throw new Error("Component and group cannot be null");
    }

    let uniqueValues: Record<string, string> = {};
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

export {
    testKendoModule,
    testKendoComponent,
};
