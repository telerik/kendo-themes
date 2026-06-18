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
    const { DevBar } = await import('./ui/DevBar');
    const { DevKitProvider } = await import('./context');
    const { ErrorBoundary, ErrorCard } = await import('./ui/ErrorBoundary');

    const { theme, swatch } = readParams();
    const backHref = `/${themeQuery(theme, swatch)}`;

    try {
        // @vite-ignore: intentional dynamic import resolved at request time.
        const mod = await import(/* @vite-ignore */ `/packages/html/src/${component}/tests/${test}.tsx`);
        const App = mod.default as React.ComponentType;

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
