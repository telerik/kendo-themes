/// <reference types="vite/client" />
import React from 'react';
import ReactDOM from 'react-dom/client';
import { readParams, themeQuery } from './lib/theme';
import { runBootstrap, setupHmr } from './lib/bootstrap';

// Apply theme params before React mounts so there's no flash of the wrong theme.
runBootstrap();

function render(node: React.ReactElement): void {
    ReactDOM.createRoot(document.getElementById('app')!).render(node);
}

async function init(): Promise<void> {
    // Match /{component}/{test} — the devkit URL scheme.
    const match = location.pathname.match(/^\/([^/]+)\/([^/]+)\/?$/);

    if (!match) {
        const { LandingPage } = await import('./ui/LandingPage');
        render(<LandingPage />);
        return;
    }

    const [, component, test] = match;
    const kind = new URLSearchParams(location.search).get('kind') === 'template' ? 'template' : 'test';
    const { DevBar } = await import('./ui/DevBar');
    const { DevKitProvider } = await import('./context');
    const { ErrorBoundary, ErrorCard } = await import('./ui/ErrorBoundary');

    const { theme, swatch } = readParams();
    const backHref = `/${themeQuery(theme, swatch)}`;

    try {
        // @vite-ignore: intentional dynamic import resolved at request time.
        const mod = await import(
            /* @vite-ignore */ `/packages/html/src/${component}/${kind === 'template' ? 'templates' : 'tests'}/${test}.tsx`
        );
        const tokens = test.toLowerCase().split('-');
        const exported = Object.entries(mod).filter(
            ([name, value]) => name !== 'default' && typeof value === 'function'
        ) as [string, React.ComponentType][];
        const score = (name: string) => tokens.filter(token => name.toLowerCase().includes(token)).length;
        const templateComponent = [...exported]
            .sort((a, b) => score(b[0]) - score(a[0]) || b[0].length - a[0].length)[0]?.[1]
            ?? (mod.default as React.ComponentType | undefined);
        const App = (kind === 'template' ? templateComponent : mod.default) as React.ComponentType | undefined;
        if (!App) throw new Error(`Missing ${kind} export for ${component}/${test}`);

        render(
            <DevKitProvider>
                <ErrorBoundary title={`${component}/${test}`} backHref={backHref}>
                    <App />
                </ErrorBoundary>
                <DevBar />
            </DevKitProvider>
        );
    } catch (err) {
        render(
            <DevKitProvider>
                <ErrorCard title={`${component}/${test}`} backHref={backHref} message={String(err)} />
                <DevBar />
            </DevKitProvider>
        );
    }
}

void init();
setupHmr();
