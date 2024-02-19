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

When('I enter {string} username', async function(username) {
    await $('#username').setValue(username);
});

When('I enter {string} password', async function(password) {
    const passwordInput = await $("#password");
    await passwordInput.setValue(password);
});

When('I press on Login button', async function() {
    const button = await $("button[type=submit]");
    await button.click();
});

Then('I see a message {string}', async function(message) {
    const flashMessage = await $("#flash");
    // console.log(await flashMessage.getText());
    await expect(flashMessage).toHaveText(expect.stringContaining(message));
});

Then('I {word} see the Logout button', async function(visibility) {
    if (visibility === "do") {
        await expect($("i*=Logout")).toBeDisplayed();
    }
    else if (visibility === "don't") {
        await expect($("i*=Logout")).not.toBeDisplayed();
    }
    else {
        throw Error(`Visibility ${visibility} not supported.`);
    }
});
