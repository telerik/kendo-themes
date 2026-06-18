/**
 * Single source of truth for devkit theme state.
 *
 * Both the pre-React bootstrap (`main.tsx`) and the React context (`context.tsx`)
 * read and apply theme params through here so the swatch-alias rule, the dist CSS
 * path, the animations class and the adaptive accent all live in exactly one place.
 */

export interface DevKitParams {
    theme: string;
    swatch: string;
    animations: boolean;
}

const DEFAULTS: DevKitParams = {
    theme: 'meridian',
    swatch: 'all',
    animations: false,
};

const THEME_LINK = 'link[data-role="kendo-theme"]';

/** Custom window events the UI uses to track on-demand compilation. */
export const THEME_EVENTS = {
    loading: 'devkit:theme-loading',
    loaded: 'devkit:theme-loaded',
    error: 'devkit:css-error',
} as const;

/** The active Kendo theme `<link>` (single home for the selector). */
export function getThemeLink(): HTMLLinkElement | null {
    return document.querySelector<HTMLLinkElement>(THEME_LINK);
}

/** Reads the current params from the URL query string. */
export function readParams(): DevKitParams {
    const p = new URLSearchParams(location.search);
    return {
        theme: p.get('theme') || DEFAULTS.theme,
        swatch: p.get('swatch') || DEFAULTS.swatch,
        animations: p.get('animations') === 'true',
    };
}

/** Resolves the on-disk swatch name, applying the `${theme}-${swatch}` alias rule. */
function resolveSwatch(theme: string, swatch: string): string {
    if (swatch !== 'all' && !swatch.startsWith(theme)) return `${theme}-${swatch}`;
    return swatch;
}

/** The one place that builds a theme's compiled CSS path. */
function themeHref(theme: string, swatch: string): string {
    return `/packages/${theme}/dist/${resolveSwatch(theme, swatch)}.css`;
}

/** Builds the `?theme=&swatch=` query string used by demo/listing links. */
export function themeQuery(theme: string, swatch: string): string {
    return `?theme=${encodeURIComponent(theme)}&swatch=${encodeURIComponent(swatch)}`;
}

/**
 * Mirrors the devkit accent (`--dk-accent`) to the active Kendo theme's primary
 * color so the whole UI subtly tints to whatever is being previewed. Removing the
 * property (when a theme doesn't expose one) lets the CSS fallback take over.
 */
export function syncAccent(): void {
    const primary = getComputedStyle(document.documentElement)
        .getPropertyValue('--kendo-color-primary')
        .trim();
    if (primary) {
        document.documentElement.style.setProperty('--dk-accent', primary);
    } else {
        document.documentElement.style.removeProperty('--dk-accent');
    }
}

/**
 * Swaps the theme stylesheet, re-syncing the accent once the new CSS is parsed.
 * Emits `devkit:theme-loading` / `devkit:theme-loaded` on `window` so the UI can
 * show progress while the server compiles the theme on demand (first request can
 * take a second or two; a swatch's first build longer).
 */
function swapThemeLink(theme: string, swatch: string): void {
    const link = getThemeLink();
    if (!link) return;

    const href = themeHref(theme, swatch);
    const current = new URL(link.href, location.origin).pathname;
    if (current === href) {
        syncAccent();
        return;
    }

    window.dispatchEvent(new CustomEvent(THEME_EVENTS.loading, { detail: { theme, swatch } }));
    const done = () => {
        syncAccent();
        window.dispatchEvent(new CustomEvent(THEME_EVENTS.loaded, { detail: { theme, swatch } }));
    };
    link.addEventListener('load', done, { once: true });
    link.addEventListener('error', done, { once: true });
    link.href = href;
}

/**
 * Cache-busts the active theme stylesheet when the server recompiles it (live
 * SCSS), re-syncing the accent once reloaded. No-op if the link isn't `theme`.
 */
export function refreshThemeLink(theme: string): void {
    const link = getThemeLink();
    if (!link?.href.includes(`/packages/${theme}/`)) return;
    const url = new URL(link.href);
    url.searchParams.set('t', String(Date.now()));
    link.addEventListener('load', syncAccent, { once: true });
    link.href = url.toString();
}

/** Applies params to the DOM: URL, theme stylesheet, animations class, accent. */
export function applyParams(params: DevKitParams): void {
    const url = new URL(location.href);
    url.searchParams.set('theme', params.theme);
    url.searchParams.set('swatch', params.swatch);
    url.searchParams.set('animations', String(params.animations));
    history.replaceState({}, '', url.toString());

    swapThemeLink(params.theme, params.swatch);

    document.documentElement.classList.toggle('k-no-animations', !params.animations);
}
