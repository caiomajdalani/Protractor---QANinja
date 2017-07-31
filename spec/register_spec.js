'use strict';

const Register = require('../pages/register_po.js')

const register = new Register();

describe('Register:', ()=>{
    it('with invalid email.', ()=>{
        register.go();
        register.with('Caio Teste','teste','teste1234');
        expect(register.warningMessage.getText())
            .toEqual('Please enter valid e-mail address.');
    });
    it('with invalid password.', ()=>{
        register.with('Caio Teste','teste@teste.com','1');
        expect(register.warningMessage.getText())
            .toEqual('Your password must be at least 6 characters long.');
    });
});