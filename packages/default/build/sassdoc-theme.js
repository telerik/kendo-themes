'use strict';

const fs = require('fs');
const path = require('path');
const hbs = require('handlebars');
const read = (src) =>
    fs.readFileSync(path.join(__dirname, src), { encoding: 'utf-8' });
const compile = (src) =>
    hbs.compile(read(src), { noEscape: true });
const template = compile('customization.md.hbs');

module.exports = function(dest, context) {
    const data = context.data
        .filter((item) => item.access == 'public')
        .reduce((acc, item) => {
            acc[item.context.type].push(item);
            return acc;
        }, {
            mixin: [],
            variable: []
        });


    return new Promise(function(done, error) {
        fs.writeFile(path.join('docs', 'customization.md'), template(data));
    });
};
