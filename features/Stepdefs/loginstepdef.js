import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import LoginPage, { IPT_USERNAME } from '../PageObjects/LoginPage';
import Utils from '../PageObjects/Utilities';
const pages = {
  index: LoginPage,
};

Given(/^I am on the (\w+) Page$/, async (page) => {
  await pages[page].open();
});

When(/^I login with (\w+) and (\w+)$/, async (username, password) => {
  await LoginPage.getUsername.setValue(username);
  await Utils.highlightById(IPT_USERNAME);
  await LoginPage.getPassword.setValue(password);
  await LoginPage.submitBtn.click();
});

Then(/^I should see "([^"]*)" page$/, async (args1) => {
  await browser.pause(1000);
  console.log(await browser.getTitle());
  expect(await browser.getUrl()).to.contains('SearchHotel');
});
