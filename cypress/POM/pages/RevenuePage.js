class RevenuePage {
   elements = {
    dailyServiceRevenueDiv : () => cy.get('body > app-root > vna-layout-full > menu-nav > div > nz-layout > nz-content > nz-layout > div > nz-content > div > dashboard-revenue > nz-card:nth-child(2) > div.ant-card-body > div.demo-chart.ng-star-inserted > div:nth-child(1) > canvas'),
    homePopUp : () => cy.get('ul.ng-star-inserted'),
    dailyServiceHideDetailBth : () => cy.get(':nth-child(2) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-header'),
    dailyServiceResultTable :() => cy.get(':nth-child(2) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box>div'),
    dailyServiceResultTableRow : () => cy.get(':nth-child(2) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box>div>tr:nth-child(1)'),
    currentMonthTableList_19 : () => cy.get(':nth-child(2) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > .table-responsive > .table > tbody > tr:nth-child(1) > td:nth-child(19)'),
    currentMonthTableList_20 : () => cy.get(':nth-child(2) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > .table-responsive > .table > tbody > tr > :nth-child(20)'),

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

   checkdailyServiceResultTable() {
     return this.elements.dailyServiceResultTable();
   }

   checkcurrentMonthTableList_19() {
      return this.elements.currentMonthTableList_19();
   }

   checkcurrentMonthTableList_20() {
      return this.elements.currentMonthTableList_20();
   }

   checkdailyServiceResultTableRow() {
      return this.elements.dailyServiceResultTableRow();
   }
}

export default RevenuePage;