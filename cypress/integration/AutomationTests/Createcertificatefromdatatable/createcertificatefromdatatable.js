import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Then(`I create the certificates with the folowing data`, datatable => {
datatable.hashes().forEach(row =>{
 
        const dropEvent = {
            dataTransfer: {
                files: [
                ],
            },
        };
        cy.fixture(row.Image).then((picture) => {
            return Cypress.Blob.base64StringToBlob(picture, 'image/jpeg').then((blob) => {
                dropEvent.dataTransfer.files.push(blob);
            });
        });
    cy.get(".Dropzone__DropTitle-bJWYXP").trigger('drop', dropEvent);
  

    cy.get('.styles__ImageWrapper-itKwCQ > .styles__Wrapper-hZyTcS > .styles__Selected-goPXIx').contains('Select Type').should('have.text', 'Select Type').click();
    cy.get('.styles__Options-ehSwsS').contains('Front Image').should('have.text',frontImage).click();
   
    cy.get(':nth-child(4) > .styles__Selected-goPXIx').contains('Select artwork type').should('have.text', 'Select artwork type').click();
    cy.get('.styles__Options-ehSwsS').contains(row.ArtworkType).should('have.text',row.ArtworkType).click();

    let uniqueID = Cypress.moment().format('DD MM YYYY');
    cy.get('Input[name="title"]').type(uniqueID + '_' + row.Title);
    cy.get('Input[name="production_year"]').type(row.ProductionYear).should('have.value',row.ProductionYear);
    cy.get('Input[name="medium"]').type(row.Medium).should('have.value', row.Medium)
    cy.get('Input[name="height"]').type(row.Height).should('contain.value',row.Height);
    cy.get('Input[name="width"]').type(row.Width).should('contain.value',row.Width);

    cy.get('.styles__Wrapper-hZyTcS > .styles__Selected-goPXIx').contains('Select Unit').should('have.text', 'Select Unit').click();
    cy.get('.styles__Options-ehSwsS > :nth-child(2)').contains(row.Units).should('have.text', row.Units).click();

});
cy.get(".Button-kDSBcD").click().should('have.text','Continue');
cy.get('.styles__ModalWrapper-cpkhFH').should('be.visible').click();
cy.get('.Checkbox__TickWrapper-kqwkaU').click();
cy.get('.ModalPreview__Content-vNTBJ > .Button-kDSBcD').click();
cy.get('.styles__ModalWrapper-cpkhFH').should('be.visible')
cy.get('.ModalPreview__Spacing-khdzag > .Button-kDSBcD').click();
cy.contains('Account').click();
cy.get('.styles__NavSubItemContent-jIGCBQ > :nth-child(3) > a').click();
});
