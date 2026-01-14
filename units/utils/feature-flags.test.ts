/**
 * Tests for feature flags in utils package.
 * Validates ON/OFF behavior for optional utility generation.
 */
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const utilsScssDir = path.resolve(__dirname, "../../packages/utils/scss");
const nodeModulesDir = path.resolve(__dirname, "../../node_modules");

function compileSassString(sassString: string): string {
    return sass.compileString(sassString, {
        loadPaths: [utilsScssDir, nodeModulesDir],
    }).css;
}

describe("$kendo-enable-user-select-utils feature flag", () => {

    it("should generate user-select utilities when flag is ON (default)", () => {
        const flagOn = `
            @use "interactivity/_user-select.scss" as *;
            @include kendo-utils--interactivity--user-select();
        `;

        const result = compileSassString(flagOn);
        expect(result).toContain(".k-user-select-none");
        expect(result).toContain(".k-user-select-auto");
        expect(result).toContain("user-select:");
    });

    it("should NOT generate user-select utilities when flag is OFF", () => {
        const flagOff = `
            @use "interactivity/_user-select.scss" as * with (
                $kendo-enable-user-select-utils: false
            );
            @include kendo-utils--interactivity--user-select();
        `;

        const result = compileSassString(flagOff);
        expect(result).not.toContain(".k-user-select-none");
        expect(result).not.toContain(".k-user-select-auto");
        expect(result).not.toContain("user-select:");
    });

    it("should have safe default of true (enabled)", () => {
        // Compile with explicit true to confirm default behavior matches
        const explicitTrue = `
            @use "interactivity/_user-select.scss" as * with (
                $kendo-enable-user-select-utils: true
            );
            @include kendo-utils--interactivity--user-select();
        `;

        const defaultBehavior = `
            @use "interactivity/_user-select.scss" as *;
            @include kendo-utils--interactivity--user-select();
        `;

        const explicitResult = compileSassString(explicitTrue);
        const defaultResult = compileSassString(defaultBehavior);

        // Both should produce identical output (flag defaults to true)
        expect(explicitResult).toContain(".k-user-select-none");
        expect(defaultResult).toContain(".k-user-select-none");
    });

});
