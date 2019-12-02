import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And(`I select artistname as {string}`, (artistName) =>{
    var strFirstThreeLetter = artistName.substring(0,3);
    cy.get('.styles__Wrapper-hZyTcS > .TextInput__Input-ffftS').type(strFirstThreeLetter);
    cy.get('.styles__ArtistOptionLabel-bBAOhy kxKBme').contains(artistName).click();
});
