var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('static/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('static/css'))
});

gulp.task('default', function() {
	gulp.watch('static/sass/**/*.scss', ['styles']);
});
