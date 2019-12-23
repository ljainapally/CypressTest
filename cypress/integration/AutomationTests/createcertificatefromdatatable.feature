Feature: CreateCertificateFromDatatable
Create Certificates on Verisart Platform
Scenario: Create COA from datatable
  Given I am logged in and go to certify tab
   Then I create the certificates with the folowing data
 |Image                          |ImageType  |ArtworkType  |Title         |ProductionYear|Medium       |Height|Width|Units      |Location|InventoryNumber|Note|
 |/TestImages/Little Afghan.jpg  |Front Image|Painting     |Little Afghan |1969          |Oil on Canvas|60.00 |42.00|Centimeters|London  |InventoryNumber|Note|
 |/TestImages/Market.jpg         |Front Image|Painting     |Little Afghan |1969          |Oil on Canvas|60.00 |42.00|Centimeters|London  |InventoryNumber|Note|
 |/TestImages/High Noon .jpg     |Front Image|Painting     |Little Afghan |1969          |Oil on Canvas|60.00 |42.00|Centimeters|London  |InventoryNumber|Note|
 |/TestImages/Twins .jpg         |Front Image|Painting     |Little Afghan |1969          |Oil on Canvas|60.00 |42.00|Centimeters|London  |InventoryNumber|Note|