/**
 * Negative tests for kendo-breakpoint-only mixin validation.
 * Tests that invalid inputs produce clear error messages.
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

describe("kendo-breakpoint-only validation", () => {

    it("should throw error for invalid breakpoint name", () => {
        const invalidBreakpoint = `
            @use "_mixins.scss" as *;
            @include kendo-breakpoint-only(invalid-bp) {
                .test { display: block; }
            }
        `;

        expect(() => compileSassString(invalidBreakpoint)).toThrow(
            /Invalid breakpoint 'invalid-bp'/
        );
    });

    it("should throw error for last breakpoint (xxl)", () => {
        const lastBreakpoint = `
            @use "_mixins.scss" as *;
            @include kendo-breakpoint-only(xxl) {
                .test { display: block; }
            }
        `;

        expect(() => compileSassString(lastBreakpoint)).toThrow(
            /Cannot use last breakpoint 'xxl'/
        );
    });

    it("should compile successfully for valid breakpoint (md)", () => {
        const validBreakpoint = `
            @use "_mixins.scss" as *;
            @include kendo-breakpoint-only(md) {
                .test { display: block; }
            }
        `;

        const result = compileSassString(validBreakpoint);
        expect(result).toContain("@media");
        expect(result).toContain("min-width");
        expect(result).toContain("max-width");
    });

});
