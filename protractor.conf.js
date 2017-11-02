'use strict';

exports.config = {
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
	//directConnect: true,
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
		let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			takeScreenshots: true,
			fixedScreenshotName: true,
			savePath: 'reports',
			// takeScreenshotsOnlyOnFailures: true,
			cleanDestination: false,
			// fileNameDateSuffix: true,
			screenshotsFolder: './screenshots'

		}));
		let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
		jasmine.getEnv().addReporter(new SpecReporter({
			spec: {
				displayStacktrace: true, //display stacktrace for each failed assertion
				displayErrorMessages: true, //display error messages for each failed assertion
				displayFailed: true, //display each failed spec
				displayDuration: true //display each spec duration
			},
			summary: {
				displayErrorMessages: true, //display error messages for each failed assertion
				displayStacktrace: false, //display stacktrace for each failed assertion
				displaySuccessful: true, //display summary of all successes after execution
				displayFailed: true, //display summary of all failures after execution
				displayDuration: true //display execution duration
			},
			colors: {
				enabled: true
			}
		}));
	},

	// capabilities: {
	// 	'browserName': 'chrome',
	// 	'chromeOptions': {
	// 		// 'mobileEmulation': {
	// 		// 	'deviceName': 'Google Nexus 5'
	// 		// },
	// 		'args': [
	// 			'window-size=1440,900'
	// 		]
	// 	}
	// },

	// capabilities: { //for chrome headless
	// 	'browserName': 'chrome',
	// 	'chromeOptions': {
	// 		'args': [
	// 			"--headless", 
	// 			"--disable-gpu", 
	// 			"--window-size=1440,900"
	// 		]
	// 	}
	// },

	multiCapabilities: [ //for multiple browsers
		{ 
			'browserName': 'firefox',
			'marionette': true
		},
		{
			'browserName': 'chrome',
			'args': [
				"window-size=1440,900"
			]
		}
	],

	baseUrl: 'https://ninjainvoices.herokuapp.com/',

	jasmineNodeOpts: {
		//onComplete: null,
		//isVerbose: false,
		//showColors: true,
		//includeStackTrace: false,
		defaultTimeoutInterval: 30000,
		print: function () { }
	}
};