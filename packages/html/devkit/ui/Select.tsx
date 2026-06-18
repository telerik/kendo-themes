import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { ChevronIcon } from './icons';

interface SelectProps {
    label: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
}

/**
 * Compact, fully-keyboard-accessible listbox dropdown. Replaces the native
 * `<select>` so the option list can be styled to match the glass UI and animate.
 * Opens upward (the bar lives at the bottom of the viewport).
 */
export function Select({ label, value, options, onChange }: SelectProps) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(0);
    const rootRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const typeahead = useRef({ buffer: '', at: 0 });
    const baseId = useId();

    const selectedIndex = Math.max(0, options.indexOf(value));

    const close = useCallback((focusButton = true) => {
        setOpen(false);
        if (focusButton) buttonRef.current?.focus();
    }, []);

    const choose = useCallback((option: string) => {
        onChange(option);
        close();
    }, [onChange, close]);

    // Open with the current value highlighted; move DOM focus into the list.
    useEffect(() => {
        if (!open) return;
        setActive(selectedIndex);
        listRef.current?.focus();
    }, [open, selectedIndex]);

    // Keep the active option scrolled into view.
    useEffect(() => {
        if (!open) return;
        listRef.current?.querySelector('[data-active="true"]')
            ?.scrollIntoView({ block: 'nearest' });
    }, [open, active]);

    // Close on outside interaction.
    useEffect(() => {
        if (!open) return;
        function onDown(e: PointerEvent) {
            if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
        }
        window.addEventListener('pointerdown', onDown, true);
        return () => window.removeEventListener('pointerdown', onDown, true);
    }, [open]);

    const onListKeyDown = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case 'Escape':
                e.preventDefault();
                close();
                break;
            case 'ArrowDown':
                e.preventDefault();
                setActive(i => Math.min(i + 1, options.length - 1));
                break;
            case 'ArrowUp':
                e.preventDefault();
                setActive(i => Math.max(i - 1, 0));
                break;
            case 'Home':
                e.preventDefault();
                setActive(0);
                break;
            case 'End':
                e.preventDefault();
                setActive(options.length - 1);
                break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                choose(options[active]);
                break;
            case 'Tab':
                setOpen(false);
                break;
            default: {
                // Type-ahead: jump to the first option starting with typed chars.
                if (e.key.length !== 1) return;
                const now = Date.now();
                const ta = typeahead.current;
                ta.buffer = now - ta.at > 600 ? e.key : ta.buffer + e.key;
                ta.at = now;
                const match = options.findIndex(o =>
                    o.toLowerCase().startsWith(ta.buffer.toLowerCase())
                );
                if (match >= 0) setActive(match);
            }
        }
    };

    return (
        <div className="devkit-select-group" ref={rootRef}>
            <span className="devkit-select-label" id={`${baseId}-label`}>{label}</span>
            <div className="devkit-select-wrap">
                <button
                    ref={buttonRef}
                    type="button"
                    className="devkit-select"
                    aria-haspopup="listbox"
                    aria-expanded={open}
                    aria-labelledby={`${baseId}-label`}
                    onClick={() => setOpen(o => !o)}
                    onKeyDown={e => {
                        if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setOpen(true);
                        }
                    }}
                >
                    <span className="devkit-select-value">{value}</span>
                    <ChevronIcon className="devkit-select-arrow" />
                </button>

                {open && (
                    <ul
                        ref={listRef}
                        role="listbox"
                        tabIndex={-1}
                        className="devkit-select-list"
                        aria-labelledby={`${baseId}-label`}
                        aria-activedescendant={`${baseId}-opt-${active}`}
                        onKeyDown={onListKeyDown}
                        onBlur={e => {
                            if (!rootRef.current?.contains(e.relatedTarget as Node)) {
                                setOpen(false);
                            }
                        }}
                    >
                        {options.map((option, i) => (
                            <li
                                key={option}
                                id={`${baseId}-opt-${i}`}
                                role="option"
                                aria-selected={option === value}
                                data-active={i === active}
                                className="devkit-select-option"
                                onMouseEnter={() => setActive(i)}
                                onClick={() => choose(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
