import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { TimeDurationPicker } from "../../packages/html/src/timedurationpicker/timedurationpicker.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "time-duration-picker";
const group = component;
const className = TimeDurationPicker.className;
const dependencyClassNames = [
    "k-svg-icon",
    "k-button",
    "k-input",
    "k-popup",
    "k-list",
    "k-timeselector",

];
const expected = [];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/timedurationpicker/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/timedurationpicker/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/timedurationpicker/_layout.scss' as *;

    @include kendo-${component}--layout();
    @include kendo-${component}--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const timedurationpickerSelectors = getSelectorsSpecificity(result.css, {
    filter: TimeDurationPicker.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  timedurationpickerSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, TimeDurationPicker);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, TimeDurationPicker.className, dependencyClassNames, [...expected, ...unexpected], false);
