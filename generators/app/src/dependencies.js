'use strict';

module.exports = function (FrontGenerator) {

    /**
     * Make a list of bower components to install
     */
    FrontGenerator.prototype.prepareBowerComponents = function prepareBowerComponents() {
        this.bowerComponents = [];

        this.props.bowerComponents.forEach(function (component) {
            this.push(component.name);
        }, this.bowerComponents);

    };

    /**
     * Install node modules and bower components
     */
    FrontGenerator.prototype.install = function install() {
        this.bowerInstall(this.bowerComponents, {'--save': true});
        this.npmInstall();
    };

};