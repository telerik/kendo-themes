#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { parse } = require('sassdoc');
const nunjucks = require('../sassdoc/nunjucks');
const srcTheme = require('../sassdoc/sassdoc-theme.js');

const themeDir = process.cwd();
const config = JSON.parse( fs.readFileSync( path.resolve( themeDir, '.sassdocrc' ) ) );
const resolvedVars = JSON.parse( fs.readFileSync( path.resolve( themeDir, 'dist/meta', 'variables.json' ) ) );
const defaults = {
    src: 'scss',
    dest: 'docs',
    theme: srcTheme,
    groups: {
        'color-system': 'Color System',
        'radii': 'Border Radius',
        'pdf-viewer': 'PDFViewer',
        'undefined': 'Common'
    },
    meta: {
        name: 'NAME',
        friendlyName: 'FRIENDLY NAME',
    }
};

const { src, dest, theme, groups, meta } = Object.assign( {}, defaults, config );

function _kebabToPascalCase(string) {
    return string.replace(/(^|-)([a-z])/g, (_, _prefix, letter) => letter.toUpperCase());
}

(async function() {

    const rawData = await parse(src, {
        theme: theme,
        dest: dest,
        verbose: true
    });

    // Add variables from theme core that are not present in the current theme.
    // Skip for utils package as it's standalone and doesn't inherit from core.
    if (meta.name !== 'core' && meta.name !== 'utils') {
        const coreRawDataFile = path.resolve( themeDir, '../core/dist/meta', 'sassdoc-raw-data.json' );
        if (fs.existsSync( coreRawDataFile ) === false) {
            return;
        }

        let coreVarNames = [];
        let themeVarNames = [];

        const coreRawData = JSON.parse( fs.readFileSync( coreRawDataFile ) );

        coreRawData.forEach( item => {
            if ( item.context.type === 'variable' ) {
                coreVarNames.push( item.context.name );
                return;
            }

            // Push null to preserve the index
            coreVarNames.push( null );
        });

        rawData.forEach( item => {
            if ( item.context.type === 'variable' ) {
                themeVarNames.push( item.context.name );
            }
        });

        // Scan the theme's SCSS files to distinguish two categories of variables:
        //
        //  1. Standalone !default  — declared as `$kendo-xxx: value !default;` at the
        //     top level of a file. These are directly configurable via @use ... with (...).
        //
        //  2. Pass-through only    — referenced only inside `@forward "..." with (` blocks
        //     as `    $kendo-xxx: $kendo-yyy,` (indented, no `!default`).
        //     These are NOT directly configurable; the theme just tunnels a value to core.
        //
        // Variables that are pass-through-only must NOT be included in the docs output
        // because @use ... with ($pass-through-var: value) raises a Sass compile error.
        // Variables that don't exist in the theme at all (truly core-only, like
        // $kendo-colors) ARE configurable through the module chain and must be included.
        const themeStandaloneVarNames = new Set();
        const themePassThroughVarNames = new Set();
        const scssDir = path.resolve( themeDir, 'scss' );
        if ( fs.existsSync( scssDir ) ) {
            const scanDir = (dir) => {
                for ( const entry of fs.readdirSync( dir, { withFileTypes: true } ) ) {
                    const fullPath = path.join( dir, entry.name );
                    if ( entry.isDirectory() ) {
                        scanDir( fullPath );
                    } else if ( entry.name.endsWith( '.scss' ) ) {
                        const content = fs.readFileSync( fullPath, 'utf8' );
                        for ( const line of content.split( '\n' ) ) {
                            // Standalone: starts at column 0, has `!default`
                            const standaloneMatch = line.match( /^\$kendo-([\w-]+)\s*:.*!default/ );
                            if ( standaloneMatch ) {
                                themeStandaloneVarNames.add( `kendo-${standaloneMatch[1]}` );
                                continue;
                            }
                            // Pass-through: indented (inside @forward with block), no `!default`
                            const passThroughMatch = line.match( /^\s+\$kendo-([\w-]+)\s*:/ );
                            if ( passThroughMatch && !line.includes( '!default' ) ) {
                                themePassThroughVarNames.add( `kendo-${passThroughMatch[1]}` );
                            }
                        }
                    }
                }
            };
            scanDir( scssDir );
        }

        // Variables that are pass-through-only (not directly configurable in the theme).
        const passThruOnlyVarNames = new Set(
            [ ...themePassThroughVarNames ].filter( v => !themeStandaloneVarNames.has( v ) )
        );

        coreVarNames.forEach( (coreVarName, index) => {
            if ( coreVarName === null ) {
                return;
            }

            if ( themeVarNames.includes( coreVarName ) === true ) {
                return;
            }

            const coreVar = coreRawData[index];

            // Skip pass-through-only variables — they are tunneled through @forward
            // with(...) blocks but are not directly configurable as standalone !default.
            // Configuring them via @use ... with (...) raises a Sass compile error.
            if ( passThruOnlyVarNames.has( coreVarName ) ) {
                return;
            }

            // Skip non-Map variables that aren't declared with !default in the theme.
            // These are core-only "null" variables unused by the theme's CSS — including
            // them would cause test failures when their test values never appear in output.
            // Map variables (e.g. $kendo-colors) are always included because they are
            // configurable through the module chain and tested by testKendoModule.
            const isMap = resolvedVars[coreVarName]?.type === 'Map';
            if ( !isMap && !themeStandaloneVarNames.has( coreVarName ) ) {
                return;
            }

            coreVar.file.path = `core/scss/${coreVar.file.path}`;
            rawData.push( coreVar );
        });
    }

    // Write raw data to file
    fs.writeFileSync(
        path.resolve( themeDir, 'dist/meta', 'sassdoc-raw-data.json' ),
        JSON.stringify( rawData, null, 4 )
    );

    const data = rawData
        // Normalize paths
        .map((item) => {
            item.file.path = item.file.path.replace(/\\/g, '/');
            if ( item.file.path.startsWith('core/scss/') === false ) {
                item.file.path = `${meta.name}/scss/${item.file.path}`;
            }
            return item;
        })

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

                        // Prettify value
                        item.resolvedType === "Map" && (item.prettyValue = resolvedVar.prettyValue);
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
                title: groups[groupName] || _kebabToPascalCase( groupName ),
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
        path.resolve( themeDir, 'dist/meta', 'sassdoc-data.json' ),
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
