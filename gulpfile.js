'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var del = require('del');
var taskTime = require('gulp-total-task-time');
var stripCssComments = require('gulp-strip-css-comments');
var cssbeautify = require('gulp-cssbeautify');
var watch = require('gulp-watch');

taskTime.init();

/* Clean folders */
gulp.task('clean', function() {
    return del([
        'dist/*',
        'demo/css/*'
    ]);
});

/* Compile SCSS, Autoprefix, Stripcomments, Beautify, Minify. */
gulp.task('scss-dist', function() {
    return gulp.src('scss/pavilion.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(stripCssComments({
            preserve: false
        }))
        .pipe(cssbeautify())
        .pipe(gulp.dest('dist/'))
        .pipe(gulp.dest('demo/css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/'));
});

/* Watch files, clean and rebuild SCSS on change */
gulp.task('watchscss', function() {
    gulp.watch('scss/**/*', ['clean', 'scss-dist']);
});

gulp.task('watch', ['clean', 'scss-dist', 'watchscss']);

gulp.task('default', ['clean', 'scss-dist']);