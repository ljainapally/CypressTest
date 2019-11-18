// <reference types="Cypress" />
context('Actions', () => {
    beforeEach(function() {
        cy.visit('https://samo.verisart.com')
  
        cy.contains('Log In').click();
       //Login
       cy.get('Input[name="email"]').type("test_post1@yopmail.com");
       cy.get('Input[name="password"]').type("Password123");
       cy.get('.Button-kDSBcD').click();
 
        // Navigate to certify page
        cy.contains('Certify').click();
    });
 
        // Upload file
        it('FileUpload',() =>{
        cy.fixture('Market.jpg','base64').then(fileContent =>{
           cy.get('.buttons > .Dropzone__DropTitle-bJWYXP > input').upload({ 
                    fileContent, 
                    fileName: 'Market.jpg',
                    mimeType: 'image.jpg' 
                },
                { uploadType: 'input' },
            );
        })
    });
});
