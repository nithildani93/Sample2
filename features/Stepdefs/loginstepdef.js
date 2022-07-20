import { Given,When,Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import LoginPage, {IPT_USERNAME} from "../PageObjects/LoginPage";
import Utils from "../PageObjects/Utilities";
const pages = {
	index: LoginPage,	
};

Given(/^I am on the (\w+) Page$/, async(page) => {
	await pages[page].open();
});

When(/^I login with (\w+) and (\w+)$/, async(username, password) => {
	await (LoginPage.getusername).setValue(username);
	await (LoginPage.getpassword).setValue(password);
	await LoginPage.submitbtn.click();
});

Then(/^I should see "([^"]*)" page$/, async(args1) => {
	await browser.pause(1000);
	console.log(await browser.getTitle());
	expect(await browser.getUrl()).to.contains("SearchHotel");
	
});



