package Automation.TestNG;

import org.testng.annotations.Test;

import org.testng.annotations.BeforeClass;

import java.util.HashMap;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.AfterClass;
import com.UIAutomation.excelread.Excel_Reader;
public class NewTest {
 
@Test
  public void f() throws Exception {
	  String  skuTestScenario="Verify and Add a staff member into the system and collect fees for a pending invoice";
	  String loginFilePath = System.getProperty("user.dir") + "\\TestData\\Login.xlsx";
	  HashMap<Object, Object> keyValuePair = new HashMap<Object, Object>();
	  keyValuePair = (HashMap<Object, Object>) Excel_Reader.getrowvalue(loginFilePath, "Sheet1", skuTestScenario);
	  System.setProperty("webdriver.chrome.driver", "C:\\Users\\1025604\\eclipse-workspace\\TestNG\\src\\main\\resources\\drivers\\chromedriver.exe");
      WebDriver driver = new ChromeDriver();
      driver.get("https://staging3-akes.nexquare.io/nexquare/");
      driver.manage().window().maximize();
      
      String username = keyValuePair.get("username").toString();
      String password = keyValuePair.get("password").toString();
      driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys(username);
      driver.findElement(By.xpath("//input[@id='txtpassword']")).sendKeys(password);
	  driver.findElement(By.xpath("//button[text()='Login']")).click();
	  Thread.sleep(10000);
	  driver.findElement(By.xpath("(//a[contains(text(),'Dashboard')])[2]")).isDisplayed();
	  Thread.sleep(3000);
	  driver.findElement(By.xpath("//span[text()='Staff Profile Management ']")).click();
	  Thread.sleep(5000);
	  driver.findElement(By.xpath("//a[contains(text(),' Staff Add')]")).click();
	  Excel_Reader.wait5Seconds();
	  String number=Excel_Reader.Random_NumberGenerator(5);
	  driver.findElement(By.xpath("//input[@id='staffRegNo']")).sendKeys(number);
	  
	  String name=Excel_Reader.Random_StringGenerator(5);
	  driver.findElement(By.xpath("//input[@id='staffFullName']")).sendKeys(name);
	  driver.findElement(By.xpath("//label[contains(text(),'User Type')]//following::input[1]")).click();
	  driver.findElement(By.xpath("//li/span[contains(text(),'Employee Staff ')]")).click();
	  driver.findElement(By.xpath("//input[@name='staffDateOfBirth']")).click();
	  driver.findElement(By.xpath("//select[@class='ui-datepicker-year browser-default']")).click();
	  driver.findElement(By.xpath("//option[@value='1943']")).click();
	  
	  String currentdate=Excel_Reader.currentdate();
	  driver.findElement(By.xpath("//a[text()='"+currentdate+"']")).click();
	  driver.findElement(By.xpath("//input[@id='joinDate']")).click();
	  driver.findElement(By.xpath("//a[contains(text(),'"+currentdate+"')]")).click();
	  driver.findElement(By.xpath("//input[@id='email']")).sendKeys(name+"@gmail.com");
	  driver.findElement(By.xpath("//input[@id='salaryStartDate']")).click();
	  driver.findElement(By.xpath("//a[text()='"+currentdate+"']")).click();
	  driver.findElement(By.xpath("//button[@id='submitButton']")).click();
	  Thread.sleep(10000);
	  driver.findElement(By.xpath("(//a[text()='Personal Details'])[1]")).click();
	  Thread.sleep(5000);
	  String str=driver.findElement(By.xpath("//label[text()='Full Name']//following::input[1]")).getAttribute("value");
	  if (str.contains(name)) {
		  System.out.println("profile created");
	}else {
		 System.out.println("profile creation failed");
	}
	  driver.findElement(By.xpath("//span[text()='Fee Configuration']")).click();
	  Thread.sleep(10000);
	  driver.findElement(By.xpath("//span[text()='Fee Collection']")).isDisplayed();
	  String stdnumber = keyValuePair.get("stdnumber").toString();
	  driver.findElement(By.xpath("//input[@placeholder='Global Student Search']")).sendKeys(stdnumber);
	  
	  driver.findElement(By.xpath("//mat-icon[text()='close']//preceding::span[1]")).click();
	  Thread.sleep(10000);
	  String stdname = keyValuePair.get("stdname").toString();
	  driver.findElement(By.xpath("//td[text()='"+stdname+"']")).isDisplayed();
	
	  WebElement l =driver.findElement(By.xpath("//mat-panel-title[contains(text(),'General')]//following::div[1]"));
	  JavascriptExecutor j = (JavascriptExecutor) driver;
	  j.executeScript("arguments[0].click();", l);
	  Thread.sleep(3000);
	  driver.findElement(By.xpath("//input[@name='paymentAmount']")).clear();
	  String price = keyValuePair.get("price").toString();
	  Thread.sleep(2000);
	  driver.findElement(By.xpath("//input[@name='paymentAmount']")).sendKeys(price);
	  Thread.sleep(5000);
	  WebElement l1 =driver.findElement(By.xpath("//span[text()='Payment Mode']"));
	  //j.executeScript("arguments[0].click();", l1);
	  Actions a=new Actions(driver);
	  a.doubleClick(l1).build().perform();
	  driver.findElement(By.xpath("//span[text()='Payment Mode']")).click();
	  Thread.sleep(5000);
	  driver.findElement(By.xpath("//span[text()=' Cash ']")).click();
	  driver.findElement(By.xpath("//span[text()='Pay']")).click();
	  Thread.sleep(10000);
	  driver.findElement(By.xpath("/html/body/app-root/app-loader/div")).isDisplayed();
  }
  @BeforeClass
  public void beforeClass() {
  }

  @AfterClass
  public void afterClass() {
  }

}
