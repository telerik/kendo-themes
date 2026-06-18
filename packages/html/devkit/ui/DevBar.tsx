import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { swatchMap } from 'virtual:swatch-map';
import { useDevKit } from '../context';
import { themeQuery } from '../lib/theme';
import { isEditable } from '../lib/dom';
import { useQuickCycle } from '../lib/useShortcuts';
import { useThemeStatus } from '../lib/useThemeStatus';
import { DevBarSearch } from './DevBarSearch';
import { Select } from './Select';
import { BackIcon, KendoLogo, PlayIcon, SearchIcon } from './icons';
import '../devkit.css';

export function DevBar() {
    const { params, setParams } = useDevKit();
    const [expanded, setExpanded] = useState(true);
    const [searchOpen, setSearchOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const themes = useMemo(() => Object.keys(swatchMap).sort(), []);
    const swatches = useMemo(() => {
        const list = (swatchMap[params.theme] || []).filter(s => s !== 'all').sort();
        return ['all', ...list];
    }, [params.theme]);

    const isDemo = /^\/[^/]+\/[^/]+\/?$/.test(location.pathname);
    const listingHref = `/${themeQuery(params.theme, params.swatch)}`;

    const toast = useQuickCycle({ params, setParams, themes, swatches });
    const status = useThemeStatus();

    // Global shortcuts to open the command palette.
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (searchOpen) return;
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setSearchOpen(true);
            } else if (e.key === '/' && !isEditable(e.target) && !e.ctrlKey && !e.metaKey) {
                e.preventDefault();
                setSearchOpen(true);
            }
        }
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [searchOpen]);

    const portalTarget = document.getElementById('devkit-portal') ?? document.body;

    return (
        <>
            <div
                ref={wrapperRef}
                className="devkit-wrapper"
                onFocus={() => setExpanded(true)}
            >
                <button
                    className="devkit-handle"
                    onClick={() => setExpanded(v => !v)}
                    aria-label={expanded ? 'Collapse dev bar' : 'Expand dev bar'}
                    aria-expanded={expanded}
                    aria-controls="devkit-bar"
                />

                <div
                    id="devkit-bar"
                    role="toolbar"
                    aria-label="Kendo Dev Bar"
                    className="devkit-bar"
                    data-visible={expanded}
                >
                    <div className="devkit-brand">
                        <KendoLogo className="devkit-logo" />
                        <span>Dev</span>
                    </div>

                    <div className="devkit-sep" aria-hidden="true" />

                    <button
                        className="devkit-action"
                        onClick={() => setSearchOpen(true)}
                        aria-label="Search demos (Ctrl+K)"
                    >
                        <SearchIcon className="devkit-icon" />
                        <span>Search</span>
                        <kbd className="devkit-kbd">⌘K</kbd>
                    </button>

                    {isDemo && (
                        <>
                            <div className="devkit-sep" aria-hidden="true" />
                            <a className="devkit-action" href={listingHref} aria-label="Back to component listing">
                                <BackIcon className="devkit-icon" />
                                <span>All demos</span>
                            </a>
                        </>
                    )}

                    <div className="devkit-sep" aria-hidden="true" />

                    <Select
                        label="Theme"
                        value={params.theme}
                        options={themes}
                        onChange={theme => setParams({ theme })}
                    />
                    <Select
                        label="Swatch"
                        value={params.swatch}
                        options={swatches}
                        onChange={swatch => setParams({ swatch })}
                    />

                    <div className="devkit-sep" aria-hidden="true" />

                    <button
                        className={`devkit-action devkit-motion-toggle${params.animations ? ' devkit-toggle-on' : ''}`}
                        onClick={() => setParams({ animations: !params.animations })}
                        aria-pressed={params.animations}
                        title={params.animations ? 'Disable animations' : 'Enable animations'}
                    >
                        <PlayIcon className="devkit-icon" />
                        <span>Animations</span>
                        <span className="devkit-switch" aria-hidden="true">
                            <span className="devkit-switch-thumb" />
                        </span>
                    </button>
                </div>
            </div>

            {status ? (
                <div className={`devkit-toast${status.kind === 'error' ? ' devkit-toast-error' : ''}`} role="status">
                    {status.kind === 'loading' && <span className="devkit-spinner" aria-hidden="true" />}
                    <span className="devkit-toast-label">{status.kind === 'loading' ? 'Compiling' : 'Error'}</span>
                    <span className="devkit-toast-value">{status.text}</span>
                </div>
            ) : toast ? (
                <div key={toast.id} className="devkit-toast" role="status">
                    <span className="devkit-toast-label">{toast.label}</span>
                    <span className="devkit-toast-value">{toast.value}</span>
                </div>
            ) : null}

            {searchOpen && createPortal(
                <DevBarSearch
                    theme={params.theme}
                    swatch={params.swatch}
                    onClose={() => setSearchOpen(false)}
                />,
                portalTarget
            )}
        </>
    );
}
