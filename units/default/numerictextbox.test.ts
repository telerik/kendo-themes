import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { NumericTextbox } from "../../packages/html/src/numerictextbox/numerictextbox.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "numeric-textbox";
const group = component;
const className = NumericTextbox.className;
const dependencyClassNames = [
    "k-input",
    "k-floating-label-container",
    "k-svg-icon"
];
const expected = [];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/numerictextbox/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/numerictextbox/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/numerictextbox/_layout.scss' as *;

    @include kendo-${component}--layout();
    @include kendo-${component}--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const numerictextboxSelectors = getSelectorsSpecificity(result.css, {
    filter: NumericTextbox.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  numerictextboxSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, NumericTextbox);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, NumericTextbox.className, dependencyClassNames, [...expected, ...unexpected], false);
