'use strict';

exports.config = {
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	directConnect: true,
	getPageTimeout: 60000,
	allScriptsTimeout: 500000,
	specs: [
		'spec/register.spec.js',
		'spec/login.spec.js',
		'spec/customer.spec.js'
	],

	framework: 'jasmine2',
	onPrepare: () => {
		browser.ignoreSynchronization = true;
		// let AllureReporter = require('jasmine-allure-reporter');
		// jasmine.getEnv().addReporter(new AllureReporter({
		// 	resultsDir: 'allure-results'
		// }));
		let Jasmine2HtmlReporter = require ('protractor-jasmine2-html-reporter');
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			takeScreenshots: false,
			//fixedScreenshotName: true,
			savePath: 'reports',
			// takeScreenshotsOnlyOnFailures: true,
			// cleanDestination: false,
			// fileNameDateSuffix: true,
			screenshotsFolder: 'reports/screenshots'
	
		}));
		let SpecReporter = require ('jasmine-spec-reporter').SpecReporter;
		jasmine.getEnv().addReporter(new SpecReporter({
			displayFailuresSumary: true, //all fails resume are displayed
			displayFailedSpec: true, // each test fail is displayed
			displaySuiteNumber: true, // the number of each suite is displayed 
			displaySpecDuration: true // displays the duration of each file .spec
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