import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Slider } from "../../packages/html/src/slider/slider.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "slider";
const group = component;
const className = Slider.className;
const dependencyClassNames = [
    "k-button",
    "k-tooltip",
    "k-svg-icon"
];
const expected = [
    "kendo-slider-alt-size", // Variable customizations work, but is used by another variable.
    "kendo-slider-button-offset", // Variable customizations work, but is used by another variable.
    "kendo-slider-button-size" // Variable customizations work, but is used by another variable.
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

  const sliderSelectors = getSelectorsSpecificity(result.css, {
    filter: Slider.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  sliderSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Slider);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Slider.className, dependencyClassNames, [...expected, ...unexpected]);
