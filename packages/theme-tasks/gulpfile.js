"use strict";

const fs = require("fs");
const path = require("path");
const cp = require("child_process");
const glob = require("glob");
const gulp = require("gulp");
const logger = require("gulplog");
const colors = require("ansi-colors");
const mime = require("mime");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const calc = require("postcss-calc");
const Fiber = require("fibers");
const sassdoc = require("sassdoc");
const eslint = require("gulp-eslint");
const sasslint = require("gulp-sass-lint");
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
        dist: "./dist",
        assets: "./scss/**/*.{png,gif,ttf,woff}"
    },
    less: {
        theme: "styles/**/kendo.*.less",
        src: "./styles/**/*.less",
        dist: "./dist/styles"
    },
    js: {
        src: "**/*.js",
        exclude: "!node_modules/**"
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
function _info(msg, ...args) { return logger.info(colors.gray(msg), ...args); }
// function _error(msg, ...args) { return logger.info(colors.red(msg), ...args); }
const _em = colors.magentaBright;


// #region core
function build(fileGlob = paths.sass.src, dest = paths.sass.dist, options = sassOptions) {
    return gulp.src(fileGlob)
        .on("data", function(data) {
            options.importer.resetImported();
            _info(`Compiling ${_em(fileGlob)} to ${_em(dest)}`);

            return data;
        })
        .pipe(sass.sync(options).on("error", sass.logError))
        .pipe(postcss(postcssPlugins))
        .pipe(gulp.dest(paths.sass.dist));
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
    sass.compiler = require("node-sass");
    return build(paths.sass.swatches, paths.sass.dist);
});
gulp.task('sass:prepublish', gulp.series("sass", "sass:swatches"));
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
    sass.compiler = require("sass");
    return build(paths.sass.swatches, paths.sass.dist);
});
gulp.task('dart:prepublish', gulp.series("dart", "dart:swatches"));
// #endregion


// #region lint
function lintStyles() {
    return gulp.src(paths.sass.src)
        .pipe(sasslint())
        .pipe(sasslint.format())
        .pipe(sasslint.failOnError());
}

function lintScripts() {
    return gulp.src([ paths.js.src, paths.js.exclude ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

gulp.task("lint", function() {
    if (__dirname === process.cwd()) {
        // called from theme-tasks
        return lintScripts();
    }

    // consumed from themes
    return lintStyles();
});
// #endregion


// #region assets
gulp.task("assets", function() {
    let files = glob.sync(paths.sass.assets);

    files.forEach(function(filename) {
        _info(`Converting asset to data URI: ${_em(filename)}`);
        embedFile(filename);
    });

    return Promise.resolve();
});

function embedFile(filename) {
    let basename = path.basename(filename);
    let mimeType = mime.lookup(filename);
    let base64 = fs.readFileSync(filename).toString("base64");
    let template = fs.readFileSync(path.join(__dirname, "lib/", "data-uri.template"), "utf8");

    let output = template
        .replace(/<FILENAME>/g, basename)
        .replace(/<MIME>/g, mimeType)
        .replace(/<BASE64>/g, base64);

    let outputFilename = path.join(
        path.dirname(filename),
        path.basename(filename, path.extname(filename)) + ".scss"
    );

    fs.writeFileSync(outputFilename, output);
}
// #endregion


// #region api
gulp.task("api", function() {
    return gulp.src(paths.sass.src)
        .pipe(sassdoc());
});
gulp.task("api:check", function() {
    //git diff --exit-code --quiet -- docs/
    return gulp.task("api")().promise.then(function() {
        let status = cp.spawnSync("git", [ "diff", "--exit-code", "--quiet", "--", "docs/" ]) .status;

        if (status !== 0) {
            throw new Error("API docs are out of date");
        }
    });
});
// #endregion


// #region ci
gulp.task("ci", gulp.series("lint", "sass", "dart", "api:check"));
gulp.task("ci:full", gulp.series("lint", "sass", "dart", "api:check"));
// #endregion


// #region prepublish
gulp.task("prepublish", gulp.series("sass:prepublish"));
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
