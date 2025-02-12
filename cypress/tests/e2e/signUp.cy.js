import signUp from '../../support/pages/signup';

describe('Sign Up Test Suit', () => {

    before(() => {
        cy.initializeUser(); // Generate unique user credentials 
    });

    beforeEach(() => {
        cy.fixture('user').then((user) => {
            signUp.user = user; // Ensure that the data be available before test
        });
    });

    it('Create a New User', () => { 
        cy.visit('/cadastrarusuarios');

        signUp.setName(); 
        signUp.setEmail();
        signUp.setPassword();
        signUp.markAsAdmin(); 
        signUp.clickCadastrar();

        cy.contains('Cadastro realizado com sucesso').should('be.visible');
    });

});

