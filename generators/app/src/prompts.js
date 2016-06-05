'use strict';

var _ = require('lodash');
var chalk = require('chalk');

var prompts = require('../prompts.json');

module.exports = function (FrontGenerator) {

    FrontGenerator.prototype.askQuestions = function askQuestions() {
        var done = this.async();

        this.prompt(prompts, function (props) {
            this.props = props;

            done();
        }.bind(this));
    };

};
