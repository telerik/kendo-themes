"use strict";

const fs = require("fs");
const path = require("path");
const gulp = require("gulp");
const glob = require("glob");
const PluginError = require("plugin-error");
const logger = require("gulplog");
const colors = require("ansi-colors");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const calc = require("postcss-calc");
const baka = require("@joneff/baka");
const sassImporterFactory = require("./lib/sassimporter");
const nodeSass = require("node-sass");
const dartSass = require("sass");
let sassCompiler = nodeSass;


// Misc
// function getCwd() { return _cwd; }
// let _cwd = process.cwd();


// #region helpers
const ensureDirSync = (dir) => {
    let resolvedPath = path.normalize(dir);

    resolvedPath.split(path.sep).reduce((acc, curr) => {
        let dirPath = path.join(acc, curr);

        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }

        return dirPath;
    });
};
// #endregion


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
    outputStyle: "expanded",
    importer: sassImporterFactory({ cache: true })
};


// Helpers
function getArg(key) {
    let index = process.argv.indexOf(key);
    let next = process.argv[index + 1];

    return (index < 0) ? null : (!next || next[0] === "-") ? true : next; // eslint-disable-line no-nested-ternary
}
function _info(msg, ...args) { return logger.info(colors.gray(msg), ...args); }
function _error(msg, ...args) { return logger.error(colors.gray(msg), ...args); }
const _em = colors.magentaBright;


// #region core
function build(fileGlob = paths.sass.src, dest = paths.sass.dist, options = sassOptions, compiler = sassCompiler) {

    let files = glob.sync(fileGlob);
    let result;
    let outFile;

    files.forEach(file => {
        options.importer.resetImported();
        _info(`Compiling ${_em(file)} to ${_em(dest)}`);

        try {
            result = compiler.renderSync({
                file,
                ...options
            }).css.toString("utf-8");
        } catch (error) {
            _info();
            _error(`Error: ${colors.red(error.formatted)}`);
            _info(`File: ${error.file}:${error.line}:${error.column}`);
            _info();

            throw new PluginError("sass", error.message);
        }

        result = postcss(postcssPlugins).process( result ).css;

        outFile = path.resolve(
            dest,
            path.basename(file, ".scss") + ".css"
        );

        ensureDirSync(dest);
        fs.writeFileSync(outFile, result);
    });

    return Promise.resolve();
}
function flattenSassFiles(file = paths.sass.theme, outFile = paths.sass.inline, nodeModules = "./node_modules") {
    baka.compile(
        file,
        outFile,
        {
            nodeModules: nodeModules
        }
    );

    Promise.resolve();
}
// #endregion


// #region node-sass
gulp.task("sass", function() {
    let file = getArg("--file") || paths.sass.theme;
    let dest = getArg("--dest") || paths.sass.dist;

    sassCompiler = nodeSass;
    return build(file, dest);
});
gulp.task("sass:watch", function() {
    gulp.watch(paths.sass.src, gulp.series("sass"));
});
gulp.task("sass:swatches", function() {
    flattenSassFiles(paths.sass.theme, paths.sass.inline);

    sassCompiler = nodeSass;
    return build(paths.sass.swatches, paths.sass.dist);
});
gulp.task("sass:flat", function() {
    flattenSassFiles(paths.sass.theme, paths.sass.inline);

    sassCompiler = nodeSass;
    return build(paths.sass.inline, paths.sass.dist);
});
// #endregion


// #region dart-sass
gulp.task("dart", function() {
    let file = getArg("--file") || paths.sass.theme;
    let dest = getArg("--dest") || paths.sass.dist;

    sassCompiler = dartSass;
    return build(file, dest);
});
gulp.task("dart:watch", function() {
    gulp.watch(paths.sass.src, gulp.series("dart"));
});
gulp.task("dart:swatches", function() {
    flattenSassFiles(paths.sass.theme, paths.sass.inline);

    sassCompiler = dartSass;
    return build(paths.sass.swatches, paths.sass.dist);
});
gulp.task("dart:flat", function() {
    flattenSassFiles(paths.sass.theme, paths.sass.inline);

    sassCompiler = dartSass;
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
module.exports.sassOptions = sassOptions;
module.exports.build = build;
module.exports.flattenSassFiles = flattenSassFiles;
