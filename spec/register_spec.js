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
});