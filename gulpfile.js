var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server();
});

gulp.task('styles', function() {
  gulp.src('static/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('static/css'))
});

gulp.task('default', ['connect'], function() {
	gulp.watch('static/sass/**/*.scss', ['styles']);
});
