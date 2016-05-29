'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var FrontGenerator = yeoman.Base.extend({

    hi: function () {

        // Say hi
        this.log(yosay(
            'Hi, I will scaffold a nice project structure for you'
        ));

    }

});

module.exports = FrontGenerator;
