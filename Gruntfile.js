'use-strict';

var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      run: {
      }
    },

    protractor: {
      options: {
        configFile: './e2e-tests/protractor-conf.js',
        keepAlive: false,
        noColor: false,
      },
      run: {
      }
    },
    protractor_webdriver: {
      start: {
        options: {
          path: 'node_modules/protractor/bin/',
          command: 'webdriver-manager start'
        }
      }
    },
    connect: {
      options: {
        port: 8080,
        hostname: 'localhost',

              },
      test: {
        options: {

          base: ['app']
        }
      }
    },
    coveralls: {
    options: {
      // LCOV coverage file relevant to every target
      src: 'coverage-results/lcov.info',

      // When true, grunt-coveralls will only print a warning rather than
      // an error, to prevent CI builds from failing unnecessarily (e.g. if
      // coveralls.io is down). Optional, defaults to false.
      force: false
    },
    your_target: {
      // Target-specific LCOV coverage file
       src: 'coverage-results/extra-results-*.info'
    },
  },
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-coveralls');
  grunt.registerTask('coveralls', ['coveralls']);
  grunt.registerTask('unit', ['karma']);
  grunt.registerTask('e2e', ['connect','protractor_webdriver', 'protractor',]);

};
