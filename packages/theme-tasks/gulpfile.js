"use strict";

const fs = require("fs");
const path = require("path");
const gulp = require("gulp");
const PluginError = require("plugin-error");
const logger = require("gulplog");
const colors = require("ansi-colors");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const calc = require("postcss-calc");
const Fiber = require("fibers");
const baka = require("@joneff/baka");
const sassImporterFactory = require("./lib/sassimporter");


// Misc
// function getCwd() { return _cwd; }
// let _cwd = process.cwd();


// Settings
const paths = {
    sass: {
        theme: "./scss/all.scss",
        swatches: "./scss/swatches/*.scss",
        src: "./scss/**/*.scss",
        inline: "./dist/all.scss",
        dist: "./dist"
    },
    less: {
        theme: "styles/**/kendo.*.less",
        src: "./styles/**/*.less",
        dist: "./dist/styles"
    }
};
const browsers = [
    "Explorer >= 9",
    "last 3 Edge versions",
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Opera versions",
    "last 2 Safari major versions",
    "last 2 iOS major versions",
    "Android >= 4.4",
    "ExplorerMobile >= 10"
];

const postcssPlugins = [
    calc({
        precision: 10
    }),
    autoprefixer({
        overrideBrowserslist: browsers
    })
];
const sassOptions = {
    precision: 10,
    outputStyle: "compressed",
    importer: sassImporterFactory({ cache: true }),
    fiber: Fiber
};


// Helpers
function getArg(key) {
    let index = process.argv.indexOf(key);
    let next = process.argv[index + 1];

    return (index < 0) ? null : (!next || next[0] === "-") ? true : next; // eslint-disable-line no-nested-ternary
}
function ensureDirSync(dir) {
    dir.split(path.sep).reduce((acc, curr) => {
        let dirPath = path.join(acc, curr);

        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }

        return dirPath;
    });
}
function _info(msg, ...args) { return logger.info(colors.gray(msg), ...args); }
function _error(msg, ...args) { return logger.error(colors.gray(msg), ...args); }
const _em = colors.magentaBright;


// #region core
function build(fileGlob = paths.sass.src, dest = paths.sass.dist, options = sassOptions) {
    return gulp.src(fileGlob)
        .on("data", function(data) {
            options.importer.resetImported();
            _info(`Compiling ${_em(fileGlob)} to ${_em(dest)}`);

            return data;
        })
        .pipe(sass.sync(options).on("error", function(error) {
            // error.message
            // error.formatted
            // error.messageFormatted
            // error.messageOriginal
            _info();
            _error(`Error: ${colors.red(error.messageOriginal)}`);
            _info(`File: ${error.file}:${error.line}:${error.column}`);
            _info();

            throw new PluginError(error.plugin, error.messageFormatted);
        }))
        .pipe(postcss(postcssPlugins))
        .pipe(gulp.dest(paths.sass.dist));
}
function flattenSassFiles(file = paths.sass.theme, outFile = paths.sass.inline) {
    ensureDirSync(path.dirname(outFile));
    baka.compile(file, outFile);

    Promise.resolve();
}
// #endregion


// #region node-sass
gulp.task("sass", function() {
    let file = getArg("--file") || paths.sass.theme;
    let dest = getArg("--dest") || paths.sass.dist;

    sass.compiler = require("node-sass");
    return build(file, dest);
});
gulp.task('sass:watch', function() {
    sass.compiler = require("node-sass");
    gulp.watch(paths.sass.src, gulp.series("sass"));
});
gulp.task('sass:swatches', function() {
    flattenSassFiles(paths.sass.theme, paths.sass.inline);

    sass.compiler = require("node-sass");
    return build(paths.sass.swatches, paths.sass.dist);
});
gulp.task('sass:flat', function() {
    flattenSassFiles(paths.sass.theme, paths.sass.inline);

    sass.compier = require("sass");
    return build(paths.sass.inline, paths.sass.dist);
});
// #endregion


// #region dart-sass
gulp.task("dart", function() {
    let file = getArg("--file") || paths.sass.theme;
    let dest = getArg("--dest") || paths.sass.dist;

    sass.compiler = require("sass");
    return build(file, dest);
});
gulp.task('dart:watch', function() {
    sass.compiler = require("sass");
    gulp.watch(paths.sass.src, gulp.series("dart"));
});
gulp.task('dart:swatches', function() {
    flattenSassFiles(paths.sass.theme, paths.sass.inline);

    sass.compiler = require("sass");
    return build(paths.sass.swatches, paths.sass.dist);
});
gulp.task('dart:flat', function() {
    flattenSassFiles(paths.sass.theme, paths.sass.inline);

    sass.compier = require("sass");
    return build(paths.sass.inline, paths.sass.dist);
});
// #endregion


const registry = gulp.registry();
const taskHelper = {
    registry,

    exportTasksToGulpInstance(gulpInstance) {

        Object.entries( registry.tasks() ).forEach(function(taskEntry) {

            let taskName = taskEntry[0];
            let taskBody = taskEntry[1].unwrap();

            gulpInstance.task(taskName, taskBody);

        });

    }
};

module.exports.taskHelper = taskHelper;
