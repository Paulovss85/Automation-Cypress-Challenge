
import login from '../../support/pages/login';

describe('Login Test Suit', () => {
  before(() => {
    cy.createUser(); 
  });

  beforeEach(() => {
    cy.fixture('user').then((user) => {
      login.user = user; //Load data of user created
    });
  });

  it('Perform login using valid credentials', () => { 
    cy.visit('/login');

    login.setEmail();
    login.setPassword();
    login.clickEntrar();

    cy.contains(`Bem Vindo ${login.user.name}`).should('be.visible');
  });

});


