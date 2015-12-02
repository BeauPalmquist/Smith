var gulp = require('gulp'),
    config = require('../config');

// Copy Tasks
gulp.task("lib_copy", ['clean_lib'], function () {
    var bower = {
        "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
        "jquery": "jquery/dist/**/*.{js,map}",
        "signalr": "signalr/jquery.signalR.min.js",
        "font-awesome": "FontAwesome/**/*.{css,otf,eot,svg,ttf,woff,woff2}"
    };

    for (var destinationDir in bower) {
        gulp.src(config.paths.bower + bower[destinationDir])
          .pipe(gulp.dest(config.paths.lib + destinationDir));
    }

    // Add third party Westilo css, js and fonts
    gulp.src(config.paths.westilo)
        .pipe(gulp.dest(config.paths.lib + "Westilo"));
    
});