import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { TimePicker } from "../../packages/html/src/timepicker/timepicker.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "time-picker";
const group = component;
const className = TimePicker.className;
const dependencyClassNames = [
    "k-input",
    "k-button",
    "k-popup",
    "k-list"
];
const expected = [];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/timepicker/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/timepicker/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/timepicker/_layout.scss' as *;

    @include kendo-${component}--layout();
    @include kendo-${component}--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const timepickerSelectors = getSelectorsSpecificity(result.css, {
    filter: TimePicker.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  timepickerSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, TimePicker);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, TimePicker.className, dependencyClassNames, [...expected, ...unexpected], false);
