import "./theme.env.js";
import { Citation } from "../../packages/html/src/citation/citation.spec";
import { CitationPopover } from "../../packages/html/src/citation/citation-popover.spec";
import { CitationPopoverView } from "../../packages/html/src/citation/citation-popover-view.spec";
import { testKendoComponent } from "../utility";

const component = Citation.moduleName;
const group = component;
const className = [CitationPopover.className, CitationPopoverView.className];

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
