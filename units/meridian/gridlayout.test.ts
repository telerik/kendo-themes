import "./theme.env.js";
import { GridLayout } from "../../packages/html/src/layout/grid-layout.spec";
import { testKendoComponent } from "../utility";

const component = GridLayout.moduleName;
const group = component;
const className = GridLayout.className; // its styles are defined in core/scss/styles/_layout.scss

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);


