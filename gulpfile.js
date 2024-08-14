const fs = require("fs");
const path = require("path");
const gulp = require("gulp");

const { globSync } = require("glob");
const { sassFlatten } = require('./scripts/sass-flatten');

// Settings
const paths = {
    sass: {
        all: "packages/*/scss/**/*.scss",
        assets: "packages/*/scss/**/*.{png,gif,ttf,woff}",
        themes: "packages/!(html)",
        theme: "scss/all.scss",
        swatches: "lib/swatches/*.json",
        inline: "dist/all.scss",
        dist: "dist"
    }
};

function getArg(key, argsArr) {
    const args = argsArr || process.argv;
    const index = args.indexOf(key);
    const next = args[index + 1];

    return (index < 0) ? null : (!next || next[0] === '-') ? true : next; // eslint-disable-line no-nested-ternary
}

// #region helpers
function flattenAll( cwds, options ) {

    cwds.forEach( cwd => {
        let file = path.resolve( cwd, options.file );
        let output = { path: path.resolve( cwd, options.output.path ), filename: 'all.scss' };
        let nodeModules = path.resolve( cwd, '../../node_modules' );

        if (fs.existsSync( file )) {
            fs.mkdirSync( output.path, { recursive: true } );

            if (path.basename( cwd ) === 'fluent') {
                fs.writeFileSync( path.resolve( output.path, output.filename), '@use "../scss/all.scss";');
            } else {
                sassFlatten({ file, output, nodeModules });
            }
        }
    });
}

function writeSwatches( cwds, options ) {

    cwds.forEach( cwd => {
        let fileGlob = path.resolve( cwd, options.swatches ).split(path.sep).join(path.posix.sep);
        let files = globSync( fileGlob );

        files.forEach( file => {
            let json = JSON.parse( fs.readFileSync( file, 'utf-8' ) );

            if ( json.hidden === true ) {
                return;
            }

            let sassFile = path.resolve( cwd, options.output.path, `${path.basename( file, '.json')}.scss` );
            let sassContent = swatchJsonTransformer( json );
            fs.writeFileSync( sassFile, sassContent );
        });
    });
}

function swatchJsonTransformer( json ) {
    const variables = [];
    const universal = [];
    const colorSystem = [];
    const colorsMap = [];

    json.groups.forEach( (group) => {
        if ( group.colorsMap ) {
            for ( const [ name, meta ] of Object.entries(group.colorsMap) ) {
                colorsMap.push({ name: name, value: meta.value });
            }
        } else if ( group.colorSystem ) {
            for ( const [ name, meta ] of Object.entries(group.colorSystem) ) {
                colorSystem.push({ name: name, value: meta.value });
            }
        } else {
            if (group.variables) {
                for ( const [ name, meta ] of Object.entries(group.variables) ) {
                    variables.push({ name: name, value: meta.value });
                }
            }

            if (group.universal) {
                for ( const [ name, meta ] of Object.entries(group.universal) ) {
                    universal.push({ name: name, value: meta.value });
                }
            }
        }
    });

    const templates = {
        modern: () => {
            const sassContent = [];

            sassContent.push(`@use "../scss/index.scss" as kendo-theme with (`);
            sassContent.push(colorSystem.map( (variable) => `\t$${variable.name}: ${variable.value},`).join( '\n' ));

            if ( colorsMap.length ) {
                sassContent.push(`\t$kendo-colors: (`);
                sassContent.push(colorsMap.map( (color) => `\t${color.name}: ${color.value},`).join( '\n' ));
                sassContent.push(`\t)`);
            }

            sassContent.push(variables.map( (variable) => `\t$${variable.name}: ${variable.value},`).join( '\n' ));

            sassContent.push(`);\n`);

            sassContent.push(`@include kendo-theme.config();`);
            sassContent.push(`@include kendo-theme.styles();`);

            return sassContent.join( '\n' );
        },
        legacy: () => {
            const sassContent = [];
            if ( !colorSystem.length ) {
                sassContent.push(`$kendo-enable-color-system: false;\n`);
            }
            sassContent.push(colorSystem.map( (variable) => `$${variable.name}: ${variable.value};`).join( '\n' ));

            if ( colorsMap.length ) {
                sassContent.push(`\n$kendo-colors: (`);
                sassContent.push(colorsMap.map( (color) => `\t${color.name}: ${color.value},`).join( '\n' ));
                sassContent.push(`);\n`);
            }

            sassContent.push(`@if not ($kendo-enable-color-system) {`);
            sassContent.push(variables.map( (variable) => `\t$${variable.name}: ${variable.value} !global;`).join( '\n' ));
            sassContent.push(`};`);

            sassContent.push(universal.map( (variable) => `$${variable.name}: ${variable.value};`).join( '\n' ));
            sassContent.push(`\n@import "all.scss";`);

            return sassContent.join( '\n' );
        }
    };

    if ( json.api === 'modern' ) {
        return templates.modern();
    }

    return templates.legacy();
}
// #endregion

// #region dist
function distFlat() {
    let file = paths.sass.theme;
    let output = { path: getArg('--output-path') || paths.sass.dist };
    let themes = globSync( getArg('--theme') || paths.sass.themes );

    flattenAll( themes, { file, output } );

    return Promise.resolve();
}
gulp.task("dist:flat", distFlat);

function distSwatches() {
    let file = paths.sass.theme;
    let output = { path: getArg('--output-path') || paths.sass.dist };
    let themes = globSync( getArg('--theme') || paths.sass.themes );
    let swatches = paths.sass.swatches;

    flattenAll( themes, { file, output } );
    writeSwatches( themes, { swatches, output } );

    return Promise.resolve();
}
gulp.task("dist:swatches", distSwatches);
// #endregion
