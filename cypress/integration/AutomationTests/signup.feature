Feature: Signup

Scenario: Verify Request InviteCode
  Given I am on the verisart Join Page
   When I click on the Request Invite 
    And I enter email address
    And I click on the Request Invite Button
   Then I should see message as "Thank you for contacting us"