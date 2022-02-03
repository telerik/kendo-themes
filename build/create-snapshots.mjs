#!/usr/bin/env node
import { Browser, snapshotMarkup } from '@progress/kendo-e2e';
import { createServer } from 'http-server';
import { promisify } from 'util';
import { default as cbGlob } from 'glob';
const glob = promisify(cbGlob);

const PORT = 18111;
const HOST = 'localhost';
const TESTS_PATH = './tests/visual/src/reference';
const COMPONENT_PAGE_EXT = '.comp.html';

const browser = new Browser();
const server = createServer({
  root: './',
  port: PORT
});

const pathUrl = path => `http://${HOST}:${PORT}/${path.replace('./', '')}`;

server.listen(PORT, HOST, async() => {
  const files = await glob(`${TESTS_PATH}/**/*${COMPONENT_PAGE_EXT}`);
  const pages = files.map(path => [path, pathUrl(path)]);
  for (let i = 0; i < pages.length; i++) {
    const [path, url] = pages[i];

    await browser.navigateTo(url);

    const outputPath = path.replace(COMPONENT_PAGE_EXT, '.html');
    await snapshotMarkup(browser.driver, 'html', outputPath, {
      template: (output) => `<!doctype html>${output}`,
      preserveAttributes: true,
      preserveCommentNodes: true
    });
  }

  await browser.close();
  server.close();
});

