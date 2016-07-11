var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    htmlmin = require('gulp-htmlmin'),
    cleanCSS = require('gulp-clean-css'),
    babel = require('gulp-babel');

gulp.task('connect', ['css-compress', 'html-compress', 'js-compress'], function() {
  connect.server();
});

gulp.task('js-fallback', function() {
  gulp.src('src/js/*.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('src/js/babel'));
});

gulp.task('js-compress', ['js-fallback'], function (cb) {
  pump([
    gulp.src('src/js/babel/*.js'),
    uglify(),
    gulp.dest('static/js')
  ], cb);
});

gulp.task('html-compress', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'));
});

gulp.task('styles', function() {
  gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('static/css/compiled'));

});

gulp.task('css-compress', ['styles'], function() {
  return gulp.src('static/css/compiled/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('static/css'));
});

gulp.task('default', ['connect'], function() {
  gulp.watch('src/sass/**/*.scss', ['css-compress']);
  gulp.watch('src/js/*.js', ['js-compress']);
  gulp.watch('src/*.html', ['html-compress']);
});
