Feature: Login 
Scenario: Verify login with valid credentials
  Given I am on the verisart website
   When I enter the username as "test@verisart.com"
    And I enter the password as "Password123"
    And I click on the login button
   Then I am logged in to the platform

Scenario: Verify login with invalid password
  Given I am on the verisart website
   When I enter the username as "user3@yopmail.com"
    And I enter the password as "password"
    And I click on the login button
   Then I should see the error as "this email/password is not recognised"