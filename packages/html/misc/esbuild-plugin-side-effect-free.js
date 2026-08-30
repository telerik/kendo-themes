/* eslint-disable curly */
const fs = require("fs");
const p = require("path");

const srcDir = p.resolve(p.join(__dirname, "../src"));
const INDEX_EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"];

/**
 * esbuild plugin that marks barrel (index) imports as side-effect free.
 *
 * By default esbuild conservatively keeps every module pulled in through
 * `export * from '…'` barrel re-exports because it cannot prove they are
 * free of side effects. Since all barrel files in the HTML package are pure
 * re-exports with no top-level side effects, this plugin tells esbuild it
 * is safe to tree-shake unused re-exports.
 *
 * Only intercepts imports that resolve to a directory (i.e. an index file),
 * using a cheap sync fs check instead of async resolution.
 */
module.exports = () => ({
    name: "side-effect-free",
    setup(build) {
        build.onResolve({ filter: /\.\.?(?:\/[^.][^/]*)?$/ }, (args) => {
            const resolved = p.resolve(args.resolveDir, args.path);

            // Only handle directories inside src/ (barrel/index imports)
            if (!resolved.startsWith(srcDir)) return null;

            let stat;
            try { stat = fs.statSync(resolved); } catch { return null; }
            if (!stat.isDirectory()) return null;

            // Find the index file
            for (const ext of INDEX_EXTENSIONS) {
                const indexPath = p.join(resolved, "index" + ext);
                if (fs.existsSync(indexPath)) {
                    return { path: indexPath, sideEffects: false };
                }
            }

            return null;
        });
    },
});
