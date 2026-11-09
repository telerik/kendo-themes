import * as React from 'react';
import { PanelBarGroup, PanelBarItem, PanelBarNormal } from '..';

type Node = {
    id: string;
    text: string;
    icon?: string;
    disabled?: boolean;
    children?: Node[];
};

const tree: Node[] = [
    { id: "r1", text: "Root Item", children: [
        { id: "r1c1", text: "Child Item", icon: "folder" }
    ] },
    { id: "r2", text: "Root Item", children: [
        { id: "r2c1", text: "Child Item", icon: "folder", children: [
            { id: "r2c1a", text: "Child Item Level 1", icon: "folder" }
        ] },
        { id: "r2c2", text: "Child Item", icon: "folder", children: [
            { id: "r2c2a", text: "Child Item Level 1", icon: "folder", disabled: true },
            { id: "r2c2b", text: "Child Item Level 1", icon: "folder" }
        ] }
    ] },
    { id: "r3", text: "Root Item", children: [
        { id: "r3c1", text: "Child Item", icon: "folder" }
    ] },
    { id: "r4", text: "Root Item", children: [
        { id: "r4c1", text: "Child Item", icon: "folder" }
    ] }
];

const flatten = (nodes: Node[], level = 0, out: { node: Node; level: number; parent?: string }[] = [], parent?: string) => {
    nodes.forEach(node => {
        out.push({ node, level, parent });
        if (node.children) {
            flatten(node.children, level + 1, out, node.id);
        }
    });
    return out;
};

const all = flatten(tree);

type StateColors = { bg?: string; color?: string };

// Colors are reverted to each theme's originals. Add per-theme overrides here (hover / selectedHover) if needed.
const proposalsByTheme: Record<string, Record<string, StateColors>> = {
    default: {},
    bootstrap: {},
    material: {},
    fluent: {},
    meridian: {}
};
const stateSelectors: Record<string, string> = {
    normal: ".k-link:not(.k-hover):not(.k-focus):not(.k-selected):not(.k-disabled)",
    focus: ".k-link.k-focus:not(.k-hover):not(.k-selected)",
    hover: ".k-link.k-hover:not(.k-focus):not(.k-selected):not(.k-disabled)",
    hoverFocus: ".k-link.k-hover.k-focus:not(.k-selected)",
    selected: ".k-link.k-selected:not(.k-hover):not(.k-focus)",
    selectedFocus: ".k-link.k-selected.k-focus:not(.k-hover)",
    selectedHover: ".k-link.k-selected.k-hover:not(.k-focus)",
    selectedHoverFocus: ".k-link.k-selected.k-hover.k-focus"
};

const proposedCss = () => {
    const theme = new URLSearchParams(window.location.search).get("theme") || "meridian";
    const p = proposalsByTheme[theme] || {};
    const proposals: Record<string, StateColors | undefined> = {
        hover: p.hover, hoverFocus: p.hover,
        selectedHover: p.selectedHover, selectedHoverFocus: p.selectedHover
    };

    return Object.entries(proposals).flatMap(([state, c]) => c ? [[state, c] as const] : []).map(([state, { bg, color }]) =>
        `#test-area .k-proposed .k-panelbar-item > ${stateSelectors[state]} {` +
        (bg ? `background-color: ${bg};` : "") +
        (color ? `color: ${color};` : "") +
        `}`
    ).join("\n");
};

const Demo = ({ proposed, reduced, selHover }: { proposed?: boolean; reduced?: boolean; selHover?: boolean }) => {
    const [expanded, setExpanded] = React.useState<string[]>(["r2", "r2c2"]);
    const [selected, setSelected] = React.useState<string | null>("r2");
    const [hovered, setHovered] = React.useState<string | null>(null);
    const [focused, setFocused] = React.useState<string | null>(null);
    const refs = React.useRef<Record<string, HTMLLIElement | null>>({});

    const isVisible = (id: string) => {
        const entry = all.find(e => e.node.id === id);
        return !entry?.parent || (expanded.includes(entry.parent) && isVisible(entry.parent));
    };

    const toggle = (id: string, open?: boolean) => {
        setExpanded(prev => {
            const isOpen = prev.includes(id);
            const next = open === undefined ? !isOpen : open;
            return next === isOpen ? prev : (next ? [...prev, id] : prev.filter(x => x !== id));
        });
    };

    const activate = (node: Node) => {
        if (node.disabled) {
            return;
        }
        setSelected(node.id);
        if (node.children) {
            toggle(node.id);
        }
    };

    const onKeyDown = (e: React.KeyboardEvent, node: Node) => {
        e.stopPropagation();
        const visible = all.filter(x => isVisible(x.node.id) && !x.node.disabled);
        const index = visible.findIndex(x => x.node.id === node.id);
        const focusAt = (i: number) => visible[i] && refs.current[visible[i].node.id]?.focus();
        const entry = all.find(x => x.node.id === node.id);

        switch (e.key) {
            case "ArrowDown": focusAt(index + 1); break;
            case "ArrowUp": focusAt(index - 1); break;
            case "Home": focusAt(0); break;
            case "End": focusAt(visible.length - 1); break;
            case "ArrowRight":
                if (node.children && !expanded.includes(node.id)) { toggle(node.id, true); }
                else if (node.children) { focusAt(index + 1); }
                break;
            case "ArrowLeft":
                if (node.children && expanded.includes(node.id)) { toggle(node.id, false); }
                else if (entry?.parent) { refs.current[entry.parent]?.focus(); }
                break;
            case "Enter":
            case " ": activate(node); break;
            default: return;
        }
        e.preventDefault();
    };

    const renderItems = (nodes: Node[], level: number) => nodes.map(node => (
        <PanelBarItem
            key={node.id}
            header={level === 0}
            level={level}
            text={node.text}
            icon={node.icon}
            disabled={node.disabled}
            hover={hovered === node.id && !node.disabled && !(proposed && selected === node.id) && !(reduced && focused === node.id && selected !== node.id)}
            focus={focused === node.id && !(reduced && selected === node.id && hovered === node.id)}
            selected={selected === node.id}
            expanded={expanded.includes(node.id)}
            tabIndex={node.disabled ? undefined : (focused === node.id || (!focused && node.id === "r1") ? 0 : -1)}
            ref={((el: HTMLLIElement | null) => { refs.current[node.id] = el; }) as any}
            onMouseOver={(e: React.MouseEvent) => { e.stopPropagation(); setHovered(node.id); }}
            onFocus={(e: React.FocusEvent) => { e.stopPropagation(); setFocused(node.id); }}
            onBlur={(e: React.FocusEvent) => { e.stopPropagation(); setFocused(null); }}
            onKeyDown={(e: React.KeyboardEvent) => onKeyDown(e, node)}
            onClick={(e: React.MouseEvent) => { e.stopPropagation(); activate(node); }}
        >
            {node.children && (
                <PanelBarGroup>
                    {renderItems(node.children, level + 1)}
                </PanelBarGroup>
            )}
        </PanelBarItem>
    ));

    return (
        <div className={proposed ? "k-proposed" : reduced ? "k-reduced" : selHover ? "k-sel-hover" : undefined} onMouseLeave={() => setHovered(null)}>
            <PanelBarNormal>
                {renderItems(tree, 0)}
            </PanelBarNormal>
        </div>
    );
};

const staticStates = [
    { text: "Normal" },
    { text: "Hover", hover: true },
    { text: "Focus", focus: true },
    { text: "Hover + Focus", hover: true, focus: true },
    { text: "Selected", selected: true },
    { text: "Selected + Hover", selected: true, hover: true },
    { text: "Selected + Focus", selected: true, focus: true },
    { text: "Selected + Hover + Focus", selected: true, hover: true, focus: true },
    { text: "Disabled", disabled: true }
];

const reducedStates = ["Normal", "Hover", "Focus", "Selected", "Selected + Hover", "Selected + Focus", "Disabled"];

const StaticStates = ({ reduced }: { reduced?: boolean }) => (
    <div className={reduced ? "k-reduced" : undefined}>
    <PanelBarNormal>
        {staticStates.filter(s => !reduced || reducedStates.includes(s.text)).map(s => (
            <PanelBarItem key={s.text} header level={0} {...s} />
        ))}
    </PanelBarNormal>
    </div>
);

const titleStyle = { fontSize: "14px", lineHeight: "20px", whiteSpace: "nowrap" } as const;

export default () => {
    const css = proposedCss();

    return (
        <>
            <style>{`
                #test-area .k-panelbar-item { outline: none; }
                #test-area .k-panelbar-item-icon,
                #test-area .k-panelbar-toggle { width: 16px; height: 16px; font-size: 16px; }
                #test-area .k-panelbar-item-icon svg,
                #test-area .k-panelbar-toggle svg { width: 16px; height: 16px; }
                #test-area .k-panelbar-item > .k-link { cursor: pointer; }
                #test-area .k-proposed .k-panelbar-item > .k-link.k-selected:hover { background-color: var(--kendo-color-base-active); color: var(--kendo-color-on-base); }
                #test-area .k-proposed .k-panelbar-item:has(> .k-link.k-selected) { cursor: pointer; }
                #test-area .k-proposed .k-panelbar-item:not(:has(> .k-panelbar-group)) > .k-link.k-selected { pointer-events: none; }
                #test-area .k-proposed .k-panelbar-item:not(:has(> .k-panelbar-group)):has(> .k-link.k-selected) { cursor: default; }
                #test-area .k-reduced .k-panelbar-item:has(> .k-link.k-focus) { cursor: pointer; }
                #test-area .k-reduced .k-panelbar-item > .k-link.k-focus:not(.k-selected) { pointer-events: none; }
                #test-area .k-sel-hover .k-panelbar-item > .k-link.k-selected:hover, #test-area .k-sel-hover .k-panelbar-item > .k-link.k-selected.k-hover { background-color: var(--kendo-color-primary-subtle-active); color: var(--kendo-color-primary-on-subtle); }
                #test-area .k-panelbar-item .k-disabled { cursor: default; }
                #test-area .k-panelbar-item[aria-disabled="true"] { cursor: default; }
            `}</style>
            <style>{css}</style>
            <div id="test-area" className="k-d-grid k-grid-cols-4">
                <section>
                    <h2 className="k-h4" style={titleStyle}>PanelBar Theme/States</h2>
                    <Demo />
                </section>
                <section>
                    <h2 className="k-h4" style={titleStyle}>PanelBar - Reduced states</h2>
                    <Demo reduced />
                </section>
                <section>
                    <h2 className="k-h4" style={titleStyle}>All States + Selected-hover</h2>
                    <Demo selHover />
                    <div style={{ fontSize: "12px", lineHeight: "16px", marginTop: "8px", whiteSpace: "nowrap" }}>
                        <strong>Selected+hover semantic naming:</strong>
                        <div><code>$kendo-panelbar-item-selected-hover-bg</code></div>
                    </div>
                </section>
                <section style={{ gridRow: 2, gridColumn: 1 }}>
                    <h2 className="k-h4" style={titleStyle}>Original states (static)</h2>
                    <StaticStates />
                </section>
                <section style={{ gridRow: 2, gridColumn: 2 }}>
                    <h2 className="k-h4" style={titleStyle}>Reduced states (static)</h2>
                    <StaticStates reduced />
                    <div style={{ fontSize: "12px", lineHeight: "16px", marginTop: "8px" }}>
                        <strong>Omitted states (variables):</strong>
                        <div><em>Hover + Focus</em></div>
                        <code>$kendo-panelbar-{"{header|item}"}-hover-focus-{"{bg|text|border|gradient}"}</code>
                        <div style={{ marginTop: "4px" }}><em>Selected + Hover + Focus</em></div>
                        <code>$kendo-panelbar-{"{header|item}"}-selected-hover-focus-{"{bg|text|border|gradient}"}</code>
                    </div>
                </section>
            </div>
        </>
    );
};
