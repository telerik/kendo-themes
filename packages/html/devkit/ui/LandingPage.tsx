import React, { useMemo, useState } from 'react';
import { testRoutes } from 'virtual:test-routes';
import { DevKitProvider, useDevKit } from '../context';
import { fuzzyMatch } from '../lib/fuzzy';
import { themeQuery } from '../lib/theme';
import { pushRecent } from '../lib/recents';
import { DevBar } from './DevBar';
import { Highlight } from './Highlight';
import { ChevronIcon, KendoLogo, SearchIcon } from './icons';
import '../devkit.css';

interface MatchedTest {
    test: string;
    matched: number[];
}

interface MatchedComponent {
    component: string;
    componentMatched: number[];
    tests: MatchedTest[];
}

function LandingPageContent() {
    const { params } = useDevKit();
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState<Set<string>>(new Set());

    const themeQs = themeQuery(params.theme, params.swatch);
    const q = search.trim();

    const components = useMemo<MatchedComponent[]>(() => {
        return Object.entries(testRoutes)
            .map(([component, tests]) => {
                const compRes = q ? fuzzyMatch(q, component) : { score: 0, matched: [] };
                const sorted = [...tests].sort();

                // A component-name match surfaces all its tests; otherwise filter per test.
                const matchedTests: MatchedTest[] = compRes
                    ? sorted.map(test => ({ test, matched: [] }))
                    : sorted
                          .map(test => ({ test, res: fuzzyMatch(q, test) }))
                          .filter((x): x is { test: string; res: NonNullable<typeof x.res> } => x.res !== null)
                          .map(x => ({ test: x.test, matched: x.res.matched }));

                return {
                    component,
                    componentMatched: compRes?.matched ?? [],
                    tests: matchedTests,
                };
            })
            .filter(c => c.tests.length > 0)
            .sort((a, b) => a.component.localeCompare(b.component));
    }, [q]);

    const totalTests = useMemo(
        () => Object.values(testRoutes).reduce((sum, tests) => sum + tests.length, 0),
        []
    );

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
                    <strong>{Object.keys(testRoutes).length}</strong> components ·{' '}
                    <strong>{totalTests}</strong> tests
                </span>
            </header>

            <main className="devkit-landing-body">
                <div className="devkit-landing-search" role="search">
                    <SearchIcon className="devkit-landing-search-icon" />
                    <input
                        className="devkit-landing-search-input"
                        type="search"
                        placeholder="Filter components or tests…"
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
                        {components.map(({ component, componentMatched, tests }) => {
                            const isOpen = q ? true : open.has(component);
                            const regionId = `devkit-region-${component}`;
                            return (
                                <div key={component} className="devkit-acc-item" data-open={isOpen}>
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
                                        <span className="devkit-acc-badge">{tests.length}</span>
                                    </button>
                                    <div id={regionId} className="devkit-acc-region" role="region">
                                        <div className="devkit-acc-inner">
                                            <div className="devkit-test-list">
                                                {tests.map(({ test, matched }) => (
                                                    <a
                                                        key={test}
                                                        className="devkit-test-link"
                                                        href={`/${component}/${test}${themeQs}`}
                                                        onClick={() => pushRecent(component, test)}
                                                    >
                                                        <Highlight text={test} matched={matched} />
                                                    </a>
                                                ))}
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
