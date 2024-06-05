const path = require('path');
const nunjucks = require('nunjucks');
const templateDir = path.resolve(__dirname, 'templates');

let nunjucksEnv = nunjucks.configure( templateDir, { autoescape: false });

const formatText = src =>
    src.replace(/\n(.)/g, '<br />$1').replace(/\s$/, "");

const isColor = src =>
    (/^#/i).test(src);

const toString = (src) => {
    if (typeof src === 'object') {
        return JSON.stringify(src).replace(/^\{|\}$/g,'');
    } else if (typeof src === 'string') {
        return src;
    }
    return String(src);
};

nunjucksEnv.addFilter('format_text', formatText);
nunjucksEnv.addFilter('is_color', isColor);
nunjucksEnv.addFilter('to_string', toString);

module.exports = nunjucks;
