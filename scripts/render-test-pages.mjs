#!/usr/bin/env node
import { Browser, snapshotMarkup } from '@progress/kendo-e2e';
import { createServer } from 'http-server';
import { globSync } from 'glob';
import fs from 'fs';
import path from 'path';

const PORT = 18111;
const HOST = 'localhost';
const TESTS_PATH = './packages/html/dist';
const OUTPUT_PATH = './tests';
const COMPONENT_PAGE_EXT = 'app.js';

function pathUrl(url) {
    return `http://${HOST}:${PORT}/${path.dirname(url).replace('./', '')}`;
}

const files = globSync(`${TESTS_PATH}/!(utils)/**/${COMPONENT_PAGE_EXT}`, { dotRelative: true });
const pages = files.map(path => [ path, pathUrl(path) ]);

function arrayChunks( array, chunkCount ) {
    const result = [];
    const chunkSize = Math.ceil(array.length / chunkCount);

    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }

    return result;
}

const chunks = arrayChunks(pages, 8);

Promise.all(chunks.map(async( chunk, index ) => {
    let port = PORT + index;

    const browser = new Browser();
    const server = createServer({
        root: './',
        port: port
    });

    server.listen(port, HOST, async() => {

        await browser.sleep(1000);

        for (let i = 0; i < chunk.length; i++) {
            const [ filePath, url ] = chunk[i];

            await browser.navigateTo(url);

            const [ /** index.html */, folderName, /** /tests */, componentName ] = filePath.split('/').reverse();
            const outputPath = `${OUTPUT_PATH}/${componentName}/${folderName}.html`;

            fs.mkdirSync(path.dirname(outputPath), { recursive: true });

            await snapshotMarkup(browser.driver, 'html', outputPath, {
                template: (output) => `<!doctype html>${output}`,
                preserveAttributes: true,
                preserveCommentNodes: true,
                beautifyOptions: {
                    /* eslint-disable camelcase */
                    newline_between_rules: false,
                    brace_style: 'collapse',
                    indent_size: 4,
                    inline: [],
                    extra_liners: [],
                    preserve_newlines: false,
                    end_with_newline: true
                    /* eslint-enable */
                }
            });
        }

        await browser.close();
        server.close();
    });
}));
