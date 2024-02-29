export class LoginPage1 {
    navigate() {
        cy.visit("https://www.edu.goit.global/account/login");
    }

    logInUser(email, password) {
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();
    }
}
