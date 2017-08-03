'use strict';

const Login = require('../pages/login_po.js');
const Dashboard = require('../pages/dashboard_po.js')

const login = new Login();
const dashboard = new Dashboard();

describe('Login: ',()=>{
    beforeAll(()=>{
        dashboard.userMenu.click();
        dashboard.logout.click();
        browser.sleep(1000);
        login.go();
    });
    afterEach(()=>{
        browser.sleep(1000);
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
        login.with('caio.majdalani@gmail.com', 'teste1234');
        browser.wait(dashboard.title.isPresent()).then(()=>{
            expect(dashboard.title.getText())
                .toEqual('Olá, Caio Majdalani, seja bem vindo ao Invoices...');
        });
    });
});
