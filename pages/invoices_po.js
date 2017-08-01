'use stric';

class Invoices {
    constructor(){
        this.newInvoice = $('#dataview-insert-button');
        this.alertInfo = $('#content div[class*=alert-info]');
        this.searchField = $('dataview-search-input');
        this.searchButton = $('dataview-search-button');

        this.gridCode = $('#dataview-table-items-row td:nth-child(1)');
        this.gridDate = $('#dataview-table-items-row td:nth-child(2)');
        this.gridCustomer = $('#dataview-table-items-row td:nth-child(3)');
        this.gridTotal = $('#dataview-table-items-row td:nth-child(4)');
        this.gridEdit = $('#edit-button');
        this.gridDelete = $('#delete-button');

        this.formSave = $('#form-submit-button');
        this.formNumber = element(by.name('invoiceNumber'));
        this.formDate = element(by.name('date'));
        this.formCustomer = $('#customerId');
        this.formCustomerSelect = $('.form-control option:nth-child(1)');
        this.formCancel = $('#form-cancel-button');
    }
    
}