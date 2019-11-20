// <reference types="Cypress" />
Cypress.on('fail', (err, runnable) => {
    debugger
  })
context('Actions', () => {
    beforeEach(function() {
        cy.visit('https://samo.verisart.com')
  
        cy.contains('Log In').click().should('be.visible');
       //Login
       cy.get('Input[name="email"]').type("test_post1@yopmail.com").should('have.value','test_post1@yopmail.com');
       cy.get('Input[name="password"]').type("Password123").should('have.value','Password123');
       cy.get('.Button-kDSBcD').click().should('have.text','Login');
 
        // Navigate to certify page
        cy.contains('Certify').click().should('be.visible');
    });
    
    it('Create certificate',() => {
    //Upload Image
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
        //Select Front Image
        cy.get('.styles__ImageWrapper-itKwCQ > .styles__Wrapper-hZyTcS > .styles__Selected-goPXIx').contains('Select Type').should('have.text', 'Select Type').click();
        cy.get('.styles__Options-ehSwsS').contains('Front Image').should('have.text','Front Image').click();
    // Select I AM THE CREATOR OF THIS ARTWORK
    cy.get('.Artist__SelfButton-foPFPS').scrollIntoView().should('have.text', 'I am the creator of this artwork.').click();
    //Select Artwork type from dropdown
    cy.get(':nth-child(4) > .styles__Selected-goPXIx').contains('Select artwork type').should('have.text', 'Select artwork type').click();
    cy.get('.styles__Options-ehSwsS').contains('Painting').should('have.text','Painting').click();
      //cy.get('.styles__Options-ehSwsS').select('Painting');
    //Enter Artwork Title
    cy.get('Input[name="title"]').type("Test_Nov_15").should('have.value','Test_Nov_15');
    //Enter Production Year
    cy.get('Input[name="production_year"]').type("1999").should('have.value','1999');
    //Enter Artwork Medium
    cy.get('Input[name="medium"]').type("Mixed Media").should('have.value','Mixed Media');
    //Enter Height
    cy.get('Input[name="height"]').type(23).should('have.value','23');
    //Enter Width
    cy.get('Input[name="width"]').type(15.6).should('have.value','15.6');
    //Select Unit as Centimeters
    cy.get(':nth-child(3) > .styles__Wrapper-hZyTcS > .styles__Selected-goPXIx').contains('Select Unit').should('have.text', 'Select Unit').click();
    cy.get('.styles__Options-ehSwsS').contains('Centimeters').should('have.text','Centimeters').click();
    //Enter Location
    cy.get('Input[name="current_location"]').type("Gazelli Art House").should('have.value','Gazelli Art House');
    //Enter Inventory number
    cy.get('Input[name="inventory_number"]').type("AT1234").should('have.value','AT1234');
    //Enter Personal Note
    cy.get(':nth-child(11) > .TextInput__Input-ffftS').type("Test Automation Note").should('have.value','Test Automation Note');
    // Submit the form
    cy.get(".Button-kDSBcD").click().should('have.text','Continue');

    // Check the Previewbox
    //cy.get('.CertificatePreview__Overlay-jFKOJe').focus();

    //cy.get('body')
    cy.focus().should('have.class','.styles__ModalWrapper-cpkhFH');

    cy.get('CertificatePreview__Wrapper-fshHCM foPvFs"').should('have.text', 'Certificate Preview');
    //cy.get('.CertificatePreview__Overlay-jFKOJe').click();
    //cy.get('.ModalPreview__Caption-eirYXK').contains('Certificate Preview');
    
   
   
});
//aferEach(function() {
   // cy.get('.styles__NavSubItemTitle-eCiXNZ').click();
   // cy.contains('Log Out').click();
//});
});
