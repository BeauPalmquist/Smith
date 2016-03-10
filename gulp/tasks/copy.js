var gulp = require('gulp'),
    config = require('../config');

// Copy Tasks
gulp.task("lib_copy", ['clean_lib'], function () {
    var bower = {
        "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
        "jquery": "jquery/dist/**/*.{js,map}",
        "font-awesome": "FontAwesome/**/*.{css,otf,eot,svg,ttf,woff,woff2}"
    };

    for (var destinationDir in bower) {
        gulp.src(config.paths.bower + bower[destinationDir])
          .pipe(gulp.dest(config.paths.lib + destinationDir));
    }

    var npm = {
        "react": "react/dist/**/*.js",
        "react-redux": "react-redux/dist/**/*.js",
        "redux": "redux/dist/**/*.js",
        "react-router": "react-router/umd/**/*.js",
        "lodash": "lodash/**/*.js"
    }

    for (var destinationDir in npm) {
        gulp.src(config.paths.npm + npm[destinationDir])
          .pipe(gulp.dest(config.paths.lib + destinationDir));
    }

    gulp.src('./dist/smith-libs.js')
        .pipe(gulp.dest(config.paths.js));    
});