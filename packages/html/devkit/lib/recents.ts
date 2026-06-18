/**
 * Recently-visited demos, persisted in localStorage. Used to populate the
 * command palette when the query is empty.
 */

export interface RecentDemo {
    component: string;
    test: string;
}

const KEY = 'devkit:recents';
const LIMIT = 8;

export function getRecents(): RecentDemo[] {
    try {
        const raw = localStorage.getItem(KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.slice(0, LIMIT) : [];
    } catch {
        return [];
    }
}

export function pushRecent(component: string, test: string): void {
    try {
        const next = [
            { component, test },
            ...getRecents().filter(r => !(r.component === component && r.test === test)),
        ].slice(0, LIMIT);
        localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
        /* storage unavailable — recents are best-effort */
    }
}
