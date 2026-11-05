import React, { useLayoutEffect, useMemo, useState } from 'react';
import { templateRoutes, testRoutes } from 'virtual:test-routes';
import { DevKitProvider, useDevKit } from '../context';
import { fuzzyMatch } from '../lib/fuzzy';
import { themeQuery } from '../lib/theme';
import { pushRecent } from '../lib/recents';
import { DevBar } from './DevBar';
import { Highlight } from './Highlight';
import { ChevronIcon, KendoLogo, SearchIcon } from './icons';
import '../devkit.css';

interface MatchedPreview {
    test: string;
    kind: 'test' | 'template';
    matched: number[];
}

interface MatchedComponent {
    component: string;
    componentMatched: number[];
    previews: MatchedPreview[];
}

const RETURN_COMPONENT_KEY = 'kendo-themes-dev:return-component';

function peekReturnComponent(): string | null {
    try {
        return sessionStorage.getItem(RETURN_COMPONENT_KEY);
    } catch (error) {
        if (error instanceof DOMException) {
            console.warn('Unable to restore dev component return target', error);
            return null;
        }
        throw error;
    }
}

function clearReturnComponent(): void {
    try {
        sessionStorage.removeItem(RETURN_COMPONENT_KEY);
    } catch (error) {
        if (error instanceof DOMException) return;
        throw error;
    }
}

function saveReturnComponent(component: string): void {
    try {
        sessionStorage.setItem(RETURN_COMPONENT_KEY, component);
    } catch (error) {
        if (error instanceof DOMException) {
            console.warn('Unable to save dev component return target', error);
            return;
        }
        throw error;
    }
}

function LandingPageContent() {
    const { params } = useDevKit();
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState<Set<string>>(new Set());

    const themeQs = themeQuery(params.theme, params.swatch);
    const q = search.trim();

    const components = useMemo<MatchedComponent[]>(() => {
        const componentsWithPreviews = new Set([
            ...Object.keys(testRoutes),
            ...Object.keys(templateRoutes),
        ]);
        return [...componentsWithPreviews]
            .map(component => {
                const tests = testRoutes[component] ?? [];
                const templates = templateRoutes[component] ?? [];
                const compRes = q ? fuzzyMatch(q, component) : { score: 0, matched: [] };
                const previews: MatchedPreview[] = [
                    ...templates.map(test => ({ test, kind: 'template' as const, matched: [] })),
                    ...tests.map(test => ({ test, kind: 'test' as const, matched: [] })),
                ];

                // A component-name match surfaces all its previews; otherwise filter by name.
                const matchedPreviews = compRes
                    ? previews
                    : previews.flatMap(preview => {
                          const result = fuzzyMatch(q, preview.test);
                          return result ? [{ ...preview, matched: result.matched }] : [];
                      });

                return {
                    component,
                    componentMatched: compRes?.matched ?? [],
                    previews: matchedPreviews,
                };
            })
            .filter(c => c.previews.length > 0)
            .sort((a, b) => a.component.localeCompare(b.component));
    }, [q]);

    const totalTests = useMemo(
        () => Object.values(testRoutes).reduce((sum, tests) => sum + tests.length, 0),
        []
    );
    const totalTemplates = useMemo(
        () => Object.values(templateRoutes).reduce((sum, templates) => sum + templates.length, 0),
        []
    );
    const totalComponents = useMemo(
        () => new Set([...Object.keys(testRoutes), ...Object.keys(templateRoutes)]).size,
        []
    );

    useLayoutEffect(() => {
        function restoreReturnComponent() {
            const component = peekReturnComponent();
            if (!component) return;
            setOpen(new Set([component]));
            window.requestAnimationFrame(() => {
                document.getElementById(`devkit-component-${component}`)
                    ?.scrollIntoView({ block: 'center' });
            });
            // Some browsers restore this page from cache and then reload it (e.g. a dev
            // server keeps a live socket open, which disqualifies bfcache). Delay clearing
            // the key so a near-immediate second restore on that reload still finds it.
            window.setTimeout(clearReturnComponent, 2000);
        }

        restoreReturnComponent();
        window.addEventListener('pageshow', restoreReturnComponent);
        return () => window.removeEventListener('pageshow', restoreReturnComponent);
    }, []);

    const toggle = (component: string) =>
        setOpen(prev => {
            const next = new Set(prev);
            if (next.has(component)) next.delete(component);
            else next.add(component);
            return next;
        });

    return (
        <div className="devkit-landing">
            <header className="devkit-landing-header">
                <KendoLogo className="devkit-landing-logo" />
                <span className="devkit-landing-title">Kendo Themes Dev</span>
                <span className="devkit-landing-stats">
                    <strong>{totalComponents}</strong> components ·{' '}
                    <strong>{totalTests + totalTemplates}</strong> previews
                </span>
            </header>

            <main className="devkit-landing-body">
                <div className="devkit-landing-search" role="search">
                    <SearchIcon className="devkit-landing-search-icon" />
                    <input
                        className="devkit-landing-search-input"
                        type="search"
                        placeholder="Filter components or previews…"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        aria-label="Filter components"
                    />
                    <span className="devkit-landing-search-kbd" aria-hidden="true">
                        <kbd>⌘K</kbd> palette
                    </span>
                </div>

                {components.length === 0 ? (
                    <div className="devkit-no-results" role="status">
                        No components match &ldquo;{q}&rdquo;
                    </div>
                ) : (
                    <div className="devkit-acc-list">
                        {components.map(({ component, componentMatched, previews }) => {
                            const isOpen = q ? true : open.has(component);
                            const regionId = `devkit-region-${component}`;
                            return (
                                <div
                                    key={component}
                                    id={`devkit-component-${component}`}
                                    className="devkit-acc-item"
                                    data-open={isOpen}
                                >
                                    <button
                                        className="devkit-acc-summary"
                                        onClick={() => toggle(component)}
                                        aria-expanded={isOpen}
                                        aria-controls={regionId}
                                    >
                                        <ChevronIcon className="devkit-acc-chevron" />
                                        <span className="devkit-acc-name">
                                            <Highlight text={component} matched={componentMatched} />
                                        </span>
                                        <span className="devkit-acc-badge">{previews.length}</span>
                                    </button>
                                    <div id={regionId} className="devkit-acc-region" role="region">
                                        <div className="devkit-acc-inner">
                                            <div className="devkit-test-list">
                                                {(['template', 'test'] as const).map(kind => {
                                                    const group = previews.filter(p => p.kind === kind);
                                                    if (group.length === 0) return null;
                                                    return (
                                                        <React.Fragment key={kind}>
                                                            <div className="devkit-test-group" data-kind={kind}>
                                                                {kind === 'template' ? 'Templates' : 'Tests'}
                                                                <span className="devkit-test-group-count">{group.length}</span>
                                                            </div>
                                                            {group.map(({ test, matched }) => (
                                                                <a
                                                                    key={`${kind}-${test}`}
                                                                    className="devkit-test-link"
                                                                    href={`/${component}/${test}${themeQs}&kind=${kind}`}
                                                                    onClick={() => {
                                                                        pushRecent(component, test, kind);
                                                                        saveReturnComponent(component);
                                                                    }}
                                                                >
                                                                    <Highlight text={test} matched={matched} />
                                                                </a>
                                                            ))}
                                                        </React.Fragment>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>

            <DevBar />
        </div>
    );
}

export function LandingPage() {
    return (
        <DevKitProvider>
            <LandingPageContent />
        </DevKitProvider>
    );
}
