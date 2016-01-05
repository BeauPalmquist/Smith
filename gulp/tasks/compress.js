﻿var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('compress', function () {
    gulp.src([
        'src/lib/js/lib/jquery.ui.js',
        'src/lib/js/lib/jRespond.js',
        'src/lib/js/lib/nav.accordion.js',
        'src/lib/js/lib/hover.intent.js',
        'src/lib/js/lib/hammerjs.js',
        'src/lib/js/lib/jquery.hammer.js',
        'src/lib/js/lib/jquery.fitvids.js',
        'src/lib/js/lib/scrollup-min.js',
        'src/lib/js/lib/smoothscroll.js',
        'src/lib/js/lib/jquery.slimscroll.js',
        'src/lib/js/lib/velocity.js',
        'src/lib/js/lib/smart-resize.js',
        'src/lib/js/lib/jquery.loadmask.js'])
        .pipe(concat('smith_concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('smith-libs.js'))
        .pipe(uglify())
      .pipe(gulp.dest('dist'))
});