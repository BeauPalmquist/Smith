var gulp = require('gulp'),
    config = require('../config');

// Copy Tasks
gulp.task("lib_copy", ['clean_lib'], function () {

    var npm = {
        "react": "react/dist/**/*.js",
        "react-redux": "react-redux/dist/**/*.js",
        "redux": "redux/dist/**/*.js",
        "react-router": "react-router/umd/**/*.js"
    }

    for (var destinationDir in npm) {
        gulp.src(config.paths.npm + npm[destinationDir])
          .pipe(gulp.dest(config.paths.lib + destinationDir));
    }

    gulp.src('./dist/smith-libs.js')
        .pipe(gulp.dest(config.paths.js));    
});