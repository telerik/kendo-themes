/**
 * Types for the accessibility documentation JSON generator.
 *
 * Produces JSON in the format consumed by the Kendo UI Design System docs,
 * as a replacement for @progress/wct-a11y-spec.
 */

// ---------------------------------------------------------------------------
// ariaSpec shape (mirrors the runtime objects on each component)
// ---------------------------------------------------------------------------

/** A single ARIA rule describing an attribute expectation on a selector. */
export interface AriaRule {
    selector: string;
    attribute: string;
    usage: string;
}

/** Accessibility specification attached to a component via `Component.ariaSpec`. */
export interface AriaSpec {
    /** Root CSS selector for the component. */
    selector?: string;
    /** Optional implicit ARIA role. */
    implicitRole?: string;
    /** Ordered list of ARIA attribute rules. */
    rules: AriaRule[];
    /** Description for the WAI-ARIA section (rendered as paragraphs). */
    description?: string;
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
    | { h5: string }
    | { p: string }
    | { table: A11yTable }
    | { ul: A11yListItem[] }
    | { link: A11yLink };

export interface A11yTable {
    headers: string[];
    rows: (Record<string, string> | string[])[];
}

export interface A11yLink {
    title: string;
    source: string;
}

export type A11yListItem = string | { link: A11yLink };

// ---------------------------------------------------------------------------
// Generator options
// ---------------------------------------------------------------------------

export interface A11yGeneratorOptions {
    /** Component id → display name overrides. */
    componentNameMap?: Record<string, string>;
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
