
class LoginPage {
    loadUserData() {
        return cy.fixture('user').then((user) => {
            this.user = user;  // Armazena os dados do usuário na instância da classe
        });
    }

    setEmail() {
        cy.get('[data-testid="email"]').type(this.user.email);
    }

    setPassword() {
        cy.get('[data-testid="senha"]').type(this.user.password);
    }

    clickEntrar() {
        cy.get('button[type="submit"]').click();
    }

    clickLogout() {
        cy.get('[data-testid="logout"]').click(); 
    }
}

export default new LoginPage();

