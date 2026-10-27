#!/usr/bin/env node
/* eslint-disable no-console */
import { chromium } from 'playwright';
import { JSDOM } from 'jsdom';
import { createServer } from 'http-server';
import { globSync } from 'glob';
import fs from 'fs';
import path from 'path';
import { formatHtml } from './utils/format-html.mjs';

const PORT = 18111;
const HOST = 'localhost';
const TESTS_PATH = './packages/html/dist';
const OUTPUT_PATH = './tests';
const COMPONENT_PAGE_EXT = 'app.js';

// Get component name from command line arguments
const componentArg = process.argv[2];
const componentFilter = componentArg ? `${componentArg}` : null;

function pathUrl(url) {
    return `http://${HOST}:${PORT}/${path.dirname(url).replace('./', '')}`;
}

async function loadUrl(page, url) {
    const deadline = Date.now() + 10000;

    for (;;) {
        try {
            await page.goto(url, { waitUntil: 'load' });
            return;
        } catch (err) {
            if (Date.now() > deadline) {
                throw new Error(`Failed to load ${url}`, { cause: err });
            }
            await page.waitForTimeout(500);
        }
    }
}

function trimScriptTag(content) {
    return content.replace(/<script src=".\/app.js">.*?<\/script>/g, '');
}

const server = createServer({
    root: './',
    port: PORT
});

server.listen(PORT, HOST, async() => {
    // Build glob pattern based on component filter
    const globPattern = componentFilter
        ? `${TESTS_PATH}/${componentFilter}/**/${COMPONENT_PAGE_EXT}`
        : `${TESTS_PATH}/!(utils)/**/${COMPONENT_PAGE_EXT}`;

    const files = globSync(globPattern, { dotRelative: true });

    if (files.length === 0) {
        console.error(`No test pages found matching pattern: ${globPattern}`);
        console.error(componentFilter
            ? `Component "${componentFilter}" has no test pages. Check that ${TESTS_PATH}/${componentFilter}/ exists and contains ${COMPONENT_PAGE_EXT} files.`
            : `No test pages found in ${TESTS_PATH}/. Run "npm run build:tests" first.`
        );
        server.close();
        process.exit(1);
    }

    // Playwright hides scrollbars in headless mode by default, which changes layout-dependent markup.
    const browser = await chromium.launch({ ignoreDefaultArgs: [ '--hide-scrollbars' ] });
    const page = await browser.newPage({ viewport: { width: 1366, height: 768 }, deviceScaleFactor: 1 });

    const pages = files.map(path => [ path, pathUrl(path) ]);

    for (let i = 0; i < pages.length; i++) {
        const [ filePath, url ] = pages[i];

        await loadUrl(page, url);

        const [ /** index.html */, folderName, /** /tests */, componentName ] = filePath.split('/').reverse();
        const outputPath = `${OUTPUT_PATH}/${componentName}/${folderName}.html`;

        fs.mkdirSync(path.dirname(outputPath), { recursive: true });

        const source = await page.evaluate(() => document.documentElement.outerHTML);
        // Round-trip through a parser so the serialization is normalized.
        const { outerHTML } = new JSDOM(source).window.document.documentElement;

        fs.writeFileSync(outputPath, formatHtml(`<!doctype html>${trimScriptTag(outerHTML)}`));
    }

    await browser.close();
    server.close();
});
