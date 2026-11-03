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

const Demo = ({ proposed }: { proposed?: boolean }) => {
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
            hover={hovered === node.id && !node.disabled && !(proposed && selected === node.id)}
            focus={focused === node.id}
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
        <div className={proposed ? "k-proposed" : undefined} onMouseLeave={() => setHovered(null)}>
            <PanelBarNormal>
                {renderItems(tree, 0)}
            </PanelBarNormal>
        </div>
    );
};

const titleStyle = { fontSize: "14px", lineHeight: "20px", whiteSpace: "nowrap" } as const;

export default () => {
    const css = proposedCss();

    return (
        <>
            <style>{`
                #test-area .k-panelbar-item { outline: none; }
                #test-area .k-panelbar-item > .k-link { cursor: pointer; }
                #test-area .k-proposed .k-panelbar-item > .k-link.k-selected { pointer-events: none; }
                #test-area .k-proposed .k-panelbar-item:has(> .k-link.k-selected) { cursor: pointer; }
                #test-area .k-panelbar-item .k-disabled { cursor: default; }
            `}</style>
            <style>{css}</style>
            <div id="test-area" className="k-d-grid k-grid-cols-4">
                <section>
                    <h2 className="k-h4" style={titleStyle}>PanelBar Theme/States</h2>
                    <Demo />
                </section>
                <section>
                    <h2 className="k-h4" style={titleStyle}>PanelBar - Proposed changes</h2>
                    <Demo proposed />
                </section>
            </div>
        </>
    );
};
