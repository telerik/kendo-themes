"use strict";

const gulp = require("gulp");
const paths = require("./node_modules/@progress/kendo-theme-tasks/lib/globals").paths;
const sassTasks = require("./node_modules/@progress/kendo-theme-tasks/gulpfile").tasks.sass;

exports.sass = sassTasks.theme;
exports.swatches = sassTasks.swatches;
exports.api = sassTasks.api;
exports.assets = sassTasks.assets;
exports.lint = sassTasks.lint;
exports.dart = sassTasks.dart;


gulp.task('sass:watch', function () {
    gulp.watch(paths.sass.src, exports.sass);
});
