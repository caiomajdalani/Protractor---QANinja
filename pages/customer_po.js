'use strict';

class Customer {
    constructor(){
        this.newCustomer = $('#dataview-insert-button');
        this.alertInfo = $('#content div[class*=alert-info]');
        this.searchField = $('#dataview-search-input');
        this.searchButton = $('#dataview-search-button');
        
        this.gridName = $('#dataview-table-items-row td:nth-child(1)');
        this.gridPhone = $('#dataview-table-items-row td:nth-child(2)');
        this.gridEmail= $('#dataview-table-items-row td:nth-child(3)');
        this.gridTotal = $('#dataview-table-items-row td:nth-child(4)');
        this.gridEdit = $('#edit-button');
        this.gridDelete = $('#delete-button');

        this.formName = element(by.name('name'));
        this.formPhone = element(by.name('phone'));
        this.formEmail = element(by.name('email'));
        this.formGenderM = element(by.name('radio-m'));
        this.formGenderF = element(by.name('radio-f'));
        this.formType = $('#type-customer');
        this.formTypePrime = $('#type-customer option:nth-child(2)');
        this.formTypeGold = $('#type-customer option:nth-child(3)');
        this.formTypePlatinum = $('#type-customer option:nth-child(4)');
        this.formNotes = element(by.name('note'));
        this.formCheckbox = $('.checkbox');
        this.formSave = $('#form-submit-button');
        this.formCancel = $('#form-cancel-button');
    }
}
