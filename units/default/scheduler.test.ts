import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Scheduler } from "../../packages/html/src/scheduler/scheduler.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "scheduler";
const group = component;
const className = Scheduler.className;
const dependencyClassNames = [
    "k-svg-icon",
    // @include kendo-adaptive--styles();
    "k-button",
    // "k-datetimepicker", // Empty selector for .k-datetimepicker {}
    // "k-dropdownlist", // @extend .k-dropdown-list, which is empty.
    "k-dialog",
    "k-tooltip",
    "k-current-time" // kendo-time-marker--styles()
];
const expected = [];
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

  const schedulerSelectors = getSelectorsSpecificity(result.css, {
    filter: Scheduler.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  schedulerSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Scheduler);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Scheduler.className, dependencyClassNames, [...expected, ...unexpected]);
