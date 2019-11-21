Feature: Login
 
Scenario: Verify
  Given I am on the verisart website
   When I enter the username
    And I enter the password
    And I click on the login button
   Then I am logged in to the platform
