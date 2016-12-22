var download = require('download');
var colors = require('colors');
var fileExists = require('file-exists');
var forgeModules = require('./forge.json');
var baseCdnPath = forgeModules.baseCdnPath;
var localCdnPath = forgeModules.localCdnPath;
var environment = forgeModules.environment;
var forgeSupportScriptPath = "./src/forge-proxies/support/";
var forgeServicesScriptPath = "./src/forge-proxies/services/";

function downloadSupportScripts() {
    var localPaths = [];
    var downloadUrls = [];

    console.log("-- Start downloading Forge support scripts --".green);
    forgeModules.supportModules.forEach(function (supportModule) {
        var modulePath = environment + supportModule;
        var localPath = localCdnPath + modulePath;

        if (fileExists(localPath)) {
            console.log("Downloading (from-local): " + colors.cyan(localPath));
            localPaths.push(localPath);
        } else {
            console.log("Downloading (from-CDN): " + colors.magenta(baseCdnPath + modulePath));
            downloadUrls.push(baseCdnPath + modulePath);
        }
    });

    Promise.all(downloadUrls.map(x => download(x, forgeSupportScriptPath))).then(
        () => {
            console.log("-- Finished download Forge support scripts --".green);
            downloadServiceScripts();
        },
        () => {
            console.log("-- Failed to download Forge support scripts --".red);
        }
    );
};

function downloadServiceScripts() {
    var localPaths = [];
    var downloadUrls = [];

    console.info("-- Start downloading Forge service scripts --".green);
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
                console.info("Downloading (from-local): " + colors.cyan(localPath));
                localPaths.push(localPath);
            } else {
                console.info("Downloading (from-CDN): " + colors.magenta(baseCdnPath + modulePath));
                downloadUrls.push(baseCdnPath + modulePath);
            }
        });
    });

    Promise.all(downloadUrls.map(x => download(x, forgeServicesScriptPath))).then(
        () => {
            console.log("-- Finished downloading Forge service scripts --".green)
        },
        ()=> {
            console.log("-- Failed to download Forge service scripts --".red);
        }
    );
};

(function() {
    downloadSupportScripts();
})();