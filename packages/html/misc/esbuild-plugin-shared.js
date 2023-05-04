/* eslint-disable no-console */
const fs = require("fs");
const p = require("path");
const glob = require("glob");

module.exports = ({ dir: sharedDir, main: mainFile }) => ({
    name: "shared",
    setup(build) {
        const initialEntryPoints = build.initialOptions.entryPoints;
        const entryPoints = initialEntryPoints.map((entryPoint) => p.join(p.resolve(p.dirname(entryPoint)), p.basename(entryPoint, p.extname(entryPoint)), mainFile));

        build.initialOptions.entryPoints = entryPoints;

        const entryPointsRegex = new RegExp(`(${entryPoints.join("|")})`);

        const sharedMain = p.join(sharedDir, mainFile);
        const sharedApp = fs.readFileSync(sharedMain, "utf-8");

        build.onStart(() => {
            if (fs.existsSync(build.initialOptions.outdir)) {
                fs.rmSync(build.initialOptions.outdir, {
                    recursive: true,
                });
            }
        });

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

        build.onEnd((args) => {
            if (args.errors.length > 0) {
                // eslint-disable-next-line no-console
                console.error(args.errors);
            } else {
                Object.keys(args.metafile.outputs).forEach((key) => {
                    const output = args.metafile.outputs[key];
                    // console.log(output);
                    if (output.entryPoint) {
                        const destination = p.resolve(key);
                        const dirname = p.dirname(destination);
                        const statics = glob.sync(`${sharedDir}/**/*.{html,css,png,jpg,jpeg,gif,svg,js}`);

                        statics.forEach((file) => {
                            const filename = p.join(dirname, p.basename(file));
                            if (!fs.existsSync(filename)) {
                                fs.copyFileSync(file, filename);
                            }
                        });
                    }
                });
                console.info("Compilation successful!");
            }
        });
    },
});
