import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

When("I press the Start button", async function() {
    await $('#start button').click();
});
