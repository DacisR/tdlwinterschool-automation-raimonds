import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

Given('I am on {word} page', async function(page) {
    await browser.navigateTo(`https://the-internet.herokuapp.com/${page}`);
});
