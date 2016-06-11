'use strict';

module.exports = function (FrontGenerator) {

    /**
     * Write files
     */
    FrontGenerator.prototype.scaffold = function scaffold() {
        this.bulkDirectory('assets', 'assets');
        this.bulkDirectory('gulp', 'gulp');
        this.copy('public_html/_index.html', 'public_html/index.html');
        this.copy('_gulpfile.js', 'gulpfile.js');
        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
        this.bulkCopy('_.gitignore', '.gitignore');
    };

};
