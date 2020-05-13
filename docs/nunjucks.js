'use strict';

const path = require('path');
const nunjucks = require('nunjucks');


let nunjucksEnv = nunjucks.configure(path.resolve(__dirname, './', 'templates'), { autoescape: false });

const formatText = src =>
    src.replace(/\n(.)/g, '<br />$1').replace(/\s$/, "");

const isColor = src =>
    (/^#/i).test(src);

nunjucksEnv.addFilter('format_text', formatText);
nunjucksEnv.addFilter('is_color', isColor);

module.exports = nunjucks;
