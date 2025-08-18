import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { DatePicker } from "../../packages/html/src/datepicker/datepicker.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "date-picker";
const group = component;
const className = DatePicker.className;
const dependencyClassNames = [
    "k-input",
    "k-popup",
    "k-calendar"
];
const expected = [];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/datepicker/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/datepicker/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/datepicker/_layout.scss' as *;

    @include kendo-date-picker--layout();
    @include kendo-date-picker--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const datepickerSelectors = getSelectorsSpecificity(result.css, {
    filter: DatePicker.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  datepickerSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, DatePicker);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, DatePicker.className, dependencyClassNames, [...expected, ...unexpected], false);
