import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Captcha } from "../../packages/html/src/captcha/captcha.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "captcha";
const group = component;
const className = Captcha.className;
const dependencyClassNames = [
    "k-input",
    "k-button",
    "k-svg-icon",
    // "k-textbox", - Textbox selector has no styles.
    "k-slider",
];
const expected = [
    "kendo-captcha-spacer", // Variable customizations work, but is used by another variable.
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

  const captchaSelectors = getSelectorsSpecificity(result.css, {
    filter: Captcha.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  captchaSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Captcha);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Captcha.className, dependencyClassNames, [...expected, ...unexpected]);
