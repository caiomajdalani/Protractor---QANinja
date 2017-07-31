'use strict';

class Login {
    constructor(){
        this.email = $('#email');
        this.password = $('#password');
        this.loginButton = $('div[id=login-with-password] button[class*=login-button]');
        this.warningMessage = $('#login-errors');
    };
    go(){
        browser.get('/login');
    };
    with(email,password){
        this.email.clear().sendKeys(email);
        this.email.clear().sendKeys(password);
        this.loginButton.click();
    };
};

module.exports = Login;