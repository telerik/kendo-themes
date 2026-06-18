import React from 'react';
import { segmentize } from '../lib/fuzzy';

/** Renders `text` with the fuzzy-matched character ranges emphasized. */
export function Highlight({ text, matched }: { text: string; matched: number[] }) {
    return (
        <>
            {segmentize(text, matched).map((seg, i) =>
                seg.match
                    ? <span key={i} className="devkit-hl">{seg.text}</span>
                    : <span key={i}>{seg.text}</span>
            )}
        </>
    );
}
