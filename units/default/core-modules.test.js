require("./theme.env.js")
const { testKendoModule } = require("../utility.js");

// Color System
testKendoModule("color-system", "kendo-colors", "--kendo-color");

// Spacing
testKendoModule("spacing", "kendo-spacing", "--kendo-spacing");

// Elevation
testKendoModule("elevation", "kendo-elevation", "--kendo-elevation");

// Radii
testKendoModule("radii", "kendo-border-radii", "--kendo-border-radius");

// Typography
testKendoModule("font-size", "kendo-font-sizes", "--kendo-font-size");
testKendoModule("font-weight", "kendo-font-weights", "--kendo-font-weight");
testKendoModule("font-family", "kendo-font-families", "--kendo-font-family");
testKendoModule("line-height", "kendo-line-heights", "--kendo-line-height");
testKendoModule("letter-spacing", "kendo-letter-spacings", "--kendo-letter-spacing");
