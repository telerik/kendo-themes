/**
 * Tiny zero-dependency fuzzy matcher. Matches `query` as a subsequence of
 * `text`, rewarding consecutive runs and word-boundary hits so that e.g.
 * "btnsolid" ranks "button-solid" highly. Returns `null` when there is no match.
 */

export interface FuzzyResult {
    /** Higher is better. */
    score: number;
    /** Indices in `text` that were matched, ascending. */
    matched: number[];
}

const BOUNDARY = /[-_/\s.]/;

export function fuzzyMatch(query: string, text: string): FuzzyResult | null {
    if (!query) return { score: 0, matched: [] };

    const q = query.toLowerCase();
    const t = text.toLowerCase();
    const matched: number[] = [];

    let score = 0;
    let qi = 0;
    let prevIndex = -1;

    for (let ti = 0; ti < t.length && qi < q.length; ti++) {
        if (t[ti] !== q[qi]) continue;

        let bonus = 1;
        if (prevIndex === ti - 1) bonus += 4; // consecutive run
        if (ti === 0 || BOUNDARY.test(t[ti - 1])) bonus += 3; // word boundary
        score += bonus;

        matched.push(ti);
        prevIndex = ti;
        qi++;
    }

    if (qi < q.length) return null; // not all query chars consumed

    // Reward shorter targets and a match that starts early.
    score += Math.max(0, 12 - (matched[0] ?? 0));
    score -= t.length * 0.05;

    return { score, matched };
}

/**
 * Splits `text` into alternating plain / matched segments based on `matched`
 * indices, ready to render with the matched parts highlighted.
 */
export interface Segment {
    text: string;
    match: boolean;
}

export function segmentize(text: string, matched: number[]): Segment[] {
    if (!matched.length) return [{ text, match: false }];

    const hit = new Set(matched);
    const segments: Segment[] = [];
    let buf = '';
    let bufMatch = hit.has(0);

    for (let i = 0; i < text.length; i++) {
        const isMatch = hit.has(i);
        if (isMatch !== bufMatch) {
            if (buf) segments.push({ text: buf, match: bufMatch });
            buf = '';
            bufMatch = isMatch;
        }
        buf += text[i];
    }
    if (buf) segments.push({ text: buf, match: bufMatch });
    return segments;
}
