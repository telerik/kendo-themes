/**
 * A single keyboard interaction rule.
 * Shape produced by parsing @keyboard JSDoc annotations.
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

/**
 * A reference link to an external resource (e.g. WAI-ARIA spec).
 */
export interface ResourceLink {
    /** Display text for the link. */
    text: string;

    /** URL of the resource. */
    url: string;
}
