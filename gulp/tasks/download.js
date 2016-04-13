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
    var downloadUrls = forgeModules.supportModules.map(function (supportModule) {
        return baseCdnPath + environment + supportModule;
    });

    var stream = download(downloadUrls)
        .pipe(gulp.dest(forgeSupportScriptPath));

    return stream;
};

function downloadServiceScripts() {
    var localPaths = [];
    var downloadUrls = [];

    // Download and copy forge service proxy scripts to app/common/js/forge/services directory
    forgeModules.serviceModules.forEach(function (serviceModule) {
        var microserviceName = serviceModule.MicroserviceName;
        var microserviceVersion = serviceModule.Version;
        var entities = serviceModule.Entities;

        entities.forEach(function (entity) {
            var entityName = entity.Name;

            var modulePath = environment + microserviceName + '/' + microserviceVersion + '/' + entityName;
            var localPath = localCdnPath + modulePath;

            if (fileExists(localPath)) {
                gutil.log(gutil.colors.green("Downloading local: ") + gutil.colors.cyan(localPath));
                localPaths.push(localPath);
            } else {
                downloadUrls.push(baseCdnPath + modulePath);
            }
        });
    });

    gulp.src(localPaths)
        .pipe(gulp.dest(forgeServicesScriptPath));

    var stream = download(downloadUrls)
        .pipe(gulp.dest(forgeServicesScriptPath));

    return stream;
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