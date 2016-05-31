'use strict';

var _ = require('lodash');
var chalk = require('chalk');

module.exports = function (FrontGenerator) {

    FrontGenerator.prototype.prompts = function prompts() {
        var done = this.async();

        var prompts = [{
            name: 'appName',
            message: 'What is your app\'s name ?'
        }];

        this.prompt(prompts, function (props) {
            this.appName = props.appName;

            done();
        }.bind(this));
    };

};
