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
const COMPONENT_PAGE_EXT = '.html';

function pathUrl(path) {
    return `http://${HOST}:${PORT}/${path.replace('./', '')}`;
}

// TODO: enable for all components
const files = globSync(`${TESTS_PATH}/button/**/*${COMPONENT_PAGE_EXT}`, { dotRelative: true });
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

        for (let i = 0; i < chunk.length; i++) {
            const [ filePath, url ] = chunk[i];

            await browser.navigateTo(url);

            const [ /** index.html */, folderName, /** /tests */, componentName ] = filePath.split('/').reverse();
            const outputPath = `${OUTPUT_PATH}/${componentName}/${folderName}.html`;

            fs.mkdirSync(path.dirname(outputPath), { recursive: true });

            await snapshotMarkup(browser.driver, 'html', outputPath, {
                template: (output) => `<!doctype html>${output
                    .replace('./styles.css', path.join('/', path.dirname(filePath), 'styles.css'))
                    .replace('./scripts.js', path.join('/', path.dirname(filePath), 'scripts.js'))
                }`,
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
