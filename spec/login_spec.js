'use strict';

const Login = require('../pages/login_po.js');

const login = new Login();

describe('Login: ',()=>{
    it('with incorrect email.',()=>{
        login.go();
        login.with('teste.com', '12345678');
        expect(login.warningMessage.getText())
            .toEqual('Informe um email válido.');
    });
    it('with incorrect password.',()=>{
        login.with('caio.majdalani@gmail.com', '12345678');
        expect(login.warningMessage.getText())
            .toEqual('Senha inválida.');
    });
    it('with success.', ()=>{
        login.with('Caio QANinja','caio@qaninja.com.br','teste1234');
        expect(dashboard.title.getText())
            .toEqual('Olá, Caio QANinja, seja bem vindo ao Invoices...');
    });
});
