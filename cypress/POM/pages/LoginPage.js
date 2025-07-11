class LoginPage {
    elements = {
     userName : () => cy.get(".username"),
     passWord : () => cy.get(".password"),
     signInBtn : () => cy.get('.button'),
     errorMsg: () => cy.get('.ng-tns-c128-0 > cs-render-errors.ng-star-inserted > div.ng-star-inserted'),
    }

    texts = {
        errorMsg : "BASE.REQUIRED_MESSAGE",
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