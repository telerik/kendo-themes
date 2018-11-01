"use strict";

const { paths } = require("../globals");
const gulp = require("gulp");
const eslint = require("gulp-eslint");
const sasslint = require("gulp-sass-lint");

const sasslintOptions = {
    configFile: "./sass-lint.yml"
};

function lintStyles() {
    return gulp.src(paths.sass.src)
        .pipe(sasslint(sasslintOptions))
        .pipe(sasslint.format())
        .pipe(sasslint.failOnError());
}

function lintScripts() {
    return gulp.src([ paths.js.src, paths.js.exclude ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

exports.sasslint = lintStyles;
exports.jslint = lintScripts;
