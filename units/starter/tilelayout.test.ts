import "./theme.env.js";
import { TileLayout } from "../../packages/html/src/tilelayout/tilelayout.spec";
import { testKendoComponent } from "../utility";

const component = TileLayout.moduleName;
const group = component;
const className = TileLayout.className;

const dependencyClassNames = ["k-card", "k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
