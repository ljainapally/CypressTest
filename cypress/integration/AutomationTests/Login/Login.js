  import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
  Given(`I am on the verisart website`, () => {
    cy.visit('https://samo.verisart.com')
    cy.contains('Log In').click().should('be.visible');   
    });

    When(`I enter the username`, () => {
    cy.get('Input[name="email"]').type("test_post1@yopmail.com").should('have.value','test_post1@yopmail.com');
    });

    When(`I enter the password`, () => {
    cy.get('Input[name="password"]').type("Password123").should('have.value','Password123');
    });

    When(`I click on the login button`, () => {
    cy.get('.Button-kDSBcD').click().should('have.text','Login');
    });

    Then(`I am logged in to the platform`, () => {
    cy.get('.CertificatesPage__Content-cKGgNA').should('be.visible');
    });

    When(`I enter the username as {string}`, (userName) => {
    cy.get('Input[name="email"]').type(userName);
    });
  
    When(`I enter the password as {string}`, (password) => {
      cy.get('Input[name="password"]').type(password,{log:false});
    });

    Then(`I should see the error as {string}`, (error) => {
        cy.get('.styles__ErrorMessage-dspvmm').should('have.text',error) 
        });
       