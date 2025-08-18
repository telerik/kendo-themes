import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Timeline } from "../../packages/html/src/timeline/timeline.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "timeline";
const group = component;
const className = Timeline.className;
const dependencyClassNames = [
    "k-button",
    "k-card",
    "k-svg-icon"
];
const expected = [
    "kendo-timeline-flag-offset-bottom", // Variable customizations work, but is used by another variable in calculations.
    "kendo-timeline-date-width", // Variable customizations work, but is used by another variable in calculations.
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

  const timelineSelectors = getSelectorsSpecificity(result.css, {
    filter: Timeline.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  timelineSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Timeline);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Timeline.className, dependencyClassNames, [...expected, ...unexpected]);
