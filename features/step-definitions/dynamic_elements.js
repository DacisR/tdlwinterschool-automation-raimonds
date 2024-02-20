import { When } from '@wdio/cucumber-framework';
import dynamicElementsPage from '../page-objects/dynamic_elements.page.js';

When("I press the Start button", async function() {
    await dynamicElementsPage.startButton.click();
});
