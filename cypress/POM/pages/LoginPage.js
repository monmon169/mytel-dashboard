class LoginPage {
    elements = {
     userName : () => cy.get(".username"),
     passWord : () => cy.get(".password"),
     signInBtn : () => cy.get('.button'),
     
    }

    fillUserName(userName) {
        this.elements.userName().type(userName);
    }

    fillPassWord(passWord) {
        this.elements.passWord().clear();
        this.elements.passWord().type(passWord);
    }

    clickSignInBtn() {
        this.elements.signInBtn().click();
    }
}

export default LoginPage;