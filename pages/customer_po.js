'use strict';

class Customer {
    constructor(){
        this.newCustomer = $('#dataview-insert-button');
        this.alertInfo = $('#content div[class*=alert-info]');
        this.searchField = $('#dataview-search-input');
        this.searchButton = $('#dataview-search-button');

        this.grid = $$('#dataview-table-items tr');

        this.formName = element(by.name('name'));
        this.formPhone = element(by.name('phone'));
        this.formEmail = element(by.name('email'));
        this.formGenderM = element(by.name('radio-m'));
        this.formGenderF = element(by.name('radio-f'));
        this.formType = $('#type-customer');
        this.formNotes = element(by.name('note'));
        this.formCheckbox = $('.checkbox');
        this.formSave = $('#form-submit-button');
        this.formCancel = $('#form-cancel-button');
    }

    selectType(name){
        this.formType.click();
        browser.sleep(1000);
        let customer = element(by.cssContainingText('#type-customer option', name));
        customer.click();
        browser.sleep(1000)
    }

    go(){
        browser.get('/customers');
    };
}

module.exports = Customer;

// let result = grid.first().getText();
// expect(result).toContain(name)
// expect(result).toContain(email)
// expect(result).toContain(phone)
