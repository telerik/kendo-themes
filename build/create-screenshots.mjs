#!/usr/bin/env node
import glob from 'glob';
import { capture } from 'pastshots/capture.js';
import { createServer } from 'http-server';

const THEME = process.env.THEME;
const THEME_DIR = process.env.THEME_DIR;
const pages = glob.sync(`${THEME_DIR}/**/*.html`);
const HOST = 'localhost';
const PORT = 18111;
const OUTPUT_PATH = `./tests/_output/${THEME}`;

function arrayChunks( array, chunkCount ) {
    const result = [];
    const chunkSize = Math.ceil(array.length / chunkCount);

    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }

    return result;
}

const chunks = arrayChunks(pages, 2);

Promise.all(chunks.map(async( chunk, index ) => {
    let port = PORT + index;

    const server = createServer({
        root: './',
        port: port
    });

    server.listen(port, HOST, async() => {
        capture({
            host: `http://${HOST}:${port}/`,
            browser: 'firefox',
            output: OUTPUT_PATH,
            root: THEME_DIR,
            pages: chunk,
            viewportSize: { width: 1200, height: 768 },
            selector: '#test-area',
            tolerance: 1,
            createDiff: false
        }).then(() => {
            server.close();
        });
    });

}));
