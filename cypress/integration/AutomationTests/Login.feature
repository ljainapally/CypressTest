Feature: Login 
Scenario: Verify login with valid credentials
  Given I am on the verisart login page
   When I enter the username as "test@verisart.com"
    And I enter the password as "password"
    And I click on the login button
   Then I am logged in to the platform

Scenario: Verify login with invalid password
  Given I am on the verisart login page
   When I enter the username as "user3@yopmail.com"
    And I enter the password as "password"
    And I click on the login button
   Then I should see the error as "this email/password is not recognised"

Scenario: Login with valid credentials and Logout
  Given I am on the verisart login page
   When I enter the username as "test@verisart.com"
    And I enter the password as "password"
    And I click on the login button
   Then I am logged in to the platform
    And I logout from the account

Scenario: Request Password Reset using Forgot Password
  Given I am on the verisart login page
   When I click on the forgot password
    And I enter email address 
    And I click on the Submit button
   Then I should see message as "Thank you for contacting us"