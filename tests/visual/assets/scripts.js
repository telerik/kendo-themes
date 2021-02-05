"use strict";

const DEFAULT_THEME = "default";
const DEFAULT_SWATCH = "all";

let params = (new URL(document.location)).searchParams;
let theme = params.get("theme") || DEFAULT_THEME;
let swatch = params.get("swatch") || DEFAULT_SWATCH;
let animations = params.get("animations");
let kendoThemeLink = document.querySelector('link[data-role="kendo-theme"]');

// Change theme
kendoThemeLink.href = kendoThemeLink.href.replace(/default/i, theme).replace(/all.css/, `${swatch}.css`);

// Stop animations
if (animations === true) {
    document.documentElement.classList.remove("k-no-animations");
} else {
    document.documentElement.classList.add("k-no-animations");
}

// Apply chart colors to SVG elements
window.addEventListener('load', () => [ ...kendoThemeLink.sheet.cssRules ]
    .filter(rule => rule.selectorText && rule.selectorText.startsWith('.k-var'))
    .filter(rule => Boolean(rule.style.backgroundColor))
    .forEach(rule => { rule.style.fill = rule.style.backgroundColor; })
);
