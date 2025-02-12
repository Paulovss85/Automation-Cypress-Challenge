import login from '../../support/pages/login';

describe('Logout Test Suit', () => {
  before(() => {
    cy.createUser(); 
  });

  beforeEach(() => {
    cy.fixture('user').then((user) => {
      login.user = user;
    });

    cy.visit('/login');
    login.loadUserData().then(() => {
      login.setEmail();
      login.setPassword();
      login.clickEntrar();
      cy.contains(`Bem Vindo ${login.user.name}`).should('be.visible');
    });
  });

  it.only('Perform logout successfully', () => {
    login.clickLogout();

    // Validation to correct url page
    cy.url().should('include', '/login');

    // Verify the submit button is visible in login page
    cy.get('button[type="submit"]').should('be.visible');
  });
});
