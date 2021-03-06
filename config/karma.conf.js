/* global module */

'use strict';

module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/mockfirebase/browser/mockfirebase.js',
      'bower_components/angularfire/dist/angularfire.js',
      'bower_components/ngstorage/ngStorage.js',
      'client/assets/js/app.js',
      'client/assets/js/modules/**/*.js',
      'client/assets/js/shared/**/*.js',
      'test/lib/mock.firebase.js',
      'test/unit/**/*.js'
    ],

    port: 9876,

    logLevel: config.LOG_INFO,

    colors: true,

    autoWatch : true,

    singleRun: false,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    reporters: ['progress', 'coverage', 'coveralls', 'html'],

    preprocessors: {
      'client/assets/js/modules/**/*.js': ['coverage'],
      'client/assets/js/shared/**/*.js': ['coverage'],
      'client/assets/js/*.js': ['coverage']
    },

    plugins : [
            'karma-jasmine',
            'karma-coverage',
            'karma-coveralls',
            'karma-html-reporter',
            'karma-phantomjs-launcher'
            ],

    coverageReporter: {
      type : 'lcov',
      dir : 'target/coverage/'
    },

    htmlReporter: {
      outputDir: 'target/html/'
    }

  });
};
