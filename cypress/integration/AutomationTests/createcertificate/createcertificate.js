import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

  Given(`I am logged in and go to certify tab`, () => {
    cy.visit('https://samo.verisart.com') 
    cy.contains('Log In').click().should('be.visible');
   //Login
   cy.get('Input[name="email"]').type("test_post1@yopmail.com").should('have.value','test_post1@yopmail.com');
   cy.get('Input[name="password"]').type("Password123").should('have.value','Password123');
   cy.get('.Button-kDSBcD').click().should('have.text','Login');

    // Navigate to certify page
    cy.contains('Certify').click().should('be.visible');
  
    });

  Given(`I Upload the image` , () => {
      const dropEvent = {
        dataTransfer: {
            files: [
            ],
        },
    };
    cy.fixture('Military Man.jpg').then((picture) => {
        return Cypress.Blob.base64StringToBlob(picture, 'image/jpeg').then((blob) => {
            dropEvent.dataTransfer.files.push(blob);
        });
    });
    cy.get(".Dropzone-gpJCwJ > .styles__SmallTitle-hinBwc").trigger('drop', dropEvent);
    });

    And(`I select the image as {string}`, (frontImage) => {
        cy.get('.styles__ImageWrapper-itKwCQ > .styles__Wrapper-hZyTcS > .styles__Selected-goPXIx').contains('Select Type').should('have.text', 'Select Type').click();
        cy.get('.styles__Options-ehSwsS').contains('Front Image').should('have.text',frontImage).click();
  
    });
    And(`I am the creator of the artwork` , () => {
        cy.get('.Artist__SelfButton-foPFPS').scrollIntoView().should('have.text', 'I am the creator of this artwork.').click();
    });

    And(`I select the artwork type as {string}`, (artWorktype) => {
        cy.get(':nth-child(4) > .styles__Selected-goPXIx').contains('Select artwork type').should('have.text', 'Select artwork type').click();
        cy.get('.styles__Options-ehSwsS').contains('Painting').should('have.text',artWorktype).click();
    });

    And(`I enter the title as {string}`, (title) => {
        cy.get('Input[name="title"]').type(title).should('have.value',title);
  
    });
    And(`I enter production year as {string}`, (year) => {
        cy.get('Input[name="production_year"]').type(year).should('have.value',year);
    });
    And(`I enter medium as {string}`, (medium) => {
        cy.get('Input[name="medium"]').type(medium).should('have.value',medium)
    });
    And(`I enter height as {int}`, (height) => {
        cy.get('Input[name="height"]').type(height);
    });
    And(`I enter width as {int}`, (width) => {
        cy.get('Input[name="width"]').type(width);
    });
    And(`I select the unit as {string}`, (unit) => {
        cy.get(':nth-child(3) > .styles__Wrapper-hZyTcS > .styles__Selected-goPXIx').contains('Select Unit').should('have.text', 'Select Unit').click();
        cy.get('.styles__Options-ehSwsS').contains(unit).should('have.text', unit).click();
    });
   When(`I click on the continue button`, () => {
    cy.get(".Button-kDSBcD").click().should('have.text','Continue');
});
   Then(`I should see the certificate preview`, () => {
  
});

