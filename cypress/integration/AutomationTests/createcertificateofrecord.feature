Feature: CreateCertificateOfRecord
Create Certificates on Verisart Platform

Scenario: Create COR with TestData1 and ArtworkType Painting
  Given I am logged in and go to certify tab
  Given I Upload the image "/TestImages/Little Afghan.jpg"
    And I select the image as "Front Image"
    And I select artistname as "Derek Boshier" 
    And I select the artwork type as "Painting"
    And I enter the title as "CypressTest_Little Afghan"
    And I enter production year as "1969"
    And I enter medium as "Oil on canvas"
    And I enter height as 60.00
    And I enter width as 42.99
    And I select the unit as "Centimeters"
   When I click on the continue button
    And I should see the certificate preview
    And I check the confirm certificate details button
    And I click CertifyNow button
   Then I should see Certificate Saved
    And I Click on Continue Button