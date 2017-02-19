'use strict';

var gulp             = require('gulp'),
    sass             = require('gulp-sass'),
    autoprefixer     = require('gulp-autoprefixer'),
    sourcemaps       = require('gulp-sourcemaps'),
    cssmin           = require('gulp-cssmin'),
    rename           = require('gulp-rename'),
    del              = require('del'),
    taskTime         = require('gulp-total-task-time'),
    stripCssComments = require('gulp-strip-css-comments'),
    cssbeautify      = require('gulp-cssbeautify'),
    header           = require('gulp-header'),
    pkg              = require('./package.json'),
    watch            = require('gulp-watch');

/* Header banner */
var banner = ['/**',
        '  * Pavilion CSS Framework',
        '  * Version: <%= pkg.version %>',
        '  * Website: <%= pkg.homepage %>',
        '  * License: <%= pkg.license %>',
        '  */',
        '\n'
    ].join('\n');

/* Record total task time */
taskTime.init();

/* Clean task - cleans'dist' and 'demo/css' folders */
gulp.task('clean', function() {
    return del(['dist/*', 'demo/css/*']);
});

/* Compile SCSS, Autoprefix, Stripcomments, Beautify, Minify. */
gulp.task('scss-dist', function() {
    return gulp.src('scss/pavilion.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ 
            outputStyle: 'expanded' 
        }).on('error', sass.logError))
        .pipe(autoprefixer({ 
            browsers: ['last 2 versions'], 
            cascade: false 
        }))
        .pipe(stripCssComments({ 
            preserve: false 
        }))
        .pipe(cssbeautify())
        .pipe(header(banner, { 
            pkg: pkg 
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(gulp.dest('demo/css'))
        .pipe(cssmin())
        .pipe(rename({ 
            suffix: '.min' 
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/'));
});

/* Watch files, clean and rebuild SCSS on change */
gulp.task('watchscss', function() {
    gulp.watch('scss/**/*', ['clean', 'scss-dist']);
});

/* Watch task */
gulp.task('watch', ['clean', 'scss-dist', 'watchscss']);

/* Default task */
gulp.task('default', ['clean', 'scss-dist']);
