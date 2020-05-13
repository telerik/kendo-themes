const fs = require('fs');
const path = require('path');
const sassdocExtras = require('sassdoc-extras');
const nunjucks = require('./nunjucks');

module.exports = function(dest, context) {
    const capitalize = (str) => str[0].toUpperCase() + str.substring(1);

    sassdocExtras( context, 'resolveVariables' );

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
            variableGroups: [],
            css: []
        });

    // honor @group annotations
    data.variableGroups = data.variableGroups.reduce((acc, item) => {
        const groupId = item.group[0];
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

    let output = nunjucks.render('customization.md.njk', data);
    output = output.replace(/\r?\n/g, '\n');

    fs.writeFileSync(path.join(context.dist, 'customization.md'), output);

    data.variableGroups.forEach(group => {
        group.meta = data.meta;
        group.id = group.id === null ? 'common' : group.id;

        let output = nunjucks.render('customization-variable-group.md.njk', group);
        output = output.replace(/\r?\n/g, '\n');

        fs.writeFileSync(path.join(context.dist, `customization-${group.id}.md`), output);
    });

    return Promise.resolve();
};
