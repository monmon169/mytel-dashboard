class RevenuePage {
   elements = {
    dailyServiceRevenueDiv : () => cy.get('body > app-root > vna-layout-full > menu-nav > div > nz-layout > nz-content > nz-layout > div > nz-content > div > dashboard-revenue > nz-card:nth-child(2) > div.ant-card-body > div.demo-chart.ng-star-inserted > div:nth-child(1) > canvas'),
    homePopUp : () => cy.get('ul.ng-star-inserted'),
    dailyServiceHideDetailBth : () => cy.get(':nth-child(2) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-header'),
    serviceRevenueHideDetailBtn : () => cy.get(':nth-child(3) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-header'),
    dailyVoiceTrafficHideDetailBtn : () => cy.get(':nth-child(2) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-header'),
    dailyDetailVoiceTrafficHideDetailBtn : () => cy.get(':nth-child(3) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-header'),
    addedVoiceTrafficHideDetailBtn: () => cy.get(':nth-child(4) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-header'),
    vasMainBalanceHideDetailBtn: () => cy.get(':nth-child(1) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-header'),
    vasMonthlyMainBalanceHideDetailBtn: () => cy.get('[style="margin-top: 42px;"] > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-header'),
    masHideDetailBtn: () => cy.get('.ant-collapse-header'),
    dailyServiceResultTable :() => cy.get(':nth-child(2) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box>div'),
    serviceRevenueResultTable :() => cy.get(':nth-child(3) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box>div'),   
    dailyVoiceTrafficResultTable : () => cy.get(':nth-child(2) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > nz-table.ng-star-inserted'),
    dailyDetailVoiceTrafficResultTable : () => cy.get(':nth-child(3) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > nz-table.ng-star-inserted'),
    addVoiceTrafficResultTable: () => cy.get(':nth-child(4) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > nz-table.ng-star-inserted'),
    vasMainBalanceResultTable: () => cy.get(':nth-child(1) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > nz-table.ng-star-inserted'),
    vasMonthlyMainBalanceResultTable: () => cy.get('[style="margin-top: 42px;"] > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > nz-table.ng-star-inserted'),
    masResultTable: () => cy.get('nz-table.ng-star-inserted'),
    
   }

   checkDailyServiceRevenueDiv(){
    return this.elements.dailyServiceRevenueDiv();
   }

   mouseOverHomePopUp() {
      return this.elements.homePopUp();
   }

   clickDailyServiceHideDetailBtn() {
      this.elements.dailyServiceHideDetailBth().click();
   }

   clickServiceRevenueHideDetailBtn() {
      this.elements.serviceRevenueHideDetailBtn().click();
   }

   clickDailyVoiceTrafficHideDetailBtn() {
      this.elements.dailyVoiceTrafficHideDetailBtn().click();
   }

   clickDailyDetailVoiceTrafficHideDetailBtn() {
      this.elements.dailyDetailVoiceTrafficHideDetailBtn().click();
   }

   clickAddedVoiceTrafficHideDetailBtn() {
      this.elements.addedVoiceTrafficHideDetailBtn().click();
   }

   clickVASmainBalaceHideDetailBtn() {
      this.elements.vasMainBalanceHideDetailBtn().click();
   }

   clickvasMonthlyMainBalanceHideDetailBtn() {
      this.elements.vasMonthlyMainBalanceHideDetailBtn().click();
   }
   
   clickmasHideDetailBtn() {
      this.elements.masHideDetailBtn().click();
   }
   checkdailyServiceResultTable() {
     return this.elements.dailyServiceResultTable();
   }

   checkServiceRevenueResultTable() {
      return this.elements.serviceRevenueResultTable();
   }


   checkdailyVoiceTrafficResultTable() {
      return this.elements.dailyVoiceTrafficResultTable();
   }

   checkdailyDetailVoiceTrafficResultTable() {
      return this.elements.dailyDetailVoiceTrafficResultTable();
   }

   checkAddedVoiceTrafficResultTable() {
      return this.elements.addVoiceTrafficResultTable();
   }

   checkvasMainBalanceResultTable() {
      return this.elements.vasMainBalanceResultTable();
   }

   checkvasMonthlyMainBalanceResultTable() {
      return this.elements.vasMonthlyMainBalanceResultTable();
   }

   checkmasResultTable() {
      return this.elements.masResultTable();
   }

}

export default RevenuePage;