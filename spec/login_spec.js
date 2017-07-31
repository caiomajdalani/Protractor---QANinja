'use strict';

const Login = require('../pages/login_po.js');
const Dashboard = require('../pages/dashboard_po.js')

const login = new Login();
const dashboard = new Dashboard();

describe('Login: ',()=>{
    beforeAll(()=>{
        login.go();
    });
    it('with incorrect email.',()=>{
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
        browser.wait(dashboard.title.isPresent()).then(()=>{
            expect(dashboard.title.getText())
                .toEqual('Olá, Caio QANinja, seja bem vindo ao Invoices...');
        });
    });
});
