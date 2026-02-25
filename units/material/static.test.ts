import "./theme.env.js";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect, beforeAll } from "vitest";

const functions = ["k-color", "k-elevation", "k-border-radius", "k-spacing", "k-z-index", "k-duration", "k-easing", "k-transition"];

// Default option values that should never appear as CSS property values
// Note: "solid" and "none" are excluded as they are valid CSS keywords
const defaultOptionValues = {
  sizes: ["sm", "md", "lg"],
  fillModes: ["outline", "flat", "link", "clear"],
  themeColors: ["base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse"],
  roundness: ["sm", "md", "lg", "full"]
};

describe("Static theme compilation validation", () => {
  let compiledCSS: string;

  beforeAll(() => {
    const theme = process.env.THEME as string;
    const basePath = path.resolve(__dirname, "../../");

    const result = sass.compileString(
      `
            @use '${basePath}/packages/${theme}/scss/index.scss' as *;
            @include kendo-theme--styles();
            `,
      {
        loadPaths: [basePath, path.resolve(basePath, "node_modules")],
      }
    );

    compiledCSS = result.css;
  });

  functions.forEach((functionName) => {
    it(`should not contain unresolved ${functionName}( function calls in compiled CSS`, () => {
      // Check that the compiled CSS doesn't contain unresolved function calls
      // If these appear in the output, it means the functions weren't properly imported or used

      try {
        expect(compiledCSS).not.toContain(`${functionName}(`);
      } catch {
        throw new Error(`Found unresolved function call: ${functionName}`);
      }
    });
  });

  describe("should not contain unresolved default option values as CSS property values", () => {
    // Pattern matches values used as CSS property values: ": value;" or ": "value";" etc.
    // Handles both quoted and unquoted values
    // This won't match class names like ".k-button-sm" or comments
    const createValuePattern = (value: string) => new RegExp(`:\\s*["']?${value}["']?\\s*[;!}]`, "gi");

    Object.entries(defaultOptionValues).forEach(([category, values]) => {
      values.forEach((value) => {
        it(`should not contain unresolved ${category} value "${value}" as a CSS property value`, () => {
          const pattern = createValuePattern(value);
          const matches = compiledCSS.match(pattern);

          if (matches) {
            throw new Error(
              `Found unresolved ${category} value "${value}" used as CSS property value (${matches.length} occurrence(s)). ` +
              `This indicates a default option was not properly resolved.`
            );
          }
        });
      });
    });
  });
});
