import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { RadioButton } from "../../packages/html/src/radio/radio.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "radio";
const group = component;
const className = RadioButton.className;
const dependencyClassNames = [];
const expected = [
    "kendo-radio-indicator-type", // Variable customizations work, but is used directly in CSS rule in the core.
    "kendo-radio-glyph-font-family", // Variable customizations work, but is used directly in CSS rule in the core.
    "kendo-radio-checked-glyph", // Variable customizations work, but is used directly in CSS rule in the core.
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

  const radioSelectors = getSelectorsSpecificity(result.css, {
    filter: RadioButton.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  radioSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, RadioButton);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, RadioButton.className, dependencyClassNames, [...expected, ...unexpected]);
