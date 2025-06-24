// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import LoginPage from "../../POM/pages/LoginPage";

const login = new LoginPage();
Cypress.Commands.add("login",(username,password) => {
    cy.session([username,password],() => {
        cy.visit("/");
        login.fillUserName(username);
        login.fillPassWord(password);
        login.clickSignInBtn();
    });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignore unexpected token errors from HTML being parsed as JS
  if (err.message.includes("Unexpected token '<'")) {
    return false;
  }
});




import axios from 'axios';

Cypress.Commands.add('sentTelegramMessage', (message) => {
  const telegramBotToken = '8051879244:AAFBrI99Dsf6k31JO87PqIcWdFJSdVR4qfE';
  const chatId = '5183881393'; // Group ID or user ID

  return axios.post(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
    chat_id: chatId,
    text: message,
    parse_mode: 'Markdown'
  })
  .then(response => {
    console.log("Telegram message sent:", response.data);
  })
  .catch(error => {
    console.error("Telegram error:", error);
  });
});
