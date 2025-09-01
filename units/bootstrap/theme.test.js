require("./theme.env.js");
const { testKendoTheme } = require("../utility");

const maxSpecificity = 100;
const maxAverageSpecificity = 30;

// Theme-level specificity testing
testKendoTheme(maxSpecificity, maxAverageSpecificity);
