const fs = require("fs");
const path = require("path");
const cp = require("child_process");

const glob = require("glob");
const fse = require("fs-extra");
const gulp = require("gulp");
const sassdoc = require("sassdoc");
const dartSass = require("sass");

const { sassFlatten } = require('@progress/kendo-theme-tasks/src/build/sass-flatten');
const { embedFileBase64 } = require('@progress/kendo-theme-tasks/src/embedFile');
const { getArg, getEnvArg, logger, colors } = require("@progress/kendo-theme-tasks/src/utils");
const { utilsDocs } = require('@progress/kendo-theme-tasks/src/docs');
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
function flattenAll( cwds, options ) {

    cwds.forEach( cwd => {
        let file = path.resolve( cwd, options.file );
        let output = { path: path.resolve( cwd, options.output.path ), filename: 'all.scss' };
        let nodeModules = path.resolve( cwd, 'node_modules' );

        if (fs.existsSync( file )) {
            sassFlatten({ file, output, nodeModules });
        }
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
function distFlat() {
    let file = paths.sass.theme;
    let output = { path: getArg('--output-path') || paths.sass.dist };
    let themes = glob.sync( getArg('--theme') || paths.sass.themes, {
        ignore: [
            'packages/fluent'
        ]
    });

    flattenAll( themes, { file, output } );

    return Promise.resolve();
}
gulp.task("dist:flat", distFlat);

function distSwatches() {
    let file = paths.sass.theme;
    let output = { path: getArg('--output-path') || paths.sass.dist };
    let themes = glob.sync( getArg('--theme') || paths.sass.themes );
    let swatches = paths.sass.swatches;

    flattenAll( themes, { file, output } );
    writeSwatches( themes, { swatches, output } );

    return Promise.resolve();
}
gulp.task("dist:swatches", distSwatches);
// #endregion


// #region docs
gulp.task("docs", () => {
    let themes = glob.sync(paths.sass.themes, {
        ignore: [
            'packages/fluent',
            'packages/utils'
        ]
    });

    distFlat();
    resolveVars();

    return Promise.all(
        themes.map( theme => {

            if (fs.existsSync(path.join(theme, ".sassdocrc")) === false) {
                return Promise.resolve();
            }

            let themeFiles = glob.sync(theme + "/dist/all.scss");

            let sassdocrc = JSON.parse( fs.readFileSync( path.join(theme, ".sassdocrc"), "utf8" ) );
            return sassdoc(themeFiles, {
                json: path.join(theme, "dist", 'variables.json'),
                dest: path.join(theme, ".tmp"),
                dist: path.join(theme, "docs"),
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
        let status = cp.spawnSync("git", [ "diff", "--exit-code", "--quiet", "--", "**/docs/*" ]).status;

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

function resolveVars() {
    let themes = glob.sync(paths.sass.themes, {
        ignore: [
            'packages/fluent',
            'packages/utils'
        ]
    });
    const cwd = process.cwd();

    distFlat();

    themes.forEach( theme => {
        let variablesJson = path.resolve( cwd, `${theme}/dist/variables.json` );
        let variablesScss = path.resolve( cwd, `${theme}/dist/variables.scss` );
        let content = {};

        fse.ensureFileSync( variablesJson );
        fse.copyFileSync('./lib/variables.scss', variablesScss );

        dartSass.compile(variablesScss, {
            functions: {
                'k-resolve-var($key, $type, $value)': (args) => {
                    const _key = args[0].toString();
                    const _type = args[1].toString();
                    const _val = args[2].toString();

                    content[_key] = {
                        type: _type,
                        value: _val
                    };

                    return new dartSass.SassString('');
                }
            },
            logger: dartSass.Logger.silent
        });

        fs.writeFileSync( variablesJson, JSON.stringify( content, null, 4 ) );

    });

    return Promise.resolve();
}
gulp.task('resolve-vars', resolveVars);

module.exports.resolveVars = resolveVars;
