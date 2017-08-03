# Protractor - End to End automation for AngularJS

Funciontal tests for QA Ninja Invoices Application

> App [(link)](https://ninjainvoices.herokuapp.com/)

## Test Management credentials
email: caio.majdalani@gmail.com
password: teste1234

The structure is based on two layers: steps and pages.

1. Steps: Contains all the steps implementations;
2. Pages: Contains all the pages in the website. A page must contain the declaration of all the elements of the page and the declaration of its actions.

## Pre Conditions

1. Node.js LTS (6.11)
2. Chromedriver

## Instalation

Install it as:

    $ npm install
    $ npm install -g protractor

## Usage

Too run tests in terminal, type:

```
  npm test
  or
  protractor protractor.conf.js

```

To gerenate reports:

```
  npm run report
  or
  ./node_modules/.bin/allure generate ./allure-results -o ./reports

```

To clean reports:

```
  rm -rf allure-results/
  or 
  npm run cleanreports

```

## Reports

1. To see reports, open reports/index.html on firefox