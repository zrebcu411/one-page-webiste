var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('minify-css', function() {
    return gulp.src('stylesheets/style.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('stylesheets'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        }
    });
});

gulp.task('sass', function() {
    gulp.src('stylesheets/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('stylesheets'))
        .pipe(browserSync.stream());
});

gulp.task('start', ['browser-sync', 'sass', 'minify-css'], function() {
    gulp.watch('stylesheets/**/*.scss', ['sass']);
    gulp.watch('stylesheets/*.css', ['minify-css']);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
});
