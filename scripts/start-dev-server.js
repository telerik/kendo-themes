const esbuild = require("esbuild");
const glob = require("glob");
const config = require("../packages/html/scripts/config");
const http = require("node:http");
const fs = require("fs");
const path = require("path");

const extension = `tsx`;
const entryPoints = glob.sync(`./packages/html/src/{**/tests,!(utils)/templates}/**/*.${extension}`, { dotRelative: true });
const index = fs.readFileSync("./packages/html/shared/index.html", "utf-8");

const entiresMap = new Set();
entryPoints.forEach((point) => entiresMap.add(point));

(async() => {
    if (fs.existsSync(path.resolve("./packages/html/dist"))) {
        fs.rmSync(path.resolve("./packages/html/dist"), {
            recursive: true,
        });
    }

    const ctx = await esbuild.context(config(entryPoints));
    await ctx.rebuild();

    const { host, port } = await ctx.serve({
        servedir: "./",
        port: 8000,
    });
    const outputs = glob.sync(`./packages/html/dist/{**/tests,!(utils)/templates}/**/app.js`, { dotRelative: false });

    // Then start a proxy server on port 3000
    http.createServer((req, res) => {
        const tests = outputs.map(t => t.replace(/\\/g, '/')).map((point) => path.dirname(point));

        const options = {
            hostname: host,
            port: port,
            path: req.url,
            method: req.method,
            headers: req.headers,
        };

        // const url = new URL(req.url);

        // Forward each incoming request to esbuild
        const proxyReq = http.request(options, (proxyRes) => {
            const url = new URL(`http://localhost:3000${req.url}`);

            if (tests.findIndex((t) => url.pathname === `/${t}/`) !== -1) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(index);
                return;
            }

            // Otherwise, forward the response from esbuild to the client
            res.writeHead(proxyRes.statusCode, proxyRes.headers);
            proxyRes.pipe(res, { end: true });
        });

        // Forward the body of the request to esbuild
        req.pipe(proxyReq, { end: true });
    }).listen(3000);

    // eslint-disable-next-line no-console
    console.log("Listening on: ", `http://localhost:3000`);
})();
