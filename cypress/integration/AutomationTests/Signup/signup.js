import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
Given(`I am on the verisart Join Page`, () => {
  cy.visit('http://localhost:3000/join');
  });

When(`I click on the Request Invite` , () => {
  cy.get('[data-test="requestInviteCodeLink"]').should('have.text', 'Request Invite').click();
});

And(`I enter email address` , () => {
    cy.get('[data-test="emailInputRequestInvite"]').type("samo_test@yopmail.com").should('have.value','samo_test@yopmail.com');
});

And(`I click on the Request Invite Button`, () => {
    cy.get('[data-test="requestInviteButton"]').contains('Request Invite').should('have.text', 'Request Invite').click();
});

Then(`I should see message as {string}`, (message) => {
    cy.get('.styles__SmallTitle-hinBwc').contains(message).should('have.text', 'Thank you for contacting us');
});

Given(`I enter the Invite code as {string}` , (inviteCode) => {
  cy.get('[data-test="inviteCodeInput"]').type(inviteCode).should('have.value', inviteCode).click();
});

And(`I press Next Button on Join Page`, () => {
  cy.get('[data-test="nextButtonOnJoinPage"]').contains('Next').should('have.text', 'Next').click();
});

And(`I enter the email as {string}` , (email) => {
   cy.get('[data-test="emailInput"]').type(Cypress.moment().format('DDMMYY_HHmm ')+'_'+email);
});

And(`I enter the password as {string}` , (password) => {
  cy.get('[data-test="passwordInput"]').type(password,{log:false}).should('have.value',password);
});

And(`I press Next Button on account` , () => {
  cy.get('[data-test="submitButton"]').contains('Next').should('have.text', 'Next').click();

});
And(`I enter Name on the Profile`, () => {
  cy.get('[data-test=nameOnJoin]').type(Cypress.moment().format('DD MM YYYY')+ '_' +'cypresstest');
});
And(`I upload signature` , () => {
  const dropEvent = {
    dataTransfer: {
        files: [
        ],
    },
};
cy.fixture("TestImages/Sign.jpeg").then((picture) => {
    return Cypress.Blob.base64StringToBlob(picture, 'image/jpeg').then((blob) => {
        dropEvent.dataTransfer.files.push(blob);
    });
});
cy.get('.SignatureImageUpload__DropTitle-hAIyrh').trigger('drop', dropEvent);
});
When(`I save the Profile` , () => {
  cy.get('[data-test="saveProfileButton"]').contains('Save Profile').should('have.text', 'Save Profile').click();
});
Then(`I see the confirmation` , () => {
  cy.contains('Thank you for joining').should('have.text', 'Thank you for joining');
});