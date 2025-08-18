import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Checkbox } from "../../packages/html/src/checkbox/checkbox.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "checkbox";
const group = component;
const className = Checkbox.className;
const dependencyClassNames = [];
const expected = [
    "kendo-checkbox-indicator-type", // Variable customizations work, but is used by another variable.
    "kendo-checkbox-glyph-font-family", // Variable customizations work, but is used directly in CSS rule in the core.
    "kendo-checkbox-checked-glyph", // Variable customizations work, but is used directly in CSS rule in the core.
    "kendo-checkbox-indeterminate-glyph", // Variable customizations work, but is used directly in CSS rule in the core.
];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/${component}/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/${component}/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/${component}/_layout.scss' as *;

    @include kendo-${component}--layout();
    @include kendo-${component}--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const checkboxSelectors = getSelectorsSpecificity(result.css, {
    filter: Checkbox.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  checkboxSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Checkbox);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Checkbox.className, dependencyClassNames, [...expected, ...unexpected]);
