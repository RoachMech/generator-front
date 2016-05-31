var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    gulpif = require('gulp-if'),
    plumber = require('gulp-plumber'),
    serveTask = require('../serve'),
    config = require('../../config');


gulp.task('js.vendor', function () {
    gulp.src(config.scripts.vendor.paths)
        .pipe(plumber({errorHandler: notify.onError("Error (js-vendor): <%= error.message %>")}))
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(config.scripts.distPath))
        .pipe(gulpif(config.browsersync.enabled, serveTask.instance.stream()))
        .pipe(notify({message: 'js.vendor complete', onLast: true}));
});