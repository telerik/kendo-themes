import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Gantt } from "../../packages/html/src/gantt/gantt.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "gantt";
const group = component;
const className = Gantt.className;
const dependencyClassNames = [
    "k-button",
    "k-input",
    // "k-validator", // Empty selector for .k-validator {}
    // "k-datetimepicker", // Empty selector for .k-datetimepicker {}
    "k-numerictextbox",
    "k-window",
    "k-splitter",
    "k-treelist",
    "k-current-time" // kendo-time-marker--styles();
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

  const ganttSelectors = getSelectorsSpecificity(result.css, {
    filter: Gantt.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  ganttSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Gantt);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Gantt.className, dependencyClassNames, [...expected, ...unexpected]);
