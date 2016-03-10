var gulp = require('gulp'),
    config = require('../config');

gulp.task("watch_client", function () {
    gulp.watch(config.paths.js_app, ['eslint_client']);
});

gulp.task("watch_smith_framework", function() {
    gulp.watch(config.paths.js_framework, ['eslint_framework']);
});