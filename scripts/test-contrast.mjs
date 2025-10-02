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
const THEME = "default";
const SWATCH = "default-ocean-blue-a11y";

// Below are elements with failing focus indicator contrast ratio requirement
const EXCLUDED_ELEMENTS_FOCUS = [
    'k-time-list-wrapper',
    'k-chip-outline',
    'k-colorpalette-tile',
    'k-bottom-nav-item',
    'k-button-outline',
    'k-button-warning',
    'k-fab-warning',
    'k-step-last',
    'k-quick-reply'
];

// Below are elements with failing text contrast ratio requirement
const EXCLUDED_PAGES_TEXT = [
    // BottomNavigation does not cover contrast requirements for the text of its items
    `${TESTS_PATH}/bottom-nav/bottom-nav-solid.html`,
    // BottomNavigation does not cover contrast requirements for the text of its items
    `${TESTS_PATH}/bottom-nav/bottom-nav-flat.html`,
    // Colored chips do not cover minimum contrast requirements for text
    `${TESTS_PATH}/chip/chip-solid.html`,
    // ButtonGroup test page contains customizations that break contrast
    `${TESTS_PATH}/button-group/button-group.html`,
    // TreeMap colors do not ensure contrast
    `${TESTS_PATH}/treemap/treemap.html`,
    // Loader with no panel does not cover contras requirements for its text
    `${TESTS_PATH}/loader/loader-container-overlay.html`,
    // Editor iframe test page is not actionable
    `${TESTS_PATH}/editor/editor-iFrameContent.html`,
    // Scheduler adaptive month event template text is not visible
    `${TESTS_PATH}/scheduler/scheduler-adaptive-month.html`
];

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
                    const excludedParent = await browser.driver.executeScript(`
                        let result = null;

                        try {
                            // exclude all disabled parents scenarios
                            result = document.querySelector(arguments[0]).closest('.k-disabled');

                            if (result === null) {
                                // exclude Scheduler events drag hint
                                result = document.querySelector(arguments[0]).closest('.k-event-drag-hint');
                            }

                            if (result === null) {
                                // exclude warning buttons
                                result = document.querySelector(arguments[0]).closest('.k-button-clear.k-button-warning');
                            }

                            if (result === null) {
                                // exclude warning link buttons
                                result = document.querySelector(arguments[0]).closest('.k-button-link.k-button-warning');
                            }

                            if (result === null) {
                                // exclude warning outline buttons
                                result = document.querySelector(arguments[0]).closest('.k-button-outline.k-button-warning');
                            }

                            if (result === null) {
                                // exclude warning flat buttons
                                result = document.querySelector(arguments[0]).closest('.k-button-flat.k-button-warning');
                            }

                            if (result === null) {
                                // exclude warning outline avatar
                                result = document.querySelector(arguments[0]).closest('.k-avatar-outline-warning');
                            }

                            return result;
                        } catch (e) {
                            return null;
                        }
                    `, targetSelector);

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

    return Math.floor(fullContrast * 100) / 100;
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
    if (color.includes("srgb")) {
        const alphaComponent = color.match(/\(([^()]*)\)/)[1].split('/')[1];
        const colorComponents = color.match(/\(([^()]*)\)/)[1].split('/')[0].replace('srgb', '').trim().split(' ');

        const r = Math.round(colorComponents[0] * 255);
        const g = Math.round(colorComponents[1] * 255);
        const b = Math.round(colorComponents[2] * 255);
        const a = Number(alphaComponent || 1);

        return { r: r, g: g, b: b, a: a };
    }

    const colorComponents = color.split(')')[0].split('(')[1].split(', ');
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

        if ((await par.getTagName()).toLowerCase() === 'body' || background === 'rgba(0, 0, 0, 0)') {
            background = 'rgb(255, 255, 255)';
        }
    }

    // If background is semi-transparent, blend it with the parent background
    // to get the actual solid background color
    if ((background.indexOf('rgba') > -1 && background !== 'rgba(255, 255, 255, 1)') ||
        (background.includes('color(srgb') && background.includes('/'))) {
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
        (self.includes('color(srgb') && self.includes('/'))) {
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

    if (classes.indexOf('k-button-clear') > -1 ||
        classes.indexOf('k-time-list-wrapper') > -1 ||
        classes.indexOf('k-splitbar') > -1 ||
        classes.indexOf('k-bottom-nav-item') > -1) {
        // element background is used for focus indicator
        // hence contrast must be calculated against its background only
        return { self: background, background: background };
    } else if (classes.indexOf('k-taskboard-card') > -1 ||
        classes.indexOf('k-taskboard-column') > -1) {
        // element border is used for focus indicator
        return { background: self, self: background };
    } else if (classes.indexOf('k-step') > -1) {
        // pseudo element with border equal to element background is used for indicator
        // hence element background color should be used for calculation
        return { self: self, background: self };
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
    if (classes.split(' ').some(c => EXCLUDED_ELEMENTS_FOCUS.indexOf(c) > -1)) {
        return null;
    }
    // Exclude known bug in k-card with k-selected
    if (classes.split(' ').indexOf('k-card') > -1 && classes.indexOf('k-selected') > -1) {
        return null;
    }

    if (value === 'none') {
        if (classes.indexOf('k-floating-label-container') > -1 ||
            classes.indexOf('k-card-title') > -1) {
            // .k-floating-label-container.k-focus should be disregarded
            // .k-card-title.k-focus should be disregarded
            return null;
        } else if (classes.indexOf('k-calendar-td') > -1 ||
            classes.indexOf('k-menu-item') > -1) {
            // Calendar .k-focus.k-calendar-td > .k-link - boxShadow must be checked
            // Menu .k-focus.k-menu-item > .k-link - boxShadow must be checked
            value = await el.findElement(By.className('k-link')).getCssValue('boxShadow');
        } else if (classes.indexOf('k-colorgradient') > -1 ||
            classes.indexOf('k-wizard-step') > -1 ||
            classes.indexOf('k-tabstrip-content') > -1) {
            // .k-colorgradient.k-focus - outline must be checked
            // .k-wizard-step.k-focus - outline must be checked
            // .k-tabstrip-content.k-focus - outline must be checked
            value = await el.getCssValue('outlineColor');
        } else if (classes.indexOf('k-time-list-wrapper') > -1 ||
            classes.indexOf('k-splitbar') > -1 ||
            classes.indexOf('k-bottom-nav-item') > -1) {
            // .k-time-list-wrapper.k-focus -  background must be checked
            // .k-splitbar.k-focus - background must be checked
            // .k-bottom-nav-item.k-focus - background must be checked
            value = await el.getCssValue('backgroundColor');
        } else if (classes.indexOf('k-button-flat') > -1) {
            // k-button-flat.k-focus:after - boxShadow must be checked
            value = await browser.driver.executeScript(`
                let styles = window.getComputedStyle(arguments[0],":after");
                return styles["boxShadow"];
            `, el);
        } else if (classes.indexOf('k-button-clear') > -1) {
            // .k-button-clear.k-focus:after - background must be checked
            value = await browser.driver.executeScript(`
                let styles = window.getComputedStyle(arguments[0],":after");
                return styles["backgroundColor"];
            `, el);
        } else if (classes.indexOf('k-taskboard-card') > -1 ||
            classes.indexOf('k-taskboard-column') > -1) {
            // .k-taskboard-card.k-focus - border must be checked
            // .k-taskboard-column.k-focus - border must be checked
            value = await el.getCssValue('borderColor');
        } else if (classes.indexOf('k-step') > -1) {
            // Stepper .k-focus.k-step .k-step-indicator:after - border must be checked, or
            // Stepper .k-focus.k-step .k-step-label - box shadow must be checked
            value = await browser.driver.executeScript(`
                let element = arguments[0].querySelector('.k-step-indicator');

                if (element) {
                    let styles = window.getComputedStyle(element,':after')
                    return styles['borderColor'];
                } else {
                    let element = arguments[0].querySelector('.k-step-label');
                    let styles = window.getComputedStyle(element)
                    return styles['boxShadow'];
                }
            `, el);
        } else if (classes.indexOf('k-timeline-track-item') > -1) {
            // .k-timeline-track-item.k-focus k-timeline-circle - boxShadow
            value = await el.findElement(By.className('k-timeline-circle')).getCssValue('boxShadow');
        } else if (classes.indexOf('k-rating') > -1 ||
            classes.indexOf('k-rating-item') > -1) {
            // .k-rating-item.k-focus and .k-rating.k-focus - indicator could not be determined
            return null;
        } else {
            // .k-ripple-container .k-radio.k-focus - the case could not be determined
            // .k-ripple-container .k-checkbox.k-focus - the case could not be determined

            //console.log(filePath);
            //console.log('NA: ' + (await el.getAttribute('outerHTML')).replace(/\s/g,'').replace(/\n/g,''));
            return null;
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
    const files = globSync(`${TESTS_PATH}/**/*${COMPONENT_PAGE_EXT}`, { dotRelative: true });

    const pages = files.filter( path => (
        // Skipped components:
        // MediaPlayer is not WCAG compliant
        // Barcode represents an image of black lines on white (transparent) background
        // CircularProgressBar has a black text label element overlapping an svg with white background
        path.indexOf('mediaplayer') === -1
        || path.indexOf('barcode') === -1
        || path.indexOf('circular-progressbar') === -1
    )).map(path => [ path, pathUrl(path) ]);

    let violations = {};
    let incomplete = {};
    let aaa = {};
    let focusContrast = {};
    let result = {};

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

        if (EXCLUDED_PAGES_TEXT.indexOf(filePath) === -1) {

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
