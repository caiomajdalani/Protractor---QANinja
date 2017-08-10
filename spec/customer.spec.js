'use strict';

const Customer = require('../pages/customer_po.js')

const customer = new Customer();

describe('Customers:', ()=>{
    beforeAll(()=>{
        customer.go();
    });
    describe('Negative tests -', ()=>{
        beforeEach(()=>{
            let grid = customer.grid
            while(grid.length > 0){
                customer.delete.click();
                browser.sleep(1000);
                customer.confirmDel.click();
                grid = customer.grid;
            }
        });
        it('try to create new customer with invalid tel', ()=>{
            customer.newCustomer.click();
            browser.sleep(1000);
            customer.formName.sendKeys('Invalid Cel');
            customer.formPhone.sendKeys('abc');
            customer.formCheckbox.click();
            customer.formSave.click();
            browser.sleep(1000)
            expect(customer.emailError.getText())
                .toEqual('Telefone : please enter valid telefone');
        });
        it('try to create new customer with invalid email.', ()=>{
            customer.newCustomer.click();
            browser.sleep(1000);
            customer.formName.sendKeys('A');
            customer.formPhone.sendKeys('123456789');
            customer.formEmail.sendKeys('teste');
            customer.formCheckbox.click();
            customer.formSave.click();
            browser.sleep(1000)
            expect(customer.emailError.getText())
                .toEqual('E-mail : please enter valid e-mail address');
        });
    });
});