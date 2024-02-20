import { Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import loginPage from '../page-objects/login.page.js';

Then('I see a message {string}', async function(message) {
    // const flashMessage = await $("#flash");
    // console.log(await flashMessage.getText());
    await expect(loginPage.flashMessage).toHaveText(expect.stringContaining(message));
});

Then('I see a text {string}', async function(text) {
    // const message = await $("#finish h4");
    // await expect(message).toHaveText(expect.stringContaining(message));

    // const message = await $(`//h4[text()="${text}"]`);
    await expect(loginPage.textMessage(text)).toBeDisplayed();
});
