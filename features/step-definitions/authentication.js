import { When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'
import loginPage from '../page-objects/login.page.js';
import AllureReporter from '@wdio/allure-reporter';

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

When('I enter {string} username', async function(username) {
    AllureReporter.addArgument('username', username);
    await loginPage.usernameInput.setValue(username);
});

When('I enter {string} password', async function(password) {
    // const passwordInput = await $("#password");
    await loginPage.passwordInput.setValue(password);
});

When('I press on Login button', async function() {
    //const button = await $("button[type=submit]");
    await loginPage.loginButton.click();
});

Then('I {word} see the Logout button', async function(visibility) {
    if (visibility === "do") {
        await expect(loginPage.logoutButton).toBeDisplayed();
    }
    else if (visibility === "don't") {
        await expect(loginPage.logoutButton).not.toBeDisplayed();
    }
    else {
        throw Error(`Visibility ${visibility} not supported.`);
    }
});
