#!/usr/bin/env node
import { Browser, By } from '@progress/kendo-e2e';
import AxeBuilder from '@axe-core/webdriverjs';
import { createServer } from 'http-server';
import { globSync } from 'glob';

let ENV_MAX_CHUNKS = process.env.MAX_CHUNKS || 1;
let ENV_CURRENT_CHUNK = (process.env.CURRENT_CHUNK || 1) - 1;

if (ENV_CURRENT_CHUNK > ENV_MAX_CHUNKS) {
    throw new Error('ENV_CURRENT_CHUNK cannot be greater than ENV_MAX_CHUNKS');
}

const PORT = 18111;
const HOST = 'localhost';
const TESTS_PATH = './tests';
const COMPONENT_PAGE_EXT = '.html';
const THEME = process.env.THEME || "meridian";
const SWATCH = process.env.SWATCH || "meridian-main";

// ---------------------------------------------------------------------------
// Exclusions
// ---------------------------------------------------------------------------
// All exclusions live in one config so a reviewer can see "what is skipped
// and why" without reading prose comments scattered through the script.
// Keys are paths/class names; values are short reasons (kept for grep / future
// reporting). Add an entry here, not a branch in the dispatcher.
// ---------------------------------------------------------------------------
const EXCLUSIONS = {
    // Pages skipped from axe text-contrast checks — non-theme inline colors.
    textPages: {
        './tests/scheduler/scheduler-react-timeline-multi.html': 'inline `background: darkred|green` on events',
        './tests/scheduler/scheduler-tooltip.html': 'inline `background-color: rgb(17,134,64)` on tooltip event',
        './tests/button-group/button-group.html': 'inline `background: gray` / `color: magenta` demo styles',
        './tests/loader/loader-container-overlay.html': 'themed label over .k-overlay at 0.5 opacity (alpha-blended mid-gray)'
    },
    // Pages skipped from focus-indicator checks — non-theme surfaces.
    focusPages: {
        './tests/button-group/button-group.html': 'demo on `background: gray` (rgb(120,120,120)); cannot reach 3:1',
        './tests/scrollview/scrollview.html': 'translucent .k-scrollview-nav-wrap overlay; cannot satisfy 3:1 on both surfaces',
        './tests/scrollview/scrollview-rtl.html': 'translucent .k-scrollview-nav-wrap overlay; cannot satisfy 3:1 on both surfaces',
        './tests/colorgradient/colorgradient-draghandle.html': 'inline linear-gradient hue/alpha tracks; backgroundColor is transparent'
    },
    // Class names whose elements should be skipped during focus-ring checks.
    focusElementClasses: {
        'k-table-td-row-span': 'inset shadow is the row-span border visualization, not a focus ring',
        'k-floating-label-container': '.k-focus on this wrapper has no painted ring',
        'k-card-title': '.k-focus on this child has no painted ring',
        'k-rating': 'indicator location indeterminate',
        'k-rating-item': 'indicator location indeterminate',
        'k-time-list-wrapper': '.k-focus on this wrapper has no painted ring'
    },
    // Components whose pages are skipped entirely (URL substring match).
    pageSubstrings: {
        'mediaplayer': 'not WCAG compliant',
        'barcode': 'image of black lines on transparent bg',
        'circular-progressbar': 'svg-on-text overlap',
        'treemap': 'data-driven tile colors that the theme cannot control',
        'preview-components': 'aggregator page; component-specific pages cover the same elements'
    },
    // Axe text-contrast violations are dropped if any ancestor matches one of
    // these selectors (disabled, demo overrides, warning-color buttons …).
    axeAncestorSelectors: [
        '.k-disabled',
        '.k-event-drag-hint',
        '.k-button-clear.k-button-warning',
        '.k-button-link.k-button-warning',
        '.k-button-outline.k-button-warning',
        '.k-button-flat.k-button-warning',
        '.k-avatar-warning'
    ]
};

let count = {
    violations: 0,
    incomplete: 0,
    aaa: 0,
    focus: 0
};

let incompleteTypes = {
    short: 0,
    pseudo: 0,
    one: 0
};

// ---------------------------------------------------------------------------
// Dispatcher tables — declarative knowledge of where each component paints
// its focus indicator. Each rule names a list of class fragments that match
// (`indexOf` style) and a `kind` consumed by the dispatcher.
//
// SURFACE rules drive `selfAndBackground` (which colors to compare against).
// PROBE rules drive `getIndicatorColor` (where the painted ring lives).
//
// Adding a new component normally means one row per table, not a new branch
// in a 100-line if/else ladder.
// ---------------------------------------------------------------------------

// SURFACE_RULES — how to read self/background for the contrast comparison.
// kind:
//   'self=bg'  — the ring is the element's own background; compare ring against
//                its surrounding bg only (self == background).
//   'border'   — the ring is the element's border-color change; the element
//                background is the adjacent surface, the ring sits on the
//                outside edge (so background <- self, self <- background).
//   'inset'    — the ring is painted inset over the element's solid background
//                (e.g. tilelayout, colorpalette tile, stepper pseudo-border);
//                compare ring against element background only (self == self).
const SURFACE_RULES = [
    { match: [ 'k-button-clear', 'k-time-list-wrapper', 'k-splitbar', 'k-bottom-nav-item' ], kind: 'self=bg' },
    { match: [ 'k-taskboard-card', 'k-taskboard-column', 'k-orgchart-node-group-container', 'k-card-horizontal' ], kind: 'border' },
    { match: [ 'k-tilelayout-item', 'k-colorpalette-tile' ], kind: 'inset' },
    { match: [ 'k-step' ], kind: 'inset' }
];

// PROBE_RULES — how to find the painted indicator color.
// kind:
//   'inner-outline-or-shadow' — ring is on an inner element (innerClass);
//                               prefer outline color, fall back to box-shadow.
//   'border'                  — ring is the element's own borderColor.
//   'pseudo'                  — ring is on a pseudo element of the host;
//                               read `prop` from `pseudo`.
//   'background'              — ring is the element's backgroundColor change.
//   'outline-color'           — legacy outline-only fallback (read outlineColor).
//   'stepper'                 — bespoke: probe .k-step-indicator::after, then
//                               .k-step-label outline / box-shadow.
const PROBE_RULES = [
    { match: [ 'k-step' ], kind: 'stepper' },
    { match: [ 'k-timeline-track-item' ], kind: 'inner-outline-or-shadow', innerClass: 'k-timeline-circle' },
    { match: [ 'k-calendar-td', 'k-menu-item' ], kind: 'inner-outline-or-shadow', innerClass: 'k-link' },
    { match: [ 'k-taskboard-card', 'k-taskboard-column', 'k-orgchart-node-group-container', 'k-card-horizontal' ], kind: 'border' },
    { match: [ 'k-button-flat' ], kind: 'pseudo', pseudo: ':after', prop: 'boxShadow' },
    { match: [ 'k-button-clear' ], kind: 'pseudo', pseudo: ':after', prop: 'backgroundColor' },
    { match: [ 'k-time-list-wrapper' ], kind: 'pseudo', pseudo: '::before', prop: 'backgroundColor' },
    { match: [ 'k-splitbar', 'k-bottom-nav-item' ], kind: 'background' },
    { match: [ 'k-colorgradient', 'k-wizard-step', 'k-tabstrip-content' ], kind: 'outline-color' }
];

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------
const hasAny = (classes, list) => list.some(c => classes.indexOf(c) > -1);
const findRule = (classes, rules) => rules.find(r => hasAny(classes, r.match));
const isExcluded = (classes, map) => classes.split(' ').some(c => Object.prototype.hasOwnProperty.call(map, c));
const pseudoStyle = (browser, el, pseudo, prop) => browser.driver.executeScript(
    `return window.getComputedStyle(arguments[0], arguments[1])[arguments[2]];`,
    el, pseudo, prop
);
// Reads outline-* on an element in a single executeScript round-trip.
const readOutline = (browser, el) => browser.driver.executeScript(`
    const s = window.getComputedStyle(arguments[0]);
    return {
        width: s.outlineWidth,
        style: s.outlineStyle,
        color: s.outlineColor,
        offset: parseFloat(s.outlineOffset) || 0,
        boxShadow: s.boxShadow
    };
`, el);
const isPaintedOutline = (o) =>
    o.width !== '0px' && o.style !== 'none' && o.color !== 'rgba(0, 0, 0, 0)';

function arrayChunks( array, chunkCount ) {
    const result = [];
    const chunkSize = Math.ceil(array.length / chunkCount);

    if (chunkCount === 1) {
        return [ array ];
    }

    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }

    return result;
}

const pathUrl = ( path ) => `http://${HOST}:${PORT}/${path.replace('./', '')}?theme=${THEME}&swatch=${SWATCH}&gradientoff=true`;

/* eslint-disable max-params */
const addViolation = async( output, target, filePath, countField, browser ) => {
    let nodes = [];

    await Promise.all(output[0].nodes.map(async( node ) => {
        const html = node.html.toLowerCase();

        // exclude:
        // - disabled elements
        // - elements using warning (yellow) color
        // - k-progress-status element which has its background (and foreground) split between two colors
        // - Spreadsheet formula element (this is a bug)
        if (html.indexOf('disabled') === -1 &&
            html.indexOf('warning') === -1 &&
            html.indexOf('k-progress-status') === -1 &&
            html.indexOf('k-syntax-ref') === -1) {
            if (countField === 'incomplete') {
                const failureSummary = node.failureSummary;

                if (failureSummary.indexOf('obscured') === -1 && failureSummary.indexOf('overlapped') === -1) {
                    if (failureSummary.indexOf('1:1') > -1) {
                        incompleteTypes.one += 1;
                    } else if (failureSummary.indexOf('too short') > -1) {
                        incompleteTypes.short += 1;
                    } else if (failureSummary.indexOf('pseudo') > -1) {
                        incompleteTypes.pseudo += 1;
                    }

                    nodes.push({
                        html: node.html,
                        reason: failureSummary.replace('Fix any of the following:\n', '')
                    });
                }
            } else {
                const targetSelector = node.target[0];

                if (targetSelector !== null) {
                    // Drop axe violations whose target sits inside any of the
                    // ancestor selectors listed in EXCLUSIONS.axeAncestorSelectors
                    // (disabled wrappers, drag hints, warning-color buttons …).
                    const excludedParent = await browser.driver.executeScript(`
                        try {
                            const el = document.querySelector(arguments[0]);
                            if (!el) return null;
                            for (const sel of arguments[1]) {
                                const hit = el.closest(sel);
                                if (hit) return hit;
                            }
                            return null;
                        } catch (e) {
                            return null;
                        }
                    `, targetSelector, EXCLUSIONS.axeAncestorSelectors);

                    if (excludedParent !== null) {
                        return;
                    }
                }

                nodes.push(html);
            }
        }
    }));

    if (nodes.length) {
        target[filePath] = nodes;
        count[countField] += nodes.length;
    }
};

const getLuminance = (rgb) => {
    let a = [ rgb.r, rgb.g, rgb.b ].map((v) => {
        let val = v / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });

    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

const calculateContrast = (a, b) => {
    const luminance1 = getLuminance(a);
    const luminance2 = getLuminance(b);
    const brightest = Math.max(luminance1, luminance2);
    const darkest = Math.min(luminance1, luminance2);
    const fullContrast = (brightest + 0.05) / (darkest + 0.05);

    return Math.round(fullContrast * 100) / 100;
};

const getRGBFromRGBA = (foregroundColor, backgroundColor) => {

    // Blend the foreground color with the background color
    // based on the alpha value of the foreground color

    const r1 = foregroundColor.r;
    const g1 = foregroundColor.g;
    const b1 = foregroundColor.b;
    const a1 = foregroundColor.a;

    const r2 = backgroundColor.r;
    const g2 = backgroundColor.g;
    const b2 = backgroundColor.b;

    return {
        r: Math.round(((1 - a1) * r2) + (a1 * r1)),
        g: Math.round(((1 - a1) * g2) + (a1 * g1)),
        b: Math.round(((1 - a1) * b2) + (a1 * b1))
    };
};

const decomposeColor = ( color ) => {
    if (color.includes("oklch")) {
        // Parse oklch(L C H) or oklch(L C H / A)
        const inner = color.match(/oklch\(([^)]+)\)/)[1];
        const parts = inner.split('/');
        const a = parts[1] !== undefined ? Number(parts[1].trim()) : 1;
        const components = parts[0].trim().split(/\s+/);

        let L = parseFloat(components[0]);
        let C = parseFloat(components[1]);
        let H = parseFloat(components[2]) || 0;

        // Normalize: if L is given as percentage (e.g. "37.17%"), convert to 0-1
        if (components[0].includes('%')) {
            L = L / 100;
        }
        // If H has "deg" suffix, strip it (already parsed by parseFloat)

        // Convert oklch → oklab
        const hRad = H * Math.PI / 180;
        const labA = C * Math.cos(hRad);
        const labB = C * Math.sin(hRad);

        // Convert oklab → linear sRGB
        const l_ = L + 0.3963377774 * labA + 0.2158037573 * labB;
        const m_ = L - 0.1055613458 * labA - 0.0638541728 * labB;
        const s_ = L - 0.0894841775 * labA - 1.2914855480 * labB;

        const l3 = l_ * l_ * l_;
        const m3 = m_ * m_ * m_;
        const s3 = s_ * s_ * s_;

        let rLin = +4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
        let gLin = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
        let bLin = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.7076147010 * s3;

        // Linear sRGB → sRGB (gamma)
        const gammaEncode = (v) => {
            if (v <= 0.0031308) {
                return Math.round(Math.max(0, v * 12.92) * 255);
            }
            return Math.round(Math.min(1, 1.055 * Math.pow(v, 1 / 2.4) - 0.055) * 255);
        };

        return {
            r: Math.max(0, Math.min(255, gammaEncode(rLin))),
            g: Math.max(0, Math.min(255, gammaEncode(gLin))),
            b: Math.max(0, Math.min(255, gammaEncode(bLin))),
            a: a
        };
    }

    if (color.includes("srgb")) {
        const alphaComponent = color.match(/\(([^()]*)\)/)[1].split('/')[1];
        const colorComponents = color.match(/\(([^()]*)\)/)[1].split('/')[0].replace('srgb', '').trim().split(' ');

        const r = Math.round(colorComponents[0] * 255);
        const g = Math.round(colorComponents[1] * 255);
        const b = Math.round(colorComponents[2] * 255);
        const a = Number(alphaComponent || 1);

        return { r: r, g: g, b: b, a: a };
    }

    // Handle color keywords and hex values
    if (color === 'transparent' || color === 'rgba(0, 0, 0, 0)') {
        return { r: 0, g: 0, b: 0, a: 0 };
    }

    // Hex color
    if (color.startsWith('#')) {
        const hex = color.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        const a = hex.length === 8 ? parseInt(hex.substring(6, 8), 16) / 255 : 1;
        return { r, g, b, a };
    }

    // rgb() / rgba() fallback
    const match = color.match(/rgba?\(([^)]+)\)/);
    if (!match) {
        // eslint-disable-next-line no-console
        console.warn(`decomposeColor: unrecognized color format "${color}", treating as transparent`);
        return { r: 0, g: 0, b: 0, a: 0 };
    }

    const colorComponents = match[1].split(', ');
    const r = Number(colorComponents[0]);
    const g = Number(colorComponents[1]);
    const b = Number(colorComponents[2]);
    const a = Number(colorComponents[3] || 1);

    return { r: r, g: g, b: b, a: a };
};

const getContrast = ( col, self, background ) => {
    const colorWithAlfa = getRGBFromRGBA(col, background);
    const selfContrast = calculateContrast(colorWithAlfa, self);
    const backgroundContrast = calculateContrast(colorWithAlfa, background);

    return {
        selfContrast,
        backgroundContrast
    };
};

const selfAndBackground = async(el, parent) => {
    const classes = await el.getAttribute('class');
    const boxShadow = await el.getCssValue('boxShadow');

    let background = await parent.getCssValue('backgroundColor');
    let self = await el.getCssValue('backgroundColor');
    let border = await el.getCssValue('borderColor');
    let borderWidth = await el.getCssValue('borderWidth');
    let outlineOffset = await el.getCssValue('outlineOffset');
    let temp, par, decomposed;

    // If background is fully transparent, get the background of the parent element
    if (background === 'rgba(0, 0, 0, 0)') {
        par = await parent.findElement(By.xpath('..'));
        background = await par.getCssValue('backgroundColor');

        while ((await par.getTagName()).toLowerCase() !== 'body' && background === 'rgba(0, 0, 0, 0)') {
            par = await par.findElement(By.xpath('..'));
            background = await par.getCssValue('backgroundColor');
        }

        if (background === 'rgba(0, 0, 0, 0)') {
            const html = await el.getDriver().findElement(By.css('html'));
            const htmlBackground = await html.getCssValue('backgroundColor');

            if (htmlBackground !== 'rgba(0, 0, 0, 0)') {
                background = htmlBackground;
            } else {
                background = 'rgb(255, 255, 255)';
            }
        }
    }

    // If background is semi-transparent, blend it with the parent background
    // to get the actual solid background color
    if ((background.indexOf('rgba') > -1 && background !== 'rgba(255, 255, 255, 1)') ||
        (background.includes('color(srgb') && background.includes('/')) ||
        (background.includes('oklch') && background.includes('/'))) {
        let parentParent = await (par || parent).findElement(By.xpath('..'));
        let parentBackground = await parentParent.getCssValue('backgroundColor');

        while ((await parentParent.getTagName()).toLowerCase() !== 'body' && parentBackground === 'rgba(0, 0, 0, 0)') {
            parentParent = await parentParent.findElement(By.xpath('..'));
            parentBackground = await parentParent.getCssValue('backgroundColor');
        }

        decomposed = getRGBFromRGBA(decomposeColor(background), decomposeColor(parentBackground));
        background = 'rgb(' + decomposed.r + ', ' + decomposed.g + ', ' + decomposed.b + ')';
    }

    // If element background is semi-transparent, blend it with the background
    // to get the actual solid element background color
    if ((self.indexOf('rgba') > -1 && self !== 'rgba(255, 255, 255, 1)') ||
        (self.includes('color(srgb') && self.includes('/')) ||
        (self.includes('oklch') && self.includes('/'))) {
        decomposed = getRGBFromRGBA(decomposeColor(self), decomposeColor(background));
        self = 'rgb(' + decomposed.r + ', ' + decomposed.g + ', ' + decomposed.b + ')';
    }
    // If element background is fully transparent, use the background color
    // of the parent element instead
    if (self === 'rgba(0, 0, 0, 0)') {
        self = background;
    }

    background = decomposeColor(background);
    self = decomposeColor(self);

    // Calendar / Menu paint the focus indicator on the inner .k-link element.
    // When that inner element uses $type: "outline" with a positive
    // outline-offset, the outline floats *inside* the .k-menu-item /
    // .k-calendar-td, so the adjacent color is the outer element's
    // background — which is `self` here.
    if (classes.indexOf('k-menu-item') > -1 ||
        classes.indexOf('k-calendar-td') > -1) {
        try {
            const inner = await el.findElement(By.className('k-link'));
            const innerOutlineWidth = await inner.getCssValue('outlineWidth');
            const innerOutlineStyle = await inner.getCssValue('outlineStyle');
            const innerOutlineOffset = parseFloat(await inner.getCssValue('outlineOffset')) || 0;
            const innerBoxShadow = await inner.getCssValue('boxShadow');

            if (innerBoxShadow === 'none' &&
                innerOutlineWidth !== '0px' &&
                innerOutlineStyle !== 'none' &&
                innerOutlineOffset > 0) {
                return { self: self, background: self };
            }
        // eslint-disable-next-line no-unused-vars
        } catch (e) {
            // No inner .k-link — fall through.
        }
    }

    // If the indicator is an outline with a non-zero outline-offset,
    // compare against the correct adjacent surface:
    //   offset > 0 (outward) — outline floats outside the element with parent
    //     background visible between it and the border. Compare ring vs parent bg.
    //   offset < 0 (inset) — outline is painted inside the element over its
    //     own background. Compare ring vs element bg.
    const outlineWidth = await el.getCssValue('outlineWidth');
    const outlineStyle = await el.getCssValue('outlineStyle');
    const outlineOffsetPx = parseFloat(outlineOffset) || 0;
    const usesOffsetOutline = outlineWidth !== '0px' &&
        outlineStyle !== 'none' &&
        outlineOffsetPx !== 0;

    if (usesOffsetOutline) {
        if (outlineOffsetPx > 0) {
            // Outward offset: adjacent surface is the parent background.
            return { self: background, background: background };
        }
        // Inset offset: outline sits over the element's own background.
        return { self: self, background: self };
    }

    // Component-specific surface override — see SURFACE_RULES at the top.
    const surfaceRule = findRule(classes, SURFACE_RULES);
    if (surfaceRule) {
        switch (surfaceRule.kind) {
            case 'self=bg':
                // Ring is the element's own backgroundColor change; only the
                // surrounding bg is the adjacent surface.
                return { self: background, background: background };
            case 'border':
                // Ring is the border-color change; the element's own bg
                // becomes the adjacent surface (outside == bg-of-parent,
                // inside == element bg).
                return { background: self, self: background };
            case 'inset':
                // Ring is painted inset over the element's own background
                // (decorative border ignored). Compare against element bg.
                return { self: self, background: self };
            // no default
        }
    }

    // If there is border which is not transparent, use it for contrast calculation
    if (borderWidth !== '0px' && border !== 'rgba(0, 0, 0, 0)') {

        // Handle the case where the border contains multiple colors
        // and remove the transparent color
        if (border.split('rgb').length > 2) {
            border = border.replace('rgba(0, 0, 0, 0)', '').trim();
            border = 'rgb' + border.split('rgb')[1].trim();
        }

        // If there is an inset box-shadow
        // use the background color of the element for contrast calculation
        if (boxShadow.indexOf('inset') > -1) {
            background = self;
        }

        // Use the border color for contrast calculation
        self = getRGBFromRGBA(decomposeColor(border), self);
    } else if (boxShadow.indexOf('inset') > -1) {
        // If there is an inset box-shadow, use the background color of the element
        temp = background;
        background = self;

        // If the outline offset is 0 and the box-shadow is inset,
        // use the background color of the parent for contrast calculation
        if (outlineOffset === '0px') {
            self = temp;
        }
    }

    return {
        self,
        background
    };
};

const getIndicatorColor = async(el, browser) => {
    const classes = await el.getAttribute('class');
    let value = await el.getCssValue('boxShadow');

    if (classes.indexOf('k-disabled') > -1 ||
        classes.indexOf('k-breadcrumb') > -1) {
        // Disabled elements are not required to meet focus contrast requirements
        // Breadcrumb wrapper itself should not be focusable
        return null;
    }

    // Exclude known focus contrast bugs
    if (isExcluded(classes, EXCLUSIONS.focusElementClasses)) {
        return null;
    }
    // Exclude known bug in k-card with k-selected
    if (classes.split(' ').indexOf('k-card') > -1 && classes.indexOf('k-selected') > -1) {
        return null;
    }

    // Modern focus-indicator() mixin with $type: "outline" produces an
    // outline with a non-zero outline-offset (positive = outward,
    // negative = inset). When present, the outline is the visible focus
    // ring even if a faint decorative box-shadow (elevation, themed
    // accent) is also painted. Prefer the outline color in that case.
    {
        const outlineWidth = await el.getCssValue('outlineWidth');
        const outlineStyle = await el.getCssValue('outlineStyle');
        const outlineColor = await el.getCssValue('outlineColor');
        const outlineOffsetPx = parseFloat(await el.getCssValue('outlineOffset')) || 0;

        if (outlineWidth !== '0px' &&
            outlineStyle !== 'none' &&
            outlineColor !== 'rgba(0, 0, 0, 0)' &&
            outlineOffsetPx !== 0) {
            return decomposeColor(outlineColor);
        }
    }

    // Components whose focus indicator is the border-color change.
    // The decorative box-shadow (elevation) is not the visible ring,
    // so check borderColor regardless of `value`.
    const borderProbe = findRule(classes, PROBE_RULES);
    if (borderProbe && borderProbe.kind === 'border') {
        return decomposeColor(await el.getCssValue('borderColor'));
    }

    if (value === 'none') {
        // Modern focus-indicator() mixin with $type: "outline" produces an
        // outline (no box-shadow). Prefer it whenever painted — applies to
        // BottomNav, Calendar, Menu, ColorGradient, WizardStep, TabStrip
        // content, and any other component migrated to outline-based focus.
        {
            const o = await readOutline(browser, el);
            if (isPaintedOutline(o)) {
                return decomposeColor(o.color);
            }
        }

        const probe = findRule(classes, PROBE_RULES);
        if (!probe) {
            // .k-ripple-container .k-radio.k-focus / .k-checkbox.k-focus —
            // case could not be determined.
            return null;
        }

        switch (probe.kind) {
            case 'inner-outline-or-shadow': {
                // Calendar/Menu (.k-link), Timeline (.k-timeline-circle): the
                // ring is on an inner element. Modern themes use outline,
                // legacy themes used box-shadow. Check both.
                const inner = await el.findElement(By.className(probe.innerClass));
                const o = await readOutline(browser, inner);
                if (isPaintedOutline(o)) {
                    return decomposeColor(o.color);
                }
                value = o.boxShadow;
                break;
            }
            case 'pseudo':
                // Pseudo-element ring (e.g. k-button-flat:after boxShadow,
                // k-button-clear:after backgroundColor, k-time-list-wrapper::before).
                value = await pseudoStyle(browser, el, probe.pseudo, probe.prop);
                break;
            case 'background':
                // .k-splitbar / legacy .k-bottom-nav-item — bg change is the ring.
                value = await el.getCssValue('backgroundColor');
                break;
            case 'outline-color':
                // Legacy outline-only fallback for ColorGradient / WizardStep /
                // TabStrip content (the readOutline check above usually wins).
                value = await el.getCssValue('outlineColor');
                break;
            case 'border':
                // Border-as-ring case when boxShadow happens to be 'none'.
                value = await el.getCssValue('borderColor');
                break;
            case 'stepper':
                // Stepper paints on .k-step-indicator::after (border-color)
                // when an indicator dot is rendered, or on .k-step-label
                // (outline-modern / box-shadow-legacy) when the label is
                // the only child. Probe both in one round-trip.
                value = await browser.driver.executeScript(`
                    const indicator = arguments[0].querySelector('.k-step-indicator');
                    if (indicator) {
                        const after = window.getComputedStyle(indicator, '::after');
                        if (after.borderColor && after.borderColor !== 'rgba(0, 0, 0, 0)') {
                            return after.borderColor;
                        }
                    }
                    const label = arguments[0].querySelector('.k-step-label');
                    if (label) {
                        const styles = window.getComputedStyle(label);
                        if (styles.outlineWidth !== '0px' &&
                            styles.outlineStyle !== 'none' &&
                            styles.outlineColor !== 'rgba(0, 0, 0, 0)') {
                            return styles.outlineColor;
                        }
                        return styles.boxShadow;
                    }
                    return 'none';
                `, el);
                break;
            default:
                return null;
        }
    }

    // When a multi-layer box-shadow contains an `inset` ring (e.g.
    // elevation drop shadow + inset focus ring), the visible focus
    // indicator is the inset ring. Extract its color.
    if (typeof value === 'string' && value.includes('inset')) {
        const insetSegments = value.split(/,(?![^()]*\))/)
            .map(s => s.trim())
            .filter(s => s.includes('inset'));

        if (insetSegments.length > 0) {
            const colorMatch = insetSegments[0].match(
                /rgba?\([^)]+\)|#[0-9a-fA-F]{3,8}|oklch\([^)]+\)|color\(srgb[^)]+\)/
            );

            if (colorMatch) {
                value = colorMatch[0];
            }
        }
    }

    return decomposeColor(value);
};

const iterateFocusedElement = async(el, parent, browser) => {
    const value = await getIndicatorColor(el, browser);
    const sb = await selfAndBackground(el, parent);

    if (!value) {
        return null;
    }

    return getContrast(value, sb.self, sb.background);
};

const getFocusReport = async(el, browser) => {
    const parent = await el.findElement(By.xpath('..'));
    const elContrast = await iterateFocusedElement(el, parent, browser);
    let elReport = {};
    let key;

    // Check for self and background contrast of the focused element
    // where the contrast ratio should be at least 3:1
    if (!elContrast ||
        elContrast.selfContrast >= 3 && elContrast.backgroundContrast >= 3) {
        return null;
    } else if (elContrast.selfContrast >= 3) {
        delete elContrast.selfContrast;
    } else if (elContrast.backgroundContrast >= 3) {
        delete elContrast.backgroundContrast;
    }

    count.focus += 1;

    key = (await el.getAttribute('outerHTML')).replace(/\n\s+/g,'');
    elReport[key] = elContrast;

    return elReport;
};

const getContrastViolations = async() => {
    // eslint-disable-next-line no-console
    console.log(`Running contrast checks for theme="${THEME}" swatch="${SWATCH}"`);

    const files = globSync(`${TESTS_PATH}/**/*${COMPONENT_PAGE_EXT}`, { dotRelative: true });

    const pageSkipSubstrings = Object.keys(EXCLUSIONS.pageSubstrings);
    const pages = files
        .filter(path => !pageSkipSubstrings.some(sub => path.indexOf(sub) > -1))
        .map(path => [ path, pathUrl(path) ]);

    let violations = {};
    let incomplete = {};
    let aaa = {};
    let focusContrast = {};
    let result;

    const browser = new Browser();
    const server = createServer({
        root: './',
        port: PORT
    });
    server.listen(PORT, HOST);

    const chunks = arrayChunks( pages, ENV_MAX_CHUNKS );
    const chunk = chunks[ENV_CURRENT_CHUNK];

    for (let i = 0; i < chunk.length; i++) {
        const [ filePath, url ] = chunk[i];

        try {
            await browser.navigateTo(url);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error(`Failed to navigate to ${url}:`, err);
            continue;
        }

        // eslint-disable-next-line no-console
        console.log(`Analyzing ${filePath}...`);

        if (!Object.prototype.hasOwnProperty.call(EXCLUSIONS.textPages, filePath)) {

            // Axe-core checks for contrast ratio for all elements
            const axe = new AxeBuilder(browser.driver);
            // WCAG 2.1 Level A and AA requirements
            axe.withRules([ 'color-contrast' ]);
            const output = await axe.analyze();
            // WCAG 2.1 Level AAA requirements
            axe.withRules([ 'color-contrast-enhanced' ]);
            const enhanced = await axe.analyze();

            if (output.violations.length) {
                await addViolation(output.violations, violations, filePath, 'violations', browser);
            }

            if (output.incomplete.length) {
                await addViolation(output.incomplete, incomplete, filePath, 'incomplete', browser);
            }

            if (enhanced.violations.length) {
                await addViolation(enhanced.violations, aaa, filePath, 'aaa', browser);
            }
        }

        // Custom logic for checking focused elements
        // since axe-core does not test for focus indicator contrast
        if (Object.prototype.hasOwnProperty.call(EXCLUSIONS.focusPages, filePath)) {
            continue;
        }
        const focusedElements = await browser.driver.findElements(By.className('k-focus'));

        for (let el of focusedElements) {
            const focusReport = await getFocusReport(el, browser);

            if (!focusReport) {
                continue;
            }

            if (!focusContrast[filePath]) {
                focusContrast[filePath] = [];
            }

            focusContrast[filePath].push(focusReport);
        }
    }

    await browser.close();
    server.close();

    result = {
        violations,
        incomplete,
        aaa,
        focusContrast
    };

    printViolations(result);

    return result;
};

const printViolations = (result) => {
    // Build status:
    // - WCAG 2.1 AA text contrast violations (axe `color-contrast`) → fail the run.
    // - Custom focus-indicator 3:1 contrast violations (WCAG 1.4.11) → fail the run.
    // - WCAG 2.1 AAA text contrast violations (axe `color-contrast-enhanced`) and
    //   axe `incomplete` results are advisory and do not fail the run.
    const violations = result.violations;
    const aaa = result.aaa;
    let violatedComponents = [];
    let aaViolatedComponents = [];

    Object.keys(violations).forEach((key) => {
        const component = key.split('/')[2];

        if (!violatedComponents.includes(component)) {
            violatedComponents.push(component);
        }
    });

    Object.keys(aaa).forEach((key) => {
        const component = key.split('/')[2];

        if (!aaViolatedComponents.includes(component)) {
            aaViolatedComponents.push(component);
        }
    });

    // console.log(violatedComponents.sort());
    // console.log(aaViolatedComponents.sort());
    // console.log(incomplete);
    // console.log(incompleteTypes);
    /* eslint-disable no-console */
    console.log(count);

    if (count.violations > 0 || count.focus > 0) {
        /* eslint-disable no-console */

        console.error('A11y contrast checks fail.');

        if(count.focus > 0) {
            console.log("Focus contrast WCAG violations:");
            console.dir(result.focusContrast, { depth: 3 });
        }

        if(count.violations > 0) {
            console.log("Text contrast WCAG AA errors:");
            console.dir(result.violations, { depth: 5 });
        }

        process.exit(1);
    }
};

export { getContrastViolations };

getContrastViolations();
