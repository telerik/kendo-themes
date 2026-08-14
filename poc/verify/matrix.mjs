/* Shared variant matrix + HTML page generator used to compare the Sass build
 * against the CSS POC. Rendered under headless Chrome; the page computes
 * styles itself and dumps them into the DOM for --dump-dom to capture. */

export const FILL_MODES = [null, "solid", "flat", "outline", "clear", "link"];
export const THEME_COLORS = [
    null, "base", "primary", "secondary", "tertiary",
    "success", "warning", "error", "info", "inverse"
];
export const STATES = [null, "k-hover", "k-focus", "k-active", "k-selected", "k-disabled"];
export const SIZES = [null, "xs", "sm", "md", "lg"];
export const ROUNDINGS = [null, "none", "sm", "md", "lg", "full"];

export const PROPS = [
    "color", "background-color",
    "border-top-color", "border-right-color", "border-bottom-color", "border-left-color",
    "border-top-width", "border-top-style",
    "border-top-left-radius", "border-bottom-right-radius",
    "box-shadow", "outline-color", "outline-width", "outline-style", "outline-offset",
    "padding-top", "padding-right", "padding-bottom", "padding-left",
    "font-size", "font-weight", "line-height", "font-family",
    "gap", "opacity", "cursor", "text-decoration-line",
    "display", "align-items", "justify-content", "vertical-align",
    "min-width", "min-height", "box-sizing", "white-space", "text-align",
    "position", "user-select", "pointer-events"
];

function buttonCases() {
    const cases = [];
    for (const fill of FILL_MODES) {
        for (const color of THEME_COLORS) {
            for (const state of STATES) {
                const cls = ["k-button", "k-button-md", "k-rounded-md"];
                if (fill) { cls.push(`k-button-${fill}`); }
                if (color) { cls.push(`k-button-${color}`); }
                if (state) { cls.push(state); }
                cases.push({
                    id: `button|fill=${fill}|color=${color}|state=${state}`,
                    tag: "button",
                    cls: cls.join(" "),
                    html: "Button"
                });
            }
        }
    }
    for (const size of SIZES) {
        for (const rounded of ROUNDINGS) {
            const cls = ["k-button", "k-button-solid", "k-button-base"];
            if (size) { cls.push(`k-button-${size}`); }
            if (rounded) { cls.push(`k-rounded-${rounded}`); }
            cases.push({
                id: `button|size=${size}|rounded=${rounded}`,
                tag: "button",
                cls: cls.join(" "),
                html: "Button"
            });
        }
    }
    return cases;
}

function textboxCases() {
    const cases = [];
    const fills = [null, "solid", "flat", "outline"];
    const states = [null, "k-hover", "k-focus", "k-invalid", "k-disabled", "k-readonly"];
    for (const fill of fills) {
        for (const state of states) {
            for (const size of SIZES) {
                const cls = ["k-textbox", "k-input", "k-rounded-md"];
                if (fill) { cls.push(`k-input-${fill}`); }
                if (size) { cls.push(`k-input-${size}`); }
                if (state) { cls.push(state); }
                cases.push({
                    id: `textbox|fill=${fill}|state=${state}|size=${size}`,
                    tag: "span",
                    cls: cls.join(" "),
                    html: '<input class="k-input-inner" value="Value" />',
                    probe: ".k-input-inner"
                });
            }
        }
    }
    return cases;
}

export const CASES = [...buttonCases(), ...textboxCases()];

export function buildPage(cssHrefs) {
    const links = cssHrefs
        .map((href) => `<link rel="stylesheet" href="${href}">`)
        .join("\n");
    const markup = CASES
        .map(
            (c, i) =>
                `<${c.tag} class="${c.cls}" data-i="${i}">${c.html}</${c.tag}>`
        )
        .join("\n");

    return `<!doctype html>
<html><head><meta charset="utf-8">
${links}
</head>
<body>
<div id="host">
${markup}
</div>
<pre id="out"></pre>
<script>
const PROPS = ${JSON.stringify(PROPS)};
const CASES = ${JSON.stringify(CASES.map((c) => ({ id: c.id, probe: c.probe || null })))};
// Canonicalise colour values. The Sass build emits pre-rounded literals while
// the POC keeps full-precision relative-colour expressions, so raw computed
// strings differ by float noise for colours that are in fact identical.
// Round-tripping through canvas fillStyle collapses both to 8-bit sRGB.
const cvs = document.createElement("canvas");
cvs.width = 1; cvs.height = 1;
const ctx = cvs.getContext("2d", { willReadFrequently: true });
const colorCache = new Map();
function px(c) {
    if (colorCache.has(c)) return colorCache.get(c);
    let out = c;
    try {
        // Two sentinels: if the value is not parseable by the canvas the
        // fillStyle assignment is ignored and the two reads disagree, so we
        // fall back to the raw string rather than silently reporting black.
        const read = (seed) => {
            ctx.fillStyle = seed;
            ctx.fillStyle = c;
            ctx.clearRect(0, 0, 1, 1);
            ctx.fillRect(0, 0, 1, 1);
            const d = ctx.getImageData(0, 0, 1, 1).data;
            return d[0] + "," + d[1] + "," + d[2] + "," + d[3];
        };
        const a = read("#000000");
        const b = read("#ffffff");
        if (a === b) out = "rgba(" + a + ")";
    } catch (e) { /* keep original */ }
    colorCache.set(c, out);
    return out;
}
const COLOR_RE = new RegExp(
    "(?:rgba?|oklch|oklab|lab|lch|hsla?|color-mix|color)" +
    "[(](?:[^()]|[(][^()]*[)])*[)]" +
    "|[#][0-9a-fA-F]{3,8}",
    "g"
);
function canon(v) {
    if (!v) return v;
    return v.replace(COLOR_RE, px);
}

const result = {};
document.querySelectorAll("#host [data-i]").forEach((el) => {
    const i = Number(el.dataset.i);
    const meta = CASES[i];
    const target = meta.probe ? el.querySelector(meta.probe) : el;
    const cs = getComputedStyle(target);
    const rec = {};
    for (const p of PROPS) { rec[p] = canon(cs.getPropertyValue(p).trim()); }
    result[meta.id] = rec;
});
document.getElementById("out").textContent =
    "@@BEGIN@@" + JSON.stringify(result) + "@@END@@";
</script>
</body></html>`;
}
