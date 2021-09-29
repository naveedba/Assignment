package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import cucumber.api.java.en.Then;

public class HomePage {
	
	@FindBy(xpath="(//a[text()='Spend & Save'])[1]")
	WebElement mnuSpendAndSave;
	
	@FindBy(xpath="(//h3[text()='Aspiration'])[1]")
	WebElement productAspiration;
	
	@FindBy(xpath="(//h3[text()='Aspiration Plus'])[1]")
	WebElement productAspirationPlus;
	
	@FindBy(xpath="(//button[text()='Get Started'])[4]")
	WebElement signupGetStartedMenu;
	
	@FindBy(xpath="//input[contains(@mode,'light')]")
	WebElement inputEmail;
	
	@FindBy(xpath="//button[@data-id='signup-cta-modal']")
	WebElement btnGetStarted;
	
	WebDriver driver;
	public HomePage(WebDriver driver) {
		PageFactory.initElements(driver, this);
		this.driver=driver;
	}
	
	public void isSpendAndSaveDisplayed() {
		Assert.assertTrue(mnuSpendAndSave.isDisplayed());
	}
	
	public void verifyAspirationAndAspirationPlusMenuDislayed() {
		Assert.assertTrue(productAspiration.isDisplayed());
		Assert.assertTrue(productAspirationPlus.isDisplayed());
	}
	
	public void clickUsingJavaScript(WebElement element) {
		JavascriptExecutor executor = (JavascriptExecutor)driver;
		executor.executeScript("arguments[0].click();", element);
	}
	
	public void clickAspirationPlus() {
		clickUsingJavaScript(productAspirationPlus);
	}
	

	
	public void verifySignupOptionafterSelectingAspirationPlus() {
		clickAspirationPlus();
		Assert.assertTrue(signupGetStartedMenu.isDisplayed());
	}
	
	public void setEmail(String email) {
		inputEmail.sendKeys(email);
	}

	public void clickGetStarted() {
		clickUsingJavaScript(btnGetStarted);
	}
	
	public void verifyMonthlyPlan(String monthlyPlanTxt) {
		WebElement changePlanElement = driver.findElement(By.xpath("//label[@color='blues.shower']"));
		clickUsingJavaScript(changePlanElement);
		WebElement elementMonthlyplan = driver.findElement(By.xpath("//h5[text()='Monthly Plan']/following::p[1][contains(text(),'$"+monthlyPlanTxt+"/mo.')]"));
		Assert.assertTrue(elementMonthlyplan.isDisplayed());
	}
	
	public void verifyYearlyPlan(String annualPlanTxt) {
		WebElement elementYearlyplan = driver.findElement(By.xpath("//h5[text()='Annual Plan']/following::p[1][contains(text(),'$"+annualPlanTxt+"/mo.')]"));
		Assert.assertTrue(elementYearlyplan.isDisplayed());
	}
	
	
}
