// Indents serialized DOM markup (outerHTML) one tag per line. Expects well-formed input.

const VOID_ELEMENTS = new Set([
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
    'link', 'meta', 'param', 'source', 'track', 'wbr'
]);

// Content is kept verbatim (only trimmed per line) and never collapsed onto the tag line.
const RAW_TEXT_ELEMENTS = new Set([ 'pre', 'code', 'textarea', 'script', 'style' ]);

const tagName = (tag) => (tag.match(/^<\/?([a-zA-Z][a-zA-Z0-9-]*)/)?.[1] ?? '').toLowerCase();

// Index of the `>` that ends the tag starting at `start`, skipping quoted attribute values.
function findTagEnd(html, start) {
    let quote = null;

    for (let i = start + 1; i < html.length; i++) {
        const ch = html[i];

        if (quote) {
            if (ch === quote) { quote = null; }
        } else if (ch === '"' || ch === '\'') {
            quote = ch;
        } else if (ch === '>') {
            return i;
        }
    }

    return -1;
}

function tokenize(html) {
    const tokens = [];
    const lower = html.toLowerCase();
    let pos = 0;

    while (pos < html.length) {
        if (html[pos] !== '<') {
            const next = html.indexOf('<', pos);
            const end = next === -1 ? html.length : next;
            const text = html.slice(pos, end);

            if (text.trim()) { tokens.push({ type: 'text', value: text }); }
            pos = end;
            continue;
        }

        if (lower.startsWith('<!doctype', pos)) {
            const end = html.indexOf('>', pos);

            if (end !== -1) {
                tokens.push({ type: 'doctype', value: html.slice(pos, end + 1) });
                pos = end + 1;
                continue;
            }
        }

        if (html.startsWith('<!--', pos)) {
            const end = html.indexOf('-->', pos);

            if (end !== -1) {
                tokens.push({ type: 'comment', value: html.slice(pos, end + 3) });
                pos = end + 3;
                continue;
            }
        }

        const end = findTagEnd(html, pos);

        if (end === -1) {
            tokens.push({ type: 'text', value: html[pos] });
            pos++;
            continue;
        }

        const tag = html.slice(pos, end + 1);
        pos = end + 1;

        if (tag.startsWith('</')) {
            tokens.push({ type: 'close', value: tag });
            continue;
        }

        const name = tagName(tag);

        if (VOID_ELEMENTS.has(name) || tag.endsWith('/>')) {
            tokens.push({ type: 'void', value: tag });
            continue;
        }

        tokens.push({ type: 'open', value: tag });

        if (RAW_TEXT_ELEMENTS.has(name)) {
            const closeTag = `</${name}>`;
            const closeAt = lower.indexOf(closeTag, pos);

            if (closeAt !== -1) {
                const content = html.slice(pos, closeAt);

                if (content.trim()) { tokens.push({ type: 'raw', value: content }); }
                tokens.push({ type: 'close', value: html.slice(closeAt, closeAt + closeTag.length) });
                pos = closeAt + closeTag.length;
            }
        }
    }

    return tokens;
}

export function formatHtml(html, { indentSize = 4 } = {}) {
    const indent = ' '.repeat(indentSize);
    const tokens = tokenize(html);
    const lines = [];
    let level = 0;

    const push = (text) => lines.push(indent.repeat(level) + text);

    for (let i = 0; i < tokens.length; i++) {
        const { type, value } = tokens[i];
        const next = tokens[i + 1];
        const afterNext = tokens[i + 2];

        switch (type) {
            case 'close':
                level = Math.max(0, level - 1);
                push(value.trim());
                break;
            case 'open':
                if (next?.type === 'close') {
                    push(value.trim() + next.value.trim());
                    i += 1;
                } else if (next?.type === 'text' && afterNext?.type === 'close') {
                    push(value.trim() + next.value.trim() + afterNext.value.trim());
                    i += 2;
                } else {
                    push(value.trim());
                    level++;
                }
                break;
            case 'raw':
                for (const line of value.split('\n')) {
                    if (line.trim()) { push(line.trim()); }
                }
                break;
            case 'text':
                push(value.trim());
                break;
            default:
                push(value.trim());
        }
    }

    return lines.join('\n');
}
