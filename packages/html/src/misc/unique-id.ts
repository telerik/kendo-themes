const counters: Record<string, number> = {};

/**
 * Generates a deterministic, page-unique ID for a component.
 * Pattern: `k-{prefix}-{n}` where n increments per prefix.
 *
 * @example
 * nextId('tooltip')       // 'k-tooltip-1'
 * nextId('tooltip')       // 'k-tooltip-2'
 * nextId('notification')  // 'k-notification-1'
 */
export function nextId(prefix: string): string {
    counters[prefix] = (counters[prefix] || 0) + 1;
    return `k-${prefix}-${counters[prefix]}`;
}
