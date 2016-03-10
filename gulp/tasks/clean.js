var gulp = require("gulp"),
    rimraf = require("rimraf"),
    config = require('../config');


// Clean Tasks
gulp.task("clean_all", ["clean_lib", "clean_css", "clean_framework", "clean_client"], function () {
    
});

gulp.task("clean_lib", function (cb) {
    rimraf(config.paths.lib, cb);
});

gulp.task("clean_css", function (cb) {
    rimraf(config.paths.css, cb);    
});

gulp.task("clean_framework", function (cb) {
    rimraf(config.paths.dist, cb);
});

gulp.task("clean_client", function (cb) {
    rimraf(config.paths.js, cb);
});