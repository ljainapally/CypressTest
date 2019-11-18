import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
Given(`I am on the verisart website`, () => {
    cy.visit('https://samo.verisart.com/login');
  });
  When(`I enter the username`, () => {
    cy.get('Input[name="email"]').type("samo_test@yopmail.com");
  });

  When(`I enter the password`, () => {
    cy.get('Input[name="password"]').type("Password123");
    
  });
  When(`I click on the login button`, () => {
   cy.get('.Button-kDSBcD').click();
  });
  Then(`I am logged in to the platform`, () => {
    //cy.visit('https://samo.verisart.com/certificate')
  });