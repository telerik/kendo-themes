import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Form } from "../../packages/html/src/form/form.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "form";
const group = component;
const className = Form.className;
const dependencyClassNames = ["k-toolbar","k-actions"];
const expected = [];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/forms/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/forms/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/forms/_layout.scss' as *;

    @include kendo-${component}--layout();
    @include kendo-${component}--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const formSelectors = getSelectorsSpecificity(result.css, {
    filter: Form.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  formSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Form);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Form.className, dependencyClassNames, [...expected, ...unexpected]);
