
class SignUp {
    loadUserData() {
        return cy.fixture('user').then((user) => {
            this.user = user;  // Armazena os dados do usuário na instância da classe
        });
    }

    setName() {
        cy.get('[data-testid="nome"]').type(this.user.name);
    }

    setEmail() {
        cy.get('[data-testid="email"]').type(this.user.email);
    }

    setPassword() {
        cy.get('[data-testid="password"]').type(this.user.password);
    }

    markAsAdmin() {
        cy.get('[data-testid="checkbox"]').check();
    }

    clickCadastrar() {
        cy.get('button[type="submit"]').click();
    }
}

export default new SignUp();

