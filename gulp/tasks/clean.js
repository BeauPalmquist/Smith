var gulp = require("gulp"),
    rimraf = require("rimraf"),
    config = require('../config'),
    notify = require('gulp-notify');


// Clean Tasks
gulp.task("clean_all", ["clean_lib", "clean_css", "clean_framework_pack", "clean_bundle_pack"], function () {
    
});

gulp.task("clean_lib", function (cb) {
    rimraf(config.paths.lib, cb);
});

gulp.task("clean_css", function (cb) {
    rimraf(config.paths.css, cb);    
});

gulp.task("clean_framework_pack", function (cb) {
    rimraf(config.paths.dist + 'index.js', cb);
});

gulp.task("clean_bundle_pack", function (cb) {
    rimraf(config.paths.js + 'index.js', cb);
});