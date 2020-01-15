import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

  Given(`I am logged in and go to certify tab`, () => {
    cy.visit('/') 
    cy.contains('Log In').click().should('be.visible');
   //Login
   cy.fixture('userlogin').as('userlogindetails').then((userlogins) => {
    cy.get('[data-test="emailInput"]').type(userlogins.email);
    cy.get('[data-test="passwordInput"]').type(userlogins.password);
   });

   cy.get('[data-test="submitButton"]').click().should('have.text','Login');
    // Navigate to certify page
    cy.contains('Certify').click().should('be.visible');
    });
    
    And(`I enter email address`, () => {
        cy.get('[data-test="emailInput"]').type("testverisart1@yopmail.com").should('have.value','testverisart1@yopmail.com');
    });

  Given(`I Upload the image {string}` , (fileName) => {
      const dropEvent = {
        dataTransfer: {
            files: [
            ],
        },
    };
    cy.fixture(fileName).then((picture) => {
        return Cypress.Blob.base64StringToBlob(picture, 'image/jpeg').then((blob) => {
            dropEvent.dataTransfer.files.push(blob);
        });
    });
    cy.get(".Dropzone-gpJCwJ > .styles__SmallTitle-hinBwc").should('have.text', 'Or drop your image file here').trigger('drop', dropEvent);
    });

    And(`I select the image as {string}`, (ImageType) => {
        cy.get('.styles__ImageWrapper-itKwCQ > .styles__Wrapper-hZyTcS > .styles__Selected-goPXIx').contains('Select Type').should('have.text', 'Select Type').click();
        cy.get('.styles__Options-ehSwsS').contains(ImageType).should('have.text', ImageType).click();
  
    });

    And(`I am the creator of the artwork` , () => {
        cy.get('.Artist__SelfButton-foPFPS').scrollIntoView().should('have.text', 'I am the creator of this artwork.').click();
    });

    And(`I select the artwork type as {string}`, (artWorktype) => {
        cy.get(':nth-child(4) > .styles__Selected-goPXIx').contains('Select artwork type').should('have.text', 'Select artwork type').click();
        cy.get('.styles__Option-jMYHRl').contains(artWorktype).should('have.text',artWorktype).click();
    });

    And(`I enter the title as {string}`, (title) => {
        let uniqueID = Cypress.moment().format('DD MM YYYY');
        cy.get('[data-test="titleInput"]').type(uniqueID + '_' + title);
  
    });
    And(`I enter production year as {string}`, (year) => {
        cy.get('[data-test="productionYearInput"]').type(year).should('have.value',year);
    });
    And(`I enter medium as {string}`, (medium) => {
        cy.get('[data-test="mediumInput"]').type(medium).should('have.value',medium)
    });
    And(`I enter height as {float}`, (height) => {
        cy.get('[data-test="heightInput"]').type(height).should('contain.value',height);
    });
    And(`I enter width as {float}`, (width) => {
        cy.get('[data-test="widthInput"]').type(width).should('contain.value',width);
    });
    And(`I enter depth as {float}`, (depth) => {
        cy.get('[data-test="depthInput"]').type(depth).should('contain.value',depth);

    });
    And(`I select the unit as {string}`, (unit) => {
        cy.get('.styles__Wrapper-hZyTcS > .styles__Selected-goPXIx').contains('Select Unit').should('have.text', 'Select Unit').click();
        cy.get('.styles__Options-ehSwsS').contains(unit).should('have.text', unit).click();
    });
    And(`I enter current location as {string}`, (location) => {
        cy.get('[data-test="currentLocationInput"]').type(location).should('have.value',location);
    });
    And(`I enter the edition number as {int}`, (editionNumber) => {
        cy.get('[data-test="editionNumberInput"]').type(editionNumber).should('contain.value',editionNumber);
    });
    And(`I enter the edition volume as {int}`, (editionVolume) => {
        cy.get('[data-test="editionVolumeInput"]').type(editionVolume).should('contain.value',editionVolume);
    });
    And(`I check the Is Artist Proof checkbox`, () => {
        cy.get('[data-test="artistProofCheckbox"]').click();
    });
    And(`I enter the number of APs as {int}`, (artistProof) => {
        cy.get('[data-test="artistProofVolumeInput"]').type(artistProof).should('contain.value',artistProof);
    });

    And(`I enter the inventory number as {string}`, (inventoryNumber) => {
        cy.get('[data-test="inventoryNumberInput"]').type(inventoryNumber).should('have.value',inventoryNumber )
    });
    And(`I enter the personal note as {string}`, (personalNote) => {
        cy.get('[data-test="personalNoteInput"]').type(personalNote).should('have.value', personalNote)
    });

   When(`I click on the continue button`, () => {
    cy.get(".Button-kDSBcD").click().should('have.text','Continue');
    });
   When(`I should see the certificate preview`, () => {
   cy.get('.styles__ModalWrapper-cpkhFH').should('be.visible').click();
    });
    When(`I check the confirm certificate details button`, () => {
    cy.get('[data-test="confirmCheckbox"]').click();
     //cy.get('Checkbox__Label-gCTMrH').should('have.text', 'I confirm that all the information above is accurate.').click();
    });
    When(`I click CertifyNow button`, () => {
    cy.get('.ModalPreview__Content-vNTBJ > .Button-kDSBcD').click();
    });
   Then(`I should see Certificate Saved`, () => {
    cy.get('.styles__ModalWrapper-cpkhFH').should('be.visible')
    });
    And(`I Click on Continue Button`, () => {
    cy.get('.ModalPreview__Spacing-khdzag > .Button-kDSBcD').click();
    cy.contains('Account').click();
    cy.get('.styles__NavSubItemContent-jIGCBQ > :nth-child(3) > a').click();
    });
    And(`I click on the Submit button`, () => {
        cy.get(".Button-kDSBcD").click().should('have.text','Sumbit');
    });
Then(`I should see message as {string}`, (message) => {
    cy.get('.styles__SmallTitle-hinBwc').contains(message).should('have.text', 'Thank you for contacting us');
});

