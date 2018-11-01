"use strict";

const { paths, browsers } = require("../globals");
const gulp = require("gulp");
const glob = require("glob");
const path = require("path");
const fs = require("fs");
const mime = require("mime");
const sass = require("gulp-sass");
const nodeSassPackageImporter = require("../utils/nodesass-packageimporter");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const calc = require("postcss-calc");
const browserSync = require("browser-sync").create();
const sassdoc = require('sassdoc');

const postcssPlugins = [
    calc({
        precision: 10
    }),
    autoprefixer({
        browsers: browsers
    })
];
const sassOptions = {
    precision: 10,
    outputStyle: "compressed",
    importer: nodeSassPackageImporter
};
const browserSyncOptions = {
    server: {
        baseDir: "./"
    },
    open: false
};


// #region core
function build(glob) {
    let _glob = glob || paths.sass.src;

    return gulp.src(_glob)
        .pipe(sass(sassOptions).on("error", sass.logError))
        .pipe(postcss(postcssPlugins))
        .pipe(gulp.dest(paths.sass.dist))
        .pipe(browserSync.stream({ match: "**/*.css" }));
}
function buildFile(file) {
    return build(file);
}
// #endregion


// #region theme
function theme() {
    return build(paths.sass.theme);
}
function watchtheme() {
    browserSync.init(browserSyncOptions);

    gulp.watch(paths.sass.src, theme);
}
function swatches() {
    return build(paths.sass.swatches);
}
// #endregion


// #region assets
function assets() {
    glob(paths.sass.assets, function(err, files) {
        if (err) {
            console.error(err); // eslint-disable-line no-console
        } else {
            files.forEach(function(filename) {
                console.info("Converting asset to data URI:", filename); // eslint-disable-line no-console
                embedFile(filename);
            });
        }
    });
}

function embedFile(filename) {
    let basename = path.basename(filename);
    let mimeType = mime.lookup(filename);
    let base64 = fs.readFileSync(filename).toString("base64");
    let template = fs.readFileSync(path.join(__dirname, "embedassets/", "data-uri.template"), "utf8");

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
function api() {
    return gulp.src(paths.sass.src)
        .pipe(sassdoc());
}
// #endregion


module.exports = {
    build,
    buildFile,
    theme,
    watchtheme,
    swatches,
    api,
    assets
};
