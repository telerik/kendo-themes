import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Calendar } from "../../packages/html/src/calendar/calendar.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "calendar";
const group = component;
const className = Calendar.className;
const dependencyClassNames = ["k-button", "k-svg-icon", "k-list"];
const expected = [
    "kendo-calendar-cell-size", // Variable customizations work, but is used by another variable.
    "kendo-calendar-sm-cell-size", // Variable customizations work, but is used by another variable.
    "kendo-calendar-md-cell-size", // Variable customizations work, but is used by another variable.
    "kendo-calendar-lg-cell-size", // Variable customizations work, but is used by another variable.
    "kendo-calendar-navigation-item-height", // Variable customizations work, but is used by another variable.
    "kendo-calendar-today-style" // Variable customizations work, but is used by another variable.
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

  const calendarSelectors = getSelectorsSpecificity(result.css, {
    filter: Calendar.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  calendarSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Calendar);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Calendar.className, dependencyClassNames, [...expected, ...unexpected]);
