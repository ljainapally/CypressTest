Feature: CreateCertificateOfAuthenticity
Create Certificates on Verisart Platform

Scenario: Create Certificate of Authenticity with ArtworkType Sculpture
  Given I am logged in and go to certify tab
  Given I Upload the image "/TestImages/Little Afghan.jpg"
    And I select the image as "Front Image"
    And I am the creator of the artwork
    And I select the artwork type as "Sculpture"
    And I enter the title as "CypressTest_Little Afghan"
    And I enter production year as "1969"
    And I enter medium as "Oil on canvas"
    And I enter height as 60.00
    And I enter width as 42.99
    And I enter depth as 42.99
    And I select the unit as "Inches"
    And I enter current location as "London"
    And I enter the edition number as 1
    And I enter the edition volume as 10
    And I check the Is Artist Proof checkbox
    And I enter the number of APs as 3
    And I enter the inventory number as "INVJan14"
    And I enter the personal note as "COR Cypress test"
   When I click on the continue button
    And I should see the certificate preview
    And I check the confirm certificate details button
    And I click CertifyNow button
   Then I should see Certificate Saved
    And I Click on Continue Button

Scenario: Create Certificate of Authenticity with ArtworkType Print
  Given I am logged in and go to certify tab
  Given I Upload the image "/TestImages/Bridge.jpg"
    And I select the image as "Front Image"
    And I am the creator of the artwork
    And I select the artwork type as "Print"
    And I enter the title as "CypressTest_Bridge"
    And I enter production year as "1969"
    And I enter medium as "Oil on canvas"
    And I enter height as 12.99
    And I enter width as 567.99
    And I select the unit as "Inches"
    And I enter current location as "Berlin"
    And I enter the edition number as 1
    And I enter the edition volume as 10
    And I check the Is Artist Proof checkbox
    And I enter the number of APs as 3
   When I click on the continue button
    And I should see the certificate preview
    And I check the confirm certificate details button
    And I click CertifyNow button
   Then I should see Certificate Saved
    And I Click on Continue Button

Scenario: Create Certificate of Authenticity with ArtworkType Photo
  Given I am logged in and go to certify tab
  Given I Upload the image "/TestImages/Market.jpg"
    And I select the image as "Front Image"
    And I am the creator of the artwork
    And I select the artwork type as "Photo"
    And I enter the title as "CypressTest_Market"
    And I enter production year as "1969"
    And I enter medium as "Oil on canvas"
    And I enter height as 23.45
    And I enter width as 2.99
    And I select the unit as "Centimeters"
    And I enter current location as "London"
    And I enter the edition number as 1
    And I enter the edition volume as 5
   When I click on the continue button
    And I should see the certificate preview
    And I check the confirm certificate details button
    And I click CertifyNow button
   Then I should see Certificate Saved
    And I Click on Continue Button

Scenario: Create Certificate of Authenticity with ArtworkType Collectible
  Given I am logged in and go to certify tab
  Given I Upload the image "/TestImages/Smile.jpg"
    And I select the image as "Front Image"
    And I am the creator of the artwork 
    And I select the artwork type as "Collectible"
    And I enter the title as "CypressTest_Smile"
    And I enter production year as "1969"
    And I enter medium as "Oil on canvas"
    And I enter height as 89.63
    And I enter width as 45.63
    And I select the unit as "Centimeters"
    And I enter current location as "London"
    And I enter the edition number as 1
    And I enter the edition volume as 10
   When I click on the continue button
    And I should see the certificate preview
    And I check the confirm certificate details button
    And I click CertifyNow button
   Then I should see Certificate Saved
    And I Click on Continue Button
  
Scenario: Create Certificate of Authenticity with ArtworkType Digital Artwork
  Given I am logged in and go to certify tab
  Given I Upload the image "/TestImages/Twins .jpg"
    And I select the image as "Front Image"
    And I am the creator of the artwork 
    And I select the artwork type as "Digital Artwork"
    And I enter the title as "CypressTest_Twins"
    And I enter production year as "1969"
    And I enter medium as "Oil on canvas"
    And I enter height as 60.00
    And I enter width as 42.99
    And I enter current location as "London"
    And I enter the edition number as 1
    And I enter the edition volume as 10
    And I check the Is Artist Proof checkbox
    And I enter the number of APs as 3
   When I click on the continue button
    And I should see the certificate preview
    And I check the confirm certificate details button
    And I click CertifyNow button
   Then I should see Certificate Saved
    And I Click on Continue Button

Scenario: Create Certificate of Authenticity with ArtworkType Mixed Media
  Given I am logged in and go to certify tab
  Given I Upload the image "/TestImages/Untitled 1974.jpg"
    And I select the image as "Front Image"
    And I am the creator of the artwork
    And I select the artwork type as "Mixed Media"
    And I enter the title as "CypressTest_Untitled 1974"
    And I enter production year as "1969"
    And I enter medium as "Oil on canvas"
    And I enter height as 60.00
    And I enter width as 42.99
    And I select the unit as "Centimeters"
    And I enter current location as "London"
    And I enter the edition number as 1
    And I enter the edition volume as 10
    And I check the Is Artist Proof checkbox
    And I enter the number of APs as 3
   When I click on the continue button
    And I should see the certificate preview
    And I check the confirm certificate details button
    And I click CertifyNow button
   Then I should see Certificate Saved
    And I Click on Continue Button

Scenario: Create Certificate of Authenticity with ArtworkType Ephemera
  Given I am logged in and go to certify tab
  Given I Upload the image "/TestImages/High Noon .jpg"
    And I select the image as "Front Image"
    And I am the creator of the artwork
    And I select the artwork type as "Ephemera"
    And I enter the title as "CypressTest_High Noon"
    And I enter production year as "1969"
    And I enter medium as "Oil on canvas"
    And I enter height as 60.00
    And I enter width as 42.99
    And I select the unit as "Centimeters"
    And I enter current location as "London"
    And I enter the edition number as 1
    And I enter the edition volume as 10
    And I check the Is Artist Proof checkbox
    And I enter the number of APs as 3
   When I click on the continue button
    And I should see the certificate preview
    And I check the confirm certificate details button
    And I click CertifyNow button
   Then I should see Certificate Saved
    And I Click on Continue Button

Scenario: Create Certificate of Authenticity with ArtworkType Book
  Given I am logged in and go to certify tab
  Given I Upload the image "/TestImages/Military Man.jpg"
    And I select the image as "Front Image"
    And I am the creator of the artwork
    And I select the artwork type as "Book"
    And I enter the title as "CypressTest_Military Man"
    And I enter production year as "1969"
    And I enter medium as "Oil on canvas"
    And I enter height as 60.00
    And I enter width as 42.99
    And I select the unit as "Centimeters"
    And I enter current location as "London"
    And I enter the edition number as 1
    And I enter the edition volume as 10
    And I check the Is Artist Proof checkbox
    And I enter the number of APs as 3
   When I click on the continue button
    And I should see the certificate preview
    And I check the confirm certificate details button
    And I click CertifyNow button
   Then I should see Certificate Saved
    And I Click on Continue Button

Scenario: Create Certificate of Authenticity with ArtworkType Painting
  Given I am logged in and go to certify tab
  Given I Upload the image "/TestImages/Little Afghan.jpg"
  Given I Upload the image "/TestImages/backimage.jpg"
    And I select the image as "Front Image"
    And I select the image as "Back Image"
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

Scenario: Create Certificate of Authenticity with ArtworkType Furniture
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
 
Scenario: Create Certificate of Authenticity with ArtworkType Drawing
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
 
Scenario: Create Certificate of Authenticity with ArtworkType Picture
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
 
  Scenario: Create Certificate of Authenticity with ArtworkType Design
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
