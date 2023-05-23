/* eslint-disable no-console */
const p = require("path");
const chokidar = require("chokidar");
const { exec } = require("child_process");

(() => {
    const root = process.cwd();
    const watch = `${p.join(root, "scss")}/**/*.scss`;

    const watcher = chokidar.watch(watch, {
        cwd: root,
    });

    const build = () => {
        console.clear();
        console.log("Compiling theme...");
        exec(
            "npm run build",
            {
                cwd: root,
            },
            (error, stdout, stderr) => {
                console.clear();
                if (error) {
                    console.error(error);
                    return;
                }
                console.info(stdout);
                console.error(stderr);
            }
        );
    };

    build();
    watcher.on("change", () => {
        build();
    });
})();
