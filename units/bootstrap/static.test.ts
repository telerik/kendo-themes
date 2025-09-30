import "./theme.env.js";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const functions = ["k-color", "k-elevation", "k-border-radius", "k-spacing", "k-z-index"];

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
});
