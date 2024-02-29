class HomePage {
    constructor() {
        this.toToCourseHomepageWidget = '[id="go-to-the-course-homepage-widget"]';
        this.nextButton = 'button[class="next-7afvtf e1phyiqy6"]';
        this.logOutOption = 'Log out';
    }



goToCourseHomepage() {
    cy.get(this.toToCourseHomepageWidget).scrollIntoView().should("be.visible").wait(5000);
    }

proceedToNext() {
    cy.get(this.nextButton).click().wait(5000);
    }

logOut() {
    cy.contains(this.logOutOption).click();
    }
}

export default new HomePage();