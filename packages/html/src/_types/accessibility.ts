/**
 * A single ARIA attribute rule applied to a component element.
 */
export interface AriaRule {
    /** CSS selector for the element that carries this attribute. */
    selector: string;

    /** ARIA attribute name, or array of alternative attribute names (e.g. `["aria-label", "aria-labelledby"]`). */
    attribute: string | string[];

    /** Single value or array of valid values (e.g. `"button"` or `["true", "false", "mixed"]`). */
    value?: string | string[];

    /** Native HTML attribute that serves the same purpose (e.g. `"disabled"` for `aria-disabled`). */
    nativeAttribute?: string;

    /** Native HTML element that provides the same implicit semantics (e.g. `"button"` for `role="button"`). */
    nativeElement?: string;

    /** Human-readable explanation of why this attribute is applied. Required. */
    usage: string;
}

/**
 * A single keyboard interaction rule.
 */
export interface KbRule {
    /**
     * The key or key combination that triggers the behavior.
     * Uses `KeyboardEvent.key` names (e.g. `"ArrowDown"`, `"Enter"`, `"Escape"`).
     * Combinations use ` + ` (e.g. `"Shift + Tab"`).
     * Alternatives use ` or ` (e.g. `"Enter or Space"`).
     * Platform variants use `Control/Cmd(Mac)` and `Alt/Opt(Mac)` notation.
     */
    trigger: string;

    /** Description of the action that occurs when the trigger fires. */
    behavior: string;
}

/**
 * A single user-experience interaction rule.
 */
export interface UxRule {
    /** Optional description of the user action that triggers the behavior. */
    trigger?: string;

    /** Description of the resulting behavior. */
    behavior: string;
}
