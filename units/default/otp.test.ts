import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { OneTimePassword } from "../../packages/html/src/otp/otp.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "otp";
const group = component;
const className = OneTimePassword.className;
const dependencyClassNames = ["k-input"];
const expected = [
    "kendo-otp-gap", // Variable customizations work, but is used by another variable.
    "kendo-otp-separator-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-otp-input-width", // Variable customizations work, but is used by another variable.
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

  const otpSelectors = getSelectorsSpecificity(result.css, {
    filter: OneTimePassword.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  otpSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, OneTimePassword);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, OneTimePassword.className, dependencyClassNames, [...expected, ...unexpected]);
