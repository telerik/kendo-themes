"use strict";

const { paths, browsers } = require("../globals");
const gulp = require("gulp");
const glob = require("glob");
const path = require("path");
const fs = require("fs");
const mime = require("mime");
const sass = require("gulp-sass");
const packageImporterFactory = require("../utils/nodesass-packageimporter");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const calc = require("postcss-calc");
const sassdoc = require('sassdoc');

const postcssPlugins = [
    calc({
        precision: 10
    }),
    autoprefixer({
        overrideBrowserslist: browsers
    })
];
const quickSassOptions = {
    precision: 10,
    outputStyle: "compressed",
    importer: packageImporterFactory({ cache: true })
};
const fullSassOptions = {
    ...quickSassOptions,
    importer: packageImporterFactory({ cache: false })
};


// #region core
function build(fileGlob = paths.sass.src, options = quickSassOptions) {
    return gulp.src(fileGlob)
        .pipe(sass(options).on("error", sass.logError))
        .pipe(postcss(postcssPlugins))
        .pipe(gulp.dest(paths.sass.dist));
}
function buildFile(file) {
    return build(file);
}
// #endregion


// #region theme
function theme() {
    return build(paths.sass.theme);
}
function swatches() {
    return build(paths.sass.swatches, fullSassOptions);
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
    buildFile,
    theme,
    swatches,
    api,
    assets
};
