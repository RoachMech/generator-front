'use strict';

module.exports = function (FrontGenerator) {

    FrontGenerator.prototype.prepareBowerDependencies = function prepareBowerDependencies() {
        this.bowerDependencies = {};

        this.props.bowerDependencies.forEach(function (dependency) {
            this[dependency.name] = dependency.version;
        }, this.bowerDependencies);

        this.dependencyList = JSON.stringify(this.bowerDependencies, null, 2);
    };

    FrontGenerator.prototype.install = function install() {
        // this.installDependencies();
    };

};