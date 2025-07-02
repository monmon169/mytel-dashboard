class SideBarPage {
    elements = {
    sideBarBtn : () => cy.get('.ant-menu-submenu-title > .icon'),
    revenueBtn :() => cy.get('ul.ng-star-inserted > :nth-child(2)'),
    mobileBtn : () => cy.get('ul.ng-star-inserted > :nth-child(3)'),
    topMsg : () => cy.get('.text-greeting'),
    }

    texts = {
        revenueMsg : "Revenue",
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
}
export default SideBarPage;