/* jshint esnext: true */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const $ = require('gulp-load-plugins')();

const STYLES = 'src/**/*.scss';

gulp.task('start', ['sass'], function() {
    browserSync.init({
        server: ".",
        startPath: "demo/index.html"
    });

    return gulp.watch(STYLES, ["sass"]);
});

gulp.task("sass", function() {
    return gulp.src(STYLES)
        .pipe($.sass().on('error', $.sass.logError))
        .pipe(browserSync.stream({match: '**/*.css'}))
        .pipe($.rename({dirname: ''}))
        .pipe(gulp.dest('dist'));
});

gulp.task("default", [ "sass" ]);
