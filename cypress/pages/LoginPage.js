class LoginPage {
    constructor() {
        this.url = "https://www.edu.goit.global/account/login";
        this.emailInput = 'input[name="email"]';
        this.passwordInput = 'input[name="password"]';
        this.loginButton = 'button[type="submit"]';
    }
    
    navigate() {
        cy.visit(this.url);
    }

    logInUser(email, password) {
        cy.get(this.emailInput).type(email);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginButton).click();
    }
}

export default new LoginPage();