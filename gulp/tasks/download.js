var gulp = require('gulp'),
gutil = require('gulp-util'),
download = require("gulp-download-stream"),
fileExists = require("file-exists"),
forgeModules = require("../../forge.json"),
baseCdnPath = forgeModules.baseCdnPath,
localCdnPath = forgeModules.localCdnPath,
environment = forgeModules.environment,
forgeSupportScriptPath = "src/common/js/forge/support/",
forgeServicesScriptPath = "src/common/js/forge/services/";

function downloadSupportScripts() {
    // Download and copy forge support scripts to app/common/js/forge/support directory
    forgeModules.supportModules.forEach(function (supportModule) {
        download(baseCdnPath + environment + supportModule).pipe(gulp.dest(forgeSupportScriptPath));
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
            download(baseCdnPath + environment + serviceModule).pipe(gulp.dest(forgeServicesScriptPath));
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