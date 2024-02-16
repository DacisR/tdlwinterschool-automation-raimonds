import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await browser.url(`https://the-internet.herokuapp.com/${page}`);
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await $('#username').setValue(username);
//     await $('#password').setValue(password);
//     await $('button[type="submit"]').click();
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect($('#flash')).toBeExisting();
//     await expect($('#flash')).toHaveTextContaining(message);
// });

Given('I am on Login page', async function() {
    await browser.navigateTo("https://the-internet.herokuapp.com/login");
});

When('I enter "tomsmith" username', async function() {
    await $('#username').setValue("tomsmith");
});

When('I enter "foobar" username', async function() {
    await $('#username').setValue("foobar");
});

When('I enter "SuperSecretPassword!" password', async function() {
    const passwordInput = await $("#password");
    passwordInput.setValue("SuperSecretPassword!");
});

When('I enter "barfoo" password', async function() {
    const passwordInput = await $("#password");
    passwordInput.setValue("barfoo");
});

When('I press on Login button', async function() {
    const button = await $("button[type=submit]");
    button.click();
});

Then('I see a message "You logged into a secure area!"', async function() {
    const flashMessage = await $("#flash");
    // console.log(await flashMessage.getText());
    await expect(flashMessage).toHaveText(expect.stringContaining("You logged into a secure area!"));
});

Then('I see a message "Your username is invalid!"', async function() {
    const flashMessage = await $("#flash");
    // console.log(await flashMessage.getText());
    await expect(flashMessage).toHaveText(expect.stringContaining("Your username is invalid!"));
});

Then('I see the Logout button', async function() {
    const logoutButton = await $("i*=Logout");
    await expect(logoutButton).toBeDisplayed();
});

Then("I don't see the Logout button", async function() {
    const logoutButton = await $("i*=Logout");
    await expect(logoutButton).not.toBeDisplayed();
});
