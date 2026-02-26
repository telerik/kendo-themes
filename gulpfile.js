const fs = require("fs");
const path = require("path");

const { globSync } = require("glob");
const gulp = require("gulp");

// Settings
const paths = {
    sass: {
        themes: "packages/!(html)",
        theme: "scss/all.scss",
        swatches: "lib/swatches/*.scss",
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
function copyAllToDist( cwds, options ) {

    cwds.forEach( cwd => {
        let file = path.resolve( cwd, options.file );
        let output = path.resolve( cwd, options.output.path );

        if (fs.existsSync( file )) {
            fs.mkdirSync( output, { recursive: true } );

            let content = fs.readFileSync( file, 'utf-8' );
            let distContent = content.replace(/\.\/index\.scss/g, '../scss/index.scss');

            fs.writeFileSync( path.resolve( output, 'all.scss' ), distContent );
        }
    });
};

function copySwatchesToDist( cwds, options ) {

    cwds.forEach( cwd => {
        let fileGlob = path.resolve( cwd, options.swatches ).split(path.sep).join(path.posix.sep);
        let files = globSync( fileGlob );

        files.forEach( file => {
            let content = fs.readFileSync( file, 'utf-8' );

            // Rewrite import paths: ../../scss/ (from lib/swatches/) -> ../scss/ (from dist/)
            let distContent = content.replace(/\.\.\/\.\.\/scss\//g, '../scss/');

            let sassFile = path.resolve( cwd, options.output.path, path.basename( file ) );
            fs.writeFileSync( sassFile, distContent );
        });
    });
}
// #endregion

// #region dist
function sassDist() {
    let file = paths.sass.theme;
    let output = { path: paths.sass.dist };
    let themes = globSync( getArg('--theme') || paths.sass.themes );
    let swatches = paths.sass.swatches;

    copyAllToDist( themes, { file, output } );
    copySwatchesToDist( themes, { swatches, output } );

    return Promise.resolve();
}
gulp.task("sass:dist", sassDist);
// #endregion
