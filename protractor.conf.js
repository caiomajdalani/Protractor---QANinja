'use strict';

exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  specs: [
    'spec/register_spec.js',
    'spec/login_spec.js'
  ],

  framework: 'jasmine2',
  onPrepare: function () {
    browser.ignoreSynchronization = true;
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  },

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': [
      'window-size=1440,900'
      //'disable-extensions',
      //'--start-maximized'
      ]
    }
  },

  baseUrl: 'https://ninjainvoices.herokuapp.com/',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: false,
    defaultTimeoutInterval: 30000
  }
};