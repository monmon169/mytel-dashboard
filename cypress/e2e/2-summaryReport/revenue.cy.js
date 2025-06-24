/// <reference types="cypress" />
import LoginPage from "../../POM/pages/LoginPage";
import NavBarPage from "../../POM/nav/navBarPage";
import SideBarPage from "../../POM/nav/SideBarPage";
import RevenuePage from "../../POM/pages/RevenuePage";
import dayjs from "dayjs";


const login = new LoginPage();
const navbar = new NavBarPage();
const sidebar = new SideBarPage();
const revenue = new RevenuePage();


describe("Revenue",() => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("https://dashboard.mytel.com.mm/auth/login");
    login.fillUserName(Cypress.env("username"));
    login.fillPassWord(Cypress.env("password"));
    login.clickSignInBtn();
  });

 

  //get number dynamically from the table
function getCellNumericValue(rowIndex,colIndex){
  return revenue.checkdailyServiceResultTable().eq(rowIndex).find('td').eq(colIndex).invoke('text').then(text => {
    return parseFloat(text.replace(/,/g, ''));
  });
}

//format number with comas
function formatWithComas(num) {
  return num.toLocaleString("en-US")
}

//sent Telegram message based on value comparison
function sentDynamicallyTelegramAlert(before,after,label){
  const formattedBefore = formatWithComas(before);
  const formattedAfter = formatWithComas(after);
  const percentChange = ((after - before) / before)* 100;

  if(before < after) {
    return cy.task('sendTelegramMessage', `*${label}*: Revenue increased from ${formattedBefore} to ${formattedAfter}`);
  }else if (before > after) {
    return cy.task('sendTelegramMessage', `*${label}*: Revenue decreased from ${formattedBefore} to ${formattedAfter}`);
  }else {
    return cy.task('sendTelegramMessage', `*${label}*: MYN143 - Daily Service Revenue detail is Normal`);
  }
}



it('Compare yesterday revenue and daybeforeyesterday',() => {
const label = "MYN143 - Daily Service Revenue";
const rowIndex = 0;

const today = new Date().getDate();//20
const yesterdayColIndex = today - 1 // 18 , June 19
const dayBeforeYesterdayColIndex = today - 2 //17 , June 20


//Navigate to the page and show table
sidebar.clickSideBarBtn();
sidebar.clickRevenueBtn();

revenue.clickDailyServiceHideDetailBtn();
revenue.checkdailyServiceResultTable()
       .should("be.visible");

revenue.checkdailyServiceResultTable().scrollTo(1500,0)
revenue.checkcurrentMonthTableList_19().should('be.visible')

// compare to two data
getCellNumericValue(rowIndex, dayBeforeYesterdayColIndex).then(beforeVal => {
  getCellNumericValue(rowIndex,yesterdayColIndex).then(afterVal => {
    sentDynamicallyTelegramAlert(beforeVal,afterVal,label)
  })
})
})
})


