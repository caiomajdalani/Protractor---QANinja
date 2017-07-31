'use strict';

const Register = require('../pages/register_po.js')
const Dashboard = require('../pages/dashboard_po.js')

const register = new Register();
const dashboard = new Dashboard();

describe('Register:', ()=>{
    beforeAll(()=>{
        register.go();
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
        register.with('Caio QANinja','caio@qaninja.com.br','teste1234');
        browser.wait(dashboard.title.isPresent()).then(()=>{
            expect(dashboard.title.getText())
                .toEqual('Olá, Caio QANinja, seja bem vindo ao Invoices...');
        });
    });
});