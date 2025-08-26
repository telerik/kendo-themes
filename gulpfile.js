const fs = require("fs");
const path = require("path");

const { globSync } = require("glob");
const gulp = require("gulp");

// Settings
const paths = {
    sass: {
        themes: "packages/!(html)",
        theme: "scss/all.scss",
        swatches: "lib/swatches/*.json",
        standalone: "scss/**/_index.scss",
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
function copyFilesToDist( cwds, options ) {
    const fileContent =  `@forward "../scss/index.scss";\n@use "../scss/index.scss" as *;\n\n@include kendo-theme--styles();`
    const utilsFileContent = `@forward "../scss/index.import.scss";\n@use "../scss/index.import.scss" as *;\n\n@include kendo-utils();`
    const coreFileContent = `@use "../scss/index.scss" as *;\n\n@include core-styles();`

    cwds.forEach( cwd => {
        let file = path.resolve( cwd, options.file );
        let output = { path: path.resolve( cwd, options.output.path ), filename: 'all.scss' };

        if (fs.existsSync( file )) {
            fs.mkdirSync( output.path, { recursive: true } );

            if ( cwd.includes('utils') ) {
                fs.writeFileSync(path.resolve( output.path, output.filename ), utilsFileContent);
            } else if ( cwd.includes('core') ) {
                fs.writeFileSync(path.resolve( output.path, output.filename ), coreFileContent);
            }else {
                fs.writeFileSync( path.resolve( output.path, output.filename), fileContent);
            }

        }
    });
};

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
    const colorSystem = [];
    const colorsMap = [];
    const sassContent = [];

    // If there are no groups, we need to include the default variation of the theme
    if ( json.groups.length === 0) {
        sassContent.push(`@forward "../scss/index.scss";\n@use "../scss/index.scss" as *;\n\n@include kendo-theme--styles();`);
        return sassContent.join( '\n' );
    }

    json.groups.forEach( (group) => {
        if ( group.colorsMap ) {
            for ( const [ name, meta ] of Object.entries(group.colorsMap) ) {
                colorsMap.push({ name: name, value: meta.value });
            }
        } else if ( group.colorSystem ) {
            for ( const [ name, meta ] of Object.entries(group.colorSystem) ) {
                colorSystem.push({ name: name, value: meta.value });
            }
        } else  {
            if (group.variables) {
                for ( const [ name, meta ] of Object.entries(group.variables) ) {
                    variables.push({ name: name, value: meta.value });
                }
            }
        }
    });

    sassContent.push(`@forward "../scss/index.scss" with (`);
    sassContent.push(colorSystem.map( (variable) => `\t$${variable.name}: ${variable.value} !default,`).join( '\n' ));

    if ( colorsMap.length ) {
        sassContent.push(`\t$kendo-colors: (`);
        sassContent.push(colorsMap.map( (color) => `\t${color.name}: ${color.value},`).join( '\n' ));
        sassContent.push(`\t) !default,`);
    }

    sassContent.push(variables.map( (variable) => `\t$${variable.name}: ${variable.value} !default,`).join( '\n' ));

    sassContent.push(`);\n`);

    sassContent.push(`@use "../scss/index.scss" as *;\n`);

    sassContent.push(`@include kendo-theme--styles();`);

    return sassContent.join( '\n' );

}
// #endregion

// #region dist
function sassDist() {
    let file = paths.sass.theme;
    let output = { path: paths.sass.dist };
    let themes = globSync( getArg('--theme') || paths.sass.themes );
    let swatches = paths.sass.swatches;

    copyFilesToDist( themes, { file, output } );
    writeSwatches( themes, { swatches, output } );

    return Promise.resolve();
}
gulp.task("sass:dist", sassDist);
// #endregion
