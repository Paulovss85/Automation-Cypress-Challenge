Cypress.Commands.add('initializeUser', () => {
    const user = {
      name: 'Test User',
      email: `usuario_${Date.now()}@email.com`,
      password: 'senha_segura',
      administrador: true
    };
  
    // Save data on fixture to use later
    cy.writeFile('cypress/fixtures/user.json', user);
  
    // Return user to be used in another test
    return cy.wrap(user);
  });

  Cypress.Commands.add('createUser', () => {
    const user = {
      name: `User_${Date.now()}`,
      email: `usuario_${Date.now()}@email.com`,
      password: 'senha_segura',
      administrador: true
    };
  
    cy.writeFile('cypress/fixtures/user.json', user);
  
    cy.visit('/cadastrarusuarios');
  
    cy.get('[data-testid="nome"]').type(user.name);
    cy.get('[data-testid="email"]').type(user.email);
    cy.get('[data-testid="password"]').type(user.password);
    cy.get('[data-testid="checkbox"]').check();
    cy.get('button[type="submit"]').click();
  
    cy.contains('Cadastro realizado com sucesso').should('be.visible');
  });
  