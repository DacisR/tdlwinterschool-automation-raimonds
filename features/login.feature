# Feature: The Internet Guinea Pig Website
#   Scenario Outline: As a user, I can log into the secure area
#     Given I am on the login page
#     When I login with <username> and <password>
#     Then I should see a flash message saying <message>
#     Examples:
#       | username | password             | message                        |
#       | tomsmith | SuperSecretPassword! | You logged into a secure area! |
#       | foobar   | barfoo               | Your username is invalid!      |
Feature: Login

  Scenario Outline: Log in using username and password
    Given I am on login page
    When I enter <username> username
    And I enter <password> password
    And I press on Login button
    Then I see a message <message>
    And I <visibility> see the Logout button

    Examples: 
      | username   | password               | message                          | visibility |
      | "tomsmith" | "SuperSecretPassword!" | "You logged into a secure area!" | do         |
      | "foobar"   | "barfoo"               | "Your username is invalid!"      | don't      |
