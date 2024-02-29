export class HomePage1 {
    goToCourseHomepage() {
        cy.get('[id="go-to-the-course-homepage-widget"]').scrollIntoView().should("be.visible").wait(5000);
        }
    
    proceedToNext() {
        cy.get('button[class="next-7afvtf e1phyiqy6"]').click().wait(5000);
        }
    
    logOut() {
        cy.contains('Log out').click();
        }
}

