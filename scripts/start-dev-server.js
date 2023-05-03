const esbuild = require("esbuild");
const p = require("path");
const fs = require("fs-extra");
const glob = require("glob");
const http = require("node:http");

const SCRIPT_PATH = "%SCRIPT_PATH%";

const extension = `tsx`;
const entryPoints = glob.sync(`./packages/html/src/**/tests/**/*.${extension}`);

const entiresMap = new Set();
entryPoints.forEach((point) => entiresMap.add(point));

(async() => {
    const ctx = await esbuild.context({
        logLevel: "error",
        entryPoints: entryPoints,
        outdir: "./tmp",
        bundle: true,
        minify: false,
        sourcemap: false,
    });

    await ctx.watch();
    const { host, port } = await ctx.serve({
        servedir: ".",
    });

    const html = fs.readFileSync(p.resolve("./shared/dev.html"), "utf-8");

    http.createServer((req, res) => {
        const options = {
            hostname: host,
            port: port,
            path: req.url,
            method: req.method,
            headers: req.headers,
        };

        // Forward each incoming request to esbuild
        const proxyReq = http.request(options, (proxyRes) => {
            const url = new URL(req.url, `http://${options.headers.host}`);

            if (options.path === "/") {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(`<ul>${entryPoints.map((entryPoint) => `<li><a href="${entryPoint}">${entryPoint}</a></li>`).join("")}</ul>`);
                return;
            }

            if (entiresMap.has(url.pathname.replace(/^./, ""))) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(html.replace(SCRIPT_PATH, `${options.path.replace("/packages/html/src", "/tmp").replace(`.${extension}`, `.js`)}`));
                return;
            }

            // Otherwise, forward the response from esbuild to the client
            res.writeHead(proxyRes.statusCode, proxyRes.headers);
            proxyRes.pipe(res, { end: true });

            return;
        });

        // Forward the body of the request to esbuild
        req.pipe(proxyReq, { end: true });
    }).listen(3000);

    // eslint-disable-next-line no-console
    console.log("Listening on: ", "http://localhost:3000");
})();
