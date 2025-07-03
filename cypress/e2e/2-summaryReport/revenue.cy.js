  /// <reference types="cypress" />
  import LoginPage from "../../POM/pages/LoginPage";
  import NavBarPage from "../../POM/nav/navBarPage";
  import SideBarPage from "../../POM/nav/SideBarPage";
  import RevenuePage from "../../POM/pages/RevenuePage";


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

  //format number with comas
  function formatWithComas(num) {
    return num.toLocaleString("en-US")
  }

  it('Compare yesterday and daybeforeyesterday for MYN143 - Daily Service Revenue',() => {
  const label = "MYN143 - Daily Service Revenue";
  const rowIndex = 0;
    
  //get number dynamically from the table
  function getCellNumericValue(rowIndex,colIndex){
    return revenue.checkdailyServiceResultTable().find('table > tbody > tr').eq(rowIndex).find('td').eq(colIndex).invoke('text').then(text => {
      return parseFloat(text.replace(/,/g, ''));
    });
  }

  const today = new Date().getDate();
  const yesterdayColIndex = today - 1;
  const dayBeforeYesterdayColIndex = today - 2; 


  //Navigate to the page and show table
  sidebar.clickSideBarBtn();
  sidebar.clickRevenueBtn();

  revenue.clickDailyServiceHideDetailBtn();
  revenue.checkdailyServiceResultTable()
        .should("be.visible");


  //compare to two month data
  getCellNumericValue(rowIndex, dayBeforeYesterdayColIndex).then(beforeVal => {
    getCellNumericValue(rowIndex,yesterdayColIndex).then(afterVal => {
      sentDynamicallyTelegramAlert(beforeVal,afterVal,label)

  //sent Telegram message based on value comparison
  function sentDynamicallyTelegramAlert(before,after,label){
    const formattedBefore = formatWithComas(before);
    const formattedAfter = formatWithComas(after);

    if(isNaN(before) || isNaN(after) || before === 0 || after === 0) {
      return cy.task('sendTelegramMessage', `*${label}*: Data value is return *Null* value`);
    }else if (before > after) {
      return cy.task('sendTelegramMessage', `*${label}*: Alert! Value is increased from ${formattedBefore} to ${formattedAfter}`);
    }else if (before < after * 1.5){
      return cy.task('sendTelegramMessage', `*${label}*: Alert! Value is  decreased  from ${formattedBefore} to ${formattedAfter}`);
    }else {
      return cy.task('sendTelegramMessage', `*${label}*: Alert! Value is ${formattedBefore} and ${formattedAfter}`)
    }
  }
  });
  });
  })

  it('Compare yesterday and daybeforeyesterday for Service Revenue Date Details', () => {
    const title = "Service Revenue Date Details";
    const serviceRevneueRow = [
      {name: "Service Revenue", index:0},
      {name: "Basic Consumption", index:2},
      {name: "FTTH Charges	", index:4},
      {name: "Interconnection Revenue", index:6},
      {name: "Mytel Pay Revenue", index:8},
      {name: "B2B Revenue	", index:10},
    ];

     //get number dynamically from the table
    function getCellNumericValue1(serviceRevneueRow,colIndex){
    return revenue.checkServiceRevenueResultTable().find('table > tbody > tr').eq(serviceRevneueRow).find('td').eq(colIndex).invoke('text').then(text => {
      return parseFloat(text.replace(/,/g, ''));
    });
  }
    const today = new Date().getDate(); 
    const yesterdayColIndex = today + 0;
    const dayBeforeYesterdayColIndex = today - 1;


    cy.log(yesterdayColIndex);

    //Navigate to the page and show table
    sidebar.clickSideBarBtn();
    sidebar.clickRevenueBtn();

    //click Service Revnenue Date Detials hide button
    revenue.clickServiceRevenueHideDetailBtn();

    //check the Service Revenue Date Details is displayed at the UI
    revenue.checkServiceRevenueResultTable()
           .should("be.visible");

   //compare two data value between yesterday and the daybeforeyesterday
  serviceRevneueRow.forEach((row) => {
    getCellNumericValue1(row.index,dayBeforeYesterdayColIndex).then(beforeVal => {
      getCellNumericValue1(row.index,yesterdayColIndex).then(afterVal => {
        sentDynamicallyTelegramAlert(beforeVal,afterVal,row.name);
      })
    })
  }) 

  //sent telegram message based on value comparison
  function sentDynamicallyTelegramAlert(before,after,label){
    const formattedBefore = formatWithComas(before);
    const formattedAfter = formatWithComas(after);

    if(isNaN(before) || isNaN(after) || before === 0 || after === 0) {
      return cy.task('sendTelegramMessage', `*${title}*: *${label}* : Data value is return *Null* value`);
    }else if (before > after * 1.5) {
      return cy.task('sendTelegramMessage', `*${label}*: *${label}* : Alert! Value is increased from ${formattedBefore} to ${formattedAfter}`);
    }else if (before < after * 1.5){
      return cy.task('sendTelegramMessage', `*${label}*: *${label}* : Alert! Value is decreased from ${formattedBefore} to ${formattedAfter}`);
    }else {
      return cy.task('sendTelegramMessage', `*${label}*: *${label}* : Alert! Value  ${formattedBefore} and ${formattedAfter}`)
    }
  }
  });
});


