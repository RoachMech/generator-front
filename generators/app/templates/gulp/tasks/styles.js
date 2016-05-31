var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    globbing = require('gulp-css-globbing'),
    sourcemaps = require("gulp-sourcemaps"),
    serveTask = require('./serve'),
    gulpif = require('gulp-if'),
    autoprefixer = require('gulp-autoprefixer'),
    config = require('../config');

gulp.task('styles', function () {

    gulp.src(config.styles.paths)
        .pipe(plumber({errorHandler: notify.onError("Error (sass): <%= error.message %>")}))
        .pipe(globbing({
            extensions: ['.scss']
        }))
        .pipe(sourcemaps.init())
        .pipe(sass(
            config.styles.sassOptions
        ))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.styles.distPath))
        .pipe(gulpif(config.browsersync.enabled, serveTask.instance.stream()))
        .pipe(notify({message: 'sass complete', onLast: true}));
});
