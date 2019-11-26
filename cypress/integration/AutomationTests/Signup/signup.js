import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
Given(`I am on the verisart Join Page`, () => {
  cy.visit('https://samo.verisart.com/join');
  });

When(`I click on the Request Invite` , () => {
  cy.get('.StepInviteCode__RequestLink-fNAdqj').should('have.text', 'Request Invite').click();
});

And(`I enter email address` , () => {
    cy.get('.TextInput__Input-ffftS').type("samo_test@yopmail.com").should('have.value','samo_test@yopmail.com');
});

And(`I click on the Request Invite Button`, () => {
    cy.get('.Button-kDSBcD').contains('Request Invite').should('have.text', 'Request Invite').click();
});

Then(`I should see message as {string}`, (message) => {
    cy.get('.styles__SmallTitle-hinBwc').contains(message).should('have.class', 'styles__SmallTitle-hinBwc');
});
