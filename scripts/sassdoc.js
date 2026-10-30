#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { parse, sorter } = require('sassdoc');
const ScssCommentParser = require( require.resolve( 'scss-comment-parser', { paths: [ path.dirname( require.resolve( 'sassdoc' ) ) ] } ) );
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

// Collect the first top-level declaration of every variable in the given folder,
// parsed the same way SassDoc parses documented ones. Also collect the variables
// pinned in `@forward ... with ()` blocks without `!default` - they are not configurable.
function _collectVariableDeclarations(srcDir) {
    const declarations = new Map();
    const pinned = new Set();
    const contextParser = ScssCommentParser.prototype.contextParser;

    const walk = (dir) => {
        fs.readdirSync( dir, { withFileTypes: true } )
            .sort( (a, b) => a.name.localeCompare( b.name ) )
            .forEach( entry => {
                const fullPath = path.join( dir, entry.name );

                if ( entry.isDirectory() ) {
                    walk( fullPath );
                    return;
                }

                if ( !entry.name.endsWith( '.scss' ) ) {
                    return;
                }

                const lines = fs.readFileSync( fullPath, 'utf8' ).split( '\n' );
                let inForwardWith = false;

                lines.forEach( (line, lineIndex) => {
                    if ( /^@forward\b.*\bwith\s*\(/.test( line ) ) {
                        inForwardWith = true;
                    }

                    if ( inForwardWith ) {
                        const forwarded = line.match( /^\s+\$([\w-]+)\s*:/ );

                        if ( forwarded !== null && !line.includes( '!default' ) ) {
                            pinned.add( forwarded[1] );
                        }

                        inForwardWith = !/\)\s*;/.test( line );
                        return;
                    }

                    const match = line.match( /^\$([\w-]+)\s*:/ );

                    if ( match === null || declarations.has( match[1] ) ) {
                        return;
                    }

                    const code = lines.slice( lineIndex ).join( '\n' );
                    const lineNumberFor = (index) => lineIndex + ( code.slice( 0, index ).match( /\n/g ) || [] ).length;
                    const context = contextParser( code, lineNumberFor );

                    if ( context.type !== 'variable' ) {
                        return;
                    }

                    declarations.set( match[1], {
                        context,
                        file: {
                            path: path.relative( srcDir, fullPath ).replace( /\\/g, '/' ),
                            name: entry.name
                        }
                    });
                });
            });
    };

    walk( srcDir );

    return { declarations, pinned };
}

(async function() {

    const rawData = await parse(src, {
        theme: theme,
        dest: dest,
        verbose: true
    });

    // Add variables from theme core that are not present in the current theme
    // Skip for utils package as it's standalone and doesn't inherit from core
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

        // Variables declared in the theme without own docs inherit the docs from core,
        // but keep the theme's value and location.
        const { declarations: themeDeclarations, pinned: themePinnedVarNames } = _collectVariableDeclarations( path.resolve( themeDir, src ) );
        let inheritedDocs = false;

        coreVarNames.forEach( (coreVarName, index) => {
            if ( coreVarName === null || themeVarNames.includes( coreVarName ) || !themeDeclarations.has( coreVarName ) ) {
                return;
            }

            const { context, file } = themeDeclarations.get( coreVarName );
            const item = JSON.parse( JSON.stringify( coreRawData[index] ) );

            delete item.commentRange;
            item.context = context;
            item.file = file;

            rawData.push( item );
            themeVarNames.push( coreVarName );
            inheritedDocs = true;
        });

        if ( inheritedDocs ) {
            sorter( rawData );
        }

        coreVarNames.forEach( (coreVarName, index) => {
            if ( coreVarName === null ) {
                return;
            }

            if ( themeVarNames.includes( coreVarName ) === true ) {
                return;
            }
            let coreVar = coreRawData[index];

            // Skip variables that are not part of the theme's API: pinned by the theme,
            // or component variables the theme does not set at all (they stay `null`).
            if ( themePinnedVarNames.has( coreVarName ) || ( coreVar.context.value === 'null' && coreVar.file.path.startsWith( 'components/' ) ) ) {
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
