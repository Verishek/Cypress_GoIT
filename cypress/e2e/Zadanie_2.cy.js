describe('User can visit GoIT page', () => {
  beforeEach('go to page', () => {
      cy.visit('https://www.edu.goit.global/account/login');
  });

  it('successfully login to the GoIT page first test', () => {
      cy.logInUser('user888@gmail.com', '1234567890');
      cy.get('[id="go-to-the-course-homepage-widget"]').scrollIntoView().should("be.visible").wait(5000);
      cy.get('button[class="next-7afvtf e1phyiqy6"]').click().wait(5000);
      cy.contains('Log out').click();
    })
 
    it('successfully login to the GoIT page second test', () => {
      cy.logInUser('testowyqa@qa.team', 'QA!automation-1');
      cy.get('[id="go-to-the-course-homepage-widget"]').scrollIntoView().should("be.visible").wait(5000);
      cy.get('button[class="next-7afvtf e1phyiqy6"]').click().wait(5000);
      cy.contains('Log out').click();
    })
  });