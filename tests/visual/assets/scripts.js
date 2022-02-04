"use strict";

const DEFAULT_THEME = "default";
const DEFAULT_SWATCH = "all";

let params = (new URL(document.location)).searchParams;
let theme = params.get("theme") || DEFAULT_THEME;
let swatch = params.get("swatch") || DEFAULT_SWATCH;
let animations = params.get("animations");
let kendoThemeLink = document.querySelector('link[data-role="kendo-theme"]');

// Alias swatch names
if (swatch !== 'all' && swatch.indexOf(theme) !== 0) {
    swatch = `${theme}-${swatch}`;
}

// Change theme
kendoThemeLink.href = kendoThemeLink.getAttribute('href').replace(/default/i, theme).replace(/all.css/, `${swatch}.css`);

// Stop animations
if (animations === true) {
    document.documentElement.classList.remove("k-no-animations");
} else {
    document.documentElement.classList.add("k-no-animations");
}

// Calculate scrollbar width
function scrollbarWidth() {
    let div = document.createElement('div');
    let result;

    div.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
    div.innerHTML = "&nbsp;";
    document.body.appendChild(div);

    result = div.offsetWidth - div.scrollWidth;

    document.body.removeChild(div);

    return `${result}px`;
}

// Hooks
window.addEventListener('load', () => {

    // Set scrollbar width
    document.documentElement.style.setProperty( '--kendo-scrollbar-width', scrollbarWidth() );

    // Apply chart colors to SVG elements
    [ ...kendoThemeLink.sheet.cssRules ]
        .filter(rule => rule.selectorText && rule.selectorText.startsWith('.k-var'))
        .filter(rule => Boolean(rule.style.backgroundColor))
        .forEach(rule => { rule.style.fill = rule.style.backgroundColor; });
});
