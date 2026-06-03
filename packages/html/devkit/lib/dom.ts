/** Shared DOM helpers for the devkit. */

/** True when the event target is a field that should swallow global shortcuts. */
export function isEditable(target: EventTarget | null): boolean {
    const el = target as HTMLElement | null;
    if (!el) return false;
    return ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName) || el.isContentEditable;
}
