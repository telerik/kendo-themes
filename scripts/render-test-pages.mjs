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

/**
 * Graceful cleanup handler.
 * Ensures browser and server are closed even on errors.
 *
 * @param {Browser} browser - Browser instance to close
 * @param {Object} server - HTTP server to close
 * @param {Error} [error] - Optional error that triggered cleanup
 */
async function cleanup(browser, server, error) {
    try {
        await browser.close();
    } catch {
        // Ignore browser close errors during cleanup
    }
    try {
        server.close();
    } catch {
        // Ignore server close errors during cleanup
    }
    if (error) {
        // eslint-disable-next-line no-console
        console.error('render-test-pages failed:', error.message);
        process.exitCode = 1;
    }
}

function pathUrl(url) {
    return `http://${HOST}:${PORT}/${path.dirname(url).replace('./', '')}`;
}

async function loadUrl(browser, url) {
    await browser.wait(async() => {
        try {
            await browser.navigateTo(url);
            return true;
        } catch {
            return false;
        }
    }, 10000, `Failed to load ${url}`, 500);
}

function trimScriptTag(content) {
    return content.replace(/<script src=".\/app.js">.*?<\/script>/g, '');
}

const browser = new Browser();
const server = createServer({
    root: './',
    port: PORT
});

server.listen(PORT, HOST, async() => {
    try {
        const files = globSync(`${TESTS_PATH}/!(utils)/**/${COMPONENT_PAGE_EXT}`, { dotRelative: true });
        const pages = files.map(filePath => [ filePath, pathUrl(filePath) ]);

        for (let i = 0; i < pages.length; i++) {
            const [ filePath, url ] = pages[i];

            await loadUrl(browser, url);

            const [ /** index.html */, folderName, /** /tests */, componentName ] = filePath.split('/').reverse();
            const outputPath = `${OUTPUT_PATH}/${componentName}/${folderName}.html`;

            fs.mkdirSync(path.dirname(outputPath), { recursive: true });

            await snapshotMarkup(browser.driver, 'html', outputPath, {
                template: (output) => `<!doctype html>${trimScriptTag(output)}`,
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

        await cleanup(browser, server);
    } catch (error) {
        await cleanup(browser, server, error);
    }
});
