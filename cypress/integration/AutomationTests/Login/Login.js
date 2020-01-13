  import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
  Given(`I am on the verisart login page`, () => {
    cy.visit('/')
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
    And(`I enter email address`, () => {
      cy.get('[data-test="emailInput"]').type("testverisart1@yopmail.com").should('have.value','testverisart1@yopmail.com');
  });
    Then(`I am logged in to the platform`, () => {
    cy.get('.CertificatesPage__Content-cKGgNA').should('be.visible');
    });

    Then(`I should see the error as {string}`, (error) => {
    cy.get('.styles__ErrorMessage-dspvmm').should('have.text',error) 
    });
    And(`I logout from the account` ,() =>{
    cy.contains('Account').click();
    cy.get('.styles__NavSubItemContent-jIGCBQ > :nth-child(3) > a').should('have.text', 'Log Out').click();
        });
    When(`I click on the forgot password` ,() =>{
      cy.get('[data-test=forgotPasswordLink]').should('have.text','Forgot Password').click();
    })
    