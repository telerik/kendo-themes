require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "media-player";
const group = "mediaplayer";
const className = "k-mediaplayer";

const dependencyClassNames = [
    "k-slider",
    "k-toolbar",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
