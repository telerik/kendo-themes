/// <reference types="vite/client" />
import { applyParams, getThemeLink, readParams, refreshThemeLink, syncAccent, THEME_EVENTS } from './theme';

/** Legacy gradient-off escape hatch, mirrored from assets/scripts.js. */
function applyGradientOff(): void {
    if (new URLSearchParams(location.search).get('gradientoff') !== 'true') return;
    const style = document.createElement('style');
    style.textContent =
        '.k-picker, .k-button, .k-spreadsheet-insert-image-dialog label, ' +
        '.k-scheduler-agendaview .k-scheduler-content tr.k-hover { background-image: none; }';
    document.head.appendChild(style);
}

function measureScrollbarWidth(): string {
    const div = document.createElement('div');
    div.style.cssText = 'overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block';
    div.innerHTML = '&nbsp;';
    document.body.appendChild(div);
    const width = `${div.offsetWidth - div.scrollWidth}px`;
    document.body.removeChild(div);
    return width;
}

/** Mirror Kendo chart color CSS vars onto SVG `fill` so charts render correctly. */
function applyKendoChartColors(): void {
    const link = getThemeLink();
    if (!link?.sheet) return;
    [...link.sheet.cssRules]
        .filter(r => (r as CSSStyleRule).selectorText?.startsWith('.k-var'))
        .filter(r => Boolean((r as CSSStyleRule).style.backgroundColor))
        .forEach(r => {
            (r as CSSStyleRule).style.fill = (r as CSSStyleRule).style.backgroundColor;
        });
}

/** Pre-React setup: apply theme params (no flash) and finish on window load. */
export function runBootstrap(): void {
    applyParams(readParams());
    applyGradientOff();

    window.addEventListener('load', () => {
        document.documentElement.style.setProperty('--kendo-scrollbar-width', measureScrollbarWidth());
        applyKendoChartColors();
        syncAccent();
    });
}

/** Wires dev-server HMR events: live-SCSS hot-swap and on-demand build errors. */
export function setupHmr(): void {
    if (!import.meta.hot) return;

    // Live SCSS: refetch the active theme stylesheet without a full reload.
    import.meta.hot.on('kendo:css-update', ({ theme }: { theme: string }) => refreshThemeLink(theme));

    // Surface on-demand compile failures as an in-app toast (terminal logs details).
    import.meta.hot.on('kendo:css-error', (detail: { pkg: string; name: string; message: string }) => {
        window.dispatchEvent(new CustomEvent(THEME_EVENTS.error, { detail }));
    });
}
