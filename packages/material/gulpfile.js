"use strict";

const gulp = require("gulp");
const {
    paths,
    sassTheme,
    sassSwatches,
    api,
    assets,
    dartTheme,
    lintStyles
} = require("@progress/kendo-theme-tasks/gulpfile");

module.exports.sass = sassTheme;
module.exports.swatches = sassSwatches;
module.exports.api = api;
module.exports.assets = assets;
module.exports.lint = lintStyles;
module.exports.dart = dartTheme;


gulp.task('sass:watch', function () {
    gulp.watch(paths.sass.src, module.exports.sass);
});
