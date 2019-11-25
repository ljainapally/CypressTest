Feature: CheckCertificatePreview

Scenario: Verify details on Certificate Preview
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
    And I should see the certificate type as "Certificate of Authenticity"
    And I should see Artist Name
    And I should see Artist Signature
    And I should see image on the certificate preview
    And I should see the title as "Test_Title"
    And I should see production Date as "1999"
    And I should see dimensions as "19 x 12 cm"
    And I should see medium as "Canvas"
    And I should see current owner as "..."
    And I should see URL as "..."
    And I should see Blockchain Address as "..."

    