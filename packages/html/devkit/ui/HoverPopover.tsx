import React, { useCallback, useEffect, useRef, useState } from 'react';

interface HoverPopoverProps {
    /** Renders the trigger; receives the open state. */
    trigger: (open: boolean) => React.ReactNode;
    /** Accessible name for the floating panel. */
    label: string;
    /** Panel content. */
    children: React.ReactNode;
    /** Extra class name appended to the panel for content-specific layout. */
    panelClassName?: string;
}

/**
 * Wraps a trigger with a floating panel that opens on hover or focus and
 * closes on pointer/focus leave (with a short grace delay so moving the
 * pointer from the trigger into the panel doesn't dismiss it) or Escape.
 */
export function HoverPopover({ trigger, label, children, panelClassName }: HoverPopoverProps) {
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const closeTimer = useRef<number | undefined>(undefined);

    const cancelClose = useCallback(() => window.clearTimeout(closeTimer.current), []);
    const openNow = useCallback(() => {
        cancelClose();
        setOpen(true);
    }, [cancelClose]);
    const closeSoon = useCallback(() => {
        cancelClose();
        closeTimer.current = window.setTimeout(() => setOpen(false), 200);
    }, [cancelClose]);
    const closeNow = useCallback(() => {
        cancelClose();
        setOpen(false);
    }, [cancelClose]);

    useEffect(() => cancelClose, [cancelClose]);

    return (
        <div
            ref={rootRef}
            className="devkit-hover-group"
            onMouseEnter={openNow}
            onMouseLeave={closeSoon}
            onFocus={openNow}
            onBlur={e => {
                if (!rootRef.current?.contains(e.relatedTarget as Node)) closeNow();
            }}
            onKeyDown={e => {
                if (e.key === 'Escape') closeNow();
            }}
        >
            {trigger(open)}
            {open && (
                <div
                    className={`devkit-hover-panel${panelClassName ? ` ${panelClassName}` : ''}`}
                    role="group"
                    aria-label={label}
                >
                    {children}
                </div>
            )}
        </div>
    );
}
