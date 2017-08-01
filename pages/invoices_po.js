'use stric';

class Invoices {
    constructor(){
        this.newInvoice = $('#dataview-insert-button');
        this.alertInfo = $('#content div[class*=alert-info]');
        this.formSave = $('#form-submit-button');
        this.formNumber = element(by.name('invoiceNumber'));
        this.formDate = element(by.name('date'));
        this.formCustomer = $('#customerId');
        this.formCancel = $('#form-cancel-button');
    }
    
}