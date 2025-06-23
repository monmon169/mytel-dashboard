class SideBarPage {
    elements = {
    sideBarBtn : () => cy.get('.ant-menu-submenu-title > .icon'),
    revenueBtn :() => cy.get('ul.ng-star-inserted > :nth-child(2)'),
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
}
export default SideBarPage;