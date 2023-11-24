// cypress/support/commands.js

// Custom command to log in
Cypress.Commands.add('login', (username, password) => {
    // Your login logic here
    // For example:
    cy.visit('/login');
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('form').submit();
  });
  
  // Other custom commands...