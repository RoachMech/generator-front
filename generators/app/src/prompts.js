'use strict';

var chalk = require('chalk');

var prompts = require('../prompts.json');

module.exports = function (FrontGenerator) {

    /**
     * Ask questions
     */
    FrontGenerator.prototype.askQuestions = function askQuestions() {
        var done = this.async();

        this.prompt(prompts, function (props) {
            this.props = props;

            done();
        }.bind(this));
    };

};
