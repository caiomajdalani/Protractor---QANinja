'use strict';

const faker = require('faker');

const Register = require('../pages/register_po.js')
const Dashboard = require('../pages/dashboard_po.js')

const register = new Register();
const dashboard = new Dashboard();

describe('Register:', ()=>{
    beforeAll(()=>{
        register.go();
    });
    afterEach(()=>{
        browser.sleep(1000);
    });
    it('with invalid email.', ()=>{
        register.with('Caio Teste','teste','teste1234');
        expect(register.warningMessage.getText())
            .toEqual('Please enter valid e-mail address.');
    });
    it('with invalid password.', ()=>{
        register.with('Caio Teste','teste@teste.com','1');
        expect(register.warningMessage.getText())
            .toEqual('Your password must be at least 6 characters long.');
    });
    it('with a email that already exists', ()=>{
        register.with('Caio Majdalani','caio.majdalani@gmail.com','teste1234');
        expect(register.warningMessage.getText())
            .toEqual('Email already exists. [403]');
    });
    it('with success', ()=>{
        let fakeName = faker.name.findName();
        let fakeEmail = faker.internet.email();
        register.with(fakeName, fakeEmail, 'teste1234');
        browser.wait(dashboard.title.isPresent()).then(()=>{
            expect(dashboard.title.getText())
                .toEqual('Olá, '+fakeName+', seja bem vindo ao Invoices...');
        });
    });
});