import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { Editor } from "../../packages/html/src/editor/editor.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "editor";
const group = component;
const className = Editor.className;
const dependencyClassNames = [
    "k-button",
    "k-checkbox",
    "k-colorpicker",
    // "k-combobox", // The .k-combobox selector is empty.
    // "k-dropdownlist", // @extend .k-dropdown-list, which is empty.
    "k-toolbar",
    "k-upload",
    "k-window"
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

  const editorSelectors = getSelectorsSpecificity(result.css, {
    filter: Editor.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  editorSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, Editor);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, Editor.className, dependencyClassNames, [...expected, ...unexpected]);
