var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var download = require("gulp-download");

var forgeModules = require("../../forge.json");
var baseCdnPath = forgeModules.baseCdnPath;
var forgeSupportScriptPath = "src/common/js/forge/support/";
var forgeServicesScriptPath = "src/common/js/forge/services/";

function downloadSupportScripts() {
    // Download and copy forge support scripts to app/common/js/forge/support directory
    forgeModules.supportModules.forEach(function(supportModule) {
        download(baseCdnPath + supportModule.path).pipe(rename(supportModule.filename + ".js")).pipe(gulp.dest(forgeSupportScriptPath));
    });
};

function downloadServiceScripts() {
    // Download and copy forge support scripts to app/common/js/forge/support directory
    forgeModules.serviceModules.forEach(function(serviceModule) {
        download(baseCdnPath + serviceModule.path).pipe(rename(serviceModule.filename + ".js")).pipe(gulp.dest(forgeServicesScriptPath));
    });
};

gulp.task("download_forge_support_scripts", function () {
    downloadSupportScripts();
});

gulp.task("download_forge_service_scripts", function() {
    downloadServiceScripts();
});

gulp.task("download_all_forge_scripts", function () {
    downloadSupportScripts();
    downloadServiceScripts();
});