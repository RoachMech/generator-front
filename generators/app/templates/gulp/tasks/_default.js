var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    serveTask = require('./serve'),
    config = require('../config');


gulp.task('default', function () {
    runSequence(['js.vendor', 'js.app', 'styles']);
});

gulp.task('deploy', function () {
    gulp.start('default');
});

gulp.task('watch', function () {
    gulp.start('default');

    gulp.watch(config.scripts.app.watchPaths, ['js.app']);
    gulp.watch(config.styles.watchPaths, ['styles']);

    if(config.browsersync.enabled) {
        gulp.watch(config.browsersync.watchPaths).on('change', serveTask.instance.reload);
    }

});

gulp.task('js', function () {
    runSequence(['js.vendor', 'js.app']);
});

gulp.task('watch-serve', function () {
    runSequence(['watch', 'serve']);
});

