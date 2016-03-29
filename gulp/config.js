var gutil = require('gulp-util'),
    fs = require("fs");

eval("var project = " + fs.readFileSync("./project.json"));

var paths = {
    sass: "./sass/**/*.scss",
    js_framework: "./src/**/*.{js,jsx}",
    js_app: "./app/**/*.{js,jsx}",
    bower: "./bower_components/",
    css: "./" + project.webroot + "/src/css/",
    js: "./" + project.webroot + "/src/js/",
    lib: "./" + project.webroot + "/src/lib/",
    npm: "./node_modules/",
    dist: "./dist/**/*.js"
};

module.exports = {
    paths: paths
};