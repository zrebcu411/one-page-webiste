var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('./stylesheets/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./stylesheets/'));
});

gulp.task('start', function() {
    gulp.watch(['./stylesheets/*.scss','./stylesheets/partials/*.scss','./stylesheets/modules/*.scss'], ['styles']);
});
