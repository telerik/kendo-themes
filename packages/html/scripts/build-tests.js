const p = require("path");
const fs = require("fs");
const esbuild = require("esbuild");
const { globSync } = require("glob");
const config = require("./config");

const tests = globSync("./src/{**/tests,!(utils)/templates}/**/*.tsx", { dotRelative: true });

const index = fs.readFileSync(p.resolve("./shared/index.html"), "utf-8");

(async() => {
    const result = await esbuild.build(config(tests));
    Object.keys(result.metafile.outputs).forEach((output) => {
        const outputPath = p.resolve(output);
        const dir = p.dirname(outputPath);
        const dest = p.join(dir, "index.html");
        if (fs.existsSync(dest)) {
            fs.rmSync(dest);
        }

        fs.writeFileSync(dest, index);
    });
})();
