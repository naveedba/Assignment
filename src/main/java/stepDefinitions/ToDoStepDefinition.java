package stepDefinitions;

import java.net.URL;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.modal.people.Root;
import com.beust.jcommander.internal.Lists;
import com.fasterxml.jackson.annotation.JsonProperty; 

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;

import api.PeopleApi;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import pages.HomePage;

public class ToDoStepDefinition {

	WebDriver driver;
	public static String status = "failed";
	HomePage obj = new HomePage(driver);
	
	@Given("^user is on home Page$")
	public void user_already_on_home_page() throws Exception {
		WebDriverManager.firefoxdriver().setup();
		driver=new FirefoxDriver();
		driver.get(Configuration.readConfig("url"));
		driver.manage().window().maximize();
	}
	
	
	@Then("^Verify SPEND and SAVE menu is appears on home page$")
	public void verify_SPEND_and_SAVE_menu_is_appears_on_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		obj = new HomePage(driver);
		obj.isSpendAndSaveDisplayed();
	}

	@Then("^Verify the Aspiration and Aspiration Plus products available$")
	public void verify_the_Aspiration_and_Aspiration_Plus_products_available() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		obj = new HomePage(driver);
		obj.verifyAspirationAndAspirationPlusMenuDislayed();
	}

	@Then("^Select Aspiration menu and verify Signup option is appears$")
	public void select_Aspiration_menu_and_verify_Signup_option_is_appears() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		obj = new HomePage(driver);
		obj.verifySignupOptionafterSelectingAspirationPlus();
	}

	@Then("^Verify Prices of monthly and yearly plan$")
	public void verify_Prices_of_monthly_and_yearly_plan() throws Throwable {
		obj = new HomePage(driver);
		obj.setEmail("test@test.com");
		obj.clickGetStarted();
		obj.verifyYearlyPlan("5.99");
		obj.verifyMonthlyPlan("7.99");
	}

	@Then("^Close the browser$")
	public void close_the_browser() {
		driver.quit();
	}
	
	@Then("^verify People Api returns (\\d+) as response code$")
	public void verify_People_Api_returns_as_response_code(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   PeopleApi.getAllPeople("people");
	}
	
	@Then("^Verify that the total number of people \"([^\"]*)\" where height is greater than two hundred$")
	public void verify_that_the_total_number_of_people_where_height_is_greater_than_two_hundred(String height) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		ObjectMapper om = new ObjectMapper();
		String responseString = PeopleApi.getAllPeople("people");
		Root root = om.readValue(responseString, Root.class); 
		
		int count = 0;
		for(int i=0;i<root.results.size();i++) {
			if(Integer.parseInt(root.results.get(i).height)>200) {
				count++;
			}
		}
		
		System.out.println(count);
		Assert.assertEquals(count,Integer.parseInt(height));
		
	}
	
	@Then("^Verify that following is the ten \"([^\"]*)\" returned By Api$")
	public void verify_that_following_is_the_ten_returned_By_Api(String name) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		ObjectMapper om = new ObjectMapper();
		String responseString = PeopleApi.getAllPeople("people");
		Root root = om.readValue(responseString, Root.class); 
		List<String> nameList = new ArrayList<String>();
		
		for(int i=0;i<root.results.size();i++) {
			nameList.add(root.results.get(i).name);
			if(i==9)
				break;
		}
		
		String nameArray[] =  name.split(",");
		List<String> inputList  =  Lists.newArrayList(nameArray);
		Collections.sort(inputList);
		Collections.sort(nameList);
		Assert.assertEquals(nameList, inputList);
		
	}


}
