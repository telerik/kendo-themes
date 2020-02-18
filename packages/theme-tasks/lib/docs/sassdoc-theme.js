'use strict';

const fs = require('fs');
const path = require('path');
const hbs = require('handlebars');
const read = (src) => fs.readFileSync(path.join(__dirname, src), { encoding: 'utf-8' });

hbs.registerHelper(
    'formatText',
    (str) => str.replace(/\n(.)/g, '<br />$1').replace(/\s$/, "")
);

const compile = (src) => hbs.compile(read(src), { noEscape: true });
const template = compile('customization.md.hbs');
const templateVariableGroup = compile('customization-variable-group.md.hbs');

module.exports = function(dest, context) {
    const capitalize = (str) => str[0].toUpperCase() + str.substring(1);
    const isColor = /^#/i;

    const data = context.data
        .filter((item) => item.access === 'public')
        .reduce((acc, item) => {
            if (item.context.type === 'variable') {
                acc.variableGroups.push(item);
            } else {
                acc[item.context.type].push(item);
            }
            return acc;
        }, {
            mixin: [],
            variableGroups: []
        });

    // honor @group annotations
    data.variableGroups = data.variableGroups.reduce((acc, item) => {
        const groupId = item.group[0];
        item.isColor = isColor.test(item.context.value);
        acc[groupId] = acc[groupId] || [];
        acc[groupId].push(item);
        return acc;
    }, {});

    // add titles to groups
    data.variableGroups = Object.keys(data.variableGroups).map((groupId) => ({
        id: groupId === "undefined" ? null : groupId,
        title: context.groups[groupId] || capitalize(groupId),
        variables: data.variableGroups[groupId]
    }));

    // sort groups by title, moving common group to the top
    data.variableGroups.sort((a, b) => {
        if (!a.id) { return -1; }
        if (!b.id) { return 1; }
        if (a.title === b.title) { return 0; }

        return a.title > b.title ? 1 : -1;
    });

    data.meta = context.meta;

    return new Promise(function(done, error) {
        let output = template(data);
        output = output.replace(/\r?\n/g, '\n');
        fs.writeFile(path.join('docs', 'customization.md'), output, (err) => {
            if (err) {
                error(err);
            } else {
                done(output);
            }
        });

        data.variableGroups.forEach(group => {
            group.meta = data.meta;
            let output = templateVariableGroup(group);
            output = output.replace(/\r?\n/g, '\n');

            fs.writeFile(path.join('docs', `customization-${ group.id === null ? 'common' : group.id }.md`), output, (err) => {
                if (err) {
                    error(err);
                } else {
                    done(output);
                }
            });
        });
    });
};
