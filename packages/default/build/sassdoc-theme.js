'use strict';

const fs = require('fs');
const path = require('path');
const hbs = require('handlebars');
const read = (src) =>
    fs.readFileSync(path.join(__dirname, src), { encoding: 'utf-8' });

hbs.registerHelper('formatText', (str) =>
    str.replace(/\n(.)/g, '<br/>\n$1'));

const compile = (src) =>
    hbs.compile(read(src), { noEscape: true });
const template = compile('customization.md.hbs');

module.exports = function(dest, context) {
    const capitalize = (str) => str[0].toUpperCase() + str.substring(1);
    const isColor = /^#/i;
    const data = context.data
        .filter((item) => item.access == 'public')
        .reduce((acc, item) => {
            acc[item.context.type].push(item);
            return acc;
        }, {
            mixin: [],
            variable: []
        });

    data.variable = data.variable.reduce((acc, item) => {
        const groupId = item.group[0];
        const group = context.groups[groupId] || capitalize(groupId);
        item.isColor = isColor.test(item.context.value);
        acc[group] = acc[group] || [];
        acc[group].push(item);
        return acc;
    }, {});

    return new Promise(function(done, error) {
        fs.writeFile(path.join('docs', 'customization.md'), template(data));
    });
};
