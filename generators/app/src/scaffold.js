'use strict';

module.exports = function (FrontGenerator) {

    FrontGenerator.prototype.scaffold = function scaffold() {
        this.copy('_index.html', 'app/index.html')
    };

};
