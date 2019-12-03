Feature: CreateCertificateFromDatatable
Create Certificates on Verisart Platform
Scenario: Create COA from datatable
  Given I am logged in and go to certify tab
   Then I create the certificates with the folowing data
  |Image                          |ArtworkType  |Title         |ProductionYear|Medium       |Height|Width|Units      |
  |/TestImages/Near Montgomery.jpg|Painting     |Little Afghan |1969          |Oil on Canvas|60.00 |42.00|Centimeters|