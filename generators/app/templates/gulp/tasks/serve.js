var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    config = require('../config');

gulp.task('serve', function () {
    browserSync.init({
        proxy: config.browsersync.proxyUrl,
        port: config.browsersync.port
    });
});


// de browsersync-instantie even exporteren,
// zodat andere tasks deze kunnen aanroepen om te reloaden (zoals de css/js tasks)
module.exports = {
    instance: browserSync
};