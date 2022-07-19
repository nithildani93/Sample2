Feature: Test the Login Functionality of Adactin app

    Scenario Outline: As a valid user I Should be able to login
        Given I am on the index Page
        When I login with <username> and <password>
        Then I should see "SearchHotel" page
        Examples:
            | username   | password |
            | nithildani | 4LW73C   |
