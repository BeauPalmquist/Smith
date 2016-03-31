const gulp = require('gulp');
const mocha = require('gulp-mocha');
const babel = require('babel-core/register');
const config = require('../config');

gulp.task('mocha', () => {
    return gulp.src([config.paths.tests], {read: false})
        .pipe(
            mocha({
                reporter: 'nyan',
                compilers: {
                    js: babel
                }
            }));
});