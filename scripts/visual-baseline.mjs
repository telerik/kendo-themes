import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, rmSync } from 'node:fs';

// tests/_output is git-tracked, so the baseline is whatever the given ref
// (default: the last commit) holds there - export it to a scratch folder.
export function exportBaseline(dest = '.reg/expected', ref = 'HEAD') {
    const tmp = '.reg/base';
    rmSync(dest, { recursive: true, force: true });
    rmSync(tmp, { recursive: true, force: true });
    mkdirSync(dest, { recursive: true });
    mkdirSync(tmp, { recursive: true });
    try {
        const tar = execFileSync('git', ['archive', ref, 'tests/_output'], { maxBuffer: 1024 * 1024 * 1024 });
        execFileSync('tar', ['-x', '-C', tmp], { input: tar });
        cpSync(`${tmp}/tests/_output`, dest, { recursive: true });
    } catch {
        console.warn(`No tests/_output at ${ref}; treating the baseline as empty.`);
    } finally {
        rmSync(tmp, { recursive: true, force: true });
    }
    return dest;
}
