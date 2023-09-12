const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass-embedded'));

const sassOptions = {
    precision: 10,
    outputStyle: 'expanded',
    includePaths: '../../node_modules'
};

gulp.task('compile', function(done) {
    return gulp.src('./styles/*.scss')
        .pipe(sass.sync(sassOptions).on('error', function(err) {
            done(err);
        }))
        .pipe(gulp.dest('./dist'));
});
