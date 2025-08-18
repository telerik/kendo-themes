import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Input } from "../../packages/html/src/input/input.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "input";
const group = component;
const className = Input.className;
const dependencyClassNames = ["k-button"];
const expected = [
    "kendo-input-border-width", // Variable customizations work, but is used by another variable.
    "kendo-input-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-input-padding-y", // Variable customizations work, but is used by another variable.
    "kendo-input-font-size", // Variable customizations work, but is used by another variable.
    "kendo-input-line-height", // Variable customizations work, but is used by another variable.
    "kendo-input-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-input-spinner-icon-offset", // Variable customizations work but needs "kendo-use-input-spinner-icon-offset" variable to be true.
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

  const inputSelectors = getSelectorsSpecificity(result.css, {
    filter: Input.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  inputSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Input);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Input.className, dependencyClassNames, [...expected, ...unexpected]);
