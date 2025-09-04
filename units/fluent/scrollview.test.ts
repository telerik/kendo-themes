import "./theme.env.js";
import { ScrollView } from "../../packages/html/src/scrollview/scrollview.spec";
import { testKendoComponent } from "../utility";

const component = ScrollView.moduleName;
const group = component;
const className = ScrollView.className;

const dependencyClassNames = ["k-button", "k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
