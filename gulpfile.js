var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),
    babelify = require('babelify');

    // External dependencies you do not want to rebundle while developing,
    // but include in your application deployment
    var dependencies = [
    	'react',
      'react-dom'
    ];
    // keep a count of the times a task refires
    var scriptsCount = 0;

    // Gulp tasks
    // ----------------------------------------------------------------------------
    gulp.task('scripts', function () {
        bundleApp(false);
    });

    gulp.task('deploy', function (){
    	bundleApp(true);
    });

    gulp.task('styles', function() {
      gulp.src('src/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
    });

    gulp.task('watch', function () {
    	gulp.watch(['./app/*.js'], ['scripts']);
      gulp.watch(['./app/components/*.js'], ['scripts']);
      gulp.watch(['./public/sass/*.scss'], ['styles']);
    });

    gulp.task('connect', function() {
      connect.server({
        root: './',
        livereload: true,
        open: false
        });
    });

    // When running 'gulp' on the terminal this task will fire.
    gulp.task('default', ['connect', 'styles', 'scripts', 'watch']);

    // Private Functions
    // ----------------------------------------------------------------------------
    function bundleApp(isProduction) {
    	scriptsCount++;
    	// Browserify will bundle all our js files together in to one and will let
    	// us use modules in the front end.
    	var appBundler = browserify({
        	entries: './app/app.js',
        	debug: true
      	});

    	// If it's not for production, a separate vendors.js file will be created
    	// the first time gulp is run so that we don't have to rebundle things like
    	// react everytime there's a change in the js file
      	if (!isProduction && scriptsCount === 1){
      		// create vendors.js for dev environment.
      		browserify({
    			require: dependencies,
    			debug: true
    		})
    			.bundle()
    			.on('error', gutil.log)
    			.pipe(source('vendors.js'))
    			.pipe(gulp.dest('./public/js/'));
        }
      	if (!isProduction){
      		// make the dependencies external so they dont get bundled by the
    		// app bundler. Dependencies are already bundled in vendor.js for
    		// development environments.
      		dependencies.forEach(function(dep){
      			appBundler.external(dep);
      		});
      	}

      	appBundler
      		// transform ES6 and JSX to ES5 with babelify
    	  	.transform("babelify", {presets: ["es2015", "react"]})
    	    .bundle()
    	    .on('error',gutil.log)
    	    .pipe(source('bundle.js'))
    	    .pipe(gulp.dest('./public/js/'));
    }
