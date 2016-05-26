'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.Base.extend({
    prompting: function () {
        // Have Yeoman greet the user.
        this.log(yosay(
            'Scaffolding a nice project structure'
        ));

        var prompts = [{
            name: 'name',
            message: 'How would you like to call your new project?'
        }];

        return this.prompt(prompts).then(function (props) {
            // To access props later use this.props.someAnswer;
            this.props = props;
        }.bind(this));
    },

    writing: function () {
        this.log(this.props.name);
        mkdirp.sync(this.props.name);
        // this.fs.write(this.props.name);
    },

    install: function () {
        // this.installDependencies();
    }
});
