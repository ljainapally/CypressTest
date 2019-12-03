import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And(`I select artistname as {string}`, (artistName) =>{
    var strFirstThreeLetter = artistName.substring(0,3);
    cy.get('[style="width: 100%; display: flex; flex-direction: column;"] > .styles__Wrapper-hZyTcS > .TextInput__Input-ffftS').type(strFirstThreeLetter);
    cy.get(':nth-child(3) > .styles__ArtistOptionLabelWrapper-fTKDkr > .styles__ArtistOptionLabel-bBAOhy').contains(artistName).click();
});
