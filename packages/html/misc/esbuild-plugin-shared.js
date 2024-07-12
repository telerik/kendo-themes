const fs = require("fs");
const p = require("path");

module.exports = ({ dir: sharedDir, main: mainFile }) => ({
    name: "shared",
    setup(build) {
        const initialEntryPoints = build.initialOptions.entryPoints;
        const entryPoints = initialEntryPoints.map((entryPoint) => p.join(p.resolve(p.dirname(entryPoint)), p.basename(entryPoint, p.extname(entryPoint)), mainFile));

        build.initialOptions.entryPoints = entryPoints;

        // Esbuild will parse this to a GO Regex which causes Windows paths to fail.
        const entryPointsRegex = new RegExp(`(${entryPoints.map(e => e.replace(/\\/g, '[\\\\]')).join("|")})`, 'g');

        const sharedMain = p.join(sharedDir, mainFile);
        const sharedApp = fs.readFileSync(sharedMain, "utf-8");

        build.onResolve({ filter: entryPointsRegex }, (args) => {
            const path = p.resolve(args.path);
            return { path: path, namespace: "file" };
        });

        build.onLoad({ filter: entryPointsRegex }, (args) => {
            const ext = p.extname(args.path);

            const dirname = p.dirname(args.path);
            const filename = p.basename(dirname);
            const modifiedContent = sharedApp.replace("%MAIN_FILE%", `./${filename}`);

            return {
                watchFiles: [ args.path ],
                contents: modifiedContent,
                loader: ext.replace(/^./, ""),
                resolveDir: p.dirname(dirname),
            };
        });


    },
});
