const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: ''
    }
  });
});

gulp.task('minify-css', () => {
  gulp.src('stylesheets/style.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('stylesheets'))
    .pipe(browserSync.stream());
});

gulp.task('minify-js', () => {
  gulp.src('js/scripts.js')
  .pipe(babel({ presets: ['babili'] }))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('js'))
  .pipe(browserSync.stream());
});


gulp.task('sass', () => {
  gulp.src('stylesheets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('stylesheets'))
    .pipe(browserSync.stream());
});

gulp.task('dev', ['browser-sync', 'sass', 'minify-css', 'minify-js'], () => {
  gulp.watch('stylesheets/**/*.scss', ['sass']);
  gulp.watch('stylesheets/*.css', ['minify-css']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('js/*.js', browserSync.reload);
});
