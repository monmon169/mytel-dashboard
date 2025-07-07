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

  it('MYN143 - Daily Service Revenue at "Revenue" Screen',() => {
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

    if(isNaN(before) || isNaN(after) || before === 0 || after === 0){
      return cy.task('sendTelegramMessage', `*${label}*: Data value is return *Null* value`);
    }else if(before > after || before < after) {
      const rawChange = ((after - before) /before) * 100;
      const percentageChange = rawChange.toFixed(2);

      if(rawChange > 50) {
      return cy.task('sendTelegramMessage', `*${label}*: value suddenly increased by *${percentageChange}%* (from ${formattedBefore} to ${formattedAfter})`);
      }else if(rawChange < -50) {
        return cy.task('sendTelegramMessage', `*${label}*: value suddently decreased by *${percentageChange}%* (from ${formattedBefore} to ${formattedAfter})`);
      }else if(rawChange > 0) {
        return cy.task('sendTelegramMessage', `*${label}*: value increased by *${percentageChange}%* (from ${formattedBefore} to ${formattedAfter})`);
      }else if(rawChange < 0){
        return cy.task('sendTelegramMessage', `*${label}*: value decreased by *${percentageChange}%* (from ${formattedBefore} to ${formattedAfter})`);
      }else {
      return cy.task('sendTelegramMessage', `*${label}*: value stayed the same at *${formattedBefore}*`);
    }
    }else { 
    return cy.task('sendTelegramMessage', `*${label}*: Alert! Value is the same: ${formattedBefore} and ${formattedAfter}`);
    }
  }
  });
  });
  })

  it('Service Revenue Date Details at "Revenue" Screen', () => {
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

    //sent telegram message based on value comparison
    function sentDynamicallyTelegramAlert(before,after,label){
    const formattedBefore = formatWithComas(before);
    const formattedAfter = formatWithComas(after);

    if(isNaN(before) || isNaN(after) || before === 0 || after === 0){
      return cy.task('sendTelegramMessage', `*${label}*: Data value is return *Null* value`);
    }else if(before > after || before < after) {
      const rawChange = ((after - before) /before) * 100;
      const percentageChange = rawChange.toFixed(2);

      if(rawChange > 50) {
      return cy.task('sendTelegramMessage', `*${title}*: *${label}*: value suddenly increased by *${percentageChange}%* (from ${formattedBefore} to ${formattedAfter})`);
      }else if(rawChange < -50) {
        return cy.task('sendTelegramMessage', `*${title}*: *${label}*: value suddently decreased by *${percentageChange}%* (from ${formattedBefore} to ${formattedAfter})`);
      }else if(rawChange > 0) {
        return cy.task('sendTelegramMessage', `*${title}*: *${label}*: value increased by *${percentageChange}%* (from ${formattedBefore} to ${formattedAfter})`);
      }else if(rawChange < 0){
        return cy.task('sendTelegramMessage', `*${title}*: *${label}*: value decreased by *${percentageChange}%* (from ${formattedBefore} to ${formattedAfter})`);
      }else {
      return cy.task('sendTelegramMessage', `*${title}*: *${label}*: value stayed the same at *${formattedBefore}*`);
    }
    }else { 
    return cy.task('sendTelegramMessage', `*${title}*: *${label}*: Alert! Value is the same: ${formattedBefore} and ${formattedAfter}`);
    }
  }
   })
    })
  }) 
  });

  it('MYN194 - Daily Voice Traffic at "Mobile" Screen', () => {
    const label = "MYN194 - Daily Voice Traffic";
    const rowIndex = 0;
   
    //get number dynamically from the table
    function getCellNumericValue(rowIndex , colIndex){
      return revenue.checkdailyVoiceTrafficResultTable().eq(rowIndex).find('td').eq(colIndex).invoke('text').then(text => {
        return parseFloat(text.replace(/,/g, ''));
      });
    }

    const today = new Date().getDate();
    const yesterdayColIndex = today - 1;
    const dayBeforeYesterdayColIndex = today - 2;

    //Go to Mobile Screen
    sidebar.clickSideBarBtn();
    sidebar.clickMobileBtn();
    
    //Click Daily Voice Traffic Hide Detail Btn
    revenue.clickDailyVoiceTrafficHideDetailBtn();

    //Check the result table is already displayed at the UI
    revenue.checkdailyVoiceTrafficResultTable()
           .should('be.visible');

    //get the value
    getCellNumericValue(rowIndex, dayBeforeYesterdayColIndex).then(beforeVal => {
      getCellNumericValue(rowIndex,yesterdayColIndex).then(afterVal => {
        sentDynamicallyTelegramAlert(beforeVal,afterVal,label)

        //sent Telegram message
        function sentDynamicallyTelegramAlert(before,after,label){
          const formattedBefore = formatWithComas(before);
          const formattedAfter = formatWithComas(after);

          if(isNaN(before) || isNaN(after) || before === 0 || after === 0){
           return cy.task('sendTelegramMessage', `*${label}*: Data value is return *Null* value`);         
           }else if(before > after || before < after){
            const rawChange = ((after - before) / before) * 100;
            const percentageChange = rawChange.toFixed(2);

            if(rawChange > 50) {
              return cy.task('sendTelegramMessage', `*${label}*: value suddenly increased by *${percentageChange}%* (from ${formattedBefore} to ${formattedAfter})`);
            }else if(rawChange < -50) {
              return cy.task('sendTelegramMessage', `*${label}*: value suddenly decreased by *${percentageChange}%* (from ${formattedBefore} to ${formattedAfter})`);
            }else if(rawChange > 0) {
              return cy.task('sendTelegramMessage', `*${label}*: value increased by *${percentageChange}%* (from ${formattedBefore} to ${formattedAfter})`);
            }else if(rawChange < 0) {
              return cy.task('sendTelegramMessage', `*${label}*: value decreased by *${percentageChange}%* (from ${formattedBefore} to ${formattedAfter})`);
            }else {
              return cy.task('sendTelegramMessage', `*${label}*: value stayed the same at *${formattedBefore}*`);
            }
           }else {
            return cy.task('sendTelegramMessage', `*${label}*: Alert! Value is the same: ${formattedBefore} and ${formattedAfter}`);
           }
        }
      });
    });
  });

  it('Daily Detail Voice Traffic at "Mobile" Screen', () => {
    const title = "Daily Detail Voice Traffic";
    const dailyDetailVoiceTrafficRow = [
      {name: "Voice_paid", index:0},
      {name: "Voice_promo", index:2},
      {name: "Voice_free	", index:4},
      {name: "Total", index:6},
    ];

     //get number dynamically from the table
    function getCellNumericValue1(rowIndex, colIndex) {
  return revenue.checkdailyDetailVoiceTrafficResultTable()
    .find('tbody')
    .find('tr')
    .eq(rowIndex)
    .find('td')
    .eq(colIndex)
    .invoke('text')
    .then(text => parseFloat(text.replace(/,/g, '')));
}


    const today = new Date().getDate(); 
    const yesterdayColIndex = today - 1;
    const dayBeforeYesterdayColIndex = today - 2;


    //Navigate to the page and show table
    sidebar.clickSideBarBtn();
    sidebar.clickMobileBtn();

    //click Service Revnenue Date Detials hide button
    revenue.clickDailyDetailVoiceTrafficHideDetailBtn();

    //check the Service Revenue Date Details is displayed at the UI
    revenue.checkdailyDetailVoiceTrafficResultTable()
           .should("be.visible");

   //compare two data value between yesterday and the daybeforeyesterday
  dailyDetailVoiceTrafficRow.forEach((row) => {
    getCellNumericValue1(row.index,dayBeforeYesterdayColIndex).then(beforeVal => {
      getCellNumericValue1(row.index,yesterdayColIndex).then(afterVal => {
        sentDynamicallyTelegramAlert(beforeVal,afterVal,row.name);

    //sent telegram message based on value comparison
    function sentDynamicallyTelegramAlert(before,after,label){
    const formattedBefore = formatWithComas(before);
    const formattedAfter = formatWithComas(after);

    if(isNaN(before) || isNaN(after) || before === 0 || after === 0){
      return cy.task('sendTelegramMessage', `*${label}*: Data value is return *Null* value`);
    }else if(before > after || before < after) {
      const rawChange = ((after - before) /before) * 100;
      const percentageChange = rawChange.toFixed(2);

      if(rawChange > 50) {
      return cy.task('sendTelegramMessage', `*${title}*: *${label}*: value suddenly increased by *${percentageChange}%* (from ${formattedBefore} to ${formattedAfter})`);
      }else if(rawChange < -50) {
        return cy.task('sendTelegramMessage', `*${title}*: *${label}*: value suddently decreased by *${percentageChange}%* (from ${formattedBefore} to ${formattedAfter})`);
      }else if(rawChange > 0) {
        return cy.task('sendTelegramMessage', `*${title}*: *${label}*: value increased by *${percentageChange}%* (from ${formattedBefore} to ${formattedAfter})`);
      }else if(rawChange < 0){
        return cy.task('sendTelegramMessage', `*${title}*: *${label}*: value decreased by *${percentageChange}%* (from ${formattedBefore} to ${formattedAfter})`);
      }else {
      return cy.task('sendTelegramMessage', `*${title}*: *${label}*: value stayed the same at *${formattedBefore}*`);
    }
    }else { 
    return cy.task('sendTelegramMessage', `*${title}*: *${label}*: Alert! Value is the same: ${formattedBefore} and ${formattedAfter}`);
    }
  }
   })
    })
  }) 
});

it('Daily Detail Added Voice Traffic at "Mobile" Screen', () => {
  const title = "Daily Detail Added Voice Traffic";
  const addVoiceTraffic =[
    {name: "Voice_paid",index:0},
    {name: "Voice_promo",index:0},
    {name: "Total",index:0},
  ];

//get number dynamically from the table
    function getCellNumericValue1(rowIndex, colIndex) {
  return revenue.checkdailyDetailVoiceTrafficResultTable()
    .find('tbody')
    .find('tr')
    .eq(rowIndex)
    .find('td')
    .eq(colIndex)
    .invoke('text')
    .then(text => parseFloat(text.replace(/,/g, '')));
}

  //Navigate to the page and show table
  sidebar.clickSideBarBtn();
  sidebar.clickMobileBtn();

  //click Daily Detail Added Voice Traffic at "Mobile" Screen
  revenue.clickAddedVoiceTrafficHideDetailBtn();

  //check this table is already displayed at the UI
  revenue.checkAddedVoiceTrafficResultTable()
         .scrollIntoView()
         .should('be.visible');
})
});
