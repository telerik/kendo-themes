const esbuild = require("esbuild");
const glob = require("glob");
const config = require("../packages/html/scripts/config");

const extension = `tsx`;
const entryPoints = glob.sync(`./packages/html/src/**/tests/**/*.${extension}`, { dotRelative: true });

const entiresMap = new Set();
entryPoints.forEach((point) => entiresMap.add(point));

(async() => {
    const ctx = await esbuild.context(config(entryPoints));

    await ctx.watch();
    const { port } = await ctx.serve({
        servedir: "./",
        port: 3000,
    });

    // eslint-disable-next-line no-console
    console.log("Listening on: ", `http://localhost:${port}`);
})();
