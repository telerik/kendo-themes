import "./theme.env.js";
import { SuggestionGroup } from "../../packages/html/src/suggestion/suggestion-group.spec";
import { testKendoComponent } from "../utility";

const component = SuggestionGroup.moduleName;
const group = component;
const className = SuggestionGroup.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
