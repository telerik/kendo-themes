#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { parse } = require('sassdoc');
const nunjucks = require('../sassdoc/nunjucks');
const srcTheme = require('../sassdoc/sassdoc-theme.js');

const themeDir = process.cwd();
const config = JSON.parse( fs.readFileSync( path.resolve( themeDir, '.sassdocrc' ) ) );
const resolvedVars = JSON.parse( fs.readFileSync( path.resolve( themeDir, 'dist', 'variables.json' ) ) );
const defaults = {
    src: 'scss',
    dest: 'docs',
    theme: srcTheme,
    groups: {
        'common': 'Common',
        'color-system': 'Color System',
        'typography': 'Typography',
        'charts': 'Charts',
        'undefined': 'Common'
    },
    meta: {
        name: 'NAME',
        friendlyName: 'FRIENDLY NAME',
    }
};

const { src, dest, theme, groups, meta } = Object.assign( {}, defaults, config );

function _capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

(async function() {

    const rawData = await parse(src, {
        theme: theme,
        dest: dest,
        verbose: true
    });

    // Write raw data to file
    fs.writeFileSync(
        path.resolve( themeDir, 'dist', 'sassdoc-raw-data.json' ),
        JSON.stringify( rawData, null, 4 )
    );

    const data = rawData
        // Filter out private items
        .filter((item) => item.access === 'public')

        // Filter out unknown items
        .filter((item) => item.context.type !== 'unknown')

        // Group data by context
        .reduce((acc, item) => {
            switch (item.context.type) {
                case 'variable': {
                    const varName = item.context.name;
                    const resolvedVar = resolvedVars[varName];

                    if ( resolvedVar !== undefined ) {
                        // Augment variable value
                        item.resolvedValue = resolvedVar.value;

                        // Augment variable type
                        item.resolvedType = item.type || resolvedVar.type;
                    }

                    acc.variables.push( item );

                    break;
                }
                case 'mixin': {
                    acc.mixins.push( item );
                    break;
                }
                case 'function': {
                    acc.functions.push( item );
                    break;
                }
                case 'placeholder': {
                    acc.placeholders.push( item );
                    break;
                }
                case 'css': {
                    acc.css.push(item);
                    break;
                }
                default: {
                    // eslint-disable-next-line no-console
                    console.warn( `Unknown context type: ${item.context.type}` );
                    return acc;
                }
            }

            return acc;
        }, {
            variables: [],
            mixins: [],
            functions: [],
            placeholders: [],
            css: []
        });

    // Rename some properties
    data.functions.forEach( fnObj => {
        fnObj.examples = fnObj.example || [];
        fnObj.parameters = fnObj.parameter || [];
        fnObj.context.signature = `${fnObj.context.name}(${fnObj.parameters.map( param => `$${param.name}` ).join(', ')})`;

        delete fnObj.example;
        delete fnObj.parameter;
    });

    data.mixins.forEach( mxObj => {
        mxObj.examples = mxObj.example || [];
        mxObj.parameters = mxObj.parameter || [];
        mxObj.context.signature = `${mxObj.context.name}(${mxObj.parameters.map( param => `$${param.name}` ).join(', ')})`;

        delete mxObj.example;
        delete mxObj.parameter;
    });

    // // Sort data by name
    // Object.keys( data ).forEach( key => {
    //     data[key].sort( (a, b) => {
    //         if ( a.context.name < b.context.name ) {
    //             return -1;
    //         }
    //         if ( a.context.name > b.context.name ) {
    //             return 1;
    //         }
    //         return 0;
    //     });
    // });


    // Group variables by group
    data.variableGroups = data.variables.reduce((acc, item) => {
        const groupName = item.group[0] === 'undefined' ? 'common' : item.group[0];

        if ( acc[groupName] === undefined ) {
            acc[groupName] = {
                id: groupName,
                title: groups[groupName] || _capitalize( groupName ),
                variables: []
            };
        }

        acc[groupName].variables.push( item );

        return acc;
    }, {});
    data.variableGroups = Object.keys( data.variableGroups ).map( key => data.variableGroups[key] );


    // Sort groups by title, move common to the top
    data.variableGroups.sort((a, b) => {
        if ( a.id === 'common' ) {
            return -1;
        }
        if ( b.id === 'common' ) {
            return 1;
        }
        if ( a.title < b.title ) {
            return -1;
        }
        if ( a.title > b.title ) {
            return 1;
        }
        return 0;
    });


    // Add meta data
    data.meta = meta;


    // Write data to file
    fs.writeFileSync(
        path.resolve( themeDir, 'dist', 'sassdoc-data.json' ),
        JSON.stringify( data, null, 4 )
    );


    // Create big article
    let customizationArticle = nunjucks.render('customization.md.njk', data);
    fs.writeFileSync( path.resolve( themeDir, 'docs', 'customization.md' ), customizationArticle );

    // Create individual articles
    data.variableGroups.forEach( group => {
        group.meta = data.meta;

        let article = nunjucks.render('customization-variable-group.md.njk', group);
        fs.writeFileSync( path.resolve( themeDir, 'docs', `customization-${group.id}.md` ), article );
    });

})();
