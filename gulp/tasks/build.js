var gulp = require('gulp'),
    webpack = require('webpack'),
    config = require('../config'),
    gutil = require('gulp-util');

var frameworkPackConfig = require('../../src/webpack.config.js');
var frameworkCompiler = webpack(frameworkPackConfig);

gulp.task('pack_smith_framework', ['eslint_framework', 'download_all_forge_scripts', 'clean_framework'], function () {
    frameworkCompiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError("pack_smith_framework", err);
        gutil.log("[pack_smith_framework]", stats.toString({
            colors: true
        }));
    });
});

var bundlePackConfig = require('../../app/webpack.config.js');
var bundleCompiler = webpack(bundlePackConfig);

gulp.task('pack_client', ['eslint_client', 'clean_client', 'lib_copy'], function () {
    bundleCompiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError("pack_client", err);
        gutil.log("[pack_client]", stats.toString({
            colors: true
        }));
    });
});