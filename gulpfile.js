const fs = require("fs");
const path = require("path");

const { globSync } = require("glob");
const gulp = require("gulp");

const { embedFileBase64 } = require('@progress/kendo-theme-tasks/src/embedFile');
const { getArg, getEnvArg } = require("@progress/kendo-theme-tasks/src/utils");
const { createComponent } = require('@progress/kendo-theme-tasks/src/create');


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

// #region helpers
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
                sassContent.push(`\t),`);
            }

            sassContent.push(variables.map( (variable) => `\t$${variable.name}: ${variable.value},`).join( '\n' ));

            sassContent.push(`);\n`);

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


// #region assets
gulp.task("assets", function() {
    let files = globSync(paths.sass.assets);
    let template = fs.readFileSync('lib/data-uri.template', 'utf8');

    files.forEach( file => {
        embedFileBase64({
            file: file,
            output: {
                filename: '[name].scss',
                path: path.dirname( file )
            },
            template: template
        });
    });

    return Promise.resolve();
});
// #endregion


// #region dist
function distSwatches() {
    let output = { path: getArg('--output-path') || paths.sass.dist };
    let themes = globSync( getArg('--theme') || paths.sass.themes );
    let swatches = paths.sass.swatches;

    writeSwatches( themes, { swatches, output } );

    return Promise.resolve();
}
gulp.task("dist:swatches", distSwatches);
// #endregion

// #region Components

/**
 * A task that creates all the needed files for a new component.
 *
 * @example npm run create-component --name=accordion
 * @example gulp create-component --name accordion
 *
 * @param {string} [name] - The name of the new component.
 */
gulp.task("create-component", function( done ) {
    const name = getArg('--name') || getEnvArg('name') || null;

    createComponent({ name });
    done();
});

// #endregion
