const fs = require("fs");
const path = require("path");

const { globSync } = require("glob");
const gulp = require("gulp");

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

    const fileContent =  `@forward "../scss/index.scss";\n@use "../scss/index.scss" as *;\n\n@include kendo-theme--styles();`

    const utilsFileContent = `@use "../scss/index.import.scss" as *;\n\n@include kendo-utils();`

    cwds.forEach( cwd => {
        let file = path.resolve( cwd, options.file );
        let output = { path: path.resolve( cwd, options.output.path ), filename: 'all.scss' };

        if (fs.existsSync( file )) {
            fs.mkdirSync( output.path, { recursive: true } );

            if ( cwd.includes('utils') ) {
                fs.writeFileSync(path.resolve( output.path, output.filename ), utilsFileContent);
            } else {
                fs.writeFileSync( path.resolve( output.path, output.filename), fileContent);
            }

        }
    });
};

function distAll() {
    let file = paths.sass.theme;
    let output = { path: paths.sass.dist };
    let themes = globSync( paths.sass.themes );

    flattenAll( themes, { file, output } );

    return Promise.resolve();
}
gulp.task("dist:all", distAll);

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

            sassContent.push(`@forward "../scss/index.scss" with (`);
            sassContent.push(colorSystem.map( (variable) => `\t$${variable.name}: ${variable.value} !default,`).join( '\n' ));

            if ( colorsMap.length ) {
                sassContent.push(`\t$kendo-colors: (`);
                sassContent.push(colorsMap.map( (color) => `\t${color.name}: ${color.value},`).join( '\n' ));
                sassContent.push(`\t) !default,`);
            }

            // Universal variables are also included here as they are part of the a11y swatch
            sassContent.push(universal.map( (variable) => `\t$${variable.name}: ${variable.value} !default,`).join( '\n' ));

            sassContent.push(`);\n`);

            sassContent.push(`@use "../scss/index.scss" as *;\n`);

            sassContent.push(`@include kendo-theme--styles();`);

            return sassContent.join( '\n' );
        },
        // TODO remove legacy
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
function distSwatches() {
    let output = { path: getArg('--output-path') || paths.sass.dist };
    let themes = globSync( getArg('--theme') || paths.sass.themes );
    let swatches = paths.sass.swatches;

    writeSwatches( themes, { swatches, output } );

    return Promise.resolve();
}
gulp.task("dist:swatches", distSwatches);
// #endregion
