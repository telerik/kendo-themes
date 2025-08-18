import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { DropdownTree } from "../../packages/html/src/dropdowntree/dropdowntree.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "dropdown-tree";
const group = component;
const className = DropdownTree.className;
const dependencyClassNames = [
    "k-input",
    "k-popup",
    "k-floating-label-container",
    // "k-dropdownlist",  // .k-dropdownlist {} @extend .k-dropdown-list; .k-dropdown-list{} is empty;
    // "k-multiselect",  // .k-multiselect {} selector is empty
    "k-treeview"
];
const expected = [];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/dropdowntree/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/dropdowntree/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/dropdowntree/_layout.scss' as *;

    @include kendo-${component}--layout();
    @include kendo-${component}--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const dropdowntreeSelectors = getSelectorsSpecificity(result.css, {
    filter: DropdownTree.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  dropdowntreeSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, DropdownTree);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, DropdownTree.className, dependencyClassNames, [...expected, ...unexpected], false);
