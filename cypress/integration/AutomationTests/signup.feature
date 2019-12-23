Feature: Signup

Scenario: Verify Request InviteCode
  Given I am on the verisart Join Page
   When I click on the Request Invite 
    And I enter email address
    And I click on the Request Invite Button
   Then I should see message as "Thank you for contacting us"

Scenario: Signup with Email
  Given I am on the verisart Join Page
  Given I enter the Invite code as "Leaders" 
    And I press Next Button on Join Page
    And I enter the email as "test@verisart.com"
    And I enter the password as "Password123"
    And I press Next Button on account
    And I enter Name on the Profile
    And I upload signature
   When I save the Profile
   Then I see the confirmation
