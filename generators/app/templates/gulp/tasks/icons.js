var gulp = require('gulp'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    rename = require('gulp-rename'),
    path = require('path'),
    config = require('../config');

gulp.task('icons', function () {

    gulp.src(config.icons.paths, config.icons.pathsOptions)
        .pipe(rename(function (path) {
            var name = ['icon'];
            if (path.dirname != '.') {
                name = path.dirname.split(path.sep);
            }
            name.push(path.basename);
            path.basename = name.join('-');
        }))
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore({inlineSvg: config.icons.inline}))
        .pipe(rename(function (path) {
            path.basename = 'icons';
        }))
        .pipe(gulp.dest(config.icons.distPath));

});