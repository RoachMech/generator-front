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

require('./src/prompts.js')(FrontGenerator);
require('./src/dependencies.js')(FrontGenerator);
require('./src/scaffold.js')(FrontGenerator);

module.exports = FrontGenerator;
