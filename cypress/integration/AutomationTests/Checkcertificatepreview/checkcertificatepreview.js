import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
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
        cy.get(':nth-child(1) > .DetailsItem__Value-dtxmuy').contains(previewTitle);
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