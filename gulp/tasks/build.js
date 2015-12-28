var gulp = require('gulp'),
    webpack = require('webpack'),
    config = require('../config'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css');

gulp.task("sass", ['clean_css'], function () {
    gulp.src(config.paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(gulp.dest(config.paths.css));
});

gulp.task('default', ["pack_framework", "pack_bundle", "sass"], function () {
    
});

var frameworkPackConfig = require('../../src/webpack.config.js');

var frameworkCompiler = webpack(frameworkPackConfig);

gulp.task('pack_framework', ['eslint_framework', 'clean_framework_pack'], function () {
    frameworkCompiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError("pack_framework", err);
        gutil.log("[pack_framework]", stats.toString({
            colors: true
        }));
    });
});

var bundlePackConfig = require('../../app/webpack.config.js');

var bundleCompiler = webpack(bundlePackConfig);

gulp.task('pack_bundle', ['eslint_app', 'clean_bundle_pack'], function () {
    bundleCompiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError("pack_bundle", err);
        gutil.log("[pack_bundle]", stats.toString({
            colors: true
        }));
    });
});