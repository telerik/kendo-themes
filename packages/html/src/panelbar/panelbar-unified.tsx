import React from 'react';

// theme + mode -> kendo-themes swatch (packages/<theme>/lib/swatches). Ocean Blue exists only in the default theme.
const themeStyles = {
    default: { light: 'default-main', dark: 'default-main-dark', 'ocean-blue': 'default-ocean-blue' },
    meridian: { light: 'meridian-main', dark: 'meridian-main-dark' },
    bootstrap: { light: 'bootstrap-main', dark: 'bootstrap-main-dark' },
    material: { light: 'material-main', dark: 'material-main-dark' },
    fluent: { light: 'fluent-main', dark: 'fluent-main-dark' }
} as const;

// interactive state -> kendo-themes state classes
const stateClasses = {
    'normal': [],
    'hover': ['k-hover'],
    'focus': ['k-focus'],
    'hover-focus': ['k-hover', 'k-focus'],
    'selected': ['k-selected'],
    'selected-hover': ['k-selected', 'k-hover'],
    'selected-focus': ['k-selected', 'k-focus'],
    'selected-hover-focus': ['k-selected', 'k-hover', 'k-focus'],
    'disabled': ['k-disabled']
} as const;

type Theme = keyof typeof themeStyles;
type State = keyof typeof stateClasses;

export type PanelBarItemData = {
    id: string;
    text: string;
    /** Font icon name, e.g. "folder" (renders `k-i-folder`). */
    icon?: string;
    /** Interactive state of this item. */
    state?: State;
    children?: PanelBarItemData[];
};

export type KendoPanelBarProps = {
    /** kendo-themes theme. */
    theme?: Theme;
    /** Swatch mode; `ocean-blue` is available only in the `default` theme. */
    mode?: 'light' | 'dark' | 'ocean-blue';
    /** Items (with optional nested `children`) rendered by the PanelBar. */
    items?: PanelBarItemData[];
    /** Ids of the initially expanded items. */
    defaultExpanded?: string[];
    /** Title shown above the PanelBar. Pass an empty string to hide it. */
    title?: string;
};

/**
 * @aria {role="tree"} Root list. aria-activedescendant points to the focused item.
 * @aria {role="treeitem"} Items expose aria-level, aria-expanded (when they have children), aria-selected and aria-disabled.
 * @ux {Expand / Collapse} Clicking an item toggles its children. Disabled items cannot be toggled.
 * @keyboard {ArrowUp} Focuses the previous visible item (wraps to the last).
 * @keyboard {ArrowDown} Focuses the next visible item (wraps to the first).
 * @keyboard {ArrowRight} Expands a collapsed item; if expanded, focuses its first child.
 * @keyboard {ArrowLeft} Collapses an expanded item; if collapsed, focuses its parent.
 * @keyboard {Home} Focuses the first item.
 * @keyboard {End} Focuses the last visible item.
 * @keyboard {Enter} Selects the focused item and toggles it when it has children.
 * @keyboard {Space} Selects the focused item and toggles it when it has children.
 */
export const PanelBar = (props: KendoPanelBarProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>) => {
    const {
        theme = 'meridian',
        mode = 'light',
        title = 'PanelBar Theme/State',
        defaultExpanded = ['root-1', 'root-1-1'],
        items = [
            { id: 'root-1', text: 'Root item', icon: 'folder', children: [
                { id: 'root-1-1', text: 'Child item', icon: 'folder', children: [{ id: 'root-1-1-1', text: 'Child item level 1' }] },
                { id: 'root-1-2', text: 'Child item' }
            ] },
            { id: 'root-2', text: 'Root item', icon: 'folder', children: [{ id: 'root-2-1', text: 'Child item' }] },
            { id: 'root-3', text: 'Root item', icon: 'folder' }
        ],
        ...other
    } = props;

    const swatch = (themeStyles[theme] as Record<string, string>)[mode];

    if (!swatch) {
        throw new Error(`PanelBar: mode "${mode}" is not available in theme "${theme}". Available: ${Object.keys(themeStyles[theme]).join(', ')}`);
    }

    const [expanded, setExpanded] = React.useState<string[]>(defaultExpanded);
    const [selected, setSelected] = React.useState<string>();
    const [active, setActive] = React.useState<string>();

    // Flatten the data into the rows that are currently visible (depth-first, skipping collapsed branches).
    const rows: { item: PanelBarItemData; depth: number; parent?: PanelBarItemData }[] = [];
    const stack = items.map(item => ({ item, depth: 0, parent: undefined as PanelBarItemData | undefined })).reverse();
    while (stack.length) {
        const row = stack.pop()!;
        rows.push(row);
        if (row.item.children && expanded.includes(row.item.id)) {
            row.item.children.slice().reverse().forEach(child => stack.push({ item: child, depth: row.depth + 1, parent: row.item }));
        }
    }

    const toggle = (id: string, open?: boolean) =>
        setExpanded(prev => (open ?? !prev.includes(id)) ? [...prev.filter(x => x !== id), id] : prev.filter(x => x !== id));

    const onKeyDown = (e: React.KeyboardEvent) => {
        const focusable = rows.filter(r => r.item.state !== 'disabled');
        const index = focusable.findIndex(r => r.item.id === active);
        const current = focusable[index];
        const go = (i: number) => { setActive(focusable[(i + focusable.length) % focusable.length].item.id); e.preventDefault(); };

        if (!focusable.length) { return; }
        if (e.key === 'ArrowDown') { go(index + 1); }
        else if (e.key === 'ArrowUp') { go(index < 0 ? focusable.length - 1 : index - 1); }
        else if (e.key === 'Home') { go(0); }
        else if (e.key === 'End') { go(focusable.length - 1); }
        else if (e.key === 'ArrowRight' && current?.item.children?.length) {
            if (expanded.includes(current.item.id)) { setActive(current.item.children[0].id); } else { toggle(current.item.id, true); }
            e.preventDefault();
        } else if (e.key === 'ArrowLeft' && current) {
            if (current.item.children?.length && expanded.includes(current.item.id)) { toggle(current.item.id, false); }
            else if (current.parent) { setActive(current.parent.id); }
            e.preventDefault();
        } else if ((e.key === 'Enter' || e.key === ' ') && current) {
            setSelected(current.item.id);
            if (current.item.children?.length) { toggle(current.item.id); }
            e.preventDefault();
        }
    };

    return (
        <div {...other} data-theme={theme} data-mode={mode} data-swatch={swatch}>
            {title && <h2>{title}</h2>}
            <ul className="k-panelbar" role="tree" tabIndex={0} aria-activedescendant={active} onKeyDown={onKeyDown}>
                {rows.map(({ item, depth }) => {
                    const hasChildren = Boolean(item.children?.length);
                    const isOpen = expanded.includes(item.id);
                    const flags: string[] = [...stateClasses[item.state ?? 'normal']];
                    const isSelected = flags.includes('k-selected') || selected === item.id;
                    const isDisabled = flags.includes('k-disabled');

                    if (active === item.id && !flags.includes('k-focus')) { flags.push('k-focus'); }
                    if (isSelected && !flags.includes('k-selected')) { flags.push('k-selected'); }

                    return (
                        <li
                            key={item.id}
                            id={item.id}
                            role="treeitem"
                            className={['k-panelbar-item', depth === 0 ? 'k-panelbar-header' : '', `k-level-${depth}`, hasChildren && isOpen ? 'k-expanded' : ''].filter(Boolean).join(' ')}
                            aria-level={depth + 1}
                            aria-expanded={hasChildren ? isOpen : undefined}
                            aria-selected={isSelected}
                            aria-disabled={isDisabled || undefined}
                        >
                            <span
                                className={['k-link', ...flags].join(' ')}
                                onClick={() => {
                                    if (isDisabled) { return; }
                                    setActive(item.id);
                                    setSelected(item.id);
                                    if (hasChildren) { toggle(item.id); }
                                }}
                            >
                                {item.icon && <span className={`k-icon k-font-icon k-i-${item.icon} k-panelbar-item-icon`} />}
                                <span className="k-panelbar-item-text">{item.text}</span>
                                {hasChildren && <span className={`k-icon k-font-icon k-i-chevron-${isOpen ? 'up' : 'down'} k-panelbar-toggle ${isOpen ? 'k-panelbar-collapse' : 'k-panelbar-expand'}`} />}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PanelBar;
