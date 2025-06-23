class NavBarPage {
    elements ={
    canlenderBtn : () => cy.get('body > app-root > vna-layout-full > menu-nav > div > nz-layout > nz-content > nz-layout > div > nz-header > app-mytel-header > div > div > div.block-date-filter.d-flex.justify-content-center.col-4'),
    }

    checkCalenderBtn() {
        return this.elements.canlenderBtn();
    }

}

export default NavBarPage;