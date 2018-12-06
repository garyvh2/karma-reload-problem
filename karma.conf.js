/* eslint import/no-extraneous-dependencies: 0, global-require: 0 */
const { join } = require('path');

module.exports = function karmaConfig(config) {
  config.set({
    basePath: '',
    /**
     * Files to be imported into the Karma test env
     * - karma-test-shim: Allows to customize the entry files to be tested
     * - webcomponents-bundle.js && custom-elements-es5-adapter.js are necessary for web component polyfills
     */
    files: [
      { pattern: join(__dirname, './karma-test-shim.js'), watched: false }
    ],
    /**
     * List of plugins to be included on the karma run
     * Most preprocessors, frameworks and reporters require to be included here
     */
    plugins: [
      require('karma-jasmine'),
      require('karma-webpack'),
      require('karma-chrome-launcher'),
    ],
    /**
     * File preprocessors
     */
    preprocessors: { './karma-test-shim.js': ['webpack'] },
    /**
     * Testing frameworks included on karma run
     */
    frameworks: ['jasmine'],
    /**
     * List of browser for the tests to be run
     */
    browsers: ['ChromeHeadless'],
    /**
     * List of reporters to either present in console or files/html
     */
    reporters: ['progress'],
    /**
     * Karma general configuration
     */
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    /**
     * Plugins additional configuration
     */
    webpack: require('./webpack.config')
  });
};
