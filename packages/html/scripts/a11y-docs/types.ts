/**
 * Types for the accessibility documentation JSON generator.
 *
 * Produces JSON in the format consumed by the Kendo UI Design System docs.
 */

// ---------------------------------------------------------------------------
// ariaSpec shape (mirrors the runtime objects on each component)
// ---------------------------------------------------------------------------

/** A single ARIA rule describing an attribute expectation on a selector. */
export interface AriaRule {
    selector: string;
    attribute: string;
    usage: string;
    /** Optional section key for grouping (kebab-case). When omitted, rules fall into the default section. */
    section?: string;
}

/** Accessibility specification attached to a component via `Component.ariaSpec`. */
export interface AriaSpec {
    /** Root CSS selector for the component. */
    selector?: string;
    /** Ordered list of ARIA attribute rules. */
    rules: AriaRule[];
    /** Pre-built description elements for the WAI-ARIA section. */
    description?: A11yJsonElement[];
    /**
     * Cross-references to other standalone component specs.
     * Uses the target component's registry id (kebab-case), e.g. `'toolbar'`, `'pager'`.
     */
    seeAlso?: string[];
}

// ---------------------------------------------------------------------------
// Component metadata (built by the registry)
// ---------------------------------------------------------------------------

export interface ComponentMeta {
    id: string;
    displayName: string;
    ariaSpec: AriaSpec;
}

// ---------------------------------------------------------------------------
// JSON output elements (Design System docs format)
// ---------------------------------------------------------------------------

export type A11yJsonElement =
    | { h2: string }
    | { h3: string }
    | { h4: string }
    | { p: string }
    | { table: A11yTable }
    | { ul: string[] }
    | { link: A11yLink };

export interface A11yTable {
    headers: string[];
    rows: (Record<string, string> | string[])[];
}

export interface A11yLink {
    title: string;
    source: string;
}

// ---------------------------------------------------------------------------
// Generator options
// ---------------------------------------------------------------------------

export interface A11yGeneratorOptions {
    /** Whitelist of component ids. */
    includeComponents?: string[];
    /** Blacklist of component ids. */
    excludeComponents?: string[];
    /** Resolve output file path per component. Receives meta with resolved displayName. */
    outputPath?: (component: ComponentMeta) => string;
}

// ---------------------------------------------------------------------------
// Generator output
// ---------------------------------------------------------------------------

export interface A11yDocPage {
    componentId: string;
    displayName: string;
    json: A11yJsonElement[];
    outputPath?: string;
}
