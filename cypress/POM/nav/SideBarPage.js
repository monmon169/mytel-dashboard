class SideBarPage {
    elements = {
    sideBarBtn : () => cy.get('.ant-menu-submenu-title > .icon'),
    revenueBtn :() => cy.get('ul.ng-star-inserted > :nth-child(2)'),
    mobileBtn : () => cy.get('ul.ng-star-inserted > :nth-child(3)'),
    digitalServicesBtn :() => cy.get('ul.ng-star-inserted > :nth-child(4)'),
    vasBtn : () => cy.get('.ng-tns-c170-17 > ul.ng-star-inserted > :nth-child(2)'),
    masBtn: () => cy.get('.ng-tns-c170-17 > ul.ng-star-inserted > :nth-child(3)'),
    topMsg : () => cy.get('.text-greeting'),
    }

    clickSideBarBtn(){
        this.elements.sideBarBtn().click();
    }

    clickRevenueBtn() {
        this.elements.revenueBtn().click();
    }

    clickMobileBtn() {
        this.elements.mobileBtn().click();
    }
    clickDigitalServicesBtn() {
        this.elements.digitalServicesBtn().click();
    }

    clickvasBtn() {
        this.elements.vasBtn().click();
    }

    clickmasBtn() {
        this.elements.masBtn().click();
    }
}
export default SideBarPage;