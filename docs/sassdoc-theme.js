const fs = require('fs');
const path = require('path');
const nunjucks = require('./nunjucks');

module.exports = function(dest, context) {
    const capitalize = (str) => str[0].toUpperCase() + str.substring(1);
    const resolvedVars = JSON.parse( fs.readFileSync(context.json), 'utf-8');

    const data = context.data
        .filter((item) => item.access === 'public')
        .reduce((acc, item) => {
            if (item.context.type === 'variable') {
                let varName = item.context.name;

                // Augment resolved value
                item.resolvedValue = resolvedVars[varName].value;

                // Augment variable type
                item.type = item.type !== undefined
                    ? item.type
                    : capitalize(resolvedVars[varName].type);

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
