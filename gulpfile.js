var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    htmlmin = require('gulp-htmlmin'),
    cleanCSS = require('gulp-clean-css'),
    babel = require('gulp-babel');

gulp.task('connect', ['minify-css', 'minify-html', 'compress'], function() {
  connect.server();
});

gulp.task('jsFallback', function() {
    gulp.src('src/js/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('src/babel-output'));
});

gulp.task('compress', ['jsFallback'], function (cb) {
  pump([
        gulp.src('src/babel-output/*.js'),
        uglify(),
        gulp.dest('static/js')
    ],
    cb
  );
});

gulp.task('minify-html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
});

gulp.task('styles', function() {
  gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
});

gulp.task('minify-css', ['styles'], function() {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('static/css'));
});

gulp.task('default', ['connect'], function() {
      gulp.watch('src/sass/**/*.scss', ['minify-css']);
      gulp.watch('src/js/**/*.js', ['compress']);
      gulp.watch('src/*.html', ['minify-html']);
});
