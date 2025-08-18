import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { TaskBoard } from "../../packages/html/src/taskboard/taskboard.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "task-board";
const group = component;
const className = TaskBoard.className;
const dependencyClassNames = [
    "k-svg-icon",
    "k-form",
    "k-input",
    // "k-textbox", // .k-textbox {} selector is empty.
    // "k-searchbox", // .k-searchbox {} selector is empty.
    "k-toolbar",
    "k-card"
];
const expected = [
    "kendo-taskboard-spacer" // Variable customizations work, but is used by another variable.
];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/taskboard/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/taskboard/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/taskboard/_layout.scss' as *;

    @include kendo-${component}--layout();
    @include kendo-${component}--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const taskboardSelectors = getSelectorsSpecificity(result.css, {
    filter: TaskBoard.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  taskboardSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, TaskBoard);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, TaskBoard.className, dependencyClassNames, [...expected, ...unexpected]);
