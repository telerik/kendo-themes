#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Minimal performance benchmark for SCSS compilation.
 * Outputs structured timing logs (JSON lines) for baseline capture.
 *
 * Usage:
 *   node scripts/perf-benchmark.js [--reps N]
 *
 * Structured output fields:
 *   { op, phase, elapsedMs, timestamp, rep?, stats? }
 */

const { execSync } = require('child_process');

const REPS = parseInt(process.argv.find((_, i, a) => a[i - 1] === '--reps') || '3', 10);

function log(entry) {
    console.log(JSON.stringify({ ...entry, timestamp: new Date().toISOString() }));
}

function runTimed(op, phase, cmd) {
    const start = process.hrtime.bigint();
    try {
        execSync(cmd, { stdio: 'pipe', cwd: process.cwd() });
    } catch (err) {
        log({ op, phase, error: err.message, elapsedMs: -1 });
        return -1;
    }
    const elapsedMs = Number(process.hrtime.bigint() - start) / 1e6;
    return elapsedMs;
}

function stats(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const mean = arr.reduce((s, v) => s + v, 0) / arr.length;
    const variance = arr.reduce((s, v) => s + (v - mean) ** 2, 0) / arr.length;
    const stddev = Math.sqrt(variance);
    return {
        mean: Math.round(mean),
        min: Math.round(sorted[0]),
        max: Math.round(sorted[sorted.length - 1]),
        stddev: Math.round(stddev),
        cvPercent: Math.round((stddev / mean) * 100)
    };
}

async function main() {
    log({ op: 'benchmark', phase: 'start', reps: REPS });

    // Clean dist folders before benchmarking
    log({ op: 'clean', phase: 'start' });
    runTimed('clean', 'exec', 'npm run clean:dist');
    log({ op: 'clean', phase: 'end' });

    const times = [];

    for (let rep = 1; rep <= REPS; rep++) {
        // Clean before each rep for fair comparison
        runTimed('clean', 'rep-clean', 'npm run clean:dist');

        log({ op: 'sass', phase: 'start', rep });
        const elapsedMs = runTimed('sass', 'compile', 'npm run sass');
        log({ op: 'sass', phase: 'end', rep, elapsedMs });

        if (elapsedMs > 0) {
            times.push(elapsedMs);
        }
    }

    if (times.length > 0) {
        const s = stats(times);
        log({ op: 'sass', phase: 'summary', stats: s, reps: times.length });
    }

    log({ op: 'benchmark', phase: 'end' });
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
