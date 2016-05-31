var path = require('path');
var fs   = require('fs');

// directory name of project
var dirname = path.basename(path.dirname(path.dirname(fs.realpathSync(__filename))));

module.exports = {
    scripts: {
        vendor: {
            paths: [
                // add paths to vendor libs
            ]
        },
        app: {
            paths: [
                'assets/js/app.js'
            ],
            watchPaths: ['assets/js/**/*.js'],
            babel: true
        },
        distPath: './public_html/dist/js'
    },

    styles: {
        sassOptions: {
            // outputStyle: 'compressed'
        },
        paths: ['assets/scss/*.scss'],
        watchPaths: ['assets/scss/**/*.scss'],
        distPath: './public_html/dist/css'
    },

    icons: {
        paths: ['assets/icons/**/*.svg'],
        pathsOptions: {
            base: 'assets/icons'
        },
        inline: false,
        watchPaths: ['assets/icons/**/*.svg'],
        distPath: './public_html/'
    },

    browsersync: {
        port: 3000,
        enabled: true,
        proxyUrl: 'http://dev.local/' + dirname + '/public_html/',
        watchPaths: [
            'public_html/**/*.html'
        ]
    }
};

