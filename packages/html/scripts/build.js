const esbuild = require("esbuild");
const fs = require("fs");
const p = require("path");
const { globSync } = require("glob");

const components = globSync("./src/**/*.tsx", { dotRelative: true });
components.push("./src/index.ts");

const commonConfig = {
    logLevel: "verbose",
    entryPoints: components,
    jsx: "automatic",
    bundle: true,
    minify: false,
    sourcemap: false,
    external: [ "react", "react-dom", "@progress/kendo-svg-icons" ],
};

(async() => {
    const dist = p.resolve("./dist");
    if (!fs.existsSync(p.resolve("./dist"))) {
        fs.mkdirSync(dist);
    }
    await Promise.allSettled(
        [
            { ...commonConfig, format: "esm", target: "esnext", outdir: "./dist/esm", outExtension: { ".js": ".mjs" } },
            {
                ...commonConfig,
                format: "cjs",
                target: "node14",
                outdir: "./dist/cjs",
            },
        ].map(
            (config) =>
                new Promise((resolve) => {
                    esbuild
                        .build(config)
                        .then(resolve)
                        .catch((err) => {
                            throw new Error(err);
                        });
                })
        )
    );
})();
