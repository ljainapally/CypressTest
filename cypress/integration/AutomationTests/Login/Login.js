  import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
  Given(`I am on the verisart website`, () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Log In').click().should('be.visible');   
    });
    When(`I enter the username as {string}`, (userName) => {
      cy.get('[data-test="emailInput"]').type(userName);
      });
    
    When(`I enter the password as {string}`, (password) => {
        cy.get('[data-test="passwordInput"]').type(password,{log:false});
      });
    When(`I click on the login button`, () => {
    cy.get('[data-test="submitButton"]').click().should('have.text','Login');
    });

    Then(`I am logged in to the platform`, () => {
    cy.get('.CertificatesPage__Content-cKGgNA').should('be.visible');
    });

    Then(`I should see the error as {string}`, (error) => {
        cy.get('.styles__ErrorMessage-dspvmm').should('have.text',error) 
        });
       