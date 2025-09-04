import "./theme.env.js";
import { presets, testSpecificity } from "../specificity-analyzer.js";
import { allComponents } from "../specificity-specs.js";

describe("Bootstrap theme", () => {
  testSpecificity(presets["2025Q4"], allComponents);
});
