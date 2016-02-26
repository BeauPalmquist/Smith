var gulp = require('gulp');
var gutil = require('gulp-util');
var download = require("gulp-download");
var fileExists = require("file-exists");

var forgeModules = require("../../forge.json");
var baseCdnPath = forgeModules.baseCdnPath;
var localCdnPath = forgeModules.localCdnPath;
var forgeSupportScriptPath = "src/common/js/forge/support/";
var forgeServicesScriptPath = "src/common/js/forge/services/";

function downloadSupportScripts() {
    // Download and copy forge support scripts to app/common/js/forge/support directory
    forgeModules.supportModules.forEach(function (supportModule) {
        download(baseCdnPath + supportModule).pipe(gulp.dest(forgeSupportScriptPath));
    });
};

function downloadServiceScripts() {
    // Download and copy forge support scripts to app/common/js/forge/support directory
    forgeModules.serviceModules.forEach(function (serviceModule) {
        var localPath = localCdnPath + serviceModule;
        if (fileExists(localPath)) {
            gutil.log(gutil.colors.green("Downloading local: ") + gutil.colors.cyan(localPath));
            gulp.src(localPath).pipe(gulp.dest(forgeServicesScriptPath));
        } else {
            var result = download(baseCdnPath + serviceModule).pipe(gulp.dest(forgeServicesScriptPath));
            if (result === "undefined.js") {
                gutil.log("Could not resolve service proxy script for " + serviceModule);
            }
        }
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