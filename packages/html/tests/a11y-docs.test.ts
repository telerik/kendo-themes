import { describe, it, expect } from 'vitest';

import { buildRegistry, resolveDisplayName } from '../src/a11y-docs/component-registry';
import {
    buildAriaTable,
    groupRulesIntoSections,
    parseDescription,
    buildA11yJson,
} from '../src/a11y-docs/json-renderer';
import { generateA11yDoc, generateA11yDocs } from '../src/a11y-docs/page-generator';
import type { AriaSpec, ComponentMeta } from '../src/a11y-docs/types';

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

        // Primary component keeps the shared id
        expect(registry.has('button')).toBe(true);
        // Colliding component falls back to its export-name-derived id
        expect(registry.has('button-group')).toBe(true);
        expect(registry.size).toBe(2);
    });

    it('skips non-function and non-object exports', () => {
        const registry = buildRegistry({ version: '1.0.0', count: 42 });
        expect(registry.size).toBe(0);
    });

    it('skips components without ariaSpec.rules', () => {
        const Card = () => null;
        (Card as any).ariaSpec = { selector: '.k-card' }; // no rules
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

    it('prefers the nameMap override over registry', () => {
        expect(resolveDisplayName('button', registry, { button: 'MyButton' })).toBe('MyButton');
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
    it('returns a single section when all rules share root selector', () => {
        const rules = [
            { selector: '.k-grid', attribute: 'role=grid', usage: 'Grid role.' },
            { selector: '.k-grid', attribute: 'aria-label', usage: 'Grid label.' },
        ];
        const sections = groupRulesIntoSections(rules, '.k-grid', 'Grid');
        expect(sections).toHaveLength(1);
        expect(sections[0].title).toBe('Grid');
    });

    it('splits rules into multiple sections for composite components', () => {
        const rules = [
            { selector: '.k-grid', attribute: 'role=grid', usage: 'Grid role.' },
            { selector: '.k-grid-toolbar', attribute: 'role=toolbar', usage: 'Toolbar role.' },
        ];
        const sections = groupRulesIntoSections(rules, '.k-grid', 'Grid');
        expect(sections.length).toBeGreaterThan(1);
        const titles = sections.map(s => s.title);
        expect(titles.some(t => t.includes('Toolbar'))).toBe(true);
    });

    it('returns empty array for empty rules', () => {
        expect(groupRulesIntoSections([], '.k-grid', 'Grid')).toEqual([]);
    });

    it('uses componentDisplayName as section title when only one section found', () => {
        const rules = [
            { selector: '.k-button', attribute: 'role=button', usage: 'Button role.' },
        ];
        const sections = groupRulesIntoSections(rules, '.k-button', 'Button');
        expect(sections[0].title).toBe('Button');
    });
});

// ---------------------------------------------------------------------------
// parseDescription
// ---------------------------------------------------------------------------

describe('parseDescription', () => {
    it('renders plain text as a paragraph', () => {
        const elements = parseDescription('The Grid is a composite component.');
        expect(elements).toHaveLength(1);
        expect(elements[0]).toHaveProperty('p', 'The Grid is a composite component.');
    });

    it('renders bullet list items as a ul', () => {
        const elements = parseDescription('- First item\n- Second item');
        expect(elements).toHaveLength(1);
        expect(elements[0]).toHaveProperty('ul');
        const { ul } = elements[0] as { ul: string[] };
        expect(ul).toHaveLength(2);
        expect(ul[0]).toBe('First item;');
        expect(ul[1]).toBe('Second item;');
    });

    it('appends backtick-wrapped attribute for key=value in list items', () => {
        const elements = parseDescription('- Container uses (role=grid)');
        const { ul } = elements[0] as { ul: string[] };
        expect(ul[0]).toContain('(`role=grid`)');
    });

    it('does NOT double-wrap already-backtick-wrapped key=value', () => {
        const elements = parseDescription('- Container uses (`role=grid`)');
        const { ul } = elements[0] as { ul: string[] };
        // Should remain unchanged — no extra backtick wrapping
        expect(ul[0]).toContain('(`role=grid`)');
        expect(ul[0]).not.toContain('(``role=grid``)');
    });

    it('handles mixed paragraphs and lists', () => {
        const elements = parseDescription('Intro text.\n\n- Item one\n\nTrailing text.');
        const types = elements.map(e => Object.keys(e)[0]);
        expect(types).toContain('p');
        expect(types).toContain('ul');
    });

    it('returns empty array for empty string', () => {
        expect(parseDescription('')).toHaveLength(0);
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

    it('includes description paragraphs when ariaSpec.description is set', () => {
        const specWithDesc = makeSpec({ description: 'A complex component.' });
        const comp: ComponentMeta = { id: 'button', displayName: 'Button', ariaSpec: specWithDesc };
        const json = buildA11yJson(comp, registry);
        const paragraphs = json.filter(e => 'p' in e).map(e => (e as { p: string }).p);
        expect(paragraphs.some(p => p.includes('A complex component.'))).toBe(true);
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

    it('uses componentNameMap override for display name', () => {
        const json = buildA11yJson(component, registry, { button: 'CustomButton' });
        const introP = json[1] as { p: string };
        expect(introP.p).toContain('CustomButton');
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

    it('outputPath uses componentNameMap override', () => {
        const page = generateA11yDoc(component, registry, {
            componentNameMap: { button: 'MyButton' },
            outputPath: (c) => `/out/${c.displayName}.json`,
        });
        expect(page.outputPath).toBe('/out/MyButton.json');
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
