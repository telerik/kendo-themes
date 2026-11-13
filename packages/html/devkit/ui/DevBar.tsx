import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { swatchMap } from 'virtual:swatch-map';
import { useDevKit } from '../context';
import { themeQuery } from '../lib/theme';
import { isEditable } from '../lib/dom';
import { useQuickCycle } from '../lib/useShortcuts';
import { useThemeStatus } from '../lib/useThemeStatus';
import { DevBarSearch } from './DevBarSearch';
import { HoverPopover } from './HoverPopover';
import { Select } from './Select';
import { BackIcon, PlayIcon, SearchIcon, TranslucencyIcon } from './icons';
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
                    {isDemo && (
                        <>
                            <a className="devkit-action" href={listingHref} aria-label="Back to component listing">
                                <BackIcon className="devkit-icon" />
                                <span>Home</span>
                            </a>
                            <div className="devkit-sep" aria-hidden="true" />
                        </>
                    )}

                    <button
                        className="devkit-action"
                        onClick={() => setSearchOpen(true)}
                        aria-label="Search demos (Ctrl+K)"
                    >
                        <SearchIcon className="devkit-icon" />
                        <span>Search</span>
                        <kbd className="devkit-kbd">⌘K</kbd>
                    </button>

                    <div className="devkit-sep" aria-hidden="true" />

                    <Select
                        label="Theme"
                        value={params.theme}
                        options={themes}
                        onChange={theme => setParams({ theme })}
                    />
                    <Select
                        className="devkit-select-gap"
                        label="Swatch"
                        value={params.swatch}
                        options={swatches}
                        onChange={swatch => setParams({ swatch })}
                    />

                    {params.theme === 'meridian' && (
                        <>
                            <div className="devkit-sep" aria-hidden="true" />
                            <HoverPopover
                                label="Translucency"
                                trigger={open => (
                                    <button
                                        type="button"
                                        className={`devkit-action devkit-icon-btn${params.translucency > 0 ? ' devkit-toggle-on' : ''}`}
                                        aria-haspopup="true"
                                        aria-expanded={open}
                                        aria-label="Translucency"
                                        title={`Translucency: ${params.translucency}%`}
                                    >
                                        <TranslucencyIcon className="devkit-icon" />
                                    </button>
                                )}
                            >
                                <div className="devkit-hover-panel-title">Translucency</div>
                                <div className="devkit-slider-group">
                                    <input
                                        type="range"
                                        className="devkit-slider"
                                        min={0}
                                        max={100}
                                        step={5}
                                        value={params.translucency}
                                        aria-label="Translucency"
                                        aria-valuetext={`${params.translucency}%`}
                                        onChange={e => setParams({ translucency: Number(e.target.value) })}
                                    />
                                    <span className="devkit-slider-value">{params.translucency}%</span>
                                </div>
                            </HoverPopover>
                        </>
                    )}

                    <div className="devkit-sep" aria-hidden="true" />

                    <HoverPopover
                        label="Animations"
                        trigger={open => (
                            <button
                                type="button"
                                className={`devkit-action devkit-icon-btn devkit-motion-toggle${params.animations ? ' devkit-toggle-on' : ''}`}
                                aria-haspopup="true"
                                aria-expanded={open}
                                aria-label="Animations"
                                title={params.animations ? 'Animations on' : 'Animations off'}
                            >
                                <PlayIcon className="devkit-icon" />
                            </button>
                        )}
                    >
                        <div className="devkit-hover-panel-title">Animations</div>
                        <div className="devkit-option-list">
                            <button
                                type="button"
                                role="menuitemradio"
                                aria-checked={!params.animations}
                                className={`devkit-option${!params.animations ? ' devkit-option-active' : ''}`}
                                onClick={() => setParams({ animations: false })}
                            >
                                <span>Off</span>
                                {!params.animations && <span className="devkit-option-check" aria-hidden="true" />}
                            </button>
                            <button
                                type="button"
                                role="menuitemradio"
                                aria-checked={params.animations}
                                className={`devkit-option${params.animations ? ' devkit-option-active' : ''}`}
                                onClick={() => setParams({ animations: true })}
                            >
                                <span>On</span>
                                {params.animations && <span className="devkit-option-check" aria-hidden="true" />}
                            </button>
                        </div>
                    </HoverPopover>
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
