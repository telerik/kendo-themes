const fs = require("fs");
const path = require("path");
const cp = require("child_process");

const glob = require("glob");
const fse = require("fs-extra");
const gulp = require("gulp");
const sassdoc = require("sassdoc");
const baka = require("@joneff/baka");
const merge = require('lodash.merge');
const { parse } = require('sass-variable-parser');
const nodeSass = require("node-sass");
const dartSass = require("sass");
const autoprefixer = require("autoprefixer");
const calc = require("postcss-calc");

const { sassBuild, sassFlatten } = require('@progress/kendo-theme-tasks/sass');
const { embedFileBase64 } = require('@progress/kendo-theme-tasks/embedFile');
const { logger, colors } = require("@progress/kendo-theme-tasks/utils");
const { getArg } = require("./scripts/utils");
const { utilsDocs } = require('./scripts/utils-docs/generate-utils-docs');


// Settings
const paths = {
    sass: {
        all: "./packages/*/scss/**/*.scss",
        assets: "./packages/*/scss/**/*.{png,gif,ttf,woff}",
        themes: "./packages/!(theme-tasks)",
        theme: "./scss/all.scss",
        swatches: "./scss/swatches/!(_)*.scss",
        inline: "./dist/all.scss",
        dist: "./dist"
    }
};

const postcssPlugins = [
    calc({
        precision: 10
    }),
    autoprefixer()
];


// #region helpers
function buildAll( cwds, options ) {

    let opts = merge( {}, options );
    opts.output = {
        filename: '[name].css',
        path: opts.dest
    };

    delete opts.dest;

    cwds.forEach( cwd => {
        sassBuild({ cwd, ...opts });
    });
}
function flattenAll( cwds, options ) {

    cwds.forEach( cwd => {
        let file = path.resolve( cwd, options.file );
        let outFile = path.resolve( cwd, options.dest, './all.scss' );
        let nodeModules = path.resolve( cwd, './node_modules' );

        sassFlatten( file, outFile, { nodeModules } );
    });
}
// #endregion


// #region assets
gulp.task("assets", function() {
    let files = glob.sync(paths.sass.assets);
    let template = fs.readFileSync('./lib/data-uri.template', 'utf8');

    files.forEach( file => {
        logger.info(`Converting to data URI ${colors.magentaBright(file)}`);
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


// #region node-sass
gulp.task("sass", function( done ) {
    let file = getArg('--file') || paths.sass.theme;
    let dest = getArg('--dest') || paths.sass.dist;
    let themes = glob.sync( getArg('--theme') || paths.sass.themes );
    let dryRun = getArg('--dry-run') || false;

    buildAll( themes, { file, dest, dryRun, compiler: nodeSass, postcssPlugins } );

    done();
});

gulp.task("sass:watch", function() {
    gulp.watch(paths.sass.all, gulp.series("sass"));
});

gulp.task("sass:swatches", function( done ) {
    let file = getArg('--file') || paths.sass.theme;
    let dest = getArg('--dest') || paths.sass.dist;
    let themes = glob.sync( getArg('--theme') || paths.sass.themes );
    let swatches = paths.sass.swatches;

    flattenAll( themes, { file, dest } );
    buildAll( themes, { file: swatches, dest, compiler: nodeSass, postcssPlugins } );

    done();
});

gulp.task("sass:flat", function( done ) {
    let file = getArg('--file') || paths.sass.theme;
    let dest = getArg('--dest') || paths.sass.dist;
    let themes = glob.sync( getArg('--theme') || paths.sass.themes );
    let inline = paths.sass.inline;

    flattenAll( themes, { file, dest } );
    buildAll( themes, { file: inline, dest, compiler: nodeSass, postcssPlugins } );

    done();
});
// #endregion


// #region dart-sass
gulp.task("dart", function( done ) {
    let file = getArg('--file') || paths.sass.theme;
    let dest = getArg('--dest') || paths.sass.dist;
    let themes = glob.sync( getArg('--theme') || paths.sass.themes );
    let dryRun = getArg('--dry-run') || false;

    buildAll( themes, { file, dest, dryRun, compiler: dartSass, postcssPlugins } );

    done();
});

gulp.task("dart:watch", function() {
    gulp.watch(paths.sass.all, gulp.series("dart"));
});

gulp.task("dart:swatches", function( done ) {
    let file = getArg('--file') || paths.sass.theme;
    let dest = getArg('--dest') || paths.sass.dist;
    let themes = glob.sync( getArg('--theme') || paths.sass.themes );
    let swatches = paths.sass.swatches;

    flattenAll( themes, { file, dest } );
    buildAll( themes, { file: swatches, dest, compiler: dartSass, postcssPlugins } );

    done();
});

gulp.task("dart:flat", function( done ) {
    let file = getArg('--file') || paths.sass.theme;
    let dest = getArg('--dest') || paths.sass.dist;
    let themes = glob.sync( getArg('--theme') || paths.sass.themes );
    let inline = paths.sass.inline;

    flattenAll( themes, { file, dest } );
    buildAll( themes, { file: inline, dest, compiler: dartSass, postcssPlugins } );

    done();
});
// #endregion


// #region docs
gulp.task("docs", function() {
    let themes = glob.sync(paths.sass.themes);

    return Promise.all(
        themes.map( theme => {

            if (fs.existsSync(path.join(theme, ".sassdocrc")) === false) {
                return Promise.resolve();
            }

            let sassdocrc = JSON.parse( fs.readFileSync( path.join(theme, ".sassdocrc"), "utf8" ) );
            return sassdoc(theme + "/scss/**/*.scss", {
                dest: path.join(theme, "/.tmp/docs"),
                dist: path.join(theme, "/docs"),
                theme: "./docs/sassdoc-theme.js",
                meta: sassdocrc.meta,
                groups: {
                    "color-system": "Color System",
                    "typography": "Typography",
                    "charts": "Charts",
                    "undefined": "Common"
                }
            });
        })
    );
});
gulp.task("docs:check", function() {
    //git diff --exit-code --quiet -- docs/
    return gulp.task("docs")().then(function() {
        let status = cp.spawnSync("git", [ "diff", "--exit-code", "--quiet", "--", "**/docs/*" ]) .status;

        if (status !== 0) {
            throw new Error("Docs are out of date");
        }
    });
});
// #endregion


// #region Utility docs
gulp.task("utils-docs", function( done ) {
    utilsDocs();
    done();
});
// #endregion


gulp.task("resolve-vars", function() {
    let themes = glob.sync(paths.sass.themes);
    const cwd = process.cwd();

    themes.forEach( theme => {
        let variablesJson = path.resolve( cwd, `${theme}/.tmp/variables.json` );
        let variablesScss = path.resolve( cwd, `${theme}/.tmp/variables.scss` );

        fse.ensureFileSync( variablesJson );
        fse.ensureFileSync( variablesScss );

        baka.compile(
            path.join( cwd, `${theme}/scss/_variables.scss` ),
            variablesScss,
            {
                nodeModules: `${theme}/node_modules`
            }
        );

        let content = fs.readFileSync( variablesScss, 'utf-8' );

        content = content.replace(/ url\("data.*?\)/g, 'none');
        content = content.replace(/\/\/.*/gm, '');
        content = content.replace(/\n/gm, '');
        content = content.replace(/;/gm, ';\n');

        const variables = parse( content, { camelCase: false } );

        fs.writeFileSync( variablesJson, JSON.stringify( variables, null, 4 ) );

    });

    return Promise.resolve();
});
