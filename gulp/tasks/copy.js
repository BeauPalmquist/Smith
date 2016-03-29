var gulp = require('gulp'),
    config = require('../config');

// Copy Tasks
gulp.task("lib_copy", ['clean_lib'], function () {
    gulp.src('./dist/smith.css')
        .pipe(gulp.dest(config.paths.css));    
});