/// <reference types="cypress" />
import LoginPage from "../../POM/pages/LoginPage";
import NavBarPage from "../../POM/nav/navBarPage";

const login = new LoginPage();
const navbar = new NavBarPage();

describe("Login form for Mytel Dashboard",() => {
  beforeEach(() => {
    cy.visit("https://dashboard.mytel.com.mm/auth/login")
  })

  it("Should be successfully login with valid credentials" , () => {
   login.fillUserName(Cypress.env("username"));
   login.fillPassWord(Cypress.env("password"));
  //  login.clickSignInBtn();
   
   //check the nav bar text
   navbar.checkCalenderBtn()
  .should('exist') 
  .and('be.visible')
  });
})