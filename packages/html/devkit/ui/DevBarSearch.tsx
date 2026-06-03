import React, { useEffect, useMemo, useRef, useState } from 'react';
import { testRoutes } from 'virtual:test-routes';
import { fuzzyMatch } from '../lib/fuzzy';
import { getRecents, pushRecent } from '../lib/recents';
import { themeQuery } from '../lib/theme';
import { Highlight } from './Highlight';
import { ClockIcon, FileIcon, SearchIcon } from './icons';

interface Props {
    theme: string;
    swatch: string;
    onClose: () => void;
}

interface Item {
    component: string;
    test: string;
    matched: number[]; // indices into `${component}/${test}`
    index: number; // position in the flat list (for active tracking)
}

const EMPTY_LIMIT = 50;

function label(component: string, test: string): string {
    return `${component}/${test}`;
}

export function DevBarSearch({ theme, swatch, onClose }: Props) {
    const [query, setQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    const activeRef = useRef<HTMLAnchorElement>(null);

    const themeQs = themeQuery(theme, swatch);

    // Flat, sorted catalogue of every demo (theme-independent).
    const catalogue = useMemo(
        () =>
            Object.entries(testRoutes)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .flatMap(([component, tests]) =>
                    [...tests].sort().map(test => ({ component, test }))
                ),
        []
    );

    // Recents that still exist in the catalogue.
    const recents = useMemo(() => {
        const exists = new Set(catalogue.map(c => label(c.component, c.test)));
        return getRecents().filter(r => exists.has(label(r.component, r.test)));
    }, [catalogue]);

    const q = query.trim();

    // Build the displayed list + its mode.
    const { mode, items } = useMemo<{ mode: 'search' | 'recent' | 'all'; items: Item[] }>(() => {
        if (!q) {
            const source = recents.length ? recents : catalogue.slice(0, EMPTY_LIMIT);
            return {
                mode: recents.length ? 'recent' : 'all',
                items: source.map((c, index) => ({ ...c, matched: [], index })),
            };
        }
        const scored = catalogue
            .map(c => ({ c, res: fuzzyMatch(q, label(c.component, c.test)) }))
            .filter((x): x is { c: typeof x.c; res: NonNullable<typeof x.res> } => x.res !== null)
            .sort((a, b) => b.res.score - a.res.score);
        return {
            mode: 'search',
            items: scored.map(({ c, res }, index) => ({ ...c, matched: res.matched, index })),
        };
    }, [q, catalogue, recents]);

    const navigate = (item: Item) => {
        pushRecent(item.component, item.test);
        window.location.href = `/${item.component}/${item.test}${themeQs}`;
    };

    useEffect(() => setActiveIndex(0), [q]);
    useEffect(() => { inputRef.current?.focus(); }, []);
    useEffect(() => { activeRef.current?.scrollIntoView({ block: 'nearest' }); }, [activeIndex]);

    // Keyboard: navigation + close + focus trap.
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                e.stopPropagation();
                onClose();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActiveIndex(i => Math.min(i + 1, items.length - 1));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActiveIndex(i => Math.max(i - 1, 0));
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const item = items[activeIndex];
                if (item) navigate(item);
            } else if (e.key === 'Tab') {
                // Trap focus inside the dialog.
                const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
                    'a[href], button, input, [tabindex]:not([tabindex="-1"])'
                );
                if (!focusable?.length) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }
        window.addEventListener('keydown', onKey, { capture: true });
        return () => window.removeEventListener('keydown', onKey, { capture: true });
    }, [items, activeIndex, onClose, themeQs]);

    const groupLabel =
        mode === 'recent' ? 'Recent' : mode === 'search' ? `${items.length} result${items.length === 1 ? '' : 's'}` : 'All demos';

    return (
        <div className="devkit-search-backdrop" role="presentation" onClick={onClose}>
            <div
                ref={dialogRef}
                className="devkit-search-dialog"
                role="dialog"
                aria-label="Search demos"
                aria-modal="true"
                onClick={e => e.stopPropagation()}
            >
                <div className="devkit-search-input-row">
                    <SearchIcon className="devkit-search-input-icon" />
                    <input
                        ref={inputRef}
                        className="devkit-search-input"
                        type="search"
                        placeholder="Search demos…"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        role="combobox"
                        aria-expanded="true"
                        aria-controls="devkit-search-results"
                        aria-activedescendant={items[activeIndex] ? `devkit-opt-${activeIndex}` : undefined}
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck={false}
                    />
                    <button className="devkit-search-esc" onClick={onClose} aria-label="Close search">
                        Esc
                    </button>
                </div>

                <div id="devkit-search-results" className="devkit-search-results" role="listbox" aria-label="Search results">
                    {items.length === 0 ? (
                        <p className="devkit-search-empty" role="status">
                            No demos match &ldquo;{q}&rdquo;
                        </p>
                    ) : (
                        <>
                            <div className="devkit-search-group-label">
                                {mode === 'recent' && <ClockIcon className="devkit-icon" />}
                                {groupLabel}
                            </div>
                            {items.map(item => {
                                const isActive = item.index === activeIndex;
                                const text = label(item.component, item.test);
                                return (
                                    <a
                                        key={text}
                                        id={`devkit-opt-${item.index}`}
                                        ref={isActive ? activeRef : undefined}
                                        className={`devkit-search-item${isActive ? ' devkit-search-item-active' : ''}`}
                                        href={`/${item.component}/${item.test}${themeQs}`}
                                        role="option"
                                        aria-selected={isActive}
                                        onMouseEnter={() => setActiveIndex(item.index)}
                                        onClick={e => { e.preventDefault(); navigate(item); }}
                                    >
                                        <FileIcon className="devkit-search-item-icon" />
                                        <span className="devkit-search-item-test">
                                            <Highlight text={text} matched={item.matched} />
                                        </span>
                                    </a>
                                );
                            })}
                        </>
                    )}
                </div>

                <div className="devkit-search-footer" aria-hidden="true">
                    <span className="devkit-search-hint"><kbd>↵</kbd> open</span>
                    <span className="devkit-search-hint"><kbd>↑↓</kbd> navigate</span>
                    <span className="devkit-search-hint"><kbd>esc</kbd> close</span>
                    <span className="devkit-search-count">{catalogue.length} demos</span>
                </div>
            </div>
        </div>
    );
}
