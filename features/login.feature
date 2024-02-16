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

  Scenario: Successfully log in with valid username and password

    Given I am on Login page
    When I enter "tomsmith" username
    And I enter "SuperSecretPassword!" password
    And I press on Login button
    Then I see a message "You logged into a secure area!"
    And I see the Logout button

  Scenario: Cannot log in with invalid username and password

    Given I am on Login page
    When I enter "foobar" username
    And I enter "barfoo" password
    And I press on Login button
    Then I see a message "Your username is invalid!"
    And I don't see the Logout button
