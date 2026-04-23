import "./theme.env.js";
import { TypographyBody } from "../../packages/html/src/typography/typography-body.spec";
import { testKendoComponent } from "../utility";

const component = TypographyBody.moduleName;
const group = "typography-component";
const className = ["k-h1", "k-h2", "k-h3", "k-h4", "k-h5", "k-h6", "k-display-1", "k-display-2", "k-display-3", "k-display-4"];

const dependencyClassNames = [];

const expected = [
    "kendo-line-height-em" // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
