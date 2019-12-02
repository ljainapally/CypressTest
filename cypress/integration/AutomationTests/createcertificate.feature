Feature: CreateCertificateOfAuthenticity
Create Certificates on Verisart Platform

Scenario: Create COA with TestData1 and ArtworkType Painting
  Given I am logged in and go to certify tab
  Given I Upload the image "/TestImages/Little Afghan.jpg"
  Given I Upload the image "/TestImages/backimage.jpg"
    And I select the image as "Front Image"
    And I select the backimage as "Back Image"
    And I am the creator of the artwork
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

Scenario: Create COA with TestData4 and ArtworkType Furniture
  Given I am logged in and go to certify tab
  Given I Upload the image "/TestImages/The Tangle of Mind and Matter.jpg"
    And I select the image as "Front Image"
    And I am the creator of the artwork
    And I select the artwork type as "Furniture"
    And I enter the title as "CypressTest_The Tangle of Mind and Matter"
    And I enter production year as "2017"
    And I enter medium as "Interactive virtual reality art installation. Duration: 4 min."
    And I enter height as 192.00
    And I enter width as 16.99
    And I select the unit as "Centimeters"
   When I click on the continue button
    And I should see the certificate preview
    And I check the confirm certificate details button
    And I click CertifyNow button
   Then I should see Certificate Saved
    And I Click on Continue Button
 
Scenario: Create COA with TestData5 and ArtworkType Drawing
  Given I am logged in and go to certify tab
  Given I Upload the image "/TestImages/High Noon .jpg"
    And I select the image as "Front Image"
    And I am the creator of the artwork
    And I select the artwork type as "Drawing"
    And I enter the title as "CypressTest_High Noon 1"
    And I enter production year as "2015"
    And I enter medium as "Colour Photograph"
    And I enter height as 60.00
    And I enter width as 80.00
    And I select the unit as "Centimeters"
   When I click on the continue button
    And I should see the certificate preview
    And I check the confirm certificate details button
    And I click CertifyNow button
   Then I should see Certificate Saved
    And I Click on Continue Button
 
Scenario: Create COA with TestData6 and ArtworkType Picture
  Given I am logged in and go to certify tab
  Given I Upload the image "/TestImages/Near Montgomery.jpg"
    And I select the image as "Front Image"
    And I am the creator of the artwork
    And I select the artwork type as "Picture"
    And I enter the title as "CypressTest_Near Montgomery"
    And I enter production year as "2015"
    And I enter medium as "Acrylic on paper "
    And I enter height as 11.10
    And I enter width as 69.80
    And I select the unit as "Centimeters"
   When I click on the continue button
    And I should see the certificate preview
    And I check the confirm certificate details button
    And I click CertifyNow button
   Then I should see Certificate Saved
    And I Click on Continue Button
 
  Scenario: Create COA with TestData7 and ArtworkType Design
  Given I am logged in and go to certify tab
  Given I Upload the image "/TestImages/Military Man.jpg"
    And I select the image as "Front Image"
    And I am the creator of the artwork
    And I select the artwork type as "Picture"
    And I enter the title as "CypressTest_Military Man"
    And I enter production year as "2015"
    And I enter medium as "Ink on paper "
    And I enter height as 20.30
    And I enter width as 12.70
    And I select the unit as "Centimeters"
   When I click on the continue button
    And I should see the certificate preview
    And I check the confirm certificate details button
    And I click CertifyNow button
   Then I should see Certificate Saved
    And I Click on Continue Button
