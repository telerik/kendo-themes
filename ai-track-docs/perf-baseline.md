# Performance Baseline

Captured: 2026-01-09

## Identified Hotspot

**SCSS Compilation** (`npm run sass`) - compiles all 7 theme packages via Nx parallel execution.

## Benchmark Script

```bash
node scripts/perf-benchmark.js --reps 5
```

Outputs structured JSON logs with fields: `{ op, phase, elapsedMs, timestamp, rep?, stats? }`

## Baseline Results

| Metric | Value |
|--------|-------|
| **Mean** | 627 ms |
| **Min** | 599 ms |
| **Max** | 649 ms |
| **Stddev** | 17 ms |
| **CV (variance)** | 3% |
| **Reps** | 5 |

### Raw Output (warm cache)

```json
{"op":"sass","phase":"summary","stats":{"mean":627,"min":599,"max":649,"stddev":17,"cv_percent":3},"reps":5}
```

## Variance Notes

- **Cold cache penalty**: First run after `nx reset` or cache invalidation takes ~5s (vs ~600ms warm)
- **Nx caching**: Compilation is cached per-package; unchanged packages skip recompilation
- **CV < 5%**: Numbers are stable enough for regression detection
- **Environment**: macOS, Node.js, dart-sass

## How to Reproduce

```bash
# Clean dist folders first
npm run clean:dist

# Run benchmark with 5 repetitions
node scripts/perf-benchmark.js --reps 5
```

## Next Steps

- Consider instrumenting individual package compilation times
- Track docs generation (`npm run docs`) if needed
- Set up CI integration for automated tracking
