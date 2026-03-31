import { describe, it, expect } from 'vitest';

import {
    buildRegistry,
    resolveDisplayName,
    buildAriaTable,
    groupRulesIntoSections,
    buildA11yJson,
    generateA11yDoc,
    generateA11yDocs,
} from '../scripts/a11y-docs/generator';
import type { AriaSpec, ComponentMeta } from '../scripts/a11y-docs/types';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeSpec(overrides: Partial<AriaSpec> = {}): AriaSpec {
    return {
        selector: '.k-button',
        rules: [
            { selector: '.k-button', attribute: 'role=button', usage: 'Announces the button role.' },
        ],
        ...overrides,
    };
}

function makeRegistry(entries: Array<[string, ComponentMeta]>): Map<string, ComponentMeta> {
    return new Map(entries);
}

// ---------------------------------------------------------------------------
// buildRegistry
// ---------------------------------------------------------------------------

describe('buildRegistry', () => {
    it('returns empty map when no exports have ariaSpec', () => {
        const registry = buildRegistry({ Button: () => null });
        expect(registry.size).toBe(0);
    });

    it('picks up a component with ariaSpec.rules', () => {
        const Button = () => null;
        (Button as any).ariaSpec = makeSpec();
        const registry = buildRegistry({ Button });
        expect(registry.has('button')).toBe(true);
        expect(registry.get('button')?.displayName).toBe('Button');
    });

    it('derives id from moduleName when present', () => {
        const Btn = () => null;
        (Btn as any).ariaSpec = makeSpec();
        (Btn as any).moduleName = 'button';
        const registry = buildRegistry({ Btn });
        expect(registry.has('button')).toBe(true);
        expect(registry.get('button')?.displayName).toBe('Btn');
    });

    it('derives id from folderName when moduleName is absent', () => {
        const Btn = () => null;
        (Btn as any).ariaSpec = makeSpec();
        (Btn as any).folderName = 'btn';
        const registry = buildRegistry({ Btn });
        expect(registry.has('btn')).toBe(true);
    });

    it('handles duplicate ids by falling back to export-name kebab id', () => {
        const Button = () => null;
        (Button as any).ariaSpec = makeSpec();
        (Button as any).moduleName = 'button';

        const ButtonGroup = () => null;
        (ButtonGroup as any).ariaSpec = makeSpec({ selector: '.k-button-group' });
        (ButtonGroup as any).moduleName = 'button'; // same moduleName — collision

        const registry = buildRegistry({ Button, ButtonGroup });

        expect(registry.has('button')).toBe(true);
        expect(registry.has('button-group')).toBe(true);
        expect(registry.size).toBe(2);
    });

    it('skips non-function and non-object exports', () => {
        const registry = buildRegistry({ version: '1.0.0', count: 42 });
        expect(registry.size).toBe(0);
    });

    it('skips components without ariaSpec.rules', () => {
        const Card = () => null;
        (Card as any).ariaSpec = { selector: '.k-card' };
        const registry = buildRegistry({ Card });
        expect(registry.size).toBe(0);
    });
});

// ---------------------------------------------------------------------------
// resolveDisplayName
// ---------------------------------------------------------------------------

describe('resolveDisplayName', () => {
    const registry = makeRegistry([
        ['button', { id: 'button', displayName: 'Button', ariaSpec: makeSpec() }],
    ]);

    it('returns the registry displayName by default', () => {
        expect(resolveDisplayName('button', registry)).toBe('Button');
    });

    it('converts unknown kebab-case id to PascalCase', () => {
        expect(resolveDisplayName('drop-down-list', registry)).toBe('DropDownList');
    });
});

// ---------------------------------------------------------------------------
// buildAriaTable
// ---------------------------------------------------------------------------

describe('buildAriaTable', () => {
    it('builds a table element with correct headers', () => {
        const result = buildAriaTable([
            { selector: '.k-button', attribute: 'role=button', usage: 'Test usage.' },
        ]);

        expect(result).toHaveProperty('table');
        const { table } = result as { table: { headers: string[]; rows: Record<string, string>[] } };
        expect(table.headers).toEqual(['Selector', 'Attribute', 'Usage']);
    });

    it('formats selector in backticks', () => {
        const result = buildAriaTable([
            { selector: '.k-button', attribute: 'role=button', usage: 'Test.' },
        ]) as any;
        expect(result.table.rows[0].Selector).toBe('`.k-button`');
    });

    it('formats multi-value attributes with "or"', () => {
        const result = buildAriaTable([
            { selector: '.k-input', attribute: 'aria-label or aria-labelledby', usage: 'Label.' },
        ]) as any;
        expect(result.table.rows[0].Attribute).toBe('`aria-label` or `aria-labelledby`');
    });

    it('omits repeated selector for consecutive rows', () => {
        const result = buildAriaTable([
            { selector: '.k-button', attribute: 'role=button', usage: 'First.' },
            { selector: '.k-button', attribute: 'aria-label', usage: 'Second.' },
        ]) as any;

        expect(result.table.rows[0].Selector).toBe('`.k-button`');
        expect(result.table.rows[1].Selector).toBe('');
    });

    it('shows selector again when it changes', () => {
        const result = buildAriaTable([
            { selector: '.k-button', attribute: 'role=button', usage: 'First.' },
            { selector: '.k-button .k-icon', attribute: 'aria-hidden=true', usage: 'Second.' },
        ]) as any;

        expect(result.table.rows[0].Selector).not.toBe('');
        expect(result.table.rows[1].Selector).not.toBe('');
    });
});

// ---------------------------------------------------------------------------
// groupRulesIntoSections
// ---------------------------------------------------------------------------

describe('groupRulesIntoSections', () => {
    it('returns a single section when no rules have section field', () => {
        const rules = [
            { selector: '.k-grid', attribute: 'role=grid', usage: 'Grid role.' },
            { selector: '.k-grid', attribute: 'aria-label', usage: 'Grid label.' },
        ];
        const sections = groupRulesIntoSections(rules, 'Grid');
        expect(sections).toHaveLength(1);
        expect(sections[0].title).toBe('Grid');
    });

    it('splits rules into multiple sections via explicit section field', () => {
        const rules = [
            { selector: '.k-grid', attribute: 'role=grid', usage: 'Grid role.' },
            { section: 'toolbar', selector: '.k-grid-toolbar', attribute: 'role=toolbar', usage: 'Toolbar role.' },
        ];
        const sections = groupRulesIntoSections(rules, 'Grid');
        expect(sections).toHaveLength(2);
        expect(sections[0].title).toBe('Grid');
        expect(sections[1].title).toBe('Grid Toolbar');
    });

    it('returns empty array for empty rules', () => {
        expect(groupRulesIntoSections([], 'Grid')).toEqual([]);
    });

    it('uses componentDisplayName as section title when only one section found', () => {
        const rules = [
            { selector: '.k-button', attribute: 'role=button', usage: 'Button role.' },
        ];
        const sections = groupRulesIntoSections(rules, 'Button');
        expect(sections[0].title).toBe('Button');
    });

    it('returns section key for seeAlso matching', () => {
        const rules = [
            { section: 'toolbar', selector: '.k-grid-toolbar', attribute: 'role=toolbar', usage: 'Toolbar role.' },
        ];
        const sections = groupRulesIntoSections(rules, 'Grid');
        expect(sections[0].key).toBe('toolbar');
    });
});

// ---------------------------------------------------------------------------
// buildA11yJson
// ---------------------------------------------------------------------------

describe('buildA11yJson', () => {
    const spec = makeSpec();
    const registry = makeRegistry([
        ['button', { id: 'button', displayName: 'Button', ariaSpec: spec }],
    ]);
    const component: ComponentMeta = { id: 'button', displayName: 'Button', ariaSpec: spec };

    it('starts with h2 Accessibility Support', () => {
        const json = buildA11yJson(component, registry);
        const h2 = json.find(e => 'h2' in e) as { h2: string } | undefined;
        expect(h2?.h2).toBe('Accessibility Support');
    });

    it('includes WAI-ARIA h3 heading', () => {
        const json = buildA11yJson(component, registry);
        const h3s = json.filter(e => 'h3' in e).map(e => (e as { h3: string }).h3);
        expect(h3s).toContain('WAI-ARIA');
    });

    it('includes Testing h3 heading', () => {
        const json = buildA11yJson(component, registry);
        const h3s = json.filter(e => 'h3' in e).map(e => (e as { h3: string }).h3);
        expect(h3s).toContain('Testing');
    });

    it('includes Screen Readers h3 heading and table', () => {
        const json = buildA11yJson(component, registry);
        const h3s = json.filter(e => 'h3' in e).map(e => (e as { h3: string }).h3);
        expect(h3s).toContain('Screen Readers');

        const tables = json.filter(e => 'table' in e) as Array<{ table: { headers: string[] } }>;
        const srTable = tables.find(t => t.table.headers.includes('Environment'));
        expect(srTable).toBeDefined();
    });

    it('includes pre-built description elements when ariaSpec.description is set', () => {
        const specWithDesc = makeSpec({
            description: [
                { p: 'A complex component.' },
                { ul: ['Item one;', 'Item two;'] },
            ],
        });
        const comp: ComponentMeta = { id: 'button', displayName: 'Button', ariaSpec: specWithDesc };
        const json = buildA11yJson(comp, registry);
        const paragraphs = json.filter(e => 'p' in e).map(e => (e as { p: string }).p);
        expect(paragraphs.some(p => p.includes('A complex component.'))).toBe(true);
        const lists = json.filter(e => 'ul' in e) as Array<{ ul: string[] }>;
        expect(lists.some(l => l.ul.includes('Item one;'))).toBe(true);
    });

    it('uses seeAlso with exact section matching', () => {
        const toolbarSpec = makeSpec({ selector: '.k-toolbar' });
        const gridRegistry = makeRegistry([
            ['button', { id: 'button', displayName: 'Button', ariaSpec: spec }],
            ['toolbar', { id: 'toolbar', displayName: 'Toolbar', ariaSpec: toolbarSpec }],
        ]);

        const gridSpec: AriaSpec = {
            selector: '.k-grid',
            seeAlso: ['toolbar'],
            rules: [
                { selector: '.k-grid', attribute: 'role=grid', usage: 'Grid role.' },
                { section: 'toolbar', selector: '.k-grid-toolbar', attribute: 'role=toolbar', usage: 'Toolbar in grid.' },
            ],
        };
        const gridComponent: ComponentMeta = { id: 'grid', displayName: 'Grid', ariaSpec: gridSpec };

        const json = buildA11yJson(gridComponent, gridRegistry);
        const links = json.filter(e => 'link' in e) as Array<{ link: { title: string; source: string } }>;
        const toolbarLink = links.find(l => l.link.source.includes('toolbar'));
        expect(toolbarLink).toBeDefined();
        expect(toolbarLink?.link.title).toBe('Toolbar accessibility specification');
    });

    it('emits a standalone cross-link for unmatched seeAlso targets', () => {
        const pagerSpec = makeSpec({ selector: '.k-pager' });
        const pagerRegistry = makeRegistry([
            ['button', { id: 'button', displayName: 'Button', ariaSpec: spec }],
            ['pager', { id: 'pager', displayName: 'Pager', ariaSpec: pagerSpec }],
        ]);

        const gridSpec: AriaSpec = {
            selector: '.k-grid',
            seeAlso: ['pager'],
            rules: [
                { selector: '.k-grid', attribute: 'role=grid', usage: 'Grid role.' },
            ],
        };
        const gridComponent: ComponentMeta = { id: 'grid', displayName: 'Grid', ariaSpec: gridSpec };

        const json = buildA11yJson(gridComponent, pagerRegistry);
        const links = json.filter(e => 'link' in e) as Array<{ link: { title: string; source: string } }>;
        const pagerLink = links.find(l => l.link.source.includes('pager'));
        expect(pagerLink).toBeDefined();
        expect(pagerLink?.link.title).toBe('Pager accessibility specification');
    });
});

// ---------------------------------------------------------------------------
// generateA11yDoc / generateA11yDocs
// ---------------------------------------------------------------------------

describe('generateA11yDoc', () => {
    const spec = makeSpec();
    const registry = makeRegistry([
        ['button', { id: 'button', displayName: 'Button', ariaSpec: spec }],
    ]);
    const component: ComponentMeta = { id: 'button', displayName: 'Button', ariaSpec: spec };

    it('returns correct componentId and displayName', () => {
        const page = generateA11yDoc(component, registry);
        expect(page.componentId).toBe('button');
        expect(page.displayName).toBe('Button');
    });

    it('json array is non-empty', () => {
        const page = generateA11yDoc(component, registry);
        expect(page.json.length).toBeGreaterThan(0);
    });

    it('outputPath is undefined when not provided in options', () => {
        const page = generateA11yDoc(component, registry);
        expect(page.outputPath).toBeUndefined();
    });

    it('resolves outputPath using the resolved displayName', () => {
        const page = generateA11yDoc(component, registry, {
            outputPath: (c) => `/out/${c.displayName}.json`,
        });
        expect(page.outputPath).toBe('/out/Button.json');
    });
});

describe('generateA11yDocs', () => {
    const buttonSpec = makeSpec();
    const inputSpec = makeSpec({ selector: '.k-input' });
    const registry = makeRegistry([
        ['button', { id: 'button', displayName: 'Button', ariaSpec: buttonSpec }],
        ['input', { id: 'input', displayName: 'Input', ariaSpec: inputSpec }],
    ]);

    it('generates a page for every component in the registry', () => {
        const pages = generateA11yDocs(registry);
        expect(pages).toHaveLength(2);
        const ids = pages.map(p => p.componentId);
        expect(ids).toContain('button');
        expect(ids).toContain('input');
    });

    it('filters with includeComponents whitelist', () => {
        const pages = generateA11yDocs(registry, { includeComponents: ['button'] });
        expect(pages).toHaveLength(1);
        expect(pages[0].componentId).toBe('button');
    });

    it('filters with excludeComponents blacklist', () => {
        const pages = generateA11yDocs(registry, { excludeComponents: ['input'] });
        expect(pages).toHaveLength(1);
        expect(pages[0].componentId).toBe('button');
    });

    it('returns empty array for empty registry', () => {
        const pages = generateA11yDocs(new Map());
        expect(pages).toHaveLength(0);
    });
});
