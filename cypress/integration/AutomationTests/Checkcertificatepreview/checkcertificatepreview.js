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
    cy.fixture('Smile.jpg').then((picture) => {
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
        cy.get('.styles__Options-ehSwsS').contains(artWorktype).should('have.text',artWorktype).click();
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
        cy.get('Input[name="height"]').type(height).should('contain.value',height);
    });
    And(`I enter width as {int}`, (width) => {
        cy.get('Input[name="width"]').type(width).should('contain.value',width);
    });

    And(`I select the unit as {string}`, (unit) => {
        cy.get(':nth-child(3) > .styles__Wrapper-hZyTcS > .styles__Selected-goPXIx').contains('Select Unit').should('have.text', 'Select Unit').click();
        cy.get('.styles__Options-ehSwsS').contains(unit).should('have.text', unit).click();
    });

   When(`I click on the continue button`, () => {
        cy.get(".Button-kDSBcD").click().should('have.text','Continue');
    });

    Then(`I should see the certificate preview`, () => {
        cy.get('.styles__ModalWrapper-cpkhFH').should('be.visible').click();
        cy.get('.ModalPreview__Caption-eirYXK').contains('Certificate Preview').should('have.text','Certificate Preview');
    });

    And(`I should see the certificate type as {string}`, (certificateType) => {
        cy.get('.Header__Title-dLRSgy').contains(certificateType).should('have.text',certificateType);
    });

    And(`I should see Artist Name`, () =>{
        cy.get('.Details__Header-ecJRav > .Details__Title-khuZcf').should('be.visible');
    });

    And(`I should see Artist Signature`, () =>{
        cy.get('.Details__Signature-kefvHB > img').should('be.visible');
    });

    And(`I should see image on the certificate preview`, ()=>{
        cy.get('.CertificatePreview__Image-cyjvhF').should('be.visible');
    });

    And(`I should see the title as {string}`, (previewTitle) =>{
        cy.get(':nth-child(1) > .DetailsItem__Value-dtxmuy').contains(previewTitle).should('have.text', previewTitle);
    });

    And(`I should see production Date as {string}`, (previewYear) =>{
        cy.get(':nth-child(2) > .DetailsItem__Value-dtxmuy').contains(previewYear).should('have.text', previewYear);
    });
    And(`I should see medium as {string}`, (previewMedium) =>{
        cy.get(':nth-child(3) > .DetailsItem__Value-dtxmuy').contains(previewMedium).should('have.text', previewMedium);

    });

    And(`I should see dimensions as {string}`, (previewDimentsions) =>{
        cy.get(':nth-child(4) > .DetailsItem__Value-dtxmuy').contains(previewDimentsions).should('have.text', previewDimentsions);

    });
    And(`I should see current owner as {string}`, (previewCurrentOwner) =>{
        cy.get(':nth-child(5) > .DetailsItem__Value-dtxmuy').contains(previewCurrentOwner).should('have.text', previewCurrentOwner);
    });
    And(`I should see URL as {string}`, (previewUrl) =>{
        cy.get(':nth-child(6) > .DetailsItem__Value-dtxmuy').contains(previewUrl).should('have.text', previewUrl);

    });
    And(`I should see Blockchain Address as {string}` , (previewBlockchainAddress) =>{
        cy.get(':nth-child(7) > .DetailsItem__Value-dtxmuy').contains(previewBlockchainAddress).should('have.text', previewBlockchainAddress);

    });