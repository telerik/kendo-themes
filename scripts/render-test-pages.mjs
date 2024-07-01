#!/usr/bin/env node
import { Browser, snapshotMarkup } from '@progress/kendo-e2e';
import { createServer } from 'http-server';
import { globSync } from 'glob';
import fs from 'fs';
import path from 'path';

const PORT = 18111;
const HOST = 'localhost';
const BASE_PATH = './packages/html/dist';
const COMPONENT_PAGE_EXT = 'app.js';

function pathUrl(url) {
    return `http://${HOST}:${PORT}/${path.dirname(url).replace('./', '')}`;
}

async function loadUrl(browser, url) {
    await browser.wait(async() => {
        try {
            await browser.navigateTo(url);
            return true;
        } catch (error) {
            return false;
        }
    }, 10000, `Failed to load ${url}`, 500);
}

const browser = new Browser();
const server = createServer({
    root: './',
    port: PORT
});

server.listen(PORT, HOST, async() => {
    const files = globSync(`${BASE_PATH}/{!(utils)/tests,!(utils)/templates}/**/${COMPONENT_PAGE_EXT}`, { dotRelative: true });

    const pages = files.map(path => [ path, pathUrl(path) ]);

    for (let i = 0; i < pages.length; i++) {
        const [ filePath, url ] = pages[i];

        await loadUrl(browser, url);

        const [ /** index.html */, folderName, type, componentName ] = filePath.split(/[\\/]+/).reverse();

        const outputPath = `./${type}/${componentName}/${folderName}.html`;

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
