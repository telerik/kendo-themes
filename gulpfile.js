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

const { getDefaults } = require('@progress/kendo-theme-tasks/src/build/kendo-defaults');
const { sassBuild, sassCompile } = require('@progress/kendo-theme-tasks/src/build/sass-build');
const { sassFlatten } = require('@progress/kendo-theme-tasks/src/build/sass-flatten');
const { embedFileBase64 } = require('@progress/kendo-theme-tasks/src/embedFile');
const { getArg, logger, colors } = require("@progress/kendo-theme-tasks/src/utils");
const { utilsDocs } = require('@progress/kendo-theme-tasks/src/docs');


// Settings
const paths = {
    sass: {
        all: "packages/*/scss/**/*.scss",
        assets: "packages/*/scss/**/*.{png,gif,ttf,woff}",
        themes: "packages/*",
        theme: "scss/all.scss",
        swatches: "lib/swatches/*.json",
        inline: "dist/all.scss",
        dist: "dist"
    }
};

const sassCache = new Set();
let nodeModules = 'node_modules';
function getNodeModules() {
    return nodeModules;
}

const defaults = getDefaults( { cache: sassCache, nodeModules: getNodeModules } );

const nodeSassOptions = {
    implementation: nodeSass
};
const dartSassOptions = {
    implementation: dartSass
};


// #region helpers
function buildAll( cwds, options ) {

    let opts = merge( {}, defaults, options );

    cwds.forEach( cwd => {
        sassCache.clear();
        nodeModules = path.resolve( cwd, 'node_modules' );

        let file = path.resolve( cwd, opts.file );
        let output = merge( {}, opts.output, { path: path.resolve( cwd, opts.output.path ) } );

        sassBuild({ ...opts, file, output });
    });
}

function buildSwatches( cwds, options ) {

    let opts = merge( {}, defaults, options );

    cwds.forEach( cwd => {
        let files = glob.sync( path.resolve( cwd, opts.swatches ) );

        files.forEach( file => {
            sassCache.clear();
            nodeModules = path.resolve( cwd, 'node_modules' );

            let output = merge( {}, opts.output, { path: path.resolve( cwd, opts.output.path ) } );
            let sassFile = path.resolve( output.path, `${path.basename( file, '.json')}.scss`);

            if ( fs.existsSync( sassFile ) ) {
                sassBuild({ ...opts, file: sassFile, output });
            }
        });
    });
}

function compileAll( cwds, options ) {

    let opts = merge( {}, defaults, options );

    cwds.forEach( cwd => {
        let files = glob.sync( path.resolve( cwd, 'scss/!(common|styling)*/_index.scss' ) );

        files.forEach( file => {
            sassCache.clear();
            nodeModules = path.resolve( cwd, 'node_modules' );

            sassCompile({ ...opts, file, });
        });
    });
}

function flattenAll( cwds, options ) {

    cwds.forEach( cwd => {
        let file = path.resolve( cwd, options.file );
        let outFile = path.resolve( cwd, options.output.path, 'all.scss' );
        let nodeModules = path.resolve( cwd, 'node_modules' );

        sassFlatten( file, outFile, { nodeModules } );
    });
}

function writeSwatches( cwds, options ) {

    cwds.forEach( cwd => {
        let files = glob.sync( path.resolve( cwd, options.swatches ) );

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

function swatchJsonTransformer(json) {
    const sassContent = [];
    let { groups } = json;

    groups.forEach( (group) => {
        for ( const [ name, meta ] of Object.entries(group.variables) ) {
            sassContent.push(`$${name}: ${meta.value};`);
        }
    });

    sassContent.push('');

    sassContent.push(`@import "all.scss";`);

    return sassContent.join( '\n' );
}
// #endregion


// #region assets
gulp.task("assets", function() {
    let files = glob.sync(paths.sass.assets);
    let template = fs.readFileSync('lib/data-uri.template', 'utf8');

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


// #region dist
gulp.task("dist:flat", () => {
    let file = paths.sass.theme;
    let output = { path: getArg('--output-path') || paths.sass.dist };
    let themes = glob.sync( getArg('--theme') || paths.sass.themes );

    flattenAll( themes, { file, output } );

    return Promise.resolve();
});
gulp.task("dist:swatches", () => {
    let file = paths.sass.theme;
    let output = { path: getArg('--output-path') || paths.sass.dist };
    let themes = glob.sync( getArg('--theme') || paths.sass.themes );
    let swatches = paths.sass.swatches;

    flattenAll( themes, { file, output } );
    writeSwatches( themes, { swatches, output } );

    return Promise.resolve();
});
// #endregion


// #region node-sass
gulp.task("sass", () => {
    let file = getArg('--file') || paths.sass.theme;
    let output = { path: getArg('--output-path') || paths.sass.dist };
    let themes = glob.sync( getArg('--theme') || paths.sass.themes );

    buildAll( themes, { file, output, sassOptions: nodeSassOptions } );

    return Promise.resolve();
});

gulp.task("sass:watch", () => {
    gulp.watch(paths.sass.all, gulp.series("sass"));
});

gulp.task("sass:swatches", () => {
    let file = paths.sass.theme;
    let output = { path: getArg('--output-path') || paths.sass.dist };
    let themes = glob.sync( getArg('--theme') || paths.sass.themes );
    let swatches = paths.sass.swatches;

    flattenAll( themes, { file, output } );
    writeSwatches( themes, { swatches, output } );
    buildSwatches( themes, { swatches, output, sassOptions: nodeSassOptions } );

    return Promise.resolve();
});

gulp.task("sass:flat", () => {
    let file = getArg('--file') || paths.sass.theme;
    let output = { path: getArg('--output-path') || paths.sass.dist };
    let themes = glob.sync( getArg('--theme') || paths.sass.themes );
    let inline = paths.sass.inline;

    flattenAll( themes, { file, output } );
    buildAll( themes, { file: inline, output, sassOptions: nodeSassOptions } );

    return Promise.resolve();
});

gulp.task("sass:standalone", () => {
    let themes = glob.sync( getArg('--theme') || paths.sass.themes );
    compileAll( themes, { sassOptions: nodeSassOptions } );

    return Promise.resolve();
});
// #endregion


// #region dart-sass
gulp.task("dart", () => {
    let file = getArg('--file') || paths.sass.theme;
    let output = { path: getArg('--output-path') || paths.sass.dist };
    let themes = glob.sync( getArg('--theme') || paths.sass.themes );

    buildAll( themes, { file, output, sassOptions: dartSassOptions } );

    return Promise.resolve();
});

gulp.task("dart:watch", () => {
    gulp.watch(paths.sass.all, gulp.series("dart"));
});

gulp.task("dart:swatches", () => {
    let file = paths.sass.theme;
    let output = { path: getArg('--output-path') || paths.sass.dist };
    let themes = glob.sync( getArg('--theme') || paths.sass.themes );
    let swatches = paths.sass.swatches;

    flattenAll( themes, { file, output } );
    writeSwatches( themes, { swatches, output } );
    buildSwatches( themes, { swatches, output, sassOptions: dartSassOptions } );

    return Promise.resolve();
});

gulp.task("dart:flat", () => {
    let file = getArg('--file') || paths.sass.theme;
    let output = { path: getArg('--output-path') || paths.sass.dist };
    let themes = glob.sync( getArg('--theme') || paths.sass.themes );
    let inline = paths.sass.inline;

    flattenAll( themes, { file, output } );
    buildAll( themes, { file: inline, output, sassOptions: dartSassOptions } );

    return Promise.resolve();
});
// #endregion


// #region docs
gulp.task("docs", () => {
    let themes = glob.sync(paths.sass.themes);

    return Promise.all(
        themes.map( theme => {

            if (fs.existsSync(path.join(theme, ".sassdocrc")) === false) {
                return Promise.resolve();
            }

            // Temporary workaround before we move docs generation to theme-tasks
            let themeFiles = glob.sync(theme + "/scss/**/*.scss");

            if ( theme === './packages/default' ) {
                themeFiles = themeFiles.filter(function(item) {
                    return !item.startsWith("./packages/default/scss/utils/_");
                });
            }

            let sassdocrc = JSON.parse( fs.readFileSync( path.join(theme, ".sassdocrc"), "utf8" ) );
            return sassdoc(themeFiles, {
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

/**
 * Generates documentation for the utility classes.
 *
 * @example npm run utils-docs
 * @example gulp utils-docs
 */
gulp.task("utils-docs", () => {
    utilsDocs();

    return Promise.resolve();
});
// #endregion


gulp.task("resolve-vars", () => {
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
