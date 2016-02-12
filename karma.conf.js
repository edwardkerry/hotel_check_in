module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/mockfirebase/browser/mockfirebase.js',
      'app/bower_components/angularfire/dist/angularfire.js',
      'test/lib/**/*.js',
      'app/app.js',
      'app/config.js',
      'app/components/**/*.js',
      'app/account/**/*.js',
      'app/home/**/*.js',
      'app/login/**/*.js',
      'app/config_test.js',
      'app/userDash/**/*.js',
      'app/hoteldash/**/*.js',
      'app/config_test.js',
      'app/photo/**/*.js',
      'test/photoController.spec.js',
      'app/hotel_login/**/*.js'


    ],
    exclude: ['app/photo/streamConfig.js'],

    autoWatch: true,

    frameworks: ['jasmine'],

    reporters: ["spec", "coverage"],
    preprocessors: {
      "**/app/*js": "coverage"
    },
    coverageReporter: {
      type: "lcov",
      dir: "coverage/"
    },

    specReporter: {
      maxLogLines: 5, // limit number of lines logged per test
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false, // do not print information about failed tests
      suppressPassed: false, // do not print information about passed tests
      suppressSkipped: true // do not print information about skipped tests
    },


    browsers: ['Chrome'],

    plugins: [
      'karma-spec-reporter',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-coverage'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
