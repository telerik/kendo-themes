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
    /** CSS selector targeting the element within the component. */
    selector: string;
    /** ARIA attribute specification, e.g. `'role=grid'` or `'aria-expanded=true/false'`. */
    attribute: string;
    /** Human-readable description of the attribute's purpose. */
    usage: string;
}

/** Accessibility specification attached to a component via `Component.ariaSpec`. */
export interface AriaSpec {
    /** Root CSS selector for the component. */
    selector: string;
    /** Optional implicit ARIA role of the component root element. */
    implicitRole?: string;
    /** Ordered list of ARIA attribute rules. */
    rules: AriaRule[];
}

// ---------------------------------------------------------------------------
// Component metadata
// ---------------------------------------------------------------------------

/** Metadata extracted from a component with an ariaSpec. */
export interface ComponentMeta {
    /** Internal component identifier (lowercase, e.g. `'grid'`, `'datepicker'`). */
    id: string;
    /** Display name used in headings (e.g. `'Grid'`, `'DatePicker'`). */
    displayName: string;
    /** The component's ariaSpec object. */
    ariaSpec: AriaSpec;
    /** JSDoc description block preceding the ariaSpec assignment, if any. */
    description?: string;
    /** Components referenced via `@see` in the JSDoc block. */
    seeAlso?: CrossReference[];
}

/** A cross-reference from one component spec to another. */
export interface CrossReference {
    /** Target component id (lowercase). */
    targetId: string;
    /** Label extracted from the `@see` comment (e.g. `'grid toolbar accessibility'`). */
    label: string;
}

// ---------------------------------------------------------------------------
// JSON output elements (Design System docs format)
// ---------------------------------------------------------------------------

/** A single element in the a11y JSON document array. */
export type A11yJsonElement =
    | { h2: string }
    | { h3: string }
    | { h4: string }
    | { h5: string }
    | { p: string }
    | { table: A11yTable }
    | { ul: A11yListItem[] }
    | { link: A11yLink };

/** Table structure with headers and rows. */
export interface A11yTable {
    headers: string[];
    rows: (Record<string, string> | string[])[];
}

/** A link with title and source URL or template variable. */
export interface A11yLink {
    title: string;
    source: string;
}

/** An item in a `ul` element: plain string or link object. */
export type A11yListItem = string | { link: A11yLink };

// ---------------------------------------------------------------------------
// Generator options
// ---------------------------------------------------------------------------

/**
 * Configuration options for the a11y documentation generator.
 * Targets the Design System docs JSON format.
 */
export interface A11yGeneratorOptions {
    /**
     * Map of component id → display name overrides.
     * Example: `{ 'dropdownlist': 'DropDownList' }`
     */
    componentNameMap?: Record<string, string>;

    /** Only generate pages for these component ids (whitelist). */
    includeComponents?: string[];

    /** Skip these component ids (blacklist). */
    excludeComponents?: string[];

    /**
     * Resolve the output file path for a component.
     * Receives component metadata and returns the path where the JSON
     * file should be written.
     */
    outputPath?: (component: ComponentMeta) => string;
}

// ---------------------------------------------------------------------------
// Generator output
// ---------------------------------------------------------------------------

/** The output produced by the generator for a single component. */
export interface A11yDocPage {
    /** Component identifier. */
    componentId: string;
    /** Display name. */
    displayName: string;
    /** The JSON document array in Design System format. */
    json: A11yJsonElement[];
    /** Resolved output file path (when `outputPath` option is provided). */
    outputPath?: string;
}
