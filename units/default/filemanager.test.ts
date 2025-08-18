import "./theme.env.js";
import { getSelectorsSpecificity, calculateSpecificityThreshold } from "../specificity-analyzer";
import { FileManager } from "../../packages/html/src/filemanager/filemanager.spec";
import * as sass from "sass";
import * as path from "path";
import { describe, it, expect } from "@jest/globals";

const { testKendoComponent } = require("../utility");

const component = "file-manager";
const group = component;
const className = FileManager.className;
const dependencyClassNames = [
    "k-input",
    "k-toolbar",
    "k-upload",
    "k-switch",
    "k-menu",
    "k-dialog",
    "k-breadcrumb",
    "k-treeview",
    "k-splitter",
    "k-grid",
    "k-listview"
];
const expected = [];
const unexpected = [];

describe(`${component} CSS specificity`, () => {
  const result = sass.compileString(
    `
    @use '../packages/${process.env.THEME}/scss/filemanager/_variables.scss' as *;
    @use '../packages/${process.env.THEME}/scss/filemanager/_theme.scss' as *;
    @use '../packages/${process.env.THEME}/scss/filemanager/_layout.scss' as *;

    @include kendo-${component}--layout();
    @include kendo-${component}--theme();
    `,
    {
      loadPaths: [path.resolve(__dirname, "../../"), path.resolve(__dirname, "../../node_modules")],
      sourceMap: true,
    }
  );

  const filemanagerSelectors = getSelectorsSpecificity(result.css, {
    filter: FileManager.className,
    minSpecificity: 0,
    sourceMap: result.sourceMap,
  });

  filemanagerSelectors.forEach((selectorInfo) => {
    const { selector, specificityValue, sourceLocation } = selectorInfo;
    const expectedSpecificity = calculateSpecificityThreshold(selector, FileManager);

    it(`"${selector} (Expected: ${expectedSpecificity}, Actual: ${specificityValue})"`, () => {
      try {
        expect(specificityValue).toBe(expectedSpecificity);
      } catch (error) {
        throw new Error(`${error.message}\nSource: ${sourceLocation}`);
      }
    });
  });
});

testKendoComponent(component, group, FileManager.className, dependencyClassNames, [...expected, ...unexpected]);
