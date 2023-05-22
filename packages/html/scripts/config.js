const p = require("path");
const shared = require("../misc/esbuild-plugin-shared");
module.exports = (entryPoints) =>
    ({
        logLevel: "error",
        entryPoints: entryPoints,
        loader: { [".css"]: "css" },
        outdir: p.join(__dirname, '../dist'),
        bundle: true,
        minify: false,
        metafile: true,
        sourcemap: false,
        plugins: [ shared({ dir: p.resolve(p.join(__dirname, "../shared")), main: "app.tsx" }) ],
    });
