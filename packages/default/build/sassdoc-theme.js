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

    // honor @group annotations
    data.variable = data.variable.reduce((acc, item) => {
        const groupId = item.group[0];
        item.isColor = isColor.test(item.context.value);
        acc[groupId] = acc[groupId] || [];
        acc[groupId].push(item);
        return acc;
    }, {});

    // add titles to groups
    data.variable = Object.keys(data.variable).map((groupId) => ({
        id: groupId === "undefined" ? null : groupId,
        title: context.groups[groupId] || capitalize(groupId),
        variables: data.variable[groupId]
    }));

    // sort groups by title, moving common group to the top
    data.variable.sort((a, b) => {
        if (!a.id) return -1;
        if (!b.id) return 1;

        return a.title === b.title ? 0 :
               a.title < b.title ? -1 : 1;
    });

    data.meta = context.meta;

    return new Promise(function(done, error) {
        let output = template(data);
        output = output.replace(/\r?\n/g, '\n');
        fs.writeFile(path.join('docs', 'customization.md'), output);
    });
};