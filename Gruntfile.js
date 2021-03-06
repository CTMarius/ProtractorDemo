'use strict';

module.exports = function (grunt) {
    var shell = require('shelljs');
	var os = require('os');
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.initConfig({
        protractor: {
            e2e: {
                options: {
                    configFile: 'protractorConf.js',
                    keepAlive: true,
                    args: { baseUrl:  grunt.option('baseUrl') }

                }
            }
        }
    });

    grunt.task.registerTask('installselenium',
      function(){
		  if (os.platform().indexOf("Mac") != -1){
            return shell.exec("node node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update --versions.chrome=85.0.4183.121")
        } else {
            return shell.exec("node node_modules\\grunt-protractor-runner\\node_modules\\protractor\\bin\\webdriver-manager update --versions.chrome=85.0.4183.121")
		}
	 })
    
    grunt.registerTask('e2e', [
        'installselenium',
        'protractor:e2e'
    ]);

};
