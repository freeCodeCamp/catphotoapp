"use strict";
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');
const connect = require('gulp-connect');
const babelify = require('babelify'); // eslint-disable-line no-unused-vars

// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
const dependencies = [
  'react',
  'react-dom',
];

let scriptsCount = 0;

function bundleApp(isProduction) {
  scriptsCount++;

  const appBundler = browserify({
    entries: './app/App.js',
    debug: true,
  });

  if (!isProduction && scriptsCount === 1) {
    browserify({
      require: dependencies,
      debug: true,
    })
	.bundle()
	.on('error', gutil.log)
	.pipe(source('vendors.js'))
	.pipe(gulp.dest('./public/js/'));
  }

  if (!isProduction) {
    dependencies.forEach(dep => {
      appBundler.external(dep);
    });
  }

  appBundler
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .on('error', gutil.log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/js/'));
}

gulp.task('scripts', () => {
  bundleApp(false);
});

gulp.task('deploy', () => {
  bundleApp(true);
});

gulp.task('styles', () => {
  gulp.src('public/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', () => {
  gulp.watch(['./app/*.js'], ['scripts']);
  gulp.watch(['./app/**/*.js'], ['scripts']);
  gulp.watch(['./public/sass/*.scss'], ['styles']);
});

gulp.task('connect', () => {
  connect.server({
    root: './',
    livereload: true,
    open: false,
  });
});

// When running 'gulp' on the terminal this task will fire.
gulp.task('default', ['connect', 'styles', 'scripts', 'watch']);
