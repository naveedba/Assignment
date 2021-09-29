Feature: Verification Of Plan Details and People Api 

Scenario: Verification Of Plan Details and People Api 

Given user is on home Page
Then Verify SPEND and SAVE menu is appears on home page
And Verify the Aspiration and Aspiration Plus products available
And Select Aspiration menu and verify Signup option is appears
And Verify Prices of monthly and yearly plan
Then Close the browser


Scenario: Verification Of People Api returns response as 200
Given verify People Api returns 200 as response code


Scenario Outline: Verify that height is greater than 200
Given Verify that the total number of people "<total>" where height is greater than two hundred
Examples:
|total|
|10|


@smoke
Scenario Outline: Verify the 10 individual People
Given Verify that following is the ten "<people>" returned By Api
Examples:
|people|
|Darth Vader,Chewbacca,Roos Tarpals,Rugor Nass,Yarael Poof,Lama Su,Tuan Wu,Grievous,Tarfful,Tion Medon|
	
		