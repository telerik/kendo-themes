import "./theme.env.js";
import { ListView } from "../../packages/html/src/listview/listview.spec";
import { testKendoComponent } from "../utility";

const component = ListView.moduleName;
const group = component;
 const className = ListView.className;

const dependencyClassNames = [
    "k-pager",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
