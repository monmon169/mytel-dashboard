class RevenuePage {
   elements = {
    dailyServiceRevenueDiv : () => cy.get('body > app-root > vna-layout-full > menu-nav > div > nz-layout > nz-content > nz-layout > div > nz-content > div > dashboard-revenue > nz-card:nth-child(2) > div.ant-card-body > div.demo-chart.ng-star-inserted > div:nth-child(1) > canvas'),
    homePopUp : () => cy.get('ul.ng-star-inserted'),
    dailyServiceHideDetailBth : () => cy.get(':nth-child(2) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-header'),
    serviceRevenueHideDetailBtn : () => cy.get(':nth-child(3) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-header'),
    dailyServiceResultTable :() => cy.get(':nth-child(2) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box>div'),
   serviceRevenueResultTable :() => cy.get(':nth-child(3) > .ant-card-body > .table-detail > .col-12 > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box>div'),
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

   checkdailyServiceResultTable() {
     return this.elements.dailyServiceResultTable();
   }

   checkServiceRevenueResultTable() {
      return this.elements.serviceRevenueResultTable();
   }


   checkdailyServiceResultTableRow() {
      return this.elements.dailyServiceResultTableRow();
   }
}

export default RevenuePage;