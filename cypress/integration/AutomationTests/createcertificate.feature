Feature: CreateCertificate
Create Certificates on Verisart Platform

Scenario: Create Certificate with Required Fields
  Given I am logged in and go to certify tab
  Given I Upload the image
    And I select the image as "Front Image"
    And I am the creator of the artwork
    And I select the artwork type as "Painting"
    And I enter the title as "Test_Title"
    And I enter production year as "1999"
    And I enter medium as "Canvas"
    And I enter height as 19
    And I enter width as 12
    And I select the unit as "Centimeters"
   When I click on the continue button
   Then I should see the certificate preview



