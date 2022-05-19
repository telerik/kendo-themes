#!/usr/bin/env node
import { Browser, snapshotMarkup } from '@progress/kendo-e2e';
import { createServer } from 'http-server';
import { promisify } from 'util';
import { default as cbGlob } from 'glob';
import { mkdir } from 'fs/promises';
import path from 'path';
const glob = promisify(cbGlob);

const PORT = 18111;
const HOST = 'localhost';
const TESTS_PATH = './packages/html/src';
const OUTPUT_PATH = './tests';
const COMPONENT_PAGE_EXT = '.html';

const browser = new Browser();
const server = createServer({
    root: './',
    port: PORT
});

const pathUrl = path => `http://${HOST}:${PORT}/${path.replace('./', '')}`;

server.listen(PORT, HOST, async() => {
    const files = await glob(`${TESTS_PATH}/**/*${COMPONENT_PAGE_EXT}`);
    const pages = files.map(path => [ path, pathUrl(path) ]);

    for (let i = 0; i < pages.length; i++) {
        const [ filePath, url ] = pages[i];

        await browser.navigateTo(url);

        const fileName = path.basename(filePath);
        const folderName = path.basename(path.dirname(path.dirname(filePath)));
        const outputPath = `${OUTPUT_PATH}/${folderName}/${fileName}`;

        await mkdir(path.dirname(outputPath), { recursive: true });

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

