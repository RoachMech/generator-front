var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    test: function () {
        console.log('generating...');
    }
});