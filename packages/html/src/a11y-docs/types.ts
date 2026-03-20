/**
 * Accessibility documentation generator types.
 *
 * These types formalize the ariaSpec shape used across all html package
 * components and define the generator's public API surface.
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
    /** Label extracted from the `@see` comment (e.g. `'for grid toolbar accessibility'`). */
    label: string;
}

// ---------------------------------------------------------------------------
// Generator options
// ---------------------------------------------------------------------------

/** Frontmatter key-value pairs written as YAML at the top of the generated page. */
export type FrontmatterData = Record<string, string | number | boolean>;

/**
 * Configuration options for the a11y documentation generator.
 *
 * All options are optional — sensible defaults are provided.
 * Product repos can pass a preset (e.g. `ANGULAR_PRESET`) spread with
 * any additional overrides.
 */
export interface A11yGeneratorOptions {
    // -- Product identity --------------------------------------------------

    /** Product name used in descriptions (e.g. `'Telerik UI for Angular'`). */
    productName?: string;

    // -- Component naming --------------------------------------------------

    /**
     * Map of component id → display name overrides.
     * Example: `{ 'dropdownlist': 'DropDownList' }`
     */
    componentNameMap?: Record<string, string>;

    // -- Frontmatter -------------------------------------------------------

    /**
     * Custom frontmatter generator.
     * Receives component metadata and must return key-value pairs.
     * When omitted a default frontmatter is produced.
     */
    frontmatter?: (component: ComponentMeta) => FrontmatterData;

    // -- Links & slugs -----------------------------------------------------

    /**
     * Format for cross-reference links to other component spec pages.
     *
     * - `'slug'`     — `[Label](slug:wai_aria_support_{id})` (Angular)
     * - `'jekyll'`   — `[Label]({% slug accessibility_{id} %})` (React)
     * - `'markdown'` — `[Label](./{id}.md)` (Design System / standalone)
     * - function     — `(targetId, label) => string` for fully custom links
     */
    linkFormat?: 'slug' | 'jekyll' | 'markdown' | ((targetId: string, label: string) => string);

    /**
     * Pattern for generating the page slug.
     * Receives component id and returns the slug string.
     * Default: `(id) => \`wai_aria_support_\${id}\``
     */
    slugPattern?: (componentId: string) => string;

    // -- Section toggles ---------------------------------------------------

    /** Include the Section 508 compliance paragraph. Default: `true`. */
    includeSection508?: boolean;
    /** Include the testing methodology paragraph. Default: `true`. */
    includeTestingSection?: boolean;
    /** Include the keyboard navigation reference link. Default: `true`. */
    includeKeyboardNavRef?: boolean;

    // -- Custom content hooks ----------------------------------------------

    /** Content prepended before the ARIA rules, per component. */
    prependContent?: (component: ComponentMeta) => string | null;
    /** Content appended after all standard sections, per component. */
    appendContent?: (component: ComponentMeta) => string | null;

    // -- Filtering ---------------------------------------------------------

    /** Only generate pages for these component ids (whitelist). */
    includeComponents?: string[];
    /** Skip these component ids (blacklist). */
    excludeComponents?: string[];

    // -- Output path -------------------------------------------------------

    /**
     * Resolve the output file path for a component.
     *
     * Receives the component metadata and returns the absolute or relative
     * path (including filename) where the .md file should be written.
     * This is the primary mechanism for mapping components to the consuming
     * repo's docs folder structure.
     *
     * Example (Angular):
     * ```ts
     * outputPath: (c) => `docs/${categoryOf(c.id)}/${c.id}/accessibility/aria-support_${c.id}.md`
     * ```
     *
     * Example (React):
     * ```ts
     * outputPath: (c) => `apps/docs/${c.id}/accessibility/wai-aria-support.md`
     * ```
     *
     * When omitted the generator returns pages in memory only; the consumer
     * is responsible for writing them to disk.
     */
    outputPath?: (component: ComponentMeta) => string;

    // -- Output format -----------------------------------------------------

    /**
     * Output format.
     * - `'markdown'` — rendered Markdown string (default)
     * - `'json'`     — structured data object
     * - `'both'`     — both markdown and json
     */
    outputFormat?: 'markdown' | 'json' | 'both';
}

// ---------------------------------------------------------------------------
// Generator output
// ---------------------------------------------------------------------------

/** Structured data representation of a generated a11y page. */
export interface A11yDocData {
    componentId: string;
    displayName: string;
    description?: string;
    ariaSpec: AriaSpec;
    seeAlso: CrossReference[];
    sections: A11ySection[];
}

/** A logical section within the page (e.g. "Grid Toolbar", "Grid Header"). */
export interface A11ySection {
    /** Section heading (e.g. `'Grid Toolbar'`). */
    title: string;
    /** Rules belonging to this section. */
    rules: AriaRule[];
}

/** The output produced by the generator for a single component. */
export interface A11yDocPage {
    /** Component identifier. */
    componentId: string;
    /** Display name. */
    displayName: string;
    /** Rendered Markdown string (when outputFormat includes markdown). */
    markdown?: string;
    /** Structured data (when outputFormat includes json). */
    data?: A11yDocData;
    /**
     * Resolved output file path (when `outputPath` is provided in options).
     * Consumers use this to write the file to disk in their repo.
     */
    outputPath?: string;
}
