import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { DateInput } from "../../packages/html/src/dateinput/dateinput.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "date-input";
const group = component;
const className = DateInput.className;
const dependencyClassNames = [
    "k-input"
];
const expected = [];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/dateinput/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/dateinput/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/dateinput/_layout.scss' as *;

    @include kendo-date-input--layout();
    @include kendo-date-input--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const dateInputSelectors = getSelectorsSpecificity(result.css, {
    filter: DateInput.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  dateInputSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, DateInput);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, DateInput.className, dependencyClassNames, [...expected, ...unexpected], false);
